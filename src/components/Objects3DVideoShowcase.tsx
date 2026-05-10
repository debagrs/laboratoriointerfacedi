import React from 'react';
import { Video, Box, CheckCircle2, AlertTriangle, Code, PlaySquare, Settings, FileBox, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code, language }: { code: string, language: string }) => (
  <div className="relative group rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 mt-6 mb-8 shadow-2xl">
    <div className="absolute top-0 w-full bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{language}</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
    </div>
    <div className="p-6 pt-12 overflow-x-auto">
      <pre className="text-sm font-mono text-gray-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

const DataTable = ({ headers, rows }: { headers: string[], rows: React.ReactNode[][] }) => (
  <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] mt-6 mb-8">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-white/5 border-b border-white/10">
          {headers.map((h, i) => (
            <th key={i} className="p-4 text-xs font-mono text-gray-400 uppercase tracking-widest">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-white/[0.02] transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="p-4 text-sm font-lexend text-gray-300">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionHeader = ({ title, icon: Icon, subtitle }: any) => (
  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#D2A979]">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter">{title}</h3>
      {subtitle && <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mt-1">{subtitle}</p>}
    </div>
  </div>
);

export const Objects3DVideoShowcase = () => {
  return (
    <div className="space-y-24">
      {/* 1. VÍDEOS */}
      <section className="p-12 bg-aura-tech-blue/20 border border-white/10 rounded-[48px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12 scale-150">
           <Video size={300} />
        </div>
        
        <div className="relative z-10">
          <SectionHeader title="1. Vídeos na Web" subtitle="Performance, Codecs e UX" icon={PlaySquare} />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Boas Práticas */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2">
                <CheckCircle2 className="text-[#86EFAC]" size={20} />
                Boas Práticas Gerais
              </h4>
              <DataTable 
                headers={["Prática", "Por quê?"]}
                rows={[
                  [<span className="font-bold text-white">Adicionar 'controls'</span>, "Usuário precisa ter autonomia (play/pause/volume)."],
                  [<span className="font-bold text-white">Evitar autoplay com áudio</span>, "Navegadores bloqueiam e causa atrito agressivo na UX."],
                  [<span className="font-bold text-white">Usar poster (thumbnail)</span>, "Mostra referência visual imediata antes do load completo."],
                  [<span className="font-bold text-white">preload="metadata"</span>, "Economiza banda pré-carregando apenas o essencial."],
                  [<span className="font-bold text-white">Legendas/Transcrições</span>, "Obrigatório para acessibilidade severa (WCAG 2.1)."]
                ]}
              />
            </div>

            {/* Formatos */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2">
                <FileBox className="text-[#D2A979]" size={20} />
                Formatos & Codecs
              </h4>
              <DataTable 
                headers={["Formato", "Compatibilidade", "Quando usar"]}
                rows={[
                  [<span className="font-mono text-white">MP4 (H.264)</span>, "96%", <span className="text-[#86EFAC]">✅ Formato universal (Padrão ouro)</span>],
                  [<span className="font-mono text-white">WebM</span>, "94%", "Melhor compressão, ideal para backgrounds invisíveis."],
                  [<span className="font-mono text-white">OGV</span>, "80%", "Fallback estrito para navegadores legados."]
                ]}
              />
              <div className="p-4 bg-[#86EFAC]/10 border border-[#86EFAC]/30 rounded-xl flex items-start gap-3">
                 <AlertTriangle size={20} className="text-[#86EFAC] shrink-0 mt-0.5" />
                 <p className="text-sm font-lexend text-gray-200">
                   <strong className="text-white">Dica de Arquitetura:</strong> Ofereça sempre <code className="text-[#86EFAC]">MP4 + WebM + Fallback</code> em imagem estática.
                 </p>
              </div>
            </div>
          </div>

          {/* Código Vídeo */}
          <div className="mt-16 space-y-6">
            <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2">
              <Code className="text-gray-400" size={20} />
              Implementação: Background Silencioso
            </h4>
            <CodeBlock language="html" code={`<!-- Background silencioso e sem controles -->
<video 
  autoplay 
  muted 
  loop 
  playsinline 
  preload="auto"
  poster="fallback-image.jpg"
  class="background-video"
>
  <source src="bg-video.webm" type="video/webm">
  <source src="bg-video.mp4" type="video/mp4">
</video>`} />
            <CodeBlock language="css" code={`/* CSS: Vídeo de fundo responsivo */
.background-video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -1;
  object-fit: cover; /* Essencial para não distorcer */
}`} />
          </div>

        </div>
      </section>

      {/* 2. OBJETOS 3D */}
      <section className="p-12 bg-[#1A1A1A] border border-white/5 rounded-[48px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12 scale-150">
           <Box size={300} />
        </div>
        
        <div className="relative z-10">
          <SectionHeader title="2. Objetos 3D" subtitle="Renderização e Model Viewer" icon={Box} />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Formatos 3D */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2">
                <Layers className="text-[#F48A79]" size={20} />
                Formatos para Web
              </h4>
              <DataTable 
                headers={["Formato", "Descrição", "Uso"]}
                rows={[
                  [<span className="font-mono text-white">.GLB</span>, "Binary GL Transmission Format", <span className="text-[#86EFAC]">✅ Padrão Universal (Recomendado)</span>],
                  [<span className="font-mono text-white">.GLTF</span>, "JSON + Texturas externas", "Universal (WebXR)"],
                  [<span className="font-mono text-white">.USDZ</span>, "Formato proprietário Apple", "AR Quick Look (iOS 12+)"],
                  [<span className="font-mono text-white">.OBJ + MTL</span>, "Clássico, mas pesado e antigo", "Apenas legacy parsing"]
                ]}
              />
            </div>

            {/* Bibliotecas */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2">
                <Settings className="text-gray-400" size={20} />
                Engines e Bibliotecas
              </h4>
              <DataTable 
                headers={["Biblioteca", "Curva", "Uso Ideal"]}
                rows={[
                  [<strong className="text-white">Three.js</strong>, "Média", "Mais popular, enorme comunidade, controle total da GPU."],
                  [<strong className="text-white">Babylon.js</strong>, "Média", "Alta performance, engines complexas de AR/VR."],
                  [<strong className="text-white">Model Viewer</strong>, <span className="text-[#86EFAC]">Baixa</span>, "Criada pelo Google. Declarativa, embutida em 1 minuto."],
                ]}
              />
            </div>
          </div>

          {/* Código 3D */}
          <div className="mt-16 space-y-6">
            <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2">
              <Code className="text-gray-400" size={20} />
              Implementação: Model Viewer (Google)
            </h4>
            <p className="text-gray-400 font-lexend text-sm">O método moderno e indolor para injetar 3D e Realidade Aumentada nativa no navegador, sem precisar construir cenas manuais em Three.js.</p>
            <CodeBlock language="html" code={`<!-- 1. Inclua a biblioteca nativa via importmap -->
<script type="importmap">
  {
    "imports": {
      "@google/model-viewer": "https://unpkg.com/@google/model-viewer@latest/dist/model-viewer.js"
    }
  }
</script>

<!-- 2. Declare o Componente Web -->
<model-viewer 
  src="modelo.glb"
  alt="Cadeira minimalista 3D"
  auto-rotate
  camera-controls
  exposure="1.0"
  shadow-intensity="0.6"
  style="width: 100%; height: 500px;"
  ar 
  ar-modes="webxr scene-viewer quick-look"
>
</model-viewer>`} />
          </div>

          {/* Checklist */}
          <div className="mt-16 p-8 bg-black/50 border border-white/10 rounded-3xl">
             <h4 className="text-xl font-bold text-white uppercase font-lexend flex items-center gap-2 mb-6">
                <ShieldCheck className="text-[#D2A979]" size={24} />
                Checklist Final para Designers 3D
             </h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Modelo exportado sempre em formato .GLB",
                  "Peso total do arquivo < 10 MB para carregamento rápido",
                  "Texturas comprimidas (máx. 2048x2048 em JPG/WebP)",
                  "Menos de 100.000 polígonos na malha",
                  "Fallback amigável 2D caso o WebGL Rendering falhe",
                  "Suporte testado em Mobile Safari (WebGL 2.0)",
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#D2A979] shrink-0" />
                      <p className="text-sm font-mono text-gray-300">{item}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};
