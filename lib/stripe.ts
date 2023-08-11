import Stripe from "stripe";

export const stripe = new Stripe(process.env.SRTIPE_API_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});
