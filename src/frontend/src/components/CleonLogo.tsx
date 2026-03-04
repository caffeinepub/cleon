interface CleonLogoProps {
  onClick?: () => void;
  className?: string;
}

export default function CleonLogo({ onClick, className = "" }: CleonLogoProps) {
  return (
    <button type="button" className={`logo ${className}`} onClick={onClick}>
      CLE<span>ON</span>
      <div className="pulse-wave on">
        <span style={{ height: "4px", animationDelay: "0s" }} />
        <span style={{ height: "9px", animationDelay: ".07s" }} />
        <span style={{ height: "14px", animationDelay: ".14s" }} />
        <span style={{ height: "18px", animationDelay: ".21s" }} />
        <span style={{ height: "11px", animationDelay: ".28s" }} />
        <span style={{ height: "6px", animationDelay: ".35s" }} />
        <span style={{ height: "16px", animationDelay: ".42s" }} />
        <span style={{ height: "20px", animationDelay: ".49s" }} />
        <span style={{ height: "14px", animationDelay: ".56s" }} />
        <span style={{ height: "8px", animationDelay: ".63s" }} />
        <span style={{ height: "5px", animationDelay: ".70s" }} />
        <span style={{ height: "12px", animationDelay: ".77s" }} />
        <span style={{ height: "18px", animationDelay: ".84s" }} />
        <span style={{ height: "16px", animationDelay: ".91s" }} />
        <span style={{ height: "10px", animationDelay: ".98s" }} />
        <span style={{ height: "6px", animationDelay: "1.05s" }} />
        <span style={{ height: "13px", animationDelay: "1.12s" }} />
        <span style={{ height: "19px", animationDelay: "1.19s" }} />
        <span style={{ height: "11px", animationDelay: "1.26s" }} />
        <span style={{ height: "5px", animationDelay: "1.33s" }} />
      </div>
    </button>
  );
}
