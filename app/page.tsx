import Image from "next/image";

const experience = [
  {
    role: "AI & Automation Engineer",
    company: "Real People Solutions",
    period: "Jul 2025 – Present",
    description: [
      "Analyse business and user requirements to identify opportunities for AI, automation and digital transformation.",
      "Design and enhance AI-powered conversational agents using Microsoft Copilot Studio, including prompts, generative responses and escalation pathways.",
      "Connect AI solutions to trusted knowledge sources using SharePoint, Dataverse, Microsoft 365, APIs and RAG approaches.",
      "Develop automated workflows using Power Automate, APIs and connectors while applying responsible AI, security and information-governance principles.",
    ],
  },
  {
    role: "Data Analyst / Engineer",
    company: "Lidl GB",
    period: "Jan 2025 – Jun 2025",
    description: [
      "Supported data analysis and reporting activities using structured data to identify trends and support operational decision-making.",
      "Applied analytical and problem-solving techniques to transform information into clear and usable insights.",
      "Worked collaboratively in a fast-paced operational environment while maintaining accuracy, consistency and deadlines.",
    ],
  },
  {
    role: "ICT4D Consultant",
    company: "Catholic Relief Services",
    period: "Jan 2023 – Dec 2024",
    description: [
      "Supported digital systems and technology-enabled business processes within an operational environment.",
      "Investigated application and system issues, identified root causes and implemented or escalated appropriate solutions.",
      "Supported data processing, validation and optimisation activities to improve reliability and operational efficiency.",
      "Worked with technical and non-technical colleagues to understand requirements and support adoption of digital solutions.",
    ],
  },
  {
    role: "IT Support Officer",
    company: "ICAP at Columbia University",
    period: "Jan 2022 – Dec 2022",
    description: [
      "Provided application and systems support while troubleshooting technical issues and assisting users.",
      "Investigated incidents systematically, communicated solutions clearly and escalated complex issues when appropriate.",
      "Supported reliable digital services through user assistance, technical diagnostics and problem resolution.",
    ],
  },
];

const education = [
  {
    degree: "MSc Computer Science",
    institution: "Anglia Ruskin University",
    period: "Jan 2025 – May 2026",
  },
  {
    degree: "BSc Software Engineering with Multimedia",
    institution: "Limkokwing University of Technology",
    period: "Sep 2016 – Feb 2022",
  },
  {
    degree: "B.A. History and Sociology",
    institution: "Fourah Bay College, University of Sierra Leone",
    period: "2012 – 2016",
  },
];

const capabilities = [
  {
    title: "AI & Automation",
    skills: [
      "Generative AI",
      "Microsoft Copilot Studio",
      "RAG & AI Agents",
      "Power Automate",
      "Dataverse",
      "Responsible AI",
    ],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      "Python",
      "SQL",
      "Pandas & NumPy",
      "Power BI",
      "Machine Learning",
      "TensorFlow / Keras",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "TypeScript / JavaScript",
      "Next.js / React",
      "REST APIs",
      "Django",
      "Git / GitHub",
      "Docker",
    ],
  },
];

const projects = [
  {
    featured: "Featured AI & Automation Project",
    title: "Civic System",
    subtitle: "AI Council Services Assistant",
    description:
      "An independent public-sector AI prototype designed to demonstrate how residents could access grounded council-service information, complete controlled service actions and escalate to human support through a conversational interface.",
    highlights: [
      "22-document grounded knowledge base",
      "RAG-based service information retrieval",
      "Power Automate service-request workflows",
      "Dataverse request persistence",
      "Human-support escalation pathway",
      "23/23 defined prototype test scenarios passed",
    ],
    technologies: [
      "Copilot Studio",
      "Generative AI",
      "RAG",
      "Power Automate",
      "Dataverse",
      "Power Apps",
    ],
    image: "/civic-system-preview.png",
    imageAlt:
      "Civic System prototype running in Microsoft Copilot Studio and responding to a resident rubbish-reporting enquiry",
    github:
      "https://github.com/Vino11190/civic-system-ai-council-services",
  },
  {
    featured: "Data & Analytics Project",
    title: "ASC Neighbourhood Intelligence",
    subtitle: "Adult Social Care Demand & Strategic Analytics",
    description:
      "A neighbourhood intelligence solution integrating population, deprivation and Adult Social Care data to identify geographical demand, inequality and emerging service pressures for evidence-led planning.",
    highlights: [
      "1,355 referrals analysed",
      "Highest neighbourhood rate: 285.7 per 1,000",
      "1.34× referral-rate difference by deprivation",
      "24-month demand trend analysed",
      "13.9% projected 12-month increase",
      "Interactive Power BI decision-support dashboard",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Power BI",
      "Data Integration",
      "Forecasting",
      "Analytics",
    ],
    image: "/asc-neighbourhood-dashboard.png",
    imageAlt:
      "Adult Social Care Neighbourhood Intelligence Power BI dashboard showing Southampton referral rates and executive summary",
    github: "",
  },
  {
    featured: "Machine Learning Project",
    title: "Multi-Asset Financial Forecasting",
    subtitle: "Machine Learning & Deep Learning",
    description:
      "A postgraduate machine-learning project developing and evaluating forecasting pipelines across multiple financial asset classes using engineered time-series features, classical machine learning and deep-learning architectures.",
    highlights: [
      "Multi-asset financial time-series pipeline",
      "Feature engineering and preprocessing",
      "Classical ML and deep-learning comparison",
      "CNN and recurrent neural-network architectures",
      "Model evaluation against baseline behaviour",
      "Trading-performance and risk analysis",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "LSTM",
      "Machine Learning",
    ],
    image: "/financial-forecasting-results.png",
    imageAlt:
      "LSTM model strategy compared with a buy-and-hold baseline in the financial forecasting project",
    github: "",
  },
];

export default function Home() {
  return (
    <main>
      <a href="#main-content" className="skipLink">
        Skip to content
      </a>

      {/* NAVIGATION */}

      <header className="navbar">
        <a
          href="#home"
          className="logo"
          aria-label="Alvin Newman-Samuels home"
        >
          AN
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="#about">
            <span>01.</span> About
          </a>

          <a href="#projects">
            <span>02.</span> Projects
          </a>

          <a href="#experience">
            <span>03.</span> Experience
          </a>

          <a href="#contact">
            <span>04.</span> Contact
          </a>

          <a
            href="/Alvin-Newman-Samuels-CV.pdf"
            className="resumeButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>

      <div id="main-content">
        {/* HERO */}

        <section id="home" className="hero">
          <div className="heroContent heroEntrance">
            <p className="intro">Hi, my name is</p>

            <h1>Alvin Newman-Samuels.</h1>

            <h2>AI, Data &amp; Software Engineer.</h2>

            <p className="heroDescription">
              I build practical AI, automation, data and software solutions
              that turn complex requirements into reliable, user-focused
              digital products.
            </p>

            <div className="heroActions">
              <a href="#projects" className="primaryButton">
                View My Work
              </a>

              <a
                href="/Alvin-Newman-Samuels-CV.pdf"
                className="secondaryButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="portraitWrapper portraitEntrance">
            <div className="portraitFrame">
              <Image
                src="/alvin-profile.jpg"
                alt="Portrait of Alvin Newman-Samuels"
                width={520}
                height={650}
                priority
                className="portrait"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" className="aboutSection">
          <div className="sectionHeading">
            <h2>
              <span>01.</span> About Me
            </h2>

            <div className="headingLine"></div>
          </div>

          <div className="aboutContent">
            <div className="aboutText">
              <p>
                I&apos;m an AI, Data &amp; Software Engineer with an MSc in
                Computer Science and a background in software engineering,
                building practical solutions across artificial intelligence,
                automation, data analytics and software development.
              </p>

              <p>
                My work spans AI-enabled systems, data engineering, analytics,
                machine learning and digital solutions. I enjoy translating
                complex technical and business requirements into solutions
                that are useful, understandable and technically robust.
              </p>

              <p>
                Recently, I&apos;ve been developing AI and data-driven projects
                using technologies such as Microsoft Copilot Studio, Power
                Platform, Python and machine learning. My projects include an
                AI-powered council services assistant, neighbourhood
                intelligence analytics and multi-asset financial forecasting.
              </p>
            </div>

            <div className="capabilitiesBlock">
              <p className="capabilitiesIntro">Core capabilities</p>

              <div className="capabilitiesGrid">
                {capabilities.map((capability) => (
                  <article
                    className="capabilityCard"
                    key={capability.title}
                  >
                    <h3 className="capabilityTitle">{capability.title}</h3>

                    <ul className="capabilityList">
                      {capability.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section id="projects" className="projectsSection">
          <div className="sectionHeading">
            <h2>
              <span>02.</span> Featured Projects
            </h2>

            <div className="headingLine"></div>
          </div>

          <div className="projectsIntro">
            <p>
              Selected projects demonstrating how I apply AI, data engineering,
              analytics and machine learning to practical problems—from
              public-service automation to strategic intelligence and
              financial forecasting.
            </p>
          </div>

          <div className="projectsList">
            {projects.map((project, index) => (
              <article
                className={`project ${
                  index % 2 === 1 ? "projectReverse" : ""
                }`}
                key={project.title}
              >
                <div className="projectVisual">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 850px) 100vw, 55vw"
                    className="projectImage"
                  />

                  <div className="projectImageOverlay"></div>
                </div>

                <div className="projectContent">
                  <p className="projectLabel">{project.featured}</p>

                  <h3>{project.title}</h3>

                  <p className="projectSubtitle">{project.subtitle}</p>

                  <div className="projectDescription">
                    <p>{project.description}</p>
                  </div>

                  <ul className="projectHighlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <ul className="projectTechnologies">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <div className="projectLinks">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                      >
                        GitHub ↗
                      </a>
                    ) : (
                      <span className="projectLinkDisabled">
                        Repository coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}

        <section id="experience" className="experienceSection">
          <div className="sectionHeading">
            <h2>
              <span>03.</span> Experience
            </h2>

            <div className="headingLine"></div>
          </div>

          <div className="experienceTimeline">
            {experience.map((job) => (
              <article className="experienceItem" key={job.company}>
                <div className="timelineMarker"></div>

                <div className="experienceCard">
                  <div className="experienceTop">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="company">{job.company}</p>
                    </div>

                    <p className="experiencePeriod">{job.period}</p>
                  </div>

                  <ul className="experienceDescription">
                    {job.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="educationBlock">
            <h3 className="educationTitle">Education</h3>

            <div className="educationGrid">
              {education.map((item) => (
                <article className="educationCard" key={item.degree}>
                  <p className="educationPeriod">{item.period}</p>

                  <h4>{item.degree}</h4>

                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact" className="contactSection">
          <p className="contactNumber">04. What&apos;s Next?</p>

          <h2>Get In Touch</h2>

          <p className="contactDescription">
            I&apos;m interested in opportunities across artificial
            intelligence, data engineering, software engineering, automation
            and analytics. Whether you&apos;re recruiting, collaborating on a
            project or simply want to connect, I&apos;d be happy to hear from
            you.
          </p>

          <a href="mailto:alvino.ans@gmail.com" className="contactButton">
            Say Hello
          </a>

          <div className="socialLinks">
            <a
              href="https://www.linkedin.com/in/alvin-newman-samuels-"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="Alvin Newman-Samuels on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="socialIcon"
              >
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z"
                />
              </svg>

              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Vino11190"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="Alvin Newman-Samuels on GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="socialIcon"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.73.5.75 5.61.75 11.91c0 5.04 3.22 9.31 7.69 10.82.56.11.77-.25.77-.55v-2.14c-3.13.69-3.79-1.35-3.79-1.35-.51-1.34-1.25-1.69-1.25-1.69-1.02-.71.08-.7.08-.7 1.13.08 1.72 1.17 1.72 1.17 1 1.73 2.63 1.23 3.27.94.1-.73.39-1.23.71-1.51-2.5-.29-5.13-1.26-5.13-5.63 0-1.24.44-2.26 1.16-3.06-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.09 1.17a10.65 10.65 0 0 1 5.62 0c2.14-1.48 3.09-1.17 3.09-1.17.61 1.57.23 2.73.11 3.02.72.8 1.16 1.82 1.16 3.06 0 4.38-2.64 5.33-5.15 5.62.4.35.76 1.05.76 2.12v3.17c0 .3.2.66.78.55 4.46-1.51 7.67-5.78 7.67-10.82C23.25 5.61 18.27.5 12 .5Z"
                />
              </svg>

              <span>GitHub</span>
            </a>

            <a
              href="/Alvin-Newman-Samuels-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="View Alvin Newman-Samuels CV"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="socialIcon"
              >
                <path
                  fill="currentColor"
                  d="M6 2h8l4 4v16H6V2Zm7 1.5V7h3.5L13 3.5ZM8 10v1.5h8V10H8Zm0 4v1.5h8V14H8Zm0 4v1.5h5V18H8Z"
                />
              </svg>

              <span>CV</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="footer">
          <p>Designed &amp; built by Alvin Newman-Samuels</p>

          <p className="footerTech">Next.js · TypeScript</p>
        </footer>
      </div>
    </main>
  );
}