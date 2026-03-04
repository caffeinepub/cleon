import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    submitted: Time;
    name: string;
    email: string;
    message: string;
}
export interface NewsletterSubscriber {
    email: string;
    subscribed: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllLeads(): Promise<Array<Lead>>;
    getSubscribers(): Promise<Array<NewsletterSubscriber>>;
    submitLead(name: string, email: string, message: string): Promise<void>;
    subscribeNewsletter(email: string): Promise<void>;
}
