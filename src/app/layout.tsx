import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerPath AI | Skills-to-Jobs for Tier-2 & Tier-3 Youth (SDG 8)",
  description:
    "Empowering youth in Tier-2 and Tier-3 cities with AI-guided career pathways, local job matching, and 3-step learning roadmaps. Aligned with UN Sustainable Development Goal 8.",
  keywords: [
    "CareerPath AI",
    "SDG 8",
    "Decent Work and Economic Growth",
    "Tier 2 Tier 3 jobs",
    "Skill predictor",
    "Youth employment India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
