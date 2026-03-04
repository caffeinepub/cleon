import { useEffect, useRef } from "react";

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  isBull: boolean;
}

const candles: Candle[] = [
  { x: 0, open: 60, close: 75, high: 80, low: 55, isBull: true },
  { x: 1, open: 75, close: 65, high: 78, low: 62, isBull: false },
  { x: 2, open: 65, close: 85, high: 90, low: 63, isBull: true },
  { x: 3, open: 85, close: 78, high: 88, low: 72, isBull: false },
  { x: 4, open: 78, close: 95, high: 100, low: 75, isBull: true },
  { x: 5, open: 95, close: 88, high: 98, low: 82, isBull: false },
  { x: 6, open: 88, close: 105, high: 110, low: 86, isBull: true },
  { x: 7, open: 105, close: 98, high: 108, low: 92, isBull: false },
  { x: 8, open: 98, close: 118, high: 122, low: 96, isBull: true },
  { x: 9, open: 118, close: 108, high: 120, low: 104, isBull: false },
  { x: 10, open: 108, close: 125, high: 130, low: 106, isBull: true },
  { x: 11, open: 125, close: 140, high: 145, low: 122, isBull: true },
];

export default function CandlestickChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Clear
    ctx.clearRect(0, 0, W, H);

    // Grid lines
    ctx.strokeStyle = "oklch(0.22 0.03 255 / 0.4)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = (H / 5) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Calculate scaling
    const padding = 20;
    const chartW = W - padding * 2;
    const chartH = H - padding * 2;
    const candleW = chartW / candles.length;

    const minVal = Math.min(...candles.map((c) => c.low));
    const maxVal = Math.max(...candles.map((c) => c.high));
    const range = maxVal - minVal;

    const scaleY = (v: number) => H - padding - ((v - minVal) / range) * chartH;

    // Draw area fill under close line
    ctx.beginPath();
    ctx.moveTo(padding + candleW * 0.5, scaleY(candles[0].close));
    candles.forEach((c, i) => {
      ctx.lineTo(padding + candleW * i + candleW * 0.5, scaleY(c.close));
    });
    ctx.lineTo(padding + candleW * (candles.length - 0.5), H);
    ctx.lineTo(padding, H);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "oklch(0.72 0.19 210 / 0.15)");
    grad.addColorStop(1, "oklch(0.72 0.19 210 / 0.0)");
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw candles
    candles.forEach((c, i) => {
      const cx = padding + candleW * i + candleW * 0.5;
      const bodyW = candleW * 0.55;
      const openY = scaleY(c.open);
      const closeY = scaleY(c.close);
      const highY = scaleY(c.high);
      const lowY = scaleY(c.low);

      const color = c.isBull ? "#00CFFF" : "#FF4E4E";
      ctx.strokeStyle = color;
      ctx.fillStyle = c.isBull
        ? "oklch(0.72 0.19 210 / 0.7)"
        : "oklch(0.65 0.22 25 / 0.7)";
      ctx.lineWidth = 1.5;

      // Wick
      ctx.beginPath();
      ctx.moveTo(cx, highY);
      ctx.lineTo(cx, lowY);
      ctx.stroke();

      // Body
      const bodyTop = Math.min(openY, closeY);
      const bodyH = Math.abs(openY - closeY);
      ctx.fillRect(cx - bodyW / 2, bodyTop, bodyW, bodyH);
      ctx.strokeRect(cx - bodyW / 2, bodyTop, bodyW, bodyH);
    });

    // MA line (golden)
    ctx.beginPath();
    ctx.strokeStyle = "oklch(0.84 0.155 85 / 0.8)";
    ctx.lineWidth = 2;
    candles.forEach((c, i) => {
      const cx = padding + candleW * i + candleW * 0.5;
      const avg = (c.open + c.close) / 2;
      if (i === 0) ctx.moveTo(cx, scaleY(avg));
      else ctx.lineTo(cx, scaleY(avg));
    });
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={520}
      height={280}
      className="w-full h-full"
      style={{ imageRendering: "crisp-edges" }}
    />
  );
}
