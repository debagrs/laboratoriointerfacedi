import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Square, 
  Layers, 
  ImageIcon, 
  CheckCircle2, 
  ShieldCheck,
  Zap, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layout,
  Palette,
  Box,
  Component,
  BookOpen,
  Library,
  Cpu,
  Monitor,
  Smartphone,
  MousePointer2,
  Activity,
  Maximize,
  Grid,
  Code2,
  Filter,
  User as UserIcon,
  Search,
  Bell,
  Check,
  X,
  AlertCircle,
  Info,
  ChevronDown,
  MoreVertical,
  Terminal,
  Tally3,
  MousePointer,
  ArrowRight,
  Menu,
  Home,
  Settings,
  Plus,
  Trash2,
  Loader2,
  Table as TableIcon,
  LogOut,
  PencilRuler,
  Users
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Internal Specialized Components ---

const TechLabel = ({ children, color = "green", className }: { children: React.ReactNode, color?: "green" | "cyan" | "white", className?: string }) => (
  <span className={cn(
    "text-[1em] font-mono px-2 py-0.5 rounded border uppercase tracking-widest leading-none inline-block",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "white" && "text-white border-white/30 bg-white/5",
    className
  )}>
    {children}
  </span>
);

const Label = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <label className={className}>{children}</label>
);

const SectionHeader = ({ title, subtitle, id }: { title: string, subtitle: string, id: string }) => (
  <div id={id} className="space-y-4 mb-12 scroll-mt-24">
    <div className="flex items-center gap-3">
      <div className="h-0.5 w-12 bg-aura-comfort-green" />
      <span className="text-aura-comfort-green font-mono font-bold uppercase tracking-[0.2em]">{id.replace(/-/g, ' ')}</span>
    </div>
    <h2 className="text-5xl font-display font-black text-white uppercase tracking-tighter leading-tight">{title}</h2>
    <p className="text-xl text-gray-400 font-mono max-w-3xl leading-relaxed">{subtitle}</p>
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
  key?: React.Key;
}

const Card = ({ children, className, title, id }: CardProps) => (
  <div id={id} className={cn("p-8 bg-white/[0.03] border border-white/10 rounded-[40px] relative overflow-hidden group", className)}>
    {title && (
      <div className="absolute top-6 left-8 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-aura-comfort-green" />
        <span className="text-[1em] font-mono text-gray-500 uppercase tracking-widest leading-none font-black">{title}</span>
      </div>
    )}
    <div className={cn(title ? "mt-8" : "")}>
      {children}
    </div>
  </div>
);

const ComparisonCard = ({ good, bad, title }: { good: React.ReactNode, bad: React.ReactNode, title: string }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-aura-comfort-green font-mono text-[1em] uppercase font-bold tracking-widest">
        <CheckCircle2 size={14} /> Correto / Recomendado
      </div>
      <div className="p-8 bg-aura-comfort-green/5 border border-aura-comfort-green/20 rounded-[40px] min-h-[200px] flex items-center justify-center">
        {good}
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-red-500 font-mono text-[1em] uppercase font-bold tracking-widest">
        <X size={14} /> Incorreto / Evitar
      </div>
      <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-[40px] min-h-[200px] flex items-center justify-center grayscale opacity-80">
        {bad}
      </div>
    </div>
  </div>
);

// --- Content Sections ---

const Intro = () => (
  <div className="space-y-20">
    <SectionHeader 
      id="intro"
      title="O que é um Design System" 
      subtitle="Uma infraestrutura compartilhada de decisões de design e engenharia."
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <p className="text-2xl text-gray-200 leading-relaxed font-mono">
          Um <span className="text-white font-bold italic">Design System</span> não é apenas uma biblioteca de UI ou um styleguide estático. É um ecossistema vivo de <span className="text-aura-comfort-green">componentes, padrões e documentação</span> que une design e desenvolvimento sob uma única linguagem de decisões.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "Linguagem Visual", d: "A estética e voz da marca aplicada em cada pixel." },
            { t: "Governança", d: "Processos de manutenção e evolução do sistema." },
            { t: "Consistência", d: "Garantia de que o usuário reconheça o sistema em qualquer tela." },
            { t: "Escalabilidade", d: "Permite que times cresçam sem perder qualidade técnica." }
          ].map(item => (
            <div key={item.t} className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <h5 className="text-white font-bold mb-2 uppercase text-[1em] tracking-widest">{item.t}</h5>
              <p className="text-gray-400 text-[1em] font-mono leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h4 className="text-white font-bold uppercase text-[1em] tracking-widest opacity-50">Referências da Indústria</h4>
        <div className="space-y-3">
          {[
            { n: "Material Design (Google)", l: "https://m3.material.io/" },
            { n: "Apple HIG", l: "https://developer.apple.com/design/human-interface-guidelines/" },
            { n: "GOV.UK Design System", l: "https://design-system.service.gov.uk/" },
            { n: "IBM Carbon", l: "https://carbondesignsystem.com/" },
            { n: "Atlassian Design System", l: "https://atlassian.design/" },
            { n: "DesignSystems.com", l: "https://www.designsystems.com/" }
          ].map(ref => (
            <a key={ref.n} href={ref.l} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-aura-comfort-green/10 hover:border-aura-comfort-green/30 transition-all group">
              <span className="text-[1em] font-mono text-gray-300 group-hover:text-white transition-colors">{ref.n}</span>
              <ExternalLink size={14} className="text-gray-500 group-hover:text-aura-comfort-green transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Architecture = () => (
  <div className="space-y-20 py-20 border-t border-white/5">
    <SectionHeader 
      id="hierarchy"
      title="Estrutura e Hierarquia" 
      subtitle="Do bit ao layout: a decomposição lógica da interface."
    />

    <div className="flex flex-col items-center gap-4 py-10">
      {[
        { t: "Design Tokens", d: "Cores, Espaçamento, Tipografia (Primitivos)", color: "aura-comfort-green" },
        { t: "Componentes", d: "Botões, Inputs, Cards (Átomos/Moléculas)", color: "aura-comfort-oat" },
        { t: "Padrões", d: "Fluxos de busca, Login, Feedback (Padrões)", color: "white" },
        { t: "Templates", d: "Layouts estruturais e grids", color: "gray-400" },
        { t: "Interfaces", d: "O produto final em contexto", color: "gray-600" }
      ].map((step, i) => (
        <React.Fragment key={step.t}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={cn(
              "w-full max-w-2xl p-6 rounded-2xl border flex items-center justify-between gap-6",
              i === 0 ? "bg-aura-comfort-green/10 border-aura-comfort-green/30" : "bg-white/5 border-white/10"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center text-white font-bold text-lg">
                0{i + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">{step.t}</h4>
                <p className="text-gray-400 text-[1em] font-mono tracking-tight">{step.d}</p>
              </div>
            </div>
            {i === 0 && <TechLabel>BASE</TechLabel>}
          </motion.div>
          {i < 4 && (
            <div className="h-8 w-0.5 bg-gradient-to-b from-aura-comfort-green/30 to-transparent" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Tokens = () => (
  <div className="space-y-20 py-20 border-t border-white/5">
    <SectionHeader 
      id="design-tokens"
      title="Design Tokens" 
      subtitle="As variáveis fundamentais que alimentam a identidade visual."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Color System">
        <div className="space-y-8">
          <div className="space-y-4">
            <h6 className="text-[1em] uppercase tracking-[0.2em] text-gray-500 font-bold">Semântica & Brand</h6>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { n: "Primary", c: "#22C55E", l: "green.500" },
                { n: "Action", c: "#06B6D4", l: "cyan.500" },
                { n: "Danger", c: "#EF4444", l: "red.500" },
                { n: "Warning", c: "#F59E0B", l: "amber.500" }
              ].map(color => (
                <div key={color.n} className="space-y-2">
                  <div className="w-full h-16 rounded-xl border border-white/10" style={{ backgroundColor: color.c }} />
                  <div className="text-[1em] font-mono leading-none">
                    <p className="text-white font-bold mb-1 uppercase">{color.n}</p>
                    <p className="text-gray-500">{color.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="text-[1em] uppercase tracking-[0.2em] text-gray-500 font-bold">Grey Scale / Neutrals</h6>
            <div className="flex h-12 w-full rounded-xl overflow-hidden border border-white/10">
              {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(val => (
                <div key={val} className="flex-1" style={{ backgroundColor: `rgba(255, 255, 255, ${val/1000 + 0.05})` }} />
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="Spacing & Radius Scale">
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <h6 className="text-[1em] uppercase tracking-[0.2em] text-gray-500 font-bold">Spacing (base 4px)</h6>
            <div className="space-y-4">
              {[4, 8, 12, 16, 24, 32].map(size => (
                <div key={size} className="flex items-center gap-4">
                  <div className="bg-aura-comfort-green/20 h-4 border border-aura-comfort-green/40 rounded-sm" style={{ width: size }} />
                  <span className="text-[1em] font-mono text-gray-400">{size}px</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-[1em] uppercase tracking-[0.2em] text-gray-500 font-bold">Radius System</h6>
            <div className="grid grid-cols-2 gap-4">
              {[4, 12, 24, 40].map(r => (
                <div key={r} className="space-y-2">
                  <div className="aspect-square bg-white/5 border border-white/10" style={{ borderRadius: r }} />
                  <span className="text-[1em] font-mono text-gray-400 block text-center">r-{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const Guidelines = () => (
  <div className="space-y-20 py-20 border-t border-white/5">
    <SectionHeader 
      id="guidelines"
      title="Guidelines Visuais" 
      subtitle="As regras que garantem o ritmo, o equilíbrio e a ordem visual."
    />

    <ComparisonCard 
      title="Alinhamento e Hierarquia"
      good={
        <div className="flex flex-col gap-6 w-full">
          <div className="space-y-3">
             <div className="w-1/2 h-4 bg-white/20 rounded-full" />
             <div className="w-full h-2 bg-white/10 rounded-full" />
             <div className="w-full h-2 bg-white/10 rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-3">
             <div className="h-10 bg-aura-comfort-green/40 rounded-xl" />
             <div className="h-10 bg-aura-comfort-green/40 rounded-xl" />
             <div className="h-10 bg-aura-comfort-green/40 rounded-xl" />
          </div>
        </div>
      }
      bad={
        <div className="flex flex-col gap-6 w-full items-start">
           <div className="w-full h-8 bg-white/20" />
           <div className="w-1/3 h-2 bg-white/10" />
           <div className="ml-8 w-full h-2 bg-white/10" />
           <div className="mt-8 flex gap-8">
              <div className="w-8 h-8 rounded-full bg-aura-comfort-green/40" />
              <div className="w-12 h-12 rounded-full bg-aura-comfort-green/40" />
           </div>
        </div>
      }
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {[
         { t: "Ritmo Vertical", d: "Uso consistente de múltiplos de 8 para espaçamentos entre seções." },
         { t: "Contraste", d: "Diferenciação clara entre elementos clicáveis e estáticos." },
         { t: "Grids Flexíveis", d: "Sistemas de 12 colunas que se adaptam a qualquer viewport." }
       ].map(g => (
         <Card key={g.t}>
           <h4 className="text-white font-bold uppercase tracking-widest text-[1em] mb-2">{g.t}</h4>
           <p className="text-gray-400 text-[1em] font-mono leading-relaxed">{g.d}</p>
         </Card>
       ))}
    </div>
  </div>
);

const Patterns = () => (
  <div className="space-y-20 py-20 border-t border-white/5">
    <SectionHeader 
      id="patterns"
      title="Padrões de Interface" 
      subtitle="Soluções comprovadas para problemas recorrentes de navegação e fluxo."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { t: "Navegação Global", i: Menu, d: "Sidebars e Navbars consistentes em todo o sistema." },
        { t: "Formulários", i: Layout, d: "Padrões de erro, validação e feedback em tempo real." },
        { t: "Dashboards", i: Grid, d: "Visualização densa de informação organizada em módulos." },
        { t: "Onboarding", i: Sparkles, d: "Fluxos de boas-vindas e configuração inicial." },
        { t: "Busca & Filtros", i: Search, d: "Acesso rápido a conteúdos através de múltiplos critérios." },
        { t: "Auth Flow", i: ShieldCheck, d: "Padrões de Login, Cadastro e Segurança." },
        { t: "Global Search", i: Terminal, d: "Command bars (Cmd+K) para navegação rápida." },
        { t: "Feedback Loop", i: Bell, d: "Toasts, notificações e estados de vácuo." }
      ].map(p => (
        <div key={p.t} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/5 transition-all">
          <p.i className="text-aura-comfort-green mb-4" size={24} />
          <h5 className="text-white font-bold uppercase text-[1em] mb-2">{p.t}</h5>
          <p className="text-gray-400 text-[1em] font-mono leading-relaxed">{p.d}</p>
        </div>
      ))}
    </div>
  </div>
);

const UIComponents = () => {
  const [btnState, setBtnState] = useState('normal');

  return (
    <div className="space-y-20 py-20 border-t border-white/5">
      <SectionHeader 
        id="ui-components"
        title="Componentes UI" 
        subtitle="Os blocos de construção reutilizáveis da interface."
      />

      {/* Buttons */}
      <div className="space-y-10">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-aura-comfort-green/20 rounded-lg text-aura-comfort-green"><MousePointer2 size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Botões & Actions</h3>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
           <Card title="Button Anatomy & Types">
              <div className="flex flex-wrap gap-6 py-6">
                 <button className="px-8 py-3 bg-aura-comfort-green text-dark-bg font-bold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-aura-comfort-green/20">PRIMARY</button>
                 <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10">SECONDARY</button>
                 <button className="px-8 py-3 border-2 border-aura-comfort-green text-aura-comfort-green font-bold rounded-xl hover:bg-aura-comfort-green/10 transition-all">OUTLINE</button>
                 <button className="px-8 py-3 text-gray-400 hover:text-white transition-all font-bold tracking-widest text-[1em] uppercase">GHOST</button>
                 <button className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500/20 transition-all border border-red-500/30"><Trash2 size={20} /></button>
                 <button className="w-14 h-14 bg-aura-comfort-green text-dark-bg rounded-full flex items-center justify-center shadow-xl shadow-aura-comfort-green/30 hover:scale-110 active:scale-95 transition-all"><Plus size={24} /></button>
              </div>
           </Card>

           <Card title="Behavioral States">
              <div className="grid grid-cols-3 gap-6 py-4">
                 {[
                   { s: "Normal", c: "bg-white/10 text-white opacity-100" },
                   { s: "Hover", c: "bg-white/20 text-white scale-[1.02]" },
                   { s: "Active", c: "bg-white/30 text-white scale-[0.98]" },
                   { s: "Disabled", c: "bg-white/5 text-gray-600 cursor-not-allowed border-transparent" },
                   { s: "Loading", c: "bg-white/10 text-gray-400", icon: Loader2 },
                   { s: "Focus", c: "bg-white/10 text-white ring-4 ring-aura-comfort-green/30 shadow-none border-aura-comfort-green" }
                 ].map(state => (
                   <div key={state.s} className="space-y-2">
                     <button className={cn("w-full py-3 rounded-xl font-mono text-[1em] font-bold uppercase transition-all flex items-center justify-center gap-2 border border-white/10", state.c)}>
                       {state.icon && <state.icon size={12} className="animate-spin" />}
                       {state.s}
                     </button>
                   </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>

      {/* Forms */}
      <div className="space-y-10 pt-20">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-aura-comfort-oat/20 rounded-lg text-aura-tech-cyan"><Layout size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Inputs & Forms</h3>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
           <Card title="Input States">
              <div className="space-y-6">
                 <div className="space-y-2">
                    <Label className="text-[1em] font-mono text-gray-400 uppercase font-bold tracking-widest block">Normal Label</Label>
                    <input type="text" placeholder="Digite algo..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-aura-comfort-green transition-all font-mono" />
                 </div>
                 <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <Label className="text-[1em] font-mono text-red-400 uppercase font-bold tracking-widest block">Invalid State</Label>
                      <span className="text-[1em] text-red-500 font-mono">Campo obrigatório</span>
                    </div>
                    <input type="email" value="email-invalido" className="w-full bg-red-500/5 border border-red-500/30 rounded-xl px-4 py-3 text-red-200 outline-none font-mono" />
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 flex-1">
                       <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-transparent checked:bg-aura-comfort-green transition-all" />
                       <span className="text-[1em] font-mono text-gray-300">Checkbox</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 flex-1">
                       <div className="w-10 h-5 bg-white/10 rounded-full relative">
                          <div className="w-3 h-3 bg-aura-comfort-green absolute top-1 right-1 rounded-full" />
                       </div>
                       <span className="text-[1em] font-mono text-gray-300">Switch</span>
                    </div>
                 </div>
              </div>
           </Card>

           <div className="space-y-6">
              <h4 className="text-white font-bold uppercase text-[1em] tracking-widest opacity-50">Best Practices</h4>
              <Card className="bg-aura-comfort-green/10 border-aura-comfort-green/20">
                 <div className="flex gap-4">
                    <CheckCircle2 className="text-aura-comfort-green shrink-0" />
                    <div className="space-y-2">
                       <p className="text-white font-bold uppercase text-[1em]">Erro Humano e Orientado</p>
                       <p className="text-gray-300 text-[1em] font-mono leading-relaxed">
                         "Ops! Parece que o formato do seu e-mail está incorreto. Verifique se ele segue o padrão joao@exemplo.com."
                       </p>
                    </div>
                 </div>
              </Card>
              <Card className="bg-red-500/10 border-red-500/20">
                 <div className="flex gap-4">
                    <X className="text-red-500 shrink-0" />
                    <div className="space-y-2">
                       <p className="text-white font-bold uppercase text-[1em]">Erro Técnico Ruim</p>
                       <p className="text-gray-300 text-[1em] font-mono leading-relaxed opacity-50">
                         "RUNTIME ERROR 402: Null pointer exception at Auth.validate()"
                       </p>
                    </div>
                 </div>
              </Card>
           </div>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-10 pt-20">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500"><Box size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Content Cards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
           <Card title="Module Card">
              <div className="space-y-4">
                 <div className="w-full aspect-video bg-white/10 rounded-2xl overflow-hidden relative group/img">
                    <div className="absolute inset-0 bg-aura-comfort-green/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                       <ExternalLink size={24} className="text-white" />
                    </div>
                 </div>
                 <h5 className="text-lg font-bold text-white uppercase tracking-tighter font-display leading-tight">Card de Conteúdo Interativo</h5>
                 <p className="text-[1em] text-gray-400 font-mono leading-relaxed">Demonstração de hierarquia visual e padding consistente.</p>
              </div>
           </Card>

           <Card title="Stats Card">
              <div className="flex items-end justify-between">
                 <div className="space-y-2">
                    <h5 className="text-[1em] font-mono text-gray-400 uppercase tracking-widest">Active Users</h5>
                    <p className="text-5xl font-display font-black text-aura-comfort-green tracking-tighter">1.2k</p>
                 </div>
                 <div className="h-16 w-32 flex items-end gap-1">
                    {[3, 5, 2, 8, 4, 7, 5].map((h, i) => (
                      <div key={i} className="flex-1 bg-aura-comfort-green/20 rounded-t-sm" style={{ height: `${h * 10}%` }} />
                    ))}
                 </div>
              </div>
           </Card>

           <Card title="Skeleton States">
              <div className="space-y-4 animate-pulse">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full" />
                    <div className="space-y-2 flex-1">
                       <div className="w-1/2 h-2 bg-white/20 rounded" />
                       <div className="w-1/3 h-2 bg-white/10 rounded" />
                    </div>
                 </div>
                 <div className="w-full h-24 bg-white/10 rounded-2xl" />
              </div>
           </Card>
        </div>
      </div>

      {/* Carousel */}
      <Card id="carousel" className="mt-20" title="Carousel / Slider Components">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
              <div className="space-y-4">
                 <TechLabel color="cyan">Pattern: Carousel</TechLabel>
                 <h4 className="text-4xl font-display font-black text-white uppercase tracking-tighter leading-tight">Uso Consciente de Movimento</h4>
                 <p className="text-lg text-gray-400 font-mono leading-relaxed">
                   Sliders e Carrosséis devem ser usados com cautela. Riscos incluem problemas de acessibilidade para leitores de tela e desvio de atenção.
                 </p>
              </div>
              <ul className="space-y-3 font-mono text-[1em] text-gray-300">
                <li className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-aura-comfort-green" /> Pausa automática ao hover / foco</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-aura-comfort-green" /> Navegação manual clara via botões</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-aura-comfort-green" /> Indicadores visuais de posição</li>
              </ul>
           </div>
           <div className="relative p-4 bg-black/40 rounded-3xl border border-white/5 overflow-hidden group">
              <div className="flex gap-4">
                 <div className="shrink-0 w-3/4 aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    <ImageIcon size={40} className="text-gray-700" />
                 </div>
                 <div className="shrink-0 w-3/4 aspect-video bg-white/5 rounded-2xl border border-white/10" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-aura-comfort-green" />
                 <div className="w-2 h-2 rounded-full bg-white/20" />
                 <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <button className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight className="rotate-180" /></button>
              <button className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight /></button>
           </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="space-y-10 pt-20">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-aura-comfort-oat/20 rounded-lg text-aura-tech-cyan"><Menu size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Navbar, Navegação & Menus</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card title="Top Navigation Anatomy">
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-8 h-8 bg-aura-comfort-green rounded-lg" />
                    <div className="flex gap-4">
                       <div className="w-12 h-2 bg-white/40 rounded-full" />
                       <div className="w-12 h-2 bg-white/10 rounded-full" />
                       <div className="w-12 h-2 bg-white/10 rounded-full" />
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Search size={14} className="text-gray-500" /></div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Bell size={14} className="text-gray-500" /></div>
                    <div className="w-8 h-8 rounded-full bg-aura-comfort-green/20 border border-aura-comfort-green/30" />
                 </div>
              </div>
           </Card>
           
           <Card title="Menu Types">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <TechLabel color="cyan" className="scale-75">Dropdown</TechLabel>
                    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                       <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                          <span className="text-[1em] text-gray-200">Ações</span>
                          <ChevronDown size={12} className="text-gray-500" />
                       </div>
                       {[
                         { i: UserIcon, t: "Perfil" },
                         { i: Settings, t: "Config" },
                         { i: LogOut, t: "Sair", red: true }
                       ].map(item => (
                         <div key={item.t} className={cn("px-4 py-2 flex items-center gap-2 hover:bg-white/5 cursor-pointer text-[1em] font-mono", item.red ? "text-red-500" : "text-gray-300")}>
                           <item.i size={10} />
                           {item.t}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-2">
                    <TechLabel color="cyan" className="scale-75">Context Menu</TechLabel>
                    <div className="bg-black/60 border border-white/10 rounded-xl p-2 w-full">
                        <div className="px-3 py-1 flex items-center justify-between text-[1em] text-gray-200 font-mono hover:bg-aura-comfort-green/10 rounded">
                           <span>Copiar</span>
                           <span className="opacity-40">Ctrl+C</span>
                        </div>
                        <div className="px-3 py-1 flex items-center justify-between text-[1em] text-gray-200 font-mono hover:bg-aura-comfort-green/10 rounded">
                           <span>Colar</span>
                           <span className="opacity-40">Ctrl+V</span>
                        </div>
                    </div>
                 </div>
              </div>
           </Card>

           <Card title="Breadcrumbs & Pagination">
              <div className="space-y-8 py-4">
                 <div className="flex items-center gap-2 text-[1em] font-mono">
                    <span className="text-gray-500">Home</span>
                    <ChevronRight size={10} className="text-gray-700" />
                    <span className="text-gray-500">Documentos</span>
                    <ChevronRight size={10} className="text-gray-700" />
                    <span className="text-aura-comfort-green font-bold">Interfaces</span>
                 </div>
                 <div className="flex gap-2">
                    {[1, 2, 3, '...', 12].map((p, i) => (
                      <div key={i} className={cn("w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[1em] border border-white/5", p === 1 ? "bg-aura-comfort-green text-dark-bg font-bold" : "bg-white/5 text-gray-500")}>
                        {p}
                      </div>
                    ))}
                 </div>
              </div>
           </Card>
        </div>
      </div>

      {/* Tables & Data */}
      <div className="space-y-10 pt-20">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-aura-comfort-green/20 rounded-lg text-aura-comfort-green"><TableIcon size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Tabelas e Dados</h3>
        </div>

        <Card title="Data Table Pattern">
           <div className="overflow-x-auto">
              <table className="w-full text-[1em] font-mono">
                 <thead className="text-gray-500 border-b border-white/10">
                    <tr>
                       <th className="text-left px-4 py-3 font-black uppercase">Usuário</th>
                       <th className="text-left px-4 py-3 font-black uppercase">Status</th>
                       <th className="text-left px-4 py-3 font-black uppercase">Último Acesso</th>
                       <th className="text-right px-4 py-3 font-black uppercase">Ação</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {[
                      { u: "Débora Gasparetto", s: "Ativo", d: "Hoje, 10:20", color: "green" },
                      { u: "Aluno Pesquisador", s: "Inativo", d: "Ontem, 15:45", color: "red" },
                      { u: "Visitante Aura", s: "Ativo", d: "05 Mai, 09:12", color: "green" }
                    ].map(row => (
                      <tr key={row.u} className="hover:bg-white/[0.02] transition-colors">
                         <td className="px-4 py-4 text-white font-bold">{row.u}</td>
                         <td className="px-4 py-4">
                            <span className={cn("px-2 py-0.5 rounded-full text-[1em] font-bold uppercase", row.color === "green" ? "bg-aura-comfort-green/10 text-aura-comfort-green" : "bg-red-500/10 text-red-500")}>{row.s}</span>
                         </td>
                         <td className="px-4 py-4 text-gray-400">{row.d}</td>
                         <td className="px-4 py-4 text-right">
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-all"><MoreVertical size={14} /></button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </Card>
      </div>

      {/* Mobile Components */}
      <div className="space-y-10 pt-20">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-aura-comfort-oat/20 rounded-lg text-aura-tech-cyan"><Smartphone size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Mobile Components & Ergonomia</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <Card title="Bottom Sheet / Action Sheet">
              <div className="bg-black/40 rounded-t-3xl border-t border-white/10 p-6 space-y-4 translate-y-10">
                 <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto" />
                 <h6 className="text-[1em] font-mono text-gray-400 uppercase font-black text-center">Opções do Arquivo</h6>
                 <div className="space-y-2">
                    <button className="w-full py-4 bg-white/5 rounded-2xl flex items-center justify-between px-6 text-[1em]">
                       <span>Renomear</span>
                       <PencilRuler size={16} />
                    </button>
                    <button className="w-full py-4 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-between px-6 text-[1em]">
                       <span>Excluir</span>
                       <Trash2 size={16} />
                    </button>
                 </div>
              </div>
           </Card>

           <Card title="Bottom Navigation">
              <div className="h-full flex flex-col justify-end">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center px-8">
                    <Home className="text-aura-comfort-green" size={20} />
                    <Search className="text-gray-500" size={20} />
                    <div className="w-12 h-12 bg-aura-comfort-green rounded-2xl flex items-center justify-center -translate-y-6 shadow-xl shadow-aura-comfort-green/20">
                       <Plus className="text-dark-bg" size={24} />
                    </div>
                    <Users className="text-gray-500" size={20} />
                    <Settings className="text-gray-500" size={20} />
                 </div>
              </div>
           </Card>

           <Card title="Thumb Zone & Ergonomics">
              <div className="relative aspect-[9/16] bg-black/40 rounded-[32px] border border-white/10 overflow-hidden mx-auto max-w-[200px]">
                 <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-aura-comfort-green/10 border-t border-aura-comfort-green/30 flex items-center justify-center">
                    <span className="text-[1em] font-mono text-aura-comfort-green uppercase font-black text-center px-4 leading-tight">Zona de Interação Confortável (Mobile)</span>
                 </div>
                 <div className="absolute top-12 left-4 right-4 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    <span className="text-[1em] font-mono text-gray-500 uppercase">Zona de Difícil Alcance</span>
                 </div>
              </div>
           </Card>
        </div>
      </div>

       {/* Feedback */}
       <div className="space-y-10 pt-20">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-red-500/20 rounded-lg text-red-500"><Bell size={20} /></div>
           <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Feedback & Messaging</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-6 bg-aura-comfort-green/10 border border-aura-comfort-green/20 rounded-3xl animate-bounce-slow flex items-start gap-4 shadow-xl shadow-aura-comfort-green/10">
              <CheckCircle2 className="text-aura-comfort-green w-6 h-6 shrink-0" />
              <div className="space-y-1">
                 <p className="text-white font-bold font-mono text-[1em] uppercase">Documento Salvo</p>
                 <p className="text-[1em] text-gray-300 font-mono">As alterações foram persistidas no sistema cloud.</p>
              </div>
           </div>
           <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-start gap-4">
              <AlertCircle className="text-red-500 w-6 h-6 shrink-0" />
              <div className="space-y-1">
                 <p className="text-white font-bold font-mono text-[1em] uppercase">Erro de Validação</p>
                 <p className="text-[1em] text-gray-300 font-mono">Ocorreu um problema ao processar seu pedido.</p>
              </div>
           </div>
           <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-3xl flex items-start gap-4">
              <Info className="text-yellow-500 w-6 h-6 shrink-0" />
              <div className="space-y-1">
                 <p className="text-white font-bold font-mono text-[1em] uppercase">Aviso de Quota</p>
                 <p className="text-[1em] text-gray-300 font-mono">Você atingiu 80% do limite de armazenamento mensal.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Accessibility = () => (
  <div className="space-y-20 py-20 border-t border-white/5">
    <SectionHeader 
      id="accessibility"
      title="Acessibilidade (a11y)" 
      subtitle="Garantia de que a interface é utilizável por todos, sem exceções."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       <Card title="Visual Semantic Hierarchy">
          <div className="space-y-6 py-4">
             <div className="p-4 bg-white/5 rounded-xl border-l-4 border-aura-comfort-green">
                <span className="text-[1em] font-mono text-aura-comfort-green font-black uppercase tracking-widest block mb-2">&lt;h1&gt;</span>
                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Título Principal do Conteúdo</h4>
             </div>
             <div className="p-4 bg-white/5 rounded-xl border-l-4 border-aura-comfort-green/60">
                <span className="text-[1em] font-mono text-aura-comfort-green/60 font-black uppercase tracking-widest block mb-2">&lt;h2&gt;</span>
                <h5 className="text-lg font-bold text-white uppercase tracking-tighter">Subtítulo de Seção</h5>
             </div>
             <p className="text-[1em] font-mono text-gray-400 p-4 border-l-4 border-white/10 leading-relaxed italic">
                Cuidado: pular níveis hierárquicos (ex: do H1 para o H3) dificulta a navegação para usuários de leitores de tela.
             </p>
          </div>
       </Card>
       
       <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-[1em] tracking-widest opacity-50">Standards & Compliance</h4>
          {[
            { t: "WCAG 2.1 Compliance", d: "Seguir os níveis A, AA e AAA para garantir acessibilidade universal." },
            { t: "Keyboard Only Navigation", d: "Toda a interface deve ser operável apenas via teclado (Tab, Space, Enter)." },
            { t: "Screen Reader Experience", d: "Aria-Labels e semântica clara para que o sistema 'fale' a interface corretamente." },
            { t: "Minimum Touch Targets", d: "Tamanho mínimo de 44x44px para botões em mobile." }
          ].map(item => (
            <div key={item.t} className="flex gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
               <ShieldCheck className="text-aura-comfort-green shrink-0" size={20} />
               <div className="space-y-1">
                  <h6 className="text-white font-bold uppercase text-[1em]">{item.t}</h6>
                  <p className="text-gray-400 font-mono text-[1em] leading-relaxed">{item.d}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

const UIModules = () => (
  <div className="space-y-20 py-20 border-t border-white/5">
    <SectionHeader 
      id="libraries"
      title="UI Libraries & Ecosystems" 
      subtitle="Ferramentas modernas para acelerar o desenvolvimento orientado a Design Systems."
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { n: "Radix UI", u: "https://www.radix-ui.com/", d: "Headless UI components." },
        { n: "Shadcn/UI", u: "https://ui.shadcn.com/", d: "Beautifully designed UI components." },
        { n: "Magic UI", u: "https://magicui.design/", d: "Premium landing page components." },
        { n: "Aceternity UI", u: "https://ui.aceternity.com/", d: "Cutting-edge motion UI." },
        { n: "Relume", u: "https://www.relume.io/", d: "Sitemap and component library." },
        { n: "Material UI", u: "https://mui.com/", d: "Google's Material Design for React." },
        { n: "Chakra UI", u: "https://chakra-ui.com/", d: "Modular and accessible UI components." },
        { n: "Ant Design", u: "https://ant.design/", d: "Enterprise-class UI language." }
      ].map(lib => (
        <a key={lib.n} href={lib.u} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-aura-comfort-green/30 transition-all flex flex-col justify-between group h-full">
           <div className="space-y-2">
              <h5 className="text-white font-display font-bold group-hover:text-aura-comfort-green transition-colors">{lib.n}</h5>
              <p className="text-[1em] font-mono text-gray-500 leading-tight">{lib.d}</p>
           </div>
           <ExternalLink size={12} className="text-gray-700 group-hover:text-aura-comfort-green transition-colors mt-6" />
        </a>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---

export const DesignSystemDocumentation = () => {
  return (
    <div className="space-y-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Intro />
        <Architecture />
        <Tokens />
        <Guidelines />
        <Patterns />
        <UIComponents />
        <Accessibility />
        <UIModules />
      </motion.div>
    </div>
  );
};















