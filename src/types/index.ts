export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  category: 'client' | 'gateway' | 'auth' | 'app' | 'database' | 'cache' | 'worker' | 'cloud';
  tech?: string;
}

export interface ArchitectureFlow {
  from: string;
  to: string;
  label?: string;
  type?: 'sync' | 'async' | 'cache' | 'event';
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: string;
  overview: string;
  problem: string;
  approach: string;
  architecture: {
    nodes: ArchitectureNode[];
    flows: ArchitectureFlow[];
    description: string;
  };
  materials: {
    category: string;
    items: string[];
  }[];
  details: {
    title: string;
    description: string;
  }[];
  lessons: string[];
  githubUrl?: string;
  blueprintCode?: string;
}

export interface ToolCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: 'primary' | 'secondary' | 'supporting';
    note?: string;
  }[];
}

export interface JourneyMilestone {
  step: string;
  stage: string;
  focus: string;
  description: string;
  keyConcepts: string[];
  badge?: string;
}

export interface CraftStage {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface BeyondCodeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  status?: string;
  isEditable?: boolean;
}
