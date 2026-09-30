import React, { useState } from 'react';
import { ArchitectureNode, ArchitectureFlow } from '../types';
import { Database, Server, Cpu, ShieldCheck, Zap, Layers, Network, Lock, RefreshCw, Terminal } from 'lucide-react';

interface ArchitectureVisualizerProps {
  nodes: ArchitectureNode[];
  flows: ArchitectureFlow[];
  description: string;
  projectName: string;
}

export const ArchitectureVisualizer: React.FC<ArchitectureVisualizerProps> = ({
  nodes,
  flows,
  description,
  projectName,
}) => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(nodes[0] || null);
  const [activeTab, setActiveTab] = useState<'diagram' | 'spec'>('diagram');

  const getNodeIcon = (category: string) => {
    switch (category) {
      case 'database':
        return <Database size={16} className="text-amber-400" />;
      case 'cache':
        return <Zap size={16} className="text-red-400" />;
      case 'worker':
        return <Cpu size={16} className="text-emerald-400" />;
      case 'auth':
        return <ShieldCheck size={16} className="text-purple-400" />;
      case 'gateway':
        return <Network size={16} className="text-blue-400" />;
      case 'cloud':
        return <Layers size={16} className="text-cyan-400" />;
      default:
        return <Server size={16} className="text-atelier-bronze" />;
    }
  };

  return (
    <div className="w-full border border-atelier-surfaceBorder bg-black/40 backdrop-blur-md p-5 sm:p-7 relative overflow-hidden"
      style={{ borderColor: 'var(--border-strong)', backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-atelier-surfaceBorder mb-6" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
            <span className="w-1.5 h-1.5 bg-atelier-bronze animate-pulse"></span>
            <span>SYSTEM ARCHITECTURE TOPOLOGY</span>
          </div>
          <h4 className="font-serif text-lg tracking-wide uppercase mt-0.5" style={{ color: 'var(--text-primary)' }}>
            {projectName} // RUNTIME SCHEMATIC
          </h4>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-3 py-1.5 border uppercase tracking-wider transition-all ${
              activeTab === 'diagram'
                ? 'bg-atelier-bronze text-black border-atelier-bronze font-bold'
                : 'border-white/10 text-atelier-stone hover:text-white'
            }`}
          >
            INTERACTIVE GRAPH
          </button>
          <button
            onClick={() => setActiveTab('spec')}
            className={`px-3 py-1.5 border uppercase tracking-wider transition-all ${
              activeTab === 'spec'
                ? 'bg-atelier-bronze text-black border-atelier-bronze font-bold'
                : 'border-white/10 text-atelier-stone hover:text-white'
            }`}
          >
            NODE SPEC
          </button>
        </div>
      </div>

      {activeTab === 'diagram' ? (
        <div className="space-y-6">
          {/* Schematic Canvas */}
          <div className="relative p-6 sm:p-8 border border-white/5 bg-[#09090b]/80 rounded-none atelier-blueprint-bg min-h-[300px] flex flex-col justify-center">
            {/* Corner Coordinates */}
            <div className="absolute top-2 left-2 text-[8px] font-mono text-atelier-muted">COORD: 0x8892</div>
            <div className="absolute top-2 right-2 text-[8px] font-mono text-atelier-muted">TOPOLOGY: DISTRIBUTED</div>
            <div className="absolute bottom-2 left-2 text-[8px] font-mono text-atelier-muted">PROTOCOL: HTTP/2 + WSGI</div>
            <div className="absolute bottom-2 right-2 text-[8px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></span>
              FLOW ACTIVE
            </div>

            {/* Dynamic Grid of Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {nodes.map((node, index) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`cursor-pointer p-4 border transition-all duration-300 relative group ${
                      isSelected
                        ? 'border-atelier-bronze bg-atelier-bronze/10 shadow-[0_0_15px_rgba(184,144,101,0.15)]'
                        : 'border-white/10 bg-black/60 hover:border-white/30'
                    }`}
                  >
                    {/* Index marker */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono text-atelier-muted">
                        NODE #{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="p-1 rounded-none bg-white/5 border border-white/10">
                        {getNodeIcon(node.category)}
                      </span>
                    </div>

                    <h5 className="font-mono text-sm font-semibold tracking-wide text-white group-hover:text-atelier-bronze transition-colors">
                      {node.name}
                    </h5>

                    <p className="text-[11px] font-sans text-atelier-stone mt-1 line-clamp-1">
                      {node.role}
                    </p>

                    {node.tech && (
                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-atelier-bronze">
                        <span>TECH:</span>
                        <span className="text-white/80">{node.tech}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Flows indicator */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-atelier-stone">
              <span className="text-atelier-muted">SYNCHRONOUS & ASYNCHRONOUS DATA BUS:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-0.5 bg-atelier-bronze"></span> Direct Request
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-0.5 bg-emerald-400"></span> Async Queue
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-0.5 bg-red-400"></span> In-Memory Cache
                </span>
              </div>
            </div>
          </div>

          {/* Selected Node Inspector Drawer */}
          {selectedNode && (
            <div className="p-4 border border-atelier-surfaceBorder bg-black/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-atelier-muted">INSPECTING LAYER</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-atelier-ivory" style={{ color: 'var(--text-primary)' }}>
                    {selectedNode.name}
                  </span>
                  <span className="px-1.5 py-0.5 bg-atelier-bronze/10 border border-atelier-bronze/30 text-atelier-bronze text-[10px]">
                    {selectedNode.category.toUpperCase()}
                  </span>
                </div>
                <p className="text-[11px] font-sans text-atelier-stone" style={{ color: 'var(--text-secondary)' }}>
                  {selectedNode.role}
                </p>
              </div>

              {selectedNode.tech && (
                <div className="text-right sm:border-l sm:pl-4 border-white/10">
                  <span className="text-[9px] uppercase tracking-widest text-atelier-muted block">IMPLEMENTATION</span>
                  <span className="text-atelier-bronze font-mono font-medium">{selectedNode.tech}</span>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Node Spec View */
        <div className="space-y-4 font-mono text-xs">
          <div className="p-4 border border-white/10 bg-black/70 space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-atelier-muted mb-2">
              DECLARATIVE FLOW DEFINITIONS
            </div>
            {flows.map((flow, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 text-[11px]">
                <div className="flex items-center gap-3">
                  <span className="text-atelier-bronze">{flow.from.toUpperCase()}</span>
                  <span className="text-atelier-muted">──[{flow.label || flow.type}]──▶</span>
                  <span className="text-atelier-ivory">{flow.to.toUpperCase()}</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 border border-white/10 text-atelier-stone">
                  {flow.type?.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Architecture Narrative Description */}
      <p className="text-xs font-sans text-atelier-stone mt-4 leading-relaxed italic border-t pt-4 border-atelier-surfaceBorder" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
        "{description}"
      </p>
    </div>
  );
};
