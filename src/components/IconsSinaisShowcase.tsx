import React from 'react';
import { motion } from 'motion/react';
import { 
  LucideIcon,
  Search, 
  Menu, 
  Mail, 
  Save, 
  Heart, 
  Info, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  MousePointer2, 
  Eye, 
  Move, 
  Maximize2, 
  Grid3X3, 
  Activity,
  PenTool,
  ExternalLink,
  ChevronRight,
  Fingerprint,
  Zap,
  Globe,
  Circle,
  Square,
  Triangle,
  Type,
  Layout,
  Accessibility,
  BookOpen
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Specialized Internal Components ---

const TechLabel = ({ children, color = "cyan" }: { children: React.ReactNode, color?: "cyan" | "green" | "amber" | "red" | "white" }) => (
  <span className={cn(
    "text-[1em] font-mono px-2 py-0.5 rounded border uppercase tracking-widest leading-none inline-block",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "amber" && "text-amber-500 border-amber-500/30 bg-amber-500/5",
    color === "red" && "text-red-500 border-red-500/30 bg-red-500/5",
    color === "white" && "text-white border-white/30 bg-white/5"
  )}>
    {children}
  </span>
);

const Card = ({ children, className, title, id }: { children: React.ReactNode, className?: string, title?: string, id?: string }) => (
  <div id={id} className={cn("p-8 bg-white/[0.03] border border-white/10 rounded-[32px] relative overflow-hidden group", className)}>
    {title && (
      <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-aura-comfort-oat" />
        <h4 className="text-[1em] font-mono font-bold text-gray-400 uppercase tracking-widest">{title}</h4>
      </div>
    )}
    {children}
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="flex flex-col gap-4 mb-12">
    <div className="flex items-center gap-3">
      <div className="p-3 bg-aura-comfort-oat/10 border border-aura-comfort-oat/20 rounded-2xl text-aura-tech-cyan">
        <Icon size={24} />
      </div>
      <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter italic">{title}</h2>
    </div>
    <p className="text-xl text-gray-400 font-mono max-w-3xl leading-relaxed">{subtitle}</p>
  </div>
);

const IconAnatomyDiagram = () => (
  <div className="relative aspect-square max-w-md mx-auto bg-black/40 border border-white/10 rounded-2xl overflow-hidden p-8">
    {/* Grid Lines */}
    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
      {[...Array(9)].map((_, i) => (
        <React.Fragment key={i}>
          <div className="absolute h-px w-full bg-white" style={{ top: `${(i / 8) * 100}%` }} />
          <div className="absolute w-px h-full bg-white" style={{ left: `${(i / 8) * 100}%` }} />
        </React.Fragment>
      ))}
    </div>
    
    {/* Keyline Shapes */}
    <div className="absolute inset-8 border border-aura-comfort-oat/30 rounded-full" />
    <div className="absolute inset-8 border border-aura-comfort-oat/30" />
    <div className="absolute inset-12 border border-aura-comfort-oat/30 rotate-45" />
    
    {/* The Icon Being Analyzed */}
    <div className="absolute inset-0 flex items-center justify-center">
       <div className="relative">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
             <PenTool size={120} strokeWidth={1} className="text-white" />
          </motion.div>
          
          {/* Anatomical Annotations */}
          <div className="absolute -top-4 -right-12 space-y-1">
             <TechLabel color="cyan">Optical Center</TechLabel>
             <div className="h-px w-12 bg-aura-comfort-oat/40" />
          </div>
          <div className="absolute bottom-4 -left-16 space-y-1">
             <TechLabel color="white">24px Bounding Box</TechLabel>
             <div className="h-px w-16 bg-white/40" />
          </div>
       </div>
    </div>
  </div>
);

// --- Component Section Modules ---

const Introduction = () => (
  <div className="space-y-12">
    <SectionHeader 
      icon={Fingerprint}
      title="O que são Ícones"
      subtitle="Ícones são representações visuais sintetizadas que funcionam como unidades semânticas da interface."
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <p className="text-xl text-gray-200 font-mono leading-relaxed">
          No design de interfaces, ícones não são meros adornos. Eles são <span className="text-aura-tech-cyan font-bold italic">dispositivos de orientação cognitiva</span> que facilitam o reconhecimento rápido de ações, objetos e estados sem a necessidade de leitura textual imediata.
        </p>
        <div className="grid grid-cols-2 gap-4">
           {[
             { t: "Sintetização", d: "Redução de conceitos complexos a formas geométricas essenciais." },
             { t: "Affordance", d: "Sinalização visual imediata de que um elemento é interativo." },
             { t: "Universalidade", d: "Padrões culturais que aceleram a percepção global." },
             { t: "Hierarquia", d: "Auxílio na escaneabilidade visual da interface." }
           ].map(item => (
             <div key={item.t} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h5 className="text-aura-tech-cyan font-bold uppercase text-[1em] tracking-widest mb-2">{item.t}</h5>
                <p className="text-gray-400 text-[1em] font-mono leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
      <Card title="Pilares Semióticos">
         <ul className="space-y-4">
            {[
              { l: "Ícone", d: "Semelhança física com o objeto (ex: impressora)." },
              { l: "Índice", d: "Relação lógica ou causal (ex: fumaça para fogo)." },
              { l: "Símbolo", d: "Convenção aprendida (ex: disquete para salvar)." }
            ].map(pair => (
              <li key={pair.l} className="space-y-1">
                <span className="text-white font-bold text-[1em] uppercase tracking-tighter">{pair.l}</span>
                <p className="text-gray-500 text-[1em] font-mono leading-tight">{pair.d}</p>
              </li>
            ))}
         </ul>
      </Card>
    </div>
  </div>
);

const Universality = () => (
  <div className="py-20 border-t border-white/5 space-y-12">
    <SectionHeader 
      icon={Globe}
      title="Convenções e Contexto"
      subtitle="O significado de um ícone não é natural; ele é construído socialmente através do repertório tecnológico e cultural."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
       {[
         { i: Save, t: "Save", c: "Disquete", d: "Metáfora obsoleta, mas universalmente aprendida." },
         { i: Mail, t: "Email", c: "Envelope", d: "Representação física de uma comunicação digital." },
         { i: Search, t: "Search", c: "Lupa", d: "Significante de exploração e detalhamento." },
         { i: Menu, t: "Menu", c: "Hambúrguer", d: "Abstração de lista e agrupamento." },
         { i: Heart, t: "Like", c: "Coração", d: "Convenção emocional de favoritar/curtir." }
       ].map(item => (
         <div key={item.t} className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl text-center space-y-4 group">
            <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-aura-tech-cyan group-hover:scale-110 transition-transform">
               <item.i size={32} />
            </div>
            <div className="space-y-1">
               <h4 className="text-white font-bold uppercase text-[1em]">{item.t}</h4>
               <p className="text-[1em] font-mono text-aura-tech-cyan italic">{item.c}</p>
               <p className="text-[1em] text-gray-500 font-mono leading-tight pt-2">{item.d}</p>
            </div>
         </div>
       ))}
    </div>

    <div className="p-8 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[40px] flex flex-col md:flex-row items-center gap-8">
       <div className="shrink-0 p-4 bg-black/40 rounded-full text-aura-tech-cyan">
          <Info size={32} />
       </div>
       <div className="space-y-2">
          <h4 className="text-lg font-bold text-white uppercase italic">Princípio do Reconhecimento</h4>
          <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
            Como defende <span className="text-white font-bold italic">Jakob Nielsen</span>, o reconhecimento é superior à memorização. Devemos priorizar ícones que o usuário já identificou em outros contextos do ecossistema digital para reduzir a carga de aprendizado.
          </p>
       </div>
    </div>
  </div>
);

const Syntax = () => (
  <div className="py-20 border-t border-white/5 space-y-12">
    <SectionHeader 
      icon={PenTool}
      title="Sintaxe e Construção"
      subtitle="Um sistema de ícones robusto requer consistência estrutural, geométrica e ótica."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       <div className="space-y-10">
          <div className="space-y-4">
             <TechLabel color="cyan">Stroke Weight (Espessura)</TechLabel>
             <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight italic leading-tight">Consistência de Peso</h4>
             <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
               A espessura da linha determina o "peso visual" do ícone e sua legibilidade em diferentes escalas. No LabInterface, padronizamos o uso de 1.5px a 2px para grids de 24x24.
             </p>
             <div className="flex gap-4 pt-4">
                {[1, 1.5, 2, 3].map(w => (
                  <div key={w} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center space-y-2 flex-1">
                     <Circle size={24} strokeWidth={w} className="mx-auto text-aura-tech-cyan" />
                     <span className="text-[1em] font-mono text-gray-500">{w}px</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-4">
             <TechLabel color="white">Grids & Safe Area</TechLabel>
             <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight italic leading-tight">Geometria e Alinhamento</h4>
             <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
                Cada ícone é construído sobre um canvas de 24x24px, reservando uma margem interna (safe area) de 2px para evitar recortes visuais e garantir equilíbrio ótico.
             </p>
             <div className="grid grid-cols-4 gap-4 pt-4">
               {[16, 24, 32, 48].map(size => (
                 <div key={size} className="aspect-square bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 group overflow-hidden">
                    <Grid3X3 size={size/2} className="text-gray-700 group-hover:text-aura-tech-cyan transition-colors" />
                    <span className="text-[1em] font-mono text-gray-600">{size}px</span>
                 </div>
               ))}
             </div>
          </div>
       </div>

       <div className="space-y-6">
          <h5 className="text-[1em] font-mono text-gray-500 uppercase font-black tracking-widest text-center">Anatomia de um Ícone (Explosão Técnica)</h5>
          <IconAnatomyDiagram />
       </div>
    </div>
  </div>
);

const Semantics = () => (
  <div className="py-20 border-t border-white/5 space-y-12">
    <SectionHeader 
      icon={Accessibility}
      title="Semântica e Acessibilidade"
      subtitle="Ícones sozinhos podem ser ambíguos. A acessibilidade exige contexto e suporte textual."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <Card title="A Regra do Label">
          <div className="space-y-4">
             <div className="flex items-center gap-4 p-4 bg-aura-comfort-oat/10 border border-aura-comfort-oat/20 rounded-2xl">
                <div className="p-2 bg-aura-comfort-oat text-dark-bg rounded-lg"><Save size={18} /></div>
                <span className="text-[1em] font-mono font-bold text-white uppercase">SALVAR PROJETO</span>
             </div>
             <p className="text-[1em] text-gray-400 font-mono leading-relaxed italic">
               O uso de ícones acompanhados de Labels reduz drasticamente a ambiguidade e melhora o tempo de reconhecimento para novos usuários.
             </p>
          </div>
       </Card>

       <Card title="Aria-Labels (HTML)">
          <div className="p-4 bg-black/40 rounded-xl border border-white/10 font-mono text-[1em] space-y-2">
             <p className="text-aura-tech-cyan">&lt;button</p>
             <p className="pl-4 text-white">aria-Label="Notificações"</p>
             <p className="pl-4 text-white">title="Você tem novas mensagens"</p>
             <p className="text-aura-tech-cyan">&gt;</p>
             <p className="pl-4 text-gray-500">&lt;BellIcon /&gt;</p>
             <p className="text-aura-tech-cyan">&lt;/button&gt;</p>
          </div>
          <p className="text-[1em] text-gray-500 mt-4 leading-tight">Garantia de que leitores de tela entendam o propósito da ação.</p>
       </Card>

       <Card title="Alinhamento Ótico">
          <div className="flex justify-center gap-12 py-4">
             <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/5 border border-red-500/30 rounded-xl flex items-center justify-center">
                   <Triangle size={24} className="text-white opacity-40" />
                </div>
                <TechLabel color="red">Mecânico</TechLabel>
             </div>
             <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/5 border border-aura-comfort-green/30 rounded-xl flex items-center justify-center">
                   <Triangle size={24} className="text-white translate-x-0.5 -translate-y-0.5" />
                </div>
                <TechLabel color="green">Ótico</TechLabel>
             </div>
          </div>
       </Card>
    </div>
  </div>
);

const LibraryShowcase = () => (
  <div className="py-20 border-t border-white/5 space-y-12">
    <SectionHeader 
      icon={Layout}
      title="Sistemas de Iconografia"
      subtitle="Referências globais e bibliotecas adotadas pelo Laboratório."
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {[
         { n: "Lucide React", u: "https://lucide.dev/", d: "Padrão oficial do LabInterface. Minimalista e modular." },
         { n: "Material Icons", u: "https://m3.material.io/styles/icons/", d: "O sistema geométrico robusto do Google." },
         { n: "Apple SF Symbols", u: "https://developer.apple.com/sf-symbols/", d: "Símbolos integrados à tipografia SF Pro." },
         { n: "Heroicons", u: "https://heroicons.com/", d: "Ícones otimizados para integração com Tailwind CSS." },
         { n: "Phosphor Icons", u: "https://phosphoricons.com/", d: "Flexibilidade total com múltiplos pesos e estilos." },
         { n: "Carbon Icons", u: "https://carbondesignsystem.com/", d: "A estética industrial e técnica da IBM." },
         { n: "Feather Icons", u: "https://feathericons.com/", d: "A raiz minimalista da iconografia digital moderna." },
         { n: "Noun Project", u: "https://thenounproject.com/", d: "O maior repositório semântico global." }
       ].map(lib => (
         <a key={lib.n} href={lib.u} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-aura-tech-cyan/40 transition-all flex flex-col h-full group">
            <h5 className="text-white font-bold uppercase text-[1em] mb-2 group-hover:text-aura-tech-cyan transition-colors">{lib.n}</h5>
            <p className="text-[1em] text-gray-500 font-mono leading-tight mb-4 flex-1">{lib.d}</p>
            <ExternalLink size={12} className="text-gray-700 group-hover:text-aura-tech-cyan" />
         </a>
       ))}
    </div>
  </div>
);

const BestPractices = () => (
  <div className="py-20 border-t border-white/5 space-y-12">
    <SectionHeader 
      icon={CheckCircle2}
      title="Boas Práticas e Erros"
      subtitle="Regras de ouro para manter a integridade visual do sistema iconográfico."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       <Card title="Checklist de Qualidade" className="bg-aura-comfort-green/[0.03] border-aura-comfort-green/20">
          <ul className="space-y-3">
             {[
               "Consistência de stroke (ex: todos com 2px).",
               "Mesmo raio de canto (border-radius) para todos os ícones.",
               "Alinhamento ótico em formas assimétricas (triângulos).",
               "Labels acessíveis e/ou text-tooltips.",
               "Grades unificadas (bounding box constante).",
               "Contraste mínimo que atenda WCAG AA.",
               "Simplicidade formal em resoluções baixas."
             ].map(item => (
               <li key={item} className="flex items-center gap-3 text-[1em] font-mono text-gray-300">
                  <CheckCircle2 size={14} className="text-aura-comfort-green" />
                  {item}
               </li>
             ))}
          </ul>
       </Card>

       <Card title="Erros Críticos para Evitar" className="bg-red-500/[0.03] border-red-500/20">
          <ul className="space-y-3">
             {[
               "Misturar bibliotecas com estilos diferentes.",
               "Ícones excessivamente detalhados (ruído visual).",
               "Uso exclusivo de ícones sem texto em menus principais.",
               "Stroke inconsistente entre ícones vizinhos.",
               "Falta de alinhamento no pixel-grid (blur visual).",
               "Ícones decorativos que não comunicam função.",
               "Tamanhos de bounding-box inconsistentes."
             ].map(item => (
               <li key={item} className="flex items-center gap-3 text-[1em] font-mono text-gray-300">
                  <XCircle size={14} className="text-red-500" />
                  {item}
               </li>
             ))}
          </ul>
       </Card>
    </div>
  </div>
);

const ReadingList = () => (
  <div className="py-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
     <div className="space-y-4">
        <h4 className="text-xl font-display font-black text-white uppercase italic">Fontes e Bibliografia</h4>
        <p className="text-[1em] text-gray-400 font-mono leading-relaxed">
           A iconografia no design de informação baseia-se em décadas de pesquisa sobre percepção visual e semiótica aplicada.
        </p>
        <div className="grid grid-cols-1 gap-2">
           {[
             { t: "The Design of Everyday Things", a: "Don Norman" },
             { t: "Visual Display of Quantitative Information", a: "Edward Tufte" },
             { t: "Information Architecture", a: "Rosenfeld & Morville" },
             { t: "Universal Principles of Design", a: "Lidwell, Holden & Butler" }
           ].map(book => (
             <div key={book.t} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[1em] font-mono text-white font-bold uppercase">{book.t}</span>
                <span className="text-[1em] font-mono text-gray-500">{book.a}</span>
             </div>
           ))}
        </div>
     </div>
     <div className="p-8 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[40px] flex flex-col justify-center gap-6">
        <div className="flex items-center gap-3">
           <Zap className="text-aura-tech-cyan" size={20} />
           <h5 className="text-white font-bold uppercase tracking-widest text-[1em]">Wayfinding Digital</h5>
        </div>
        <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
           Dominar o uso de ícones é dominar o "wayfinding" (orientação espacial) em ambientes virtuais. Um sistema de sinais mal projetado gera uma interface "muda" ou, pior, confusa.
        </p>
        <div className="flex gap-2">
           <TechLabel color="cyan">UX</TechLabel>
           <TechLabel color="white">Information Design</TechLabel>
           <TechLabel color="white">Semiotics</TechLabel>
        </div>
     </div>
  </div>
);

// --- Main Page Component ---

export const IconsSinaisDocumentation = () => {
  return (
    <div className="space-y-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Introduction />
        <Universality />
        <Syntax />
        <Semantics />
        <LibraryShowcase />
        <BestPractices />
        <ReadingList />
      </motion.div>
    </div>
  );
};















