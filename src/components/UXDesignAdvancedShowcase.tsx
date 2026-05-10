import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, MessageSquare, Zap, BookOpen, User, 
  Lightbulb, Search, Eye, AlertTriangle, CheckCircle2, XCircle, LayoutGrid
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle, icon: Icon }: any) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-aura-tech-cyan">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl lg:text-4xl font-display font-black text-white uppercase italic tracking-tighter">{title}</h3>
    </div>
    {subtitle && <p className="text-xl font-mono text-white uppercase tracking-widest pl-16 font-black italic">{subtitle}</p>}
  </div>
);

const CompareBox = ({ bad, good, title }: { bad: string, good: string, title: string }) => (
  <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/50">
    <div className="bg-white/5 p-3 border-b border-white/10">
      <h5 className="text-base font-mono text-gray-300 uppercase tracking-widest">{title}</h5>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
      <div className="p-6 bg-red-500/5 relative overflow-hidden group">
        <div className="flex items-center gap-2 mb-3 text-red-400 font-bold text-base uppercase">
          <XCircle size={20} /> Mensagem Ruim
        </div>
        <p className="text-xl font-lexend text-white font-bold italic">"{bad}"</p>
      </div>
      <div className="p-6 bg-green-500/5 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3 text-green-400 font-bold text-base uppercase">
          <CheckCircle2 size={20} /> Mensagem Melhor
        </div>
        <p className="text-xl font-lexend text-white font-black italic">"{good}"</p>
      </div>
    </div>
  </div>
);

export const UXDesignAdvancedShowcase = () => {
  return (
    <div className="space-y-32 pb-32">
      
      {/* HEADER: INTRODUÇÃO */}
      <section className="relative">
        <FadeIn>
          <div className="p-12 md:p-16 bg-[#0A0A0A] border border-white/10 rounded-[48px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none -rotate-12 scale-150">
               <Brain size={400} />
            </div>
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-lexend font-black text-white tracking-tighter uppercase mb-6 leading-none">
                Boas Práticas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-tech-cyan to-aura-tech-blue">UX Design</span>
              </h2>
              <p className="text-2xl text-white font-lexend leading-relaxed mb-8 border-l-4 border-aura-tech-cyan pl-6 font-medium italic">
                O UX Design é um campo interdisciplinar que funde a Interação Humano-Computador, cognição, emoção e arquitetura de sistemas. Conforme proposto por <strong>Donald Norman</strong>, a experiência do usuário transcende a interface visual: ela envolve a jornada cognitiva completa, afetiva e funcional entre o ser humano e a máquina.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* UX VS USABILITY */}
      <section>
        <FadeIn>
          <SectionTitle title="UX Design vs. Usabilidade" subtitle="Além da eficiência operacional" icon={Zap} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/[0.04] border border-white/10 rounded-3xl hover:bg-white/[0.06] transition-colors">
              <h4 className="text-3xl font-display font-black text-white mb-4 uppercase italic">Usabilidade</h4>
              <p className="text-xl text-white font-lexend leading-relaxed mb-6 font-bold">
                Ligada à <strong>eficiência, clareza, curva de aprendizado e redução de erros</strong>. Um sistema pode ser altamente utilizável, mas incrivelmente chato ou desprovido de significado emocional.
              </p>
              <ul className="space-y-3 text-xl font-mono text-white font-black italic">
                <li className="flex gap-3"><CheckCircle2 size={24} className="text-white"/> Foco na performance e tarefa.</li>
                <li className="flex gap-3"><CheckCircle2 size={24} className="text-white"/> Redução de fricção mecânica.</li>
                <li className="flex gap-3"><CheckCircle2 size={24} className="text-white"/> Avaliação métrica (tempo, cliques).</li>
              </ul>
            </div>
            <div className="p-8 bg-aura-tech-cyan/10 border border-aura-tech-cyan/30 rounded-3xl">
              <h4 className="text-3xl font-display font-black text-white mb-4 uppercase italic">UX Design</h4>
              <p className="text-xl text-white font-lexend leading-relaxed mb-6 font-black">
                Amplia a perspectiva ao considerar <strong>emoções, subjetividade, prazer, valores e vínculo afetivo</strong>. Interaction Design busca apoiar experiências cotidianas mediadas pela tecnologia.
              </p>
              <ul className="space-y-3 text-xl font-mono text-aura-tech-cyan font-black italic">
                <li className="flex gap-3"><CheckCircle2 size={24} className="text-aura-tech-cyan"/> Foco no estado emocional e memória.</li>
                <li className="flex gap-3"><CheckCircle2 size={24} className="text-aura-tech-cyan"/> Significado e identidade do produto.</li>
                <li className="flex gap-3"><CheckCircle2 size={24} className="text-aura-tech-cyan"/> Referência: Preece, Rogers & Sharp.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PRINCÍPIOS BÁSICOS */}
      <section>
        <FadeIn>
          <SectionTitle title="Princípios Básicos" subtitle="Heurísticas e Arquitetura Cognitiva" icon={LayoutGrid} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { t: "Feedback", d: "Retorno imediato do sistema sobre a ação do usuário.", a: "Evita cliques duplos e ansiedade (Ex: Loaders)." },
              { t: "Consistência", d: "Manter padrões internos e externos inalterados.", a: "Reduz curva de aprendizado." },
              { t: "Affordance", d: "O visual sugere exatamente como interagir.", a: "Um botão deve parecer clicável e em relevo." },
              { t: "Hierarquia Visual", d: "Organização por peso visual e contraste.", a: "Guia o olhar para a ação principal (CTA)." },
              { t: "Visibilidade", d: "Elementos essenciais não devem estar ocultos.", a: "Evitar menus complexos para ações primárias." },
              { t: "Prevenção de Erros", d: "Evitar que o erro aconteça antes dele ocorrer.", a: "Desabilitar botões de envio até o formulário estar preenchido." },
              { t: "Reconhecimento", d: "É mais fácil reconhecer do que lembrar.", a: "Oferecer histórico de buscas recentes." },
              { t: "Controle do Usuário", d: "Permitir saídas de emergência e desfazer ações.", a: "Função 'Ctrl+Z' ou botão cancelar visível." },
              { t: "Carga Cognitiva", d: "Quantidade de esforço mental exigido.", a: "Dividir formulários longos em passos (Chunking)." },
              { t: "Acessibilidade", d: "Design inclusivo para todos os contextos.", a: "Contraste AAA, suporte a leitores de tela." },
              { t: "Clareza Informacional", d: "Arquitetura de dados sem ambiguidade.", a: "Nomenclatura clara e direta de labels." }
            ].map((p, i) => (
              <div key={i} className="p-8 bg-[#080808] border border-white/20 rounded-3xl hover:border-aura-tech-cyan transition-all shadow-xl">
                <h5 className="text-2xl font-display font-black text-white mb-3 uppercase italic tracking-tighter border-b border-white/10 pb-2">{p.t}</h5>
                <p className="text-xl font-lexend text-white mb-4 font-bold leading-tight">{p.d}</p>
                <div className="pt-4 border-t border-white/10 text-lg font-mono text-aura-tech-cyan font-black italic">
                   <span className="text-white/60 uppercase text-xs tracking-widest block mb-1">Aplicação Prática:</span> {p.a}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* DESIGN EMOCIONAL */}
      <section>
        <FadeIn>
          <div className="p-12 bg-gradient-to-br from-[#0A0A0A] to-aura-comfort-oat/5 border border-white/10 rounded-[48px] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <Heart size={300} />
             </div>
             <SectionTitle title="Design Emocional" subtitle="A Teoria de Donald Norman" icon={Heart} />
             
             <div className="space-y-8 max-w-4xl relative z-10">
                 <p className="text-2xl text-white font-lexend leading-relaxed font-black italic">
                   As emoções afetam diretamente a percepção de qualidade, confiança e tomada de decisão. O vínculo afetivo determina se o usuário abandona ou defende o produto digital.
                 </p>
                 <div className="space-y-6">
                  <div className="p-8 bg-white/5 border border-white/20 rounded-3xl flex gap-8 items-start hover:bg-white/[0.08] transition-colors">
                     <div className="p-4 bg-white/10 rounded-2xl mt-1 shadow-lg"><Eye size={28} className="text-white"/></div>
                     <div>
                       <h5 className="text-3xl font-display font-black text-white mb-3 uppercase italic">1. Design Visceral</h5>
                       <p className="text-xl text-white font-lexend font-black italic leading-relaxed">O impacto imediato. A aparência, sensação inicial estética e resposta intuitiva biológica que faz o usuário pensar: "Que interface linda e confiável."</p>
                     </div>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/20 rounded-3xl flex gap-8 items-start hover:bg-white/[0.08] transition-colors">
                     <div className="p-4 bg-white/10 rounded-2xl mt-1 shadow-lg"><Zap size={28} className="text-white"/></div>
                     <div>
                       <h5 className="text-3xl font-display font-black text-white mb-3 uppercase italic">2. Design Comportamental</h5>
                       <p className="text-xl text-white font-lexend font-black italic leading-relaxed">O uso prático. O desempenho, eficiência, funcionalidade tátil e o prazer físico de completar uma tarefa sem interrupções frustrantes.</p>
                     </div>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/20 rounded-3xl flex gap-8 items-start hover:bg-white/[0.08] transition-colors">
                     <div className="p-4 bg-white/10 rounded-2xl mt-1 shadow-lg"><Brain size={28} className="text-white"/></div>
                     <div>
                       <h5 className="text-3xl font-display font-black text-white mb-3 uppercase italic">3. Design Reflexivo</h5>
                       <p className="text-xl text-white font-lexend font-black italic leading-relaxed">A memória e o superego. O significado cultural, a identidade que o produto confere a quem usa, a lembrança afetiva após desligar a tela.</p>
                     </div>
                  </div>
                </div>
              </div>
          </div>
        </FadeIn>
      </section>

      {/* UX WRITING */}
      <section>
        <FadeIn>
          <SectionTitle title="UX Writing" subtitle="O texto também é interface" icon={MessageSquare} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-2xl text-white font-lexend leading-relaxed mb-6 font-medium italic border-l-4 border-aura-tech-cyan pl-6">
                Reduzir ansiedade e usar linguagem humana. UX Writing é o uso intencional de <strong>microcopy</strong> (labels, placeholders, mensagens de erro, estados vazios e onboarding) para orientar ações com extrema objetividade e empatia.
              </p>
              <ul className="space-y-3 text-xl font-mono text-white font-black italic">
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-aura-tech-cyan"/> Escrever de forma objetiva.</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-aura-tech-cyan"/> Evitar jargões técnicos do servidor.</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={24} className="text-aura-tech-cyan"/> Orientar ações e criar confiança.</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <CompareBox 
                title="Mensagem de Erro"
                bad="Erro 404 no processamento da solicitação do servidor AWS."
                good="Não conseguimos encontrar esta página. Verifique o link digitado."
              />
              <CompareBox 
                title="Microcopy de Botão (CTA)"
                bad="Enviar"
                good="Salvar projeto"
              />
              <CompareBox 
                title="Estado Vazio (Empty State)"
                bad="Nenhum item encontrado no banco de dados."
                good="Você ainda não criou nenhum projeto. Que tal começar um agora?"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PROCESSO E 5I'S */}
      <section>
        <FadeIn>
          <SectionTitle title="A Jornada do Projeto" subtitle="Alinhamento com a Metodologia 5I's" icon={Lightbulb} />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-8 hover:bg-white/[0.04] transition-colors">
                 <span className="text-lg font-mono text-aura-tech-cyan uppercase tracking-widest block mb-4 font-black">1. Ideação</span>
                 <h5 className="text-2xl font-display font-black text-white mb-2 uppercase italic">Descoberta</h5>
                 <p className="text-xl font-lexend text-white font-bold leading-tight">Pesquisa com usuários, construção de Personas, mapeamento de Jornadas da experiência e Arquitetura da Informação.</p>
              </div>
              <div className="p-8 hover:bg-white/[0.04] transition-colors">
                 <span className="text-lg font-mono text-aura-tech-cyan uppercase tracking-widest block mb-4 font-black">2. Instauração</span>
                 <h5 className="text-2xl font-display font-black text-white mb-2 uppercase italic">Estrutura</h5>
                 <p className="text-xl font-lexend text-white font-bold leading-tight">Desenvolvimento de fluxogramas lógicos, Wireframes de baixa fidelidade e esqueleto de navegação do sistema.</p>
              </div>
              <div className="p-8 hover:bg-white/[0.04] transition-colors">
                 <span className="text-lg font-mono text-aura-tech-cyan uppercase tracking-widest block mb-4 font-black">3. Instauração</span>
                 <h5 className="text-2xl font-display font-black text-white mb-2 uppercase italic">Prototipagem</h5>
                 <p className="text-xl font-lexend text-white font-bold leading-tight">Design de Interação e UI Design aplicados a protótipos de alta fidelidade e componentes interativos.</p>
              </div>
              <div className="p-8 hover:bg-white/[0.04] transition-colors">
                 <span className="text-lg font-mono text-aura-tech-cyan uppercase tracking-widest block mb-4 font-black">4. Inspeção</span>
                 <h5 className="text-2xl font-display font-black text-white mb-2 uppercase italic">Validação</h5>
                 <p className="text-xl font-lexend text-white font-bold leading-tight">Testes de usabilidade com humanos, iteração do design baseada em feedback empírico e correção heurística.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* REFERÊNCIAS */}
      <section>
        <FadeIn>
          <SectionTitle title="Referências Fundamentais" subtitle="Autores e Bibliografia Essencial" icon={BookOpen} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Autores */}
            <div>
              <h4 className="text-lg font-mono text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Grandes Autores</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Donald Norman", "Jennifer Preece", "Yvonne Rogers", "Helen Sharp",
                  "Jakob Nielsen", "Jesse James Garrett", "Peter Morville", "Alan Cooper",
                  "Dan Saffer", "Travis Lowdermilk", "Fabrício Teixeira", "Brenda Laurel"
                ].map((author, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-base font-lexend text-gray-200">
                    {author}
                  </span>
                ))}
              </div>
            </div>

            {/* Livros */}
            <div>
              <h4 className="text-lg font-mono text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Livros Essenciais</h4>
              <ul className="space-y-4">
                {[
                  { t: "The Design of Everyday Things", d: "A bíblia da usabilidade funcional." },
                  { t: "Emotional Design", d: "Por que amamos ou odiamos objetos cotidianos." },
                  { t: "Interaction Design — Beyond HCI", d: "A base acadêmica definitiva (Preece, Rogers, Sharp)." },
                  { t: "The Elements of User Experience", d: "A divisão do UX em 5 planos lógicos." },
                  { t: "Don’t Make Me Think", d: "O senso comum aplicado à navegação web." },
                  { t: "About Face", d: "Essencial para design de interação contemporâneo." },
                  { t: "Writing is Designing", d: "O impacto das palavras na interface." },
                  { t: "Laws of UX", d: "Psicologia da cognição aplicada ao UI." }
                ].map((book, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-base font-bold text-white italic">"{book.t}"</span>
                    <span className="text-base font-mono text-gray-300">{book.d}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </FadeIn>
      </section>

    </div>
  );
};
