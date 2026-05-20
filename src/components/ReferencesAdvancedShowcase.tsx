import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { BookOpen, Network, Database, Cpu, Globe2, Fingerprint, Sparkles, Layers, ArrowUpRight, Hexagon, BrainCircuit } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const MetaTag = ({ children, color = 'gray' }: any) => {
  const colors = {
    gray: 'border-gray-500/80 text-gray-200',
    oat: 'border-[#D2A979]/80 text-[#D2A979]',
    clay: 'border-[#F48A79]/80 text-[#F48A79]',
    green: 'border-[#86EFAC]/80 text-[#86EFAC]',
  };
  return (
    <span className={cn("text-lg uppercase font-mono tracking-widest px-4 py-2 rounded-full border bg-black/50", colors[color])}>
      {children}
    </span>
  );
};

export const ReferencesAdvancedShowcase = () => {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-[#D2A979] selection:text-black">
      
      {/* 1. HERO SECTION CINEMATOGRÁFICA */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Cinematic Blur Background */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-[#D2A979]/5 rounded-full blur-[120px] mix-blend-screen" />
           <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#86EFAC]/5 rounded-full blur-[100px] mix-blend-screen" />
           {/* Noise Overlay */}
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 mt-20">
          <FadeIn>
            <MetaTag color="oat">Atlas do Design Contemporâneo</MetaTag>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] italic mix-blend-difference">
              Designing <br /> Human Futures
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-200 font-lexend max-w-2xl mx-auto leading-relaxed">
              UX, interfaces, sistemas e inteligência em um mundo pós-interface.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="pt-12">
            <div className="w-[1px] h-32 bg-gradient-to-b from-gray-500 to-transparent mx-auto opacity-50" />
          </FadeIn>
        </div>
      </section>

      {/* 2. CAMADA 1 — FUNDAÇÃO (Dark Swiss Modernism) */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] text-white relative border-t border-white/5">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col justify-between">
               <FadeIn>
                 <MetaTag color="gray">01. Epistemologia</MetaTag>
                 <h2 className="text-5xl font-lexend font-black tracking-tighter uppercase mt-6 mb-4 leading-none text-white">A Fundação</h2>
                 <p className="font-mono text-lg uppercase tracking-widest text-gray-300 mb-8 font-bold">Racional. Estrutural. Suíça.</p>
                 <p className="text-xl font-lexend leading-relaxed text-white">
                   A base do pensamento de design moderno: da usabilidade clássica à visualização quantitativa. Estruturas que organizam a entropia informacional humana.
                 </p>
               </FadeIn>
               <FadeIn delay={0.3} className="hidden lg:block">
                  <div className="w-full h-[1px] bg-white/20 my-8" />
                  <p className="text-lg font-mono uppercase text-gray-300 font-bold">"The Design of Everyday Things"</p>
               </FadeIn>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { author: "Don Norman", work: "Design of Everyday Things", tag: "Cognição", link: "https://www.amazon.com.br/Design-Everyday-Things-Revised-Expanded/dp/0465050654" },
                 { author: "Edward Tufte", work: "Visual Display of Quantitative Info", tag: "Dados", link: "https://www.amazon.com/Visual-Display-Quantitative-Information/dp/1930824130" },
                 { author: "Jakob Nielsen", work: "Usability Engineering", tag: "Heurísticas", link: "https://www.nngroup.com/books/usability-engineering/" },
                 { author: "Alan Cooper", work: "About Face", tag: "Interação", link: "https://www.amazon.com.br/About-Face-Essentials-Interaction-Design/dp/1118766571" },
                 { author: "Brenda Laurel", work: "Computers as Theatre", tag: "Drama", link: "https://www.amazon.com/Computers-Theatre-2nd-Brenda-Laurel/dp/0321918622" },
                 { author: "Jesse James Garrett", work: "Elements of User Experience", tag: "Arquitetura", link: "https://www.amazon.com.br/Elements-User-Experience-User-Centered-Design/dp/0321683684" },
               ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i} className="h-full">
                     <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-[#141414] border border-white/5 p-10 hover:bg-[#1A1A1A] hover:border-[#D2A979]/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[240px] rounded-2xl block h-full">
                        <div className="flex justify-between items-start">
                           <span className="text-lg font-mono border border-white/20 px-3 py-1 rounded uppercase tracking-widest text-gray-200 group-hover:text-black group-hover:bg-[#D2A979] transition-all font-bold">{item.tag}</span>
                           <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 text-[#D2A979]" />
                        </div>
                        <div className="mt-8">
                           <p className="text-lg font-mono text-gray-300 mb-2 uppercase tracking-widest group-hover:text-[#D2A979] transition-colors">{item.author}</p>
                           <h4 className="text-2xl font-display font-black italic tracking-tight text-white">{item.work}</h4>
                        </div>
                     </a>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 3. CAMADA 2 — COGNIÇÃO E INTERAÇÃO */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] text-white relative border-t border-white/5 overflow-hidden">
         <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <BrainCircuit size={600} />
         </div>
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <FadeIn className="space-y-8">
               <MetaTag color="oat">02. Neuro-arquitetura</MetaTag>
               <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase italic text-[#D2A979]">Cognição & Interação</h2>
               <p className="text-xl text-gray-200 font-lexend leading-relaxed max-w-lg">
                 Onde a máquina encontra o cérebro. Arquitetura da informação, affordances invisíveis e o mapeamento de ecologias neurais em interfaces gráficas.
               </p>
               <div className="flex gap-4 pt-8 border-t border-white/10">
                  <div className="p-6 bg-[#D2A979] text-black rounded-xl border border-[#D2A979]">
                     <h5 className="font-bold uppercase tracking-widest text-lg mb-2">Carga Cognitiva</h5>
                     <p className="text-lg font-lexend font-bold">Chunking e redução de ruído visual.</p>
                  </div>
                  <div className="p-6 bg-black border border-[#D2A979]/50 text-[#D2A979] rounded-xl backdrop-blur-sm">
                     <h5 className="font-bold uppercase tracking-widest text-lg mb-2">Feedback Loop</h5>
                     <p className="text-lg font-lexend font-bold">Respostas sistêmicas à ação humana.</p>
                  </div>
               </div>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 content-center">
               <FadeIn delay={0.2} className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:border-white/30 transition-all flex justify-between items-center group">
                  <div>
                    <h4 className="text-2xl font-bold font-lexend mb-1 text-white group-hover:text-[#D2A979] transition-colors">Dan Saffer</h4>
                    <p className="text-lg font-mono text-gray-300 uppercase">Microinteractions</p>
                  </div>
                  <ArrowUpRight size={28} className="text-gray-400 group-hover:text-[#D2A979] transition-colors" />
               </FadeIn>
               <FadeIn delay={0.3} className="p-8 border border-white/20 bg-black rounded-3xl hover:border-white/50 transition-all flex justify-between items-center group">
                  <div>
                    <h4 className="text-2xl font-bold font-lexend mb-1 text-white group-hover:text-[#D2A979] transition-colors">Steve Krug</h4>
                    <p className="text-lg font-mono text-gray-300 uppercase">Don't Make Me Think</p>
                  </div>
                  <ArrowUpRight size={24} className="text-gray-600 group-hover:text-[#D2A979] transition-colors" />
               </FadeIn>
            </div>
         </div>
      </section>

      {/* 4. CAMADA 3 — MATERIALIDADE DIGITAL */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#111] text-white relative">
         <div className="max-w-[1400px] mx-auto space-y-20">
            <FadeIn className="text-center space-y-6 max-w-3xl mx-auto">
               <MetaTag color="green">03. Superfícies</MetaTag>
               <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase italic">Materialidade Digital</h2>
               <p className="text-lg font-lexend text-gray-400">
                 Design Systems, motion design e primitivos visuais. A física do ambiente digital através de tokens, microanimações e estados fluidos.
               </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Design Systems", sub: "Alla Kholmatova", desc: "A linguagem unificada da UI.", color: "bg-[#86EFAC]" },
                 { title: "Motion UI", sub: "Val Head", desc: "A coreografia da interação invisível.", color: "bg-[#F48A79]" },
                 { title: "Tokens", sub: "Arquitetura", desc: "Variáveis semânticas de marca.", color: "bg-[#D2A979]" }
               ].map((card, i) => (
                  <FadeIn key={i} delay={0.2 * i}>
                     <div className={cn("p-10 rounded-[32px] text-black h-full flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500", card.color)}>
                        <div>
                           <p className="text-lg font-mono uppercase tracking-widest font-bold mb-2 opacity-100 text-black">{card.sub}</p>
                           <h4 className="text-3xl font-display font-black italic uppercase leading-tight mb-4 text-black">{card.title}</h4>
                        </div>
                        <p className="text-xl font-lexend font-bold opacity-100 text-black">{card.desc}</p>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CAMADA 4 — SISTEMAS, DADOS E INFRAESTRUTURA */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] text-gray-300 border-y border-gray-800 relative overflow-hidden">
         {/* Computacional Grid */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <FadeIn className="order-2 lg:order-1 grid grid-cols-2 gap-4">
               <div className="p-6 bg-black/50 border border-gray-600 rounded-xl space-y-2 backdrop-blur-md">
                 <Network className="text-white mb-4" size={32} />
                 <h5 className="font-bold text-white uppercase text-lg">Plataformas</h5>
                 <p className="text-lg font-mono text-gray-300">Benjamin Bratton (The Stack)</p>
               </div>
               <div className="p-6 bg-black/50 border border-gray-600 rounded-xl space-y-2 backdrop-blur-md mt-8">
                 <Database className="text-white mb-4" size={32} />
                 <h5 className="font-bold text-white uppercase text-lg">Infraestrutura</h5>
                 <p className="text-lg font-mono text-gray-300">Keller Easterling</p>
               </div>
               <div className="p-6 bg-black/50 border border-gray-600 rounded-xl space-y-2 backdrop-blur-md -mt-8">
                 <Cpu className="text-white mb-4" size={32} />
                 <h5 className="font-bold text-white uppercase text-lg">Soberania</h5>
                 <p className="text-lg font-mono text-gray-300">Geopolítica de dados</p>
               </div>
               <div className="p-6 bg-black/50 border border-gray-600 rounded-xl space-y-2 backdrop-blur-md">
                 <Globe2 className="text-white mb-4" size={32} />
                 <h5 className="font-bold text-white uppercase text-lg">IA</h5>
                 <p className="text-lg font-mono text-gray-300">Inteligência Planetária</p>
               </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2 flex flex-col justify-center space-y-8">
               <MetaTag color="gray">04. Geopolítica Computacional</MetaTag>
               <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter uppercase text-white leading-none">Sistemas & <br/>Infraestrutura</h2>
               <p className="text-xl font-lexend leading-relaxed text-gray-200">
                 A interface não é a tela; é a película fina sobre megasistemas globais de data centers, inteligência artificial e soberania computacional.
               </p>
            </FadeIn>
         </div>
      </section>

      {/* 6. CAMADA 5 — FUTUROS CRÍTICOS */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] relative overflow-hidden">
         {/* Organic Gradient Sphere */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-[#F48A79]/10 via-[#D2A979]/5 to-[#86EFAC]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
         
         <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
            <FadeIn>
               <MetaTag color="clay">05. Design Especulativo</MetaTag>
            </FadeIn>
            <FadeIn delay={0.2}>
               <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-[#F48A79] via-[#D2A979] to-[#86EFAC]">
                 Futuros Críticos
               </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
               <p className="text-2xl md:text-3xl text-gray-200 font-lexend leading-relaxed">
                 Questionando o status quo tecnológico através do Design Crítico. Ética algorítmica, ecologias pós-humanas e a regeneração do Antropoceno.
               </p>
            </FadeIn>
            <FadeIn delay={0.6} className="pt-12">
               <div className="inline-flex flex-col items-center gap-4">
                  <Fingerprint size={56} className="text-[#F48A79] opacity-100" />
                  <p className="text-lg font-mono uppercase tracking-widest text-gray-300 font-bold">Anthony Dunne & Fiona Raby</p>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 6. CAMADA EXTRA — HUMAN-CENTERED AI */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#111] text-white relative border-t border-white/5">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
               <FadeIn>
                 <MetaTag color="green">06. Inteligência Artificial Centrada no Humano</MetaTag>
                 <h2 className="text-5xl md:text-6xl font-lexend font-black tracking-tighter uppercase mt-6 mb-4 leading-none text-white">Human-Centered AI</h2>
                 <p className="font-mono text-sm uppercase tracking-widest text-[#86EFAC] mb-8 font-bold">Ben Shneiderman</p>
                 <p className="text-lg font-lexend leading-relaxed text-gray-300">
                   Neste livro marco (2022), Shneiderman propõe uma nova visão ética e prática em que a Inteligência Artificial não substitui a agência humana, mas a amplifica. Em vez de focar apenas na autonomia de máquinas (AI-First), a abordagem HCAI foca em construir sistemas previsíveis, controláveis e seguros, empoderando as pessoas a atingirem altos níveis de performance, criatividade e colaboração.
                 </p>
               </FadeIn>
               <FadeIn delay={0.2} className="mt-8">
                 <a href="https://hcai.site/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-mono text-sm uppercase tracking-widest transition-colors w-max">
                   Site Oficial do Livro <ArrowUpRight size={16} />
                 </a>
               </FadeIn>
            </div>
            <div className="lg:col-span-7">
               <FadeIn delay={0.3} className="h-full flex flex-col justify-center">
                 <h3 className="text-2xl font-display font-bold italic mb-6 text-gray-400">Outras Referências Clássicas do Autor</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl hover:border-[#86EFAC]/30 transition-all flex flex-col justify-center">
                       <h4 className="text-xl font-bold mb-2 text-white">Designing the User Interface</h4>
                       <p className="text-sm font-mono text-gray-400">Um dos livros fundadores mais influentes da história da IHC, definindo os conceitos definitivos sobre manipulação direta e usabilidade (atualmente em sua 6ª edição).</p>
                    </div>
                    <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl hover:border-[#86EFAC]/30 transition-all flex flex-col justify-center">
                       <h4 className="text-xl font-bold mb-2 text-white">As 8 Regras de Ouro</h4>
                       <p className="text-sm font-mono text-gray-400">Heurísticas de interface universais criadas por ele, como "Buscar consistência", "Prevenir erros", "Feedback informativo" e "Reduzir a carga de memória de curto prazo".</p>
                    </div>
                    <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl hover:border-[#86EFAC]/30 transition-all md:col-span-2">
                       <h4 className="text-xl font-bold mb-2 text-white">O Mantra da Visualização de Informação</h4>
                       <p className="text-sm font-mono text-gray-400 font-bold italic text-[#D2A979]">"Overview first, zoom and filter, then details-on-demand."</p>
                       <p className="text-sm font-mono text-gray-500 mt-2">A regra estrutural definitiva ditada por Shneiderman em 1996, usada até hoje para projetar qualquer dashboard ou sistema de visualização de dados complexo.</p>
                    </div>
                 </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* FOOTER DA PÁGINA DE REFERÊNCIAS */}
      <section className="py-12 border-t border-white/20 text-center text-gray-300 font-mono text-lg uppercase tracking-widest bg-black">
         <p>Fim da Exposição Epistemológica • LabInterface</p>
      </section>

    </div>
  );
};
