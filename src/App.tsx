/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { 
  Type, 
  Square, 
  Layers,
  Quote,
  Workflow, 
  Image as ImageIcon, 
  Download, 
  CheckCircle2, 
  ShieldCheck,
  Scale,
  Link as LinkIcon, 
  Zap, 
  ExternalLink,
  Fingerprint,
  ChevronRight,
  Printer,
  Sparkles,
  MousePointer2,
  Layout,
  Palette,
  Box,
  Video,
  Info,
  PenTool,
  Boxes,
  Brain,
  Gamepad2,
  Columns,
  Search,
  Menu as MenuIcon,
  X,
  CheckSquare,
  Component,
  MessageSquare,
  BookOpen,
  Library,
  Hammer,
  Cpu,
  Globe,
  Settings,
  PencilRuler,
  Monitor,
  Smartphone,
  MousePointer,
  Youtube,
  MonitorIcon,
  BarChart3,
  PieChart,
  Activity,
  Users,
  Target,
  Maximize,
  Grid,
  ArrowDownLeft,
  ArrowUpRight,
  Database,
  Code2,
  FolderKanban,
  FileText,
  Filter,
  Calendar,
  User as UserIcon
} from 'lucide-react';
import { cn } from './lib/utils';
import { AuraDesignSystemShowcase } from './components/AuraDesignSystemShowcase';
import { LawsOfUXDocumentation } from './components/LawsOfUXShowcase';
import { LabProjectsShowcase } from './components/LabProjectsShowcase';
import { IconsSinaisDocumentation } from './components/IconsSinaisShowcase';
import { UsabilityTestingDocumentation } from './components/UsabilityTestingShowcase';
import { EspectroDesCoresShowcase } from './components/EspectroDesCoresShowcase';
import { AdvancedTypographyShowcase } from './components/TypographyAdvancedModules';
import { AdvancedComponentsShowcase } from './components/UIComponentsAdvancedModules';
import { ReferencesAdvancedShowcase } from './components/ReferencesAdvancedShowcase';
import { Objects3DVideoShowcase } from './components/Objects3DVideoShowcase';
import { UXDesignAdvancedShowcase } from './components/UXDesignAdvancedShowcase';
import { ImagesIllustrationsAdvancedShowcase } from './components/ImagesIllustrationsAdvancedShowcase';
import { SVGAnimationRender } from './components/FiveIsAnimations';
import { GamificationShowcase } from './components/GamificationShowcase';
import { GameDesignShowcase } from './components/GameDesignShowcase';
import { StorytellingShowcase } from './components/StorytellingShowcase';
import { DataVisualizationShowcase } from './components/DataVisualizationShowcase';

// --- Types ---

interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  content: React.ReactNode;
  parentId?: string;
}

// --- Specialized Internal Components ---

const TypographyShowcase = () => {
  return (
    <div className="space-y-10 py-8 px-8 bg-aura-tech-blue/40 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
      <div className="space-y-2">
        <TechLabel color="cyan">Hierarquia Visual</TechLabel>
        <p className="text-base text-gray-200 font-mono italic uppercase tracking-widest">Sistema Tipográfico Lexend (Base 16px)</p>
      </div>

      <div className="space-y-12">
        {/* Sans Serif / Display */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-4 border-b border-white/5 pb-2 group">
            <span className="text-4xl font-display font-black text-white tracking-tighter uppercase italic group-hover:text-aura-comfort-oat transition-colors">H1 Display</span>
            <span className="text-base font-mono text-gray-500 uppercase">Lexend Bold - 48px+</span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-white/5 pb-2 group">
            <span className="text-2xl font-display font-black text-white tracking-widest uppercase italic group-hover:text-aura-comfort-oat transition-colors">H2 Section</span>
            <span className="text-base font-mono text-gray-500 uppercase">Lexend Bold - 32px</span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-white/5 pb-2 group">
            <span className="text-xl font-sans font-bold text-aura-comfort-green uppercase italic group-hover:text-aura-comfort-oat transition-colors">H3 Component</span>
            <span className="text-base font-mono text-gray-500 uppercase">Lexend SemiBold - 24px</span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-white/5 pb-2 group">
            <span className="text-lg font-sans font-medium text-gray-200 uppercase italic group-hover:text-aura-comfort-oat transition-colors">Subhead / Lead</span>
            <span className="text-base font-mono text-gray-500 uppercase">Lexend Medium - 18px</span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-white/10 pb-4 border-aura-comfort-oat/20">
            <span className="text-base font-sans text-gray-300 leading-relaxed font-lexend">
              P (Body) - Este é o corpo do texto principal. O tamanho mínimo é 16px, com espaçamento entre linhas de 1.5x para garantir fluidez sensorial.
            </span>
            <span className="text-base font-mono text-aura-comfort-oat font-black shrink-0 italic uppercase">16px - LEXEND</span>
          </div>
        </div>

        {/* Mono */}
        <div className="space-y-4 p-8 bg-black/60 rounded-2xl border border-aura-comfort-oat/30 shadow-inner">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-aura-comfort-oat animate-pulse" />
            <span className="text-xl font-mono text-aura-comfort-oat uppercase font-black italic">Debug Mono</span>
          </div>
          <div className="space-y-4">
             <p className="text-lg font-mono text-white leading-relaxed font-black italic">$ System: Tokens & Logic</p>
             <p className="text-2xl font-mono text-white leading-relaxed font-black">System.out.println("Clareza Técnica Aumentada");</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccessibilityLab = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contrast Lab */}
        <div className="p-8 rounded-[40px] bg-aura-tech-blue/40 border border-white/10 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-aura-comfort-oat/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-aura-comfort-oat/10 transition-all" />
          <div className="flex items-center gap-3">
            <div className="p-2 bg-aura-comfort-oat/20 rounded-lg text-aura-comfort-oat shadow-[0_0_15px_rgba(0,255,255,0.1)]"><Scale size={20} /></div>
            <h5 className="text-xl font-display font-black text-white uppercase italic">Lab de Contraste</h5>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-base text-gray-200 font-mono uppercase">AA Large (3:1)</span>
                <TechLabel color="cyan">PASS</TechLabel>
              </div>
              <p className="text-2xl font-lexend font-black text-aura-comfort-oat uppercase italic">Texto de Destaque Tech</p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-lg text-white font-mono uppercase font-black italic">AA Normal (4.5:1)</span>
                <TechLabel color="green">PASS</TechLabel>
              </div>
              <p className="text-xl text-white leading-relaxed font-lexend font-black italic">
                Texto de leitura longa com contraste garantido sobre a superfície profunda.
              </p>
            </div>

            <div className="p-4 bg-aura-comfort-oat/10 rounded-xl border border-aura-comfort-oat/20 flex flex-col gap-2 group/btn relative overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-base text-aura-comfort-oat font-mono font-black uppercase italic">Foco Interativo</span>
                <span className="text-base text-gray-200 animate-pulse font-mono uppercase font-bold">Foco Visível</span>
              </div>
              <button className="w-full py-4 bg-aura-comfort-oat text-dark-bg font-black rounded-xl outline-offset-4 outline-aura-comfort-oat transition-all focus:outline-4 uppercase italic tracking-widest shadow-lg shadow-aura-comfort-oat/20">
                ESTADO DE FOCO (VISUAL RING)
              </button>
            </div>
          </div>
        </div>

        {/* Visual Cues */}
        <div className="p-8 rounded-[40px] bg-aura-tech-blue/40 border border-white/10 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-aura-comfort-green/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-aura-comfort-green/10 transition-all" />
          <div className="flex items-center gap-3">
             <div className="p-2 bg-aura-comfort-green/20 rounded-lg text-aura-comfort-green shadow-[0_0_15px_rgba(34,211,238,0.1)]"><Zap size={20} /></div>
             <h5 className="text-xl font-display font-black text-white uppercase italic">Redundância Visual</h5>
          </div>

          <div className="space-y-6">
             <div className="p-4 bg-white/5 rounded-xl border border-aura-comfort-green/20 group/cues cursor-help">
                <p className="text-base text-gray-200 mb-3 font-mono uppercase italic tracking-tighter">Evitando a dependência apenas de cor:</p>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2 text-aura-comfort-green bg-aura-comfort-green/10 px-3 py-1 rounded-full border border-aura-comfort-green/20">
                      <CheckCircle2 size={16} />
                      <span className="text-base font-black uppercase italic">Sucesso</span>
                   </div>
                   <div className="flex items-center gap-2 text-aura-comfort-clay bg-aura-comfort-clay/10 px-3 py-1 rounded-full border border-aura-comfort-clay/20">
                      <ShieldCheck size={16} />
                      <span className="text-base font-black uppercase italic">Aviso</span>
                   </div>
                </div>
                <p className="text-base text-gray-200 mt-4 leading-relaxed italic font-mono uppercase font-bold">
                  *O design sincroniza ícones e texto para usuários com baixa percepção cromática.
                </p>
             </div>

             <div className="p-6 bg-black/40 rounded-xl border border-white/5 group-hover:border-aura-comfort-oat/20 transition-all">
                <h6 className="text-base font-black text-white uppercase mb-3 underline decoration-aura-comfort-oat decoration-2 underline-offset-8 italic">Semântica A11Y</h6>
                <div className="space-y-2 opacity-60">
                   <p className="text-base font-mono text-aura-comfort-oat">&lt;main role="main"&gt;</p>
                   <p className="text-base font-mono pl-4 text-aura-comfort-oat">&lt;nav aria-label="Menu"&gt; ... &lt;/nav&gt;</p>
                   <p className="text-base font-mono text-aura-comfort-oat">&lt;/main&gt;</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ARIA Dynamic States */}
        <div className="p-8 rounded-[40px] bg-aura-tech-blue/40 border border-white/10 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-aura-tech-cyan/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-aura-tech-cyan/10 transition-all" />
           <div className="flex items-center gap-3">
              <div className="p-2 bg-aura-tech-cyan/20 rounded-lg text-aura-tech-cyan"><MessageSquare size={20} /></div>
              <h5 className="text-xl font-display font-black text-white uppercase italic">Dinâmica & Estados (ARIA)</h5>
           </div>
           
           <div className="space-y-4">
              <div className="p-6 bg-black/40 rounded-xl border border-white/5 space-y-4">
                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-base text-gray-200 font-mono uppercase italic font-bold">Estado de Expansão</span>
                    <span className="text-aura-tech-cyan font-mono text-xs">aria-expanded="true"</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-base text-gray-200 font-mono uppercase italic font-bold">Campo Obrigatório</span>
                    <span className="text-aura-tech-cyan font-mono text-xs">aria-required="true"</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-base text-gray-200 font-mono uppercase italic font-bold">Rótulo Acessível</span>
                    <span className="text-aura-tech-cyan font-mono text-xs">aria-label="Pesquisar"</span>
                 </div>
              </div>
              <p className="text-base text-gray-200 font-mono italic leading-tight uppercase font-bold">
                *WAI-ARIA permite que leitores de tela entendam mudanças dinâmicas na interface sem recarregar a página.
              </p>
           </div>
        </div>

        {/* e-MAG Visual Compliance */}
        <div className="p-8 rounded-[40px] bg-aura-tech-blue/40 border border-white/10 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-aura-comfort-oat/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-aura-comfort-oat/10 transition-all" />
           <div className="flex items-center gap-3">
              <div className="p-2 bg-aura-comfort-oat/20 rounded-lg text-aura-comfort-oat"><ShieldCheck size={20} /></div>
              <h5 className="text-xl font-display font-black text-white uppercase italic">Conformidade e-MAG</h5>
           </div>
           
           <div className="flex-1 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-aura-comfort-oat">
                 <div className="w-12 h-12 bg-aura-comfort-oat/20 rounded-full flex items-center justify-center text-aura-comfort-oat font-black italic">!</div>
                 <div>
                    <h6 className="text-lg font-display font-black text-white uppercase italic">Atalhos de Teclado</h6>
                    <p className="text-base text-gray-200 font-mono italic uppercase font-bold">Padrão e-MAG (Alt + 1, 2, 3...)</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-aura-tech-cyan">
                 <div className="w-12 h-12 bg-aura-tech-cyan/20 rounded-full flex items-center justify-center text-aura-tech-cyan font-black italic">?</div>
                 <div>
                    <h6 className="text-lg font-display font-black text-white uppercase italic">Ajuda e Suporte</h6>
                    <p className="text-base text-gray-200 font-mono italic uppercase font-bold">Documentação acessível integrada</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Semantic Text Demo */}
      <div className="p-8 bg-aura-tech-blue/60 border border-aura-comfort-oat/20 rounded-[40px] shadow-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-aura-comfort-oat/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <div className="shrink-0 w-24 h-24 bg-dark-bg border border-white/10 rounded-3xl flex items-center justify-center text-gray-500 shadow-inner group-hover:border-aura-comfort-oat/40 transition-all">
            <ImageIcon size={40} className="group-hover:text-aura-comfort-oat transition-colors" />
          </div>
          <div className="space-y-3">
            <TechLabel color="cyan">Texto Alternativo</TechLabel>
            <h6 className="text-xl font-display font-black text-white uppercase tracking-tight italic">Explicabilidade Sensorial das Imagens:</h6>
            <div className="p-6 bg-black/60 rounded-xl border border-white/20 italic group-hover:border-aura-comfort-oat/40 transition-all">
               <span className="text-aura-comfort-oat font-mono font-black tracking-widest uppercase text-xl">Alt=</span>
               <span className="text-white font-mono text-2xl tracking-tight font-black"> "Visualização tátil e descritiva do ambiente de pesquisa do laboratório."</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AtomicVisuals = ({ type }: { type: 'atoms' | 'molecules' | 'organisms' | 'templates' | 'pages' | 'tokens' }) => {
  const colors = {
    brand: '#D2A979', // aura-comfort-oat
    accent: '#F48A79', // aura-comfort-clay
    secondary: '#86EFAC', // Updated for better contrast
    bg: '#0A0A10',
    border: 'rgba(255,255,255,0.1)'
  };

  switch (type) {
    case 'tokens':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-24 mb-4 opacity-80 group-hover:scale-110 transition-transform">
          <circle cx="20" cy="50" r="10" fill={colors.brand} className="animate-pulse" />
          <rect x="45" y="40" width="20" height="20" fill={colors.accent} rx="4" />
          <path d="M80 40 L90 60 L70 60 Z" fill="white" />
          <text x="50" y="85" textAnchor="middle" fontSize="10" fill="gray" className="font-mono uppercase italic font-bold">Tokens</text>
        </svg>
      );
    case 'atoms':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-24 mb-4 group-hover:scale-110 transition-transform">
          <circle cx="50" cy="50" r="15" fill="none" stroke={colors.accent} strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="8" fill={colors.accent} />
          <text x="50" y="85" textAnchor="middle" fontSize="10" fill="gray" className="font-mono uppercase italic font-bold">Átomos</text>
        </svg>
      );
    case 'molecules':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-24 mb-4 group-hover:scale-110 transition-transform">
          <g transform="translate(30, 40)">
            <rect width="40" height="20" rx="10" fill="none" stroke={colors.secondary} strokeWidth="2" />
            <circle cx="10" cy="10" r="4" fill={colors.secondary} />
            <rect x="18" y="8" width="15" height="4" rx="2" fill="white" opacity="0.5" />
          </g>
          <text x="50" y="85" textAnchor="middle" fontSize="10" fill="gray" className="font-mono uppercase italic font-bold">Moléculas</text>
        </svg>
      );
    case 'organisms':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-24 mb-4 group-hover:scale-110 transition-transform">
          <rect x="20" y="30" width="60" height="40" rx="4" fill="none" stroke={colors.brand} strokeWidth="2" />
          <rect x="25" y="35" width="10" height="10" rx="2" fill={colors.brand} />
          <rect x="40" y="35" width="35" height="4" rx="1" fill="white" opacity="0.3" />
          <rect x="40" y="42" width="25" height="4" rx="1" fill="white" opacity="0.3" />
          <rect x="25" y="55" width="50" height="8" rx="4" fill={colors.brand} opacity="0.5" />
          <text x="50" y="85" textAnchor="middle" fontSize="10" fill="gray" className="font-mono uppercase italic font-bold">Organismos</text>
        </svg>
      );
    case 'templates':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-24 mb-4 group-hover:scale-110 transition-transform">
          <rect x="15" y="15" width="70" height="70" rx="2" fill="none" stroke="gray" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="20" y="20" width="60" height="10" fill="gray" opacity="0.2" />
          <rect x="20" y="35" width="15" height="40" fill="gray" opacity="0.2" />
          <rect x="40" y="35" width="40" height="40" fill="gray" opacity="0.1" />
          <text x="50" y="85" textAnchor="middle" fontSize="10" fill="gray" className="font-mono uppercase italic font-bold">Templates</text>
        </svg>
      );
    case 'pages':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-24 mb-4 group-hover:scale-110 transition-transform">
          <rect x="20" y="20" width="60" height="60" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
          <rect x="25" y="25" width="50" height="8" fill={colors.accent} />
          <rect x="25" y="38" width="50" height="35" fill={colors.bg} stroke="white" strokeWidth="0.5" />
          <circle cx="35" cy="50" r="5" fill={colors.accent} />
          <rect x="45" y="48" width="25" height="4" fill="white" opacity="0.8" />
          <text x="50" y="15" textAnchor="middle" fontSize="10" fill="gray" className="font-mono uppercase italic font-bold">Páginas</text>
        </svg>
      );
    default:
      return null;
  }
};

const tooltipDictionary: Record<string, string> = {
  // Fase 1
  "Ideação": "Fase de descoberta e definição do problema. Aqui surgem ideias, referências e pesquisas que ajudam a compreender o usuário, o contexto e os objetivos do projeto.",
  "Briefing": "Definição inicial do projeto: objetivos, público, contexto, necessidades e propósito da interface.",
  "Brainstorming": "Técnica de geração livre de ideias para explorar possibilidades criativas sem julgamentos iniciais.",
  "Mapas Mentais": "Organização visual de conceitos e conexões para estruturar ideias e relações do projeto.",
  "Pesquisa com Usuários": "Coleta de dados e percepções reais dos usuários para orientar decisões centradas na experiência.",
  "Pesquisas com usuários": "Coleta de dados e percepções reais dos usuários para orientar decisões centradas na experiência.",
  "Personas": "Representações fictícias do público-alvo baseadas em dados reais e comportamentos observados.",
  "Pontos de Contato": "Mapeamento dos momentos em que o usuário interage com o sistema ou serviço.",
  "Atlas Mnemosyne": "Painel visual de referências simbólicas, culturais e estéticas para explorar sobrevivências da forma e imaginários visuais.",
  "Busca de Referências": "Busca de soluções visuais, funcionais e conceituais que inspirem o desenvolvimento da interface.",
  
  // Fase 2
  "Inambulação": "Fase de análise e aprofundamento. O projeto investiga requisitos, tecnologias, referências e problemas de usabilidade antes da criação da interface.",
  "Requisitos": "Definição das necessidades técnicas e das funções que a interface deverá oferecer.",
  "Funcionalidades": "Definição das necessidades técnicas e das funções que a interface deverá oferecer.",
  "Análise Heurística": "Avaliação da usabilidade da interface com base em princípios reconhecidos de UX/UI.",
  "Análises Heurísticas": "Avaliação da usabilidade da interface com base em princípios reconhecidos de UX/UI.",
  "Escolha de Tecnologias": "O projeto investiga requisitos e tecnologias antes da criação.",
  "Análise de Referências": "Estudo visual de referências para compreender estilos, padrões e soluções gráficas.",

  // Fase 3
  "Instauração": "Fase de construção da interface. As ideias ganham forma por meio da arquitetura da informação, navegação, interação e identidade visual.",
  "Arquitetura da Informação": "Organização dos conteúdos e fluxos para facilitar navegação e compreensão.",
  "Arq. de Informação | Ergodesign": "Organização dos fluxos e aplicação ergonômica para facilitar navegação, conforto e compreensão.",
  "Sitemap": "Mapa estrutural das páginas e conexões da interface.",
  "Rabiscoframes": "Esboços rápidos para visualizar ideias e estruturas iniciais da interface.",
  "Cardsorting": "Avaliação prática da organização da arquitetura.",
  "Protótipos Papel/IA": "Esboços rápidos e simulações com IA para validar a usabilidade.",
  "Design de Navegação": "Planejamento dos caminhos e fluxos percorridos pelo usuário.",
  "Interaction Design | Navegação": "Planejamento das ações, respostas e fluxos de navegação do usuário.",
  "Ergodesign": "Aplicação de princípios ergonômicos para melhorar conforto, eficiência e usabilidade.",
  "Design de Interação": "Planejamento das ações e respostas entre usuário e interface.",
  "Fluxo — Jornada do Usuário": "Mapeamento do percurso realizado pelo usuário para atingir seus objetivos.",
  "Botões de Ação": "Elementos interativos que orientam e estimulam ações dentro da interface.",
  "Formulários": "Estruturas para entrada de dados de forma simples e eficiente.",
  "Mensagens de Erro": "Comunicações que orientam o usuário diante de problemas ou falhas.",
  "Instruções Complementares": "Textos de apoio que auxiliam compreensão e uso da interface.",
  "Design de Informação": "Organização visual dos conteúdos para facilitar entendimento e comunicação.",
  "Design Sensorial | Inf. Design": "Construção estética/perceptiva e organização visual das informações.",
  "Identidade Visual": "Conjunto de elementos gráficos que representam visualmente o projeto.",
  "Ilustrações": "Recursos visuais que complementam comunicação e experiência da interface.",
  "Ícones": "Símbolos gráficos que representam ações, conteúdos ou funcionalidades.",
  "Gráficos": "Representações visuais de dados e informações.",
  "Exploração de Personagens para Chatbot": "Desenvolvimento visual e comunicacional de personagens interativos.",
  "Design Sensorial": "Construção estética e perceptiva da experiência visual da interface.",
  "Escolha do Estilo Gráfico do Projeto": "Definição da linguagem visual que orientará toda a interface.",
  
  // Fase 4
  "Inspeção": "Fase de testes e validação. O projeto é avaliado com usuários e métodos de usabilidade para identificar melhorias e corrigir problemas.",
  "Teste A/B": "Comparação entre versões da interface para avaliar qual apresenta melhor desempenho.",
  "Testes com Usuários": "Avaliação prática da interface com usuários reais para identificar dificuldades e oportunidades.",
  "Testes de Usabilidade": "Avaliação prática da interface com usuários reais para identificar dificuldades e oportunidades.",
  "Avaliação": "Síntese dos resultados obtidos nos testes e análises do projeto.",

  // Fase 5
  "Implementação": "Fase de desenvolvimento e continuidade do projeto. A interface é finalizada, implementada e preparada para evoluções futuras.",
  "Produto Final": "Versão concluída da interface pronta para uso ou desenvolvimento técnico.",
  "Novas Inspeções": "Avaliações contínuas após implementação para identificar melhorias.",
  "Substituições": "Atualização ou troca de elementos que não atendem mais às necessidades do projeto.",
  "Atualizações": "Aprimoramentos funcionais, visuais ou tecnológicos da interface.",
  "Guia de Estilos": "Documento que organiza padrões visuais e regras de aplicação da interface.",
  "Design System do Projeto": "Sistema estruturado de componentes, padrões e diretrizes para manter consistência e escalabilidade.",
  "Desenvolvimento Técnico": "Construção algorítmica e estrutural da interface pronta para uso.",
};

const TooltipWrapper = ({ children, text, isTitle = false }: { children: React.ReactNode, text?: string, isTitle?: boolean }) => {
  const [show, setShow] = React.useState(false);
  
  if (!text) return <span className="relative inline-block w-full">{children}</span>;
  
  return (
    <span 
      className={cn("relative inline-block w-full cursor-help transition-none", show ? "z-[99999]" : "z-10")}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className={cn(
          "absolute left-0 bottom-full mb-3 w-80 p-5 bg-[#000000] border border-aura-tech-cyan/60 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,1)] pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-150",
          isTitle && "bottom-auto top-full mt-3 slide-in-from-top-2"
        )}>
          <p className="text-sm font-lexend text-gray-200 leading-relaxed normal-case tracking-normal font-medium">{text}</p>
          <div className={cn(
            "absolute left-6 border-[10px] border-transparent",
            isTitle ? "bottom-full border-b-[#000000]" : "top-full border-t-[#000000]"
          )} />
        </div>
      )}
    </span>
  );
};

const FiveIsDiagram = () => {
  const PhaseBox = ({ number, title, items, position = "top", className = "", phaseId }: { number: string, title: string, items: string[], position?: "top" | "bottom", className?: string, phaseId: 1|2|3|4|5 }) => (
    <div className={cn("flex flex-col gap-3 group relative hover:z-[9999] transition-none", className)}>
      {position === "bottom" && <div className="h-4 border-l-2 border-aura-comfort-green/30 ml-8 mb-2" />}
      
      <div className={cn(
        "flex flex-col",
        position === "top" ? "flex-col" : "flex-col-reverse"
      )}>
        <SVGAnimationRender fase={phaseId} />
        
        {/* List */}
        <div className={cn(
          "pl-4 border-l-2 border-aura-comfort-green/40 mb-4",
          position === "bottom" ? "mt-4" : "mb-4"
        )}>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-base font-mono text-gray-200 group-hover:text-white transition-colors uppercase tracking-widest font-bold">
                <TooltipWrapper text={tooltipDictionary[item]}>
                  <span className="border-b border-transparent hover:border-aura-tech-cyan/50 transition-colors pb-0.5 inline-block">{item}</span>
                </TooltipWrapper>
              </li>
            ))}
          </ul>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-aura-comfort-oat flex items-center justify-center bg-dark-bg text-aura-comfort-oat font-black text-lg shadow-[0_0_15px_rgba(210,169,121,0.1)] shrink-0">
            {number}
          </div>
          <TooltipWrapper text={tooltipDictionary[title]} isTitle={position === "top"}>
             <h5 className="text-2xl font-display font-black uppercase tracking-tight text-white group-hover:text-aura-comfort-oat transition-colors italic cursor-help border-b border-transparent hover:border-aura-comfort-oat/50 inline-block">
               {title}
             </h5>
          </TooltipWrapper>
        </div>
      </div>

      {position === "top" && <div className="h-4 border-l-2 border-aura-comfort-green/30 ml-8 mt-2" />}
    </div>
  );

  return (
    <div className="relative w-full py-12 px-4 md:px-12 bg-aura-tech-blue/20 rounded-[40px] border border-white/5 overflow-visible shadow-2xl">
      {/* Central Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-20 lg:opacity-100 lg:top-12">
        <div className="w-24 h-24 rounded-full bg-aura-comfort-green flex items-center justify-center text-dark-bg font-black text-3xl shadow-[0_0_50px_rgba(58,77,62,0.3)] italic">
          5I's
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 relative z-10">
        {/* Row 1: Top Phases */}
        <PhaseBox 
          number="1." 
          title="Ideação" 
          phaseId={1}
          items={[
            "Briefing", "Brainstorming", "Mapas Mentais", 
            "Pesquisas com usuários", "Personas", "Busca de Referências", 
            "Atlas Mnemosyne", "Pontos de Contato"
          ]}
        />

        <PhaseBox 
          number="3." 
          title="Instauração" 
          phaseId={3}
          items={[
            "Arq. de Informação | Ergodesign",
            "Interaction Design | Navegação",
            "Design Sensorial | Inf. Design",
            "Sitemap", "Rabiscoframes", 
            "Cardsorting", "Protótipos Papel/IA"
          ]}
          className="md:mt-24"
        />

        <PhaseBox 
          number="5." 
          title="Implementação"
          phaseId={5} 
          items={[
            "Desenvolvimento Técnico",
            "Produto Final",
            "Novas Inspeções",
            "Substituições",
            "Atualizações"
          ]}
        />

        {/* Spacer for MD screens to align zig-zag */}
        <div className="hidden md:block" />

        {/* Row 2: Bottom Phases */}
        <div className="md:col-start-1 md:col-end-3 grid grid-cols-1 md:grid-cols-2 gap-12 -mt-8 md:-mt-32">
           <PhaseBox 
            number="2." 
            title="Inambulação" 
            phaseId={2}
            position="bottom"
            items={[
              "Requisitos", "Funcionalidades", 
              "Análise de Referências", "Análise Heurística", 
              "Escolha de Tecnologias"
            ]}
          />

          <PhaseBox 
            number="4." 
            title="Inspeção" 
            phaseId={4}
            position="bottom"
            items={[
              "Teste A/B",
              "Testes de Usabilidade",
              "Análises Heurísticas",
              "Avaliação"
            ]}
          />
        </div>
      </div>

      {/* Connecting Arrows / Lines decorative */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block opacity-20" preserveAspectRatio="none">
        <path 
          d="M 150 250 L 300 350 L 450 250 L 600 350 L 750 250" 
          fill="none" 
          stroke="var(--color-aura-comfort-green)" 
          strokeWidth="2" 
          strokeDasharray="8 8"
        />
      </svg>
    </div>
  );
};

const ModuleSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="space-y-6 mb-12 last:mb-0 break-inside-avoid">
    <div className="flex items-center gap-3 text-aura-comfort-green border-b border-aura-comfort-green/30 pb-3">
      <Icon size={22} className="shadow-[0_0_10px_rgba(0,255,255,0.2)]" />
      <h4 className="text-2xl font-display font-black uppercase tracking-widest leading-none italic">{title}</h4>
    </div>
    <div className="pl-0 md:pl-4 font-lexend">
      {children}
    </div>
  </div>
);

const ModuleTable = ({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto my-4 rounded-xl border border-white/10 bg-black/40">
    <table className="w-full text-lg font-mono leading-relaxed">
      <thead className="text-white border-b border-white/20 uppercase bg-white/10">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="text-left py-4 px-5 font-bold tracking-tighter">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-200 divide-y divide-white/10">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-white/[0.05] transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="py-4 px-5">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-aura-tech-blue/40 border border-white/10 group/check hover:border-aura-comfort-oat/30 transition-all shadow-lg">
        <div className="w-5 h-5 rounded border-2 border-aura-comfort-oat/60 flex items-center justify-center group-hover/check:bg-aura-comfort-oat/20 transition-colors">
          <CheckCircle2 size={16} className="text-aura-comfort-oat opacity-0 group-hover/check:opacity-100 transition-opacity" />
        </div>
        <span className="text-lg font-mono text-gray-200 uppercase tracking-tighter leading-tight font-bold">{item}</span>
      </div>
    ))}
  </div>
);

const CodeBlock = ({ code, language }: { code: string, language: string }) => (
  <div className="relative group/code mt-3">
    <pre className="p-4 bg-aura-tech-blue/80 rounded-xl overflow-x-auto border border-white/10 font-mono text-base leading-relaxed text-gray-100 shadow-inner">
      <code>{code}</code>
    </pre>
    <div className="absolute top-2 right-2 text-base font-mono text-gray-200 uppercase group-hover/code:text-aura-comfort-oat transition-colors italic font-black">{language}</div>
  </div>
);

const TechLabel = ({ children, color = "green", className }: { children: React.ReactNode, color?: "green" | "cyan" | "white", className?: string }) => {
  const styles = {
    green: "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    cyan: "text-aura-comfort-oat border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    white: "text-white border-white/30 bg-white/5"
  };

  return (
    <span className={cn(
      "text-[10px] font-mono px-3 py-1 rounded border uppercase tracking-widest leading-none inline-block font-black italic",
      styles[color],
      className
    )}>
      {children}
    </span>
  );
};

const ReferenceLink = ({ title, url }: { title: string, url?: string }) => (
  <a 
    href={url || "#"} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-between p-4 rounded-xl bg-aura-tech-blue/40 border border-white/10 hover:border-aura-comfort-oat/40 hover:bg-white/[0.08] transition-all group/link shadow-lg"
  >
    <div className="flex items-center gap-3">
      <LinkIcon size={18} className="text-gray-400 group-hover/link:text-aura-comfort-oat transition-colors" />
      <span className="text-lg font-lexend font-bold text-gray-200 group-hover/link:text-white transition-colors lowercase tracking-tight">{title}</span>
    </div>
    <ExternalLink size={16} className="text-gray-500 group-hover/link:text-aura-comfort-oat transition-colors" />
  </a>
);

// --- Concepts Data ---

const conceptsData = [
  {
    title: "Interface",
    definition: "Interface é a camada de mediação entre pessoas e sistemas digitais. Mais do que uma superfície visual, ela organiza ações, respostas e significados durante a interação. Uma interface eficiente reduz atrito cognitivo, comunica possibilidades de ação e cria sensação de controle.",
    practices: [
      "manter consistência visual e comportamental",
      "tornar ações previsíveis",
      "utilizar feedbacks imediatos",
      "reduzir excesso de informação",
      "priorizar clareza funcional",
      "criar hierarquia visual evidente",
      "evitar ambiguidades de navegação"
    ],
    references: ["Donald Norman", "Alan Cooper", "Jesse James Garrett", "Jennifer Preece", "Yvonne Rogers", "Helen Sharp"],
    bibliography: [
      { title: "Norman, Donald. The Design of Everyday Things", url: "https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/" },
      { title: "Garrett, Jesse James. The Elements of User Experience", url: "https://jjg.net/elements/" },
      { title: "Cooper, Alan. About Face" }
    ]
  },
  {
    title: "Arquitetura de Informação",
    definition: "Arquitetura de Informação organiza conteúdos, categorias, fluxos e estruturas cognitivas para que usuários compreendam ambientes digitais sem esforço excessivo. Seu objetivo é tornar sistemas navegáveis, inteligíveis e previsíveis.",
    practices: [
      "criar hierarquias claras",
      "agrupar conteúdos semanticamente",
      "evitar excesso de níveis de navegação",
      "utilizar nomenclaturas compreensíveis",
      "projetar fluxos consistentes",
      "facilitar busca e orientação espacial",
      "trabalhar taxonomias e sistemas de rotulagem"
    ],
    references: ["Peter Morville", "Louis Rosenfeld", "Jesse James Garrett"],
    bibliography: [
      { title: "Morville & Rosenfeld. Information Architecture for the Web and Beyond", url: "https://www.oreilly.com/library/view/information-architecture-for/9781491913529/" },
      { title: "Garrett, Jesse James. The Elements of User Experience" }
    ]
  },
  {
    title: "UX Design",
    definition: "UX Design projeta experiências significativas considerando comportamento, emoção, cognição, percepção e contexto de uso. O foco não está apenas na aparência da interface, mas na qualidade da experiência vivida durante toda a interação.",
    practices: [
      "projetar centrado no usuário",
      "realizar pesquisas",
      "validar hipóteses",
      "testar continuamente",
      "reduzir frustração",
      "criar experiências emocionalmente positivas",
      "considerar acessibilidade desde o início",
      "equilibrar funcionalidade e emoção"
    ],
    references: ["Donald Norman", "Jakob Nielsen", "Jennifer Preece", "Helen Sharp", "Yvonne Rogers", "Fabrício Teixeira"],
    bibliography: [
      { title: "Norman, Donald. Emotional Design", url: "https://jnd.org/books/emotional-design/" },
      { title: "Preece, Rogers & Sharp. Interaction Design: Beyond Human-Computer Interaction", url: "https://www.wiley.com/en-us/Interaction+Design%3A+Beyond+Human+Computer+Interaction%2C+5th+Edition-p-9781119547259" },
      { title: "Teixeira, Fabrício. Design Centrado no Usuário" }
    ]
  },
  {
    title: "Design de Interação",
    definition: "Design de Interação trata da comunicação entre sistema e usuário através de comportamentos, respostas, transições e ações. O objetivo é tornar interações compreensíveis, fluidas e naturais.",
    practices: [
      "fornecer feedback imediato",
      "evitar estados confusos",
      "criar fluxos previsíveis",
      "reduzir carga cognitiva",
      "utilizar microinterações",
      "tornar ações reversíveis",
      "oferecer sensação de continuidade"
    ],
    references: ["Preece", "Rogers", "Sharp", "Dan Saffer", "Bill Moggridge"],
    bibliography: [
      { title: "Saffer, Dan. Designing for Interaction", url: "https://www.oreilly.com/library/view/designing-for-interaction/9780321643391/" },
      { title: "Preece, Rogers & Sharp. Interaction Design" }
    ]
  },
  {
    title: "Design de Navegação",
    definition: "Design de Navegação estrutura percursos dentro de sistemas digitais, orientando usuários entre páginas, conteúdos e funcionalidades.",
    practices: [
      "manter menus previsíveis",
      "indicar localização atual",
      "evitar caminhos excessivamente profundos",
      "usar padrões reconhecíveis",
      "facilitar retorno e reversão",
      "priorizar clareza espacial",
      "manter consistência entre páginas"
    ],
    references: ["Steve Krug", "Jesse James Garrett", "Peter Morville"],
    bibliography: [
      { title: "Krug, Steve. Don’t Make Me Think", url: "https://sensible.com/dont-make-me-think/" },
      { title: "Garrett, Jesse James. The Elements of User Experience" }
    ]
  },
  {
    title: "Design Sensorial",
    definition: "Design Sensorial explora estímulos visuais, sonoros, táteis e perceptivos para criar experiências mais imersivas, afetivas e memoráveis.",
    practices: [
      "utilizar estímulos com propósito",
      "evitar excesso sensorial",
      "alinhar percepção visual ao contexto",
      "criar coerência emocional",
      "utilizar movimento de forma funcional",
      "considerar respostas emocionais dos usuários"
    ],
    references: ["Donald Norman", "Brenda Laurel"],
    bibliography: [
      { title: "Norman, Donald. Emotional Design" },
      { title: "Laurel, Brenda. Computers as Theatre" }
    ]
  },
  {
    title: "Usabilidade",
    definition: "Usabilidade mede o quão fácil, eficiente e compreensível é utilizar uma interface para atingir objetivos específicos. Segundo Preece, Rogers e Sharp, usabilidade está relacionada à: eficiência, eficácia, segurança, utilidade, facilidade de aprendizado e memorização.",
    practices: [
      "reduzir erros",
      "tornar ações claras",
      "simplificar fluxos",
      "priorizar legibilidade",
      "facilitar aprendizado",
      "manter consistência",
      "reduzir etapas desnecessárias"
    ],
    references: ["Jakob Nielsen", "Jennifer Preece", "Yvonne Rogers", "Helen Sharp"],
    bibliography: [
      { title: "Nielsen, Jakob. Usability Engineering", url: "https://www.nngroup.com/books/usability-engineering/" },
      { title: "Preece, Rogers & Sharp. Interaction Design" }
    ]
  },
  {
    title: "Acessibilidade",
    definition: "Acessibilidade garante que pessoas com diferentes capacidades físicas, cognitivas e sensoriais possam utilizar sistemas digitais sem barreiras.",
    practices: [
      "garantir contraste adequado",
      "permitir navegação por teclado",
      "utilizar textos alternativos",
      "evitar dependência exclusiva de cor",
      "utilizar hierarquia semântica",
      "projetar para múltiplos contextos de uso",
      "implementar WAI-ARIA (Roles, States, Properties)",
      "seguir diretrizes e-MAG (Brasil)",
      "seguir WCAG"
    ],
    references: ["W3C", "Inclusive Design Toolkit", "Microsoft Inclusive Design"],
    bibliography: [
      { title: "WCAG", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
      { title: "Inclusive Design", url: "https://www.microsoft.com/design/inclusive/" },
      { title: "e-MAG (Gov.br)", url: "https://www.gov.br/governodigital/pt-br/acessibilidade-digital/e-mag" },
      { title: "WAI-ARIA Guide", url: "https://www.w3.org/WAI/standards-guidelines/aria/" }
    ]
  },
  {
    title: "Design Atômico",
    definition: "Metodologia criada por Brad Frost baseada na construção modular de interfaces. A interface é organizada em: átomos, moléculas, organismos, templates e páginas.",
    practices: [
      "criar componentes reutilizáveis",
      "manter consistência",
      "documentar padrões",
      "facilitar escalabilidade",
      "integrar design e desenvolvimento"
    ],
    references: ["Brad Frost"],
    bibliography: [
      { title: "Brad Frost. Atomic Design", url: "https://atomicdesign.bradfrost.com/" }
    ]
  },
  {
    title: "Design System",
    definition: "Design System é um ecossistema de componentes, padrões, tokens e diretrizes que organiza produtos digitais de maneira consistente.",
    practices: [
      "padronizar componentes",
      "documentar comportamentos",
      "manter governança",
      "integrar times",
      "criar escalabilidade",
      "garantir consistência visual e funcional"
    ],
    references: ["Brad Frost", "Nathan Curtis"],
    bibliography: [
      { title: "Curtis, Nathan. Modular Web Design" },
      { title: "Material Design", url: "https://m3.material.io/" }
    ]
  },
  {
    title: "Grids",
    definition: "Grids organizam layouts através de estruturas invisíveis que garantem alinhamento, ritmo visual e responsividade.",
    practices: [
      "utilizar sistemas proporcionais",
      "manter alinhamentos consistentes",
      "trabalhar espaçamentos coerentes",
      "adaptar para múltiplas telas",
      "evitar desalinhamentos visuais"
    ],
    references: ["Josef Müller-Brockmann"],
    bibliography: [
      { title: "Müller-Brockmann. Grid Systems in Graphic Design" }
    ]
  },
  {
    title: "Psicologia das Cores",
    definition: "A Psicologia das Cores investiga como cores influenciam percepção, emoção e comportamento.",
    practices: [
      "considerar contexto cultural",
      "utilizar contraste adequado",
      "trabalhar hierarquia visual",
      "evitar excesso cromático",
      "alinhar cores à identidade da experiência"
    ],
    references: [],
    bibliography: [
      { title: "Eva Heller. A Psicologia das Cores" },
      { title: "Interaction Design Foundation", url: "https://www.interaction-design.org/literature/topics/color-theory" }
    ]
  },
  {
    title: "Tipografia",
    definition: "Tipografia organiza leitura, ritmo e legibilidade dentro de sistemas digitais.",
    practices: [
      "priorizar legibilidade",
      "criar hierarquia textual",
      "utilizar espaçamento adequado",
      "evitar excesso de famílias tipográficas",
      "considerar acessibilidade visual"
    ],
    references: ["Ellen Lupton"],
    bibliography: [
      { title: "Lupton, Ellen. Thinking with Type" },
      { title: "Butterick’s Practical Typography", url: "https://practicaltypography.com/" }
    ]
  },
  {
    title: "Gráficos",
    definition: "Gráficos transformam dados complexos em informação visual compreensível.",
    practices: [
      "evitar excesso visual",
      "priorizar leitura rápida",
      "utilizar contraste",
      "destacar padrões importantes",
      "reduzir ruído visual"
    ],
    references: ["Edward Tufte"],
    bibliography: [
      { title: "Tufte, Edward. The Visual Display of Quantitative Information" }
    ]
  },
  {
    title: "Componentes de UI",
    definition: "Componentes de UI são elementos reutilizáveis que estruturam interfaces digitais.",
    practices: [
      "manter consistência",
      "documentar estados",
      "garantir acessibilidade",
      "criar previsibilidade",
      "utilizar nomenclaturas claras"
    ],
    references: ["Material Design", "Human Interface Guidelines"],
    bibliography: [
      { title: "Material Design", url: "https://m3.material.io/" },
      { title: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines/" }
    ]
  },
  {
    title: "Ilustração e Imagem",
    definition: "Imagens e ilustrações auxiliam narrativa, orientação e identidade emocional da experiência.",
    practices: [
      "utilizar imagens funcionais",
      "evitar excesso decorativo",
      "reforçar significado",
      "manter coerência estética",
      "considerar acessibilidade visual"
    ],
    references: ["Donis A. Dondis"],
    bibliography: [
      { title: "Dondis. Sintaxe da Linguagem Visual" }
    ]
  },
  {
    title: "Design de Avaliação",
    definition: "Design de Avaliação envolve métodos para analisar eficiência, satisfação, comportamento e experiência durante o uso de sistemas digitais.",
    practices: [
      "realizar testes com usuários",
      "aplicar avaliações heurísticas",
      "medir comportamento real",
      "iterar continuamente",
      "combinar métodos qualitativos e quantitativos"
    ],
    references: ["Jakob Nielsen", "Donald Norman", "Preece, Rogers & Sharp"],
    bibliography: [
      { title: "Nielsen Norman Group", url: "https://www.nngroup.com/" },
      { title: "Preece, Rogers & Sharp. Interaction Design" }
    ]
  }
];

const ConceptsShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {conceptsData.map((concept, i) => (
        <div key={i} className="p-8 bg-aura-tech-blue/40 border border-white/10 rounded-[40px] hover:border-aura-comfort-oat/30 transition-all group flex flex-col gap-6 shadow-2xl">
          <div className="space-y-4">
            <h4 className="text-3xl font-display font-black text-white uppercase tracking-tighter leading-tight group-hover:text-aura-comfort-oat transition-colors italic">{concept.title}</h4>
            <p className="text-lg text-gray-200 font-mono leading-relaxed">{concept.definition}</p>
          </div>

          <div className="space-y-4">
            <h6 className="text-sm font-black text-aura-comfort-oat uppercase tracking-widest border-b border-white/10 pb-2 italic">Boas Práticas</h6>
            <ul className="grid grid-cols-1 gap-2">
              {concept.practices.map((practice, idx) => (
                <li key={idx} className="flex gap-3 text-base text-gray-300 font-mono group-hover:text-white transition-colors uppercase tracking-tighter">
                  <span className="text-aura-comfort-oat">●</span> {practice}
                </li>
              ))}
            </ul>
          </div>

          {concept.references.length > 0 && (
            <div className="space-y-2 text-sm text-gray-400 font-mono uppercase tracking-widest leading-tight">
              <span className="font-black text-xs opacity-50 block mb-1 italic">Referências:</span>
              {concept.references.join("; ")}
            </div>
          )}

          <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
            <h6 className="text-xs font-black text-gray-500 uppercase tracking-widest italic">Bibliografia & Links</h6>
            <div className="flex flex-col gap-2">
              {concept.bibliography.map((item, idx) => (
                item.url ? (
                  <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-aura-comfort-oat hover:underline flex items-center gap-2 group/bib font-bold">
                    <LinkIcon size={12} className="opacity-50 group-hover/bib:opacity-100" />
                    {item.title}
                  </a>
                ) : (
                  <span key={idx} className="text-sm text-gray-400 flex items-center gap-2 font-mono">
                    <BookOpen size={12} className="opacity-30" />
                    {item.title}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Publications Data ---

const artigosData = [
  {
    t: "Design de Informação e Metaverso",
    a: "Débora Aita Gasparetto",
    p: "DATJournal Design Art and Technology",
    d: "Discussão sobre interfaces, espacialidade digital, experiência imersiva e design da informação em ambientes de metaverso.",
    l: "https://periodicos.anhembi.br/index.php/datjournal/article/view/914"
  },
  {
    t: "Da Bio re(s)[ex]istência ao Covid Planner: curadoria e projetos interativos",
    a: "Débora Aita Gasparetto",
    p: "Texto Digital (UFSC)",
    d: "Reflexão sobre curadoria digital, experiências interativas e produção colaborativa em contextos pandêmicos.",
    l: "https://periodicos.ufsc.br/index.php/textodigital/article/view/83943"
  },
  {
    t: "Projetando Interfaces para Homo Empathicus",
    a: "Débora Aita Gasparetto",
    p: "PORTO ARTE: Revista de Artes Visuais",
    d: "Discussão sobre empatia, experiência do usuário e design centrado no humano em interfaces digitais.",
    l: "https://seer.ufrgs.br/PortoArte/article/view/95866"
  },
  {
    t: "Modos de conectar em redes instáveis",
    a: "Débora Aita Gasparetto",
    p: "MODOS",
    d: "Análise das relações entre conectividade, cultura digital e interação em ambientes tecnológicos contemporâneos.",
    l: "https://www.publionline.iar.unicamp.br/index.php/mod/article/view/866"
  },
  {
    t: "Redesenho da Interface Digital da Revista Arco: o design centrado no usuário com a utilização do método 5I’s",
    a: "Juliana Krupahtz e Débora Aita Gasparetto",
    p: "Human Factors in Design",
    d: "Aplicação da metodologia 5I’s no redesign de uma plataforma editorial digital centrada na experiência do usuário.",
    l: "https://www.revistas.udesc.br/index.php/hfd/article/view/2316796307072018002"
  },
  {
    t: "Infodesign no VR Game Labchange",
    a: "Débora Aita Gasparetto, Cambruzzi e Dellamea",
    p: "Expressão",
    d: "Discussão sobre design da informação e realidade virtual aplicados a serious games.",
    l: "https://periodicos.ufsm.br/expressao/article/view/30621"
  },
  {
    t: "Design Conectado: por um mundo de experiências",
    a: "Débora Aita Gasparetto, Pedrozo e Oliveira",
    p: "Estudos em Design",
    d: "Reflexão sobre experiências conectadas, interação digital e design contemporâneo.",
    l: "https://estudosemdesign.emnuvens.com.br/design/article/view/298"
  },
  {
    t: "Observações sobre o circuito de arte digital no Brasil",
    a: "Débora Aita Gasparetto",
    p: "MATLIT",
    d: "Análise crítica sobre circulação, institucionalização e visibilidade da arte digital brasileira.",
    l: "https://impactum-journals.uc.pt/matlit/article/view/2182-8830_3-1_12"
  },
  {
    t: "Corpos conectados: experiências e percepções transformadas",
    a: "Débora Aita Gasparetto",
    p: "Artefactum",
    d: "Discussão sobre corpo, tecnologia e transformation perceptiva na cultura digital.",
    l: "https://artefactum.rafrom.com.br/index.php/artefactum/article/view/693"
  },
  {
    t: "Arte-ciência-tecnologia na era da cultura digital: contexto Brasil",
    a: "Débora Aita Gasparetto",
    p: "Palíndromo",
    d: "Reflexão sobre arte, tecnologia e produção cultural no contexto digital brasileiro.",
    l: "https://www.revistas.udesc.br/index.php/palindromo/article/view/3657"
  },
  {
    t: "On the Journey Toward Humane Education in Brazil",
    a: "Débora Aita Gasparetto",
    p: "ATLA – Alternatives to Laboratory Animals, 2017",
    d: "Discussão interdisciplinar sobre ética, educação e alternativas ao uso de animais no ensino superior.",
    l: "https://journals.sagepub.com/doi/10.1177/026119291704500604",
    doi: "https://doi.org/10.1177/026119291704500604"
  },
  {
    t: "O encontro dos tempos em Ballet Digitallique",
    a: "Débora Aita Gasparetto",
    p: "Expressão, 2011",
    d: "Discussão sobre temporalidade, arte digital e experiências híbridas entre mídia e performance.",
    l: "https://periodicos.ufsm.br/expressao/article/view/2896"
  },
  {
    t: "Hibridações entre arte e mídia: alterações nas maneiras de atuar no sistema da arte na contemporaneidade",
    a: "Débora Aita Gasparetto",
    p: "Expressão",
    d: "Análise das transformações nas práticas artísticas contemporâneas a partir das relações entre arte, mídia e tecnologia.",
    l: "https://periodicos.ufsm.br/expressao/article/view/3922"
  },
  {
    t: "Design de Interface e Usabilidade: Avaliação Heurística em Sistemas de Gestão",
    a: "Gustavo Miranda, Gabriel Cardoso e Débora Aita Gasparetto",
    p: "GT2 - Pesquisa em Design, 2025",
    d: "Estudo sobre a aplicação de métodos de avaliação heurística em interfaces de sistemas complexos.",
    pdf: "/TCCS/livro_capitulo_artigos/artigoevento02_GT2 - Gustavo Miranda, Gabriel Cardoso e Débora Gasparetto.docx.pdf"
  },
  {
    t: "Sustentabilidade e Design de Interface: O Caso Onde Descarto?",
    a: "João Marco de Abreu Christo e Débora Aita Gasparetto",
    p: "GT4 - Design e Sociedade, 2024",
    d: "Análise do desenvolvimento de uma plataforma colaborativa para descarte de resíduos sob a ótica do design sustentável.",
    pdf: "/TCCS/livro_capitulo_artigos/artigoevento03_GT4 - JOÃO MARCO DE ABREU CHRISTO.pdf"
  }
];

const capitulosData = [
  {
    t: "A metodologia 5I’s na projetação do aplicativo Baloo",
    a: "Débora Aita Gasparetto",
    p: "In: Metodologia 5I's: projetos e processos, 2020",
    d: "Aplicação prática da metodologia 5I’s em um projeto de aplicativo centrado na experiência do usuário.",
    l: "https://indd.adobe.com/view/511e5e04-f393-4fdb-9fbb-551a3af0b510"
  },
  {
    t: "Design de interfaces e a flexibilidade no uso da metodologia 5I’s",
    a: "Débora Aita Gasparetto",
    p: "In: Pesquisa e Desenvolvimento Criativo..., 2025",
    d: "Discussão sobre adaptação metodológica no desenvolvimento da plataforma Cesta de Indicadores da Educação Superior.",
    l: "https://www.facosufsm.com/pesquisa-e-desenvolvimento-criativo"
  },
  {
    t: "Boas práticas e aplicação de avaliações heurísticas no design de interfaces",
    a: "Débora Aita Gasparetto e Gabriel Cardoso",
    p: "In: Pesquisa e desenvolvimento criativo..., 2025",
    d: "Reflexão técnica sobre heurísticas, usabilidade e avaliação de interfaces digitais.",
    l: "https://www.facosufsm.com/pesquisa-e-desenvolvimento-criativo",
    pdf: "/TCCS/livro_capitulo_artigos/artigoevento01_GT2 - Débora Gasparetto, Gabriel Cardoso e Jaqueline Friedrich Petroni.docx.pdf"
  },
  {
    t: "O design responsivo e o design adaptativo na projetação da interface da plataforma Cesta",
    a: "Débora Aita Gasparetto e Jaqueline Petroni",
    p: "In: Pesquisa e desenvolvimento criativo..., 2025",
    d: "Discussão sobre responsividade, adaptação de interfaces e experiência multiplataforma.",
    l: "https://www.facosufsm.com/pesquisa-e-desenvolvimento-criativo"
  },
  {
    t: "AlterECO: plataforma digital interativa e colaborativa",
    a: "Débora Aita Gasparetto",
    p: "In: Métodos Alternativos ao uso de animais..., 2022",
    d: "Projeto de plataforma voltada à bioética, colaboração e substituição do uso de animais no ensino.",
    l: "https://www.pucpress.com.br/metodos-alternativos-ao-uso-de-animais/"
  },
  {
    t: "O sistema da arte digital no Brasil 10 anos depois do 'curto'",
    a: "Débora Aita Gasparetto",
    p: "In: Pablo Gobira. (Org.). CRISES: Artes e Jogos Digitais..., 2025",
    d: "Capítulo que debate mais de uma década de estudos sobre o sistema da arte digital no cenário pós-digital brasileiro.",
    pdf: "/TCCS/livro_capitulo_artigos/CAPÍTULO_LIVRO_CRISES.pdf"
  }
];

const livrosData = [
  {
    t: "Metodologia 5I’s: projetos e processos",
    a: "Débora Aita Gasparetto et al. (Org.)",
    p: "FACOS-UFSM, 2020",
    d: "Livro que sistematiza a metodologia 5I’s aplicada ao UX Design, interfaces digitais e design centrado no usuário.",
    l: "https://www.ufsm.br/app/uploads/sites/746/2020/10/metodologia-5is_projetos-e-processos.pdf"
  },
  {
    t: "Pesquisa e desenvolvimento criativo para divulgação de indicadores da educação superior",
    a: "Kegler, Gasparetto e Melchior (Org.)",
    p: "FACOS EDITORA, 2025",
    d: "Discussão sobre UX, plataformas digitais, visualização de dados e design de interfaces para educação superior.",
    l: "https://www.facosufsm.com/pesquisa-e-desenvolvimento-criativo",
    pdf: "/TCCS/livro_capitulo_artigos/livro_capitulosdelivro.pdf"
  },
  {
    t: "Design + Arte | Ciência | Tecnologia: conexões teórico-práticas",
    a: "Débora Aita Gasparetto",
    p: "PPGART-UFSM, 2017",
    d: "Livro sobre design, cultura digital, ativismo, tecnologia e experiências interativas contemporâneas.",
    l: "https://www.ufsm.br/app/uploads/sites/820/2021/09/design-arte-ciencia-tecnologia.pdf"
  },
  {
    t: "O “Curto-Circuito” da Arte Digital no Brasil",
    a: "Débora Aita Gasparetto",
    p: "Edição da Autora, 2014",
    d: "Investigação sobre os sistemas, exposições e circulação da arte digital no Brasil.",
    l: "https://www.academia.edu/9951463/O_Curto_Circuito_da_Arte_Digital_no_Brasil"
  },
  {
    t: "Arte-ciência-tecnologia: o sistema da arte em perspectiva",
    a: "Débora Aita Gasparetto",
    p: "Editora Lab Piloto, 2014",
    d: "Estudo sobre redes, sistemas culturais e arte digital contemporânea.",
    l: "https://www.academia.edu/9951505/Arte_Ciência_Tecnologia_o_sistema_da_arte_em_perspectiva"
  },
  {
    t: "Clim, Athos e você: juntos pelo planeta",
    a: "GASPARETTO, D. A.; OLIVEIRA, M. G. ; OLIVEIRA, S. G.",
    p: "Edição dos autores, 2024",
    d: "Livro educativo focado em sustentabilidade e letramento ecológico."
  },
  {
    t: "História da arte no desenho industrial: imagens fantasmas",
    a: "GASPARETTO, D. A. (Org.)",
    p: "Facos Editora, 2020",
    d: "Coletânea que explora as interseções entre historiografia da arte e projeto industrial."
  }
];

const PublicationsTabs = () => {
  const [activeTab, setActiveTab] = useState<'artigos' | 'capitulos' | 'livros' | 'tccs'>('artigos');

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-4 p-2 bg-white/5 border border-white/10 rounded-2xl w-fit">
        {[
          { id: 'artigos', label: 'Artigos' },
          { id: 'capitulos', label: 'Capítulos' },
          { id: 'livros', label: 'Livros' },
          { id: 'tccs', label: 'TCCs' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "px-6 py-2 rounded-xl text-base font-mono font-bold uppercase transition-all",
              activeTab === tab.id 
                ? "bg-aura-comfort-oat text-dark-bg shadow-lg shadow-aura-comfort-oat/20" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'artigos' && (
            <div className="grid grid-cols-1 gap-8">
              {artigosData.map((item, idx) => (
                <div key={idx} className="p-8 bg-aura-tech-blue/40 border border-white/10 rounded-[40px] group hover:border-aura-comfort-oat/30 transition-all shadow-xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <TechLabel color="green">Artigo</TechLabel>
                    <span className="text-base font-mono text-gray-400 uppercase tracking-widest">{item.p}</span>
                  </div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-2 group-hover:text-aura-comfort-oat transition-colors leading-tight italic">{item.t}</h4>
                  <p className="text-lg font-mono text-aura-comfort-oat mb-4 font-bold italic">{item.a}</p>
                  <p className="text-base text-gray-200 font-mono leading-relaxed mb-6">{item.d}</p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    {item.l && <ReferenceLink title="Link Externo" url={item.l} />}
                    {item.doi && <ReferenceLink title="DOI" url={item.doi} />}
                    {item.pdf && <ReferenceLink title="Abrir PDF Local" url={item.pdf} />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'capitulos' && (
            <div className="grid grid-cols-1 gap-8">
              {capitulosData.map((item, idx) => (
                <div key={idx} className="p-8 bg-aura-tech-blue/40 border border-white/10 rounded-[40px] group hover:border-aura-comfort-oat/30 transition-all shadow-xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <TechLabel color="cyan">Capítulo de Livro</TechLabel>
                    <span className="text-base font-mono text-gray-400 uppercase tracking-widest">{item.p}</span>
                  </div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-2 group-hover:text-aura-comfort-oat transition-colors leading-tight italic">{item.t}</h4>
                  <p className="text-lg font-mono text-aura-comfort-oat mb-4 font-bold italic">{item.a}</p>
                  <p className="text-base text-gray-200 font-mono leading-relaxed">{item.d}</p>
                  {(item.l || item.pdf) && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {item.l && <ReferenceLink title="Link Externo" url={item.l} />}
                      {item.pdf && <ReferenceLink title="Abrir PDF Local" url={item.pdf} />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'livros' && (
            <div className="grid grid-cols-1 gap-8">
              {livrosData.map((item, idx) => (
                <div key={idx} className="p-8 bg-aura-tech-blue/40 border border-white/10 rounded-[40px] group hover:border-aura-comfort-oat/30 transition-all shadow-xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <TechLabel color="white">Livro</TechLabel>
                    <span className="text-base font-mono text-gray-400 uppercase tracking-widest">{item.p}</span>
                  </div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-2 group-hover:text-aura-comfort-oat transition-colors leading-tight italic">{item.t}</h4>
                  <p className="text-lg font-mono text-aura-comfort-oat mb-4 font-bold italic">{item.a}</p>
                  <p className="text-base text-gray-200 font-mono leading-relaxed">{item.d}</p>
                  {(item.l || item.pdf) && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {item.l && <ReferenceLink title="Link Externo" url={item.l} />}
                      {item.pdf && <ReferenceLink title="Abrir PDF Local" url={item.pdf} />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tccs' && (
             <div className="space-y-12">
               <p className="text-base text-gray-300 font-mono leading-relaxed max-w-3xl">
                 Seleção de Trabalhos de Conclusão de Curso (TCC) desenvolvidos por alunos sob orientação e em colaboração com o laboratório.
               </p>
               <LabProjectsShowcase />
             </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Modules Data ---

const RoboCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config hiper-responsiva e sem atrasos severos
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button') || !!target.closest('a'));
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-8 h-8 border-[1.5px] border-aura-tech-cyan/80 rounded-lg flex items-center justify-center bg-transparent backdrop-blur-sm relative overflow-hidden">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="w-2 h-2 bg-aura-comfort-green rounded-sm absolute"
         />
      </div>
      {isHovering && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 text-[9px] font-mono text-aura-tech-cyan tracking-widest uppercase font-bold whitespace-nowrap"
        >
          Target Lock
        </motion.div>
      )}
    </motion.div>
  );
};

const modules: ModuleData[] = [
  {
    id: '11',
    title: "Metodologia 5I's",
    subtitle: 'Processo LabInterface',
    icon: Brain,
    content: (
      <div className="space-y-16">
        {/* Apresentação do Laboratório */}
        <div className="p-10 bg-[#0A0A0A] border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-aura-tech-cyan/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <h4 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter">Laboratório de Interfaces</h4>
            
            <div className="space-y-8">
              <div>
                <h5 className="text-sm font-mono text-gray-500 uppercase font-bold tracking-widest mb-2 border-l-2 border-aura-tech-cyan pl-3">Coordenação</h5>
                <div className="flex flex-wrap items-center gap-4 pl-3">
                  <span className="text-2xl text-white font-lexend font-bold">Débora Aita Gasparetto</span>
                  <a href="http://lattes.cnpq.br/1722113830390578" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-aura-tech-cyan/10 hover:border-aura-tech-cyan/30 transition-all text-gray-300 hover:text-aura-tech-cyan group">
                    <ExternalLink size={14} className="text-gray-500 group-hover:text-aura-tech-cyan transition-colors" /> Currículo Lattes
                  </a>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <h5 className="text-sm font-mono text-gray-500 uppercase font-bold tracking-widest mb-4 border-l-2 border-aura-comfort-oat pl-3">Objetivo Geral</h5>
                <p className="text-[1em] text-gray-300 font-lexend leading-relaxed pl-3 max-w-4xl">
                  Desenvolver atividades criativas e projetuais na temática de Projeto de Interfaces, considerando aspectos teóricos e práticos, com vistas ao aprimoramento de habilidades e atitudes condizentes com uma maior maturidade profissional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metodologia 5Is Header (Invertido) */}
        <div className="relative p-12 md:p-16 rounded-[48px] bg-[#0A0A0A] border border-white/5 overflow-hidden shadow-2xl mb-12 mt-8">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12 scale-150">
            <Brain size={300} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <TechLabel color="cyan">Processo LabInterface</TechLabel>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-white mt-8 mb-6 leading-none tracking-tighter uppercase shrink-0">
              Metodologia 5I's
            </h2>
            <div className="h-1.5 w-24 bg-aura-comfort-oat rounded-full shadow-lg shadow-aura-comfort-oat/40" />
          </div>
        </div>

        {/* Metodologia 5Is */}
        <div className="space-y-8">
          <p className="text-base text-gray-300 font-mono leading-relaxed max-w-3xl">
            A metodologia 5I's sistematiza o processo de design de interfaces em cinco fases integradas, garantindo que a jornada do usuário seja o centro de cada decisão técnica e estética.
          </p>
          <FiveIsDiagram />
        </div>

        {/* Links rápidos para as Subpáginas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
           <button onClick={() => (window as any).__navigate('12')} className="text-left p-6 bg-white/[0.04] border border-white/10 rounded-[32px] hover:bg-aura-tech-cyan/10 hover:border-aura-tech-cyan/30 transition-all group flex flex-col items-start gap-4">
              <Library className="text-aura-tech-cyan group-hover:scale-110 transition-transform" size={32} />
              <div>
                 <h4 className="text-xl font-black text-white uppercase tracking-widest italic mb-1">Conceitos</h4>
                 <p className="text-sm text-gray-400 font-mono uppercase">Glossário e Fundamentos</p>
              </div>
           </button>
           <button onClick={() => (window as any).__navigate('15')} className="text-left p-6 bg-white/[0.04] border border-white/10 rounded-[32px] hover:bg-aura-comfort-oat/10 hover:border-aura-comfort-oat/30 transition-all group flex flex-col items-start gap-4">
              <BookOpen className="text-aura-comfort-oat group-hover:scale-110 transition-transform" size={32} />
              <div>
                 <h4 className="text-xl font-black text-white uppercase tracking-widest italic mb-1">Publicações</h4>
                 <p className="text-sm text-gray-400 font-mono uppercase">Artigos, TCCs e Livros</p>
              </div>
           </button>
           <button onClick={() => (window as any).__navigate('16')} className="text-left p-6 bg-white/[0.04] border border-white/10 rounded-[32px] hover:bg-aura-comfort-green/10 hover:border-aura-comfort-green/30 transition-all group flex flex-col items-start gap-4">
              <FolderKanban className="text-aura-comfort-green group-hover:scale-110 transition-transform" size={32} />
              <div>
                 <h4 className="text-xl font-black text-white uppercase tracking-widest italic mb-1">Projetos</h4>
                 <p className="text-sm text-gray-400 font-mono uppercase">Portfólio do Laboratório</p>
              </div>
           </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ModuleSection title="Referências" icon={BookOpen}>
            <div className="space-y-4">
              <ReferenceLink title="Livro INEP - Pesquisa em Arte e Design (PDF)" url="https://repositorio.ufsm.br/bitstream/handle/1/36578/Livro%20INEP%20-%20Online.pdf" />
              <ReferenceLink title="Livro Oficial: Metodologia 5I's" url="https://www.ufsm.br/app/uploads/sites/746/2020/10/metodologia-5is_projetos-e-processos.pdf" />
            </div>
          </ModuleSection>

          <ModuleSection title="Assistente IA" icon={Sparkles}>
               <div className="p-8 rounded-[40px] bg-aura-comfort-oat/5 border border-white/10 text-center group hover:border-aura-comfort-oat/40 transition-all shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-aura-comfort-oat/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Brain className="text-aura-comfort-oat mx-auto mb-4 relative z-10" size={48} />
                  <h5 className="text-xl font-display font-black text-white uppercase mb-2 relative z-10 italic">Robô 5I's</h5>
                  <div className="relative z-10">
                    <ReferenceLink title="Acessar Assistente GPT" url="https://chatgpt.com/g/g-ij5S5dmha-robo-da-metodologia-5i-s-de-design-de-interfaces" />
                  </div>
               </div>
          </ModuleSection>
        </div>

        <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
          <p className="text-base text-gray-300 font-mono leading-relaxed italic">
            A metodologia 5I's foi sistematizada por <b>Débora Aita Gasparetto</b> para o LabInterface UFSM como uma ferramenta de governança em design.
          </p>
        </div>
      </div>
    )
  },
  {
    id: '12',
    parentId: '11',
    title: 'Conceitos',
    subtitle: 'Glossário • Fundamentos de Design',
    icon: Library,
    content: (
      <div className="space-y-12">
        <p className="text-xl text-white font-mono leading-relaxed max-w-4xl font-black italic">
          Exploração dos conceitos fundamentais que norteiam a pesquisa e a prática no LabInterface UFSM, fundamentando a construção de interfaces centradas no humano.
        </p>

        <ConceptsShowcase />
      </div>
    )
  },
  {
    id: '15',
    parentId: '11',
    title: 'Publicações',
    subtitle: 'Artigos • Capítulos • Livros • TCCs',
    icon: BookOpen,
    content: <PublicationsTabs />
  },
  {
    id: '16',
    parentId: '11',
    title: 'Projetos do Lab',
    subtitle: 'Portfólio • Casos • Resultados',
    icon: FolderKanban,
    content: (
      <div className="space-y-12">
        <p className="text-xl text-white font-mono leading-relaxed max-w-4xl font-black italic">
          Exploração do portfólio de projetos desenvolvidos no LabInterface UFSM, aplicando a Metodologia 5I's em desafios reais de design de interação e interface.
        </p>
        <LabProjectsShowcase />
      </div>
    )
  },
  {
    id: '17',
    title: 'Gamification',
    subtitle: 'Jogar para engajar',
    icon: Gamepad2,
    content: <GamificationShowcase />
  },
  {
    id: '18',
    title: 'Design de Games',
    subtitle: 'Criar um mundo que funciona',
    icon: Gamepad2,
    content: <GameDesignShowcase />
  },
  {
    id: '20',
    title: 'Design Atômico',
    subtitle: 'Sistemas de Componentes',
    icon: Boxes,
    content: (
      <div className="space-y-16">
        <div className="p-8 bg-aura-comfort-oat/5 border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-aura-comfort-oat/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl font-display font-black text-white uppercase mb-4 text-aura-comfort-oat italic text-center relative z-10">"Não projetamos páginas, projetamos sistemas."</h3>
          <p className="text-base text-center text-gray-200 font-mono relative z-10 uppercase tracking-widest">Brad Frost — Atomic Design</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ModuleSection title="A Metodologia" icon={Sparkles}>
            <p className="text-xl text-white font-mono leading-relaxed mb-10 uppercase tracking-tighter font-black italic">Estrutura baseada na química para criar interfaces modulares e escaláveis.</p>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { id: 'tokens', label: 'Design Tokens' },
                  { id: 'atoms', label: 'Átomos' },
                  { id: 'molecules', label: 'Moléculas' },
                  { id: 'organisms', label: 'Organismos' },
                  { id: 'templates', label: 'Templates' },
                  { id: 'pages', label: 'Páginas' }
                ].map((s) => (
                  <div key={s.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center group/item hover:border-aura-comfort-oat/30 transition-all hover:bg-aura-comfort-oat/5">
                    <AtomicVisuals type={s.id as any} />
                    <span className="text-base font-black text-white uppercase block mt-2 group-hover/item:text-aura-comfort-oat transition-colors italic">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ModuleSection>
          <ModuleSection title="Recursos" icon={BookOpen}>
             <div className="space-y-4">
                <p className="text-xl text-white font-mono leading-relaxed mb-4 font-black italic">
                  O Design Atômico permite que os designers construam sistemas coesos a partir de pequenas partes reutilizáveis.
                </p>
                <ReferenceLink title="Atomic Design (Livro Online)" url="https://atomicdesign.bradfrost.com/" />
             </div>
          </ModuleSection>
        </div>
      </div>
    )
  },
  {
    id: '19',
    title: 'UX Design',
    subtitle: 'Experiência e Escrita',
    icon: Users,
    content: <UXDesignAdvancedShowcase />
  },
  {
    id: '21',
    title: 'Acessibilidade',
    subtitle: 'Design Inclusivo e Impacto',
    icon: ShieldCheck,
    content: (
      <div className="space-y-16">
        <div className="p-8 bg-aura-comfort-oat/5 border border-white/10 rounded-[40px] mb-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-aura-comfort-oat/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-xl text-gray-200 font-mono leading-relaxed italic text-center relative z-10 uppercase tracking-widest">
            A acessibilidade não é um anexo, é o <span className="text-aura-comfort-oat font-black">alicerce</span>. Projetamos para pessoas, em toda a sua diversidade de percepção e interação.
          </p>
        </div>

        <AccessibilityLab />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ModuleSection title="Princípios Universais" icon={Globe}>
            <div className="space-y-6">
              <p className="text-xl text-white font-mono leading-relaxed uppercase tracking-tighter font-black italic">
                As diretrizes WCAG (Web Content Accessibility Guidelines) sustentam a inclusão digital em quatro pilares fundamentais:
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                 {[
                   { t: "Percebível", d: "A informação e os componentes da interface devem ser apresentados de forma que os usuários possam percebê-los." },
                   { t: "Operável", d: "Os componentes da interface e a navegação devem ser operáveis." },
                   { t: "Compreensível", d: "A informação e a operação da interface devem ser compreensíveis." },
                   { t: "Robusto", d: "O conteúdo deve ser robusto o suficiente para ser interpretado de forma confiável por uma ampla variedade de agentes de usuário." }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-4">
                     <span className="text-aura-comfort-oat font-black italic">0{i+1}.</span>
                     <div>
                       <h6 className="text-lg font-display font-black text-white uppercase italic">{p.t}</h6>
                       <p className="text-base text-gray-200 font-mono leading-tight">{p.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </ModuleSection>

          <ModuleSection title="WAI-ARIA & Semântica" icon={Code2}>
            <div className="space-y-6">
              <p className="text-xl text-white font-mono leading-relaxed uppercase tracking-tighter font-black italic">
                O WAI-ARIA define papéis (roles), estados e propriedades que permitem que tecnologias assistivas compreendam interfaces complexas e dinâmicas:
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                 {[
                   { t: "Roles", d: "Define o que um elemento É (ex: button, navigation, tablist)." },
                   { t: "States", d: "Define a condição do elemento (ex: aria-expanded='true', aria-hidden)." },
                   { t: "Properties", d: "Define características adicionais (ex: aria-label para botões sem texto)." }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-4">
                     <span className="text-aura-comfort-oat font-black italic text-2xl">→</span>
                     <div>
                       <h6 className="text-2xl font-display font-black text-white uppercase italic">{p.t}</h6>
                       <p className="text-lg text-gray-200 font-mono leading-tight">{p.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
              <ReferenceLink title="Documentação WAI-ARIA (W3C)" url="https://www.w3.org/WAI/standards-guidelines/aria/" />
            </div>
          </ModuleSection>

          <ModuleSection title="Padrão Brasileiro: e-MAG" icon={ShieldCheck}>
             <div className="space-y-6">
                <p className="text-xl text-white font-mono leading-relaxed uppercase tracking-tighter font-black italic">
                  O Modelo de Acessibilidade em Governo Eletrônico (e-MAG) é o norteador para o desenvolvimento acessível no contexto brasileiro (gov.br):
                </p>
                <div className="p-6 bg-aura-tech-blue/40 border border-aura-comfort-oat/20 rounded-2xl italic">
                   <p className="text-base text-gray-200 leading-relaxed font-lexend">
                     "O e-MAG segue as recomendações internacionais do WCAG, mas é adaptado para as necessidades da administração pública e do cidadão brasileiro, sendo obrigatório em portais do Governo Federal."
                   </p>
                </div>
                <div className="flex flex-col gap-3">
                  <ReferenceLink title="Modelo e-MAG - gov.br" url="https://www.gov.br/governodigital/pt-br/acessibilidade-digital/e-mag" />
                  <ReferenceLink title="Guia de Acessibilidade Digital" url="https://www.gov.br/governodigital/pt-br/acessibilidade-digital" />
                </div>
             </div>
          </ModuleSection>

          <ModuleSection title="Checklist A11Y" icon={CheckSquare}>
             <div className="space-y-4">
                <Checklist items={[
                  "Contraste mínimo 4.5:1 (WCAG AA)",
                  "Foco visível (anéis de foco)",
                  "Sem dependência exclusiva de cor",
                  "Hierarquia Semântica (H1-H6)",
                  "Alt text Contextual",
                  "Aria-labels em elementos visuais"
                ]} />
                <ReferenceLink title="Guia WCAG 2.1 (W3C)" url="https://www.w3.org/WAI/WCAG21/quickref/" />
             </div>
          </ModuleSection>
        </div>
      </div>
    )
  },
  {
    id: '22',
    title: 'Leis de UX & Heurísticas',
    subtitle: 'Psicologia Cognitiva & Usabilidade',
    icon: Scale,
    content: <LawsOfUXDocumentation />
  },
  {
    id: '26',
    title: 'Testes de Uso',
    subtitle: 'Validação • Comportamento • Pesquisa',
    icon: Users,
    content: <UsabilityTestingDocumentation />
  },
  {
    id: '23',
    title: 'UI Design Lab',
    subtitle: 'Fundamentos Visuais',
    icon: Layout,
    content: (
      <div className="space-y-16">
        <div className="p-12 bg-aura-tech-blue/40 border border-white/10 rounded-[48px] text-center space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-aura-comfort-oat/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-20 h-20 bg-aura-comfort-oat/20 rounded-3xl flex items-center justify-center mx-auto text-aura-comfort-oat relative z-10 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
            <Layout size={40} />
          </div>
          <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter relative z-10 italic">Arquitetura Visual</h3>
          <p className="text-2xl text-white font-lexend max-w-3xl mx-auto leading-relaxed relative z-10 font-black italic">
            A interface é a camada de diálogo. Aplicamos tokens semânticos para garantir clareza, beleza e funcionalidade sensorial.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 relative z-10">
            {[
              { t: 'Tipografia', id: '23.1' }, 
              { t: 'Cores', id: '23.2' }, 
              { t: 'Componentes', id: '23.3' }, 
              { t: 'Sinais', id: '23.4' }
            ].map((item, i) => (
              <button 
                key={i} 
                onClick={() => (window as any).__navigate && (window as any).__navigate(item.id)}
                className="w-full text-left p-4 bg-white/5 rounded-2xl border border-white/5 text-lg font-mono uppercase text-gray-300 font-bold hover:bg-white/10 hover:border-aura-tech-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-between group"
              >
                {item.t}
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-aura-tech-cyan" />
              </button>
            ))}
          </div>
        </div>

        {/* --- EXPANSÃO TEÓRICA: Cultura, Poética e Perspectivas das Interfaces --- */}
        <div className="py-16 space-y-16">
          <div className="flex flex-col gap-2 border-l-4 border-aura-tech-cyan pl-6">
            <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter italic">
              Perspectivas da Interface
            </h3>
            <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest">
              Fundamentação Acadêmica: UFG / Emoção Art.ficial
            </p>
          </div>

          {/* Citação Principal */}
          <div className="p-10 bg-[#0A0A0A] border border-white/5 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Quote size={120} className="text-white" />
            </div>
            <p className="text-2xl text-gray-200 font-lexend leading-relaxed relative z-10 max-w-4xl">
              "Em termos gerais, interfaces são superfícies que separam dois sistemas. (...) Interfaces são canais para interações, mediações e regulagens entre dois sistemas, vitais para o processo conhecido como interatividade."
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-aura-tech-cyan" />
              <span className="text-[1em] font-mono text-aura-tech-cyan uppercase tracking-widest font-bold">Catálogo Itaú Cultural (Emoção Art.ficial 3.0)</span>
            </div>
          </div>

          {/* Princípios de Cleomar Rocha */}
          <div className="p-10 border border-aura-tech-cyan/30 bg-aura-tech-cyan/5 rounded-[40px] shadow-xl space-y-8">
             <div className="flex items-center gap-4 border-b border-aura-tech-cyan/20 pb-4">
                <div className="p-3 bg-aura-tech-cyan/10 rounded-xl text-aura-tech-cyan">
                   <Target size={28} />
                </div>
                <div>
                   <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter">O que define uma Interface?</h3>
                   <p className="text-[1em] text-aura-tech-cyan font-mono tracking-widest uppercase">Cleomar Rocha (UFG)</p>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: "01", t: "Vínculo de Sistemas", d: "Pode ocorrer entre dois ou mais sistemas computacionais, ou entre o ser humano e a máquina." },
                  { n: "02", t: "Pertencimento", d: "A interface não flutua no vazio. Ela pertence a um sistema, é a sua superfície de fluxo e contato." },
                  { n: "03", t: "Tradução Lógica", d: "Pressupõe obrigatoriamente um tratamento lógico de informações e conversão de dados entre homem e máquina." }
                ].map(p => (
                  <div key={p.n} className="space-y-3">
                     <span className="text-3xl font-display font-black text-aura-tech-cyan/20">{p.n}</span>
                     <h5 className="text-[1em] font-bold font-mono text-white uppercase">{p.t}</h5>
                     <p className="text-[1em] text-gray-400 font-lexend">{p.d}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Alan Cooper vs Teoria Acadêmica */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Acadêmicos / UFG */}
             <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6">
                <Layers size={24} className="text-white opacity-50" />
                <h4 className="text-xl font-display font-black text-white uppercase italic">Tipologias (UFG)</h4>
                <p className="text-[1em] text-gray-400 font-mono leading-relaxed">
                  A literatura aponta a evolução através de diferentes formatos: <strong>Físicas</strong> (cabos, botões), <strong>Gráficas</strong> (WIMP - Windows, Icons, Menus, Pointer), <strong>Perceptivas/Sonoras</strong> e <strong>Cognitivas</strong> (Inteligentes/Naturais). Elas fundem-se formando modelos complexos de mediação sensorial.
                </p>
             </div>

             {/* Alan Cooper */}
             <div className="p-8 border border-aura-comfort-oat/30 bg-aura-comfort-oat/5 rounded-3xl space-y-6 relative overflow-hidden group hover:border-aura-comfort-oat/60 transition-all">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-all">
                   <Target size={180} className="text-aura-comfort-oat" />
                </div>
                <Users size={24} className="text-aura-comfort-oat" />
                <h4 className="text-xl font-display font-black text-white uppercase italic">Goal-Directed Design (Alan Cooper)</h4>
                <p className="text-[1em] text-gray-300 font-lexend leading-relaxed relative z-10">
                  Na contramão da discussão meramente estrutural, Alan Cooper foca na pragmática: <strong>Interfaces devem servir aos objetivos humanos, não ao modelo da máquina</strong>. O bom design não é uma metáfora (como a "Ponte" ou "Área de Trabalho"), mas sim um <em>"Idiom"</em> prático que permite que as Personas alcancem seus fins com o menor esforço cognitivo possível.
                </p>
                <div className="flex gap-2 relative z-10">
                   <span className="text-[10px] font-mono border border-aura-comfort-oat/40 text-aura-comfort-oat px-2 py-1 rounded">UX Prático</span>
                   <span className="text-[10px] font-mono border border-aura-comfort-oat/40 text-aura-comfort-oat px-2 py-1 rounded">Personas</span>
                </div>
             </div>
          </div>

          {/* Cronologia Evolutiva das Interfaces */}
          <div className="p-10 border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden space-y-10">
             <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter">
                  Evolução Histórica
                </h3>
                <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest">
                  Da máquina de calcular ao espaço cognitivo (1945 — Presente)
                </p>
             </div>

             <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-0">
                {/* Linha conectora (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-aura-tech-cyan/20 to-transparent -translate-y-1/2" />

                {[
                  { y: "1945+", t: "Físicas", d: "Cabos, chaves e botões. Cálculo mecânico sem 'usuário'.", i: "bg-gray-800 text-gray-400" },
                  { y: "1955+", t: "Linguagem", d: "Válvulas e transistores. Telas escuras, comandos lógicos (batch).", i: "bg-gray-800 text-gray-400" },
                  { y: "1965+", t: "Gráficas", d: "Menus hierárquicos e preenchimento de formulários em tela.", i: "bg-aura-tech-cyan/20 text-aura-tech-cyan" },
                  { y: "1980+", t: "WIMP", d: "Windows, Icons, Menus e Pointers. A era Apple e Douglas Engelbart.", i: "bg-aura-tech-cyan text-dark-bg font-black shadow-[0_0_15px_rgba(0,255,255,0.4)]" },
                  { y: "2000+", t: "Cognitivas", d: "Interfaces inteligentes, naturais, sensores, visão computacional e IA.", i: "bg-white text-dark-bg font-black" }
                ].map((era, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center space-y-4 group">
                     <span className={`text-xs font-mono px-3 py-1 rounded-full border border-white/10 z-10 transition-transform group-hover:scale-110 ${era.i}`}>
                        {era.y}
                     </span>
                     <div className="space-y-1">
                        <h5 className="text-[1em] font-bold font-mono text-white uppercase">{era.t}</h5>
                        <p className="text-xs text-gray-400 font-lexend max-w-[150px] mx-auto">{era.d}</p>
                     </div>
                  </div>
                ))}
             </div>
             
             {/* Link da Referência Rocha & Baranauskas */}
             <div className="flex justify-center pt-4 relative z-10">
                <a href="https://publica.ciar.ufg.br/ebooks/invencoes/livros/1/capitulos/c02.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase border border-gray-800 px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors">
                   <ExternalLink size={14} /> Fonte: Rocha & Baranauskas (2003) via UFG
                </a>
             </div>
          </div>

          {/* Grid de Metáforas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Membrana */}
            <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:border-aura-tech-cyan/40 transition-colors flex flex-col justify-between">
               <div>
                  <Layers size={24} className="text-aura-tech-cyan mb-6" />
                  <h4 className="text-xl font-display font-black text-white uppercase italic mb-3">A Interface como Membrana</h4>
                  <p className="text-[1em] text-gray-400 font-mono leading-relaxed mb-6">
                    Segundo <strong>Mark Poster (1995)</strong>, a interface inscreve-se entre o usuário e o sistema como uma membrana que une e, simultaneamente, divide os dois lados. É uma superfície de contato que estabelece uma relação de dependência e regulação.
                  </p>
               </div>
               <a href="https://publica.ciar.ufg.br/ebooks/invencoes/livros/1/capitulos/c02.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-aura-tech-cyan/80 uppercase border border-aura-tech-cyan/20 px-3 py-1.5 rounded hover:bg-aura-tech-cyan/10 hover:text-aura-tech-cyan transition-colors w-max">
                  <ExternalLink size={12} /> Poster (1995)
               </a>
            </div>

            {/* Pele */}
            <div className="p-8 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-3xl hover:border-aura-comfort-oat/50 transition-colors flex flex-col justify-between">
               <div>
                  <MousePointer2 size={24} className="text-aura-comfort-oat mb-6" />
                  <h4 className="text-xl font-display font-black text-white uppercase italic mb-3">A Interface como Pele</h4>
                  <p className="text-[1em] text-gray-400 font-mono leading-relaxed mb-6">
                    Para <strong>Pierre Lévy (1999)</strong>, a interface assemelha-se à pele: a base de contato com o mundo que traduz informações analógicas (como temperatura) para um sistema lógico (impulsos nervosos). Um sistema digital usa essa mesma conversão bidirecional.
                  </p>
               </div>
               <a href="https://publica.ciar.ufg.br/ebooks/invencoes/livros/1/capitulos/c02.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-aura-comfort-oat/80 uppercase border border-aura-comfort-oat/20 px-3 py-1.5 rounded hover:bg-aura-comfort-oat/10 hover:text-aura-comfort-oat transition-colors w-max">
                  <ExternalLink size={12} /> Pierre Lévy (1999)
               </a>
            </div>

            {/* Zona de Negociação */}
            <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:border-white/30 transition-colors flex flex-col justify-between">
               <div>
                  <Workflow size={24} className="text-white mb-6" />
                  <h4 className="text-xl font-display font-black text-white uppercase italic mb-3">Zonas Fronteiriças</h4>
                  <p className="text-[1em] text-gray-400 font-mono leading-relaxed mb-6">
                    <strong>Lucia Santaella (2003)</strong> define interfaces como <em>"as zonas fronteiriças sensíveis de negociação entre o humano e o maquínico"</em>. É o local onde as necessidades do humano se encontram e se adaptam aos processamentos rígidos da máquina.
                  </p>
               </div>
               <a href="https://publica.ciar.ufg.br/ebooks/invencoes/livros/1/capitulos/c02.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-white/60 uppercase border border-white/20 px-3 py-1.5 rounded hover:bg-white/10 hover:text-white transition-colors w-max">
                  <ExternalLink size={12} /> Lucia Santaella (2003)
               </a>
            </div>

            {/* Duplo Virtual */}
            <div className="p-8 bg-[#050505] border border-white/10 rounded-3xl relative overflow-hidden flex flex-col justify-between group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700">
                 <MousePointer2 size={120} className="text-aura-tech-cyan" />
               </div>
               <div className="relative z-10">
                 <h4 className="text-xl font-display font-black text-white uppercase italic mb-3">O Duplo Virtual</h4>
                 <p className="text-[1em] text-gray-400 font-mono leading-relaxed mb-6">
                   Conceituado a partir das visões de <strong>Douglas Engelbart</strong>, o "duplo virtual" ocorre quando elementos físicos (mouse) ganham representação gráfica (cursor). Esta fusão permite a verdadeira manipulação e a ilusão de controle no ciberespaço.
                 </p>
               </div>
               <a href="https://publica.ciar.ufg.br/ebooks/invencoes/livros/1/capitulos/c02.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-white/60 uppercase border border-white/20 px-3 py-1.5 rounded hover:bg-white/10 hover:text-white transition-colors w-max relative z-10">
                  <ExternalLink size={12} /> Douglas Engelbart
               </a>
            </div>

          </div>

          {/* O Paradoxo da Ponte */}
          <div className="p-10 border border-aura-tech-cyan/20 bg-aura-tech-cyan/5 rounded-[40px] shadow-2xl space-y-6">
            <h3 className="text-2xl font-display font-black text-aura-tech-cyan uppercase italic">
              Por que a metáfora da "Ponte" é insuficiente?
            </h3>
            <p className="text-[1em] text-gray-300 font-mono leading-relaxed max-w-4xl">
              Historicamente, interfaces foram chamadas de pontes. Contudo, teorias avançadas e as observações de <strong>Steven Johnson (2001)</strong> mostram que <strong>uma ponte não traduz informações</strong> — ela apenas liga dois pontos de forma estática. Uma interface computacional, diferentemente, atua ativamente como uma <strong>tradutora e agenciadora lógica</strong> que transforma intenções humanas ambíguas em ações sistêmicas exatas e vice-versa.
            </p>
            <a href="https://publica.ciar.ufg.br/ebooks/invencoes/livros/1/capitulos/c02.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-mono text-aura-tech-cyan/80 uppercase border border-aura-tech-cyan/20 px-3 py-1.5 rounded hover:bg-aura-tech-cyan/10 hover:text-aura-tech-cyan transition-colors w-max">
               <ExternalLink size={12} /> Steven Johnson (2001) via UFG
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '23.1',
    parentId: '23',
    title: 'Tipografia',
    subtitle: 'Escala e Hierarquia',
    icon: Type,
    content: (
      <div className="space-y-16">
        <div className="p-8 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[40px] shadow-2xl">
           <p className="text-xl text-gray-200 font-lexend leading-relaxed italic uppercase tracking-widest">
             "Tipografia é a voz da interface." — Projetamos com <span className="text-aura-comfort-oat font-black">Lexend</span> para máxima fluência cognitiva.
           </p>
        </div>
        <AdvancedTypographyShowcase />
      </div>
    )
  },
  {
    id: '23.2',
    parentId: '23',
    title: 'Espectro de Cores',
    subtitle: 'Semântica e Emoção',
    icon: Palette,
    content: <EspectroDesCoresShowcase />,
  },
  {
    id: '23.3',
    parentId: '23',
    title: 'Componentes UI',
    subtitle: 'Blocos de Construção',
    icon: Component,
    content: <AdvancedComponentsShowcase />
  },
  {
    id: '23.4',
    parentId: '23',
    title: 'Ícones & Sinais',
    subtitle: 'Semiótica Visual',
    icon: Square,
    content: <IconsSinaisDocumentation />
  },
  {
    id: '23.5',
    parentId: '23',
    title: 'Imagens & Ilustrações',
    subtitle: 'Narrativa Visual',
    icon: ImageIcon,
    content: <ImagesIllustrationsAdvancedShowcase />
  },
  {
    id: '23.6',
    parentId: '23',
    title: 'Microanimações',
    subtitle: 'Feedback em Tempo Real',
    icon: Zap,
    content: (
      <div className="space-y-16">
        <RoboCursor />
        <div className="p-12 bg-aura-tech-blue/40 border border-white/10 rounded-[48px] space-y-8 shadow-2xl overflow-hidden relative group cursor-none">
           <div className="absolute inset-0 bg-aura-comfort-oat/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <p className="text-xl text-gray-200 font-lexend leading-relaxed text-center italic relative z-10 uppercase tracking-widest lg:px-24">
              "As microinterações eliminam o atrito entre o usuário e a interface, transformando eventos passivos em <span className="text-aura-comfort-oat font-black">diálogos ativos</span>."
           </p>
           
           <div className="flex flex-wrap gap-12 justify-center relative z-10 pt-4">
              {/* Sparkles (Hover) */}
              <div className="space-y-4 text-center group/btn">
                 <motion.button 
                    whileHover={{ rotate: 180, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-28 h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-aura-comfort-green hover:bg-aura-comfort-green hover:text-white transition-colors duration-300 shadow-lg cursor-none"
                 >
                    <Sparkles size={40} />
                 </motion.button>
                 <span className="text-[10px] font-mono text-gray-200 uppercase tracking-widest font-bold">Hover</span>
              </div>
              
              {/* Zap (Active) */}
              <div className="space-y-4 text-center group/btn">
                 <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85, rotate: [0, -15, 15, -15, 15, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-28 h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-aura-comfort-oat active:bg-aura-comfort-oat active:text-black transition-colors shadow-lg cursor-none"
                 >
                    <Zap size={40} />
                 </motion.button>
                 <span className="text-[10px] font-mono text-gray-200 uppercase tracking-widest font-bold">Active</span>
              </div>
              
              {/* Arrow (Motion) */}
              <div className="space-y-4 text-center group/btn">
                 <motion.button 
                    whileHover="hover"
                    initial="initial"
                    className="w-28 h-28 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white overflow-hidden relative shadow-lg cursor-none"
                 >
                    <div className="absolute inset-0 bg-aura-comfort-oat translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    <motion.div variants={{ initial: { x: 0, y: 0 }, hover: { x: 50, y: -50, transition: { duration: 0.3 } } }}>
                       <ArrowUpRight size={40} className="relative z-10 group-hover/btn:text-dark-bg transition-colors" />
                    </motion.div>
                    <motion.div variants={{ initial: { x: -50, y: 50 }, hover: { x: 0, y: 0, transition: { duration: 0.4, delay: 0.1 } } }} className="absolute">
                       <ArrowUpRight size={40} className="text-dark-bg" />
                    </motion.div>
                 </motion.button>
                 <span className="text-[10px] font-mono text-gray-200 uppercase tracking-widest font-bold">Motion</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <ModuleSection title="Princípios & Teoria" icon={Activity}>
              <div className="space-y-6">
                 <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-aura-comfort-green/30 transition-colors">
                    <h6 className="text-xl font-bold text-white uppercase mb-2">As 4 Partes de uma Microinteração</h6>
                    <ul className="space-y-3 text-base text-gray-200 font-mono">
                       <li><span className="text-aura-comfort-green font-bold">1. Gatilho:</span> O evento que inicia a ação (Ex: clique).</li>
                       <li><span className="text-aura-comfort-green font-bold">2. Regras:</span> O que acontece durante a ação.</li>
                       <li><span className="text-aura-comfort-green font-bold">3. Feedback:</span> O que o usuário vê (A animação).</li>
                       <li><span className="text-aura-comfort-green font-bold">4. Loops & Modos:</span> Como a interação se repete ou muda.</li>
                    </ul>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h6 className="text-xl font-bold text-white uppercase mb-2">Timing & Easing</h6>
                    <p className="text-base text-gray-200 font-mono leading-relaxed">
                       Para uma percepção de "fluidez", use durações entre <span className="text-aura-comfort-oat">200ms e 400ms</span>. O easing ideal é o <span className="text-aura-comfort-oat">Cubic-Bezier</span>, evitando movimentos lineares que parecem robóticos.
                    </p>
                 </div>
              </div>
           </ModuleSection>

           <ModuleSection title="Acessibilidade no Movimento" icon={ShieldCheck}>
              <div className="space-y-6">
                 <div className="p-6 bg-aura-comfort-green/10 border border-aura-comfort-green/30 rounded-2xl">
                    <h6 className="text-xl font-bold text-white uppercase mb-2">Prefers-Reduced-Motion</h6>
                    <p className="text-base text-gray-200 font-mono leading-relaxed mb-4">
                       <b>Crucial:</b> Respeite a preferência do sistema operacional do usuário. Para quem tem distúrbios vestibulares, movimentos bruscos podem causar náuseas e tonturas.
                    </p>
                    <CodeBlock language="CSS" code={`@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
    transition: none;
  }
}`} />
                 </div>
                 <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h6 className="text-xl font-bold text-white uppercase mb-2">Diretrizes WCAG</h6>
                    <ul className="space-y-2 text-base text-gray-200 font-mono">
                       <li>● <span className="text-aura-comfort-green font-bold">Controle:</span> Ofereça botões de Pause para animações que duram mais de 5s.</li>
                       <li>● <span className="text-aura-comfort-green font-bold">Finalidade:</span> Evite animações puramente decorativas que distraiam a tarefa principal.</li>
                    </ul>
                 </div>
              </div>
           </ModuleSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ModuleSection title="Ecossistema de Ferramentas" icon={Hammer}>
               <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-aura-comfort-green/40 transition-all">
                     <h6 className="text-lg font-bold text-white uppercase mb-2 flex items-center gap-2">
                        Rive <TechLabel color="green">Interatividade de Runtime</TechLabel>
                     </h6>
                     <p className="text-base text-gray-200 font-mono mb-3">Permite criar animações que respondem a inputs (mouse, toque, lógica) sem código pesado.</p>
                     <ReferenceLink title="Explorar Rive" url="https://rive.app/" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <h6 className="text-md font-bold text-white uppercase mb-1">LottieFiles</h6>
                        <p className="text-base text-gray-300 font-mono mb-2">Animações baseadas em JSON do After Effects.</p>
                        <ReferenceLink title="Docs" url="https://lottiefiles.com/what-is-lottie" />
                     </div>
                     <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <h6 className="text-md font-bold text-white uppercase mb-1">Jitter</h6>
                        <p className="text-base text-gray-300 font-mono mb-2">O "Figma do movimento" para prototipação rápida.</p>
                        <ReferenceLink title="Aulas" url="https://jitter.video/academy/" />
                     </div>
                  </div>
               </div>
            </ModuleSection>

            <ModuleSection title="Bibliotecas & Referências" icon={Library}>
               <div className="space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                     <h6 className="text-md font-bold text-white uppercase mb-1">Framer Motion</h6>
                     <p className="text-base text-gray-300 font-mono mb-3">A biblioteca definitiva para animações declarativas em React.</p>
                     <ReferenceLink title="Guia Interativo" url="https://www.framer.com/motion/introduction/" />
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                     <ReferenceLink title="GSAP Guidelines" url="https://gsap.com/docs/v3/Guidelines/" />
                     <ReferenceLink title="The UX in Motion Manifesto" url="https://uxinmotion.net/" />
                     <ReferenceLink title="Material Design Motion Guide" url="https://m2.material.io/design/motion/understanding-motion.html" />
                  </div>
               </div>
            </ModuleSection>
        </div>
      </div>
    )
  },
  {
    id: '23.7',
    parentId: '23',
    title: 'Objetos 3D & Vídeo',
    subtitle: 'Profundidade e Tempo',
    icon: Box,
    content: <Objects3DVideoShowcase />
  },
  {
    id: '14',
    title: 'Ferramentas',
    subtitle: 'Ecossistema Digital',
    icon: Hammer,
    content: (
      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ModuleSection title="Prototipagem & Interface (Histórico e Atualidade)" icon={PencilRuler}>
            <div className="space-y-6">
              <p className="text-base text-gray-200 font-mono italic leading-relaxed border-l-2 border-aura-comfort-green pl-4">
                "Do Photoshop ao Código: Uma breve história da construção visual."
              </p>
              
              <div className="space-y-8">
                <div className="hover:bg-white/[0.02] p-4 rounded-3xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h6 className="text-xl font-bold text-white uppercase">Figma</h6>
                    <TechLabel color="green">SaaS Hybrid</TechLabel>
                  </div>
                  <p className="text-base text-gray-200 font-mono leading-relaxed mb-3">
                    <b>O Marco Zero do Design Colaborativo:</b> Surgiu para quebrar o silenciamento entre designers. Ao rodar no browser com performance de desktop (via WebGL), o Figma eliminou o "conflito de versões" e consolidou o Design System como o coração do produto. 
                  </p>
                  <ReferenceLink title="Figma Documentation" url="https://help.figma.com/" />
                </div>

                <div className="hover:bg-white/[0.02] p-4 rounded-3xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h6 className="text-xl font-bold text-white uppercase">UXPin</h6>
                    <TechLabel color="cyan">Advanced Prototyping</TechLabel>
                  </div>
                  <p className="text-base text-gray-200 font-mono leading-relaxed mb-3">
                    <b>A Paridade Real com o Código:</b> Enquanto outros simulam, o UXPin renderiza componentes reais. É a ferramenta histórica para quem precisa de lógica condicional, variáveis de sistema e estados complexos que ferramentas vetoriais puras não alcançam.
                  </p>
                  <ReferenceLink title="UXPin Merge" url="https://www.uxpin.com/merge" />
                </div>

                <div className="hover:bg-white/[0.02] p-4 rounded-3xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h6 className="text-xl font-bold text-white uppercase">Uizard</h6>
                    <TechLabel color="green">Generative AI</TechLabel>
                  </div>
                  <p className="text-base text-gray-200 font-mono leading-relaxed mb-3">
                    <b>A Democratização da Alta Fidelidade:</b> Utiliza redes neurais para converter sketches analógicos em interfaces digitais. Reduz a barreira entre a ideia bruta e o protótipo testável, permitindo iterações em minutos em vez de horas.
                  </p>
                  <ReferenceLink title="Conhecer Uizard" url="https://uizard.io/" />
                </div>

                <div className="hover:bg-white/[0.02] p-4 rounded-3xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h6 className="text-xl font-bold text-white uppercase">Penpot</h6>
                    <TechLabel color="white">Open Source</TechLabel>
                  </div>
                  <p className="text-base text-gray-200 font-mono leading-relaxed mb-3">
                    <b>Liberdade e Transparência:</b> A resposta open source ao mercado SaaS fechado. Usa formatos abertos (SVG/CSS) para garantir que o design pertença à comunidade e não à plataforma.
                  </p>
                  <ReferenceLink title="Penpot App" url="https://penpot.app/" />
                </div>
              </div>
            </div>
          </ModuleSection>

          <div className="space-y-12">
            <ModuleSection title="Desenvolvimento Visual & Low-Code" icon={Zap}>
              <div className="space-y-6">
                <p className="text-base text-gray-200 font-mono italic">"Onde a interface se torna o produto final."</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <h6 className="text-lg font-bold text-white uppercase mb-2">Framer (Web Engine)</h6>
                    <p className="text-base text-gray-200 font-mono mb-3">Historicamente uma biblioteca de animação (Framer Motion), evoluiu para ser o CMS mais focado em design do mundo. Permite publicar sites com efeitos complexos sem tocar no código.</p>
                    <ReferenceLink title="Acessar Framer" url="https://www.framer.com/" />
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <h6 className="text-lg font-bold text-white uppercase mb-2">Webflow (CSS Engine)</h6>
                    <p className="text-base text-gray-200 font-mono mb-3">O software que expôs a lógica do Box Model para designers. Diferente do no-code "arrasta e solta" genérico, o Webflow exige e ensina a estrutura real do desenvolvimento front-end.</p>
                    <ReferenceLink title="Acessar Webflow" url="https://webflow.com/" />
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <h6 className="text-lg font-bold text-white uppercase mb-2">FlutterFlow (App Engine)</h6>
                    <p className="text-base text-gray-200 font-mono mb-3">A solução definitiva para MVPs móveis profissionais, permitindo a construção visual avançada e exportação de código Dart/Flutter limpo.</p>
                    <ReferenceLink title="Acessar FlutterFlow" url="https://www.flutterflow.io/" />
                  </div>
                </div>
              </div>
            </ModuleSection>

            <ModuleSection title="Bibliotecas & Core Engine" icon={Code2}>
              <div className="space-y-4">
                 <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                       <h6 className="text-md font-bold text-white uppercase mb-1">React / Next.js</h6>
                       <p className="text-base text-gray-200 font-mono">O esqueleto fundamental para interfaces ricas em dados e estados dinâmicos.</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                       <h6 className="text-md font-bold text-white uppercase mb-1">Framer Motion / GSAP</h6>
                       <p className="text-base text-gray-200 font-mono">As duplas dinâmicas para microinterações e timelines de alta complexidade.</p>
                    </div>
                 </div>
              </div>
            </ModuleSection>

            <ModuleSection title="Agentes & IA (A Nova Fronteira)" icon={Sparkles}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Google Antigravity */}
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-aura-tech-cyan border-l-4 flex flex-col justify-between">
                    <div>
                      <h6 className="text-lg font-bold text-white uppercase mb-2">Google Antigravity</h6>
                      <p className="text-base text-gray-200 font-mono mb-4">Agente IA avançado de desenvolvimento que atua direto no código, refatorando interfaces, criando componentes e resolvendo bugs de forma autônoma e colaborativa.</p>
                    </div>
                    <ReferenceLink title="Tecnologia DeepMind" url="https://deepmind.google/" />
                  </div>

                  {/* Google AI Studio */}
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-aura-tech-cyan border-l-4 flex flex-col justify-between">
                    <div>
                      <h6 className="text-lg font-bold text-white uppercase mb-2">Google AI Studio</h6>
                      <p className="text-base text-gray-200 font-mono mb-4">O ambiente mais rápido para prototipar agentes generativos e explorar as capacidades multimodais nativas da família Gemini.</p>
                    </div>
                    <ReferenceLink title="Acessar AI Studio" url="https://aistudio.google.com/" />
                  </div>

                  {/* Claude */}
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-aura-comfort-oat border-l-4 flex flex-col justify-between">
                    <div>
                      <h6 className="text-lg font-bold text-white uppercase mb-2">Claude (Anthropic)</h6>
                      <p className="text-base text-gray-200 font-mono mb-4">Poderoso LLM com capacidade ímpar de raciocínio profundo, interpretação de datasets massivos e auxílio na definição da lógica estrutural e visual de sistemas.</p>
                    </div>
                    <ReferenceLink title="Acessar Claude" url="https://claude.ai/" />
                  </div>
                  
                  {/* Bolt.new */}
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-aura-comfort-green border-l-4 flex flex-col justify-between">
                    <div>
                      <h6 className="text-lg font-bold text-white uppercase mb-2">Bolt.new</h6>
                      <p className="text-base text-gray-200 font-mono mb-4">Geração de código de produção instantâneo a partir de prompts em linguagem natural, focado em web apps.</p>
                    </div>
                    <ReferenceLink title="Acessar Bolt.new" url="https://bolt.new/" />
                  </div>
                  
                  {/* Lovable */}
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-aura-tech-cyan border-l-4 flex flex-col justify-between">
                    <div>
                      <h6 className="text-lg font-bold text-white uppercase mb-2">Lovable</h6>
                      <p className="text-base text-gray-200 font-mono mb-4">Plataforma de "Natural Language to App" para desenvolvimento acelerado de interfaces visuais e lógica via IA.</p>
                    </div>
                    <ReferenceLink title="Acessar Lovable" url="https://lovable.dev/" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* v0.dev */}
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-between">
                     <div>
                       <h6 className="text-base font-bold text-white uppercase mb-1">v0.dev</h6>
                       <p className="text-sm text-gray-300 font-mono mb-3">Geração rápida de componentes e telas com Shadcn via IA.</p>
                     </div>
                     <ReferenceLink title="Acessar" url="https://v0.dev/" />
                  </div>

                  {/* Midjourney */}
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-between">
                     <div>
                       <h6 className="text-base font-bold text-white uppercase mb-1">Midjourney</h6>
                       <p className="text-sm text-gray-300 font-mono mb-3">Referência visual e geração de assets de alta fidelidade.</p>
                     </div>
                     <ReferenceLink title="Acessar" url="https://www.midjourney.com/" />
                  </div>
                </div>
              </div>
            </ModuleSection>

            <ModuleSection title="Ecossistema de Dados" icon={BarChart3}>
              <div className="space-y-4">
                 <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                       <h6 className="text-md font-bold text-white uppercase mb-1">Google Sheets / Looker Studio</h6>
                       <p className="text-base text-gray-200 font-mono">Estruturação bruta, higienização de tabelas (Sheets) e prototipagem rápida de dashboards visuais iterativos (Looker).</p>
                    </div>
                 </div>
              </div>
            </ModuleSection>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '80',
    title: 'Referências',
    subtitle: 'Atlas do Design Contemporâneo',
    icon: Library,
    content: <ReferencesAdvancedShowcase />
  },
  {
    id: '27',
    title: 'Design System deste Projeto',
    subtitle: 'Acessibilidade • Cores • Lexend',
    icon: ShieldCheck,
    content: <AuraDesignSystemShowcase />
  },
  {
    id: '28',
    title: 'Storytelling',
    subtitle: 'Narrativa em Interfaces',
    icon: BookOpen,
    content: <StorytellingShowcase />
  },
  {
    id: '29',
    title: 'Visualização de Dados',
    subtitle: 'Gráficos e Impacto',
    icon: BarChart3,
    content: <DataVisualizationShowcase />
  }
];

// Slug mapping: module id -> URL hash slug
const slugMap: Record<string, string> = {
  '11': 'metodologia-5is',
  '12': 'conceitos',
  '15': 'publicacoes',
  '16': 'projetos',
  '17': 'gamification',
  '18': 'design-de-games',
  '19': 'ux-design',
  '20': 'design-atomico',
  '21': 'acessibilidade',
  '22': 'leis-de-ux',
  '23': 'ui-design-lab',
  '23.1': 'tipografia',
  '23.2': 'cores',
  '23.3': 'componentes-ui',
  '23.4': 'icones-sinais',
  '23.5': 'imagens-ilustracoes',
  '23.6': 'microanimacoes',
  '23.7': 'objetos-3d-video',
  '26': 'testes-de-usabilidade',
  '14': 'ferramentas',
  '27': 'design-system',
  '80': 'referencias',
  '28': 'storytelling',
  '29': 'visualizacao-de-dados',
};
const slugToId: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([id, slug]) => [slug, id])
);

export default function App() {
  const getInitialId = () => {
    const hash = window.location.hash.replace('#', '');
    return slugToId[hash] || '11';
  };

  const [activeModuleId, setActiveModuleId] = useState(getInitialId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  // Search Logic
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync URL hash when module changes
  useEffect(() => {
    const slug = slugMap[activeModuleId];
    if (slug) {
      window.history.replaceState(null, '', `#${slug}`);
    }
  }, [activeModuleId]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const id = slugToId[hash];
      if (id) setActiveModuleId(id);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  
  const handleModuleSelection = (id: string) => {
    setActiveModuleId(id);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Expose navigation to module contents
  if (typeof window !== 'undefined') {
    (window as any).__navigate = handleModuleSelection;
  }

  const filteredModules = modules.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredConcepts = conceptsData.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-aura-comfort-oat selection:text-aura-tech-blue text-white font-lexend">
      {/* Fixed Layout Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] glass border-b border-white/10 px-4 md:px-8 py-4 flex items-center justify-between no-print">
        <div className="flex items-center gap-4 md:gap-5">
          {/* Left spacer for desktop branding alignment if needed */}
          <div className="lg:w-8" />

          <div className="flex items-center gap-3 md:gap-5 cursor-pointer group" onClick={() => handleModuleSelection(modules[0].id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 transition-transform group-hover:scale-105 active:scale-95 drop-shadow-[0_10px_15px_rgba(34,211,238,0.15)]">
              <rect width="100" height="100" rx="24" fill="#0A0A0A" stroke="#3A4D3E" strokeWidth="4" />
              <path d="M 32 28 L 32 72 L 52 72" fill="none" stroke="#22D3EE" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="72" y1="48" x2="72" y2="72" stroke="#F48A79" strokeWidth="12" strokeLinecap="round" />
              <circle cx="72" cy="28" r="6" fill="#D2A979" />
            </svg>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-display font-black text-white tracking-tighter leading-none uppercase italic">LabInterface UFSM</h1>
              <p className="text-xs md:text-lg font-mono text-aura-comfort-clay uppercase tracking-[0.2em] mt-0.5 md:mt-1 font-bold">UI / UX / DESIGN SYSTEM</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-display font-black text-white tracking-tighter leading-none uppercase italic">DS</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 no-print">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 text-aura-tech-cyan hover:bg-aura-tech-cyan/20 hover:scale-105 transition-all active:scale-95 shadow-xl"
            aria-label="Pesquisa Global"
          >
            <Search size={24} />
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-2xl font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl",
              isMenuOpen 
                ? "bg-aura-comfort-clay text-dark-bg shadow-aura-comfort-clay/20" 
                : "bg-aura-tech-cyan text-dark-bg shadow-aura-tech-cyan/20 hover:scale-105"
            )}
          >
            {isMenuOpen ? <X size={20} className="animate-spin-slow" /> : <MenuIcon size={20} />}
            <span className="text-sm md:text-base">Menu</span>
          </button>
        </div>
      </header>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-3xl pt-32 px-6 overflow-y-auto no-print"
          >
            <div className="max-w-7xl mx-auto space-y-12 pb-24">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                  <div className="space-y-2">
                    <p className="text-sm font-mono text-aura-tech-cyan uppercase tracking-[0.4em] font-black italic">LabInterface UFSM</p>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter italic leading-none">Exploração <br/> de Módulos</h2>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-[32px] max-w-sm hidden md:block">
                    <p className="text-xs text-gray-400 font-mono leading-relaxed">Navegue pelas metodologias, conceitos e projetos do laboratório através deste sistema de design unificado.</p>
                  </div>
               </div>

               <div className="space-y-8">
                 {(() => {
                   const root = modules.filter(m => !m.parentId);
                   const children = modules.filter(m => m.parentId);
                   return (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                       {root.map((m) => {
                         const myChildren = children.filter(c => c.parentId === m.id);
                         return (
                           <div key={m.id} className="relative group/menuitem h-full">
                             <button onClick={() => handleModuleSelection(m.id)}
                               className={cn("w-full text-left p-6 rounded-[32px] flex flex-col gap-4 transition-all overflow-hidden h-full border border-transparent group/btn",
                                 activeModuleId === m.id ? "bg-aura-tech-cyan text-dark-bg shadow-2xl shadow-aura-tech-cyan/20 ring-4 ring-aura-tech-cyan/20 scale-[1.02]" : "bg-white/[0.03] text-white border-white/10 hover:bg-white/10 hover:border-aura-tech-cyan/40"
                               )}>
                               <div className="flex items-center justify-between">
                                 <m.icon size={24} className={cn(activeModuleId === m.id ? "text-dark-bg" : "text-aura-tech-cyan group-hover/btn:scale-110 transition-transform")} />
                                 <span className="text-xs font-mono opacity-50 uppercase tracking-widest">#{slugMap[m.id]}</span>
                               </div>
                               <div className="space-y-1">
                                 <span className="text-xl uppercase tracking-widest block leading-tight font-black italic">{m.title}</span>
                                 {m.subtitle && <p className="text-sm font-mono opacity-70 uppercase">{m.subtitle}</p>}
                               </div>
                             </button>

                             {myChildren.length > 0 && (
                               <div className="md:absolute top-[102%] left-0 w-full mt-2 md:mt-0 md:opacity-0 md:-translate-y-4 md:pointer-events-none group-hover/menuitem:opacity-100 group-hover/menuitem:translate-y-0 group-hover/menuitem:pointer-events-auto transition-all z-20">
                                 <div className="bg-[#0f0f0f] border border-aura-tech-cyan/30 rounded-3xl p-3 shadow-2xl flex flex-col gap-1">
                                   <p className="text-[10px] font-mono text-aura-tech-cyan uppercase tracking-[0.2em] font-black italic pl-3 opacity-80 pt-2 pb-1">↳ Subpáginas</p>
                                   {myChildren.map(c => (
                                     <button key={c.id} onClick={(e) => { e.stopPropagation(); handleModuleSelection(c.id); }} className="text-left p-3 rounded-2xl hover:bg-aura-tech-cyan/10 transition-colors flex items-center gap-3 w-full border border-transparent hover:border-aura-tech-cyan/20 group/sub">
                                       <div className="w-1.5 h-1.5 bg-aura-tech-cyan rounded-full shrink-0 group-hover/sub:scale-150 transition-transform" />
                                       <div>
                                         <span className="text-sm font-bold text-white uppercase block leading-tight">{c.title}</span>
                                         {c.subtitle && <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-0.5 block">{c.subtitle}</span>}
                                       </div>
                                     </button>
                                   ))}
                                 </div>
                               </div>
                             )}
                           </div>
                         );
                       })}
                     </div>
                   );
                 })()}
               </div>
               
               <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                 <p className="text-xs font-mono text-gray-400 leading-relaxed italic">
                   Design System v2.1 — Laboratório de Interface UFSM
                 </p>
                 <div className="flex gap-4">
                    <div className="w-12 h-1 rounded-full bg-aura-tech-cyan" />
                    <div className="w-12 h-1 rounded-full bg-aura-comfort-clay" />
                    <div className="w-12 h-1 rounded-full bg-aura-comfort-green" />
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-bg/95 backdrop-blur-3xl p-6 md:p-12 flex flex-col no-print"
          >
            <div className="max-w-5xl mx-auto w-full flex flex-col h-full">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4 text-aura-tech-cyan">
                  <Search size={32} />
                  <span className="text-2xl font-display font-black uppercase tracking-widest italic">Busca Global</span>
                </div>
                <button 
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all active:scale-95"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="relative mb-12">
                <input 
                  autoFocus
                  type="text"
                  placeholder="DIGITE O QUE VOCÊ PROCURA..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border-b-4 border-aura-tech-cyan/30 focus:border-aura-tech-cyan bg-transparent py-6 px-4 text-3xl md:text-5xl font-display font-black text-white uppercase outline-none transition-all placeholder:text-white/10 italic"
                />
              </div>

              <div className="flex-1 overflow-y-auto pr-4 space-y-12 custom-scrollbar">
                {searchQuery.length > 1 ? (
                  <>
                    {/* Module Results */}
                    {filteredModules.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="text-sm font-mono text-aura-tech-cyan uppercase tracking-[0.3em] font-black italic border-b border-white/10 pb-2">Módulos Encontrados ({filteredModules.length})</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {filteredModules.map(m => (
                            <button 
                              key={m.id}
                              onClick={() => handleModuleSelection(m.id)}
                              className="p-6 bg-white/5 border border-white/10 rounded-[32px] text-left hover:bg-aura-tech-cyan hover:text-dark-bg transition-all group"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <m.icon size={24} className="text-aura-tech-cyan group-hover:text-dark-bg" />
                                <span className="text-[10px] font-mono uppercase font-black opacity-60">ID {m.id}</span>
                              </div>
                              <h4 className="text-xl font-display font-black uppercase italic leading-none">{m.title}</h4>
                              <p className="text-xs font-mono uppercase opacity-70 mt-1">{m.subtitle}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Concept Results */}
                    {filteredConcepts.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="text-sm font-mono text-aura-tech-cyan uppercase tracking-[0.3em] font-black italic border-b border-white/10 pb-2">Conceitos & Glossário ({filteredConcepts.length})</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {filteredConcepts.map((c, i) => (
                            <div 
                              key={i}
                              className="p-6 bg-white/5 border border-white/10 rounded-[32px] text-left"
                            >
                              <h4 className="text-2xl font-display font-black text-white uppercase italic mb-3">{c.title}</h4>
                              <p className="text-lg text-gray-200 font-lexend leading-relaxed italic">{c.definition}</p>
                              <button 
                                onClick={() => handleModuleSelection('12')}
                                className="mt-4 text-xs font-mono text-aura-tech-cyan uppercase font-black border-b border-aura-tech-cyan/30 hover:border-aura-tech-cyan transition-all"
                              >
                                Ver no Glossário Completo
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredModules.length === 0 && filteredConcepts.length === 0 && (
                      <div className="py-20 text-center space-y-4">
                        <div className="text-6xl opacity-20">🔍</div>
                        <p className="text-2xl font-display font-black text-white/40 uppercase italic">Nenhum resultado encontrado para "{searchQuery}"</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-20 text-center space-y-4">
                    <p className="text-xl font-mono text-gray-500 uppercase tracking-widest font-black italic">Digite pelo menos 2 caracteres para pesquisar em todo o manual...</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (Wide Layout) */}
      <main className="pt-32 pb-20 px-4 md:px-12 max-w-[1600px] mx-auto">

        {/* Content Area */}
        <section className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModuleId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="space-y-12"
            >
              {/* Module Hero Section */}
              {activeModuleId !== '11' && (
                <div className="relative p-12 md:p-16 rounded-[48px] bg-[#0A0A0A] border border-white/5 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12 scale-150">
                    <activeModule.icon size={300} />
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <TechLabel color="cyan">{activeModule.subtitle}</TechLabel>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-white mt-8 mb-6 leading-none tracking-tighter uppercase shrink-0">
                      {activeModule.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-aura-comfort-oat rounded-full shadow-lg shadow-aura-comfort-oat/40" />
                  </div>
                </div>
              )}

              {/* Module Content */}
              <div className="p-8 md:p-14 bg-[#0A0A0A]/40 backdrop-blur-md rounded-[48px] border border-white/5">
                {activeModule.content}
              </div>



              {/* Back to Top Button */}
              <div className="flex justify-center pt-8 no-print">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex flex-col items-center gap-3 text-gray-500 hover:text-aura-comfort-oat transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:border-aura-comfort-green/30 group-hover:bg-aura-comfort-green/5 group-hover:shadow-[0_0_30px_rgba(58,77,62,0.1)] transition-all duration-500">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowUpRight size={24} className="-rotate-45" />
                    </motion.div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:tracking-[0.4em] transition-all duration-500">Voltar ao topo</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* Footer Industrial Expandido */}
      <footer className="mt-20 border-t border-white/5 pt-16 pb-12 px-6 glass no-print relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          
          {/* Branding & Creditos */}
          <div className="space-y-6">
            <h5 className="font-display font-black text-white text-2xl tracking-tighter uppercase leading-none italic">
              LABINTERFACE UFSM.
            </h5>
            <div className="space-y-1">
              <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Professora</p>
              <p className="text-lg font-bold text-white uppercase italic">Dra. Débora Aita Gasparetto</p>
              <a href="mailto:debora.gasparetto@ufsm.br" className="text-sm font-mono text-aura-tech-cyan hover:underline transition-all block mt-2">
                debora.gasparetto@ufsm.br
              </a>
            </div>
          </div>

          {/* Mapa do Site */}
          <div className="space-y-6">
            <p className="text-base font-mono text-gray-200 uppercase tracking-widest font-black">Mapa do Site</p>

            {/* Grupo: Metodologia 5I's */}
            <div>
              <p className="text-sm font-mono text-aura-tech-cyan uppercase tracking-widest mb-2 font-bold">Metodologia 5I's</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                {[
                  { t: "Metodologia 5I's", id: '11' },
                  { t: 'Conceitos', id: '12' },
                  { t: 'Publicações', id: '15' },
                  { t: 'Projetos do Lab', id: '16' },
                ].map((link, i) => (
                  <button key={i} onClick={() => handleModuleSelection(link.id)}
                    className="text-left text-base text-gray-200 hover:text-aura-tech-cyan transition-colors font-lexend truncate">
                    {link.t}
                  </button>
                ))}
              </div>
            </div>

            {/* Grupo: Comunicação & Engajamento — lado a lado */}
            <div>
              <p className="text-sm font-mono text-aura-comfort-clay uppercase tracking-widest mb-2 font-bold">Comunicação & Engajamento</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
                {[
                  { t: 'Gamification', id: '17' },
                  { t: 'Design de Games', id: '18' },
                  { t: 'Storytelling', id: '28' },
                  { t: 'Visualização de Dados', id: '29' },
                ].map((link, i) => (
                  <button key={i} onClick={() => handleModuleSelection(link.id)}
                    className="text-left text-base text-aura-comfort-clay hover:text-white transition-colors font-lexend font-bold truncate">
                    {link.t}
                  </button>
                ))}
              </div>
            </div>

            {/* Grupo: UI Design Lab */}
            <div>
              <p className="text-sm font-mono text-aura-comfort-oat uppercase tracking-widest mb-2 font-bold">UI Design Lab</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                {[
                  { t: 'UI Design Lab', id: '23' },
                  { t: 'Tipografia', id: '23.1' },
                  { t: 'Cores', id: '23.2' },
                  { t: 'Componentes UI', id: '23.3' },
                  { t: 'Ícones & Sinais', id: '23.4' },
                  { t: 'Imagens & Ilustras', id: '23.5' },
                  { t: 'Microanimações', id: '23.6' },
                  { t: 'Objetos 3D & Vídeo', id: '23.7' },
                ].map((link, i) => (
                  <button key={i} onClick={() => handleModuleSelection(link.id)}
                    className="text-left text-base text-gray-200 hover:text-aura-comfort-oat transition-colors font-lexend truncate">
                    {link.t}
                  </button>
                ))}
              </div>
            </div>

            {/* Grupo: Outros módulos */}
            <div>
              <p className="text-sm font-mono text-gray-300 uppercase tracking-widest mb-2 font-bold">Outros Módulos</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                {[
                  { t: 'Design Atômico', id: '20' },
                  { t: 'UX Design', id: '19' },
                  { t: 'Acessibilidade', id: '21' },
                  { t: 'Leis de UX', id: '22' },
                  { t: 'Testes de Uso', id: '26' },
                  { t: 'Ferramentas', id: '14' },
                  { t: 'Referências', id: '80' },
                  { t: 'Design System (Proj)', id: '27' },
                ].map((link, i) => (
                  <button key={i} onClick={() => handleModuleSelection(link.id)}
                    className="text-left text-base text-gray-200 hover:text-aura-tech-cyan transition-colors font-lexend truncate">
                    {link.t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none -z-10 no-print">
        <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-aura-comfort-oat/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-aura-comfort-oat/[0.02] rounded-full blur-[150px]" />
      </div>
    </div>
  );
}


