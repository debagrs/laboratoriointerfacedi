import React from 'react';
import { Target, Brain, Wrench, CheckCircle2, HeartPulse, Sparkles, BookOpen, Repeat2 } from 'lucide-react';

export const GamificationShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Hero Quote */}
      <div className="p-10 bg-aura-comfort-oat/5 border border-aura-comfort-oat/30 rounded-[40px] shadow-2xl">
        <p className="text-2xl text-white font-lexend leading-relaxed italic uppercase tracking-widest text-center">
          "Jogar para engajar. <span className="text-aura-comfort-oat font-black">Engajar para transformar.</span>"
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-6 max-w-4xl">
        <p className="text-lg font-mono text-gray-200 leading-relaxed">
          Gamification não é só pontos, níveis e ranking. É sobre aplicar a alma dos jogos — a parte que te prende, que te desafia, que te faz voltar — em contextos sérios: aprender, mudar um hábito, mobilizar uma causa, ou simplesmente fazer alguém querer participar.
        </p>
        <p className="text-lg font-mono text-aura-comfort-green leading-relaxed font-bold italic">
          No nosso Laboratório, a gente não "enfeita" com gameficação. A gente projeta comportamento.
        </p>
      </div>

      {/* Cards: Para que serve + O que usamos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Para que serve */}
        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px] hover:border-aura-comfort-green/50 transition-all shadow-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
            <Target className="text-aura-comfort-green shrink-0" size={28} />
            <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter">Para que serve, de verdade?</h3>
          </div>
          <ul className="space-y-4">
            {[
              "Ensinar sem parecer lição",
              "Incentivar hábitos (e não só cliques)",
              "Estimular colaboração, não só competição",
              "Criar senso de progresso e propósito",
              "Gerar impacto emocional e social"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-lg text-gray-200 font-mono uppercase tracking-tighter">
                <span className="text-aura-comfort-green font-black">●</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* O que a gente usa */}
        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px] hover:border-aura-comfort-oat/50 transition-all shadow-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
            <Brain className="text-aura-comfort-oat shrink-0" size={28} />
            <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter">O que a gente usa</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-black text-aura-comfort-oat uppercase tracking-widest mb-3 italic">Mecânicas que funcionam</h4>
              <div className="flex flex-wrap gap-2">
                {["Pontos", "Níveis", "Missões", "Desafios", "Recompensas", "Badges", "Narrativa", "Desbloqueios"].map((item, i) => (
                  <span key={i} className="text-lg font-mono border border-aura-comfort-oat/60 text-aura-comfort-oat px-3 py-1.5 rounded-full bg-aura-comfort-oat/10">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-black text-aura-comfort-oat uppercase tracking-widest mb-2 italic">Dinâmicas que movem</h4>
              <p className="text-lg text-gray-200 font-mono uppercase leading-relaxed">Curiosidade | Descoberta | Progressão | Autonomia | Pertencimento | Cooperação</p>
            </div>
            <div>
              <h4 className="text-lg font-black text-aura-comfort-oat uppercase tracking-widest mb-2 italic">Emoções esperadas</h4>
              <p className="text-lg text-gray-200 font-mono uppercase leading-relaxed">Satisfação | Orgulho | Surpresa | Empatia | Responsabilidade | Propósito</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nosso jeito de aplicar */}
      <div className="p-10 border border-white/20 rounded-[40px] shadow-2xl space-y-8 bg-gradient-to-br from-[#0A0A0A] to-transparent">
        <div className="flex items-center gap-3">
          <Wrench className="text-aura-tech-cyan shrink-0" size={32} />
          <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter">Nosso jeito de aplicar</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Progressão visual", d: "Barras, mapas, evolução. O usuário precisa ver onde está e onde pode chegar." },
            { t: "Feedback imediato", d: "Cada ação gera uma reação clara. Sem ruído, sem delay." },
            { t: "Microconquistas", d: "Tarefas grandes viram etapas rápidas e recompensas frequentes." },
            { t: "Escolhas significativas", d: "O usuário decide e sente o peso da decisão." },
            { t: "Narrativa emocional", d: "Porque ninguém decora mecânica, mas todo mundo lembra de uma história." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/[0.06] border border-white/20 rounded-3xl hover:border-aura-tech-cyan/50 transition-all">
              <h4 className="text-xl font-black text-aura-tech-cyan uppercase italic mb-3">{item.t}</h4>
              <p className="text-lg text-gray-200 font-mono leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Boas Práticas */}
      <div className="p-8 bg-aura-comfort-green/5 border border-aura-comfort-green/30 rounded-[40px] shadow-xl">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
          <CheckCircle2 className="text-aura-comfort-green shrink-0" /> Boas práticas que defendemos
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Recompensar comportamento positivo, não só tempo de tela",
            "Evitar excesso de competição (nem todo mundo quer ser líder)",
            "Priorizar autonomia e empatia",
            "Dar feedback claro e equilibrar desafio com habilidade",
            "Tornar a experiência acessível de verdade"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-gray-200 font-mono items-start bg-white/[0.06] p-4 rounded-xl border border-white/20">
              <span className="text-aura-comfort-green font-black mt-0.5">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Exemplo Real: LABCHANGE */}
      <div className="relative p-10 md:p-14 rounded-[48px] bg-dark-bg border border-aura-comfort-clay/40 overflow-hidden shadow-2xl group">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
          <HeartPulse size={200} className="text-aura-comfort-clay" />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aura-comfort-clay/20 border border-aura-comfort-clay/50 text-aura-comfort-clay text-lg font-mono uppercase font-black tracking-widest mb-4">
            <Sparkles size={16} /> Exemplo Real
          </div>
          <h3 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter">Projeto LABCHANGE</h3>
          <p className="text-xl font-mono text-gray-200">Escolhas pelo Bem Animal • Público: jovens 15 anos (Ensino Médio)</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-aura-comfort-clay uppercase italic border-b border-white/20 pb-2">O que o jogo faz?</h4>
              <p className="text-lg font-mono text-gray-200 leading-relaxed">Mostra como escolhas cotidianas (tênis, lanche, transporte) afetam animais, meio ambiente, consumo e sociedade.</p>

              <h4 className="text-xl font-bold text-aura-comfort-clay uppercase italic border-b border-white/20 pb-2 pt-4">Como funciona</h4>
              <p className="text-lg font-mono text-gray-200 leading-relaxed">
                O jogador vive situações reais → toma decisões éticas → cada escolha altera indicadores (empatia, sustentabilidade) → desbloqueia histórias e cartas.
              </p>
            </div>

            <div className="p-6 bg-white/[0.06] border border-white/20 rounded-3xl space-y-4">
              <h4 className="text-lg font-black text-white uppercase tracking-widest mb-3 italic">Exemplo de Mecânica: Comprar um tênis</h4>
              <ul className="space-y-3 font-mono text-gray-200 text-lg">
                <li className="flex gap-2">👉 <span>Marca barata com testes em animais</span></li>
                <li className="flex gap-2">👉 <span>Marca sustentável certificada</span></li>
                <li className="flex gap-2">👉 <span>Brechó / reutilização</span></li>
              </ul>
              <p className="text-lg font-bold text-aura-comfort-clay mt-4 italic uppercase">
                Cada escolha muda pontos, narrativa, reputação e impacto global.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-lg font-mono text-gray-200 uppercase font-black tracking-wider mt-6 border-t border-white/20 pt-4">
                Descobrir <Repeat2 size={14} /> Escolher <Repeat2 size={14} /> Consequência <Repeat2 size={14} /> Reflexão <Repeat2 size={14} /> Evolução
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referências */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px]">
          <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
            <BookOpen className="text-aura-tech-cyan shrink-0" /> Referências
          </h3>
          <ul className="space-y-4 text-lg font-mono text-gray-200">
            <li><b className="text-white">Jane McGonigal</b> – Reality is Broken</li>
            <li><b className="text-white">Yu-kai Chou</b> – Modelo Octalysis</li>
            <li><b className="text-white">Karl Kapp</b> – Gamificação na educação</li>
            <li><b className="text-white">Gabe Zichermann</b> – Gamification by Design</li>
            <li><b className="text-white">Jesse Schell</b> – The Art of Game Design</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://yukaichou.com/octalysis-framework/" target="_blank" rel="noopener noreferrer" className="text-lg font-mono text-aura-tech-cyan hover:underline uppercase">🔗 Octalysis</a>
            <a href="https://janemcgonigal.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-mono text-aura-tech-cyan hover:underline uppercase">🔗 Jane McGonigal</a>
          </div>
        </div>

        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px]">
          <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
            <Target className="text-aura-comfort-oat shrink-0" /> Referências Visuais
          </h3>
          <ul className="space-y-4 text-lg font-mono text-gray-200">
            <li>Game UI Database</li>
            <li>Mobbin Games</li>
            <li>Behance – Game UI</li>
            <li>Dribbble – Game Interfaces</li>
          </ul>
        </div>
      </div>

      {/* Conexão com 5I's */}
      <div className="p-8 border border-white/20 rounded-[40px] shadow-2xl text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-4">Como se conecta com a 5I's?</h3>
        <p className="text-lg font-mono text-gray-200 leading-relaxed">
          A gamificação mora ali na <b className="text-white">Ideação</b>, com estratégias de engajamento, sistemas de recompensa, pontuação e jornada do usuário. A gente não joga nada no escuro. Tudo é pensado, testado e integrado.
        </p>
      </div>
    </div>
  );
};
