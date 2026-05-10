import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  Calendar, 
  User as UserIcon, 
  ExternalLink, 
  FileText, 
  Monitor,
  FolderKanban,
  Tag,
  Users as UsersIcon,
  Cpu,
  ChevronDown,
  Layout,
  Star
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Types ---

interface Project {
  id: string;
  title: string;
  authors: string[];
  year: string;
  semester?: string;
  area: string;
  tech?: string;
  summary: string;
  linkProject: string;
  linkReport: string;
  isRedesign?: boolean;
}

// --- Data ---

const projectsData: Project[] = [
  // 2025
  {
    id: "v-2025-1-1",
    title: "Design system para indicadores educacionais",
    authors: ["Amanda Sartori Lima Oliveira"],
    year: "2025",
    semester: "1º",
    area: "Design System",
    tech: "Figma / Data Viz",
    summary: "Linguagem visual padronizada para visualização de dados educacionais complexos.",
    linkProject: "#",
    linkReport: "#"
  },
  {
    id: "v-2025-1-2",
    title: "SEAL THE GROOVE: Jogo de Ritmo",
    authors: ["José Paulo Rotilli dos Santos"],
    year: "2025",
    semester: "1º",
    area: "Gamificação",
    tech: "UI / Jogo de Ritmo",
    summary: "Interface de usuário para jogo de ritmo fictício, explorando feedbacks visuais e sensoriais.",
    linkProject: "https://www.figma.com/design/SeNEnuFw85fS05J7n8I5O8/TCC-II---Interface-de-Usu%C3%A1rio",
    linkReport: "https://drive.google.com/drive/folders/1XVNBkUYg7Ikxek2_mTtRvCjg-tNBJaOr"
  },
  {
    id: "v-2025-1-3",
    title: "Arqdeco: Realidade Aumentada",
    authors: ["Kevenn Wesley Keller"],
    year: "2025",
    semester: "1º",
    area: "RA / Patrimônio",
    tech: "Realidade Aumentada",
    summary: "Interface entre design emocional e artefatos Art Deco em Santa Maria/RS.",
    linkProject: "#",
    linkReport: "#"
  },
  {
    id: "v-2025-1-4",
    title: "RE.BRINQUE: Economia Circular",
    authors: ["Alexandre Campanholo Rodrigues"],
    year: "2025",
    semester: "1º",
    area: "Sustentabilidade",
    tech: "Mobile / Social",
    summary: "Aplicação de economia circular e gamificação no compartilhamento de brinquedos.",
    linkProject: "#",
    linkReport: "/TCCS/Rodrigues_Alexandre_Campanholo_2025_TCC.pdf"
  },
  {
    id: "v-2025-w-simon",
    title: "Relatório de Projeto de Interface",
    authors: ["Eduardo Simon"],
    year: "2025",
    area: "Design de Interface",
    tech: "UI / UX",
    summary: "Relatório técnico sobre o desenvolvimento de interface e experiência do usuário no laboratório.",
    linkProject: "#",
    linkReport: "/TCCS/Relatório projeto - Eduardo Simon.pdf"
  },
  // 2024
  {
    id: "v-2024-w-1",
    title: "Plataforma para Hospital Veterinário",
    authors: ["Helena Mota Antonio"],
    year: "2024",
    area: "Saúde",
    tech: "Web / Mobile",
    summary: "Design centrado no usuário para gestão e acompanhamento de pacientes veterinários.",
    linkProject: "#",
    linkReport: "/TCCS/Antonio_Helena_Mota_2024_TCC.pdf"
  },
  {
    id: "v-2024-w-2",
    title: "Redesign de Gestão e Rastreamento",
    authors: ["Mateus Moura Brikalski"],
    year: "2024",
    area: "Logística",
    tech: "Mobile / Redesign",
    summary: "Otimização da experiência de uso em fluxos de rastreio e gestão logística.",
    linkProject: "https://meet.google.com/zzk-yibs-ptx",
    linkReport: "/TCCS/Brikalski_Mateus_Moura_2024_TCC.pdf",
    isRedesign: true
  },
  {
    id: "v-2024-w-3",
    title: "Ensino de Libras",
    authors: ["Maria Clara Mocelin"],
    year: "2024",
    area: "Acessibilidade",
    tech: "Web / Educação",
    summary: "Interfaces adaptadas para o ensino de libras com base em design sensorial.",
    linkProject: "#",
    linkReport: "/TCCS/Mocelin_Maria_Clara_2024_TCC.pdf"
  },
  {
    id: "v-2024-w-4",
    title: "ONDE DESCARTO?",
    authors: ["João Marco de Abreu Christo"],
    year: "2024",
    area: "Sustentabilidade",
    tech: "Web / Social",
    summary: "Plataforma educativa coLaborativa sobre descarte correto de resíduos.",
    linkProject: "#",
    linkReport: "#"
  },
  {
    id: "v-2024-w-5",
    title: "BUMERANGUE: Deslocamento sob Demanda",
    authors: ["Fabrício Arend Maicá Pereira"],
    year: "2024",
    area: "Mobilidade",
    tech: "Mobile",
    summary: "Solução de interface para mobilidade urbana focada em usabilidade em movimento.",
    linkProject: "https://meet.google.com/qvf-vnwp-dek",
    linkReport: "/TCCS/Pereira_Fabricio_Arend_Maica_2024_TCC.pdf"
  },
  {
    id: "v-2024-2-1",
    title: "Website Evento Vértice",
    authors: ["Francisco Souza", "Letícia Albieiro", "Ana Gabriela Senger", "Gustavo Silveira de Azevedo", "Pedro Raphael Moreira"],
    year: "2024",
    semester: "2º",
    area: "Eventos",
    tech: "Web",
    summary: "Identidade visual e website para o evento Vértice, integrando multi-coLaboração.",
    linkProject: "https://labinterfacedi.framer.website/vertice",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2024/vertice_francisco_leticia_ana_gustavo_pedro.pdf"
  },
  {
    id: "v-2024-2-2",
    title: "Redesign Aplicativo Delivery Much",
    authors: ["Kevenn Keller"],
    year: "2024",
    semester: "2º",
    area: "Alimentação",
    tech: "Mobile / Redesign",
    summary: "Proposta de redesign focada em fluxos de pedido e experiência do usuário.",
    linkProject: "https://labinterfacedi.framer.website/delivery-much",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2024/delivery_much_kevenn_keller.pdf",
    isRedesign: true
  },
  {
    id: "v-2024-2-3",
    title: "Redesign Aplicativo Eugênio App",
    authors: ["Stephanie Nunes Goulart"],
    year: "2024",
    semester: "2º",
    area: "Serviços",
    tech: "Mobile / Redesign",
    summary: "Melhorias de interface e experiência para o Eugênio App.",
    linkProject: "https://labinterfacedi.framer.website/eugenio-app",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2024/eugenio_app_stephanie_goulart.pdf",
    isRedesign: true
  },
  {
    id: "v-2024-1-1",
    title: "Website Aura. Interface",
    authors: ["Lucas Garlett", "Julia Sartor"],
    year: "2024",
    semester: "1º",
    area: "Institucional",
    tech: "Web / Framer",
    summary: "Website oficial do Laboratório Interface (Versão 1).",
    linkProject: "https://labinterfacedi.framer.website/website-lab-v1",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2024/website_lab_lucas_julia.pdf"
  },
  {
    id: "v-2024-1-2",
    title: "Aplicativo Bone",
    authors: ["Paola Barichello"],
    year: "2024",
    semester: "1º",
    area: "Pets",
    tech: "Mobile",
    summary: "Aplicativo voltado para o cuidado e saúde de animais de estimação.",
    linkProject: "https://labinterfacedi.framer.website/bone",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2024/bone_paola_barichello.pdf"
  },
  {
    id: "v-2024-1-3",
    title: "Website SOS Mundo",
    authors: ["Kevenn Keller"],
    year: "2024",
    semester: "1º",
    area: "Social",
    tech: "Web",
    summary: "Plataforma para ajuda humanitária e awareness ambiental.",
    linkProject: "https://labinterfacedi.framer.website/sos-mundo",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2024/sos_mundo_kevenn_keller.pdf"
  },
  // Sem data
  {
    id: "v-nd-1",
    title: "App Controle Financeiro",
    authors: ["Letícia Albieiro"],
    year: "Sem Data",
    area: "Finanças",
    tech: "Mobile",
    summary: "Gestão financeira pessoal com interface simplificada.",
    linkProject: "https://labinterfacedi.framer.website/financeiro",
    linkReport: "https://labinterfacedi.framer.website/relatorios/controle_financeiro.pdf"
  },
  {
    id: "v-nd-2",
    title: "OCRE – Plataforma Fotográfica",
    authors: ["Ana Gabriela Senger Silva"],
    year: "Sem Data",
    area: "Fotografia",
    tech: "Web",
    summary: "Espaço para exposição e portfólio de fotógrafos.",
    linkProject: "https://labinterfacedi.framer.website/ocre",
    linkReport: "https://labinterfacedi.framer.website/relatorios/ocre_ana_gabriela.pdf"
  },
  {
    id: "v-nd-3",
    title: "Kineo App",
    authors: ["Paola Barichello"],
    year: "Sem Data",
    area: "Saúde",
    tech: "Mobile",
    summary: "Registro e acompanhamento de lesões esportivas.",
    linkProject: "https://labinterfacedi.framer.website/kineo",
    linkReport: "https://labinterfacedi.framer.website/relatorios/kineo_paola_barichello.pdf"
  },
  {
    id: "v-2023-w-nicolas",
    title: "Trabalho de Conclusão de Curso",
    authors: ["Nícolas de Almeida da Silva"],
    year: "2023",
    area: "Design Industrial",
    tech: "UI / UX",
    summary: "Desenvolvimento de projeto final focado em interfaces digitais e usabilidade.",
    linkProject: "#",
    linkReport: "/TCCS/Silva_Nícolas_de_Almeida_da_2023_TCC.pdf"
  },
  {
    id: "v-2023-w-biara",
    title: "Trabalho de Conclusão de Curso - Revisado",
    authors: ["Biara"],
    year: "2023",
    area: "Design Industrial",
    tech: "UI / UX",
    summary: "Projeto de interface e interação desenvolvido como trabalho final de graduação.",
    linkProject: "#",
    linkReport: "/TCCS/TCC 2_Biara_Revisado_Final.pdf"
  },
  {
    id: "v-2023-w-noam",
    title: "Trabalho de Conclusão de Curso",
    authors: ["Noam Machado Wurzel"],
    year: "2023",
    area: "Design Industrial",
    tech: "UI / UX",
    summary: "Estudo e desenvolvimento de interface interativa para conclusão de curso.",
    linkProject: "#",
    linkReport: "/TCCS/Wurzel_Noam_Machado_2023_TCC.pdf"
  },
  // 2023
  {
    id: "v-2023-2-1",
    title: "Aplicativo CNH",
    authors: ["Pâmela Mendonça"],
    year: "2023",
    semester: "2º",
    area: "Serviços",
    tech: "Mobile / Social",
    summary: "Iniciativa para facilitar o acesso à CNH Social.",
    linkProject: "https://labinterfacedi.framer.website/cnh-social",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2023/cnh_pamela_mendonca.pdf"
  },
  {
    id: "v-2023-2-2",
    title: "Website Fingermark",
    authors: ["Helena Smidt", "Gustavo Miranda"],
    year: "2023",
    semester: "2º",
    area: "Web",
    tech: "Web",
    summary: "Portfólio interativo para demonstração de projetos de design.",
    linkProject: "https://labinterfacedi.framer.website/fingermark",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2023/fingermark_helena_gustavo.pdf"
  },
  {
    id: "v-2023-2-3",
    title: "Aplicativo Hey Hiddo",
    authors: ["Jaqueline Petroni"],
    year: "2023",
    semester: "2º",
    area: "Social",
    tech: "Mobile",
    summary: "Conexão e interação social através de dispositivos móveis.",
    linkProject: "https://labinterfacedi.framer.website/hey-hiddo",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2023/hey_hiddo_jaqueline_petroni.pdf"
  },
  // 2022
  {
    id: "v-2022-2-1",
    title: "Mostra do DI no Metaverso",
    authors: ["Turma de 2022"],
    year: "2022",
    semester: "2º",
    area: "Cultura",
    tech: "Metaverso / Web3",
    summary: "Exposição virtual dos trabalhos de Desenho Industrial em ambiente imersivo.",
    linkProject: "https://labinterfacedi.framer.website/metaverso",
    linkReport: "https://labinterfacedi.framer.website/relatorios/2022/metaverso_mostra_di.pdf"
  },
  // 2021
  {
    id: "v-2021-1-1",
    title: "Projeto Aplicativo SAura",
    authors: ["Guilherme Mor Gomes"],
    year: "2021",
    semester: "1º",
    area: "Meio Ambiente",
    tech: "Mobile / IA",
    summary: "Auxílio na identificação de plantas nativas da região sul do Brasil através de fotografia e IA.",
    linkProject: "https://www.figma.com/file/3hUalFMD4LwWp0j6kqWq0K/SAura",
    linkReport: "https://labinterface.github.io/relatorios/2021/1/slab_guilherme_mor_gomes.pdf"
  },
  {
    id: "v-2021-1-2",
    title: "Projeto Aplicativo Colher de Chá",
    authors: ["Valentina Ortiz"],
    year: "2021",
    semester: "1º",
    area: "Saúde",
    tech: "Mobile",
    summary: "Plataforma de recomendações de chás e ervas medicinais com base em sintomas.",
    linkProject: "https://www.figma.com/file/abc123/Colher-de-Cha",
    linkReport: "/TCCS/Silva_Valentina_Montenegro_da_2023_TCC.pdf"
  },
  {
    id: "v-2021-1-3",
    title: "Plataforma Faz um Bem (Angela)",
    authors: ["Angela Nicole Lopes Ulloa"],
    year: "2021",
    semester: "1º",
    area: "Marketplace",
    tech: "Web",
    summary: "Design de interface para marketplace de produtos artesanais e serviços locais.",
    linkProject: "https://www.figma.com/file/xyz789/Faz-um-Bem-Angela",
    linkReport: "https://labinterface.github.io/relatorios/2021/1/faz_um_bem_angela_ulloa.pdf"
  },
  {
    id: "v-2021-1-4",
    title: "Plataforma Faz um Bem (Greice)",
    authors: ["Greice Pettine"],
    year: "2021",
    semester: "1º",
    area: "Marketplace",
    tech: "Web",
    summary: "Foco em organização por categorias e filtros eficientes.",
    linkProject: "https://www.figma.com/file/def456/Faz-um-Bem-Greice",
    linkReport: "https://labinterface.github.io/relatorios/2021/1/faz_um_bem_greice_pettine.pdf"
  },
  {
    id: "v-2021-1-5",
    title: "Plataforma Faz um Bem (Thayna)",
    authors: ["Thayna May"],
    year: "2021",
    semester: "1º",
    area: "Marketplace",
    tech: "Web / Gamificação",
    summary: "Abordagem gamificada para incentivar compras locais.",
    linkProject: "https://www.figma.com/file/ghi789/Faz-um-Bem-Thayna",
    linkReport: "https://labinterface.github.io/relatorios/2021/1/faz_um_bem_thayna_may.pdf"
  },
  {
    id: "v-2021-1-6",
    title: "Projeto Hybris App",
    authors: ["Gustavo Stall"],
    year: "2021",
    semester: "1º",
    area: "Gestão",
    tech: "Mobile",
    summary: "Aplicativo para gestão de projetos híbridos (ágil + tradicional).",
    linkProject: "https://www.figma.com/file/jkl012/Hybris-App",
    linkReport: "/TCCS/TCC II_GUSTAVO DE MORAES STAHL_FINAL_CORRIGIDO.pdf"
  },
  {
    id: "v-2021-1-7",
    title: "Mostra Resistência Pacífica",
    authors: ["Helga Correa", "Bianca Marchesan"],
    year: "2021",
    semester: "1º",
    area: "Cultura",
    tech: "Web / Interativo",
    summary: "Exposição virtual sobre manifestações pacíficas e direitos humanos.",
    linkProject: "https://www.figma.com/file/mno345/Resistencia-Pacific",
    linkReport: "https://labinterface.github.io/relatorios/2021/1/resistencia_pacifica_helga_bianca.pdf"
  },
  {
    id: "v-2021-1-8",
    title: "Projeto e-fono",
    authors: ["Pietro Covoro"],
    year: "2021",
    semester: "1º",
    area: "Saúde",
    tech: "Mobile",
    summary: "Aplicativo de apoio a pacientes com distúrbios de fala.",
    linkProject: "https://www.figma.com/file/pqr678/e-fono",
    linkReport: "https://labinterface.github.io/relatorios/2021/1/efono_pietro_covoro.pdf"
  },
  {
    id: "v-2021-w-fernanda",
    title: "Trabalho de Conclusão de Curso",
    authors: ["Fernanda Oliveira"],
    year: "2021",
    area: "Design Industrial",
    tech: "UI / UX",
    summary: "Projeto final de curso explorando conceitos de design de interface e experiência.",
    linkProject: "#",
    linkReport: "/TCCS/TCC_Fernanda_Oliveira 2021.pdf"
  },
  // 2020
  {
    id: "v-2020-2-1",
    title: "Projeto App Meemo",
    authors: ["Camila Santarem"],
    year: "2020",
    semester: "2º",
    area: "Social",
    tech: "Mobile / GPS",
    summary: "Diário digital com lembretes baseados em localização.",
    linkProject: "https://www.figma.com/file/stu901/Meemo",
    linkReport: "/TCCS/Camila_Santarem_TCC_FINAL.pdf"
  },
  {
    id: "v-2020-2-2",
    title: "Projeto App Re.Brinque",
    authors: ["Alexandre Campanholo"],
    year: "2020",
    semester: "2º",
    area: "Sustentabilidade",
    tech: "Mobile",
    summary: "Troca e doação de brinquedos usados entre famílias.",
    linkProject: "https://www.figma.com/file/vwx234/Re-Brinque",
    linkReport: "https://labinterface.github.io/relatorios/2020/2/rebrinque_alexandre_campanholo.pdf"
  },
  {
    id: "v-2020-2-3",
    title: "Projeto GreenBox",
    authors: ["Francielle Oliveira"],
    year: "2020",
    semester: "2º",
    area: "Sustentabilidade",
    tech: "Mobile",
    summary: "Compostagem doméstica e descarte consciente de resíduos.",
    linkProject: "https://www.figma.com/file/yzA567/GreenBox",
    linkReport: "https://labinterface.github.io/relatorios/2020/2/greenbox_francielle_oliveira.pdf"
  },
  {
    id: "v-2020-2-4",
    title: "The Daily Sketch",
    authors: ["Fabricio Arend Maica Pereira"],
    year: "2020",
    semester: "2º",
    area: "Arte",
    tech: "Rede Social",
    summary: "Rede social para artistas compartilharem um desenho por dia.",
    linkProject: "https://www.figma.com/file/BCD890/The-Daily-Sketch",
    linkReport: "https://labinterface.github.io/relatorios/2020/2/daily_sketch_fabricio_maica.pdf"
  },
  {
    id: "v-2020-2-5",
    title: "Interface para Automóvel",
    authors: ["Cezar Almeida"],
    year: "2020",
    semester: "2º",
    area: "Automotivo",
    tech: "Dashboard / IoT",
    summary: "Dashboard touchscreen para veículos antigos com conectividade.",
    linkProject: "https://www.figma.com/file/EFG123/Auto-Interface",
    linkReport: "https://labinterface.github.io/relatorios/2020/2/auto_interface_cezar_almeida.pdf"
  },
  {
    id: "v-2020-1-1",
    title: "Jardim Botânico UFSM",
    authors: ["Janaíne Taiane Perini"],
    year: "2020",
    semester: "1º",
    area: "Meio Ambiente",
    tech: "Mobile / RA",
    summary: "Guia interativo do Jardim Botânico com realidade aumentada.",
    linkProject: "https://www.figma.com/file/HIJ456/Jardim-Botanico",
    linkReport: "https://labinterface.github.io/relatorios/2020/1/jardim_botanico_janaine_perini.pdf"
  },
  {
    id: "v-2020-1-2",
    title: "Projeto Aplicativo Brinqueza",
    authors: ["Francisco Ferracutti"],
    year: "2020",
    semester: "1º",
    area: "Social",
    tech: "Mobile",
    summary: "Agendamento de brinquedos para espaços públicos infantis.",
    linkProject: "https://www.figma.com/file/KLM789/Brinqueza",
    linkReport: "https://labinterface.github.io/relatorios/2020/1/brinqueza_francisco_ferracutti.pdf"
  },
  {
    id: "v-2020-1-3",
    title: "Projeto Aplicativo Miau",
    authors: ["Ana Carolina Souza de Almeida"],
    year: "2020",
    semester: "1º",
    area: "Social",
    tech: "Mobile",
    summary: "Rede social para tutores de gatos com dicas veterinárias.",
    linkProject: "https://www.figma.com/file/NOP012/Miau",
    linkReport: "https://labinterface.github.io/relatorios/2020/1/miau_ana_carolina_almeida.pdf"
  }
];

// --- Sub-components ---

const TechLabel = ({ children, color = "green", className }: { children: React.ReactNode, color?: "green" | "cyan" | "white" | "amber" | "red", className?: string }) => (
  <span className={cn(
    "text-base font-mono px-3 py-1 rounded border uppercase tracking-widest leading-none inline-block font-bold",
    color === "green" && "text-aura-comfort-green border-aura-comfort-green/30 bg-aura-comfort-green/5",
    color === "cyan" && "text-aura-tech-cyan border-aura-comfort-oat/30 bg-aura-comfort-oat/5",
    color === "white" && "text-white border-white/30 bg-white/5",
    color === "amber" && "text-aura-comfort-clay border-aura-comfort-clay/30 bg-aura-comfort-clay/5",
    color === "red" && "text-red-500 border-red-500/30 bg-red-500/5",
    className
  )}>
    {children}
  </span>
);

export const LabProjectsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('Todas');
  const [filterYear, setFilterYear] = useState('Todos');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'alpha'>('newest');

  // Extracts unique values for filters
  const areas = useMemo(() => ['Todas', ...Array.from(new Set(projectsData.map(p => p.area)))].sort(), []);
  const years = useMemo(() => ['Todos', ...Array.from(new Set(projectsData.map(p => p.year)))].sort((a,b) => b.localeCompare(a)), []);

  const filteredAndSortedProjects = useMemo(() => {
    return projectsData
      .filter(p => {
        const matchesSearch = 
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          p.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
          p.summary.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesArea = filterArea === 'Todas' || p.area === filterArea;
        const matchesYear = filterYear === 'Todos' || p.year === filterYear;
        
        return matchesSearch && matchesArea && matchesYear;
      })
      .sort((a, b) => {
        if (sortOrder === 'newest') {
          if (a.year === 'Sem Data') return 1;
          if (b.year === 'Sem Data') return -1;
          return b.year.localeCompare(a.year) || (b.semester || '').localeCompare(a.semester || '');
        }
        if (sortOrder === 'oldest') {
          if (a.year === 'Sem Data') return 1;
          if (b.year === 'Sem Data') return -1;
          return a.year.localeCompare(b.year) || (a.semester || '').localeCompare(b.semester || '');
        }
        return a.title.localeCompare(b.title);
      });
  }, [searchTerm, filterArea, filterYear, sortOrder]);

  return (
    <div className="space-y-8">
      {/* Filters Header */}
      <div className="p-8 bg-aura-tech-blue/30 border border-white/10 rounded-[32px] space-y-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Pesquisar projetos, autores ou palavras-chave..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-bg/60 border border-white/10 rounded-[20px] pl-12 pr-4 py-4 text-[1em] font-mono outline-none focus:border-aura-comfort-oat transition-all"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Area Filter */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-aura-tech-cyan"><Tag size={14} /></div>
              <select 
                value={filterArea}
                onChange={(e) => setFilterArea(e.target.value)}
                className="w-full bg-dark-bg/60 border border-white/10 rounded-xl pl-10 pr-8 py-3 text-[1em] font-mono outline-none appearance-none cursor-pointer focus:border-aura-comfort-oat"
              >
                {areas.map(area => <option key={area} value={area} className="bg-dark-bg">{area}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={14} />
            </div>

            {/* Year Filter */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-aura-comfort-green"><Calendar size={14} /></div>
              <select 
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full bg-dark-bg/60 border border-white/10 rounded-xl pl-10 pr-8 py-3 text-[1em] font-mono outline-none appearance-none cursor-pointer focus:border-aura-comfort-green"
              >
                {years.map(year => <option key={year} value={year} className="bg-dark-bg">{year}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={14} />
            </div>

            {/* Sort Order */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-aura-comfort-clay"><FolderKanban size={14} /></div>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="w-full bg-dark-bg/60 border border-white/10 rounded-xl pl-10 pr-8 py-3 text-base font-mono outline-none appearance-none cursor-pointer focus:border-aura-comfort-clay font-bold text-white"
              >
                <option value="newest" className="bg-dark-bg">Recententes</option>
                <option value="oldest" className="bg-dark-bg">Antigos</option>
                <option value="alpha" className="bg-dark-bg">A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-white/5 overflow-x-auto pb-2">
           <span className="text-base font-mono text-gray-200 uppercase shrink-0 font-bold">Tags Rápidas:</span>
           {['Redesign', 'Mobile', 'Web', 'IA', 'Social'].map(tag => (
             <button 
               key={tag}
               onClick={() => setSearchTerm(tag)}
               className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[1em] font-mono text-gray-400 hover:text-aura-tech-cyan hover:border-aura-tech-cyan/40 transition-all shrink-0"
             >
               #{tag}
             </button>
           ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredAndSortedProjects.map((p, index) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
              className="group p-6 bg-aura-tech-blue/20 border border-white/10 rounded-[32px] hover:border-aura-comfort-oat/30 transition-all flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,255,255,0.05)]"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <TechLabel color="green" className="text-[1em] font-black">{p.year} {p.semester && `(${p.semester})`}</TechLabel>
                    <TechLabel color="cyan" className="text-[1em] font-black">{p.area}</TechLabel>
                  </div>
                  {p.isRedesign && <Star size={12} className="text-aura-comfort-clay fill-aura-comfort-clay" />}
                </div>

                <h4 className="text-lg font-display font-black text-white uppercase tracking-tight mb-3 group-hover:text-aura-tech-cyan transition-colors leading-tight min-h-[44px] italic">
                  {p.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.authors.map(author => (
                    <div key={author} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/5">
                       <UserIcon size={10} className="text-gray-500" />
                       <span className="text-base font-mono text-gray-100 font-black uppercase">{author}</span>
                    </div>
                  ))}
                </div>

                <p className="text-base text-gray-100 font-mono leading-relaxed mb-6 line-clamp-3 font-medium">
                  {p.summary}
                </p>
                
                {p.tech && (
                  <div className="flex items-center gap-2 mb-6">
                    <Cpu size={12} className="text-gray-600" />
                    <span className="text-base font-mono text-gray-200 uppercase tracking-widest font-bold">{p.tech}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 mt-auto">
                <a 
                  href={p.linkProject} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 py-2.5 bg-aura-comfort-oat/5 border border-aura-comfort-oat/20 rounded-xl text-aura-tech-cyan hover:bg-aura-comfort-oat hover:text-aura-tech-blue transition-all font-black uppercase tracking-widest text-base"
                >
                  <Monitor size={12} /> Projeto
                </a>
                <a 
                  href={p.linkReport} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-200 hover:text-white hover:border-white/30 transition-all font-bold uppercase tracking-widest text-base"
                >
                  <FileText size={12} /> Relatório
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredAndSortedProjects.length === 0 && (
        <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-[48px] bg-white/[0.01]">
           <FolderKanban size={48} className="text-gray-700 mx-auto mb-4 opacity-20" />
           <p className="text-lg font-mono text-gray-500 uppercase">Nenhum projeto encontrado.</p>
           <button 
             onClick={() => { setSearchTerm(''); setFilterArea('Todas'); setFilterYear('Todos'); }}
             className="mt-4 text-[1em] font-mono text-aura-tech-cyan hover:underline uppercase tracking-widest font-black"
           >
             Limpar filtros
           </button>
        </div>
      )}
    </div>
  );
};















