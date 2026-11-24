// All site content lives here. Edit this file to update the portfolio.
// TODO: replace the '#' profile links below with your real URLs.

export const profile = {
  name: 'Abhishek Dound',
  fullName: 'Abhishek Baban Dound',
  roles: ['AI / LLM Engineer', 'Backend Developer', 'RAG & Agentic AI Builder', 'Competitive Programmer'],
  tagline:
    'I build intelligent systems — agentic AI workflows, RAG pipelines and robust backends with Spring Boot & FastAPI.',
  location: 'Pune, India',
  email: 'abhishekdound@gmail.com',
  phone: '', // e.g. '+91-XXXXXXXXXX' — left blank so it is not published by default
  resume: 'resume.pdf', // drop your resume PDF into public/resume.pdf
  links: {
    github: '#',
    linkedin: '#',
    codeforces: '#',
    leetcode: '#',
  },
}

export const stats = [
  { value: 'Top 7', label: 'Adobe National Hackathon' },
  { value: '3+', label: 'AI / RAG Projects' },
  { value: '7.6', label: 'CGPA (B.E. IT)' },
  { value: '94%', label: 'Class XII (CBSE)' },
]

export const about = [
  "I'm an Information Technology undergraduate at the Army Institute of Technology, Pune, focused on applied AI and backend engineering.",
  'Most recently I built an enterprise multi-agent chatbot at Cosmos Pumps using LangChain, LangGraph and Microsoft SharePoint. I enjoy turning messy documents and data into systems people can actually ask questions to.',
]

export const experience = [
  {
    company: 'Cosmos Pumps Pvt. Ltd.',
    role: 'AI / LLM Intern',
    period: 'Jan 2026 – May 2026',
    location: 'Pune, Maharashtra',
    points: [
      'Developed an enterprise AI chatbot using LangChain, LangGraph and agentic AI workflows to automate knowledge retrieval and task execution.',
      'Integrated the chatbot with Microsoft SharePoint to securely access, retrieve and update organizational documents and data.',
      'Designed multi-agent workflows capable of context-aware reasoning, tool calling and workflow orchestration for business use cases.',
    ],
    tags: ['LangChain', 'LangGraph', 'Agentic AI', 'SharePoint', 'Multi-Agent'],
  },
]

export const projects = [
  {
    title: 'DocSetu',
    subtitle: 'Document insight platform',
    description:
      'A Spring Boot platform that links ideas across documents and generates LLM-powered insights through a RAG pipeline with FAISS vector search.',
    highlights: [
      'Chunking + embedding strategy tuned for large multi-page PDFs',
      'Adobe PDF Embed API viewer with a TTS audio-overview mode',
      'Secure multi-user access with role-based permissions',
    ],
    tags: ['Spring Boot', 'RAG', 'FAISS', 'Adobe PDF Embed API', 'TTS'],
    accent: 'from-violet-500 to-fuchsia-500',
    github: '#',
    live: '',
    featured: true,
  },
  {
    title: 'Medical AI Chatbot',
    subtitle: 'RAG-based medical assistant',
    description:
      'A medical inquiry system that gives context-aware answers grounded in clinical datasets using LangChain and Retrieval-Augmented Generation.',
    highlights: [
      'FAISS-indexed embeddings for fast semantic search',
      'Agentic fallback to DuckDuckGo Search when local knowledge is missing',
    ],
    tags: ['LangChain', 'RAG', 'FAISS', 'Python', 'Agents'],
    accent: 'from-cyan-400 to-blue-500',
    github: '#',
    live: '',
  },
  {
    title: 'SQL-Query AI',
    subtitle: 'Natural language → SQL',
    description:
      'A text-to-SQL system built with LangChain Expression Language (LCEL) as a modular, declarative chain that turns plain English into executable queries.',
    highlights: [
      'Few-shot prompting with a Semantic Example Selector',
      'Sentence Transformer embeddings stored in FAISS for example retrieval',
    ],
    tags: ['LangChain (LCEL)', 'FAISS', 'Sentence Transformers', 'SQL'],
    accent: 'from-emerald-400 to-teal-500',
    github: '#',
    live: '',
  },
]

export const skills = [
  {
    title: 'AI & LLM',
    icon: 'brain',
    items: ['RAG', 'LLM Integration', 'LangChain', 'LangGraph', 'Agentic AI', 'Vector Search & Embeddings', 'FAISS', 'Sentence Transformers'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Spring Boot', 'Spring', 'FastAPI', 'RESTful API Design', 'Hibernate', 'JDBC', 'ORM'],
  },
  {
    title: 'Languages',
    icon: 'code',
    items: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    items: ['Docker', 'Git', 'GitHub'],
  },
]

export const achievements = [
  {
    title: 'Adobe All India Hackathon — National Finalist',
    detail: 'Ranked in the top 7 teams at a national-level hackathon organized by Adobe.',
    year: '2025',
    icon: 'trophy',
  },
  {
    title: 'SE Member — Competitive Programming Club',
    detail: 'Organizing member of the CoDeft and Crack coding contests.',
    year: '2024',
    icon: 'users',
  },
  {
    title: 'Sports Captain — Army Public School, Dighi',
    detail: 'Managed team selection, practice schedules and match-day coordination.',
    year: '2021–22',
    icon: 'medal',
  },
]

export const certifications = [
  { title: 'Innovation Design and Entrepreneurship Bootcamp', issuer: 'Ministry of Education', year: '2026' },
  { title: 'Java Masterclass', issuer: 'Telusko', year: '2024–2026' },
]

export const education = [
  {
    school: 'Army Institute of Technology',
    degree: 'B.E. in Information Technology',
    period: '2023 – 2027',
    score: 'CGPA 7.6 / 10',
  },
  {
    school: 'Army Public School',
    degree: 'Higher Secondary (Class XII) — CBSE',
    period: '2022',
    score: '94%',
  },
]
