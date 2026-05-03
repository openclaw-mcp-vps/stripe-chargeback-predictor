import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Chargeback Predictor – Predict chargebacks before they happen",
  description: "Analyzes transaction patterns to predict which payments will likely become chargebacks, allowing merchants to proactively refund suspicious orders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a4db5392-44c3-4da8-951c-8b3e29cd82dd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
