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
    liveUrl: 'https://careerflow-opal.vercel.app/', visual: 'flow',
  },
  {
    number: '03', name: 'Computer Vision Lab', category: 'COMPUTER VISION · EDGE AI',
    headline: 'Turning visual signals into useful decisions.',
    description: 'A collection of applied vision prototypes, including drowsiness detection, helmet detection, OCR document verification, and object detection.',
    stack: ['Python', 'OpenCV', 'YOLO', 'CNN', 'TensorFlow'],
    outcome: 'Applied model inference and image-processing concepts to real-world safety and verification scenarios.',
    githubUrl: 'https://github.com/abisekha02', visual: 'vision',
  },
  {
    number: '04', name: 'Immersive AR / VR', category: 'UNITY · SPATIAL COMPUTING',
    headline: 'Interfaces that move beyond the screen.',
    description: 'Immersive prototypes exploring AR indoor navigation, Meta Quest experiences, and pathfinding in Unity.',
    stack: ['Unity', 'C#', 'AR / VR', 'A* pathfinding', 'Spatial UI'],
    outcome: 'Combines interactive 3D experiences with navigation and spatial problem-solving.',
    githubUrl: 'https://github.com/abisekha02', visual: 'vr',
  },
];
