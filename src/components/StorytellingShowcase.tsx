import React from 'react';
import { BookOpen, Brain, Users, Compass, MessageSquare, CheckCircle2, HeartPulse, Sparkles, LayoutTemplate } from 'lucide-react';

export const StorytellingShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Hero Quote */}
      <div className="p-10 bg-aura-tech-cyan/5 border border-aura-tech-cyan/30 rounded-[40px] shadow-2xl">
        <p className="text-2xl text-white font-lexend leading-relaxed italic uppercase tracking-widest text-center">
          "Dados convencem. <span className="text-aura-tech-cyan font-black">Histórias transformam.</span>"
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-6 max-w-4xl">
        <p className="text-lg font-mono text-gray-200 leading-relaxed">
          Storytelling não é "contar historinha". É estruturar informação com emoção, propósito e direção. É fazer alguém sentir antes mesmo de entender completamente. E é isso que transforma uma interface qualquer em uma experiência memorável.
        </p>
        <p className="text-lg font-mono text-aura-tech-cyan leading-relaxed font-bold italic">
          No nosso Laboratório, a gente não "decora" com narrativa. A gente projeta jornadas emocionais.
        </p>
      </div>

      {/* Por que é obrigatório */}
      <div className="p-10 bg-aura-tech-blue/40 border border-white/20 rounded-[40px] shadow-xl">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-3">
          <HeartPulse className="text-aura-tech-cyan shrink-0" size={32} /> Por que é obrigatório?
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Porque o cérebro lembra 22x mais de fatos quando eles são embalados em histórias",
            "Porque decisão é emocional antes de ser racional",
            "Porque sem narrativa, sua interface é só um amontoado organizado de pixels",
            "Porque impacto social não se constrói com gráfico – se constrói com identificação"
          ].map((item, i) => (
            <li key={i} className="flex gap-4 p-5 bg-white/[0.06] border border-white/10 rounded-2xl">
              <span className="text-aura-tech-cyan font-black text-xl mt-1">●</span>
              <span className="text-lg text-gray-200 font-mono leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Os 4 pilares */}
      <div className="space-y-8">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter flex items-center gap-3">
          <Brain className="text-aura-comfort-oat shrink-0" size={32} /> Os 4 pilares do storytelling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Persona", d: "Alguém com quem se importar", p: "Não é 'usuário'. É a Maria, o João, a Dona Lúcia.", i: Users },
            { t: "Conflito", d: "Algo em jogo", p: "Uma dúvida, um obstáculo, uma escolha difícil.", i: MessageSquare },
            { t: "Jornada", d: "Transformação", p: "O personagem não termina igual começou.", i: Compass },
            { t: "Mensagem", d: "O que fica", p: "A moral não é explícita – é sentida.", i: Sparkles }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/[0.06] border border-white/20 rounded-[32px] hover:border-aura-comfort-oat/50 transition-all">
              <item.i className="text-aura-comfort-oat mb-4" size={32} />
              <h4 className="text-xl font-black text-white uppercase italic mb-2">{item.t}</h4>
              <p className="text-base font-bold text-aura-comfort-oat mb-4 uppercase tracking-widest">{item.d}</p>
              <p className="text-lg text-gray-200 font-mono">{item.p}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-mono text-gray-400 italic">Sem esses 4, você não tem história. Você tem relatório.</p>
      </div>

      {/* Nosso jeito de aplicar */}
      <div className="p-10 border border-white/20 rounded-[40px] shadow-2xl space-y-8 bg-gradient-to-br from-[#0A0A0A] to-transparent">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter flex items-center gap-3">
          <LayoutTemplate className="text-aura-comfort-green shrink-0" size={32} /> Nosso jeito de aplicar
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: "1", t: "Narrativa como fio condutor", d: "O usuário não 'navega'. Ele avança numa história. Cada clique é um capítulo." },
            { n: "2", t: "Micro-storytelling", d: "Não precisa de texto gigante. Um tooltip com consequência, um feedback emocional, uma mudança de cor." },
            { n: "3", t: "Escolhas com consequências", d: "O usuário decide. O sistema responde. A história muda. É assim que se cria pertencimento." },
            { n: "4", t: "Arcos de progressão pessoal", d: "Não mostre só 'nível 5'. Mostre: 'Você já salvou 3 árvores. Está se tornando um guardião'." },
            { n: "5", t: "Linguagem afetiva", d: "Em vez de 'conversão de 40%' → '4 em cada 10 pessoas mudaram de ideia hoje'." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/[0.06] border border-white/20 rounded-3xl hover:border-aura-comfort-green/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-aura-comfort-green/20 text-aura-comfort-green font-black flex items-center justify-center shrink-0">{item.n}</span>
                <h4 className="text-lg font-black text-white uppercase italic leading-tight">{item.t}</h4>
              </div>
              <p className="text-lg text-gray-200 font-mono leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Boas Práticas */}
      <div className="p-8 bg-aura-comfort-clay/5 border border-aura-comfort-clay/30 rounded-[40px] shadow-xl">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
          <CheckCircle2 className="text-aura-comfort-clay shrink-0" /> Boas práticas que defendemos
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Mostre, não conte (evite diálogos expositivos)",
            "Crie empatia antes de pedir ação",
            "Use conflitos pequenos e reais, não catástrofes irreais",
            "Deixe espaço para o usuário preencher com a própria história",
            "Toda boa história tem silêncio – mesma coisa na interface"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-gray-200 font-mono items-start bg-white/[0.06] p-4 rounded-xl border border-white/20">
              <span className="text-aura-comfort-clay font-black mt-0.5">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Exemplo Real */}
      <div className="relative p-10 md:p-14 rounded-[48px] bg-dark-bg border border-aura-tech-cyan/40 overflow-hidden shadow-2xl">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter mb-8">🧪 Exemplo real (pra você sentir a diferença)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/[0.04] border border-white/10 rounded-3xl opacity-60">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Cenário sem storytelling</h4>
            <p className="text-lg font-mono text-white leading-relaxed">
              "Seu consumo de água está 30% acima da média. Reduza para economizar."
            </p>
          </div>
          <div className="p-6 bg-aura-tech-cyan/10 border border-aura-tech-cyan/40 rounded-3xl">
            <h4 className="text-sm font-bold text-aura-tech-cyan uppercase tracking-widest mb-4">Cenário COM storytelling</h4>
            <p className="text-lg font-mono text-white leading-relaxed">
              "Enquanto você escova os dentes com a torneira aberta, a Ana, de uma cidade vizinha, andou 4km hoje pra buscar água. Uma escolha sua pode mudar a história dela."
            </p>
          </div>
        </div>
        <p className="text-center mt-8 text-xl font-bold text-white italic">Qual dos dois você lembra amanhã?</p>
      </div>

      {/* Conexão com 5I's */}
      <div className="p-10 bg-white/[0.03] border border-white/20 rounded-[40px]">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6">Como se conecta com a 5I's?</h3>
        <p className="text-lg font-mono text-gray-200 mb-6">Storytelling não é uma fase – é um tecido que atravessa todas elas.</p>
        <ul className="space-y-4 font-mono text-lg text-gray-200">
          <li><b className="text-aura-tech-cyan">Ideação:</b> a história do projeto nasce aqui. Quem é o herói? Qual o conflito?</li>
          <li><b className="text-aura-tech-cyan">Inambulação:</b> a narrativa da concorrência – o que eles contam e o que silenciam?</li>
          <li><b className="text-aura-tech-cyan">Instauração:</b> cada wireframe já vem com uma intenção narrativa.</li>
          <li><b className="text-aura-tech-cyan">Inspeção:</b> o usuário entendeu a história? Ele se importa?</li>
          <li><b className="text-aura-tech-cyan">Implementação:</b> a interface final conta a história sem precisar de um manual.</li>
        </ul>
        <p className="mt-8 text-lg font-mono text-gray-400 italic border-t border-white/10 pt-6">
          A metodologia não cita "storytelling" explicitamente? Talvez. Mas a gente sabe que sem ele, engajamento vira métrica fria e impacto social vira slide de PowerPoint.
        </p>
      </div>

      {/* Referências */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px]">
          <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
            <BookOpen className="text-white shrink-0" /> Referências
          </h3>
          <ul className="space-y-4 text-lg font-mono text-gray-200">
            <li><b className="text-white">Joseph Campbell</b> – O Herói de Mil Faces</li>
            <li><b className="text-white">Robert McKee</b> – Story</li>
            <li><b className="text-white">Donald Miller</b> – Building a StoryBrand</li>
            <li><b className="text-white">Brené Brown</b> – Atlas of the Heart</li>
            <li><b className="text-white">Kurt Vonnegut</b> – As formas das histórias</li>
          </ul>
        </div>

        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
              <Sparkles className="text-aura-comfort-oat shrink-0" /> Visual & Links
            </h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.storytellingwithdata.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-mono text-aura-tech-cyan hover:underline uppercase">🔗 Storytelling with data</a>
              <a href="#" className="text-lg font-mono text-aura-tech-cyan hover:underline uppercase">🔗 Narrative Design no Medium</a>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Referências visuais</h4>
            <p className="text-lg font-mono text-gray-200">Narrative-driven UI (Behance) <br/> Interactive storytelling (Awwwards) <br/> UX storytelling (Dribbble)</p>
          </div>
        </div>
      </div>
      
      {/* Footer Quote */}
      <div className="p-10 bg-aura-tech-cyan/10 border border-aura-tech-cyan/30 rounded-[40px] shadow-2xl text-center">
        <p className="text-2xl text-white font-lexend leading-relaxed italic uppercase tracking-widest">
          Dado te dá razão. <span className="text-aura-tech-cyan font-black">História te dá relevância.</span>
        </p>
      </div>

    </div>
  );
};
