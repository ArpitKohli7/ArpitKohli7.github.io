/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Arpit",
  logo_name: "Arpit Kohli",
  nickname: "Arpit Kohli",
  full_name: "Arpit Kohli",
  subTitle:
    "React Native Developer.\nAlways learning.",
  resumeLink:
    "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  mail: "mailto:kohliarpit81@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  linkedin: "https://www.linkedin.com/in/arpitkohli7/",
  gmail: "kohliarpit81@gmail.com",
  instagram: "https://www.instagram.com/arpit.kohli.7/",
};

const skills = {
  data: [
    {
      title: "React Native Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive applications using React Native",
        "⚡ Integrating RESTful web services with mobile applications to provide seamless user experiences",
        "⚡ Developing efficient and reusable UI components in React Native using Javascript and Typescript, promoting code maintainability and faster development cycles",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: {
            // backgroundColor: "#000",
            color: "#147EFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            // backgroundColor: "#000",
            color: "#61DAFB",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            // backgroundColor: "#000",
            color: "#007ACC",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            // backgroundColor: "#000",
            color: "#3DDC84",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            // backgroundColor: "#000",
            color: "#3178C6",
          },
        },
        {
          skillName: "Git / Github",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Masters in Applied Computer Science",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "SAL Engineering and Technical Institute",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.sal.edu.in/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    `Passionate React Native Developer (2.5 years) building user-centric mobile applications.
    Experienced in:

- Building and maintaining cross-platform mobile apps with React Native
- Designing and developing pixel-perfect UI components
- Utilizing TypeScript for enhanced code maintainability and type safety
- Consuming and manipulating data through REST APIs
- Version control using Git for efficient collaboration
- Native development tools - Android Studio and Xcode (for deep integrations)
    `,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "React Native Developer",
          company: "Extrovert Information Technology (EitBiz)",
          logo_path: "companyLogo.jpeg",
          duration: "Oct 2021 - Mar 2024",
          location: "New Delhi",
          description:
            "Led the development and deployment of multiple React Native applications from concept to production.",
          color: "#f10000",
        },
        {
          title: "React Native Developer",
          company: "Goofy Info System Pvt. Ltd. (GIS)",
          logo_path: "GisLogo.png",
          duration: "Oct 2020 - Sep 2021",
          location: "Noida",
          description:
            "Developed efficient and reusable UI components in React Native using Javascript and Typescript, promoting code maintainability and faster development cycles.",
          color: "#f10000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "arpit.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  }
};

const projects = {
  data: [
    {
      name: "CineScope",
      url: "https://github.com/Hrishi1999/CineScope",
      description: "An IMDB-like application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "RecipesAPI",
      url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
      description: "Get recipes for hundreds and thousands of dishes",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "https://github.com/Hrishi1999/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Cab Security System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Lensinator",
      url: " ",
      description:
        "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Doorbell.io",
      url: "https://github.com/Hrishi1999/Doorbell.io",
      description:
        "A sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TensorflowJS",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Video Summarization",
      url: "https://github.com/Hrishi1999/Video-Summarization",
      description:
        "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Dashboard Activity",
      url: "https://github.com/Hrishi1999/Dashboard.activity",
      description:
        "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Pickle",
      url: " ",
      description:
        "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Health Card",
      url: "",
      description:
        "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Food Classifier",
      url: " ",
      description:
        "A food classifier app using tflite which classfier over 50 Indian Dishes.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Image Clustering",
      url: " ",
      description:
        "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Antivirus",
      url: " ",
      description:
        "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
      ],
    },
    {
      name: "Sugar on Windows",
      url: " ",
      description:
        "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Object + Face Detection",
      url: " ",
      description: "2017 project. Object detection + accurate face detection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Image Captioning with Visual Attention",
      url: " ",
      description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "DalSocial",
      url: " ",
      description:
        "An Android app to meet new people in the university, organize and join events. ",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
          color: "#F18E33",
        },
        {
          name: "Android",
          iconifyClass: "simple-icons:android",
          color: "#3DDC84",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "HalifaxFoodie",
      url: " ",
      description:
        "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "Google Cloud",
          iconifyClass: "logos-google-cloud",
        },
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
