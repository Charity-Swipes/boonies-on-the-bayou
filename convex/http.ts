import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

// Handle reservation form submissions from the website
http.route({
  path: "/reservation",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.json();

    // Validate required fields
    const { name, phone, date, time, guests } = body;
    if (!name || !phone || !date || !time || !guests) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Store the reservation
    const id = await ctx.runMutation(api.reservations.create, {
      name: body.name,
      phone: body.phone,
      date: body.date,
      time: body.time,
      guests: body.guests,
      email: body.email || undefined,
      notes: body.notes || undefined,
      submittedAt: body.submittedAt || new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, id }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }),
});

// Handle CORS preflight requests
http.route({
  path: "/reservation",
  method: "OPTIONS",
  handler: httpAction(async () => {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }),
});

// Health check endpoint
http.route({
  path: "/health",
  method: "GET",
  handler: httpAction(async () => {
    return new Response(
      JSON.stringify({ status: "ok", service: "Boonies on the Bayou" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }),
});

export default http;
