import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Brain, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  MousePointer2, 
  Layers, 
  Info, 
  ExternalLink,
  ChevronRight,
  Eye,
  Settings,
  ShieldCheck,
  Globe,
  Trash2,
  AlertCircle,
  Menu,
  ChevronDown,
  Layout,
  MousePointer,
  Square,
  Smartphone,
  Users,
  Search,
  CheckSquare,
  BookOpen,
  Monitor
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Shared Components for the Showcase ---

const TechLabel = ({ children, color = "green", className }: { children: React.ReactNode, color?: "green" | "cyan" | "white" | "amber" | "red" | "purple", className?: string }) => (
  <span className={cn(
    "text-[1em] font-mono px-2 py-0.5 rounded border uppercase tracking-widest leading-none inline-block",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "white" && "text-white border-white/30 bg-white/5",
    color === "amber" && "text-aura-comfort-clay border-aura-comfort-clay/30 bg-aura-comfort-clay/5",
    color === "red" && "text-red-500 border-red-500/30 bg-red-500/5",
    color === "purple" && "text-aura-tech-purple border-aura-tech-purple/30 bg-aura-tech-purple/5",
    className
  )}>
    {children}
  </span>
);

const SectionHeader = ({ title, subtitle, icon: Icon, colorClass = "text-aura-tech-cyan" }: { title: string, subtitle?: string, icon: any, colorClass?: string }) => (
  <div className="flex flex-col gap-2 mb-8">
     <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]", colorClass)}>
           <Icon size={20} />
        </div>
        <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter italic">{title}</h3>
     </div>
     {subtitle && <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest ml-12">{subtitle}</p>}
  </div>
);

const Card = ({ children, className, title, id }: { children: React.ReactNode, className?: string, title?: string, id?: string }) => (
  <div id={id} className={cn("p-8 bg-aura-tech-blue/40 border border-white/10 rounded-[32px] relative overflow-hidden group hover:border-white/20 transition-all", className)}>
    {title && (
      <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-aura-comfort-oat" />
        <h4 className="text-[1em] font-mono font-bold text-gray-400 uppercase tracking-widest">{title}</h4>
      </div>
    )}
    {children}
  </div>
);

const Comparison = ({ good, bad, titleGood = "Prática Recomendada", titleBad = "Erro Comum" }: { good: React.ReactNode, bad: React.ReactNode, titleGood?: string, titleBad?: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-3">
      <TechLabel color="red">{titleBad}</TechLabel>
      <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-[24px] min-h-[160px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-2 right-2 text-red-500/20"><XCircle size={40} /></div>
        {bad}
      </div>
    </div>
    <div className="space-y-3">
      <TechLabel color="green">{titleGood}</TechLabel>
      <div className="p-4 bg-aura-comfort-green/5 border border-aura-comfort-green/20 rounded-[24px] min-h-[160px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-2 right-2 text-aura-comfort-green/20"><CheckCircle2 size={40} /></div>
        {good}
      </div>
    </div>
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <div className="space-y-2">
     <h5 className="text-[1em] font-mono font-bold text-gray-500 uppercase mb-3">Checklist de Aplicação:</h5>
     {items.map((item, i) => (
       <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl group/check border-l-2 border-l-aura-comfort-oat">
         <div className="shrink-0 w-4 h-4 rounded border border-aura-comfort-oat/40 flex items-center justify-center group-hover/check:bg-aura-tech-cyan/20 transition-colors">
            <CheckCircle2 size={10} className="text-aura-tech-cyan opacity-0 group-hover/check:opacity-100 transition-opacity" />
         </div>
         <span className="text-[1em] font-mono text-gray-300 leading-tight">{item}</span>
       </div>
     ))}
  </div>
);

const ExternalLinkManual = ({ title, url }: { title: string, url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-aura-comfort-oat/10 hover:border-aura-tech-cyan/40 transition-all group/link">
    <span className="text-[1em] font-mono text-gray-400 group-hover/link:text-white uppercase tracking-tighter">{title}</span>
    <ExternalLink size={12} className="text-gray-600 group-hover/link:text-aura-tech-cyan" />
  </a>
);

// --- Content Sections ---

const HickSection = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
           <TechLabel color="cyan" className="mb-2">Lei de Hick</TechLabel>
           <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Paradoxo da Escolha</h4>
           <p className="text-[1em] text-gray-200 font-mono leading-relaxed">
             O tempo necessário para tomar uma decisão aumenta conforme cresce o número e a complexidade das opções disponíveis. Em design de interfaces, simplificar é reduzir a carga cognitiva para acelerar a ação.
           </p>
        </div>

        <div className="p-6 bg-black/40 border border-white/10 rounded-2xl space-y-4">
           <h5 className="text-[1em] font-mono text-aura-tech-cyan uppercase font-black tracking-widest">Pilar Psicológico</h5>
           <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
             Relacionada à <span className="text-white font-bold">Carga Cognitiva</span>: Cada opção extra exige que o cérebro processe, compare e selecione, consumindo energia mental.
           </p>
        </div>

        <ExternalLinkManual title="lawsofux.com/hicks-law" url="https://lawsofux.com/hicks-law/" />
      </div>

      <Card title="Demonstração Visual: Decisão Linear">
        <div className="space-y-10 py-4">
           {/* Diagrama de Menu Complexo vs Simples */}
           <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4 text-center">
                 <div className="space-y-1">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="h-6 w-full bg-white/5 border border-white/10 rounded flex items-center justify-center text-[1em] font-mono text-gray-500">Opção 0{i}</div>
                    ))}
                 </div>
                 <span className="text-[1em] font-mono text-red-500 uppercase">Sobrecarga</span>
              </div>
              <div className="space-y-4 text-center">
                 <div className="space-y-2">
                    <div className="h-10 w-full bg-aura-comfort-green/20 border border-aura-comfort-green/40 rounded flex items-center justify-center text-[1em] font-mono text-aura-comfort-green font-bold">Ação Principal</div>
                    <div className="h-6 w-full bg-white/5 border border-white/10 rounded flex items-center justify-center text-[1em] font-mono text-gray-500 italic">Mais opções...</div>
                 </div>
                 <span className="text-[1em] font-mono text-aura-comfort-green uppercase">Eficiência</span>
              </div>
           </div>
           
           <div className="pt-4 border-t border-white/5">
              <h6 className="text-[1em] font-mono text-gray-500 uppercase mb-4 text-center">Fluxo Recomendado: Progressive Disclosure</h6>
              <div className="flex items-center justify-between px-4">
                 <div className="w-10 h-10 rounded-full bg-aura-comfort-green/20 border border-aura-comfort-green/40 flex items-center justify-center text-aura-comfort-green">1</div>
                 <div className="flex-1 h-px bg-white/10 mx-2" />
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">2</div>
                 <div className="flex-1 h-px bg-white/10 mx-2" />
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">3</div>
              </div>
           </div>
        </div>
      </Card>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <Card title="Como Aplicar">
          <ul className="text-[1em] font-mono text-gray-300 space-y-4">
             <li className="flex gap-2">
                <span className="text-aura-comfort-green font-bold">01.</span>
                <span>Dividir processos complexos em etapas menores.</span>
             </li>
             <li className="flex gap-2">
                <span className="text-aura-comfort-green font-bold">02.</span>
                <span>Utilizar o "Progressive Disclosure" (Revelação Progressiva).</span>
             </li>
             <li className="flex gap-2">
                <span className="text-aura-comfort-green font-bold">03.</span>
                <span>Destacar a ação principal (Primary Action).</span>
             </li>
          </ul>
       </Card>
       <Card title="Checklist" className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <Checklist items={[
               "Existe ação principal clara?",
               "O menu possui excesso de opções?",
               "Informações estão agrupadas?",
               "Há hierarquia visual evidente?",
               "O usuário entende rapidamente o próximo passo?",
               "Existem escolhas desnecessárias?"
             ]} />
          </div>
       </Card>
    </div>
  </div>
);

const FittsSection = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card title="Ergonomia Mobile vs Desktop">
         <div className="relative aspect-video bg-black/40 rounded-2xl border border-white/5 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-aura-comfort-green/10 via-transparent to-transparent opacity-50" />
            
            {/* Diagrama de área de toque */}
            <div className="relative w-48 h-80 bg-dark-bg border border-white/20 rounded-[32px] p-4 flex flex-col justify-end">
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full" />
               
               <div className="space-y-3 relative z-10">
                  <div className="p-4 bg-aura-comfort-green/20 border-2 border-aura-comfort-green/60 rounded-xl text-center">
                     <span className="text-[1em] font-mono text-aura-comfort-green font-bold uppercase">Touch Target: 44px+</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-[1em] font-mono text-gray-500">Voltar</div>
                     <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-[1em] font-mono text-gray-500">Fechar</div>
                  </div>
               </div>

               {/* Thumb Zone Visualization */}
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-aura-comfort-green/5 border-t border-aura-comfort-green/20 rounded-b-[32px] pointer-events-none flex items-center justify-center">
                  <span className="text-[1em] font-mono text-aura-comfort-green/40 uppercase rotate-0">Optimal Thumb Zone</span>
               </div>
            </div>
            
            <div className="absolute bottom-4 left-4 flex gap-4">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-aura-comfort-green" />
                  <span className="text-[1em] font-mono text-gray-400">Perto = Rápido</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-aura-comfort-oat" />
                  <span className="text-[1em] font-mono text-gray-400">Grande = Fácil</span>
               </div>
            </div>
         </div>
      </Card>

      <div className="space-y-6">
        <div className="space-y-2">
           <TechLabel color="cyan" className="mb-2">Lei de Fitts</TechLabel>
           <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Distância e Escala</h4>
           <p className="text-[1em] text-gray-200 font-mono leading-relaxed">
             O tempo para alcançar um alvo depende da distância até ele e do tamanho do elemento. Alvos importantes devem ser grandes e colocados em locais de fácil acesso.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="p-4 bg-aura-comfort-green/5 border border-aura-comfort-green/10 rounded-2xl">
              <h6 className="text-[1em] font-mono text-aura-comfort-green uppercase font-black mb-2">Interface Mobile</h6>
              <p className="text-[1em] text-gray-400 leading-relaxed font-mono">CTAs na parte inferior, próximos ao polegar.</p>
           </div>
           <div className="p-4 bg-aura-comfort-oat/5 border border-aura-comfort-oat/10 rounded-2xl">
              <h6 className="text-[1em] font-mono text-aura-tech-cyan uppercase font-black mb-2">Desktop</h6>
              <p className="text-[1em] text-gray-400 leading-relaxed font-mono">Aproveitar os cantos da tela (alvos infinitos).</p>
           </div>
        </div>

        <ExternalLinkManual title="lawsofux.com/fittss-law" url="https://lawsofux.com/fittss-law/" />
      </div>
    </div>

    <Comparison 
      titleBad="Erro Mobile"
      titleGood="Boa Prática"
      bad={
        <div className="space-y-4 flex flex-col items-center">
           <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center"><Trash2 size={8} className="text-white" /></div>
           <span className="text-[1em] font-mono text-red-500 uppercase">Botão minúsculo</span>
        </div>
      }
      good={
        <div className="space-y-4 flex flex-col items-center">
           <div className="px-6 py-3 bg-aura-comfort-green text-dark-bg font-bold rounded-xl text-[1em]">ADICIONAR AO CARRINHO</div>
           <span className="text-[1em] font-mono text-aura-comfort-green uppercase">Área generosa</span>
        </div>
      }
    />
  </div>
);

const JakobSection = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
           <TechLabel color="cyan" className="mb-2">Lei de Jakob</TechLabel>
           <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Familiaridade Mental</h4>
           <p className="text-[1em] text-gray-200 font-mono leading-relaxed">
             Usuários preferem interfaces que funcionem de maneira semelhante às experiências digitais que já possuem. Padrões conhecidos reduzem o esforço de aprendizado.
           </p>
        </div>

        <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-4">
           <h5 className="text-[1em] font-mono text-gray-400 uppercase font-black">Transferência de Conhecimento</h5>
           <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
             Ao usar padrões conhecidos (como o ícone de engrenagem para configurações), permitimos que o usuário use o produto instantaneamente sem "perder tempo" aprendendo a interface.
           </p>
        </div>

        <ExternalLinkManual title="lawsofux.com/jakobs-law" url="https://lawsofux.com/jakobs-law/" />
      </div>

      <Card title="Padronização vs Inovação">
         <div className="space-y-6 py-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-aura-comfort-green/20 flex items-center justify-center text-aura-comfort-green"><Menu size={16} /></div>
                  <span className="text-[1em] font-mono text-white">Navbar Padrão</span>
               </div>
               <TechLabel color="green">Previsível</TechLabel>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-dashed border-red-500/20 flex items-center justify-between grayscale opacity-50">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rotate-45 border-2 border-dashed border-red-500 flex items-center justify-center text-red-500">X</div>
                  <span className="text-[1em] font-mono text-red-500 italic">Menu "Diferente"</span>
               </div>
               <TechLabel color="red">Arriscado</TechLabel>
            </div>
            <p className="text-[1em] text-gray-500 italic font-mono text-center">*Inove no conteúdo e nos detalhes, não na mecânica base de navegação.</p>
         </div>
      </Card>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <Card title="Checklist" className="h-full">
          <Checklist items={[
            "Navegação segue padrões conhecidos?",
            "Botões parecem clicáveis?",
            "Links possuem aparência reconhecível?",
            "Usuários entendem rapidamente a interface?",
            "A terminologia é comum ao mercado?"
          ]} />
       </Card>
       <Card title="Quando Quebrar a Regra?" className="h-full">
          <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
            Somente quando o novo padrão oferece uma <span className="text-aura-comfort-green font-bold">vantagem competitiva ou funcional massiva</span>. Mudanças incrementais em padrões universais costumam ser mais eficazes que re-invenções totais.
          </p>
          <div className="mt-4 p-4 bg-aura-comfort-oat/10 border border-aura-comfort-oat/20 rounded-xl flex items-center gap-3">
             <AlertCircle size={16} className="text-aura-tech-cyan" />
             <span className="text-[1em] font-mono text-aura-tech-cyan uppercase font-bold tracking-tighter">Inovação ≠ Confusão</span>
          </div>
       </Card>
    </div>
  </div>
);

const MillerSection = () => (
  <div className="space-y-8">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
           <div className="space-y-2">
              <TechLabel color="cyan" className="mb-2">Lei de Miller</TechLabel>
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">O Número Mágico 7±2</h4>
              <p className="text-[1em] text-gray-200 font-mono leading-relaxed">
                A pessoa média só consegue manter em média 7 (mais ou menos 2) itens na memória de trabalho. Chunking (Agrupamento) é o segredo para gerenciar informações complexas.
              </p>
           </div>
           
           <div className="p-6 bg-aura-comfort-green/5 border border-aura-comfort-green/10 rounded-2xl">
              <h6 className="text-[1em] font-mono text-aura-comfort-green uppercase font-black mb-3">Técnica: Chunking</h6>
              <p className="text-[1em] text-gray-300 font-mono leading-relaxed mb-4">
                Ao agrupar elementos (ex: números de telefone em partes), o cérebro trata o grupo como uma única unidade de memória.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-2 bg-black/40 rounded border border-red-500/20 text-center text-[1em] font-mono text-red-500">5554991223456</div>
                 <div className="p-2 bg-black/40 rounded border border-aura-comfort-green/20 text-center text-[1em] font-mono text-aura-comfort-green">55 (54) 99122-3456</div>
              </div>
           </div>
        </div>

        <Card title="Aplicação em Formulários">
           <div className="space-y-6 py-2">
              <div className="flex items-center gap-2 mb-4">
                 <div className="flex-1 h-1.5 bg-aura-comfort-green rounded-full" />
                 <div className="flex-1 h-1.5 bg-white/20 rounded-full" />
                 <div className="flex-1 h-1.5 bg-white/20 rounded-full" />
              </div>
              <div className="space-y-4">
                 <div className="space-y-1">
                    <div className="w-16 h-2 bg-gray-600 rounded" />
                    <div className="w-full h-8 bg-white/5 border border-white/10 rounded" />
                 </div>
                 <div className="space-y-1">
                    <div className="w-24 h-2 bg-gray-600 rounded" />
                    <div className="w-full h-8 bg-white/5 border border-white/10 rounded" />
                 </div>
                 <button className="w-full py-3 bg-aura-comfort-green/20 text-aura-comfort-green font-bold text-[1em] rounded uppercase mt-4">Próxima Etapa</button>
              </div>
              <p className="text-[1em] font-mono text-gray-500 text-center italic">Dividir em partes reduz a percepção de esforço.</p>
           </div>
        </Card>
     </div>
  </div>
);

const VonRestorffSection = () => (
  <div className="space-y-8">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
           <div className="space-y-2">
              <TechLabel color="cyan" className="mb-2">Efeito Von Restorff</TechLabel>
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Efeito de Isolamento</h4>
              <p className="text-[1em] text-gray-200 font-mono leading-relaxed">
                Elementos visualmente diferentes possuem maior chance de serem percebidos e lembrados. O cérebro prioriza o "estranho" ou o "destacado".
              </p>
           </div>
           
           <Card title="Guia de Contraste">
              <div className="space-y-4">
                 <div className="flex gap-2">
                    {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded" />)}
                    <div className="w-10 h-10 bg-aura-comfort-green rounded flex items-center justify-center text-dark-bg animate-bounce"><Zap size={14} /></div>
                    {[5,6].map(i => <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded" />)}
                 </div>
                 <p className="text-[1em] font-mono text-gray-400">Atenção Capturada: <span className="text-aura-comfort-green font-bold">Botão de Destaque</span></p>
              </div>
           </Card>
        </div>

        <div className="space-y-4">
           <TechLabel color="amber">Atenção com Cautela</TechLabel>
           <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
             Destaque apenas o que é <span className="text-white font-bold">estratégico</span>. Se tudo brilha, nada se destaca. O excesso de destaques gera fadiga e cegueira de banners.
           </p>
           <Checklist items={[
             "Existe apenas um CTA primário na tela?",
             "O contraste é suficiente para daltônicos?",
             "O destaque ajuda na tarefa do usuário?",
             "Outros elementos estão competindo com o principal?"
           ]} />
        </div>
     </div>
  </div>
);

const ProximitySection = () => (
  <div className="space-y-8">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
           <div className="space-y-2">
              <TechLabel color="cyan" className="mb-2">Lei da Proximidade</TechLabel>
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Gestalt na Organização</h4>
              <p className="text-[1em] text-gray-200 font-mono leading-relaxed">
                Elementos próximos visualmente são percebidos como relacionados ou pertencentes ao mesmo grupo. O espaçamento é o comunicador invisível.
              </p>
           </div>
           
           <div className="grid grid-cols-2 gap-8 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <div className="space-y-1">
                 <div className="h-2 w-12 bg-aura-comfort-green rounded mb-2" />
                 <div className="grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-4 w-4 bg-white/10 rounded" />)}
                 </div>
                 <span className="text-[1em] font-mono text-aura-comfort-green">Grupo 01</span>
              </div>
              <div className="space-y-1">
                 <div className="h-2 w-12 bg-aura-comfort-oat rounded mb-2" />
                 <div className="grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-4 w-4 bg-white/10 rounded" />)}
                 </div>
                 <span className="text-[1em] font-mono text-aura-tech-cyan">Grupo 02</span>
              </div>
           </div>
        </div>

        <Card title="Práticas de AI & Interaction">
           <ul className="text-[1em] font-mono text-gray-300 space-y-4">
              <li className="flex gap-2">
                 <span className="text-aura-comfort-green font-bold">Agrupamento:</span>
                 <span>Manter Label e Input próximos, mas com respiro entre campos distantes.</span>
              </li>
              <li className="flex gap-2">
                 <span className="text-aura-tech-cyan font-bold">Relação:</span>
                 <span>Cartões de produto devem ter imagem, preço e título visualmente selados.</span>
              </li>
           </ul>
        </Card>
     </div>
  </div>
);

const HeuristicsSection = () => {
  const heuristics = [
    {
      id: 1,
      title: "Visibilidade do status do sistema",
      desc: "O sistema deve manter usuários informados sobre o que está acontecendo.",
      icon: Eye,
      checklist: ["Feedbacks imediatos?", "Loadings visíveis?", "Confirmação de salvamento?"],
      url: "https://www.nngroup.com/articles/visibility-system-status/",
      demo: (
        <div className="w-full p-4 bg-black/40 rounded-xl border border-white/10 flex flex-col items-center gap-3">
           <div className="w-full h-1 bg-white/10 overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-aura-comfort-green" 
                animate={{ width: ["0%", "100%"] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
           </div>
           <span className="text-[1em] font-mono text-aura-comfort-green animate-pulse">Sincronizando dados...</span>
        </div>
      )
    },
    {
      id: 2,
      title: "Correspondência (Mundo Real)",
      desc: "Interfaces devem utilizar linguagem compreensível ao usuário, não técnica.",
      icon: Globe,
      checklist: ["Linguagem humana?", "Ícones reconhecíveis?", "Fluxos naturais?"],
      url: "https://www.nngroup.com/articles/match-system-real-world/",
      demo: (
        <div className="grid grid-cols-2 gap-2 w-full">
           <div className="p-2 bg-red-500/10 border border-red-500/20 rounded flex items-center justify-center text-[1em] font-mono text-red-500">Error 0x00F12</div>
           <div className="p-2 bg-aura-comfort-green/10 border border-aura-comfort-green/20 rounded flex items-center justify-center text-[1em] font-mono text-aura-comfort-green">Ops! Algo deu errado.</div>
        </div>
      )
    },
    {
      id: 3,
      title: "Controle e liberdade",
      desc: "Usuários precisam desfazer ações e manter sensação de controle.",
      icon: Zap,
      checklist: ["Existe undo?", "Possível cancelar?", "Navegação reversível?"],
      url: "https://www.nngroup.com/articles/user-control-and-freedom/",
      demo: (
        <div className="flex gap-2 w-full">
           <button className="flex-1 py-1 px-3 bg-white/5 border border-white/10 rounded flex items-center justify-center gap-1 text-[1em] font-mono text-gray-400">DESFAZER</button>
           <button className="flex-1 py-1 px-3 bg-red-500/20 border border-red-500/40 rounded flex items-center justify-center gap-1 text-[1em] font-mono text-red-500">EXCLUIR</button>
        </div>
      )
    },
    {
      id: 4,
      title: "Consistência e padrões",
      desc: "Interfaces devem seguir convenções familiares entre diferentes telas.",
      icon: Layout,
      checklist: ["Identidade visual única?", "Termos consistentes?", "Componentes reutilizados?"],
      url: "https://www.nngroup.com/articles/consistency-and-standards/"
    },
    {
      id: 5,
      title: "Prevenção de erros",
      desc: "Evitar problemas antes que eles aconteçam com restrições e guias.",
      icon: ShieldCheck,
      checklist: ["Confirmação em deletar?", "Filtros inteligentes?", "Sugestões de busca?"],
      url: "https://www.nngroup.com/articles/error-prevention/",
      demo: (
        <div className="p-3 bg-white/5 border border-amber-500/30 rounded-xl flex items-center gap-2">
           <AlertCircle size={12} className="text-amber-500 shrink-0" />
           <p className="text-[1em] font-mono text-amber-500 leading-tight">Você tem certeza que deseja sair sem salvar?</p>
        </div>
      )
    },
    {
       id: 6,
       title: "Reconhecimento vs Memorização",
       desc: "Reduzir carga cognitiva tornando objetos, ações e opções visíveis.",
       icon: Layers,
       checklist: ["Instruções visíveis?", "Ícones com Labels?", "Histórico de buscas?"],
       url: "https://www.nngroup.com/articles/recognition-rather-than-recall/"
    },
    {
       id: 7,
       title: "Flexibilidade e eficiência",
       desc: "Interfaces para iniciantes e avançados (atalhos, aceleradores).",
       icon: Zap,
       checklist: ["Atalhos de teclado?", "Customização?", "Busca rápida?"],
       url: "https://www.nngroup.com/articles/flexibility-efficiency-heuristic/"
    },
    {
       id: 8,
       title: "Design Estético e Minimalista",
       desc: "Evitar excesso visual e informação desnecessária (Regra de Ouro: focar em signal vs noise).",
       icon: Layout,
       checklist: ["Foco na tarefa?", "Espaçamento adequado?", "Contraste correto?"],
       url: "https://www.nngroup.com/articles/aesthetic-minimalist-design/"
    },
    {
       id: 9,
       title: "Reconhecer e corrigir erros",
       desc: "Mensagens de erro devem ser claras, humanas e oferecer uma solução.",
       icon: AlertCircle,
       checklist: ["Explicação clara?", "Sugestão de solução?", "Linguagem sem códigos técnicos?"],
       url: "https://www.nngroup.com/articles/error-message-guidelines/"
    },
    {
       id: 10,
       title: "Ajuda e Documentação",
       desc: "Usuários devem conseguir suporte quando necessário.",
       icon: BookOpen,
       checklist: ["FAQ presente?", "Onboarding inicial?", "Busca de ajuda fácil?"],
       url: "https://www.nngroup.com/articles/help-and-documentation/"
    },
    {
       id: 11,
       title: "Acessibilidade (Extensão 5Is)",
       desc: "Inclusão digital radical: percepção, operação e compreensão universal.",
       icon: ShieldCheck,
       checklist: ["Contraste 4.5:1?", "Navegação por teclado?", "Leitor de tela funcional?", "Touch targets generosos?"],
       isAddon: true
    },
    {
       id: 12,
       title: "Impacto Socioambiental (Extensão 5Is)",
       desc: "Pensamento crítico sobre o impacto do design na sociedade e meio ambiente (Design Justice / Morozov).",
       icon: Globe,
       checklist: ["Ética de dados?", "Ecoeficiência digital?", "Design para transição?", "Impacto social positivo?"],
       isAddon: true
    }
  ];

  return (
    <div className="space-y-12">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heuristics.map((h) => (
            <div key={h.id} className={cn("p-6 bg-white/[0.03] border rounded-[32px] group transition-all flex flex-col justify-between", h.isAddon ? "border-aura-comfort-green/20 bg-aura-comfort-green/[0.02]" : "border-white/10 hover:border-aura-tech-cyan/40")}>
               <div>
                  <div className="flex items-center justify-between mb-4">
                     <div className={cn("p-2 rounded-lg", h.isAddon ? "bg-aura-comfort-green/20 text-aura-comfort-green" : "bg-aura-comfort-oat/20 text-aura-tech-cyan")}>
                        <h.icon size={18} />
                     </div>
                     <span className="text-[1em] font-mono text-gray-500 font-bold uppercase">Heurística {h.id}</span>
                  </div>
                  <h6 className="text-lg font-bold text-white uppercase tracking-tight mb-3 leading-tight group-hover:text-aura-tech-cyan transition-colors">{h.title}</h6>
                  <p className="text-[1em] text-gray-400 font-mono leading-relaxed mb-6">{h.desc}</p>
                  
                  {h.demo && (
                     <div className="mb-6 pt-4 border-t border-white/5">
                        <span className="text-[1em] font-mono text-gray-600 uppercase mb-2 block">Interação Demonstrativa:</span>
                        {h.demo}
                     </div>
                  )}

                  <div className="space-y-2 mb-8">
                     {h.checklist.map((c, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <CheckCircle2 size={10} className="text-aura-comfort-green" />
                           <span className="text-[1em] font-mono text-gray-300 uppercase tracking-tighter">{c}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               {h.url && <ExternalLinkManual title="NN/g Heuristics" url={h.url} />}
            </div>
          ))}
       </div>
    </div>
  );
};

// --- Main Component ---

export const LawsOfUXDocumentation = () => {
  const [activeTab, setActiveTab] = useState<'laws' | 'heuristics'>('laws');

  return (
    <div className="space-y-16">
      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
         <div className="space-y-1">
            <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter italic">Psicologia & Usabilidade</h2>
            <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest">Leis de UX • Heurísticas de Nielsen • Pensamento Crítico</p>
         </div>
         <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
            <button 
              onClick={() => setActiveTab('laws')}
              className={cn("px-6 py-3 rounded-xl text-[1em] font-mono font-bold transition-all", activeTab === 'laws' ? "bg-aura-comfort-oat text-dark-bg" : "text-gray-400 hover:text-white")}
            >
              LAWS OF UX
            </button>
            <button 
              onClick={() => setActiveTab('heuristics')}
              className={cn("px-6 py-3 rounded-xl text-[1em] font-mono font-bold transition-all", activeTab === 'heuristics' ? "bg-aura-comfort-green text-dark-bg" : "text-gray-400 hover:text-white")}
            >
              HEURÍSTICAS
            </button>
         </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'laws' ? (
          <motion.div 
            key="laws"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-24 pb-20"
          >
            <HickSection />
            <div className="h-px bg-white/5" />
            <FittsSection />
            <div className="h-px bg-white/5" />
            <JakobSection />
            <div className="h-px bg-white/5" />
            <MillerSection />
            <div className="h-px bg-white/5" />
            <VonRestorffSection />
            <div className="h-px bg-white/5" />
            <ProximitySection />
            
            {/* Resources Footer */}
            <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <Card title="Recurso Principal">
                  <div className="space-y-4">
                     <p className="text-[1em] text-gray-400 font-mono uppercase">Trabalho de Jon Yablonski</p>
                     <p className="text-[1em] text-white font-bold uppercase leading-tight tracking-tight">Laws of UX — Psicologia Cognitiva Aplicada</p>
                     <ExternalLinkManual title="lawsofux.com" url="https://lawsofux.com/" />
                  </div>
               </Card>
               <Card title="Literatura Base">
                  <div className="space-y-4">
                     <p className="text-[1em] text-gray-400 font-mono uppercase">O'Reilly Media</p>
                     <p className="text-[1em] text-white font-bold uppercase leading-tight tracking-tight">Using Psychology to Design Better Products</p>
                     <ExternalLinkManual title="Ver Livro" url="https://www.oreilly.com/library/view/laws-of-ux/9781492055303/" />
                  </div>
               </Card>
               <Card title="Áreas Relacionadas" className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <h6 className="text-[1em] font-mono text-aura-comfort-green uppercase font-black mb-2">Cognição</h6>
                        <p className="text-[1em] text-gray-500 font-mono leading-relaxed">Como percebemos, aprendemos e lembramos.</p>
                     </div>
                     <div>
                        <h6 className="text-[1em] font-mono text-aura-tech-cyan uppercase font-black mb-2">Comportamento</h6>
                        <p className="text-[1em] text-gray-500 font-mono leading-relaxed">Padrões de ação e tomada de decisão.</p>
                     </div>
                  </div>
               </Card>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="heuristics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-16 pb-20"
          >
            <div className="p-10 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[48px] max-w-4xl">
                <p className="text-xl text-gray-200 font-lexend font-medium leading-relaxed italic">
                   "Heurísticas são princípios gerais usados para avaliar a usabilidade de interfaces, servindo como um guia rápido para identificar problemas de design antes dos testes com usuários."
                </p>
                <div className="flex items-center gap-4 mt-8">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-aura-comfort-oat shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                      <span className="text-[1em] font-mono text-aura-tech-cyan uppercase font-bold">Jakob Nielsen</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-aura-comfort-green shadow-[0_0_10px_rgba(58,77,62,0.5)]" />
                      <span className="text-[1em] font-mono text-aura-comfort-green uppercase font-bold">Extensão 5Is</span>
                   </div>
                </div>
             </div>

             <HeuristicsSection />

             <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <h4 className="text-xl font-display font-black text-white uppercase italic">Heurísticas Adicionais (Metodologia 5Is)</h4>
                   <p className="text-[1em] text-gray-400 font-mono leading-relaxed">
                      Expandimos o modelo clássico de Nielsen para incluir pilares éticos e técnicos fundamentais na contemporaneidade, garantindo que o design não seja apenas funcional, mas justo e sustentável.
                   </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <Card title="Design Justice">
                      <p className="text-[1em] text-gray-500 font-mono leading-tight">O design como ferramenta de libertação e equidade social.</p>
                   </Card>
                   <Card title="Design para Transição">
                      <p className="text-[1em] text-gray-500 font-mono leading-tight">Projetando para sistemas de longo prazo e regeneração ambiental.</p>
                   </Card>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};















