import { CaseStudy, ToolCategory, JourneyMilestone, CraftStage, BeyondCodeItem } from '../types';

export const PERSONAL_INFO = {
  name: "AVNI GUPTA",
  universeTitle: "PORTFOLIO",
  role: "SOFTWARE ENGINEER / BACKEND DEVELOPER",
  headline: "BUILDING RESILIENT BACKEND SYSTEMS & CLOUD INFRASTRUCTURE.",
  subheadline: "Passionate about building scalable backend architectures, APIs, and cloud systems with clean, efficient code.",
  location: "Jhansi, India",
  coordinates: "25.4484° N, 78.5685° E",
  currentYear: "2026",
  github: "https://github.com/Avni2511",
  githubUsername: "Avni2511",
  linkedin: "https://www.linkedin.com/in/avni-gupta-638b00336/",
  email: "mailto:avnigupta2505@gmail.com",
  emailDisplay: "avnigupta2505@gmail.com",
  education: {
    degree: "B.Tech in Information Technology",
    institution: "KIET Group of Institutions, Ghaziabad",
    timeline: "2024 — 2028 (Expected)",
    cgpa: "8.5 / 10",
    secondarySchool: "Class XII: 84%",
    highSchool: "Class X: 89%"
  },
  universePhilosophy: "Great software systems are built with solid foundations — clean API contracts, optimized database schemas, reliable caching, and asynchronous task processing."
};

export const SELECTED_WORKS: CaseStudy[] = [
  {
    id: "job-portal-backend",
    number: "PROJECT 001",
    title: "JOB PORTAL BACKEND",
    tagline: "A scalable REST API platform with role-based access control, caching, and background email notifications.",
    category: "Backend & Distributed Systems",
    year: "2025 — 2026",
    status: "COMPLETED",
    overview: "A production-grade backend engine designed to manage job postings, applications, and recruiter-candidate workflows with fast search, Redis caching, and non-blocking background emails.",
    problem: "Recruitment platforms experience heavy search queries (filtering by location, salary, skills) and blocking operations (sending applicant confirmation emails, resume processing) that slow down server responses.",
    approach: "Built modular REST APIs using Django REST Framework and PostgreSQL, integrated Redis for lightning-fast caching, and offloaded transactional emails to Celery background task workers.",
    architecture: {
      description: "Client requests hit Django REST Framework endpoints protected by JWT authentication. Read-heavy queries fetch from Redis cache, database updates persist in PostgreSQL, and background tasks run asynchronously via Celery.",
      nodes: [
        { id: "client", name: "Client Application", role: "Web / Mobile Frontend", category: "client", tech: "HTTP / JSON" },
        { id: "api", name: "REST API Layer", role: "Endpoint Routing & Serializers", category: "gateway", tech: "Django REST Framework" },
        { id: "auth", name: "JWT Auth Guard", role: "Token Verification & Roles", category: "auth", tech: "SimpleJWT" },
        { id: "app", name: "Business Logic", role: "Core Domain Logic & Filtering", category: "app", tech: "Django Core" },
        { id: "db", name: "PostgreSQL Database", role: "Primary Relational Storage", category: "database", tech: "PostgreSQL 15" },
        { id: "cache", name: "Redis In-Memory Cache", role: "Fast Query & Session Storage", category: "cache", tech: "Redis" },
        { id: "worker", name: "Celery Workers", role: "Background Tasks & Emails", category: "worker", tech: "Celery Task Queue" }
      ],
      flows: [
        { from: "client", to: "api", label: "API Request", type: "sync" },
        { from: "api", to: "auth", label: "Verify Token", type: "sync" },
        { from: "auth", to: "app", label: "Authorized Request", type: "sync" },
        { from: "app", to: "cache", label: "Check Cache", type: "cache" },
        { from: "app", to: "db", label: "Read / Write Data", type: "sync" },
        { from: "app", to: "worker", label: "Send Background Job", type: "async" }
      ]
    },
    materials: [
      {
        category: "Core Framework",
        items: ["Python 3.11", "Django 5.x", "Django REST Framework"]
      },
      {
        category: "Database & Caching",
        items: ["PostgreSQL", "Redis Key-Value Cache", "Django ORM"]
      },
      {
        category: "Asynchronous Tasks",
        items: ["Celery Worker Daemon", "Redis Broker", "SMTP Email Service"]
      },
      {
        category: "Security & Containers",
        items: ["JSON Web Tokens (JWT)", "Role-Based Access Control", "Docker & Docker Compose"]
      }
    ],
    details: [
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Granular permissions distinguishing Job Seekers, Recruiters, and Admins with custom permission classes."
      },
      {
        title: "Advanced Search & Filtering",
        description: "Custom filter backends supporting complex queries across job title, company, salary range, and experience."
      },
      {
        title: "Non-Blocking Async Email Service",
        description: "Background workers ensure applicant confirmation emails never slow down user requests."
      },
      {
        title: "Containerized Setup with Docker",
        description: "Docker Compose setup orchestrating Django, PostgreSQL, Redis, and Celery for seamless local development and deployment."
      }
    ],
    lessons: [
      "Optimizing queries with select_related and prefetch_related is essential to prevent slow N+1 database queries.",
      "Separating background tasks prevents user request timeouts during heavy operations like email sending.",
      "Clear API contracts make frontend-backend collaboration smooth and bug-free."
    ],
    githubUrl: "https://github.com/Avni2511"
  },
  {
    id: "healthcare-backend",
    number: "PROJECT 002",
    title: "HEALTHCARE BACKEND",
    tagline: "A secure medical data API system with patient-doctor record mapping and strict ownership permissions.",
    category: "Healthcare & Secure REST APIs",
    year: "2025",
    status: "COMPLETED",
    overview: "A secure medical backend system built with Django REST Framework and PostgreSQL, enforcing strict record ownership where sensitive health records are only accessible to assigned doctors and authorized patients.",
    problem: "Healthcare systems require strict data isolation. Doctors must only access records of their assigned patients, and patients must only view their own medical history without data leaks.",
    approach: "Engineered ownership-based authorization in DRF with database relational constraints and foreign keys to ensure complete data security.",
    architecture: {
      description: "Requests pass through an authorization gate that verifies JWT tokens and confirms that the doctor or patient has direct ownership permission to access the requested medical record.",
      nodes: [
        { id: "client", name: "Client Portal", role: "Doctor & Patient Web Apps", category: "client", tech: "HTTPS / REST" },
        { id: "gateway", name: "API Gateway", role: "Routing & Rate Limiting", category: "gateway", tech: "DRF ViewSets" },
        { id: "auth", name: "Ownership Auth Guard", role: "Object-Level Permissions", category: "auth", tech: "Custom DRF Permissions" },
        { id: "app", name: "Clinical Service", role: "Patient & Doctor Logic", category: "app", tech: "Django Services" },
        { id: "db", name: "PostgreSQL Database", role: "Secure Relational Storage", category: "database", tech: "PostgreSQL" }
      ],
      flows: [
        { from: "client", to: "gateway", label: "Medical Record Request", type: "sync" },
        { from: "gateway", to: "auth", label: "Check Doctor-Patient Map", type: "sync" },
        { from: "auth", to: "app", label: "Authorized Access", type: "sync" },
        { from: "app", to: "db", label: "Fetch Patient Records", type: "sync" }
      ]
    },
    materials: [
      {
        category: "Core Framework",
        items: ["Django", "Django REST Framework", "Python"]
      },
      {
        category: "Database & Security",
        items: ["PostgreSQL", "JWT Authentication", "Object-Level Permissions"]
      },
      {
        category: "Validation & Models",
        items: ["DRF ModelSerializers", "Custom Field Validators", "Django ORM"]
      }
    ],
    details: [
      {
        title: "Ownership-Based Authorization",
        description: "Custom permission classes ensuring doctors can only access records of patients assigned to them."
      },
      {
        title: "Patient & Doctor Profiles",
        description: "Clean model separation between medical practitioner credentials and patient health records."
      },
      {
        title: "Relational Mapping & Audit History",
        description: "Bi-directional relationships maintaining clear audit trails for consultations and prescriptions."
      }
    ],
    lessons: [
      "Placing authorization checks at the data model layer prevents accidental privilege escalation.",
      "Database foreign key constraints provide essential protection alongside application-level checks."
    ],
    githubUrl: "https://github.com/Avni2511"
  },
  {
    id: "apihub-saas-infra",
    number: "PROJECT 003",
    title: "APIHUB",
    tagline: "A developer API gateway and multi-tenant SaaS architecture with rate limiting and API key authentication.",
    category: "Cloud Infrastructure & SaaS Architecture",
    year: "2025 — 2026",
    status: "COMPLETED",
    overview: "A comprehensive API gateway and SaaS management platform featuring scoped API keys, token bucket rate limiting, tenant organization isolation, and asynchronous audit logs.",
    problem: "Multi-tenant platforms must prevent individual users from overloading the server, securely hash API tokens, and log all requests without slowing down customer API calls.",
    approach: "Designed a multi-tenant hierarchy with Organizations, Projects, and Scoped API Keys. Used Redis for high-speed rate limiting and Celery to write audit logs asynchronously.",
    architecture: {
      description: "Incoming API calls are authenticated using SHA-256 hashed API keys. Fast rate limit counters check Redis in milliseconds. Valid requests route to core services while telemetry logs publish to Celery workers.",
      nodes: [
        { id: "dev", name: "Developers & SDKs", role: "API Consumers", category: "client", tech: "API Key / REST" },
        { id: "gateway", name: "Rate Limiter", role: "Token Bucket Check", category: "auth", tech: "Redis + DRF Middleware" },
        { id: "tenant", name: "Tenant Resolver", role: "Organization Context", category: "app", tech: "Django Multi-Tenant" },
        { id: "db", name: "PostgreSQL Database", role: "Organizations & Keys", category: "database", tech: "PostgreSQL" },
        { id: "cache", name: "Redis In-Memory Bus", role: "Rate Limit Counters", category: "cache", tech: "Redis Cluster" },
        { id: "audit", name: "Async Audit Worker", role: "Background Telemetry Logs", category: "worker", tech: "Celery Async Worker" }
      ],
      flows: [
        { from: "dev", to: "gateway", label: "x-api-key Request", type: "sync" },
        { from: "gateway", to: "cache", label: "Check Rate Limit", type: "cache" },
        { from: "gateway", to: "tenant", label: "Pass Validated Tenant", type: "sync" },
        { from: "tenant", to: "db", label: "Fetch Project Resources", type: "sync" },
        { from: "tenant", to: "audit", label: "Record Usage Event", type: "async" }
      ]
    },
    materials: [
      {
        category: "Core Framework",
        items: ["Django", "Django REST Framework", "Python 3.11"]
      },
      {
        category: "Rate Limiting & Storage",
        items: ["Redis Rate Limiting", "PostgreSQL Multi-Tenant Schema", "Audit Tables"]
      },
      {
        category: "Security & Containers",
        items: ["Hashed API Key Tokens", "JWT Admin Dashboard", "Docker Compose"]
      },
      {
        category: "Background Jobs",
        items: ["Celery Async Workers", "Scheduled Quota Resets", "Usage Metrics"]
      }
    ],
    details: [
      {
        title: "Multi-Tenant Isolation",
        description: "Clean organizational hierarchy where Projects inherit API keys and usage quotas with strict data separation."
      },
      {
        title: "Token Bucket Rate Limiting",
        description: "Redis-backed rate limiting to block abusive traffic before it reaches the primary database."
      },
      {
        title: "Secure API Key Hashing",
        description: "Only cryptographic SHA-256 hashes are stored at rest; raw keys are revealed only once upon creation."
      },
      {
        title: "Asynchronous Audit Logging",
        description: "Background event dispatchers record IP addresses, timestamps, and endpoints for security tracking."
      }
    ],
    lessons: [
      "In-memory Redis atomic operations are indispensable for fast, real-time rate limiting under high traffic.",
      "API keys must be treated like passwords — always hash them before storing in the database."
    ],
    githubUrl: "https://github.com/Avni2511"
  },
  {
    id: "multi-env-cloud-infra",
    number: "PROJECT 004",
    title: "MULTI-ENV CLOUD INFRASTRUCTURE",
    tagline: "Automated AWS cloud infrastructure codified with Terraform for separate development and production environments.",
    category: "Cloud Infrastructure & DevOps",
    year: "2025 — 2026",
    status: "COMPLETED",
    overview: "An Infrastructure-as-Code (IaC) setup written in Terraform to provision automated, reproducible AWS cloud environments with VPC networks, load balancers, EC2 compute, and message queues.",
    problem: "Manual cloud setups cause configuration mismatches between development and production, security mistakes, and difficult deployments.",
    approach: "Created modular Terraform configurations with separate workspaces. Automated AWS VPC networks, private/public subnets, Security Group firewalls, Application Load Balancers, and EC2 instances.",
    architecture: {
      description: "Blueprint illustrating automated cloud provisioning for cost-effective Development environments and high-availability Multi-AZ Production environments.",
      nodes: [
        { id: "terraform", name: "Terraform Engine", role: "IaC State & Plan Compiler", category: "cloud", tech: "Terraform HCL" },
        { id: "alb", name: "Application Load Balancer", role: "SSL Termination & Routing", category: "gateway", tech: "AWS ALB" },
        { id: "vpc_prod", name: "Production VPC (Multi-AZ)", role: "Public / Private Subnets", category: "cloud", tech: "AWS VPC" },
        { id: "ec2_prod", name: "EC2 Compute Cluster", role: "Target Group Auto-Attached", category: "app", tech: "AWS EC2 Instances" },
        { id: "sqs", name: "SQS Message Queues", role: "Decoupled Event Ingestion", category: "worker", tech: "AWS SQS" },
        { id: "vpc_dev", name: "Development VPC", role: "Cost-Optimized Sandbox", category: "cloud", tech: "AWS Sandbox" }
      ],
      flows: [
        { from: "terraform", to: "vpc_prod", label: "Deploy Production Module", type: "sync" },
        { from: "terraform", to: "vpc_dev", label: "Deploy Dev Module", type: "sync" },
        { from: "alb", to: "ec2_prod", label: "Route Web Traffic", type: "sync" },
        { from: "ec2_prod", to: "sqs", label: "Send Queue Messages", type: "async" }
      ]
    },
    materials: [
      {
        category: "Infrastructure as Code",
        items: ["Terraform HCL", "Terraform Workspaces", "Remote State Management"]
      },
      {
        category: "AWS Cloud Networking",
        items: ["AWS VPC", "Public & Private Subnets", "Internet & NAT Gateways", "Route Tables"]
      },
      {
        category: "Compute & Load Balancing",
        items: ["Application Load Balancer (ALB)", "Target Groups & Health Checks", "EC2 Instances"]
      },
      {
        category: "Security & Queues",
        items: ["Security Groups (Least Privilege)", "IAM Policies", "AWS SQS Message Queues"]
      }
    ],
    details: [
      {
        title: "Separate Dev & Prod Workspaces",
        description: "Reusable modules dynamically configure instance sizes, replicas, and network subnets for each environment."
      },
      {
        title: "Tiered Network Security",
        description: "Application servers run strictly in private subnets, accessible only through the load balancer."
      },
      {
        title: "Automated Health Checks",
        description: "Load balancers continuously check server vitality and automatically redirect traffic away from unhealthy instances."
      },
      {
        title: "Asynchronous Queue Decoupling",
        description: "Configured Amazon SQS queues to decouple web compute servers from heavy background processing."
      }
    ],
    lessons: [
      "Managing cloud setup purely as code prevents configuration differences between testing and production.",
      "Configuring strict security group rules from the start ensures a secure, leak-proof cloud network."
    ],
    githubUrl: "https://github.com/Avni2511"
  }
];

export const CRAFT_STAGES: CraftStage[] = [
  {
    number: "01",
    name: "IDEA",
    subtitle: "Understanding the Problem",
    description: "Defining user requirements, performance constraints, and what the system needs to achieve.",
    deliverables: ["Problem Scope", "Requirements", "Core Constraints"]
  },
  {
    number: "02",
    name: "RESEARCH",
    subtitle: "Analyzing System Access Patterns",
    description: "Understanding data flow, read/write ratios, and potential scalability bottlenecks.",
    deliverables: ["Access Patterns", "Latency Goals", "Edge Case Scenarios"]
  },
  {
    number: "03",
    name: "DESIGN",
    subtitle: "Architecture & Schemas",
    description: "Drafting database models, REST API endpoints, caching layers, and security rules before coding.",
    deliverables: ["Database Models", "API Contracts", "Architecture Diagrams"]
  },
  {
    number: "04",
    name: "BUILD",
    subtitle: "Writing Clean Backend Code",
    description: "Implementing modular, maintainable code with Django, DRF, and robust database queries.",
    deliverables: ["Business Services", "Serializers & Views", "Database Migrations"]
  },
  {
    number: "05",
    name: "TEST",
    subtitle: "Testing & Verification",
    description: "Testing API responses, permission edge cases, caching behavior, and async task execution.",
    deliverables: ["Unit & API Tests", "Security Checks", "Performance Benchmarks"]
  },
  {
    number: "06",
    name: "DEPLOY",
    subtitle: "Cloud & Container Setup",
    description: "Packaging apps with Docker, codifying cloud resources with Terraform, and configuring AWS networks.",
    deliverables: ["Docker Compose", "Terraform Modules", "AWS VPC & Security Groups"]
  },
  {
    number: "07",
    name: "OPTIMIZE",
    subtitle: "Monitoring & Tuning",
    description: "Monitoring response times, query execution logs, cache hit rates, and tuning database indexes.",
    deliverables: ["Index Optimization", "Query Tracing", "Continuous Improvements"]
  }
];

export const TOOLS_OF_ATELIER: ToolCategory[] = [
  {
    title: "BACKEND DEVELOPMENT",
    subtitle: "Core Programming & Frameworks",
    items: [
      { name: "Python", level: "primary", note: "Primary Language" },
      { name: "Django", level: "primary", note: "Backend Framework" },
      { name: "Django REST Framework", level: "primary", note: "REST APIs" },
      { name: "FastAPI", level: "secondary", note: "Async APIs" }
    ]
  },
  {
    title: "DATABASES",
    subtitle: "Data Storage & Query Optimization",
    items: [
      { name: "PostgreSQL", level: "primary", note: "Relational Database" },
      { name: "SQL", level: "primary", note: "Queries & Indexing" }
    ]
  },
  {
    title: "CLOUD & DEVOPS",
    subtitle: "Infrastructure & Containers",
    items: [
      { name: "AWS", level: "primary", note: "VPC, EC2, ALB, SQS" },
      { name: "Docker", level: "primary", note: "Containers" },
      { name: "Terraform", level: "primary", note: "Infrastructure as Code" }
    ]
  },
  {
    title: "SYSTEMS & CACHING",
    subtitle: "Asynchronous Tasks & Protocols",
    items: [
      { name: "Redis", level: "primary", note: "Caching & Queues" },
      { name: "Celery", level: "primary", note: "Background Tasks" },
      { name: "REST APIs", level: "primary", note: "API Architecture" },
      { name: "JWT Authentication", level: "primary", note: "Token Security" },
      { name: "Caching Layers", level: "secondary", note: "Query Caching" }
    ]
  },
  {
    title: "DEVELOPER TOOLS",
    subtitle: "Version Control & Testing",
    items: [
      { name: "Git", level: "primary", note: "Version Control" },
      { name: "GitHub", level: "primary", note: "CI/CD & Code" },
      { name: "Postman", level: "primary", note: "API Testing" },
      { name: "CI / CD Pipelines", level: "secondary", note: "Automated Testing" }
    ]
  },
  {
    title: "PROBLEM SOLVING",
    subtitle: "Data Structures & Algorithmic Foundations",
    items: [
      { name: "C++", level: "primary", note: "Core Language" },
      { name: "Data Structures & Algorithms", level: "primary", note: "Problem Solving" }
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    step: "01",
    stage: "PROGRAMMING BASICS",
    focus: "Syntax, problem solving, memory concepts, and coding in C++ and Python.",
    description: "Building the fundamental logic for how computer software executes instructions and manages memory.",
    keyConcepts: ["Memory & Pointers", "Control Flow", "Object-Oriented Design"],
    badge: "FOUNDATION"
  },
  {
    step: "02",
    stage: "DATA STRUCTURES & ALGORITHMS",
    focus: "Time and space complexity analysis (Big-O), trees, graphs, and algorithmic problem solving.",
    description: "Training to solve complex computational problems with optimal data structures and efficient traversal algorithms.",
    keyConcepts: ["Big-O Complexity", "Graphs & Trees", "Optimal Traversal"],
    badge: "ALGORITHMS"
  },
  {
    step: "03",
    stage: "BACKEND DEVELOPMENT",
    focus: "Python backend engineering with Django framework, MVC architecture, and database ORMs.",
    description: "Transitioning from pure algorithms into building real-world software applications that manage state and business logic.",
    keyConcepts: ["Django Framework", "ORM Models", "Business Logic"],
    badge: "BACKEND"
  },
  {
    step: "04",
    stage: "REST APIS & NETWORKING",
    focus: "Designing clean REST APIs, serializer transformations, and secure HTTP endpoints with DRF.",
    description: "Mastering clean API design, pagination, search filters, and JSON Web Token (JWT) authentication.",
    keyConcepts: ["DRF Serializers", "JWT Authentication", "Filtering & Search"],
    badge: "APIs"
  },
  {
    step: "05",
    stage: "DATABASE MANAGEMENT",
    focus: "Relational database modeling with PostgreSQL, indexing strategies, and ACID transactions.",
    description: "Diving deep into database tables, relationships, query plan optimization, and eliminating slow N+1 queries.",
    keyConcepts: ["PostgreSQL", "Database Normalization", "Query Optimization"],
    badge: "DATABASES"
  },
  {
    step: "06",
    stage: "CACHING & ASYNC JOBS: REDIS & CELERY",
    focus: "In-memory caching architectures and asynchronous background task processing.",
    description: "Speeding up web applications by offloading long-running jobs (like email sending) to background Celery workers.",
    keyConcepts: ["Redis In-Memory", "Celery Task Queues", "Async Decoupling"],
    badge: "CONCURRENCY"
  },
  {
    step: "07",
    stage: "DOCKER & CONTAINERS",
    focus: "Containerizing services, environment isolation, and multi-service orchestration with Docker Compose.",
    description: "Ensuring applications run consistently across all environments with standardized Docker configurations.",
    keyConcepts: ["Docker Compose", "Service Isolation", "Environment Parity"],
    badge: "CONTAINERS"
  },
  {
    step: "08",
    stage: "AWS CLOUD INFRASTRUCTURE",
    focus: "Cloud architectures: VPC design, EC2 instances, Application Load Balancers, and SQS queues.",
    description: "Setting up secure cloud networks with public/private subnets, SSL certificates, and security group firewalls.",
    keyConcepts: ["AWS VPC & Subnets", "Load Balancing", "Cloud Security"],
    badge: "CLOUD"
  },
  {
    step: "09",
    stage: "TERRAFORM & DEVOPS",
    focus: "Infrastructure as Code (IaC), automated cloud provisioning, and multi-environment setups.",
    description: "Automating cloud infrastructure cleanly with modular Terraform configurations for dev and production.",
    keyConcepts: ["Terraform HCL", "Multi-Env Workspaces", "Automated IaC"],
    badge: "DEVOPS"
  },
  {
    step: "10",
    stage: "EXPLORING AI & RAG",
    focus: "Exploring the intersection of backend engineering, vector search, and intelligent systems.",
    description: "Learning how backend pipelines can feed structured database context to AI models via Retrieval-Augmented Generation.",
    keyConcepts: ["RAG Architecture", "Vector Embeddings", "AI-Powered APIs"],
    badge: "AI EXPLORATION"
  }
];

export const CURRENT_EXPERIMENTS = [
  {
    tag: "LEARNING",
    title: "AI × BACKEND SYSTEMS",
    description: "Exploring how AI can be integrated into reliable backend architectures and web APIs.",
    focusAreas: [
      {
        name: "Retrieval-Augmented Generation (RAG)",
        detail: "Learning how structured databases and vector embeddings can supply accurate context to language models."
      },
      {
        name: "AI-Powered REST APIs",
        detail: "Building backend endpoints that handle asynchronous AI tasks without blocking user requests."
      },
      {
        name: "Intelligent Backend Systems",
        detail: "Exploring structured schema validation and guardrails to ensure reliable, safe AI responses."
      }
    ],
    statusLabel: "CURRENT LEARNING FOCUS",
    note: "Actively expanding my knowledge into AI and RAG pipelines with a focus on system reliability, speed, and clean API integration."
  }
];

export const BEYOND_CODE_ITEMS: BeyondCodeItem[] = [
  {
    id: "dancing",
    title: "Dancing",
    category: "RHYTHM & EXPRESSION",
    description: "Expressing energy and rhythm through dynamic movements, bringing balance, discipline, and creative flow."
  },
  {
    id: "painting",
    title: "Painting",
    category: "VISUAL ARTS & CANVAS",
    description: "Exploring colors, textures, and visual compositions on canvas with artistic patience and attention to detail."
  },
  {
    id: "badminton",
    title: "Badminton",
    category: "ATHLETICS & AGILITY",
    description: "Staying active and sharp on the court with quick reflexes, precision shots, stamina, and strategic gameplay."
  },
  {
    id: "movies",
    title: "Movies & Cinema",
    category: "STORYTELLING & CINEMA",
    description: "Appreciating thoughtful storytelling, compelling screenplays, world-building, and cinematic direction."
  }
];
