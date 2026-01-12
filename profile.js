// Profile data - Single source of truth for personal information
// This file contains all personal data that should be customized

const Profile = {
  // Basic Info
  name: "Nikola Dimitrijevic",
  firstName: "Nikola",
  title: "Product Manager & Developer",
  description: "Passionate about building intelligent, efficient, and meaningful tech solutions. Turning ideas into reality through code, creativity, and collaboration.",
  
  // Contact Info
  email: "nikola.dimitrijevic@example.com", // TODO: Update with actual email
  github: "https://github.com/DimePrangija",
  githubUsername: "DimePrangija",
  linkedin: "https://linkedin.com/in/nikola-dimitrijevic", // TODO: Update with actual LinkedIn
  instagram: null, // Optional
  
  // Location
  location: "Your Location", // TODO: Update
  
  // Images
  profileImage: "assets/headshot.png", // Will be updated when headshot is added
  logo: "assets/logo.png",
  
  // Site Meta
  siteUrl: "https://your-domain.vercel.app", // TODO: Update after deployment
  siteTitle: "Nikola Dimitrijevic | Product Manager & Developer Portfolio",
  siteDescription: "Portfolio of Nikola Dimitrijevic. Showcasing projects in product management, software development, and technology.",
  
  // Typing animation roles
  roles: [
    "Product Manager",
    "Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ],
  
  // Quick Stats (shown in home section)
  stats: {
    projects: "10+",
    technologies: "8+",
    graduation: "N/A" // Update if applicable
  },
  
  // About Me Content
  about: {
    story: `Your story here...`, // TODO: Add personal story
    interests: `Your interests here...`, // TODO: Add interests
    funFacts: [
      "Fun fact 1",
      "Fun fact 2",
      "Fun fact 3"
    ]
  },
  
  // Education
  education: {
    university: "Your University", // TODO: Update
    degree: "Your Degree",
    graduation: "Year",
    progress: 50, // Percentage
    focusAreas: ["Product Management", "Software Development"], // TODO: Update
    highlights: [
      {
        title: "Highlight 1",
        description: "Description"
      }
    ]
  },
  
  // Skills
  skills: {
    languages: [
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML/CSS", level: 85 }
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "React", level: 75 }
    ]
  },
  
  // Curated Projects (fallback if GitHub API fails)
  curatedProjects: [
    {
      name: "Project 1",
      description: "Description of project 1",
      technologies: ["JavaScript", "React"],
      features: ["Feature 1", "Feature 2"],
      liveUrl: "#",
      codeUrl: "https://github.com/DimePrangija/project1",
      status: "featured",
      icon: "fa-project-diagram"
    }
    // Add more curated projects as needed
  ],
  
  // Basketball Video
  basketball: {
    youtubeUrl: "https://www.youtube.com/watch?v=vJccUSdEvZU&t=58s",
    embedUrl: "https://www.youtube.com/embed/vJccUSdEvZU?start=58",
    title: "Basketball Highlights",
    description: "On the court highlights"
  }
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.Profile = Profile;
}
