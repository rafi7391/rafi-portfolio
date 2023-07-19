/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shaik Rafi",
  title: "Hi all, I'm Rafi",
  subTitle: emoji(
    //"A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",//
    "As a tech stack enthusiast my major focus is on open-source projects. I have contributed to various open-source projects, looking forward to diving in and making projects in the blockchain and Web3 domain. I am very much familiar with the Web3 & Blockchain technologies. As a student, I was constantly expanding my knowledge in Bitcoin software development & Web3 and looking forward to learn new things."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mletKTegKqEq6mYxcLBnTUke_8DZ050P/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rafi7391",
  linkedin: "https://www.linkedin.com/in/shaik-rafi-87063a211/",
  gmail: "rafi37230@gmail.com",
  gitlab: "https://gitlab.com/rafi7391",
  facebook: "https://www.facebook.com/shaik.rafikhan.16",
  medium: "https://medium.com/@rafi37230",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  hackerrank: "https://www.hackerrank.com/rafi37230?hr_r=1",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "B V Raju Institute of Technology",
      logo: require("./assets/images/bvritLogo.jpg"),
      subHeader: "Bachelor of Technology",
      duration: "December 2021 - 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Srividya Junior College-KODAD",
      logo: require("./assets/images/interLogo.jpg"),
      subHeader: "Class-12 (Intermediate)",
      duration: "June 2019 - May 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Ravindra Bharathi High School",
      logo: require("./assets/images/rbsLogo.png"),
      subHeader: "Secondary Eduaction",
      duration: "September 2016 - April 2019",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Open-Source Contributor",
      company: "Time Chain Labs",
      companylogo: require("./assets/images/TSOCLogo.jpg"),
      date: "May 2023 – Present",
      desc: "Contributing towards the Metalogue Project",
      descBullets: [
        "Developed an E-commerce website for the Metalogue Project that was based on the Blockchain Technology",
        "The Technologies we have used for the project mainly was: BSV , SCRYPT, TYPESCRIPT, NEXTJS, POSTGRESQL, VERCEL"
      ]
    },
    {
      role: "Girl Script Summer of Code",
      company: "Open-Source program",
      companylogo: require("./assets/images/gssocLogo.jpg"),
      date: "April 2023 – present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Social Summer of Code",
      company: "Open-Source Program",
      companylogo: require("./assets/images/SSOCLogo.png"),
      date: "April 2023 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/googledocsLogo.jpg"),
      projectName: "Google-Docs-Clone App",
      projectDesc: "Developed an Interactive Google Doc's Clone using the latest Technologies of MERN Stack Development",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/googledriveLogo.png"),
      projectName: "Google-Drive-Clone App",
      projectDesc: "Developed an Interactive Google Drive Clone App of the Latest Technologies of MERN Stack.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS ACADEMY",
      subtitle:
        "Completed AWS Academy Cloud Foundations Course",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "awsLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8305a620-7744-40f4-b6b0-39c808d4ed68/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS ACADEMY",
      subtitle:
        "Completed AWS Academy ML Foundations Course",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "awsLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/17850410-3afa-4b69-9bfd-12bc32f71a64/"
        }
      ]
    },
    {
      title: "SSOC ",
      subtitle:
        "Open-Source Summer of Code Contributor Certification",
      image: require("./assets/images/SSOCLogo.png"),
      imageAlt: "awsLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13zbY11gFlJoBRrFqlZK7pTyQOD9baaik/view?usp=sharing"
        }
      ]
    },
    {
      title: "TSOC ",
      subtitle:
        "Open-Source Summer of Code Contributor Certification",
      image: require("./assets/images/TSOCLogo.jpg"),
      imageAlt: "awsLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1FwFyUMfHc6_9jUB4bWp3oUmldXOFdZov/view?usp=sharing"
        }
      ]
    },
    {
      title: "GSSOC ",
      subtitle:
        "Open-Source Summer of Code Contributor Certification",
      image: require("./assets/images/gssocLogo.jpg"),
      imageAlt: "awsLogo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1sMf54sAwrEtzAR_PzAyZLBxg342rdZQF/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Bitcoin Protocol and Design by BSV Academy",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/bsvLogo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://bitcoinsv.academy/student/certificate/1e0150ca25987676d127c0563c500ade"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    {
      title: "SQL for Data Analysis and Data Science",
      subtitle: "Completed Certifcation from Udemy for SQL Data Analysis and Data Science",
      image: require("./assets/images/UdemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification", url: "https://www.udemy.com/certificate/UC-a75a6b23-eb94-4885-b689-98fec9717bd9/"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9392953189",
  email_address: "rafi37230@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ShaikRafikhan1", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
