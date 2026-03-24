export type Tone = "yellow" | "cyan" | "white" | "red";

export type SkillCategory = {
  title: string;
  items: string[];
  tone: Tone;
};

export type Project = {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  link: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  focus: string;
  highlights: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

export type Achievement = {
  title: string;
  detail: string;
  tone: Tone;
};

export type Certification = {
  title: string;
  issuer: string;
  detail: string;
  tone: Tone;
};

export type ExplorationItem = {
  title: string;
  detail: string;
};

export type NavItem = {
  label: string;
  href: string;
  tone: Tone;
};

export const portfolio = {
  name: "Aditya Dosapati",
  role: "Computer Science Student (AI & ML) | Builder of ML and App Systems",
  statement: "Building intelligent systems that solve real-world problems",
  profile: {
    status: "Open to internships and impactful collaborations",
    education: "B.Tech CSE (AI & ML), GMR Institute of Technology",
    metric: "CGPA 8.17",
    location: "Andhra Pradesh, India",
  },
  about:
    "AI and ML student focused on shipping useful products at the intersection of machine learning, app development, and real-world innovation.",
  keywords: [
    { label: "Machine Learning", tone: "bg-yellow-300" },
    { label: "App Development", tone: "bg-cyan-300" },
    { label: "AI Systems", tone: "bg-red-300" },
    { label: "Problem Solving", tone: "bg-white" },
  ],
  navigation: [
    { label: "About", href: "#about", tone: "white" },
    { label: "Skills", href: "#skills", tone: "cyan" },
    { label: "Projects", href: "#projects", tone: "yellow" },
    { label: "Contact", href: "#contact", tone: "red" },
  ] as NavItem[],
  skills: [
    {
      title: "Programming",
      items: ["Python", "C", "Java", "JavaScript", "Dart"],
      tone: "yellow",
    },
    {
      title: "Frameworks",
      items: ["React", "Node"],
      tone: "cyan",
    },
    {
      title: "Technologies",
      items: ["Machine Learning", "AI", "Web Development", "App Development"],
      tone: "red",
    },
    {
      title: "Databases",
      items: ["MySQL"],
      tone: "white",
    },
  ] as SkillCategory[],
  projects: [
    {
      title: "Cardio Check Health App",
      problem: "People struggle to interpret raw cardiovascular health data and identify early risk patterns.",
      solution:
        "Built a Flask + Machine Learning health analytics app that turns user metrics into understandable risk insights and AI suggestions.",
      stack: ["Flask", "Python", "Machine Learning", "Health Analytics"],
      link: "https://github.com/Aditya-Dosapati",
    },
    {
      title: "MargSathi",
      problem: "Urban navigation often ignores smart routing, parking prediction, and live context from IoT signals.",
      solution:
        "Engineered a Flutter app with IoT + Mapbox to deliver smart navigation, parking prediction, and practical city mobility support.",
      stack: ["Flutter", "Dart", "IoT", "Mapbox", "Firebase"],
      link: "https://github.com/Aditya-Dosapati",
    },
    {
      title: "Weather App",
      problem: "Users need fast weather updates in a clean mobile-first format without dashboard complexity.",
      solution:
        "Developed a Dart-based weather app showing city conditions, humidity, wind speed, and pressure in a clear experience.",
      stack: ["Dart", "Flutter", "API Integration"],
      link: "https://github.com/Aditya-Dosapati",
    },
    {
      title: "GitHub Experiments",
      problem: "Learning in AI and software requires continuous experimentation across multiple domains.",
      solution:
        "Maintain practical mini-builds and explorations on GitHub to test ideas, iterate quickly, and sharpen engineering depth.",
      stack: ["ML Experiments", "Web", "Automation", "Rapid Prototyping"],
      link: "https://github.com/Aditya-Dosapati",
    },
  ] as Project[],
  experience: [
    {
      company: "Syber Spring Informatics Pvt. Ltd",
      role: "Machine Learning Intern",
      period: "2025",
      focus: "Applied machine learning concepts to practical tasks and industry-style workflows.",
      highlights: [
        "Worked on ML-first problem framing and solution design",
        "Strengthened model-thinking through real use cases",
        "Improved end-to-end execution from data to output",
      ],
    },
  ] as ExperienceItem[],
  timeline: [
    {
      year: "2022",
      title: "Started Machine Learning",
      detail: "Began focused study on ML fundamentals and model-building workflows.",
    },
    {
      year: "2023",
      title: "Built Early ML Apps",
      detail: "Shipped initial app ideas with practical ML-driven features.",
    },
    {
      year: "2025",
      title: "Internship at Syber Spring",
      detail: "Gained machine learning exposure in a professional environment.",
    },
    {
      year: "2025",
      title: "Advanced Projects",
      detail: "Delivered stronger real-world work such as Cardio Check and MargSathi.",
    },
  ] as TimelineItem[],
  achievements: [
    {
      title: "Class Representative",
      detail: "Led communication and coordination between faculty and students.",
      tone: "yellow",
    },
    {
      title: "Rajya Puraskar",
      detail: "Received Governor's Award for leadership and achievement.",
      tone: "cyan",
    },
    {
      title: "Event Leadership",
      detail: "Coordinated events with planning discipline and team execution.",
      tone: "red",
    },
  ] as Achievement[],
  certifications: [
    {
      title: "NPTEL Python",
      issuer: "NPTEL",
      detail: "Elite + Silver",
      tone: "yellow",
    },
    {
      title: "Cisco Python",
      issuer: "Cisco",
      detail: "Programming foundations",
      tone: "white",
    },
    {
      title: "Generative AI",
      issuer: "Professional Learning",
      detail: "AI workflows and practical usage",
      tone: "cyan",
    },
    {
      title: "Prompt Engineering",
      issuer: "Professional Learning",
      detail: "Prompt design and structured iteration",
      tone: "red",
    },
  ] as Certification[],
  exploring: [
    {
      title: "AI + Healthcare",
      detail: "Decision-support systems and personalized health intelligence.",
    },
    {
      title: "IoT Systems",
      detail: "Connected sensing pipelines for real-time user value.",
    },
    {
      title: "Smart Routing",
      detail: "Efficient mobility logic with context-aware route decisions.",
    },
    {
      title: "Applied ML",
      detail: "From model output to product-ready user impact.",
    },
  ] as ExplorationItem[],
  github: {
    profile: "https://github.com/Aditya-Dosapati",
    username: "Aditya-Dosapati",
  },
  contact: {
    email: "",
    github: "https://github.com/Aditya-Dosapati",
    linkedin: "https://www.linkedin.com/in/aditya-dosapati",
  },
};