import React from 'react';
import { BarChart3, PieChart, Eye, Layout, AlertTriangle, BookOpen, Layers, CheckCircle2, XCircle } from 'lucide-react';

export const DataVisualizationShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Hero Quote */}
      <div className="p-10 bg-aura-comfort-oat/5 border border-aura-comfort-oat/30 rounded-[40px] shadow-2xl">
        <p className="text-2xl text-white font-lexend leading-relaxed italic uppercase tracking-widest text-center">
          "Dado não se decora. <span className="text-aura-comfort-oat font-black">Dado se revela.</span>"
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-6 max-w-4xl">
        <p className="text-lg font-mono text-gray-200 leading-relaxed">
          Visualização de dados não é "fazer gráfico bonito". É traduzir números em percepção. É transformar uma planilha de 10 mil linhas em uma imagem que o cérebro entende em 0.5 segundo.
        </p>
        <p className="text-lg font-mono text-aura-comfort-oat leading-relaxed font-bold italic">
          No nosso Laboratório, a gente não "enfeita" dado. A gente projeta clareza cognitiva.
        </p>
      </div>

      {/* Por que é arma estratégica */}
      <div className="p-10 bg-aura-tech-blue/40 border border-white/20 rounded-[40px] shadow-xl">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-3">
          <Eye className="text-aura-comfort-oat shrink-0" size={32} /> Por que é arma estratégica?
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Porque o cérebro humano processa imagens 60 mil vezes mais rápido que texto",
            "Porque um gráfico bem feito elimina 3 parágrafos de explicação",
            "Porque decisão ruim geralmente vem de dado mal apresentado",
            "Porque impacto social exige transparência – e transparência exige clareza visual"
          ].map((item, i) => (
            <li key={i} className="flex gap-4 p-5 bg-white/[0.06] border border-white/10 rounded-2xl">
              <span className="text-aura-comfort-oat font-black text-xl mt-1">●</span>
              <span className="text-lg text-gray-200 font-mono leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xl font-bold text-center text-white italic">Dado sem visualização é boato. Visualização sem propósito é ruído.</p>
      </div>

      {/* Os 3 princípios */}
      <div className="space-y-8">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter flex items-center gap-3">
          <AlertTriangle className="text-aura-comfort-clay shrink-0" size={32} /> Os 3 princípios inquebráveis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Honrar a proporção", d: "O tamanho visual reflete o valor real", e: "Gráficos 3D, eixos cortados, bolhas desproporcionais" },
            { t: "Reduzir ruído cognitivo", d: "Só o que é essencial fica na tela", e: "Linhas de grade excessivas, cores sem função, bordas" },
            { t: "Contar uma verdade", d: "Cada visual responde a uma pergunta específica", e: "Gráficos genéricos que tentam mostrar tudo" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/[0.06] border border-white/20 rounded-[32px] hover:border-aura-comfort-clay/50 transition-all flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-black text-white uppercase italic mb-2">{item.t}</h4>
                <p className="text-base font-bold text-aura-comfort-clay mb-6 uppercase tracking-widest">{item.d}</p>
              </div>
              <div className="p-4 bg-dark-bg/50 border border-red-500/30 rounded-2xl">
                <p className="text-sm font-bold text-red-400 uppercase mb-1">O que evitamos:</p>
                <p className="text-base font-mono text-gray-300">{item.e}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-mono text-gray-400 italic">Se seu gráfico precisa de legenda de 3 linhas, ele é um gráfico ruim.</p>
      </div>

      {/* Nosso jeito de aplicar */}
      <div className="p-10 border border-white/20 rounded-[40px] shadow-2xl space-y-12 bg-gradient-to-br from-[#0A0A0A] to-transparent">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter flex items-center gap-3">
          <BarChart3 className="text-aura-tech-cyan shrink-0" size={32} /> Nosso jeito de aplicar
        </h3>
        
        <div className="space-y-10">
          <div>
            <h4 className="text-2xl font-black text-white uppercase italic mb-6">1. Escolha o gráfico pelo que ele faz</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { u: "Comparação entre categorias", g: "Barras (sempre!)", chart: (
                  <div className="flex items-end justify-center gap-1.5 h-16 w-full">
                    <div className="w-4 bg-aura-tech-cyan h-[40%] rounded-t-sm shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>
                    <div className="w-4 bg-aura-tech-cyan h-[70%] rounded-t-sm shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>
                    <div className="w-4 bg-aura-tech-cyan h-[50%] rounded-t-sm shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>
                    <div className="w-4 bg-aura-tech-cyan h-[100%] rounded-t-sm shadow-[0_0_10px_rgba(0,255,255,0.4)]"></div>
                  </div>
                )},
                { u: "Evolução no tempo", g: "Linha", chart: (
                  <div className="flex items-center justify-center h-16 w-full">
                    <svg viewBox="0 0 100 40" className="w-24 h-12 overflow-visible">
                       <path d="M0,40 L20,30 L40,35 L60,15 L80,20 L100,5" fill="none" stroke="currentColor" strokeWidth="3" className="text-aura-comfort-oat drop-shadow-[0_0_8px_rgba(255,204,153,0.4)]" strokeLinecap="round" strokeLinejoin="round"/>
                       <circle cx="100" cy="5" r="4" className="fill-aura-comfort-oat" />
                    </svg>
                  </div>
                )},
                { u: "Proporção de um todo", g: "Barras empilhadas", chart: (
                  <div className="flex items-center justify-center h-16 w-full">
                    <div className="w-full max-w-[8rem] h-6 flex rounded-md overflow-hidden ring-2 ring-[#0A0A0A]">
                      <div className="w-[45%] bg-aura-tech-cyan border-r-2 border-[#0A0A0A]"></div>
                      <div className="w-[35%] bg-aura-comfort-clay border-r-2 border-[#0A0A0A]"></div>
                      <div className="w-[20%] bg-aura-comfort-green"></div>
                    </div>
                  </div>
                )},
                { u: "Correlação", g: "Pontos (scatter)", chart: (
                  <div className="w-full h-16 relative flex items-center justify-center border-l-2 border-b-2 border-white/20 mx-auto max-w-[8rem] translate-y-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-aura-comfort-green absolute bottom-[10%] left-[10%] shadow-[0_0_8px_rgba(0,255,153,0.5)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-aura-comfort-green absolute bottom-[30%] left-[25%] shadow-[0_0_8px_rgba(0,255,153,0.5)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-aura-comfort-green absolute bottom-[20%] left-[40%] shadow-[0_0_8px_rgba(0,255,153,0.5)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-aura-comfort-green absolute bottom-[50%] left-[55%] shadow-[0_0_8px_rgba(0,255,153,0.5)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-aura-comfort-green absolute bottom-[40%] left-[70%] shadow-[0_0_8px_rgba(0,255,153,0.5)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-aura-comfort-green absolute bottom-[80%] left-[85%] shadow-[0_0_8px_rgba(0,255,153,0.8)]"></div>
                  </div>
                )},
                { u: "Distribuição", g: "Histograma / Boxplot", chart: (
                  <div className="flex items-end justify-center gap-[2px] h-16 w-full max-w-[8rem] mx-auto">
                    <div className="w-full bg-aura-tech-cyan/50 h-[20%] rounded-t-sm"></div>
                    <div className="w-full bg-aura-tech-cyan/70 h-[40%] rounded-t-sm"></div>
                    <div className="w-full bg-aura-tech-cyan/90 h-[80%] rounded-t-sm"></div>
                    <div className="w-full bg-aura-comfort-oat h-[100%] rounded-t-sm shadow-[0_0_12px_rgba(255,204,153,0.6)]"></div>
                    <div className="w-full bg-aura-tech-cyan/80 h-[60%] rounded-t-sm"></div>
                    <div className="w-full bg-aura-tech-cyan/40 h-[30%] rounded-t-sm"></div>
                  </div>
                )},
                { u: "Parte-todo hierárquico", g: "Treemap", chart: (
                  <div className="w-full h-16 flex gap-1 justify-center max-w-[8rem] mx-auto">
                    <div className="w-[60%] h-full bg-aura-tech-cyan rounded-sm hover:brightness-125 transition-all cursor-pointer"></div>
                    <div className="w-[40%] h-full flex flex-col gap-1">
                      <div className="h-[60%] w-full bg-aura-comfort-clay rounded-sm hover:brightness-125 transition-all cursor-pointer"></div>
                      <div className="h-[40%] w-full flex gap-1">
                        <div className="w-[50%] h-full bg-aura-comfort-green rounded-sm hover:brightness-125 transition-all cursor-pointer"></div>
                        <div className="w-[50%] h-full bg-aura-comfort-oat rounded-sm hover:brightness-125 transition-all cursor-pointer"></div>
                      </div>
                    </div>
                  </div>
                )}
              ].map((item, i) => (
                <div key={i} className="flex flex-col p-6 bg-[#0f0f0f] border border-white/10 rounded-[32px] group hover:border-white/30 transition-all hover:-translate-y-1 shadow-lg cursor-default">
                  <div className="flex-1 flex flex-col justify-end pb-8 border-b border-white/5 mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                     {item.chart}
                  </div>
                  <h5 className="text-xl font-mono text-white mb-2 leading-tight">{item.u}</h5>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.g}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-mono text-aura-comfort-clay italic font-bold">Nada de gráfico de rosca com 12 categorias. Pelo amor da cognição.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-black text-white uppercase italic">2. Hierarquia visual guia o olhar</h4>
              <p className="text-lg font-mono text-gray-300">O mais importante tem que ser a primeira coisa que o olho encontra. Use cor, tamanho e posição como roteiro visual.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-black text-white uppercase italic">3. Texto direto anexado</h4>
              <p className="text-lg font-mono text-gray-300">Não coloque legenda longe. Coloque o texto dentro ou logo ao lado. Menos movimento de olho = mais entendimento.</p>
            </div>
          </div>

          <div>
             <h4 className="text-xl font-black text-white uppercase italic mb-4">4. Cor com função</h4>
             <ul className="flex flex-col md:flex-row gap-4 mb-4">
               <li className="flex-1 p-4 bg-white/[0.04] rounded-xl text-center font-mono text-gray-200">Cor única = uma mensagem</li>
               <li className="flex-1 p-4 bg-white/[0.04] rounded-xl text-center font-mono text-gray-200">Gradiente = intensidade</li>
               <li className="flex-1 p-4 bg-white/[0.04] rounded-xl text-center font-mono text-gray-200">Contraste = categorias</li>
             </ul>
             <p className="text-lg font-bold text-aura-comfort-clay italic">Atenção: 1 em cada 12 homens tem daltonismo. Teste suas cores.</p>
          </div>

          <div>
             <h4 className="text-xl font-black text-white uppercase italic mb-4">5. Contexto sem poluição</h4>
             <p className="text-lg font-mono text-gray-300 mb-2">Mostre o dado, mas mostre também:</p>
             <div className="flex gap-4">
               <span className="px-4 py-2 bg-white/10 rounded-full text-base font-mono text-white">Fonte</span>
               <span className="px-4 py-2 bg-white/10 rounded-full text-base font-mono text-white">Benchmark</span>
               <span className="px-4 py-2 bg-white/10 rounded-full text-base font-mono text-white">Destaque significativo</span>
             </div>
          </div>
        </div>
      </div>

      {/* Boas Práticas */}
      <div className="p-8 bg-red-900/10 border border-red-500/30 rounded-[40px] shadow-xl">
        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
          <XCircle className="text-red-500 shrink-0" /> Zero tolerância para
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Gráfico 3D sem necessidade real (spoiler: quase nunca existe)",
            "Eixos começando diferente de zero (mentira visual explícita)",
            "Cores sem significado semântico",
            "Animação que não ajuda a entender",
            "Gráfico de pizza com mais de 5 fatias"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-gray-200 font-mono items-start bg-white/[0.06] p-4 rounded-xl border border-red-500/20">
              <span className="text-red-500 font-black mt-0.5">X</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Exemplo Real */}
      <div className="relative p-10 md:p-14 rounded-[48px] bg-dark-bg border border-aura-comfort-green/40 overflow-hidden shadow-2xl">
        <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter mb-8">🧪 Exemplo real de impacto</h3>
        <p className="text-lg font-mono text-gray-400 mb-8 italic">Contexto: Laboratório mostrando resultado de um projeto de gamificação sobre consumo consciente.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/[0.04] border border-white/10 rounded-3xl opacity-60 flex flex-col justify-center">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Versão Genérica (o que NÃO fazemos)</h4>
            <p className="text-lg font-mono text-white leading-relaxed text-center p-8 bg-black/50 rounded-xl">
              "Houve um aumento de 35% nas escolhas éticas após o projeto."
            </p>
          </div>
          <div className="p-6 bg-aura-comfort-green/10 border border-aura-comfort-green/40 rounded-3xl space-y-6">
            <h4 className="text-sm font-bold text-aura-comfort-green uppercase tracking-widest mb-4">Versão Visual Lab</h4>
            <div className="flex justify-between items-end border-b border-aura-comfort-green/20 pb-4">
              <div className="text-center">
                <p className="text-4xl font-black text-white">28%</p>
                <p className="text-sm font-mono text-gray-400 uppercase">Antes</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-aura-comfort-green">63%</p>
                <p className="text-sm font-mono text-aura-comfort-green uppercase">Depois</p>
              </div>
            </div>
            <p className="text-lg font-mono text-white leading-relaxed bg-black/30 p-4 rounded-xl">
              "Isso representa 1.247 toneladas de CO₂ evitadas – equivalente a tirar 270 carros da rua por um ano."
            </p>
          </div>
        </div>
        <p className="text-center mt-8 text-xl font-bold text-aura-comfort-green italic">Agora o dado virou decisão. E decisão virou ação.</p>
      </div>

      {/* Ferramentas e Referências */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px]">
          <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
            <Layers className="text-aura-tech-cyan shrink-0" /> Ferramentas
          </h3>
          <div className="space-y-6">
             <div>
               <h4 className="text-sm font-bold text-aura-tech-cyan uppercase tracking-widest mb-3">O que o lab domina:</h4>
               <ul className="space-y-2 text-lg font-mono text-gray-200">
                 <li><b className="text-white">Observable / D3.js:</b> Liberdade total de codificação visual.</li>
                 <li><b className="text-white">Tableau / Power BI:</b> Dashboards gerenciais e modelagem pesada.</li>
                 <li><b className="text-white">Google Looker Studio:</b> (Antigo Data Studio) Construção ágil de relatórios interativos e integração fluida com ecossistemas de dados.</li>
                 <li><b className="text-white">Google Sheets:</b> Manipulação primária, limpeza de dados e testes rápidos de gráficos essenciais.</li>
                 <li><b className="text-white">Python / R:</b> Ciência de dados profunda, bibliotecas estatísticas avançadas.</li>
               </ul>
             </div>
             <div>
               <h4 className="text-sm font-bold text-aura-tech-cyan uppercase tracking-widest mb-3">IA Aplicada (Inteligência Generativa):</h4>
               <ul className="space-y-2 text-lg font-mono text-gray-200">
                 <li><b className="text-white">Claude:</b> Perfeito para interpretar bases de dados complexas, extrair insights semânticos e sugerir o melhor tipo de gráfico para cada narrativa.</li>
                 <li><b className="text-white">Antigravity:</b> Agente autônomo avançado para desenvolvimento ágil. Refatora componentes de UI, cria dashboards interativos direto no código e implementa o design system em segundos.</li>
               </ul>
             </div>
             <div>
               <h4 className="text-sm font-bold text-aura-tech-cyan uppercase tracking-widest mb-3">Para inspirar:</h4>
               <p className="text-lg font-mono text-gray-200 leading-relaxed">
                 Datawrapper (simplicidade)<br/>
                 Flourish (interatividade sem código)<br/>
                 RawGraphs (pra sair do óbvio)
               </p>
             </div>
          </div>
        </div>

        <div className="p-8 bg-aura-tech-blue/40 border border-white/20 rounded-[40px]">
          <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
            <BookOpen className="text-white shrink-0" /> Referências de Excelência
          </h3>
          <ul className="space-y-3 text-lg font-mono text-gray-200 mb-6">
            <li><b className="text-white">Giorgia Lupi</b> – Data Humanism</li>
            <li><b className="text-white">Edward Tufte</b> – The Visual Display of Quantitative Info</li>
            <li><b className="text-white">Alberto Cairo</b> – The Truthful Art</li>
            <li><b className="text-white">Nadieh Bremer</b> – Data Art</li>
            <li><b className="text-white">Mike Bostock</b> – Criador do D3.js</li>
          </ul>
          <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
             <a href="https://datavizproject.com/" target="_blank" rel="noopener noreferrer" className="text-base font-mono text-aura-tech-cyan hover:underline uppercase">🔗 Data Viz Project</a>
             <a href="https://ft.com/vocabulary" target="_blank" rel="noopener noreferrer" className="text-base font-mono text-aura-tech-cyan hover:underline uppercase">🔗 FT Visual Vocabulary</a>
             <a href="https://colorbrewer2.org/" target="_blank" rel="noopener noreferrer" className="text-base font-mono text-aura-tech-cyan hover:underline uppercase">🔗 ColorBrewer</a>
          </div>
        </div>
      </div>

      {/* Conexão com 5I's & Alerta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-white/20 rounded-[40px] shadow-2xl">
          <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter mb-4">Conexão 5I's</h3>
          <ul className="space-y-3 font-mono text-base text-gray-200">
            <li><b className="text-white">Ideação:</b> padrões nos dados que existem.</li>
            <li><b className="text-white">Inambulação:</b> benchmark em gráfico.</li>
            <li><b className="text-white">Instauração:</b> clareza visual antes da estética.</li>
            <li><b className="text-white">Inspeção:</b> usuário entendeu o gráfico?</li>
            <li><b className="text-white">Implementação:</b> dashboards dinâmicos.</li>
          </ul>
        </div>
        <div className="p-8 bg-aura-comfort-clay/10 border border-aura-comfort-clay/40 rounded-[40px] shadow-2xl flex flex-col justify-center">
          <h3 className="text-2xl font-display font-black text-aura-comfort-clay uppercase italic tracking-tighter mb-4 flex items-center gap-2"><AlertTriangle size={24} /> ALERTA</h3>
          <p className="text-lg font-mono text-white mb-4">Visualização não salva dado ruim.</p>
          <ul className="space-y-2 font-mono text-base text-gray-300">
            <li>O dado é confiável?</li>
            <li>A amostra é representativa?</li>
            <li>A pergunta faz sentido?</li>
          </ul>
          <p className="mt-4 text-base font-bold text-aura-comfort-clay uppercase">Limpeza vem antes da visualização. Sempre.</p>
        </div>
      </div>
      
      {/* Footer Quote */}
      <div className="p-10 bg-aura-comfort-oat/10 border border-aura-comfort-oat/30 rounded-[40px] shadow-2xl text-center">
        <p className="text-2xl text-white font-lexend leading-relaxed italic uppercase tracking-widest">
          Número frio informa. Visualização convence. <span className="text-aura-comfort-oat font-black">História transforma.</span>
        </p>
      </div>

    </div>
  );
};
