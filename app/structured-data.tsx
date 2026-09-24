export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Alvin Newman-Samuels",

    url: "https://alvinnewmansamuels.co.uk",

    image: "https://alvinnewmansamuels.co.uk/alvin-profile.jpg",

    jobTitle: "AI, Data & Software Engineer",

    description:
      "AI, Data & Software Engineer building practical solutions across artificial intelligence, automation, data analytics, machine learning and software engineering.",

    sameAs: [
      "https://www.linkedin.com/in/alvin-newman-samuels-",
      "https://github.com/Vino11190",
    ],

    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "AI Agents",
      "Retrieval-Augmented Generation",
      "Machine Learning",
      "Data Analytics",
      "Data Engineering",
      "Software Engineering",
      "Python",
      "SQL",
      "Microsoft Copilot Studio",
      "Microsoft Power Platform",
      "Power Automate",
      "Power Apps",
      "Dataverse",
      "Power BI",
      "Next.js",
      "TypeScript",
    ],

    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Anglia Ruskin University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Limkokwing University of Creative Technology",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Fourah Bay College, University of Sierra Leone",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}