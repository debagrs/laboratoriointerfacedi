import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Eye, 
  MessageSquare, 
  ClipboardCheck, 
  Timer, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  FileText, 
  BarChart3, 
  Search, 
  Mic, 
  Zap, 
  Layout, 
  Smartphone, 
  ExternalLink,
  ChevronDown,
  Info,
  BookOpen,
  Settings,
  ShieldCheck,
  Globe,
  Monitor,
  Activity,
  UserCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Shared Internal Components ---

const TechLabel = ({ children, color = "green", className }: { children: React.ReactNode, color?: "green" | "cyan" | "white" | "amber" | "red", className?: string }) => (
  <span className={cn(
    "text-[1em] font-mono px-2 py-0.5 rounded border uppercase tracking-widest leading-none inline-block",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "white" && "text-white border-white/30 bg-white/5",
    color === "amber" && "text-aura-comfort-clay border-aura-comfort-clay/30 bg-aura-comfort-clay/5",
    color === "red" && "text-red-500 border-red-500/30 bg-red-500/5",
    className
  )}>
    {children}
  </span>
);

const SectionHeader = ({ title, subtitle, icon: Icon, colorClass = "text-aura-comfort-green" }: { title: string, subtitle?: string, icon: any, colorClass?: string }) => (
  <div className="flex flex-col gap-2 mb-10">
     <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]", colorClass)}>
           <Icon size={20} />
        </div>
        <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter italic leading-none">{title}</h3>
     </div>
     {subtitle && <p className="text-[1em] font-mono text-gray-400 uppercase tracking-widest ml-12">{subtitle} </p>}
  </div>
);

const Card = ({ children, className, title, id }: { children: React.ReactNode, className?: string, title?: string, id?: string }) => (
  <div id={id} className={cn("p-8 bg-aura-tech-blue/40 border border-white/10 rounded-[32px] relative overflow-hidden group hover:border-white/20 transition-all", className)}>
    {title && (
      <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-aura-comfort-green" />
        <h4 className="text-[1em] font-mono font-bold text-gray-400 uppercase tracking-widest">{title}</h4>
      </div>
    )}
    {children}
  </div>
);

const ComparisonCard = ({ title, items, isError = false }: { title: string, items: string[], isError?: boolean }) => (
  <Card title={title} className={cn(isError ? "bg-red-500/[0.02] border-red-500/10" : "bg-aura-comfort-green/[0.02] border-aura-comfort-green/10")}>
     <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[1em] font-mono text-gray-300 leading-relaxed">
             {isError ? <XCircle size={14} className="text-red-500 shrink-0 mt-0.5" /> : <CheckCircle2 size={14} className="text-aura-comfort-green shrink-0 mt-0.5" />}
             {item}
          </li>
        ))}
     </ul>
  </Card>
);

const ExternalLinkManual = ({ title, url }: { title: string, url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-aura-comfort-green/10 hover:border-aura-comfort-green/40 transition-all group/link">
    <span className="text-[1em] font-mono text-gray-400 group-hover/link:text-white uppercase tracking-tighter">{title}</span>
    <ExternalLink size={12} className="text-gray-600 group-hover/link:text-aura-comfort-green" />
  </a>
);

// --- Section Modules ---

const IntroductionModule = () => (
   <div className="space-y-12">
      <SectionHeader 
        icon={Users}
        title="O que são Testes de Uso"
        subtitle="Validação • Comportamento • Experiência Humana"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <p className="text-xl text-gray-200 font-mono leading-relaxed italic">
               Testes de uso são métodos de avaliação onde pessoas <span className="text-aura-comfort-green font-black uppercase tracking-widest not-italic">reais</span> interagem com o sistema para identificar barreiras cognitivas e falhas de comunicação.
            </p>
            <div className="p-8 bg-aura-comfort-green/5 border border-aura-comfort-green/20 rounded-[40px] relative overflow-hidden group">
               <div className="absolute top-4 right-4 text-aura-comfort-green/10"><BarChart3 size={80} /></div>
               <h5 className="text-lg font-display font-black text-white uppercase italic mb-4">O Foco não é o Usuário</h5>
               <p className="text-[1em] text-gray-400 font-mono leading-relaxed relative z-10">
                 Não estamos "testando o usuário" para ver se ele é inteligente. Estamos <span className="text-white font-bold">testando a interface</span> para ver se ela é capaz de comunicar suas funções e auxiliar o usuário a atingir seus objetivos de forma eficiente e satisfatória.
               </p>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
               { icon: AlertCircle, t: "Barreiras", d: "Pontos onde o fluxo é interrompido por confusão." },
               { icon: Timer, t: "Eficiência", d: "Tempo necessário para completar tarefas críticas." },
               { icon: Activity, t: "Emoção", d: "Nível de frustração ou satisfação durante o uso." },
               { icon: Eye, t: "Escaneabilidade", d: "Capacidade do usuário encontrar o que busca." }
            ].map(item => (
               <div key={item.t} className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-aura-comfort-green/30 transition-all border-l-2 border-l-aura-comfort-green/40">
                  <div className="text-aura-comfort-green mb-3"><item.icon size={20} /></div>
                  <h6 className="text-[1em] font-mono font-black text-white uppercase tracking-widest mb-1">{item.t}</h6>
                  <p className="text-[1em] text-gray-400 font-mono leading-tight">{item.d}</p>
               </div>
            ))}
         </div>
      </div>
   </div>
);

const PreeceFramework = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader 
       icon={Layout}
       title="Framework de Avaliação"
       subtitle="Preece, Rogers & Sharp • Processo Iterativo"
     />

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
           <TechLabel color="cyan">Interacion Design (Preece et al.)</TechLabel>
           <h4 className="text-2xl font-display font-bold text-white uppercase italic leading-tight">Avaliação como Investigação</h4>
           <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
             Para Preece, Rogers e Sharp, a avaliação não é um evento final isolado, mas sim um processo <span className="text-aura-tech-cyan font-bold">contínuo e iterativo</span> integrado ao ciclo de vida do design.
           </p>
           
           <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group">
                 <div className="w-10 h-10 rounded-full bg-aura-comfort-oat/20 flex items-center justify-center text-aura-tech-cyan shrink-0 group-hover:scale-110 transition-transform">
                    <Zap size={18} />
                 </div>
                 <div>
                    <h6 className="text-[1em] font-bold text-white uppercase">Avaliação Formativa</h6>
                    <p className="text-[1em] text-gray-500 font-mono">Ocorre durante o projeto para guiar decisões.</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group">
                 <div className="w-10 h-10 rounded-full bg-aura-comfort-green/20 flex items-center justify-center text-aura-comfort-green shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                 </div>
                 <div>
                    <h6 className="text-[1em] font-bold text-white uppercase">Avaliação Somativa</h6>
                    <p className="text-[1em] text-gray-500 font-mono">Ocorre ao final para validar o desempenho e métricas.</p>
                 </div>
              </div>
           </div>
        </div>

        <Card title="As 4 Perguntas Fundamentais">
           <div className="grid grid-cols-1 gap-4">
              {[
                "1. O sistema funciona como esperado?",
                "2. As pessoas entendem as affordances?",
                "3. Usuários conseguem atingir seus objetivos?",
                "4. A interação gera satisfação emocional?"
              ].map((q, i) => (
                <div key={i} className="p-4 bg-black/40 border border-white/5 rounded-xl border-l-2 border-l-aura-comfort-oat">
                   <p className="text-[1em] font-mono text-gray-200">{q}</p>
                </div>
              ))}
           </div>
           <div className="mt-8">
              <ExternalLinkManual title="Interaction-Design.org (Preece)" url="https://www.interaction-design.org/literature/book/the-glossary-of-human-computer-interaction" />
           </div>
        </Card>
     </div>
  </div>
);

const ThinkAloudModule = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader 
       icon={Mic}
       title="Método Think Aloud"
       subtitle="Revelando o Raciocínio Invisível • Nielsen & Preece"
     />

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[48px] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-aura-comfort-green/5"><Mic size={200} /></div>
              <p className="text-lg text-gray-200 font-mono leading-relaxed italic mb-8 relative z-10">
                "Peça aos usuários que falem em voz alta tudo o que estão pensando enquanto executam as tarefas. Isso revela não apenas o que eles fazem, mas o <span className="text-aura-comfort-green font-bold">porquê</span> de o fazerem."
              </p>
              <div className="flex gap-4">
                 <TechLabel color="green">Jakob Nielsen</TechLabel>
                 <TechLabel color="cyan">Observação Direta</TechLabel>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                 <h5 className="text-[1em] font-mono text-aura-comfort-green uppercase font-black tracking-widest">Protocolo de Aplicação</h5>
                 {[
                   { n: "01", t: "Tarefas Reais", d: "Cenários objetivos sem indução de resposta." },
                   { n: "02", t: "Verbalização", d: "Incentivo constante para o usuário soltar seus pensamentos." },
                   { n: "03", t: "Não Interferência", d: "O moderador nunca deve explicar a interface durante o teste." },
                   { n: "04", t: "Registro Bruto", d: "Gravação de áudio, vídeo e notas de hesitação." }
                 ].map(step => (
                   <div key={step.n} className="flex gap-4">
                      <span className="text-aura-comfort-green font-mono font-bold">{step.n}</span>
                      <div className="space-y-1">
                         <h6 className="text-[1em] font-mono font-black text-white uppercase">{step.t}</h6>
                         <p className="text-[1em] text-gray-500 font-mono leading-tight">{step.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="space-y-4">
                 <h5 className="text-[1em] font-mono text-aura-tech-cyan uppercase font-black tracking-widest">Exemplos de Falas para Observar</h5>
                 <div className="space-y-3">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-[1em] font-mono text-red-400 italic">"Ué, achei que clicando aqui voltava..."</div>
                    <div className="p-3 bg-aura-comfort-green/10 border border-aura-comfort-green/20 rounded-xl text-[1em] font-mono text-aura-comfort-green italic">"Ah! Agora entendi onde estão as opções."</div>
                    <div className="p-3 bg-aura-comfort-oat/10 border border-aura-comfort-oat/20 rounded-xl text-[1em] font-mono text-aura-tech-cyan italic">"Não sei se o que eu fiz salvou minhas alterações."</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <Card title="Dashboard de Observação">
              <div className="space-y-6">
                 <div className="space-y-2">
                    <div className="flex justify-between text-[1em] font-mono uppercase">
                       <span className="text-gray-500">Hesitação</span>
                       <span className="text-amber-500">Alta</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} className="h-full bg-amber-500" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-[1em] font-mono uppercase">
                       <span className="text-gray-500">Erros por Tarefa</span>
                       <span className="text-red-500">3.4</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} className="h-full bg-red-500" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-[1em] font-mono uppercase">
                       <span className="text-gray-500">Satisfação</span>
                       <span className="text-aura-comfort-green">82%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} className="h-full bg-aura-comfort-green" />
                    </div>
                 </div>
                 <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-center text-[1em] font-mono text-gray-500">
                    <div>Cliques: <span className="text-white">142</span></div>
                    <div>Tempo: <span className="text-white">12:40m</span></div>
                 </div>
              </div>
           </Card>
           <div className="p-6 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-3xl space-y-4">
              <div className="flex items-center gap-2">
                 <Info size={16} className="text-aura-tech-cyan" />
                 <h6 className="text-[1em] font-mono text-white uppercase font-black">Por que Testar?</h6>
              </div>
              <p className="text-[1em] text-gray-400 font-mono leading-relaxed italic">
                 "Uma interface aparentemente bonita pode falhar quando colocada diante de usuários reais. O design estético não garante usabilidade."
              </p>
           </div>
        </div>
     </div>
  </div>
);

const LowdermilkSimpleTests = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader 
       icon={Zap}
       title="Testes Simples & Contínuos"
       subtitle="Travis Lowdermilk • Low Cost UX"
     />

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
           <div className="space-y-4">
              <h4 className="text-2xl font-display font-bold text-white uppercase italic leading-tight tracking-tight">"Teste cedo. Teste sempre."</h4>
              <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
                 Travis Lowdermilk defende que o design centrado no usuário não precisa de Laboratórios complexos. <span className="text-aura-comfort-green font-bold italic">5 usuários</span> já são capazes de revelar cerca de 85% dos problemas de usabilidade mais críticos.
              </p>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Papel e Protótipo", d: "Valide conceitos antes mesmo de escrever código." },
                { t: "Iteração Rápida", d: "Teste, aprenda, corrija e teste de novo no mesmo dia." }
              ].map(p => (
                <div key={p.t} className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                   <h6 className="text-[1em] font-mono text-aura-comfort-green uppercase font-black mb-2">{p.t}</h6>
                   <p className="text-[1em] text-gray-500 font-mono leading-relaxed">{p.d}</p>
                </div>
              ))}
           </div>
        </div>

        <Card title="Fluxo de Execução Simplificado">
           <div className="relative pl-8 space-y-8">
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-white/10" />
              {[
                { t: "Introdução", d: "Explique o objetivo do estudo sem induzir respostas ou explicar a solução." },
                { n: 2, t: "Cenário e Tarefas", d: "Situe o usuário em uma situação real (ex: 'Você precisa comprar um presente')." },
                { n: 3, t: "Observação Silenciosa", d: "Apenas observe o comportamento, registre as hesitações e o fluxo." },
                { n: 4, t: "Entrevista Pós-Execução", d: "Pergunte o que foi difícil e o que ele esperava encontrar mas não viu." }
              ].map((step, i) => (
                <div key={i} className="relative">
                   <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-aura-comfort-oat shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                   <h6 className="text-[1em] font-mono text-aura-tech-cyan uppercase font-bold mb-1">{step.t}</h6>
                   <p className="text-[1em] text-gray-400 font-mono leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </Card>
     </div>
  </div>
);

const FormTemplates = () => (
  <div className="py-24 border-t border-white/10 space-y-12">
     <SectionHeader 
       icon={ClipboardCheck}
       title="Templates & Métricas"
       subtitle="Modelos de Documentação • Coleta de Dados"
     />

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
           <TechLabel color="white">Pré-Teste</TechLabel>
           <div className="p-6 bg-black/40 border border-white/10 rounded-[32px] space-y-4">
              <div className="space-y-2">
                 <div className="h-2 w-12 bg-gray-700 rounded" />
                 <div className="h-6 w-full bg-white/5 border border-white/5 rounded" />
              </div>
              <div className="space-y-2">
                 <div className="h-2 w-20 bg-gray-700 rounded" />
                 <div className="h-6 w-full bg-white/5 border border-white/5 rounded" />
              </div>
              <div className="space-y-2">
                 <div className="h-2 w-16 bg-gray-700 rounded" />
                 <div className="h-20 w-full bg-white/5 border border-white/5 rounded" />
              </div>
              <p className="text-[1em] font-mono text-gray-600 italic">Objetivo: Mapear o perfil e repertório tecnológico do participante.</p>
           </div>
        </div>

        <div className="space-y-4">
           <TechLabel color="cyan">Observação Bruta</TechLabel>
           <div className="p-6 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-[32px] space-y-4 relative overflow-hidden">
              <div className="absolute top-2 right-4 text-[1em] font-mono text-aura-tech-cyan/40">TIMESTAMP: 04:32</div>
              <div className="space-y-3">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-aura-comfort-green" />
                    <span className="text-[1em] font-mono text-gray-300">Tarefa 01: Concluída com Erros</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <AlertCircle size={10} className="text-amber-500" />
                    <span className="text-[1em] font-mono text-gray-300">Hesitação no menu flutuante</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <MessageSquare size={10} className="text-aura-tech-cyan" />
                    <span className="text-[1em] font-mono text-gray-400 italic">"Cadê o botão de voltar?"</span>
                 </div>
              </div>
              <div className="pt-2">
                 <div className="h-10 w-full bg-black/40 rounded border border-white/10 text-[1em] p-2 text-gray-500 italic">Notas rápidas do pesquisador...</div>
              </div>
           </div>
        </div>

        <div className="space-y-4">
           <TechLabel color="green">Métricas (SUS Score)</TechLabel>
           <div className="p-6 bg-aura-comfort-green/5 border border-aura-comfort-green/20 rounded-[32px] space-y-4 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-aura-comfort-green flex items-center justify-center">
                 <span className="text-3xl font-display font-black text-white">78</span>
              </div>
              <div>
                 <h6 className="text-[1em] font-mono text-aura-comfort-green uppercase font-black">Score Usabilidade</h6>
                 <p className="text-[1em] text-gray-500 font-mono italic">System Usability Scale (SUS)</p>
              </div>
              <p className="text-[1em] text-gray-400 font-mono leading-tight">Média acima de 68 é considerada aceitável para sistemas digitais.</p>
           </div>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <ComparisonCard 
          title="Boas Práticas"
          items={[
            "Testar com protótipos de baixa fidelidade primeiro.",
            "Gravar a tela e as expressões do usuário.",
            "Garantir um ambiente confortável e silencioso.",
            "Não ajudar ou dar dicas durante a tarefa.",
            "Sempre testar acessibilidade com leitores de tela.",
            "Cruzar dados qualitativos com métricas quantitativas."
          ]}
        />
        <ComparisonCard 
          title="Erros Fatais"
          isError
          items={[
            "Explicar como a interface funciona antes do teste.",
            "Guiar o usuário em direção à resposta correta.",
            "Ignorar o comportamento de usuários com deficiência.",
            "Fazer perguntas que induzam opiniões positivas.",
            "Testar apenas no final do desenvolvimento.",
            "Acreditar que 'eu sou o usuário' e não testar nada."
          ]}
        />
     </div>
  </div>
);

const MethodologyRelation = () => (
   <div className="py-24 border-t border-white/10 space-y-12">
      <SectionHeader 
        icon={Settings}
        title="Relação com a Metodologia 5I's"
        subtitle="O Teste em cada Fase do Processo"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { f: "Ideação", t: "Compreensão", d: "Pesquisas exploratórias para entender dores e necessidades." },
           { f: "Inambulação", t: "Levantamento", d: "Avaliações heurísticas e identificação de gaps visuais." },
           { f: "InstAuração", t: "Protótipos", d: "Validação de fluxos, IA e arquitetura da informação inicial." },
           { f: "Inspeção", t: "Refinamento", d: "Testes iterativos (Think Aloud) e polimento final." }
         ].map(phase => (
           <div key={phase.f} className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl space-y-4">
              <h5 className="text-[1em] font-mono font-black text-aura-comfort-green uppercase tracking-widest">{phase.f}</h5>
              <div>
                 <h6 className="text-[1em] font-bold text-white uppercase mb-1">{phase.t}</h6>
                 <p className="text-[1em] text-gray-500 font-mono leading-tight">{phase.d}</p>
              </div>
           </div>
         ))}
      </div>
   </div>
);

// --- Content Page Component ---

export const UsabilityTestingDocumentation = () => {
  return (
    <div className="space-y-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <IntroductionModule />
        <PreeceFramework />
        <ThinkAloudModule />
        <LowdermilkSimpleTests />
        <FormTemplates />
        <MethodologyRelation />
        
        {/* Footer Resources */}
        <div className="py-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="space-y-6">
              <h4 className="text-xl font-display font-black text-white uppercase italic">Literatura Essencial</h4>
              <div className="space-y-2">
                 {[
                   { t: "Interaction Design", a: "Preece, Rogers & Sharp" },
                   { t: "User-Centered Design", a: "Travis Lowdermilk" },
                   { t: "Don't Make Me Think", a: "Steve Krug" },
                   { t: "Rocket Surgery Made Easy", a: "Steve Krug" }
                 ].map(book => (
                   <div key={book.t} className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center group hover:border-aura-comfort-green/30 transition-all">
                      <span className="text-[1em] font-mono text-white font-bold uppercase">{book.t}</span>
                      <span className="text-[1em] font-mono text-gray-500">{book.a}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="space-y-6">
              <h4 className="text-xl font-display font-black text-white uppercase italic">Links & Ferramentas</h4>
              <div className="grid grid-cols-1 gap-3">
                 <ExternalLinkManual title="NNGroup: Usability Testing" url="https://www.nngroup.com/topic/usability-testing/" />
                 <ExternalLinkManual title="Usability.gov Frameworks" url="https://www.usability.gov/" />
                 <ExternalLinkManual title="W3C Accessibility Testing" url="https://www.w3.org/WAI/test-evaluate/" />
              </div>
           </div>

           <div className="p-8 bg-aura-comfort-green/5 border border-aura-comfort-green/20 rounded-[48px] flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3">
                 <ShieldCheck className="text-aura-comfort-green" size={20} />
                 <h5 className="text-white font-bold uppercase tracking-widest text-[1em] italic">Cultura do Teste</h5>
              </div>
              <p className="text-[1em] text-gray-300 font-mono leading-relaxed">
                 Um Laboratório de interfaces só é real se houver a <span className="text-aura-comfort-green font-bold">cultura da escuta</span>. O design invisível morre no isolamento; ele só floresce quando entra em contato com o mundo real.
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
};















