export const personalBrand = {
  name: 'Poojith S Menon',
  primaryTitle: 'Full-Stack Developer',
  secondaryPositioning: 'C++ & Embedded Systems Enthusiast',
  shortPositioningStatement: 'I build practical, modern software applications with a focus on full-stack development, problem solving, and emerging systems technologies.',
  heroDescription: 'I build modern full-stack applications and practical software solutions, while expanding my expertise in C++ and embedded systems.',
  resumeUrl: '/Poojith_S_Menon_Resume.pdf',
  socialLinks: {
    github: 'https://github.com/poojith007',
    linkedin: 'https://www.linkedin.com/in/poojith-s-menon-8260262a6/',
    email: 'poojithsmenon@gmail.com',
  },
  meta: {
    title: 'Poojith S Menon | Full-Stack Developer',
    description: 'Portfolio of Poojith S Menon, a Full-Stack Developer and C++ & Embedded Systems Enthusiast building practical software applications.',
    copyright: '© 2026 Poojith S Menon'
  }
};

export const aboutData = {
  heading: 'About Me',
  paragraphs: [
    'I’m a B.E. Information Science & Engineering student focused on building practical software applications. My primary focus is full-stack development, while I’m also developing my skills in Python and C++ with a growing interest in embedded systems.',
    'I enjoy turning ideas into working products and solving problems through software.'
  ]
};

export const skillsData = [
  {
    category: 'Full-Stack Development',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js'],
    icon: 'Layers',
    summary: 'Building reactive single-page applications, server-rendered portals, and RESTful microservices.'
  },
  {
    category: 'Programming',
    skills: ['Python', 'C++'],
    icon: 'Terminal',
    summary: 'Core algorithmic problem solving, object-oriented design, and expanding foundational systems programming.'
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    icon: 'Database',
    summary: 'Document collections and relational schema modeling with query optimization.'
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub'],
    icon: 'GitBranch',
    summary: 'Version control, collaborative repository management, and structured release workflows.'
  }
];

export const projectsData = [
  {
    id: 'godvalley',
    number: '01',
    title: 'GODVALLEY',
    subtitle: 'Full-Stack E-Commerce Web Application',
    status: 'Completed',
    isDeveloping: false,
    description: 'A full-stack e-commerce web application with product browsing, authentication, shopping cart functionality, checkout, order management, and an administrative interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/poojith007/GODVALLEY',
    liveDemo: 'https://splendorous-quokka-dfa54d.netlify.app/',
    highlights: [
      'Authentication',
      'Product browsing',
      'Shopping cart',
      'Checkout',
      'Order management',
      'REST APIs',
      'Admin interface'
    ],
    caseStudy: {
      problem: 'Building a reliable commerce experience requires handling disparate state operations: secure session authentication, real-time client cart calculations, reliable database order writes, and administrative oversight over inventory.',
      whatWasBuilt: 'An end-to-end e-commerce platform featuring an interactive storefront, custom cart operations, multi-step checkout with order recording, and a private admin panel connected to a Node.js/Express REST backend with MongoDB storage.',
      keyFunctionality: [
        'User registration and session-based authentication protecting checkout and order records.',
        'Structured catalog browsing with category filtering and dynamic item details.',
        'Interactive client-side shopping cart with real-time subtotal and tax calculation.',
        'Order placement flow persisting transactions and customer fulfillment details.',
        'Administrative interface for managing product catalog listings and viewing customer orders.',
        'Clean REST API architecture separating data access from route handlers.'
      ]
    }
  },
  {
    id: 'voice',
    number: '02',
    title: 'VOICE',
    subtitle: 'Full-Stack Music Streaming Platform',
    status: 'Completed',
    isDeveloping: false,
    description: 'A full-stack music streaming platform focused on music discovery, streaming, playlists, creator uploads, and personalized discovery.',
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/poojith007/Voice',
    liveDemo: 'https://voice-h8h059roz-poojithsmenon-3636s-projects.vercel.app/',
    highlights: [
      'JWT authentication',
      'Audio streaming',
      'Song search',
      'Likes',
      'Playlist creation and management',
      'Genre-based discovery',
      'Creator studio',
      'Cloud media uploads',
      'Play-count analytics',
      'Genre-based recommendations',
      'RESTful APIs'
    ],
    caseStudy: {
      problem: 'Music streaming web apps face strict requirements for uninterrupted audio execution, reactive state updates across playlists, creator file uploads, and personalized recommendations without sluggish rendering.',
      whatWasBuilt: 'A modern, full-stack music streaming platform built on React + Vite and Express/MongoDB, offering persistent audio playback, a creator studio for uploads, and rich community discovery tools.',
      keyFunctionality: [
        'JWT-based secure authentication and token-based API request authorization.',
        'Continuous HTML5 audio streaming engine with responsive playback controls and track queues.',
        'Instant multi-parameter search across song titles, artists, and music genres.',
        'User engagement system with track favoriting (Likes) and personalized playlist management.',
        'Creator Studio enabling artists to upload original audio files and cover art to cloud storage.',
        'Real-time play-count telemetry and popularity metric aggregation.',
        'Genre-based discovery feeds and algorithmic track recommendations.',
        'Structured RESTful API endpoints powering seamless frontend-backend synchronization.'
      ]
    }
  },
  {
    id: 'blind-navigation',
    number: '03',
    title: 'Blind Navigation Assistant',
    subtitle: 'AI-Powered Accessibility Application',
    status: 'Currently in Development',
    isDeveloping: true,
    featured: true,
    description: 'An Android accessibility application designed to assist visually impaired users through computer vision, voice interaction, location services, and emergency assistance.',
    technologies: ['Android', 'Kotlin', 'YOLO11', 'ONNX Runtime', 'TensorFlow Lite', 'CameraX'],
    github: 'https://github.com/poojith007/Blind_Navigation',
    liveDemo: null,
    highlights: [
      'Android/Kotlin development',
      'YOLO11-based object detection',
      'ONNX Runtime / TensorFlow Lite',
      'Camera processing',
      'Distance estimation',
      'Voice-command interaction',
      'Navigation and location services',
      'Emergency SOS',
      'Fall detection',
      'Guardian contact management'
    ],
    caseStudy: {
      problem: 'Visually impaired users face significant navigation hazards and emergency vulnerabilities in everyday environments. Existing solutions rarely unite low-latency edge visual detection, voice control, and proactive fall/SOS escalation in a single accessible mobile platform.',
      whatWasBuilt: 'A native Android accessibility system engineered for edge-device machine learning, integrating real-time camera computer vision, geometric distance calculation, hands-free voice interaction, and emergency guardian dispatching.',
      keyFunctionality: [
        'Native Android application written in Kotlin, adhering to modern Android architecture principles.',
        'YOLO11 object detection optimized for edge mobile inference via ONNX Runtime and TensorFlow Lite.',
        'CameraX image analysis pipeline processing continuous video frames with low latency and minimal thermal throttle.',
        'Real-time geometric distance estimation to warn users of approaching obstacles in their walking path.',
        'Voice-command interaction engine allowing complete hands-free navigation and system status checks.',
        'Integrated location services and auditory waypoint guidance for outdoor navigation.',
        'Accelerometer-based fall detection designed to trigger automated countdown alarms upon sudden impact.',
        'Emergency SOS system capable of dispatching immediate alert messages and GPS coordinates to designated guardian contacts.',
        'Guardian contact management allowing users to maintain and verify trusted emergency recipients.'
      ]
    }
  }
];

export const educationData = {
  institution: 'East Point College of Engineering and Technology',
  degree: 'Bachelor of Engineering — Information Science & Engineering',
  graduation: '2027',
  location: 'Bengaluru, India'
};

export const contactData = {
  heading: 'Let’s Build Something',
  supportingText: 'Have a project, opportunity, or idea worth discussing? Get in touch.',
  email: 'poojithsmenon@gmail.com',
  github: 'https://github.com/poojith007',
  linkedin: 'https://www.linkedin.com/in/poojith-s-menon-8260262a6/'
};
