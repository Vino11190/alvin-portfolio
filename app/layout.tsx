import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://alvinnewmansamuels.co.uk"),

  title: {
    default: "Alvin Newman-Samuels | AI, Data & Software Engineer",
    template: "%s | Alvin Newman-Samuels",
  },

  description:
    "Portfolio of Alvin Newman-Samuels, an AI, Data & Software Engineer building practical solutions across artificial intelligence, automation, data analytics, machine learning and software engineering.",

  keywords: [
    "Alvin Newman-Samuels",
    "AI Engineer",
    "Data Engineer",
    "Software Engineer",
    "AI Automation Engineer",
    "Data Analyst",
    "Computer Science",
    "Artificial Intelligence",
    "Generative AI",
    "Machine Learning",
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
    title: "Alvin Newman-Samuels | AI, Data & Software Engineer",
    description:
      "Explore my work across artificial intelligence, automation, data analytics, machine learning and software engineering.",
    url: "https://alvinnewmansamuels.co.uk",
    siteName: "Alvin Newman-Samuels Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alvin Newman-Samuels - AI, Data & Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alvin Newman-Samuels | AI, Data & Software Engineer",
    description:
      "Artificial intelligence, automation, data analytics, machine learning and software engineering portfolio.",
    images: ["/opengraph-image.png"],
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
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}