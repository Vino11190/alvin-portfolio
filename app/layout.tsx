import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alvinnewmansamuels.co.uk"),

  title: {
    default: "Alvin Newman-Samuels | AI, Data & Digital Solutions",
    template: "%s | Alvin Newman-Samuels",
  },

  description:
    "Portfolio of Alvin Newman-Samuels, a Computer Science professional building AI, automation, data analytics, machine learning and digital solutions using Python, Microsoft Power Platform, Copilot Studio and modern software technologies.",

  keywords: [
    "Alvin Newman-Samuels",
    "AI Engineer",
    "AI Automation Engineer",
    "Automation Engineer",
    "Data Analyst",
    "Data Engineer",
    "Software Engineer",
    "Computer Science",
    "Generative AI",
    "Artificial Intelligence",
    "RAG",
    "AI Agents",
    "Microsoft Copilot Studio",
    "Microsoft Power Platform",
    "Power Automate",
    "Power Apps",
    "Dataverse",
    "Power BI",
    "Python",
    "SQL",
    "Machine Learning",
    "Next.js",
    "TypeScript",
  ],

  authors: [
    {
      name: "Alvin Newman-Samuels",
      url: "https://alvinnewmansamuels.co.uk",
    },
  ],

  creator: "Alvin Newman-Samuels",
  publisher: "Alvin Newman-Samuels",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Alvin Newman-Samuels | AI, Data & Digital Solutions",
    description:
      "Explore my work across artificial intelligence, automation, data analytics, machine learning and digital solutions.",
    url: "https://alvinnewmansamuels.co.uk",
    siteName: "Alvin Newman-Samuels Portfolio",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alvin Newman-Samuels | AI, Data & Digital Solutions",
    description:
      "AI, automation, data analytics, machine learning and digital solutions portfolio.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
