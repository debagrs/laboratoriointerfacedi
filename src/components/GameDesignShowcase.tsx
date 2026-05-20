import React from 'react';
import { Gamepad2, FileText, Blocks, LayoutTemplate, Layers, MousePointer2, Settings, Users, Link as LinkIcon, BookOpen } from 'lucide-react';

export const GameDesignShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Hero Quote */}
      <div className="p-10 bg-aura-comfort-clay/5 border border-aura-comfort-clay/30 rounded-[40px] shadow-2xl">
        <p className="text-2xl text-white font-lexend leading-relaxed italic uppercase tracking-widest text-center">
          "Criar um jogo não é fazer uma tela bonita. É construir um <span className="text-aura-comfort-clay font-black">mundo que funciona</span>."
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-6 max-w-4xl">
        <p className="text-lg font-mono text-gray-200 leading-relaxed">
          Design de Games é o processo de criar regras, sistemas, narrativa, interação e emoção. Não é só "ideia legal". É estrutura que se sustenta.
        </p>
        <p className="text-lg font-mono text-aura-comfort-clay leading-relaxed font-bold italic">
          No Laboratório, a gente faz game design que ensina, que impacta, que engaja — sem perder o rigor técnico.
        </p>
      </div>

      {/* A teia que a gente tece */}
      <div className="p-10 bg-aura-tech-blue/40 border border-white/20 rounded-[40px] shadow-xl">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-3">
          <Layers className="text-aura-tech-cyan shrink-0" size={32} /> A teia que a gente tece
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Game Design", d: "Regras e sistemas", i: Gamepad2 },
            { t: "Narrative Design", d: "História", i: BookOpen },
            { t: "Level Design", d: "Progressão e desafio", i: Blocks },
            { t: "UX/UI", d: "Interface e experiência", i: LayoutTemplate },
            { t: "Sound Design", d: "Feedback sonoro", i: Settings },
            { t: "Economy Design", d: "Recursos e recompensas", i: FileText },
            { t: "Player Psychology", d: "Comportamento", i: Users },
            { t: "Accessibility", d: "Inclusão", i: MousePointer2 }
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white/[0.06] border border-white/20 rounded-2xl flex items-center gap-4 hover:border-aura-tech-cyan/50 transition-all">
              <item.i className="text-aura-tech-cyan shrink-0" size={24} />
              <div>
                <h4 className="text-lg font-black text-white uppercase italic">{item.t}</h4>
                <p className="text-lg font-mono text-gray-200">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GDD */}
      <div className="relative p-10 md:p-14 rounded-[48px] bg-dark-bg border border-aura-comfort-oat/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <FileText size={250} className="text-aura-comfort-oat" />
        </div>
        <div className="relative z-10 space-y-8">
          <div>
            <h3 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter mb-4">GDD – Game Design Document</h3>
            <p className="text-lg font-mono text-gray-200 max-w-3xl leading-relaxed">A gente não inventa moda. A gente preenche. Nosso esqueleto online estruturado para não perder a documentação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Visão Geral", d: "Nome, gênero, plataforma, público, objetivo educacional" },
              { t: "Conceito Central", d: "O jogo em uma frase" },
              { t: "Core Gameplay Loop", d: "Explorar → escolher → consequência → evoluir → desbloquear" },
              { t: "Mecânicas Principais", d: "Sistema de cartas, reputação, indicadores" },
              { t: "Narrativa", d: "O mundo, o conflito, o propósito" },
              { t: "Personagens", d: "Mentor, consumidor, cientista, ativista" },
              { t: "Progressão", d: "Níveis, temporadas, eventos, finais diferentes" },
              { t: "Interface / UX / UI", d: "Menu, loja ética, missões, acessível, mobile first, tutorial intuitivo" },
              { t: "Recompensas", d: "Badges, cartas especiais, títulos, finais secretos" },
              { t: "Direção Visual & Áudio", d: "Estilo, paleta, áudio lo-fi, feedbacks suaves" },
              { t: "Acessibilidade", d: "Contraste, legendas, teclado, leitores de tela" },
              { t: "Métricas", d: "Retenção, tempo de jogo, decisões éticas, engajamento" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 p-5 bg-white/[0.06] border border-white/20 rounded-xl hover:bg-white/10 transition-all">
                <span className="text-aura-comfort-oat font-black uppercase text-lg italic">{item.t}</span>
                <span className="text-gray-200 font-mono text-lg leading-relaxed">{item.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5Is Online */}
      <div className="p-10 bg-aura-comfort-green/5 border border-aura-comfort-green/30 rounded-[40px] shadow-xl">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-3">
          <Gamepad2 className="text-aura-comfort-green shrink-0" /> Estruturado em etapas online (5I's)
        </h3>
        <div className="space-y-6 max-w-4xl">
          {[
            { s: "Etapa 1", t: "Ideação", d: "Conceito, referências, público, personas" },
            { s: "Etapa 2", t: "Inambulação", d: "Análises, concorrentes, referências de interface" },
            { s: "Etapa 3", t: "Instauração", d: "Wireframes, fluxos, UI, gameplay" },
            { s: "Etapa 4", t: "Inspeção", d: "Testes, feedbacks, melhorias" },
            { s: "Etapa 5", t: "Implementação", d: "Versão final, guia de estilos, design system" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-[#0A0A0A] border border-white/20 hover:border-aura-comfort-green/50 transition-all shadow-xl">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-aura-comfort-green bg-dark-bg text-aura-comfort-green font-black text-xl shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                {i + 1}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg font-mono text-aura-comfort-green uppercase tracking-widest font-black">{item.s}</span>
                  <h4 className="text-xl font-black text-white uppercase italic">{item.t}</h4>
                </div>
                <p className="text-lg font-mono text-gray-200">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-lg font-mono text-gray-200 italic">
          O usuário cria conta, preenche as etapas, salva online e gera PDF automaticamente.<br/>
          <span className="text-aura-comfort-green font-bold">Sem planilha perdida. Sem documentação morta.</span>
        </p>
      </div>

      {/* Referências */}
      <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px]">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
          <BookOpen className="text-white shrink-0" /> Referências Fundamentais
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-mono text-gray-200 mb-8">
          <li><b className="text-white">Jesse Schell</b> – The Art of Game Design</li>
          <li><b className="text-white">Tracy Fullerton</b> – Game Design Workshop</li>
          <li><b className="text-white">Katie Salen & Eric Zimmerman</b> – Rules of Play</li>
          <li><b className="text-white">Scott Rogers</b> – Level Up!</li>
          <li><b className="text-white">Raph Koster</b> – Theory of Fun</li>
        </ul>
        <div className="flex flex-wrap gap-6 border-t border-white/20 pt-6">
          <a href="https://gameaccessibilityguidelines.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-mono text-aura-tech-cyan hover:underline uppercase">
            <LinkIcon size={16} /> Game Accessibility Guidelines
          </a>
          <a href="https://celiahodent.com/the-gamers-brain/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-mono text-aura-tech-cyan hover:underline uppercase">
            <LinkIcon size={16} /> Game UX Master Guide
          </a>
          <a href="https://uxdesign.cc/tagged/gaming" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-mono text-aura-tech-cyan hover:underline uppercase">
            <LinkIcon size={16} /> UX Collective – Games
          </a>
        </div>
      </div>

    </div>
  );
};
