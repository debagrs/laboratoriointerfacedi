import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { 
  Box, Layers, Zap, MousePointer2, CheckCircle2, Search, 
  ChevronRight, AlertCircle, Eye, EyeOff, Layout, CreditCard, 
  Menu, ArrowRight, X, Loader2, Info, BookOpen, ExternalLink, ShieldCheck, Component, Frame, MonitorSmartphone, MousePointerClick, AlignLeft, ToggleLeft, PanelTop, SplitSquareHorizontal, BellRing, PieChart, Focus, Sparkles, LayoutGrid, Type, FileText, Blocks, LayoutTemplate, Database, AlertTriangle, Home, User
} from 'lucide-react';

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-white/5 rounded-xl border border-white/10">
        <Icon size={24} className="text-aura-tech-cyan" />
      </div>
      <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase italic tracking-tighter">
        {title}
      </h3>
    </div>
    <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest pl-16">
      {subtitle}
    </p>
  </div>
);

const TechLabel = ({ children, color = 'cyan', className }: { children: React.ReactNode, color?: 'cyan'|'oat'|'blue'|'white', className?: string }) => {
  const colors = {
    cyan: 'border-aura-tech-cyan/30 text-aura-tech-cyan bg-aura-tech-cyan/5',
    oat: 'border-aura-comfort-oat/30 text-aura-comfort-oat bg-aura-comfort-oat/5',
    blue: 'border-aura-tech-blue/30 text-aura-tech-blue bg-aura-tech-blue/5',
    white: 'border-white/20 text-white bg-white/5'
  };
  return (
    <span className={cn("text-[10px] font-mono uppercase px-2 py-1 rounded border", colors[color], className)}>
      {children}
    </span>
  );
};

const ReferenceLink = ({ title, url, author }: { title: string, url: string, author?: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase border border-gray-800 px-4 py-2 rounded-full hover:bg-white/5 hover:text-aura-tech-cyan transition-colors w-max group">
    <ExternalLink size={14} className="text-gray-600 group-hover:text-aura-tech-cyan transition-colors" /> 
    <span className="group-hover:text-white transition-colors">{title}</span> {author && <span className="opacity-50">via {author}</span>}
  </a>
);

// 1. O que são Componentes UI
const IntroModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader 
       icon={Component}
       title="A Natureza dos Componentes"
       subtitle="Estruturas Cognitivas • Padrões de Interação"
     />
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
           <p className="text-xl text-gray-200 font-lexend leading-relaxed">
             Componentes UI não são apenas "botões e inputs". Eles são <strong>blocos reutilizáveis</strong> e <strong>estruturas cognitivas</strong> que moldam o comportamento humano dentro do ambiente digital.
           </p>
           <p className="text-[1em] text-gray-400 font-mono leading-relaxed">
             Um sistema baseado em componentes reduz inconsistências visuais, acelera o desenvolvimento técnico e, principalmente, <strong>melhora a previsibilidade cognitiva</strong> da interface para o usuário.
           </p>
           <div className="flex flex-wrap gap-2 pt-4">
              <TechLabel color="cyan">Interação Humano-Computador</TechLabel>
              <TechLabel color="cyan">Arquitetura de Informação</TechLabel>
              <TechLabel color="cyan">UX Design</TechLabel>
           </div>
        </div>
        <div className="p-10 bg-[#0A0A0A] border border-white/5 rounded-[32px] relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers size={120} className="text-white" />
           </div>
           <h4 className="text-lg font-display font-black text-white uppercase italic mb-4">Referências Fundamentais</h4>
           <div className="space-y-3 relative z-10 flex flex-col">
              <ReferenceLink title="Apple Human Interface Guidelines" url="https://developer.apple.com/design/human-interface-guidelines/" author="Apple" />
              <ReferenceLink title="Material Design" url="https://m3.material.io/" author="Google" />
              <ReferenceLink title="Carbon Design System" url="https://carbondesignsystem.com/" author="IBM" />
              <ReferenceLink title="GOV.UK Design System" url="https://design-system.service.gov.uk/" author="GOV.UK" />
           </div>
        </div>
     </div>
  </div>
);

// 2. Atomic Design
const AtomicDesignModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader icon={Sparkles} title="Atomic Design" subtitle="Metodologia Sistêmica • Brad Frost" />
     
     <div className="p-10 border border-aura-tech-cyan/20 bg-aura-tech-cyan/5 rounded-[40px] shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
           {[
             { name: "Átomos", icon: Box, desc: "Tags, cores, fontes, inputs isolados. A menor unidade indivisível.", ex: "Um botão ou um ícone." },
             { name: "Moléculas", icon: Blocks, desc: "Grupos de átomos funcionando juntos como uma unidade UI.", ex: "Campo de busca + Botão." },
             { name: "Organismos", icon: LayoutGrid, desc: "Componentes complexos que formam seções da interface.", ex: "Header de navegação." },
             { name: "Templates", icon: LayoutTemplate, desc: "Estruturas de página que articulam os organismos (sem dados).", ex: "Wireframe estrutural." },
             { name: "Páginas", icon: FileText, desc: "Instâncias reais dos templates com conteúdo final.", ex: "Dashboard do usuário." }
           ].map((level, i) => (
             <div key={i} className="space-y-4 p-6 bg-dark-bg/50 border border-white/5 rounded-2xl hover:border-aura-tech-cyan/40 transition-colors">
                <level.icon size={24} className="text-aura-tech-cyan" />
                <h5 className="text-[1em] font-bold font-mono text-white uppercase">{level.name}</h5>
                <p className="text-xs text-gray-400 font-lexend">{level.desc}</p>
                <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-aura-tech-cyan uppercase">
                  Ex: {level.ex}
                </div>
             </div>
           ))}
        </div>
        <div className="flex justify-center mt-10">
           <ReferenceLink title="Atomic Design Methodology" url="https://atomicdesign.bradfrost.com/" author="Brad Frost" />
        </div>
     </div>
  </div>
);

// 3. Estados de Componentes
const StatesModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader icon={MousePointerClick} title="Estados Interativos" subtitle="Feedback Visual • Redução de Ansiedade" />
     
     <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px]">
       <p className="text-[1em] text-gray-300 font-lexend mb-10 max-w-3xl">
         O <strong>feedback visual imediato</strong> informa ao usuário que o sistema registrou sua ação, reduzindo a ansiedade cognitiva. Todo componente interativo deve prever, no mínimo, os estados de foco, hover e desabilitação.
       </p>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { s: "Default", class: "bg-white/10 text-white", label: "Pronto para ação" },
            { s: "Hover", class: "bg-white/20 text-white scale-105", label: "Intenção de clique" },
            { s: "Focus", class: "bg-white/10 text-white ring-2 ring-aura-tech-cyan ring-offset-2 ring-offset-dark-bg", label: "Navegação por teclado" },
            { s: "Active/Pressed", class: "bg-white/5 text-white/70 scale-95", label: "Ação acontecendo" },
            { s: "Disabled", class: "bg-white/5 text-white/20 cursor-not-allowed", label: "Ação não disponível" },
            { s: "Loading", class: "bg-aura-tech-blue text-white", label: "Processando", isLoad: true },
            { s: "Success", class: "bg-green-500/20 text-green-400 border border-green-500/50", label: "Ação concluída" },
            { s: "Error", class: "bg-red-500/20 text-red-400 border border-red-500/50", label: "Falha na ação" }
          ].map((state, i) => (
             <div key={i} className="flex flex-col gap-3">
                <span className="text-xs font-mono text-gray-500 uppercase">{state.s}</span>
                <div className={cn("h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 border border-transparent", state.class)}>
                   {state.isLoad ? <Loader2 size={16} className="animate-spin" /> : "Button"}
                </div>
                <span className="text-[10px] text-gray-500 font-lexend">{state.label}</span>
             </div>
          ))}
       </div>
     </div>
  </div>
);

// 4. Botões
const ButtonsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader icon={Layout} title="Botões & Hierarquia" subtitle="CTAs • Anatomia • Prioridade" />
     
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 border border-white/10 rounded-3xl bg-[#0A0A0A]">
              <div className="space-y-3">
                 <TechLabel color="cyan">Primary (CTA)</TechLabel>
                 <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">Confirmar</button>
              </div>
              <div className="space-y-3">
                 <TechLabel color="oat">Secondary</TechLabel>
                 <button className="w-full py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">Cancelar</button>
              </div>
              <div className="space-y-3">
                 <TechLabel color="blue">Outline</TechLabel>
                 <button className="w-full py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">Ver Mais</button>
              </div>
              <div className="space-y-3">
                 <TechLabel color="white">Ghost / Text</TechLabel>
                 <button className="w-full py-3 text-gray-400 font-bold rounded-lg hover:text-white hover:bg-white/5 transition-colors">Ignorar</button>
              </div>
              <div className="space-y-3">
                 <TechLabel color="white">Icon Button</TechLabel>
                 <button className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"><Search size={20} /></button>
              </div>
              <div className="space-y-3">
                 <TechLabel color="white">Destructive</TechLabel>
                 <button className="w-full py-3 bg-red-500/20 text-red-500 font-bold rounded-lg border border-red-500/50 hover:bg-red-500/30 transition-colors">Excluir</button>
              </div>
           </div>
        </div>

        <div className="p-8 border border-aura-tech-cyan/20 bg-aura-tech-cyan/5 rounded-3xl space-y-6">
           <h4 className="text-xl font-display font-black text-white uppercase italic">Anatomia do Botão</h4>
           <ul className="space-y-4">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aura-tech-cyan" /><span className="text-sm font-mono text-gray-300">Label (Ação clara, verbo)</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aura-tech-cyan" /><span className="text-sm font-mono text-gray-300">Padding (Respiro interno)</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aura-tech-cyan" /><span className="text-sm font-mono text-gray-300">Radius (Borda)</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aura-tech-cyan" /><span className="text-sm font-mono text-gray-300">Hit Area (Mín. 44x44px para mobile)</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aura-tech-cyan" /><span className="text-sm font-mono text-gray-300">Icon Spacing (Alinhamento ótico)</span></li>
           </ul>
        </div>
     </div>
  </div>
);

// 5. Inputs & Formulários
const InputsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader icon={AlignLeft} title="Inputs & UX Writing" subtitle="Coleta de Dados • Validação • Previsibilidade" />
     
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
           <p className="text-[1em] text-gray-300 font-lexend leading-relaxed">
             <strong>Nunca confie apenas no placeholder.</strong> Placeholders desaparecem quando o usuário começa a digitar, causando amnésia cognitiva. Use sempre <span className="text-white font-bold">Labels visíveis</span>.
           </p>
           
           <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl space-y-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-white uppercase tracking-widest">E-mail Profissional</label>
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="text" placeholder="nome@empresa.com" className="w-full bg-dark-bg border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-aura-tech-cyan focus:ring-1 focus:ring-aura-tech-cyan transition-all" />
                 </div>
                 <p className="text-xs text-gray-500 font-mono">Helper text: Use seu e-mail de trabalho.</p>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">Senha <AlertCircle size={14}/></label>
                 <div className="relative">
                    <input type="password" value="123" readOnly className="w-full bg-red-500/5 border border-red-500/50 rounded-xl py-3 px-4 text-white focus:outline-none" />
                    <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
                 </div>
                 <p className="text-xs text-red-400 font-mono">Erro humano: A senha precisa ter pelo menos 8 caracteres.</p>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <h4 className="text-xl font-display font-black text-white uppercase italic">Formulários & Carga Cognitiva</h4>
           <div className="grid grid-cols-1 gap-4">
              <div className="p-6 border border-aura-comfort-oat/20 bg-aura-comfort-oat/5 rounded-2xl flex items-start gap-4">
                 <CheckCircle2 className="text-aura-comfort-oat shrink-0 mt-1" />
                 <div>
                    <h5 className="font-bold text-white mb-1">Chunking (Agrupamento)</h5>
                    <p className="text-sm text-gray-400">Divida formulários longos em passos lógicos (Multistep) para não sobrecarregar o usuário.</p>
                 </div>
              </div>
              <div className="p-6 border border-aura-tech-cyan/20 bg-aura-tech-cyan/5 rounded-2xl flex items-start gap-4">
                 <CheckCircle2 className="text-aura-tech-cyan shrink-0 mt-1" />
                 <div>
                    <h5 className="font-bold text-white mb-1">Validação Inline</h5>
                    <p className="text-sm text-gray-400">Valide os campos em tempo real ao perder o foco (blur), e não apenas após clicar em "Enviar".</p>
                 </div>
              </div>
              <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-start gap-4">
                 <X className="text-red-400 shrink-0 mt-1" />
                 <div>
                    <h5 className="font-bold text-white mb-1">Erros Genéricos</h5>
                    <p className="text-sm text-gray-400">Evite "Erro no formulário". Diga exatamente o que está errado e como consertar.</p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
);

// 6. Cards & Navegação
const CardsModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader icon={LayoutGrid} title="Cards & Navegação" subtitle="Unidades de Conteúdo • Arquitetura" />
     
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Interactive Card */}
        <div className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all rounded-[32px] cursor-pointer group">
           <div className="aspect-video bg-gray-800 rounded-2xl mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                 <TechLabel color="cyan">Interactive Card</TechLabel>
              </div>
              <div className="w-full h-full bg-aura-tech-cyan/20 group-hover:scale-105 transition-transform duration-700" />
           </div>
           <h4 className="text-xl font-bold text-white mb-2 group-hover:text-aura-tech-cyan transition-colors">Organização Cognitiva</h4>
           <p className="text-sm text-gray-400 leading-relaxed mb-6">Cards agrupam informações relacionadas (imagem, título, metadados) em uma unidade digerível e interativa.</p>
           <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
              Explorar <ArrowRight size={16} />
           </div>
        </div>

        <div className="space-y-8">
           <h4 className="text-xl font-display font-black text-white uppercase italic">Modelos de Navegação</h4>
           <p className="text-[1em] text-gray-300 font-lexend leading-relaxed">
             A navegação é a espinha dorsal da arquitetura cognitiva.
           </p>
           <div className="space-y-6">
              {/* Sidebar Visual */}
              <div className="border border-white/10 bg-[#0A0A0A] rounded-3xl p-6 flex gap-6 items-stretch shadow-xl">
                <div className="w-32 bg-[#141414] rounded-2xl border border-white/5 p-4 flex flex-col gap-3">
                  <div className="w-full h-8 bg-white/5 rounded-lg mb-2" />
                  <div className="w-full h-6 bg-aura-comfort-green/20 rounded-md border border-aura-comfort-green/30" />
                  <div className="w-full h-6 bg-white/5 rounded-md" />
                  <div className="w-full h-6 bg-white/5 rounded-md" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="font-bold text-white mb-1 block">Sidebar (Desktop)</span>
                  <span className="text-xs font-mono text-gray-500 block leading-relaxed">Padrão para dashboards. Organiza hierarquias densas verticalmente.</span>
                </div>
              </div>

              {/* Bottom Nav Visual */}
              <div className="border border-white/10 bg-[#0A0A0A] rounded-3xl p-6 flex flex-col justify-center items-center gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="w-64 h-16 bg-[#1A1A1A] rounded-[32px] border border-white/10 flex items-center justify-around px-2 shadow-2xl relative z-10">
                  <div className="w-12 h-12 rounded-full hover:bg-white/5 flex items-center justify-center cursor-pointer transition-colors"><Home size={20} className="text-gray-400"/></div>
                  <div className="w-12 h-12 rounded-full bg-aura-tech-cyan/20 border border-aura-tech-cyan/30 flex items-center justify-center cursor-pointer"><Search size={20} className="text-aura-tech-cyan"/></div>
                  <div className="w-12 h-12 rounded-full hover:bg-white/5 flex items-center justify-center cursor-pointer transition-colors"><BellRing size={20} className="text-gray-400"/></div>
                  <div className="w-12 h-12 rounded-full hover:bg-white/5 flex items-center justify-center cursor-pointer transition-colors"><User size={20} className="text-gray-400"/></div>
                </div>
                <div className="text-center relative z-10 mt-2">
                  <span className="font-bold text-white block mb-1">Bottom Nav (Mobile)</span>
                  <span className="text-xs font-mono text-gray-500">Ações primárias otimizadas para a zona de polegar (Thumb Zone).</span>
                </div>
              </div>

              {/* Breadcrumbs Visual */}
              <div className="border border-white/10 bg-[#0A0A0A] rounded-3xl p-6 flex flex-col justify-center gap-6 shadow-xl">
                <div className="flex items-center gap-2 text-sm font-mono text-gray-500 bg-[#141414] border border-white/5 p-4 rounded-xl">
                  <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><Home size={14}/> Início</span>
                  <ChevronRight size={14} className="text-gray-700" />
                  <span className="hover:text-white transition-colors cursor-pointer">Produtos</span>
                  <ChevronRight size={14} className="text-gray-700" />
                  <span className="text-aura-comfort-oat font-bold">Teclado Mecânico</span>
                </div>
                <div>
                  <span className="font-bold text-white block mb-1">Breadcrumbs</span>
                  <span className="text-xs font-mono text-gray-500">Exibição de rastro. Permite localização hierárquica e navegação reversa rápida.</span>
                </div>
              </div>

              {/* Command Palette Visual */}
              <div className="border border-white/10 bg-[#0A0A0A] rounded-3xl p-6 flex flex-col justify-center gap-6 shadow-xl">
                <div className="w-full bg-[#141414] rounded-2xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">
                  <div className="p-4 border-b border-white/5 flex items-center gap-3">
                    <Search size={18} className="text-gray-500" />
                    <span className="text-gray-400 text-sm font-lexend">O que você precisa fazer?</span>
                  </div>
                  <div className="p-2 space-y-1">
                    <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center cursor-pointer">
                      <span className="text-white text-sm font-lexend flex items-center gap-3"><Layout size={16} className="text-gray-500"/> Alterar Layout para Dark Mode</span>
                      <span className="text-[10px] font-mono bg-black border border-white/10 px-2 py-1 rounded text-gray-400">↵</span>
                    </div>
                    <div className="p-3 hover:bg-white/[0.02] rounded-xl flex justify-between items-center cursor-pointer transition-colors">
                      <span className="text-gray-500 text-sm font-lexend flex items-center gap-3"><FileText size={16}/> Criar novo documento</span>
                      <span className="text-[10px] font-mono text-gray-600">⌘N</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-white">Command Palette (⌘K)</span>
                    <span className="text-[10px] font-mono text-aura-tech-cyan border border-aura-tech-cyan/30 px-2 py-1 rounded bg-aura-tech-cyan/10">Contemporâneo</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">Permite acionar qualquer recurso do sistema via teclado, unificando busca e ações (Super App).</span>
                </div>
              </div>
           </div>
        </div>
     </div>
  </div>
);

// 7. Bibliotecas de UI (Radix, Shadcn)
const LibrariesModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader icon={Database} title="Ecossistema de Bibliotecas" subtitle="Shadcn/UI • Radix • Material" />
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Shadcn/UI", d: "Não é uma biblioteca npm. Componentes copiáveis e customizáveis, construídos sobre Radix e Tailwind.", l: "https://ui.shadcn.com" },
          { name: "Radix UI", d: "Primitivos sem estilo com acessibilidade (WAI-ARIA) perfeitamente implementada por padrão.", l: "https://www.radix-ui.com" },
          { name: "Material UI (MUI)", d: "A implementação mais robusta do Google Material Design para React. Altamente corporativo.", l: "https://mui.com" },
          { name: "Aceternity UI", d: "Foco extremo em animações, framer-motion e estética sci-fi premium.", l: "https://ui.aceternity.com" },
          { name: "Tailwind UI", d: "Blocos comerciais oficiais dos criadores do Tailwind CSS.", l: "https://tailwindui.com" },
          { name: "Ant Design", d: "Extremamente denso, padrão chinês/asiático, voltado para dashboards de altíssima complexidade.", l: "https://ant.design" }
        ].map((lib, i) => (
           <div key={i} className="p-6 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/5 transition-all flex flex-col justify-between h-full">
              <div>
                 <h4 className="text-lg font-bold text-white mb-2">{lib.name}</h4>
                 <p className="text-sm text-gray-400 font-lexend mb-6">{lib.d}</p>
              </div>
              <a href={lib.l} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-aura-tech-cyan uppercase flex items-center gap-2 hover:underline w-max">
                 <ExternalLink size={14} /> Site Oficial
              </a>
           </div>
        ))}
     </div>
  </div>
);

// Exporting the massive module
export const AdvancedComponentsShowcase = () => {
  return (
    <div className="space-y-0 text-white pb-32">
      <IntroModule />
      <AtomicDesignModule />
      <StatesModule />
      <ButtonsModule />
      <InputsModule />
      <CardsModule />
      <LibrariesModule />
    </div>
  )
}
