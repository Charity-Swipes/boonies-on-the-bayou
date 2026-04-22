import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    date: v.string(),
    time: v.string(),
    guests: v.string(),
    email: v.optional(v.string()),
    notes: v.optional(v.string()),
    submittedAt: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("reservations", {
      ...args,
      status: "pending",
    });
    return id;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("reservations")
      .order("desc")
      .take(100);
  },
});

export const getByDate = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("reservations")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("reservations"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});
