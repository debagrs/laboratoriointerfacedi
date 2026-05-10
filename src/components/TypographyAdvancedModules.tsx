import React from 'react';
import { motion } from 'motion/react';
import { 
  Type, Layers, Layout, Zap, Eye, Monitor, Box, BookOpen, 
  Settings, PenTool, CheckCircle2, XCircle, Globe, Link2, 
  Brain, Heart, PenLine, Sparkles, Scale, Maximize, Search,
  ArrowRight, MousePointer2, Smartphone, Cpu, ExternalLink, Workflow
} from 'lucide-react';
import { cn } from '../lib/utils';

export const TechLabel = ({ children, color = "cyan", className }: { children: React.ReactNode, color?: "cyan" | "green" | "amber" | "red" | "white" | "purple" | "clay", className?: string }) => (
  <span className={cn(
    "text-base font-mono px-3 py-1 rounded border uppercase tracking-widest leading-none inline-block font-bold",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "amber" && "text-amber-500 border-amber-500/30 bg-amber-500/5",
    color === "red" && "text-red-500 border-red-500/30 bg-red-500/5",
    color === "purple" && "text-purple-400 border-purple-400/30 bg-purple-400/5",
    color === "white" && "text-white border-white/30 bg-white/5",
    color === "clay" && "text-aura-comfort-clay border-aura-comfort-clay/30 bg-aura-comfort-clay/5",
    className
  )}>
    {children}
  </span>
);

export const SectionHeader = ({ title, subtitle, icon: Icon, colorClass = "text-aura-tech-cyan" }: { title: string, subtitle?: string, icon: any, colorClass?: string }) => (
  <div className="flex flex-col gap-2 mb-10">
     <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]", colorClass)}>
           <Icon size={20} />
        </div>
        <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter italic">{title}</h3>
     </div>
     {subtitle && <p className="text-xl font-mono text-white uppercase tracking-widest ml-12 font-black italic">{subtitle}</p>}
  </div>
);

export const TypoInterfaceModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Brain}
      title="Tipografia como Interface"
      subtitle="Estrutura Cognitiva • Arquitetura de Informação"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="text-2xl text-white font-mono leading-relaxed font-black italic">
          A tipografia não é uma mera escolha estética de "qual fonte usar". Em ambientes digitais, 
          <span className="text-aura-tech-cyan underline decoration-aura-tech-cyan/30 underline-offset-8"> a tipografia é a própria interface</span>. 
          Ela organiza a leitura, conduz a navegação e define a escaneabilidade.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {['Leitura', 'Navegação', 'Escaneabilidade', 'Hierarquia', 'Orientação Cognitiva', 'Percepção de Qualidade', 'Emoção', 'Comportamento'].map(item => (
            <div key={item} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
               <div className="w-1.5 h-1.5 bg-aura-tech-cyan rounded-full" />
               <span className="text-base font-mono text-gray-200 uppercase tracking-widest font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[32px] space-y-8 flex flex-col justify-center">
        <blockquote className="text-2xl md:text-3xl font-display font-black text-white italic leading-tight">
          "A tipografia existe para honrar o conteúdo."
        </blockquote>
        <div className="space-y-2">
          <p className="text-base font-mono text-aura-tech-cyan uppercase font-black tracking-widest">Robert Bringhurst</p>
          <p className="text-base text-gray-100 font-mono italic font-bold">The Elements of Typographic Style</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <TechLabel color="clay">UX Design</TechLabel>
          <TechLabel color="cyan">Information Architecture</TechLabel>
          <TechLabel color="white">Interaction Design</TechLabel>
        </div>
      </div>
    </div>
  </div>
);

export const TypoAnatomyModule = () => {
  const anatomyTerms = [
    { term: "Ápice", chars: "A", desc: "Ponto formado na parte superior, onde os traços se encontram.", highlight: "top-[10%] left-[45%] w-4 h-4" },
    { term: "Vértice", chars: "V", desc: "Ângulo formado na parte inferior de uma letra.", highlight: "bottom-[10%] left-[45%] w-4 h-4" },
    { term: "Ombro", chars: "h", desc: "Arco presente em letras como h, n ou m.", highlight: "top-[40%] right-[30%] w-6 h-6" },
    { term: "Espinha", chars: "S", desc: "O traço curvo principal da letra S.", highlight: "top-[45%] left-[45%] w-8 h-8" },
    { term: "Orelha", chars: "g", desc: "Pequeno traço no lado superior direito do bojo do g.", highlight: "top-[25%] right-[20%] w-4 h-4" },
    { term: "Ligação", chars: "g", desc: "Parte que une os dois bojos do g de dois andares.", highlight: "top-[55%] left-[48%] w-4 h-4" },
    { term: "Travessa", chars: "f", desc: "Traço horizontal que cruza a haste em f ou t.", highlight: "top-[38%] left-[35%] w-12 h-2" },
    { term: "Perna", chars: "K", desc: "Traço inferior inclinado da letra K ou R.", highlight: "bottom-[20%] right-[25%] w-8 h-8" }
  ];

  return (
    <div className="py-24 border-t border-white/10 space-y-16">
      <SectionHeader 
        icon={PenTool}
        title="Glossário Anatômico"
        subtitle="Micro-estruturas • Terminologia Técnica"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {anatomyTerms.map((item, i) => (
          <div key={i} className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] group hover:border-aura-tech-cyan/40 transition-all flex flex-col items-center gap-6 shadow-xl">
             <div className="relative h-72 w-full flex items-center justify-center bg-[#050505] rounded-2xl border border-white/20 overflow-hidden shadow-2xl group-hover:border-aura-tech-cyan/50 transition-all">
                <span className="text-[22rem] font-display font-black text-white select-none absolute leading-none tracking-tighter opacity-100">
                   {item.chars}
                </span>
                <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className={cn("absolute bg-aura-tech-cyan rounded-full blur-3xl", item.highlight)} 
                />
                <div className={cn("absolute bg-aura-tech-cyan/90 border-4 border-aura-tech-cyan rounded-full shadow-[0_0_40px_rgba(34,211,238,0.7)] z-20", item.highlight)} />
             </div>
             <div className="text-center space-y-3 px-4">
                <h5 className="text-3xl font-display font-black text-white uppercase italic tracking-widest border-b border-aura-tech-cyan/30 pb-2 inline-block">{item.term}</h5>
                <p className="text-xl font-mono text-white leading-tight uppercase font-black">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="p-12 bg-aura-tech-blue/20 border border-white/10 rounded-[48px] space-y-12">
         <div className="text-center space-y-2">
            <h4 className="text-4xl font-display font-black text-white uppercase italic tracking-widest">Malha Fundamental</h4>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
               <div className="flex items-center gap-2">
                  <span className="text-[#F472B6] font-black">I</span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Baseline</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-white font-black italic">X</span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Altura-X</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-aura-tech-cyan font-black">↑</span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Ascendentes</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-[#FBBF24] font-black">↓</span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Descendentes</span>
               </div>
            </div>
         </div>

          <div className="relative w-full bg-[#020202] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl group">
             <img 
               src="/malha-fundamental.png" 
               alt="Malha Fundamental - Anatomia Tipográfica" 
               className="w-full h-auto block object-contain"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
      </div>
    </div>
  );
};

export const TypoTrackingKerningModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Workflow}
      title="Tracking & Kerning"
      subtitle="Espaçamento • Ritmo • Legibilidade"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="space-y-4">
           <TechLabel color="cyan">Tracking (Espaçamento Global)</TechLabel>
           <p className="text-xl text-white font-mono leading-relaxed font-black italic">
             Ajuste uniforme do espaço entre todas as letras de um bloco de texto. Essencial para títulos (all-caps) e micro-textos.
           </p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
           <div className="space-y-2">
              <span className="text-base font-mono text-gray-200 uppercase font-black tracking-widest">Tracking Normal</span>
              <p className="text-5xl font-display font-black text-white tracking-normal uppercase italic">Laboratório</p>
           </div>
           <div className="space-y-2">
              <span className="text-base font-mono text-gray-200 uppercase font-black tracking-widest">Tracking Solto (+10%)</span>
              <p className="text-5xl font-display font-black text-white tracking-[0.1em] uppercase italic">Laboratório</p>
           </div>
           <div className="space-y-2">
              <span className="text-base font-mono text-gray-200 uppercase font-black tracking-widest">Tracking Apertado (-5%)</span>
              <p className="text-5xl font-display font-black text-white tracking-[-0.05em] uppercase italic">Laboratório</p>
           </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
           <TechLabel color="green">Kerning (Ajuste de Pares)</TechLabel>
           <p className="text-xl text-white font-mono leading-relaxed font-black italic">
             Ajuste fino do espaço entre dois caracteres específicos para corrigir ilusões de ótica e garantir ritmo visual.
           </p>
        </div>
        <div className="p-10 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[40px] flex flex-col items-center justify-center gap-8 shadow-2xl">
           <div className="flex items-baseline gap-1">
              <span className="text-7xl font-display font-black text-white">V</span>
              <div className="w-2 h-16 bg-red-500/20 border-x border-red-500/50 flex items-center justify-center">
                 <span className="text-sm font-mono text-red-500 rotate-90 whitespace-nowrap font-bold">BAD KERNING</span>
              </div>
              <span className="text-7xl font-display font-black text-white">A</span>
           </div>
           <div className="flex items-baseline gap-[-0.5rem]">
              <span className="text-7xl font-display font-black text-white">V</span>
              <div className="w-1 h-16 bg-aura-comfort-green/20 border-x border-aura-comfort-green/50 flex items-center justify-center">
                 <span className="text-sm font-mono text-aura-comfort-green rotate-90 whitespace-nowrap font-bold">PERFECT</span>
              </div>
              <span className="text-7xl font-display font-black text-white -ml-6">A</span>
           </div>
           <p className="text-sm font-mono text-gray-200 uppercase tracking-widest text-center max-w-xs font-bold">
             *Note como o 'V' e o 'A' precisam se encaixar para evitar o "buraco" visual.
           </p>
        </div>
      </div>
    </div>
  </div>
);

export const TypoContemporaryModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Monitor}
      title="Tipografia Digital Contemporânea"
      subtitle="Viewport • Retina • Dark Mode"
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { t: "Fluid Typography", d: "A tipografia escala dinamicamente com base no viewport usando clamp(), sem breakpoints fixos." },
        { t: "Anti-aliasing", d: "Em telas de alta densidade (Retina), o rendering exige ajustes finos no peso visual via CSS (-webkit-font-smoothing)." },
        { t: "Dark Mode", d: "Textos brancos sobre fundos escuros sofrem irradiação visual, parecendo mais espessos. Exigem redução de peso." }
      ].map(item => (
        <div key={item.t} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-aura-tech-cyan/50 transition-colors">
          <h5 className="text-xl font-display font-black text-white uppercase italic mb-4">{item.t}</h5>
          <p className="text-xl text-white font-mono leading-relaxed font-black">{item.d}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TypoScaleModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Scale}
      title="Escala Tipográfica & Grids"
      subtitle="Modular Scale • 8pt Grid"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       <div className="space-y-6">
          <p className="text-xl text-white font-mono leading-relaxed font-black italic">
            A harmonia vertical e a progressão dos tamanhos não são arbitrárias. Utilizamos a <strong>Modular Scale</strong> combinada com o <strong>8pt Grid</strong> para ritmo vertical perfeito.
          </p>
          <div className="p-6 bg-black/50 border border-white/10 rounded-2xl font-mono text-base text-aura-tech-cyan overflow-x-auto font-bold">
             <code>
               font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);<br/>
               line-height: calc(1ex / 0.32);<br/>
               margin-bottom: max(1.5rem, 4vh);
             </code>
          </div>
       </div>
       <div className="space-y-8 bg-white/5 p-8 rounded-[32px] border border-white/10">
          <div className="space-y-1 border-b border-white/10 pb-4">
             <TechLabel color="clay" className="mb-2">H1 Display</TechLabel>
             <h1 className="text-5xl font-display font-black text-white">48px / 1.1x</h1>
          </div>
          <div className="space-y-1 border-b border-white/10 pb-4">
             <TechLabel color="cyan" className="mb-2">H2 Section</TechLabel>
             <h2 className="text-3xl font-display font-bold text-white">32px / 1.2x</h2>
          </div>
          <div className="space-y-1 border-b border-white/10 pb-4">
             <TechLabel color="white" className="mb-2">Body Base</TechLabel>
             <p className="text-base text-white font-lexend font-bold italic">16px / 1.5x (Mínimo acessível garantido)</p>
          </div>
       </div>
    </div>
  </div>
);

export const TypoVariableFontsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Layers}
      title="Variable Fonts"
      subtitle="Performance • Eixos Customizáveis"
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       {[
         { name: "Inter", url: "https://rsms.me/inter/", desc: "A fonte open-source mais versátil para UI, com features de optical size perfeitas para telas." },
         { name: "Roboto Flex", url: "https://fonts.google.com/specimen/Roboto+Flex", desc: "A expansão monumental do Roboto com 12 eixos customizáveis, do peso ao slant." },
         { name: "Geist", url: "https://vercel.com/font", desc: "Criada pela Vercel especificamente para desenvolvedores e UIs altamente técnicas." },
         { name: "Recursive", url: "https://www.recursive.design/", desc: "Um experimento ousado de tipografia variável com cinco eixos." },
         { name: "IBM Plex", url: "https://www.ibm.com/plex/", desc: "Sistema tipográfico corporativo meticulosamente projetado com identidade forte." },
         { name: "SF Pro", url: "https://developer.apple.com/fonts/", desc: "A fundação do ecossistema Apple. Dinâmica, escalável e perfeitamente anti-aliased." }
       ].map(font => (
         <a key={font.name} href={font.url} target="_blank" rel="noopener noreferrer" className="block p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/5 transition-all group">
            <h5 className="text-2xl font-display font-black text-white uppercase italic mb-2 group-hover:text-aura-tech-cyan transition-colors">{font.name}</h5>
            <p className="text-lg text-white font-mono mb-6 font-black leading-tight">{font.desc}</p>
            <div className="flex items-center gap-2 text-aura-tech-cyan text-base font-mono uppercase tracking-widest font-black">
               Explorar <ArrowRight size={14} />
            </div>
         </a>
       ))}
    </div>
  </div>
);

export const TypoSystemsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Workflow}
      title="Tipografia em Design Systems"
      subtitle="Tokens • Figma • Tailwind"
    />
    <div className="p-12 bg-white/[0.02] border border-white/10 rounded-[48px]">
       <h4 className="text-3xl font-display font-black text-white uppercase italic mb-8">Tipografia é a Infraestrutura</h4>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
           <p className="text-xl text-white font-mono leading-relaxed font-black italic">
             Sistemas maduros não usam valores fixos. Eles usam **Design Tokens**. Um tamanho não é "24px", é <code className="text-aura-tech-cyan">text-heading-md</code>. Isso permite a reestruturação em escala global com alteração de uma única linha no JSON de tokens.
           </p>
          </div>
          <div className="space-y-3 font-mono text-base font-bold">
            <div className="flex justify-between p-4 bg-black/40 rounded-xl border border-white/5">
               <span className="text-aura-comfort-clay">heading-xl</span>
               <span className="text-white">font-size: var(--text-h1)</span>
            </div>
            <div className="flex justify-between p-4 bg-black/40 rounded-xl border border-white/5">
               <span className="text-aura-comfort-clay">body-md</span>
               <span className="text-white">font-size: var(--text-base)</span>
            </div>
            <div className="flex justify-between p-4 bg-black/40 rounded-xl border border-white/5">
               <span className="text-aura-comfort-clay">caption-sm</span>
               <span className="text-white">font-size: var(--text-sm)</span>
            </div>
         </div>
       </div>
    </div>
  </div>
);

export const TypoUXWritingModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={PenLine}
      title="Tipografia + UX Writing"
      subtitle="Microcopy • Tom de Voz"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-8 border border-white/10 rounded-[32px] bg-white/5 space-y-6">
        <TechLabel color="red">Erro Técnico (Inadequado)</TechLabel>
        <p className="text-xl font-mono text-white uppercase tracking-widest font-black italic">
           ERROR 402: USER_NOT_FOUND_IN_DB_EXCEPTION_THROWN
        </p>
      </div>
      <div className="p-8 border border-aura-comfort-green/30 rounded-[32px] bg-aura-comfort-green/5 space-y-6">
        <TechLabel color="green">Erro Humano (Adquado)</TechLabel>
        <p className="text-2xl font-lexend text-white leading-tight">
           Não conseguimos encontrar sua conta. Que tal tentar outro e-mail?
        </p>
      </div>
    </div>
    <p className="text-xl text-white font-mono leading-relaxed max-w-4xl font-black italic">
      A formatação altera a percepção do tom de voz. Textos em maiúsculas (all-caps) aumentam o senso de urgência. Textos em peso leve (Light/Regular) soam mais amigáveis e conversacionais.
    </p>
  </div>
);

export const TypoAccessibilityModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Eye}
      title="Acessibilidade Tipográfica"
      subtitle="WCAG • Contraste • Dislexia"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-xl text-white font-mono leading-relaxed font-black italic">
            O design falha se não pode ser lido por todos. Garantimos o redimensionamento sem perda de contexto (até 200% de zoom) e o uso de fontes testadas contra confusões de caracteres (como I, l, e 1).
          </p>
          <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/20 transition-colors text-base">
             Ler Diretrizes WCAG
          </a>
       </div>
        <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 space-y-4">
          <h5 className="text-base font-mono text-aura-tech-cyan uppercase font-black tracking-widest mb-6 underline decoration-2 underline-offset-8">Checklist WCAG</h5>
          {[
            "Contraste adequado (> 4.5:1)",
            "Line-height confortável (min 1.5x)",
            "Mínimo de 16px (1em) em corpo de texto",
            "Hierarquia de H1 a H6 clara e sequencial",
            "Evitar texto justificado",
            "Largura de linha ideal (45 a 75 caracteres)",
            "Dark mode acessível"
          ].map((item, i) => (
             <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-aura-comfort-green shrink-0" />
                <span className="text-base font-mono text-gray-200 font-bold">{item}</span>
             </div>
          ))}
       </div>
    </div>
  </div>
);

export const TypoEmotionModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Heart}
      title="Tipografia e Emoção"
      subtitle="Donald Norman • Emotional Design"
    />
    <div className="p-12 bg-white/5 border border-white/10 rounded-[48px] text-center max-w-4xl mx-auto space-y-8">
      <h3 className="text-4xl md:text-5xl font-display font-black text-white italic">"Design atrativo funciona melhor."</h3>
      <p className="text-2xl text-white font-mono leading-relaxed font-black italic">
        Tipos <strong>serifados</strong> evocam tradição, autoridade e confiança institucional. Tipos <strong>grotescos</strong> comunicam neutralidade e modernidade. Tipos <strong>humanistas</strong> trazem calor e proximidade, essenciais para onboarding e mensagens de acolhimento.
      </p>
    </div>
  </div>
);

export const TypoAuthorsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={BookOpen}
      title="Grandes Autores"
      subtitle="Teoria & Prática"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        { [ { name: "Robert Bringhurst", desc: "Autoridade máxima em estilo tipográfico estrutural." }, { name: "Ellen Lupton", desc: "Tipografia pensada para a tela e interação." }, { name: "Emil Ruder", desc: "Pioneiro da tipografia funcional e grid suíço." }, { name: "Josef Müller-Brockmann", desc: "O mestre absoluto dos sistemas de grid." }, { name: "Jan Tschichold", desc: "A revolução da nova tipografia assímétrica." }, { name: "Massimo Vignelli", desc: "O minimalismo e o uso restrito a poucas e ótimas famílias." } ].map(author => (
          <div key={author.name} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl group hover:bg-white/5 transition-all">
             <h5 className="text-lg font-bold text-white uppercase tracking-widest mb-2 underline decoration-aura-tech-cyan/50">{author.name}</h5>
             <p className="text-lg text-white font-mono leading-tight font-black italic">{author.desc}</p>
          </div>
        ))}
    </div>
  </div>
);

export const TypoReferenceSystemsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Globe}
      title="Sistemas de Referência"
      subtitle="Benchmarks Globais"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { t: "Material Design", url: "https://m3.material.io/styles/typography/overview" },
        { t: "Apple HIG", url: "https://developer.apple.com/design/human-interface-guidelines/typography" },
        { t: "IBM Carbon", url: "https://carbondesignsystem.com/guidelines/typography/overview/" },
        { t: "Atlassian", url: "https://atlassian.design/foundations/typography/" },
        { t: "GOV.UK", url: "https://design-system.service.gov.uk/styles/typography/" }
      ].map(sys => (
         <a key={sys.t} href={sys.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-between hover:border-aura-tech-cyan/40 transition-colors group">
            <span className="text-base font-display font-black text-white uppercase italic">{sys.t}</span>
            <ExternalLink size={16} className="text-white group-hover:text-aura-tech-cyan" />
         </a>
      ))}
    </div>
  </div>
);

export const TypoToolsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={Settings}
      title="Ferramentas Essenciais"
      subtitle="Workflow do Designer"
    />
    <div className="flex flex-wrap gap-4">
      {[
        { t: "Type Scale", url: "https://typescale.com/" },
        { t: "Modular Scale", url: "https://www.modularscale.com/" },
        { t: "Fluid Type Scale", url: "https://fluid-type-scale.com/" },
        { t: "Fontpair", url: "https://www.fontpair.co/" },
        { t: "Variable Fonts", url: "https://v-fonts.com/" }
      ].map(tool => (
        <a key={tool.t} href={tool.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-base font-mono text-gray-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 font-bold">
          {tool.t} <Link2 size={14} />
        </a>
      ))}
    </div>
  </div>
);

export const TypoBestPracticesModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
    <SectionHeader 
      icon={CheckCircle2}
      title="Boas Práticas & Erros Comuns"
      subtitle="Do's and Don'ts"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       <div className="p-8 border border-aura-comfort-green/30 bg-aura-comfort-green/5 rounded-[32px] space-y-6">
          <div className="flex items-center gap-3 text-aura-comfort-green mb-8">
             <CheckCircle2 size={24} />
             <h4 className="text-2xl font-display font-black uppercase italic">Do's</h4>
          </div>
          <ul className="space-y-4">
            {[
              "Escalas consistentes baseadas em matemática",
              "Contraste adequado para fundos escuros e claros",
              "Line-height confortável (>150% para corpo)",
              "Poucas famílias tipográficas (1 a 2 max)",
              "Tokens semânticos documentados"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base font-mono text-gray-100 font-bold">
                 <CheckCircle2 size={16} className="text-aura-comfort-green mt-1 shrink-0" /> {item}
              </li>
            ))}
          </ul>
       </div>
       <div className="p-8 border border-red-500/30 bg-red-500/5 rounded-[32px] space-y-6">
          <div className="flex items-center gap-3 text-red-500 mb-8">
             <XCircle size={24} />
             <h4 className="text-2xl font-display font-black uppercase italic">Don'ts</h4>
          </div>
          <ul className="space-y-4">
            {[
              "Texto pequeno demais (abaixo de 16px/1em para leitura longa)",
              "Muitas fontes na mesma interface",
              "Contraste baixo, causando esforço visual",
              "Colunas largas demais (cansativas para o olho)",
              "Tracking (espaçamento) excessivo em caixa baixa"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base font-mono text-gray-100 font-bold">
                 <XCircle size={16} className="text-red-500 mt-1 shrink-0" /> {item}
              </li>
            ))}
          </ul>
       </div>
    </div>
  </div>
);

export const AdvancedTypographyShowcase = () => (
  <div className="space-y-0">
    <TypoAnatomyModule />
    <TypoTrackingKerningModule />
    <TypoContemporaryModule />
    <TypoScaleModule />
    <TypoVariableFontsModule />
    <TypoSystemsModule />
    <TypoUXWritingModule />
    <TypoAccessibilityModule />
    <TypoEmotionModule />
    <TypoAuthorsModule />
    <TypoReferenceSystemsModule />
    <TypoToolsModule />
    <TypoBestPracticesModule />
  </div>
);
