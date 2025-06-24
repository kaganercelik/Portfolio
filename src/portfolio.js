/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Y.Kagan",
  logo_name: "YKagan()",
  full_name: "Yusuf Kağan ERÇELİK",
  subTitle: "Software Engineer 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1O9BAq_noBYosPyJUhdMZTGsDw2Yhu8OV/view?usp=sharing",
  mail: "mailto:yusufkaganercelik@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/kaganercelik",
  linkedin: "https://www.linkedin.com/in/kaganercelik",
  gmail: "yusufkaganercelik@gmail.com",
  instagram: "https://www.instagram.com/kaganercelik/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop interactive and responsive Front end / User Interfaces for your web applications using React, Next.js, TypeScript, and Tailwind CSS.",
        "⚡ Building scalable and production-grade web applications with a focus on performance, SEO, and cross-browser functionality.",
        "⚡ Automation of tasks through appropriate tools and scripts, including n8n automation.",
        "⚡ AI agents automation for repetitive tasks and integrations.",
        "⚡ Creating application backends in Node.js, including REST APIs with JWT authentication and Stripe webhooks.",
        "⚡ Developing comprehensive test suites with Cypress, Jest, and React Testing Library.",
        "⚡ Building and maintaining websites using headless CMS like Payload CMS.",
        "⚡ Contributing to internal admin panels using GraphQL and Apollo.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "N8N",
          fontAwesomeClassname: "simple-icons:n8n",
          style: {
            color: "#00A9E0",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience resolving complex dependency and infrastructure issues to ensure API scalability.",
        "⚡ Experience in deploying and managing websites and scalable web applications for SaaS and e-commerce platforms.",
        "⚡ Proficient with Git and GitHub, collaborating within Agile workflows that incorporate principles of Continuous Integration.",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pamukkale University",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "PAU.png",
      alt_name: "PAU",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Grounded in a Bachelor of Computer Engineering, with a specialized thesis on creating a 'Decentralized Funding Application on Blockchain'.",
        "⚡ Applied concepts from my engineering coursework to develop and deliver complex, full-stack projects as detailed in my employment history.",
        "⚡ Demonstrated leadership and organizational skills by serving as the President of the Nature Sports Club for approximately two years.",
        "⚡ Taught rock climbing, mountaineering, and trekking to over 300 students, enhancing my communication and teamwork abilities.",
        "⚡ Achieved a GPA of 3.13/4.00.",
      ],
      website_link: "https://www.pau.edu.tr/pau/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Community Gaming Solana&Rust",
      subtitle: "MongoDB University",
      logo_path: "Community-gaming.png",
      certificate_link: "https://academy.patika.dev/certificates/KZ5SLSq",
      alt_name: "Community Gaming",
      color_code: "#2AAFED",
    },
    {
      title: "LinkedIn Learning - Resilience",
      subtitle: "LinkedIn Learning",
      logo_path: "Linkedin-learning.jpeg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3ab03f22be2a0c47b1cb5bf6652c6feb70883493d1437d00c451e3ad4acc991a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7Tjx%2FIWHTWWWfQKrsgFB8Q%3D%3D",
      alt_name: "Resilience",
      color_code: "#E2405F",
    },
    {
      title: "LinkedIn Learning - Giving and Receiving Feedback",
      subtitle: "LinkedIn Learning",
      logo_path: "Linkedin-learning.jpeg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/f0085299bed1d29f1fd568f64b4dd802b018be4698ca625c76745187ca4af3ca?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOrtehDlDTlKQC5Gs8rsDuA%3D%3D",
      alt_name: "Giving and Receiving Feedback",
      color_code: "#47A048",
    },
    {
      title: "LinkedIn Learning - Project Management Simplified",
      subtitle: "LinkedIn Learning",
      logo_path: "Linkedin-learning.jpeg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/aaa48b027b9ad7cea2ab14b77b559510a7e1ea4e7bf84c72aa24544d136a29c9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOrtehDlDTlKQC5Gs8rsDuA%3D%3D",
      alt_name: "Project Management Simplified",
      color_code: "#8C151599",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Recommendations & Internships",
  description:
    "A full-stack developer with a strong front-end focus, I build and scale production-grade web applications using React, Next.js, and Node.js. I have a proven record of delivering complete features autonomously for e-commerce and SaaS platforms while enhancing API performance. I excel in remote, collaborative teams and coordinate directly with clients to meet business goals.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Fullstack Web Developer",
          company: "Freelance, Self-Employed",
          logo_path: "freelancer.jpg",
          duration: "Jan 2025 - Apr 2025",
          location: "Remote",
          description:
            "As a contractor, I delivered a comprehensive solution for a SaaS dashboard, handling both front-end and back-end development tasks. I constructed modular, real-time front-end components using Next.js, Tailwind CSS, and SWR for efficient data fetching. On the back end, I developed secure Express.js REST API endpoints, integrating features like JWT authentication and Stripe webhooks according to the team's specifications. A key part of this role involved close coordination with the client's development team, using GitHub for code reviews and Slack for continuous communication to ensure seamless task alignment and project success.",
          color: "#0071C5",
        },
        {
          title: "Frontend Developer",
          company: "Toptal, LLC",
          company_url: "https://www.toptal.com/",
          logo_path: "toptal.png",
          duration: "Nov 2022 - Oct 2024",
          location: "Remote",
          description:
            "In this multifaceted role, I made key contributions across both the E-commerce(TopGear) and Acquisition teams(External Sites). For the E-commerce team, I built and maintained production-grade web applications using React and TypeScript, taking full ownership of a project to deliver a complete internal admin panel with integrated payment and tracking systems using GraphQL and Apollo. My work also involved integrating external services like Google Maps, developing comprehensive test suites with Cypress and Jest, and resolving complex infrastructure issues. As part of the Acquisition team, my focus was on enhancing web performance, where I integrated and maintained websites using Next.js and Payload CMS to improve SEO and cross-browser functionality.",
        },
        {
          title: "Freelance Software Developer",
          company: "Freelance, Self-Employed",
          company_url: "https://www.sahibinden.com",
          logo_path: "sahibinden.png",
          duration: "2019 - 2024",
          location: "Remote",
          description:
            "As an independent freelance developer since 2019, I have managed the full project lifecycle for a diverse range of clients on Sahibinden. My role extends beyond coding to include in-depth client collaboration, where I gather requirements, define development roadmaps, and ensure solutions are precisely aligned with business objectives. This client-focused approach has enabled me to deliver specialized projects in advanced fields like sentiment analysis, collaborative filtering, and blockchain-based smart contracts. Passionate about empowering others, I also dedicate time to teaching foundational software development topics to students, sharing my practical experience.",
        },
      ],
    },
    {
      title: "Recommendations",
      experiences: [
        {
          name: "Daniel Jianu",
          title: "Senior Frontend Engineer & Passionate Coach",
          company_url: "https://www.linkedin.com/in/daniel-jianu-9600296/",
          logo_path: "toptal.png",
          duration: "Nov 2022 - May 2024",
          location: "Remote",
          description:
            "I had the fabulous pleasure of working with Kagan at Toptal's internship program, and I sensed from our initial interview that he would become a great engineer. Kagan's commitment to self-improvement was evident throughout our time together. He quickly enhanced his time management skills, effectively organizing tasks and responsibilities. His proactive nature shone through in his willingness to assist the team, often going above and beyond to ensure project success. What truly sets Kagan apart is his insatiable appetite for learning. He consistently demonstrated a genuine passion for expanding his knowledge, asking insightful questions that not only facilitated his own growth but also contributed significantly to our team's success. Kagan's dedication and drive were inspiring. He consistently pushed himself to achieve more, never settling for mediocrity. His determination and ambition served as a motivating force for our entire team, encouraging us all to strive for excellence.Any company would be fortunate to have Kagan as part of their team. His combination of skills, attitude, and strong work ethic makes him an invaluable asset in any professional setting. I highly recommend him for any role that requires a dedicated, proactive, and knowledge-hungry rising star.",
        },
        {
          name: "Adonis Butufei",
          title: "Owner, AIKI TECHNOLOGIES SRL",
          company_url: "https://www.linkedin.com/in/adonis-butufei-758aa/",
          logo_path: "toptal.png",
          duration: "Nov 2022 - May 2024",
          location: "Remote",
          description:
            "I had the pleasure of working with Kagan Ercelik as a Front-End intern. Kagan demonstrated a strong determination and passion for learning, always eager to acquire new knowledge and skills. His commitment to solving complex problems and applying his knowledge was evident in his ability to overcome challenges and deliver high-quality solutions. Additionally, Kagan's excellent communication skills and supportive nature made him a valuable asset to the team, fostering a collaborative and positive work environment. I highly recommend Kagan for any role that requires a talented, dedicated, and collaborative software developer.",
        },
        {
          name: "Ruslan Sedziukh",
          title: "Frontend Engineer",
          company_url: "https://www.linkedin.com/in/ruslansedziukh/",
          logo_path: "toptal.png",
          duration: "Nov 2022 - May 2024",
          location: "Remote",
          description:
            "Kagan has been an exceptional colleague and an absolute pleasure to work with. Our pair programming sessions were not only productive but also enjoyable, thanks to his collaborative spirit and deep problem-solving skills. His contributions to our projects consistently stood out—he delivered clean, well-structured code that was both easy to follow and of high quality. During a critical period, Kagan stepped up to lead the frontend team for several weeks, managing the responsibilities with ease and ensuring everything ran smoothly. His leadership and dedication were evident throughout. Anyone who has the chance to work with Kagan will be fortunate to have such a talented and dependable teammate.",
        },
        {
          name: "Delia-Ștefania Silistru",
          title:
            "Software Engineer | Ruby on Rails, GraphQL, Git, Mathematics and Computer Science expertise",
          company_url: "https://www.linkedin.com/in/delia-stefania-silistru/",
          logo_path: "toptal.png",
          duration: "Nov 2022 - May 2024",
          location: "Remote",
          description:
            "I had the pleasure of working with Yusuf Kagan ERCELIK, and he truly impressed me with his technical skills and collaborative spirit. His expertise in React, TypeScript, and Next.js was evident, but what stood out most was his clear communication and proactive approach. Yusuf always ensured smooth coordination between frontend and backend tasks, and his ability to explain complex ideas made our teamwork highly efficient. Yusuf’s dedication to delivering quality code while prioritizing user experience was remarkable. I highly recommend him and hope to work together again in the future!",
        },
        {
          name: "Jelena Kartal",
          title:
            "Senior Automation QA Engineer | ISTQB certified tester | Master in microcomputer science",
          company_url: "https://www.linkedin.com/in/jelena-kartal/",
          logo_path: "toptal.png",
          duration: "May 2022 - Oct 2024",
          description:
            "Kagan and I were working in the same team, and I can recommend him as a co-worker in all ways. For me it was a pure joy to work with him(and I hope that we will work together again :)). He has an amazing work ethic and he is always focused to bring the best results in high quality.",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Fullstack Web Developer Intern",
          company: "Proxolab",
          company_url: "https://www.proxolab.com/",
          logo_path: "proxolab.jpeg",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "This was a mandatory internship for my university degree. I worked on a project that involved developing a web application using React and Laravel. The project was focused on creating a platform for managing and analyzing data, and I was responsible for implementing the front-end components and integrating them with the back-end services.",
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Projects, NodeJS backend, and N8N Automation. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ykagan.jpg",
    description:
      "You can contact me at the places mentioned below or you can have a chat with my AI Agent. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
  //   link: "https://x.com/YKagannn",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Team DAO",
      url: "https://github.com/kaganercelik/TeamDAO",
      description:
        "Built with Rust and Anchor, this Solana dApp enables on-chain DAO governance where member proposals are voted on and automatically executed by smart contract to manage treasury and actions.",
      languages: [
        {
          name: "Rust",
          iconifyClass: "logos-rust",
        },
        {
          name: "Solana",
          iconifyClass: "logos:solana",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kaganercelik/TeamDAO",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Movie Recommender",
      url: "https://github.com/kaganercelik/movie-recommendation",
      description:
        "This is the frontend of a movie recommendation system that uses collaborative filtering to suggest movies based on user preferences. It is built with React and Javascript. The backend is delivered to the client",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kaganercelik/movie-recommendation",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Fund and Earn NFT",
      url: "https://github.com/kaganercelik/Fund-Me-and-Earn-NFT",
      description:
        "A funding application that allows users to fund projects and earn NFTs as rewards. The idea is to encourage users to support projects they believe in by providing them with a unique NFT as a reward for their contribution. The application is built with React, Solidity, and Hardhat.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Solidity",
          iconifyClass: "logos:solidity",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kaganercelik/Fund-Me-and-Earn-NFT",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "Transportation App",
      url: "#",
      description:
        "A transportation application that allows users to send, receive, and transport packages. It will allow users to create a profile, list transporters, and request transportation services. Also, it will allow users to earn money by transporting packages. This is an ongoing project...",
      languages: [
        {
          name: "Swift",
          iconifyClass: "logos:swift",
        },
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Typescript",
          iconifyClass: "simple-icons:typescript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
        },
      ],
      links: [
        {
          name: "Github",
          url: "#",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  skills,
  degrees,
  socialMediaLinks,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
