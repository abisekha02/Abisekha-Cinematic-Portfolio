export type Project = {
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  visual: 'hire' | 'flow' | 'vision' | 'vr';
};

export const projects: Project[] = [
  {
    number: '01', name: 'HireAI', category: 'LLM APPLICATION · RAG',
    headline: 'A smarter path from résumé to opportunity.',
    description: 'An AI-assisted hiring platform concept for parsing résumés, matching candidate skills semantically, and generating role-aware interview practice.',
    stack: ['React', 'TypeScript', 'Django REST', 'PostgreSQL', 'pgvector', 'LLM / RAG'],
    outcome: 'Demonstrates document ingestion, semantic retrieval, API design, and AI evaluation workflows.',
    githubUrl: 'https://github.com/abisekha02/HireAI-', visual: 'hire',
  },
  {
    number: '02', name: 'EmployeeAssist AI', category: 'AI AGENTS · WORKFLOW AUTOMATION',
    headline: 'Routine requests, handled intelligently.',
    description: 'An employee support workflow using n8n and OpenAI to draft leave or permission emails, route approval, and send only after approval.',
    stack: ['n8n', 'OpenAI', 'Gmail', 'Workflow logic', 'Human approval'],
    outcome: 'Shows practical AI automation with a human-in-the-loop approval step.',
    githubUrl: 'https://github.com/abisekha02', visual: 'flow',
  },
  {
    number: '03', name: 'CareerFlow', category: 'FULL STACK · CAREER ANALYTICS',
    headline: 'A clearer view of the next career move.',
    description: 'A career-management application with authenticated user flows, role-based access, PostgreSQL-backed data, and analytics-oriented views.',
    stack: ['React', 'JWT', 'RBAC', 'PostgreSQL', 'Analytics'],
    outcome: 'Demonstrates full-stack application structure, authentication, authorization, and data-driven UI.',
    liveUrl: 'https://careerflow-opal.vercel.app/', visual: 'hire',
  },
  {
    number: '04', name: 'Face Recognition Attendance', category: 'COMPUTER VISION · WEB APP',
    headline: 'Attendance tracking with visual recognition.',
    description: 'A webcam-based attendance system combining face recognition, database integration, and attendance logging in a web application.',
    stack: ['Python', 'OpenCV', 'Django', 'Webcam', 'Database'],
    outcome: 'Connects a real-time computer vision pipeline to a practical record-management workflow.',
    liveUrl: 'https://attendance-tracking-o788.bolt.host/', visual: 'vision',
  },
  {
    number: '05', name: 'AI-Based Helmet Detection', category: 'COMPUTER VISION · EDGE AI',
    headline: 'Turning road-safety footage into useful signals.',
    description: 'A real-time computer vision prototype that detects helmet usage in visual input using YOLO-based object detection concepts.',
    stack: ['Python', 'OpenCV', 'YOLO', 'Object Detection'],
    outcome: 'Applies model inference and image-processing techniques to a practical safety-monitoring scenario.',
    githubUrl: 'https://github.com/abisekha02', visual: 'vision',
  },
  {
    number: '06', name: 'OCR Document Verification', category: 'AI · DOCUMENT INTELLIGENCE',
    headline: 'Extracting information from documents.',
    description: 'An OCR-based workflow designed to extract and verify information from identity documents and certificates.',
    stack: ['Python', 'OCR', 'Image Processing', 'Validation'],
    outcome: 'Explores document extraction and verification as a foundation for reducing repetitive manual checks.',
    githubUrl: 'https://github.com/abisekha02', visual: 'flow',
  },
  {
    number: '07', name: 'Gesture-Controlled Virtual Mouse', category: 'COMPUTER VISION · HUMAN INTERACTION',
    headline: 'Touchless control through hand gestures.',
    description: 'A gesture-controlled interface using hand-landmark detection and gesture classification to translate movement into cursor actions.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Gesture Recognition'],
    outcome: 'Combines real-time landmark tracking with interaction logic for a hands-free computing experience.',
    githubUrl: 'https://github.com/abisekha02', visual: 'vision',
  },
  {
    number: '08', name: 'Immersive AR / VR', category: 'UNITY · SPATIAL COMPUTING',
    headline: 'Interfaces that move beyond the screen.',
    description: 'Immersive prototypes exploring AR indoor navigation, Meta Quest experiences, and pathfinding in Unity.',
    stack: ['Unity', 'C#', 'AR / VR', 'A* pathfinding', 'Spatial UI'],
    outcome: 'Combines interactive 3D experiences with navigation and spatial problem-solving.',
    githubUrl: 'https://github.com/abisekha02', visual: 'vr',
  },
];
