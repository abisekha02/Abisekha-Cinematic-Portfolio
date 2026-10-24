export type Project = {
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  role: string;
  outcome: string;
  stack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  coverImage?: string;
  visual: 'erp' | 'hire' | 'flow' | 'vision' | 'vr' | 'ocr';
};

export const projects: Project[] = [
  {
    number: '01', name: 'Kadai ERP', category: 'FULL STACK · BUSINESS APPLICATION',
    headline: 'A restaurant-focused digital operations experience.',
    description: 'A South Indian restaurant ERP and e-commerce demo project with menu browsing and a customer order flow in a responsive interface.',
    role: 'Full-stack developer · Built the restaurant menu and ordering experience',
    outcome: 'Connects customer-facing menu and ordering screens with a database-backed application workflow.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL / Neon', 'Vercel'],
    featured: true, liveUrl: 'https://kadai-erp.vercel.app/', coverImage: '/projects/kadai-erp.webp', visual: 'erp',
  },
  {
    number: '02', name: 'HireAI', category: 'LLM APPLICATION · RAG',
    headline: 'From résumé parsing to role-aware interview practice.',
    description: 'An AI-assisted hiring platform that parses résumé documents, matches candidate skills semantically, generates interview practice with retrieval-augmented generation, and evaluates answers.',
    role: 'Full-stack AI developer · Built semantic matching and RAG-based interview practice',
    outcome: 'Demonstrates document ingestion, semantic retrieval with pgvector, API design, access control, and AI evaluation workflows.',
    stack: ['React', 'TypeScript', 'Django REST', 'PostgreSQL', 'pgvector', 'LLM / RAG'],
    featured: true, githubUrl: 'https://github.com/abisekha02/HireAI-', coverImage: '/projects/hireai.webp', visual: 'hire',
  },
  {
    number: '03', name: 'EmployeeAssist AI', category: 'AI AGENTS · WORKFLOW AUTOMATION',
    headline: 'Human-approved automation for routine employee requests.',
    description: 'An n8n and OpenAI workflow that helps draft leave or permission emails, routes requests for approval, and sends messages only after a human approves them.',
    role: 'AI automation developer · Built the n8n request, approval, and email-notification workflow',
    outcome: 'Shows an approval-first workflow that keeps a person in control before external emails are sent.',
    stack: ['n8n', 'OpenAI', 'Gmail', 'Workflow logic', 'Human approval'],
    featured: true, coverImage: '/projects/employeeassist.webp', visual: 'flow',
  },
  {
    number: '04', name: 'CareerFlow', category: 'FULL STACK · CAREER ANALYTICS',
    headline: 'A structured workspace for career and application tracking.',
    description: 'A career-management application with authenticated user flows, role-based access, PostgreSQL-backed data, and analytics-oriented views.',
    role: 'Full-stack developer · Built authenticated application tracking and analytics',
    outcome: 'Demonstrates authentication, authorization, data modelling, API integration, and a data-driven interface.',
    stack: ['React', 'Django REST', 'JWT', 'RBAC', 'PostgreSQL', 'Analytics'],
    featured: true, liveUrl: 'https://careerflow-opal.vercel.app/', githubUrl: 'https://github.com/abisekha02/careerflow', coverImage: '/projects/careerflow.webp', visual: 'flow',
  },
  {
    number: '05', name: 'OCR Document Verification', category: 'COMPUTER VISION · DOCUMENT AI',
    headline: 'Extracting and validating information from documents.',
    description: 'An OCR-based application for extracting and validating information from identity documents and academic certificates, with image preprocessing and document-specific validation.',
    role: 'Computer vision developer · Implemented OCR extraction and document-field validation',
    outcome: 'Combines image preprocessing, OCR text extraction, and field validation to reduce repetitive document review.',
    stack: ['Python', 'OpenCV', 'Tesseract OCR', 'Image processing', 'Validation'],
    featured: false, githubUrl: 'https://github.com/abisekha02/OCR-Based-Document-Verification-System', visual: 'ocr',
  },
  {
    number: '06', name: 'AI-Based Helmet Detection', category: 'COMPUTER VISION · OBJECT DETECTION',
    headline: 'Detecting helmet use from visual input.',
    description: 'A real-time computer vision project using object detection to identify helmet usage for traffic-safety monitoring.',
    role: 'Computer vision developer · Implemented object detection with OpenCV and YOLO',
    outcome: 'Applies model inference and image-processing concepts to a practical safety-monitoring scenario.',
    stack: ['Python', 'OpenCV', 'YOLO'],
    featured: false, githubUrl: 'https://github.com/abisekha02/AI-Helmet-Detection', coverImage: '/projects/computer-vision.webp', visual: 'vision',
  },
  {
    number: '07', name: 'Employee Attendance System', category: 'FULL STACK · WORKFORCE MANAGEMENT',
    headline: 'Attendance and daily work tracking in one place.',
    description: 'A workforce management application with GPS-based attendance verification, webcam capture, attendance history, task management, and an admin dashboard.',
    role: 'Full-stack developer · Implemented attendance verification and employee/admin workflows',
    outcome: 'Combines GPS-based attendance checks, webcam capture, task tracking, and an admin dashboard in one workflow.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Geolocation API'],
    featured: false, liveUrl: 'https://attendancehubio.netlify.app/', githubUrl: 'https://github.com/abisekha02/smart-attendance-system', visual: 'flow',
  },
  {
    number: '08', name: 'NishFin Connect', category: 'WEB APPLICATION · ISP SERVICES',
    headline: 'A customer-facing website for internet services.',
    description: 'A responsive ISP website with broadband plan browsing, service requests, support tickets, and Supabase-backed data handling.',
    role: 'Frontend / full-stack developer · Built service-plan browsing and customer support flows',
    outcome: 'Connects broadband plan browsing with service requests and support-ticket workflows in a responsive interface.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase'],
    featured: false, liveUrl: 'https://nishfinconnect.netlify.app/', githubUrl: 'https://github.com/abisekha02/nishfin-connect-website', visual: 'erp',
  },
  {
    number: '09', name: 'Immersive AR / VR', category: 'UNITY · SPATIAL COMPUTING',
    headline: 'Interactive experiences beyond the screen.',
    description: 'A set of immersive projects involving AR indoor navigation, Meta Quest experiences, and pathfinding in Unity.',
    role: 'AR/VR developer · Project work',
    outcome: 'Combines interactive 3D experiences with navigation and spatial problem-solving.',
    stack: ['Unity', 'C#', 'AR / VR', 'A* pathfinding', 'Spatial UI'],
    featured: false, coverImage: '/projects/ar-vr.webp', visual: 'vr',
  },
];
