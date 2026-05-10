import React from 'react';
import { motion } from 'framer-motion';
import { 
  ImageIcon, Sparkles, BookOpen, Layers, Search, 
  CheckCircle2, AlertTriangle, MonitorPlay, Code2, ShieldCheck, Zap, Brain
} from 'lucide-react';
import { cn } from '../lib/utils';

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
  <div className="mb-12 border-b border-white/5 pb-8">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-aura-tech-cyan shadow-[0_0_20px_rgba(0,255,255,0.1)]">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl lg:text-4xl font-display font-black text-white uppercase italic tracking-tighter">{title}</h3>
    </div>
    {subtitle && <p className="text-lg font-mono text-gray-400 uppercase tracking-widest pl-16 border-l border-white/10 ml-7">{subtitle}</p>}
  </div>
);

const CodeBlock = ({ code, language, title }: { code: string, language: string, title?: string }) => (
  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl my-6">
    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      {title && <span className="text-xs font-mono text-gray-400 uppercase">{title}</span>}
      <span className="text-xs font-mono text-aura-tech-cyan">{language}</span>
    </div>
    <div className="p-4 overflow-x-auto">
      <pre className="text-sm font-mono text-gray-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

const TableRow = ({ items, isHeader = false }: { items: React.ReactNode[], isHeader?: boolean }) => (
  <div className={cn(
    "grid grid-cols-2 md:grid-cols-4 gap-4 p-4 items-center",
    isHeader ? "border-b border-white/10 font-mono text-xs uppercase tracking-widest text-aura-tech-cyan" : "border-b border-white/5 text-sm font-lexend text-gray-300 hover:bg-white/[0.02] transition-colors"
  )}>
    {items.map((item, i) => (
      <div key={i} className={cn("truncate whitespace-normal", i === 0 && "font-bold text-white")}>{item}</div>
    ))}
  </div>
);

const ThreeColRow = ({ items, isHeader = false }: { items: React.ReactNode[], isHeader?: boolean }) => (
  <div className={cn(
    "grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center",
    isHeader ? "border-b border-white/10 font-mono text-xs uppercase tracking-widest text-aura-comfort-oat" : "border-b border-white/5 text-sm font-lexend text-gray-300 hover:bg-white/[0.02] transition-colors"
  )}>
    {items.map((item, i) => (
      <div key={i} className={cn("truncate whitespace-normal", i === 0 && "font-bold text-white")}>{item}</div>
    ))}
  </div>
);

export const ImagesIllustrationsAdvancedShowcase = () => {
  return (
    <div className="space-y-32 pb-32">
      
      <section>
        <FadeIn>
          <div className="p-12 md:p-16 bg-[#0A0A0A] border border-white/10 rounded-[48px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none -rotate-12 scale-150">
               <ImageIcon size={400} />
            </div>
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-lexend font-black text-white tracking-tighter uppercase mb-6 leading-none">
                Narrativa e <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-tech-cyan to-aura-tech-blue">Storytelling Visual</span>
              </h2>
              <p className="text-xl text-gray-300 font-lexend leading-relaxed border-l-2 border-aura-tech-cyan pl-6">
                Ilustrações não são apenas "enfeites". Em interfaces contemporâneas, elas cumprem funções estratégicas de condução cognitiva, alívio emocional e semiótica identitária.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 1. STORYTELLING VISUAL */}
      <section>
        <FadeIn>
          <SectionTitle title="1. O Poder Narrativo" subtitle="Funções Estratégicas e Arquétipos" icon={BookOpen} />
          
          <div className="space-y-8">
             <div className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden">
                <ThreeColRow items={["Função", "Exemplo", "Impacto Mensurável"]} isHeader />
                <ThreeColRow items={["Explicativa", "Onboarding financeiro", "Reduz atrito cognitivo em 37%"]} />
                <ThreeColRow items={["Emocional", "Telas de erro / empty state", "Diminui frustração e abandono"]} />
                <ThreeColRow items={["Identitária", "Brandbook exclusivo", "Aumenta reconhecimento de marca"]} />
                <ThreeColRow items={["Direcional", "Foco visual em CTA", "Aumenta conversão em até 26%"]} />
                <ThreeColRow items={["Contextual", "Cenários de uso", "Cria pertencimento"]} />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
               <div className="space-y-6">
                 <h4 className="text-xl font-bold text-white uppercase italic">Arquétipos Narrativos</h4>
                 <p className="text-sm font-lexend text-gray-400">Baseado em estudos de psicologia cognitiva (Kahneman, 2011 — Sistema 1 e Sistema 2).</p>
                 <ul className="space-y-4 font-mono text-sm">
                   <li className="p-4 border border-white/10 rounded-2xl bg-white/5"><span className="text-aura-tech-cyan font-bold">A Jornada:</span> Onboarding (caminhos, mapas).</li>
                   <li className="p-4 border border-white/10 rounded-2xl bg-white/5"><span className="text-aura-tech-cyan font-bold">A Celebração:</span> Metas batidas (confetes, estrelas).</li>
                   <li className="p-4 border border-white/10 rounded-2xl bg-white/5"><span className="text-aura-tech-cyan font-bold">O Alívio:</span> Sucesso de pagamento (luz, espaço).</li>
                   <li className="p-4 border border-white/10 rounded-2xl bg-white/5"><span className="text-aura-tech-cyan font-bold">O Acolhimento:</span> Tela 404 (figura solitária e conforto).</li>
                 </ul>
               </div>
               
               <div className="p-8 bg-aura-comfort-green/10 border border-aura-comfort-green/20 rounded-3xl flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-4 text-aura-comfort-green">
                   <Sparkles size={24} />
                   <span className="font-bold uppercase tracking-widest">Insight Avançado</span>
                 </div>
                 <p className="text-lg font-lexend text-gray-200 leading-relaxed">
                   A neurociência mostra que rostos humanos (mesmo estilizados) ativam a amígdala e geram empatia em 0.3 segundos. Use rostos em ilustrações de suporte emocional.
                 </p>
               </div>
             </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. PSICOLOGIA E SEMIÓTICA */}
      <section>
        <FadeIn delay={0.1}>
          <SectionTitle title="2. Semiótica e Psicologia" subtitle="A Gramática das Formas e Cores" icon={Brain} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden self-start">
               <ThreeColRow items={["Elemento", "Significado Semiótico", "Aplicação UI"]} isHeader />
               <ThreeColRow items={["Círculos", "Comunidade, proteção", "Avatares, loadings"]} />
               <ThreeColRow items={["Triângulos", "Ação, movimento, conflito", "Alertas, botões play"]} />
               <ThreeColRow items={["Linhas Horizontais", "Estabilidade, pausa", "Empty states"]} />
               <ThreeColRow items={["Linhas Diagonais", "Urgência, mudança", "Progresso"]} />
               <ThreeColRow items={["Vazio Negativo", "Contemplação", "Telas de foco"]} />
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white uppercase italic">Teoria das Cores</h4>
              <p className="text-sm font-lexend text-gray-400">Captura de atenção média de 8 segundos (Microsoft, 2022).</p>
              
              <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                   <div className="w-8 h-8 rounded-full bg-blue-500" />
                   <div><p className="text-sm font-bold text-white">Calma e Confiança</p><p className="text-xs text-gray-500 font-mono">Fintech, B2B</p></div>
                 </div>
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                   <div className="w-8 h-8 rounded-full bg-orange-500" />
                   <div><p className="text-sm font-bold text-white">Energia e Ação</p><p className="text-xs text-gray-500 font-mono">Gaming, Promoções</p></div>
                 </div>
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                   <div className="w-8 h-8 rounded-full bg-purple-500" />
                   <div><p className="text-sm font-bold text-white">Criatividade</p><p className="text-xs text-gray-500 font-mono">Edtech, Design Tools</p></div>
                 </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mt-6">
                 <p className="text-sm font-mono text-amber-500 leading-relaxed">
                   ⚠️ Contraste não é só cor: a luminosidade (YIQ) determina legibilidade. 
                   <br/>Luminância = 0.299R + 0.587G + 0.114B (Mínimo WCAG 4.5:1).
                 </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. TÉCNICAS E FORMATOS */}
      <section>
        <FadeIn delay={0.1}>
          <SectionTitle title="3. Formatos e Ferramentas" subtitle="Pipeline Profissional de Ilustração" icon={Layers} />
          
          <div className="space-y-12">
            <div className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden overflow-x-auto">
               <TableRow items={["Formato", "Uso Ideal", "Tamanho Médio", "Animação"]} isHeader />
               <TableRow items={["SVG", "Ícones, Logos", "2-50 KB", "CSS/JS"]} />
               <TableRow items={["WebP", "Texturas complexas", "15-40 KB", "Sim (Animado)"]} />
               <TableRow items={["AVIF", "Qualidade extrema", "8-30 KB", "Não"]} />
               <TableRow items={["Lottie (JSON)", "Vetor complexo", "10-200 KB", "Sim Nativo"]} />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white uppercase italic mb-4">Workflow de Produção</h4>
              <CodeBlock 
                language="pipeline"
                code={`CONCEPÇÃO        →   CRIAÇÃO        →   OTIMIZAÇÃO      →   IMPLEMENTAÇÃO
────────────         ─────────        ─────────────       ─────────────
Procreate            Illustrator      SVGOMG (compra)     LottieFiles
FigJam (sketch)      Figma (vector)   TinyPNG             SVGR (React)
Pen & paper          Affinity         ImageOptim          Zeplin
Miro (brainstorm)    Blender (3D)     Squoosh (AVIF)      Framer`}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. BANCOS E REACT */}
      <section>
        <FadeIn delay={0.1}>
          <SectionTitle title="4. Design System de Ilustrações" subtitle="Bibliotecas e Componentização" icon={Code2} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <p className="text-gray-300 font-lexend">Principais recursos Open Source e Freemium para projetos:</p>
              <ul className="space-y-2 text-sm font-mono text-aura-tech-cyan">
                 <li>• unDraw (SVG com cor dinâmica via CSS)</li>
                 <li>• Humaans (Componentes modulares)</li>
                 <li>• Blush (Plugin Figma direto)</li>
                 <li>• Open Doodles (Inclusivos / CC0)</li>
              </ul>
            </div>
            <div>
               <CodeBlock 
                 language="javascript"
                 title="IllustrationSystem.js"
                 code={`// Exemplo de sistema de ilustrações em React
const IllustrationSystem = {
  variants: {
    empty: { sad: 'sad.svg', party: 'party.svg' },
    error: { 404: '404.svg', 500: 'server.svg' }
  },
  
  // Aplicação dinâmica de cor (CurrentColor)
  getColoredIllustration: (name, color) => {
    return fetch(\`/assets/\${name}.svg\`)
      .then(res => res.text())
      .then(svg => svg.replace(/currentColor/g, color));
  }
};`}
               />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. PERFORMANCE */}
      <section>
        <FadeIn delay={0.1}>
          <SectionTitle title="5. Performance Extrema" subtitle="Lazy Loading e Observers" icon={Zap} />
          
          <div className="space-y-8">
            <p className="text-gray-300 font-lexend leading-relaxed max-w-4xl">
              Não confie apenas no atributo <code>loading="lazy"</code>. Para produtos de ponta, utilize o <strong>Intersection Observer</strong> para imagens abaixo da dobra e <strong>Priority Hints</strong> para LCP (Largest Contentful Paint) no hero principal.
            </p>
            
            <CodeBlock 
              language="html"
              title="Estratégias de Carregamento"
              code={`<!-- 1. Priority Hints para LCP crítico (Header) -->
<img 
  src="hero-illustration.webp"
  fetchpriority="high"
  loading="eager"
  alt="Ilustração principal">

<!-- 2. LQIP (Low Quality Image Placeholder) para transição suave -->
<img 
  src="illustration-blur.jpg" 
  data-src="illustration-full.webp"
  class="progressive"
  style="filter: blur(10px); transition: filter 0.3s;"
  onload="this.style.filter='blur(0px)'">

<!-- 3. Controle fino com JS Intersection Observer -->
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' }); // Carrega 200px antes de aparecer
</script>`}
            />
          </div>
        </FadeIn>
      </section>

      {/* 6. ACESSIBILIDADE */}
      <section>
        <FadeIn delay={0.1}>
          <SectionTitle title="6. Acessibilidade Visual" subtitle="Screen Readers e Contraste" icon={ShieldCheck} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
               <h4 className="text-xl font-bold text-white uppercase italic mb-4">Checklist WCAG</h4>
               <ul className="space-y-4 text-sm font-mono text-gray-400">
                 <li className="flex gap-3"><CheckCircle2 className="text-aura-tech-cyan shrink-0"/> <span><strong>1.1.1</strong>: Alt text obrigatório e descritivo.</span></li>
                 <li className="flex gap-3"><CheckCircle2 className="text-aura-tech-cyan shrink-0"/> <span><strong>1.4.5</strong>: Nunca embutir texto dentro da imagem JPG/PNG.</span></li>
                 <li className="flex gap-3"><CheckCircle2 className="text-aura-tech-cyan shrink-0"/> <span><strong>2.3.1</strong>: Animações nunca devem piscar mais de 3x por segundo.</span></li>
               </ul>
            </div>

            <div>
               <CodeBlock 
                 language="html"
                 title="Boas Práticas de ARIA"
                 code={`<!-- Ilustração Decorativa (Invisível para leitor) -->
<img src="bg.svg" alt="" role="presentation" aria-hidden="true">

<!-- Ilustração Funcional com Texto Auxiliar -->
<img src="flow.svg" alt="Diagrama de fluxo" aria-describedby="desc">
<span id="desc" class="sr-only">
  1. Compra 2. Processamento 3. Entrega.
</span>`}
               />
               <p className="text-xs font-mono text-gray-500 mt-4 px-2">
                 Dado alarmante: 8% dos homens têm daltonismo. Nunca use apenas a cor para transmitir uma função.
               </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 7. LOTTIE E ANIMAÇÃO */}
      <section>
        <FadeIn delay={0.1}>
          <SectionTitle title="7. Animação Avançada" subtitle="Lottie JSON Control" icon={MonitorPlay} />
          
          <p className="text-gray-300 font-lexend leading-relaxed max-w-4xl mb-8">
            Animações vetoriais via Lottie são cruciais para microinterações profundas, mas precisam de controle estrito de memória para não drenar a bateria em dispositivos móveis.
          </p>

          <CodeBlock 
            language="javascript"
            title="Lottie Implementation"
            code={`import lottie from 'lottie-web';

const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-hero'),
  renderer: 'svg',
  loop: true,
  autoplay: false, // Performance: iniciar pausado
  path: 'animation.json'
});

// Otimização de CPU: Só animar se estiver visível na tela
const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    animation.stop(); // Poupa renderização e bateria
  } else {
    animation.play();
  }
});
observer.observe(document.getElementById('lottie-hero'));`}
          />
        </FadeIn>
      </section>

    </div>
  );
};
