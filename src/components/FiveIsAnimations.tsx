import React from 'react';

const fase1SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 360" width="100%" height="100%" role="img">
<defs>
<style>
@keyframes dotPop { 0% { r:0; opacity:1; } 60% { r:5; opacity:1; } 100% { r:3; opacity:0; } }
@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes rayShoot { 0% { stroke-dashoffset:38; opacity:0; } 35% { opacity:1; } 100% { stroke-dashoffset:0; opacity:1; } }
@keyframes filamentGlow { 0%,100% { stroke: #8a5010; } 50% { stroke: #F48A79; } }
@keyframes glowPulse { 0%,100% { opacity:0.18; } 50% { opacity:0.44; } }
@keyframes rayPulse { 0%,100% { opacity:1; } 50% { opacity:0.35; } }
@keyframes floatUp { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-7px); } }
@media(prefers-reduced-motion:reduce){ *{ animation:none!important; stroke-dashoffset:0!important; opacity:1!important; } }
</style>
</defs>
<rect width="280" height="360" fill="#141410"/>
<g style="transform-origin:140px 180px; animation:floatUp 3s ease-in-out 4.2s infinite;">
  <ellipse cx="140" cy="116" rx="38" ry="30" fill="#D2A979" opacity="0" style="animation:fadeIn .5s ease 3.2s forwards, glowPulse 2.4s ease-in-out 3.7s infinite;"/>
  <circle cx="140" cy="168" r="0" fill="#D2A979" style="animation:dotPop .45s ease .1s forwards;"/>
  <path d="M106,140 C106,104 116,80 140,70 C164,80 174,104 174,140 C174,160 160,175 156,186 L124,186 C120,175 106,160 106,140 Z" fill="none" stroke="#D2A979" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray:340; stroke-dashoffset:340; animation:draw .9s cubic-bezier(.4,0,.2,1) .3s forwards;"/>
  <line x1="122" y1="190" x2="158" y2="190" stroke="#D2A979" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; animation:draw .28s ease 1.25s forwards;"/>
  <line x1="120" y1="200" x2="160" y2="200" stroke="#D2A979" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:42; stroke-dashoffset:42; animation:draw .28s ease 1.55s forwards;"/>
  <path d="M122,210 Q140,220 158,210" fill="none" stroke="#D2A979" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:44; stroke-dashoffset:44; animation:draw .28s ease 1.85s forwards;"/>
  <line x1="130" y1="214" x2="130" y2="228" stroke="#D2A979" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:16; stroke-dashoffset:16; animation:draw .18s ease 2.15s forwards;"/>
  <line x1="150" y1="214" x2="150" y2="228" stroke="#D2A979" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:16; stroke-dashoffset:16; animation:draw .18s ease 2.28s forwards;"/>
  <path d="M127,182 L127,142 Q127,132 133,132 Q139,132 139,142 Q139,132 145,132 Q151,132 151,142 L151,182" fill="none" stroke="#8a5010" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray:90; stroke-dashoffset:90; animation: draw .55s ease 2.45s forwards, filamentGlow 1.8s ease-in-out 3.1s infinite;"/>
  <line x1="140" y1="62" x2="140" y2="42" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.1s forwards, rayPulse 2s ease-in-out 3.5s infinite;"/>
  <line x1="163" y1="69" x2="176" y2="52" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.18s forwards, rayPulse 2s ease-in-out 3.65s infinite;"/>
  <line x1="180" y1="100" x2="200" y2="100" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.22s forwards, rayPulse 2s ease-in-out 3.55s infinite;"/>
  <line x1="174" y1="137" x2="192" y2="150" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.28s forwards, rayPulse 2s ease-in-out 3.75s infinite;"/>
  <line x1="100" y1="100" x2="80" y2="100" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.33s forwards, rayPulse 2s ease-in-out 3.6s infinite;"/>
  <line x1="117" y1="69" x2="104" y2="52" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.38s forwards, rayPulse 2s ease-in-out 3.7s infinite;"/>
  <line x1="106" y1="137" x2="88" y2="150" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.43s forwards, rayPulse 2s ease-in-out 3.8s infinite;"/>
  <line x1="165" y1="78" x2="180" y2="64" stroke="#F48A79" stroke-width="3" stroke-linecap="round" style="stroke-dasharray:38; stroke-dashoffset:38; opacity:0; animation:rayShoot .32s ease 3.48s forwards, rayPulse 2s ease-in-out 3.45s infinite;"/>
</g>
</svg>
`;

const fase2SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 520" width="100%" height="100%" role="img">
<defs>
<style>
@keyframes drawStroke { to { stroke-dashoffset: 0; } }
@keyframes fadeUp { from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);} }
@keyframes dotOrigin { 0%{r:0;opacity:1;}70%{r:4;opacity:1;}100%{r:2;opacity:0;} }
@keyframes windowBlink { 0%,100%{opacity:1;}50%{opacity:0.12;} }
@keyframes scrollFloat { 0%,100%{transform:translateY(0);}50%{transform:translateY(-3px);} }
@keyframes walkRight { from{transform:translateX(0);}to{transform:translateX(520px);} }
@keyframes bobY { 0%,100%{transform:translateY(0);}50%{transform:translateY(-2px);} }
@keyframes headTilt { 0%,100%{transform:rotate(0deg);}40%{transform:rotate(5deg);} }
@keyframes eyeGaze { 0%,60%,100%{transform:translateX(0);}30%{transform:translateX(2px);} }
@keyframes footL { 0%,100%{transform:rotate(15deg);}50%{transform:rotate(-15deg);} }
@keyframes footR { 0%,100%{transform:rotate(-15deg);}50%{transform:rotate(15deg);} }
@keyframes armL { 0%,100%{transform:rotate(-10deg);}50%{transform:rotate(10deg);} }
@keyframes armR { 0%,100%{transform:rotate(10deg);}50%{transform:rotate(-10deg);} }
@keyframes portalArc { 0%,100%{opacity:0.5;}50%{opacity:1;} }
.win-slow { animation: windowBlink 3.2s ease-in-out infinite; }
.win-med { animation: windowBlink 2.3s ease-in-out 0.5s infinite; }
.win-fast { animation: windowBlink 1.7s ease-in-out 1.0s infinite; }
</style>
</defs>
<rect width="680" height="520" fill="#141410"/>
<circle cx="80" cy="420" r="0" fill="#D2A979" style="animation:dotOrigin .5s ease .1s forwards;"/>
<line x1="40" y1="420" x2="640" y2="420" style="stroke:#D2A979;stroke-width:2;fill:none;stroke-linecap:round;stroke-dasharray:620;stroke-dashoffset:620;animation:drawStroke 1.2s ease .2s forwards;"/>
<line x1="40" y1="423" x2="640" y2="423" style="stroke:#3A4D3E;stroke-width:1;fill:none;stroke-linecap:round;stroke-dasharray:620;stroke-dashoffset:620;animation:drawStroke 1.4s ease .4s forwards;"/>
<g style="opacity:0;animation:fadeUp .5s ease 1.2s forwards;">
  <rect x="60" y="280" width="110" height="138" rx="4" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-dasharray:520;stroke-dashoffset:520;animation:drawStroke .8s ease 1.2s forwards;"/>
  <line x1="60" y1="296" x2="170" y2="296" style="stroke:#D2A979;stroke-width:2;fill:none;stroke-dasharray:115;stroke-dashoffset:115;animation:drawStroke .3s ease 2.0s forwards;"/>
  <rect x="70" y="304" width="90" height="14" rx="2" class="win-slow" style="stroke:#3A4D3E;stroke-width:1;fill:none;stroke-dasharray:220;stroke-dashoffset:220;animation:drawStroke .3s ease 2.3s forwards,windowBlink 3.2s ease-in-out 3s infinite;"/>
  <rect x="70" y="340" width="90" height="30" rx="2" class="win-med" style="stroke:#3A4D3E;stroke-width:1;fill:none;stroke-dasharray:250;stroke-dashoffset:250;animation:drawStroke .3s ease 2.5s forwards,windowBlink 2.3s ease-in-out 3.2s infinite;"/>
</g>
<g style="opacity:0;animation:fadeUp .5s ease 1.6s forwards;">
  <rect x="200" y="220" width="130" height="198" rx="4" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-dasharray:680;stroke-dashoffset:680;animation:drawStroke .9s ease 1.6s forwards;"/>
  <rect x="210" y="260" width="110" height="40" rx="2" class="win-fast" style="stroke:#3A4D3E;stroke-width:1;fill:none;stroke-dasharray:310;stroke-dashoffset:310;animation:drawStroke .3s ease 2.9s forwards,windowBlink 1.7s ease-in-out 3.4s infinite;"/>
  <rect x="210" y="356" width="50" height="22" rx="3" style="stroke:#F48A79;stroke-width:2;fill:none;stroke-dasharray:150;stroke-dashoffset:150;animation:drawStroke .3s ease 3.4s forwards;"/>
</g>
<g style="opacity:0;animation:fadeUp .4s ease 3.8s forwards;">
  <path d="M170,378 C185,366 195,366 200,378" style="stroke:#F48A79;stroke-width:1.5;fill:none;stroke-dasharray:3 3;animation:portalArc 2s ease-in-out infinite;"/>
  <path d="M330,368 C342,356 352,356 360,368" style="stroke:#F48A79;stroke-width:1.5;fill:none;stroke-dasharray:3 3;animation:portalArc 2s ease-in-out .4s infinite;"/>
</g>
<g style="opacity:0;animation:fadeUp .4s ease 4.0s forwards;">
  <g style="animation:walkRight 12s linear 4.2s infinite;">
    <g style="animation:bobY .5s ease-in-out infinite;transform-origin:0px 400px;">
      <circle cx="0" cy="391" r="6" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-linecap:round;"/>
      <line x1="0" y1="397" x2="0" y2="411" style="stroke:#D2A979;stroke-width:3;stroke-linecap:round;"/>
      <g style="animation:footL .5s ease-in-out infinite;transform-origin:0px 411px;"><line x1="0" y1="411" x2="-4" y2="419" style="stroke:#D2A979;stroke-width:2.5;stroke-linecap:round;"/></g>
      <g style="animation:footR .5s ease-in-out infinite;transform-origin:0px 411px;"><line x1="0" y1="411" x2="4" y2="419" style="stroke:#D2A979;stroke-width:2.5;stroke-linecap:round;"/></g>
    </g>
  </g>
</g>
</svg>
`;

const fase3SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="80 80 520 360" width="100%" height="100%" role="img">
<defs>
<style>
@keyframes dp { to { stroke-dashoffset: 0; } }
@keyframes fu { from{opacity:0;transform:translateY(5px);}to{opacity:1;transform:translateY(0);} }
@keyframes dotP { 0%{r:0;opacity:1;}60%{r:5;opacity:1;}100%{r:2;opacity:0;} }
@keyframes wbk { 0%,100%{opacity:1;}50%{opacity:.12;} }
@keyframes float { 0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);} }
</style>
</defs>
<rect x="80" y="80" width="520" height="360" fill="#141410"/>
<line x1="100" y1="375" x2="560" y2="375" style="stroke:#3A4D3E;stroke-width:1.5;stroke-linecap:round;opacity:.5;stroke-dasharray:465;stroke-dashoffset:465;animation:dp 1s ease .5s forwards;"/>
<g style="opacity:0;animation:fu .5s ease .8s forwards;">
  <line x1="148" y1="330" x2="138" y2="370" style="stroke:#D2A979;stroke-width:3;stroke-dasharray:44;stroke-dashoffset:44;animation:dp .3s ease .8s forwards;"/>
  <line x1="168" y1="330" x2="178" y2="370" style="stroke:#D2A979;stroke-width:3;stroke-dasharray:44;stroke-dashoffset:44;animation:dp .3s ease .85s forwards;"/>
  <circle cx="158" cy="265" r="14" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-dasharray:90;stroke-dashoffset:90;animation:dp .5s ease 1.9s forwards;"/>
  <path d="M200,282 L216,268" style="stroke:#D2A979;stroke-width:4;stroke-dasharray:24;stroke-dashoffset:24;animation:dp .25s ease 2.0s forwards;"/>
  <path d="M225,255 Q230,240 218,210 Q208,185 190,167" fill="none" style="stroke:#F48A79;stroke-width:1.5;stroke-dasharray:4 3;opacity:.7;stroke-dashoffset:135;animation:dp .7s ease 3.0s forwards;"/>
</g>
<g style="opacity:0;animation:fu .5s ease 1.2s forwards;">
  <rect x="190" y="148" width="168" height="118" rx="5" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-dasharray:590;stroke-dashoffset:590;animation:dp .9s ease 1.2s forwards;"/>
  <rect x="200" y="173" width="148" height="36" rx="3" style="stroke:#3A4D3E;stroke-width:1;fill:none;stroke-dasharray:4 3;stroke-dashoffset:380;animation:dp .5s ease 2.5s forwards;"/>
  <rect x="200" y="248" width="60" height="14" rx="3" style="stroke:#F48A79;stroke-width:1.5;fill:none;stroke-dasharray:155;stroke-dashoffset:155;animation:dp .3s ease 3.4s forwards;"/>
</g>
<g style="opacity:0;animation:fu .6s ease 2.2s forwards;">
  <g style="animation:float 3s ease-in-out 5s infinite;transform-origin:490px 280px;">
    <rect x="468" y="182" width="44" height="36" rx="6" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-dasharray:170;stroke-dashoffset:170;animation:dp .5s ease 2.6s forwards;"/>
    <rect x="464" y="228" width="52" height="50" rx="5" style="stroke:#D2A979;stroke-width:3;fill:none;stroke-dasharray:215;stroke-dashoffset:215;animation:dp .5s ease 3.5s forwards;"/>
  </g>
</g>
</svg>
`;

const fase4SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 360" width="100%" height="100%" role="img">
<defs>
<style>
@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes scanline { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(180px); opacity: 0; } }
@keyframes lupaFloat { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(15px, 20px); } 50% { transform: translate(-10px, 40px); } 75% { transform: translate(-25px, 10px); } }
@keyframes pulseColor { 0%, 100% { stroke: #3A4D3E; } 50% { stroke: #F48A79; } }
@keyframes checkPop { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.3); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
</style>
</defs>
<rect width="280" height="360" fill="#141410"/>
<!-- Blueprint / Grid Background -->
<path d="M40,60 L240,60 M40,100 L240,100 M40,140 L240,140 M40,180 L240,180 M40,220 L240,220" stroke="#3A4D3E" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5"/>
<path d="M80,40 L80,260 M140,40 L140,260 M200,40 L200,260" stroke="#3A4D3E" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5"/>

<!-- Wireframe Boxes -->
<rect x="60" y="80" width="160" height="40" rx="4" stroke="#D2A979" stroke-width="2" fill="none" stroke-dasharray="400" stroke-dashoffset="400" style="animation: draw 1s ease 0.2s forwards;" />
<rect x="60" y="140" width="70" height="70" rx="4" stroke="#D2A979" stroke-width="2" fill="none" stroke-dasharray="280" stroke-dashoffset="280" style="animation: draw 0.8s ease 0.6s forwards;" />
<rect x="150" y="140" width="70" height="70" rx="4" stroke="#D2A979" stroke-width="2" fill="none" stroke-dasharray="280" stroke-dashoffset="280" style="animation: draw 0.8s ease 0.8s forwards;" />

<!-- A / B Testing Labels -->
<text x="95" y="180" font-family="monospace" font-size="20" fill="#D2A979" font-weight="bold" opacity="0" style="animation: fadeIn 0.5s ease 1s forwards;">A</text>
<text x="185" y="180" font-family="monospace" font-size="20" fill="#F48A79" font-weight="bold" opacity="0" style="animation: fadeIn 0.5s ease 1.2s forwards;">B</text>

<!-- Checkmark on B -->
<path d="M170,175 L180,185 L198,160" fill="none" stroke="#F48A79" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" transform-origin="185px 175px" style="opacity: 0; animation: checkPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 4s forwards;"/>

<!-- Magnifying Glass -->
<g style="animation: lupaFloat 6s ease-in-out 1.5s infinite;">
  <circle cx="160" cy="110" r="30" stroke="#F48A79" stroke-width="4" fill="#141410" fill-opacity="0.8" stroke-dasharray="190" stroke-dashoffset="190" style="animation: draw 1s ease 1.5s forwards;" />
  <line x1="180" y1="130" x2="210" y2="160" stroke="#F48A79" stroke-width="4" stroke-linecap="round" stroke-dasharray="50" stroke-dashoffset="50" style="animation: draw 0.5s ease 2.2s forwards;" />
  <!-- Glass Reflection -->
  <path d="M140,95 Q155,85 175,95" fill="none" stroke="#F48A79" stroke-width="2" stroke-linecap="round" opacity="0" style="animation: fadeIn 0.5s ease 2.5s forwards;"/>
</g>

<!-- Scanning Beam -->
<rect x="40" y="50" width="200" height="2" fill="#F48A79" opacity="0" style="animation: scanline 3s linear 1.5s infinite;" />
</svg>
`;

const fase5SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 360" width="100%" height="100%" role="img">
<defs>
<style>
@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes gearSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes gearSpinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
@keyframes slideIn { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
</style>
</defs>
<rect width="280" height="360" fill="#141410"/>

<!-- Gear 1 -->
<g transform-origin="180px 100px" style="animation: gearSpin 8s linear infinite;">
  <circle cx="180" cy="100" r="25" stroke="#3A4D3E" stroke-width="3" fill="none" stroke-dasharray="160" stroke-dashoffset="160" style="animation: draw 1s ease 0.5s forwards;" />
  <circle cx="180" cy="100" r="10" stroke="#3A4D3E" stroke-width="2" fill="none" opacity="0" style="animation: fadeIn 0.5s ease 1s forwards;" />
  <path d="M180,65 L180,75 M180,125 L180,135 M145,100 L155,100 M205,100 L215,100 M155,75 L162,82 M198,118 L205,125 M205,75 L198,82 M162,118 L155,125" stroke="#3A4D3E" stroke-width="3" stroke-linecap="round" opacity="0" style="animation: fadeIn 0.5s ease 1.2s forwards;"/>
</g>

<!-- Gear 2 -->
<g transform-origin="130px 145px" style="animation: gearSpinRev 6s linear infinite;">
  <circle cx="130" cy="145" r="15" stroke="#D2A979" stroke-width="3" fill="none" stroke-dasharray="100" stroke-dashoffset="100" style="animation: draw 1s ease 0.8s forwards;" />
  <path d="M130,120 L130,130 M130,160 L130,170 M105,145 L115,145 M145,145 L155,145" stroke="#D2A979" stroke-width="3" stroke-linecap="round" opacity="0" style="animation: fadeIn 0.5s ease 1.5s forwards;"/>
</g>

<!-- Deployment Package / Server Block -->
<g style="animation: float 4s ease-in-out 3s infinite;">
  <!-- Base box -->
  <path d="M80,240 L140,210 L200,240 L200,280 L140,310 L80,280 Z" fill="none" stroke="#F48A79" stroke-width="3" stroke-linejoin="round" stroke-dasharray="400" stroke-dashoffset="400" style="animation: draw 1.5s ease 1.5s forwards;" />
  <!-- Inner lines for 3D box -->
  <path d="M80,240 L140,270 L200,240 M140,270 L140,310" fill="none" stroke="#F48A79" stroke-width="2" stroke-linejoin="round" stroke-dasharray="200" stroke-dashoffset="200" style="animation: draw 1s ease 2.5s forwards;" />
  
  <!-- Code brackets emerging -->
  <text x="140" y="235" font-family="monospace" font-size="24" fill="#D2A979" font-weight="bold" text-anchor="middle" opacity="0" style="animation: fadeIn 1s ease 3.2s forwards;">&lt;/&gt;</text>
</g>

<!-- Abstract code lines sliding in -->
<line x1="70" y1="180" x2="110" y2="180" stroke="#D2A979" stroke-width="3" stroke-linecap="round" opacity="0" style="animation: slideIn 0.5s ease 2.0s forwards;" />
<line x1="70" y1="195" x2="130" y2="195" stroke="#D2A979" stroke-width="3" stroke-linecap="round" opacity="0" style="animation: slideIn 0.5s ease 2.2s forwards;" />
<line x1="70" y1="210" x2="100" y2="210" stroke="#F48A79" stroke-width="3" stroke-linecap="round" opacity="0" style="animation: slideIn 0.5s ease 2.4s forwards;" />

</svg>
`;

export const SVGAnimationRender = ({ fase }: { fase: 1 | 2 | 3 | 4 | 5 }) => {
  const getSVG = () => {
    switch (fase) {
      case 1: return fase1SVG;
      case 2: return fase2SVG;
      case 3: return fase3SVG;
      case 4: return fase4SVG;
      case 5: return fase5SVG;
    }
  };

  return (
    <div 
      className="w-full h-auto aspect-[3/4] md:aspect-auto md:h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#141410] mb-6 relative group/svg"
      dangerouslySetInnerHTML={{ __html: getSVG() }}
    />
  );
};
