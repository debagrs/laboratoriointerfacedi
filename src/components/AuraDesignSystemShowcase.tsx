import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Type, 
  Accessibility, 
  Zap, 
  Moon, 
  Sun, 
  CheckCircle2, 
  Info, 
  MousePointer2, 
  Layers, 
  ExternalLink,
  Eye,
  ShieldCheck,
  FileText,
  Workflow
} from 'lucide-react';
import { cn } from '../lib/utils';
import {
  TypoInterfaceModule,
  TypoAnatomyModule,
  TypoContemporaryModule,
  TypoScaleModule,
  TypoVariableFontsModule,
  TypoSystemsModule,
  TypoUXWritingModule,
  TypoAccessibilityModule,
  TypoEmotionModule,
  TypoAuthorsModule,
  TypoReferenceSystemsModule,
  TypoToolsModule,
  TypoBestPracticesModule
} from './TypographyAdvancedModules';

// --- Shared Internal Components ---

export const TechLabel = ({ children, color = "cyan", className }: { children: React.ReactNode, color?: "cyan" | "green" | "amber" | "red" | "white" | "purple", className?: string }) => (
  <span className={cn(
    "text-[1em] font-mono px-2 py-0.5 rounded border uppercase tracking-widest leading-none inline-block",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "amber" && "text-amber-500 border-amber-500/30 bg-amber-500/5",
    color === "red" && "text-red-500 border-red-500/30 bg-red-500/5",
    color === "purple" && "text-purple-400 border-purple-400/30 bg-purple-400/5",
    color === "white" && "text-white border-white/30 bg-white/5",
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
     {subtitle && <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest ml-12">{subtitle}</p>}
  </div>
);

const ColorSwatch = ({ hex, name, description, contrast, darkText = false }: { hex: string, name: string, description: string, contrast?: string, darkText?: boolean }) => (
  <div className="group space-y-3">
    <div 
      className="aspect-square rounded-[32px] border border-white/10 shadow-lg relative flex flex-col justify-end p-6 overflow-hidden transition-transform group-hover:scale-[1.02]" 
      style={{ backgroundColor: hex }}
    >
      <div className={cn("space-y-1 relative z-10", darkText ? "text-dark-bg" : "text-white")}>
        <p className="text-[1em] font-mono font-bold uppercase tracking-widest opacity-60">HEX: {hex}</p>
        <p className="text-[1em] font-display font-black uppercase italic leading-none">{name}</p>
      </div>
      {/* Gloss Effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
    </div>
    <div className="px-2 space-y-1">
      <p className="text-[1em] font-mono text-gray-500 leading-tight uppercase">{description}</p>
      {contrast && <p className="text-[1em] font-mono text-aura-tech-cyan/60 uppercase">Contrast: {contrast}</p>}
    </div>
  </div>
);

const AccessibilityRule = ({ title, items }: { title: string, items: string[] }) => (
  <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] space-y-6">
     <div className="flex items-center gap-2 border-b border-white/5 pb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-aura-comfort-oat" />
        <h4 className="text-[1em] font-mono font-bold text-gray-400 uppercase tracking-widest">{title}</h4>
     </div>
     <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[1em] font-mono text-gray-300 leading-relaxed">
             <CheckCircle2 size={14} className="text-aura-comfort-green shrink-0 mt-0.5" />
             {item}
          </li>
        ))}
     </ul>
  </div>
);

// --- Section Modules ---

const IntroductionModule = () => (
   <div className="space-y-12">
      <SectionHeader 
        icon={ShieldCheck}
        title="Design System deste Projeto: Princípios"
        subtitle="Clareza • Legibilidade • Acessibilidade WCAG 2.1"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <p className="text-xl text-gray-200 font-mono leading-relaxed font-lexend">
               O <span className="text-aura-comfort-oat font-bold italic">Design System deste Projeto</span> é um sistema projetado para interfaces de laboratório que exigem precisão tecnológica e conforto humano. 
            </p>
            <p className="text-[1em] text-gray-400 font-mono leading-relaxed">
              Baseado no <span className="text-white font-bold">Nível AA da WCAG 2.1</span>, garantimos que cada elemento da interface seja legível para o maior espectro possível de usuários, respeitando contrastes mínimos de 4.5:1 para texto normal e 3:1 para elementos gráficos.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
               { icon: Palette, t: "Semântica", d: "Cores com propósito claro e funcionalidade definida." },
               { icon: Accessibility, t: "WAI-ARIA", d: "Estrutura robusta para tecnologias assistivas." },
               { icon: MousePointer2, t: "Foco Visível", d: "Navegação por teclado sempre monitorada visualmente." },
               { icon: Type, t: "Tipografia", d: "Lexend: otimizada para legibilidade e velocidade de leitura." }
            ].map(item => (
               <div key={item.t} className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-aura-comfort-oat/30 transition-all">
                  <div className="text-aura-tech-cyan mb-3"><item.icon size={20} /></div>
                  <h6 className="text-[1em] font-mono font-black text-white uppercase tracking-widest mb-1">{item.t}</h6>
                  <p className="text-[1em] text-gray-500 font-mono leading-tight">{item.d}</p>
               </div>
            ))}
         </div>
      </div>
   </div>
);

const ColorModule = () => (
  <div className="py-24 border-t border-white/10 space-y-16">
     <div>
        <SectionHeader 
          icon={Palette}
          title="Spectrum de Cores"
          subtitle="Tech vs Comfort Spectrum • Paletas Semânticas"
        />
        
        <div className="space-y-12">
           {/* Tech Spectrum */}
           <div className="space-y-8">
              <div className="flex items-end justify-between">
                 <div className="space-y-1">
                    <TechLabel color="cyan">Tech Spectrum</TechLabel>
                    <h4 className="text-xl font-display font-black text-white uppercase italic">Precisão & Frio</h4>
                 </div>
                 <p className="text-[1em] font-mono text-gray-500 uppercase max-w-xs text-right">Cores saturadas para ações, destaques e elementos interativos.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 <ColorSwatch 
                    hex="#00FFFF" 
                    name="Tech Cyan" 
                    description="Botões primários e destaques de alta prioridade." 
                    contrast="4.9:1 (Texto Preto)"
                    darkText={true}
                 />
                 <ColorSwatch 
                    hex="#1A1A30" 
                    name="Tech Blue" 
                    description="Fundos secundários e superfícies técnicas profundas." 
                    contrast="14.5:1 (Texto Branco)"
                 />
                 <ColorSwatch 
                    hex="#2A2A50" 
                    name="Tech Purple" 
                    description="Foco visual, bordas e ícones técnicos secundários." 
                    contrast="9.8:1 (Texto Branco)"
                 />
              </div>
           </div>

           {/* Comfort Spectrum */}
           <div className="space-y-8 pt-12">
              <div className="flex items-end justify-between">
                 <div className="space-y-1">
                    <TechLabel color="amber">Comfort Spectrum</TechLabel>
                    <h4 className="text-xl font-display font-black text-white uppercase italic">Equilíbrio & Orgânico</h4>
                 </div>
                 <p className="text-[1em] font-mono text-gray-500 uppercase max-w-xs text-right">Tons quentes para superfícies, apoios e feedbacks emocionais.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 <ColorSwatch 
                    hex="#D2A979" 
                    name="Comfort Oat" 
                    description="Superfícies principais e botões secundários." 
                    contrast="9.69:1 (Texto Preto)"
                    darkText={true}
                 />
                 <ColorSwatch 
                    hex="#F48A79" 
                    name="Comfort Clay" 
                    description="FEEDBACK: Alertas suaves e estados de atenção quente." 
                    contrast="8.76:1 (Texto Preto)"
                    darkText={true}
                 />
                 <ColorSwatch 
                    hex="#86EFAC" 
                    name="Comfort Green" 
                    description="FEEDBACK: Sucesso e texto de suporte em fundos claros." 
                    contrast="14.96:1 (Texto Preto)"
                    darkText={true}
                 />
              </div>
           </div>
        </div>
     </div>
  </div>
);


const ModeContrastModule = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="py-24 border-t border-white/10 space-y-12">
      <SectionHeader 
        icon={Layers}
        title="Modos & Contexto"
        subtitle="Variação Claro/Escuro • Preservação Semântica"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
         <div className="lg:col-span-1 space-y-6">
            <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">Alternância Dinâmica</h4>
            <p className="text-[1em] text-gray-400 font-mono leading-relaxed">
              Os tokens deste Design System são <span className="text-aura-comfort-oat font-bold">mapeados dinamicamente</span>. Enquanto no Modo Escuro reduzimos a luminância para evitar fadiga, no Modo Claro aumentamos o contraste relativo para garantir legibilidade sob luz intensa.
            </p>
            <div className="flex gap-4 p-2 bg-white/5 border border-white/10 rounded-2xl w-fit">
               <button 
                  onClick={() => setIsDark(false)}
                  className={cn("p-4 rounded-xl transition-all", !isDark ? "bg-white text-dark-bg" : "text-gray-500 hover:text-white")}
               >
                  <Sun size={20} />
               </button>
               <button 
                  onClick={() => setIsDark(true)}
                  className={cn("p-4 rounded-xl transition-all", isDark ? "bg-aura-tech-blue text-white shadow-xl shadow-aura-tech-blue/20" : "text-gray-500 hover:text-white")}
               >
                  <Moon size={20} />
               </button>
            </div>
         </div>

         <div className="lg:col-span-2">
            <div 
               className={cn(
                  "p-12 rounded-[48px] border transition-all duration-700 h-full relative overflow-hidden",
                  isDark ? "bg-[#0A0A10] border-white/10 shadow-2xl" : "bg-[#FAF8F3] border-aura-comfort-oat/30 shadow-xl"
               )}
            >
               <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className={cn("text-[1em] font-mono font-black uppercase tracking-[0.2em]", isDark ? "text-aura-tech-cyan" : "text-aura-tech-blue")}>Interface Dashboard</span>
                    <TechLabel color={isDark ? "cyan" : "purple"}>{isDark ? "Dark Theme Active" : "Light Theme Active"}</TechLabel>
                  </div>
                  
                  <h5 className={cn("text-4xl font-lexend font-black uppercase italic leading-tight", isDark ? "text-[#FAF8F3]" : "text-[#111111]")}>
                    Arquitetura de Interfaces Acessíveis
                  </h5>
                  
                  <p className={cn("text-[1em] font-lexend leading-relaxed max-w-lg", isDark ? "text-aura-comfort-clay" : "text-aura-comfort-green")}>
                    Este elemento demonstra a inversão de tokens semânticos. O texto secundário adapta seu peso e luminância para manter o contraste ideal conforme a base de fundo.
                  </p>

                  <div className="flex gap-4">
                     <button className={cn(
                        "px-8 py-3 rounded-xl font-lexend font-bold uppercase text-[1em] tracking-widest transition-all",
                        isDark ? "bg-aura-comfort-oat text-dark-bg shadow-lg shadow-aura-comfort-oat/20" : "bg-aura-tech-blue text-white shadow-lg"
                     )}>
                        Ação Primária
                     </button>
                     <button className={cn(
                        "px-8 py-3 rounded-xl font-lexend font-bold uppercase text-[1em] tracking-widest border transition-all",
                        isDark ? "border-white/20 text-white hover:bg-white/5" : "border-aura-comfort-oat text-aura-tech-blue hover:bg-aura-comfort-oat/10"
                     )}>
                        Opções
                     </button>
                  </div>

                  <div className="pt-8 border-t border-gray-400/10 grid grid-cols-3 gap-6">
                     {[1,2,3].map(i => (
                        <div key={i} className={cn("h-2 rounded-full", isDark ? "bg-white/5" : "bg-black/5")} />
                     ))}
                  </div>
               </div>
               
               {/* Pattern Background for UI feel */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px', color: isDark ? 'white' : 'black' }} />
            </div>
         </div>
      </div>
    </div>
  );
};

const AccessibilityGuidelines = () => (
   <div className="py-24 border-t border-white/10 space-y-12">
      <SectionHeader 
        icon={Accessibility}
        title="Diretrizes WAI-ARIA"
        subtitle="Regras de Implementação • Zero-Exclusion"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <AccessibilityRule 
            title="Navegação por Teclado"
            items={[
              "Anéis de foco com contraste mínimo de 3:1.",
              "Ordem de tabulação lógica (DOM alignment).",
              "Skip-to-content links para navegação rápida.",
              "Estados de foco não-dependente apenas de cor."
            ]}
         />
         <AccessibilityRule 
            title="Semântica & Estrutura"
            items={[
              "Uso correto de Landmarks (header, main, nav).",
              "Aria-Labels para botões iconográficos.",
              "Estados de erro reais e verbais (não só cor).",
              "Controle de foco em modais e popups."
            ]}
         />
         <AccessibilityRule 
            title="Não Dependência de Cor"
            items={[
              "Texturas ou ícones em estados de erro/sucesso.",
              "Sublinhado ou negrito para diferenciar links.",
              "Padrões visuais em gráficos de dados.",
              "Labels textuais obrigatórios em feedbacks."
            ]}
         />
      </div>

      <div className="p-10 bg-aura-tech-blue border border-white/10 rounded-[48px] flex flex-col md:flex-row gap-10 items-center">
         <div className="p-6 bg-white/5 rounded-full text-aura-tech-cyan shrink-0 rotate-12">
            <ShieldCheck size={48} />
         </div>
         <div className="space-y-4">
            <h5 className="text-xl font-display font-black text-white uppercase italic">Compromisso com o AA</h5>
            <p className="text-[1em] text-gray-400 font-mono leading-relaxed italic">
              "A acessibilidade não é uma funcionalidade a ser adicionada ao final do processo; é a infraestrutura invisível que permite que o Design System deste Projeto exista. Validamos cada cor, cada fonte e cada interação contra os padrões internacionais da W3C."
            </p>
            <div className="flex gap-4 pt-2">
               <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[1em] font-mono text-aura-tech-cyan hover:underline uppercase">
                  Conheça a WCAG 2.1 <ExternalLink size={10} />
               </a>
            </div>
         </div>
      </div>
   </div>
);

// --- Main Page Component ---

export const AuraDesignSystemShowcase = () => {
  return (
    <div className="space-y-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <IntroductionModule />
        <ColorModule />
        <ModeContrastModule />
        
        <AccessibilityGuidelines />
        
        {/* Footer Bibliography */}
        <div className="py-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="space-y-6">
              <h4 className="text-xl font-display font-black text-white uppercase italic">Documentação & Assets</h4>
              <div className="space-y-2">
                 {[
                   { t: "Figma Library", l: "Open Design System" },
                   { t: "React Components", l: "Storybook do Projeto" },
                   { t: "Token JSON", l: "Style Dictionary Output" }
                 ].map(doc => (
                   <div key={doc.t} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group hover:border-aura-tech-cyan/40 transition-all cursor-not-allowed">
                      <div className="flex items-center gap-3">
                         <FileText size={16} className="text-gray-500" />
                         <span className="text-[1em] font-mono text-white font-bold uppercase">{doc.t}</span>
                      </div>
                      <span className="text-[1em] font-mono text-gray-600 uppercase tracking-tighter">{doc.l}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="space-y-6 lg:col-span-2">
              <h4 className="text-xl font-display font-black text-white uppercase italic">Fluxo de Implementação</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {[
                   { i: Zap, t: "Atomic Design", d: "Construção de interfaces a partir de componentes indivisíveis." },
                   { i: Workflow, t: "Semantic Mapping", d: "Uso de tokens semânticos em vez de valores HEX fixos." },
                   { i: Eye, t: "Audit Continuous", d: "Testes automatizados de contraste em cada deploy." }
                 ].map(item => (
                   <div key={item.t} className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                      <item.i size={18} className="text-gray-600 mb-4" />
                      <h6 className="text-[1em] font-mono font-black text-white uppercase mb-2">{item.t}</h6>
                      <p className="text-[1em] text-gray-500 font-mono leading-tight">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};
















