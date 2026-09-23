import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alvin Newman-Samuels | AI, Data & Digital Solutions",
    template: "%s | Alvin Newman-Samuels",
  },

  description:
    "Portfolio of Alvin Newman-Samuels, a Computer Science professional building AI, automation, data analytics, machine learning and digital solutions.",

  keywords: [
    "Alvin Newman-Samuels",
    "AI Engineer",
    "Automation Engineer",
    "Data Analyst",
    "Data Engineer",
    "Software Engineer",
    "Microsoft Copilot Studio",
    "Power Platform",
    "Power Automate",
    "Power BI",
    "Python",
    "Machine Learning",
    "Generative AI",
    "RAG",
  ],

  authors: [
    {
      name: "Alvin Newman-Samuels",
    },
  ],

  creator: "Alvin Newman-Samuels",

  openGraph: {
    title: "Alvin Newman-Samuels | AI, Data & Digital Solutions",
    description:
      "AI, automation, data analytics, machine learning and digital solutions portfolio.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}