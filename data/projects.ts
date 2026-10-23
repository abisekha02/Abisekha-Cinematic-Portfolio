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
  visual: 'dashboard' | 'face' | 'network' | 'helmet' | 'gesture' | 'document' | 'ml' | 'voting' | 'sign';
};

// Project descriptions and destinations are based on the user's public portfolio
// and public repositories. Keep URLs here as the single source of truth.
export const projects: Project[] = [
  {
    number: '01', name: 'Employee Management System', category: 'FULL STACK · EMPLOYEE OPERATIONS',
    headline: 'Employee workflows in one place.',
    description: 'A full-stack employee management system featuring authentication, role-based access, dashboard views, attendance tracking, and task management.',
    stack: ['React', 'Django REST API', 'Authentication', 'Role-based access'],
    outcome: 'Demonstrates how employee records and day-to-day operational workflows can be brought into one web application.',
    githubUrl: 'https://github.com/abisekha02', visual: 'dashboard',
  },
  {
    number: '02', name: 'Attendance System — Face Recognition', category: 'COMPUTER VISION · WEB APP',
    headline: 'Attendance logging supported by visual recognition.',
    description: 'A webcam-based attendance system connecting face recognition, database integration, and attendance records in a web application.',
    stack: ['Python', 'OpenCV', 'Django', 'Webcam capture', 'Database'],
    outcome: 'Connects a computer-vision workflow to a practical attendance-recording use case.',
    liveUrl: 'https://attendance-tracking-o788.bolt.host/',
    githubUrl: 'https://github.com/abisekha02/smart-attendance-system', visual: 'face',
  },
  {
    number: '03', name: 'ISP Company Website', category: 'WEB DEVELOPMENT · CUSTOMER SERVICES',
    headline: 'A customer-facing service experience for an ISP.',
    description: 'A responsive ISP website with broadband information, service requests, support tickets, and Supabase-backed data handling.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    outcome: 'Shows a service-oriented web interface with forms and backend data integration.',
    liveUrl: 'https://nishfinconnect.netlify.app/',
    githubUrl: 'https://github.com/abisekha02/nishfin-connect-website', visual: 'network',
  },
  {
    number: '04', name: 'AI-Based Helmet Detection', category: 'COMPUTER VISION · OBJECT DETECTION',
    headline: 'Visual signals for road-safety monitoring.',
    description: 'A real-time helmet-detection project using computer vision and YOLO-based object detection concepts for traffic-safety scenarios.',
    stack: ['Python', 'OpenCV', 'YOLO', 'Object detection'],
    outcome: 'Applies visual inference to identify helmet use in image or video input.',
    githubUrl: 'https://github.com/abisekha02/AI-Helmet-Detection', visual: 'helmet',
  },
  {
    number: '05', name: 'Gesture-Controlled Virtual Mouse', category: 'COMPUTER VISION · HUMAN INTERACTION',
    headline: 'Hands-free cursor control through gestures.',
    description: 'A virtual mouse that uses hand landmarks and gesture recognition to translate hand movement into cursor actions.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Gesture recognition'],
    outcome: 'Combines real-time hand tracking with interaction logic for touchless computer control.',
    githubUrl: 'https://github.com/abisekha02/Gesture-Controlled-Virtual-Mouse', visual: 'gesture',
  },
  {
    number: '06', name: 'OCR Document Verification', category: 'AI · DOCUMENT INTELLIGENCE',
    headline: 'Extracting and validating details from documents.',
    description: 'An OCR-based system designed to extract and verify information from government-issued identity documents and academic certificates.',
    stack: ['Python', 'OCR', 'Image processing', 'Document validation'],
    outcome: 'Explores automated document checks to reduce repetitive manual data extraction.',
    githubUrl: 'https://github.com/abisekha02/OCR-Based-Document-Verification-System', visual: 'document',
  },
  {
    number: '07', name: 'Gamma vs. Hadron Classification', category: 'MACHINE LEARNING · CLASSIFICATION',
    headline: 'Classifying high-energy particle events with ML.',
    description: 'A machine-learning workflow covering data preprocessing, model training, evaluation, and prediction for gamma-versus-hadron event classification.',
    stack: ['Python', 'Scikit-learn', 'Jupyter', 'Model evaluation'],
    outcome: 'Demonstrates an end-to-end classification workflow using scientific data.',
    githubUrl: 'https://github.com/abisekha02/gamma-vs-hadron-classification-ml', visual: 'ml',
  },
  {
    number: '08', name: 'Online Voting System', category: 'FULL STACK · DJANGO',
    headline: 'A structured online voting workflow.',
    description: 'A Django-based voting system supporting voter registration, candidate management, vote submission, and automated result calculation.',
    stack: ['Python', 'Django', 'SQL', 'Web application'],
    outcome: 'Demonstrates form-driven workflows and data handling for a voting application.',
    githubUrl: 'https://github.com/abisekha02/online-voting-system-django', visual: 'voting',
  },
  {
    number: '09', name: 'Sign Language Recognition', category: 'AI · ACCESSIBILITY · RECOGNITION',
    headline: 'Recognition technology for more accessible interaction.',
    description: 'A machine-learning recognition project with a real-time prediction and feedback interface, as presented in the portfolio.',
    stack: ['Python', 'Machine learning', 'Recognition interface'],
    outcome: 'Explores how recognition systems can support more accessible human-computer interaction.',
    githubUrl: 'https://github.com/abisekha02', visual: 'sign',
  },
];
