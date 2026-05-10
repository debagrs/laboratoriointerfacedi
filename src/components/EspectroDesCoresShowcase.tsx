import React from 'react';
import { Palette, Brain, ShieldCheck, Link as LinkIcon, CheckCircle2, ExternalLink } from 'lucide-react';

// --- Shared sub-components ---

const TechLabel = ({ children, color = 'cyan' }: { children: React.ReactNode; color?: 'cyan' | 'amber' | 'white' | 'green' }) => {
  const styles: Record<string, string> = {
    cyan:  'text-[#00FFFF] border-[#00FFFF]/30 bg-[#00FFFF]/5',
    amber: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
    white: 'text-white border-white/30 bg-white/5',
    green: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  };
  return (
    <span className={`text-base font-mono px-3 py-1 rounded border uppercase tracking-widest font-black italic inline-block ${styles[color]}`}>
      {children}
    </span>
  );
};

const RefLink = ({ title, url }: { title: string; url?: string }) => (
  <a
    href={url || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#00FFFF]/40 hover:bg-white/[0.08] transition-all group"
  >
    <div className="flex items-center gap-3">
      <LinkIcon size={16} className="text-gray-500 group-hover:text-[#00FFFF] transition-colors" />
      <span className="text-base font-mono text-gray-200 group-hover:text-white transition-colors">{title}</span>
    </div>
    <ExternalLink size={14} className="text-gray-600 group-hover:text-[#00FFFF] transition-colors" />
  </a>
);

const Sec = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 text-[#00FFFF] border-b border-[#00FFFF]/30 pb-3">
      <Icon size={20} />
      <h4 className="text-xl font-display font-black uppercase tracking-widest italic">{title}</h4>
    </div>
    <div>{children}</div>
  </div>
);

// --- Main export ---

export const EspectroDesCoresShowcase = () => (
  <div className="space-y-16">

    {/* Swatches principais + sistema semântico */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 bg-[#1A1A30]/60 border border-white/10 rounded-[40px] space-y-6 shadow-2xl">
        <TechLabel color="cyan">Espectro do Projeto</TechLabel>
        <div className="space-y-4">
          {[
            { bg: '#00FFFF', shadow: 'rgba(0,255,255,0.2)', nome: 'Tech Cyan', desc: '#00FFFF • Foco & Precisão' },
            { bg: '#86EFAC', shadow: 'rgba(134,239,172,0.2)', nome: 'Comfort Green', desc: '#86EFAC • Suporte & Equilíbrio' },
            { bg: '#D2A979', shadow: 'rgba(210,169,121,0.2)', nome: 'Comfort Oat', desc: '#D2A979 • Calor & Acolhimento' },
            { bg: '#0A0A10', shadow: 'transparent', nome: 'Fundo Escuro', desc: '#0A0A10 • Neutral Dark', border: true },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div
                className="w-14 h-14 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: s.bg, boxShadow: `0 4px 16px ${s.shadow}`, border: s.border ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
              />
              <div>
                <p className="text-base font-display font-black text-white uppercase italic leading-tight">{s.nome}</p>
                <p className="text-base font-mono text-gray-400 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[40px] space-y-6">
        <TechLabel color="cyan">Sistema Semântico</TechLabel>
        <div className="grid grid-cols-2 gap-4">
          {[
            { bg: '#EF4444', text: 'text-red-200', Label: 'Erro / Alerta', subtle: 'bg-red-500/10 border-red-500/20' },
            { bg: '#F59E0B', text: 'text-amber-200', Label: 'Aviso', subtle: 'bg-amber-500/10 border-amber-500/20' },
            { bg: '#22C55E', text: 'text-emerald-300', Label: 'Sucesso', subtle: 'bg-emerald-500/10 border-emerald-500/20' },
            { bg: '#3B82F6', text: 'text-blue-200', Label: 'Informação', subtle: 'bg-blue-500/10 border-blue-500/20' },
          ].map((s, i) => (
            <div key={i} className={`p-4 rounded-xl border text-center ${s.subtle}`}>
              <div className="w-full h-8 rounded-lg mb-2" style={{ backgroundColor: s.bg }} />
              <span className={`text-base font-mono uppercase font-bold ${s.text}`}>{s.Label}</span>
            </div>
          ))}
        </div>
        <p className="text-base font-mono text-gray-500 italic leading-relaxed">
          Cores semânticas devem sempre ser acompanhadas de ícone + texto. Nunca dependa exclusivamente da cor para transmitir estado.
        </p>
      </div>
    </div>

    {/* Sistemas de cores */}
    <Sec title="Sistemas de Representação de Cores" icon={Palette}>
      <p className="text-base font-mono text-gray-300 leading-relaxed mb-6">
        Cores podem ser codificadas em diferentes modelos matemáticos. Cada um tem vantagens específicas para design digital.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            Label: 'HEX', ex: '#1A1A30',
            desc: 'Notação hexadecimal. Padrão em CSS, HTML e ferramentas de design. Compacto e universal.',
            tip: 'Use para design tokens e valores fixos no código.',
            c: '#00FFFF',
          },
          {
            Label: 'RGB', ex: 'rgb(0, 255, 255)',
            desc: 'Red, Green, Blue. Modelo aditivo baseado na luz. Nativo dos monitores. Permite manipulação programática de canal.',
            tip: 'Útil para manipular cores com JavaScript/CSS dinâmico.',
            c: '#A855F7',
          },
          {
            Label: 'HSL', ex: 'hsl(180, 100%, 50%)',
            desc: 'Hue (0–360°), Saturation (%), Lightness (%). O sistema mais intuitivo para designers criarem variações tonais.',
            tip: 'Ideal para construir escalas de cores e paletas consistentes.',
            c: '#D2A979',
          },
          {
            Label: 'OKLCH', ex: 'oklch(87% 0.2 190)',
            desc: 'Lightness, Chroma, Hue no espaço perceptual uniforme. Variações de luminância são realmente iguais para o olho humano.',
            tip: 'Recomendado para design systems com acessibilidade perceptual rigorosa.',
            c: '#F48A79',
          },
        ].map((s, i) => (
          <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] space-y-3 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-2xl font-display font-black uppercase italic" style={{ color: s.c }}>{s.Label}</span>
              <code className="text-base font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">{s.ex}</code>
            </div>
            <p className="text-base font-mono text-gray-300 leading-relaxed">{s.desc}</p>
            <p className="text-base font-mono font-bold italic" style={{ color: s.c }}>→ {s.tip}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Semântica de cores */}
    <Sec title="Regras Básicas de Semântica" icon={Brain}>
      <p className="text-base font-mono text-gray-300 leading-relaxed mb-6">
        Cores carregam significados culturais e funcionais consolidados. Usá-las semanticamente cria interfaces previsíveis e confiáveis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { hex: '#EF4444', nome: 'Vermelho', papel: 'Erro • Perigo • Cancelar', obs: 'Alta urgência. Use com moderação — excesso gera ansiedade.' },
          { hex: '#F59E0B', nome: 'Âmbar', papel: 'Aviso • Atenção • Pendente', obs: 'Alerta moderado. Indica que algo precisa de revisão.' },
          { hex: '#22C55E', nome: 'Verde', papel: 'Sucesso • Confirmado • Seguro', obs: 'Processado mais rapidamente pelo cérebro como "liberado".' },
          { hex: '#3B82F6', nome: 'Azul', papel: 'Informação • Neutro • Link', obs: 'Confiança e calma. Padrão universal para interação.' },
          { hex: '#A855F7', nome: 'Roxo', papel: 'Premium • Criatividade', obs: 'Associado a exclusividade e inovação em marcas tech.' },
          { hex: '#6B7280', nome: 'Cinza', papel: 'Desabilitado • Inativo', obs: 'Indica ausência de interação disponível no momento.' },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-white/[0.02] border border-white/10 rounded-3xl space-y-3 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 shadow-lg" style={{ backgroundColor: item.hex }} />
              <div>
                <p className="text-base font-display font-black text-white uppercase italic leading-tight">{item.nome}</p>
                <p className="text-base font-mono text-gray-400 mt-0.5">{item.papel}</p>
              </div>
            </div>
            <p className="text-base font-mono text-gray-500 leading-relaxed italic">{item.obs}</p>
          </div>
        ))}
      </div>
      <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
        <p className="text-base font-mono font-bold text-amber-400 uppercase mb-2">⚠ Contexto cultural importa</p>
        <p className="text-base font-mono text-gray-300 leading-relaxed">
          O branco representa luto em países asiáticos; o vermelho simboliza boa sorte na China. Em produtos globais, nunca dependa exclusivamente da cor — sempre combine cor + ícone + texto.
        </p>
      </div>
    </Sec>

    {/* Como construir uma boa paleta */}
    <Sec title="Como Construir uma Boa Paleta" icon={Palette}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        <div className="space-y-4">
          <p className="text-base font-mono text-gray-300 leading-relaxed">Uma paleta bem estruturada resolve hierarquia, consistência e acessibilidade ao mesmo tempo. Use sempre uma estrutura com propósito definido.</p>
          {[
            { n: '01', t: 'Cor Primária', d: 'Identidade da interface. Máximo 1 cor. Aparece em ações principais, botões CTA e foco.' },
            { n: '02', t: 'Cor Secundária', d: 'Complementa a primária. Usada em hover states, elementos de suporte e componentes secundários.' },
            { n: '03', t: 'Neutras (Grays)', d: 'Espinha dorsal da interface. Fundos, bordas e textos. Mínimo 5 tonalidades (50 → 900).' },
            { n: '04', t: 'Semânticas', d: 'Sucesso (verde), Erro (vermelho), Aviso (âmbar), Info (azul). Funcionais, não decorativas.' },
            { n: '05', t: 'Superfícies', d: 'Cores de fundo de cards e painéis. Neutras com leve tinte da cor primária.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-[#00FFFF]/20 transition-all">
              <span className="text-[#00FFFF] font-black italic text-xl shrink-0">{item.n}.</span>
              <div>
                <p className="text-base font-black text-white uppercase">{item.t}</p>
                <p className="text-base font-mono text-gray-400 leading-relaxed mt-0.5">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-base font-black text-[#00FFFF] uppercase mb-4">Regra 60 – 30 – 10</p>
            <div className="space-y-3">
              {[
                { pct: '60%', w: '60%', bg: '#0A0A10', border: '1px solid rgba(255,255,255,0.1)', Label: 'Fundo dominante (superfícies, fundo)' },
                { pct: '30%', w: '30%', bg: '#1A1A30', border: 'none', Label: 'Secundária (cards, painéis)' },
                { pct: '10%', w: '10%', bg: '#00FFFF', border: 'none', Label: 'Destaque (ações, foco)' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 rounded-xl flex items-center justify-center font-black text-base" style={{ width: b.w, backgroundColor: b.bg, border: b.border, color: b.bg === '#00FFFF' ? '#0A0A10' : '#fff', minWidth: '3.5rem' }}>{b.pct}</div>
                  <p className="text-base font-mono text-gray-300">{b.Label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-base font-black text-amber-400 uppercase mb-3">Harmonias cromáticas</p>
            <div className="space-y-2">
              {[
                { t: 'Monocromática', d: 'Variações de uma só cor. Elegante e coeso.' },
                { t: 'Complementar', d: 'Cores opostas no círculo cromático. Alto contraste.' },
                { t: 'Análoga', d: 'Cores adjacentes. Harmonia e calma.' },
                { t: 'Triádica', d: '3 cores equidistantes. Vibrante, exige equilíbrio.' },
              ].map((h, i) => (
                <p key={i} className="text-base font-mono text-gray-300">
                  <span className="text-amber-400 font-bold">● {h.t}: </span>{h.d}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Sec>

    {/* Acessibilidade WCAG */}
    <Sec title="Acessibilidade de Cores (WCAG 2.1)" icon={ShieldCheck}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl space-y-4">
          <TechLabel color="green">Contraste Mínimo Exigido</TechLabel>
          <div className="space-y-3">
            {[
              { nivel: 'AA — Texto normal', valor: '4.5:1', ex: 'Corpo de texto, Labels, parágrafos' },
              { nivel: 'AA — Texto grande', valor: '3:1', ex: 'H1, H2, botões (18pt+ ou 14pt bold)' },
              { nivel: 'AA — Elementos UI', valor: '3:1', ex: 'Ícones, bordas de input, gráficos' },
              { nivel: 'AAA — Máximo', valor: '7:1', ex: 'Acessibilidade avançada — ideal' },
            ].map((c, i) => (
              <div key={i} className="flex justify-between items-start gap-4 border-b border-white/5 pb-3">
                <div>
                  <p className="text-base font-mono font-bold text-white">{c.nivel}</p>
                  <p className="text-base font-mono text-gray-500 mt-0.5">{c.ex}</p>
                </div>
                <span className="text-[#00FFFF] font-black text-xl shrink-0">{c.valor}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-3xl">
            <p className="text-base font-black text-red-400 uppercase mb-3">Não dependa só da cor</p>
            <p className="text-base font-mono text-gray-300 leading-relaxed mb-4">
              8% dos homens têm algum tipo de daltonismo. Nunca transmita informação exclusivamente por cor.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className="text-base font-mono text-emerald-300">Cor + ícone + texto</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="text-base font-mono text-red-300">✗ Só cor</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
            <p className="text-base font-black text-blue-400 uppercase mb-3">Tipos de daltonismo</p>
            <div className="space-y-2">
              {[
                { t: 'Deuteranopia', d: 'Dificuldade com verde (mais comum)' },
                { t: 'Protanopia', d: 'Dificuldade com vermelho' },
                { t: 'Tritanopia', d: 'Dificuldade com azul (rara)' },
                { t: 'Acromatopsia', d: 'Visão em escala de cinza' },
              ].map((d, i) => (
                <p key={i} className="text-base font-mono text-gray-300">
                  <span className="text-blue-300 font-bold">{d.t}: </span>{d.d}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Sec>

    {/* Psicologia das Cores — Eva Heller */}
    <div className="p-10 bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-[48px] space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0 w-24 h-32 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg">
          <span className="text-4xl">📕</span>
          <span className="text-base font-mono text-amber-400 uppercase text-center leading-tight px-2 font-bold">EVA HELLER</span>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <TechLabel color="amber">Referência Fundamental</TechLabel>
            <TechLabel color="white">Psicologia • Percepção • Cultura</TechLabel>
          </div>
          <h4 className="text-2xl font-display font-black text-white uppercase italic leading-tight">A Psicologia das Cores</h4>
          <p className="text-base font-mono text-amber-400 font-bold italic">Eva Heller — Gustavo Gili, 2013</p>
          <p className="text-base font-mono text-gray-300 leading-relaxed">
            A pesquisadora alemã Eva Heller estudou com mais de 2.000 participantes as associações emocionais e culturais de cada cor. O livro demonstra como as cores agem de forma diferente dependendo do contexto, dos valores ao redor e das combinações que estabelecem entre si. É leitura obrigatória para designers de produto.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { hex: '#3B82F6', nome: 'Azul', heller: '"A cor preferida da maioria. Associada a confiança, distância e fidelidade."' },
          { hex: '#EF4444', nome: 'Vermelho', heller: '"A cor do amor e do ódio. A mais ambivalente — pode significar paixão ou perigo."' },
          { hex: '#22C55E', nome: 'Verde', heller: '"Cor da natureza e da esperança. A mais tranquilizante depois do azul."' },
          { hex: '#EAB308', nome: 'Amarelo', heller: '"Cor do otimismo, mas também da covardia. O contexto é tudo."' },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-black/30 border border-white/10 rounded-3xl space-y-3 hover:border-white/20 transition-all">
            <div className="w-full h-3 rounded-full" style={{ backgroundColor: item.hex }} />
            <p className="text-base font-display font-black text-white uppercase italic">{item.nome}</p>
            <p className="text-base font-mono text-gray-400 leading-relaxed italic">{item.heller}</p>
          </div>
        ))}
      </div>
      <RefLink title="A Psicologia das Cores — Eva Heller (Gustavo Gili)" url="https://www.ggili.com.br/a-psicologia-das-cores" />
    </div>

    {/* Referências */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Sec title="Teoria & Pesquisa" icon={Brain}>
        <div className="space-y-3">
          <RefLink title="Interaction Design Foundation — Teoria das Cores" url="https://www.interaction-design.org/literature/topics/color-theory" />
          <RefLink title="Adobe Color — Verificador de Acessibilidade" url="https://color.adobe.com/create/color-accessibility" />
          <RefLink title="WCAG 2.1 — Diretrizes Completas (W3C)" url="https://www.w3.org/TR/WCAG21/" />
          <RefLink title="Who Can Use — Simulador de daltonismo" url="https://www.whocanuse.com/" />
        </div>
      </Sec>
      <Sec title="Ferramentas & Geradores" icon={LinkIcon}>
        <div className="space-y-3">
          <RefLink title="Coolors — Gerador de Paletas" url="https://coolors.co/" />
          <RefLink title="UI Colors — Escalas Tailwind" url="https://uicolors.app/" />
          <RefLink title="Khroma — Paletas com IA" url="https://khroma.co/" />
          <RefLink title="Realtime Colors — Preview em tempo real" url="https://www.realtimecolors.com/" />
          <RefLink title="Palettte — Edição de gradientes de paleta" url="https://palettte.app/" />
          <RefLink title="Colour Contrast Analyser (TPGI)" url="https://www.tpgi.com/color-contrast-checker/" />
        </div>
      </Sec>
    </div>
  </div>
);















