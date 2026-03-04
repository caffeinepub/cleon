import Text "mo:core/Text";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type Lead = {
    name : Text;
    email : Text;
    message : Text;
    submitted : Time.Time;
  };

  module Lead {
    public func compare(lead1 : Lead, lead2 : Lead) : Order.Order {
      Int.compare(lead1.submitted, lead2.submitted);
    };
  };

  type NewsletterSubscriber = {
    email : Text;
    subscribed : Time.Time;
  };

  module NewsletterSubscriber {
    public func compare(subscriber1 : NewsletterSubscriber, subscriber2 : NewsletterSubscriber) : Order.Order {
      Int.compare(subscriber1.subscribed, subscriber2.subscribed);
    };
  };

  let leads = Map.empty<Time.Time, Lead>();
  let newsletterSubscribers = Map.empty<Text, NewsletterSubscriber>();

  public shared ({ caller }) func subscribeNewsletter(email : Text) : async () {
    if (newsletterSubscribers.containsKey(email)) { Runtime.trap("Email is already subscribed to the newsletter.") };

    let newSubscriber : NewsletterSubscriber = {
      email;
      subscribed = Time.now();
    };

    newsletterSubscribers.add(email, newSubscriber);
  };

  public query ({ caller }) func getSubscribers() : async [NewsletterSubscriber] {
    newsletterSubscribers.values().toArray().sort();
  };

  public shared ({ caller }) func submitLead(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let newLead : Lead = {
      name;
      email;
      message;
      submitted = timestamp;
    };

    leads.add(timestamp, newLead);
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    leads.values().toArray().sort();
  };
};
