/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
  useCustomCursor: true,
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Arpit",
  logo_name: "Arpit Kohli",
  nickname: "Arpit Kohli",
  full_name: "Arpit Kohli",
  subTitle: "Senior Software Engineer. React & React Native Developer.",
  resumeLink:
    "https://drive.google.com/file/d/1iygRuvx6kt4E-0BKsDgBH5vj0Whm0yNv/view?usp=sharing",
  resumeDownloadLink:
    "https://drive.google.com/uc?export=download&id=1iygRuvx6kt4E-0BKsDgBH5vj0Whm0yNv",
  mail: "mailto:kohliarpit81@gmail.com",
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/arpitkohli7/",
  gmail: "kohliarpit81@gmail.com",
  instagram: "https://www.instagram.com/arpit.kohli.7/",
};

const skills = {
  data: [
    {
      title: "React & React Native Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building enterprise-grade dashboards with React, Recoil & Redux for global state management",
        "⚡ Developing pixel-perfect cross-platform mobile apps with React Native for iOS & Android",
        "⚡ Integrating Salesforce queries and Veeva CRM APIs for pharmaceutical enterprise applications",
        "⚡ Crafting reusable component libraries with Storybook, published as standalone NPM packages",
        "⚡ Performance optimization — batch query refactoring, Recoil-based caching, reducing API calls by 60%+",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "React / React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: { color: "#147EFB" },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: { color: "#3DDC84" },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Git / Github",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#E94E32" },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sirifort Institute of Management Studies",
      subtitle: "Bachelor of Computer Applications (BCA)",
      logo_path: "dal.png",
      alt_name: "Sirifort",
      duration: "Aug 2017 – Oct 2020",
      descriptions: [
        "⚡ Studied core computer science subjects including Data Structures, DBMS, Networking, and Security.",
        "⚡ Built a strong foundation in application development and programming fundamentals.",
        "⚡ Worked on multiple software development projects covering web and mobile technologies.",
      ],
      website_link: "https://www.sirifort.ac.in/",
    },
    {
      title: "Jaspal Kaur Public School",
      subtitle: "Senior Secondary (Class XII), CBSE",
      logo_path: "sal.png",
      alt_name: "JKPS",
      duration: "Apr 2015 – Mar 2016",
      descriptions: [
        "⚡ Completed Senior Secondary education with focus on Science and Computer Science.",
      ],
      website_link: "#",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Where I've worked",
  description: `Senior Software Engineer with 4+ years of experience building enterprise pharma and consumer applications. Specialized in Veeva CRM integration, Salesforce query optimization, and Storybook-based reusable UI component libraries.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "LTIMindtree",
          company_url: "https://www.ltimindtree.com/",
          logo_path: "companyLogo.jpeg",
          duration: "July 2024 – Present",
          location: "Noida, India",
          description:
            "Built the NextGen dashboard inside Veeva CRM for pharma enterprise sales teams.",
          bullets: [
            "Developed the NextGen dashboard using React and Recoil for global state management inside Veeva CRM",
            "Integrated Salesforce data querying via local DB queries to fetch and display real-time sales data",
            "Refactored per-asset Salesforce queries into a unified batch method — reduced data fetch time by 60%",
            "Implemented Recoil-based caching to eliminate redundant API calls across the entire app session",
            "Delivered pixel-perfect responsive UI across web and iPad in both portrait and landscape orientations",
          ],
          tags: [
            "React",
            "Recoil",
            "JavaScript",
            "Veeva CRM",
            "Salesforce",
            "iPad UI",
          ],
          color: "#0066CC",
        },
        {
          title: "React Native Developer",
          company: "Extrovert Information Technology (EitBiz)",
          company_url: "#",
          logo_path: "companyLogo.jpeg",
          duration: "Oct 2021 – Mar 2024",
          location: "New Delhi, India",
          description:
            "Led mobile app development from concept to production across iOS and Android.",
          bullets: [
            "Led the development and deployment of multiple React Native applications from concept to production across iOS and Android platforms.",
            "Single-handedly built and shipped Myth of Aphrodite, a cross-platform React Native app now live on the Google Play Store with 10,000+ downloads, owning the full lifecycle from concept to release.",
            "Implemented in-app audio tours, interactive maps with geo-located points of interest, and multi-language content; delivered pixel-perfect, responsive UI across diverse device sizes and OS versions.",
          ],
          tags: [
            "React Native",
            "TypeScript",
            "Redux",
            "REST APIs",
            "iOS",
            "Android",
          ],
          color: "#E3405F",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Key Projects",
  description:
    "Enterprise and cross-platform applications built with React, React Native, and modern JavaScript tooling.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "arpit.jpg",
    description:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat. Feel free to reach out — I'll get back to you as fast as I can!",
  },
};

const projects = {
  data: [
    {
      name: "NextGen (Veeva CRM)",
      url: "#",
      description:
        "Enterprise pharmaceutical dashboard built within the Veeva CRM platform for sales teams. Integrated Salesforce queries, Recoil global state, and reduced data fetch time by 60% via batch query optimization.",
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "TypeScript", iconifyClass: "devicon-typescript" },
      ],
    },
    {
      name: "Optic (UI Library)",
      url: "#",
      description:
        "Cross-platform React Native enterprise application with a dedicated Storybook-based UI component library. Published to GitHub as a standalone package with consistent cross-platform UI for web and iPad.",
      languages: [
        { name: "React Native", iconifyClass: "logos-react" },
        { name: "TypeScript", iconifyClass: "devicon-typescript" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
