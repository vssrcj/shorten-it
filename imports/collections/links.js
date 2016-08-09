import { Mongo } from "meteor/mongo";
import validUrl from "valid-url";
import { check, Match } from "meteor/check";

Meteor.methods({
   "links.insert": (url) => {
      check(url, Match.Where(url => validUrl.isUri(url)));

      let token;

      do {
         token = Math.random().toString(36).slice(-5);
      }
      while(Links.findOne({ token }));

      Links.insert({ url, token, clicks: 0 });
   }
});

export const Links = new Mongo.Collection("Links");
