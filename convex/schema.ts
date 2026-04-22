import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  reservations: defineTable({
    name: v.string(),
    phone: v.string(),
    date: v.string(),
    time: v.string(),
    guests: v.string(),
    email: v.optional(v.string()),
    notes: v.optional(v.string()),
    submittedAt: v.string(),
    status: v.optional(v.string()), // "pending", "confirmed", "cancelled"
  }).index("by_date", ["date"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    submittedAt: v.string(),
  }),
});
