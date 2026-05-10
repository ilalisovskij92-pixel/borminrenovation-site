// Lightweight type stubs for @vercel/analytics and @vercel/speed-insights.
// On Vercel build, npm install pulls real types and overrides these.

declare module "@vercel/analytics/next" {
  import type { ComponentType } from "react";
  export const Analytics: ComponentType<Record<string, unknown>>;
}

declare module "@vercel/speed-insights/next" {
  import type { ComponentType } from "react";
  export const SpeedInsights: ComponentType<Record<string, unknown>>;
}
