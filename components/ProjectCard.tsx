import { ArrowUpRight, Code2, Orbit, ScanEye, Workflow, Store, FileCheck2 } from 'lucide-react';
import type { Project } from '@/data/projects';
import Reveal from './Reveal';

const icons = { erp: Store, hire: Code2, flow: Workflow, vision: ScanEye, vr: Orbit, ocr: FileCheck2 };
const visualStyles = {
  erp: 'from-amber-950 via-[#351d14] to-black',
  hire: 'from-rose-950 via-[#38101b] to-black',
  flow: 'from-[#271016] via-[#180d16] to-black',
  vision: 'from-[#21120d] via-[#261018] to-black',
  vr: 'from-[#101b29] via-[#17101e] to-black',
  ocr: 'from-[#111b29] via-[#10131e] to-black',
};
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.visual];
  return <Reveal delay={index * 0.06} className="group h-full">
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] transition duration-500 hover:-translate-y-1 hover:border-rose-400/30 hover:bg-white/[.04] motion-reduce:transform-none">
      <div className={`relative aspect-video w-full shrink-0 overflow-hidden bg-gradient-to-br ${visualStyles[project.visual]}`}>
        {project.coverImage ? <img src={project.coverImage} alt={`${project.name} project cover`} loading="lazy" className="absolute inset-0 h-full w-full object-contain transition duration-700 group-hover:scale-[1.015]" /> : <div className="absolute inset-0 flex items-center justify-center"><div className="absolute inset-0 site-grid opacity-50" /><div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/15 bg-black/30 shadow-2xl backdrop-blur-xl"><Icon size={42} strokeWidth={1.1} className="text-rose-200" /></div></div>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20" />
        <span className="absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] tracking-[.2em] text-white/75 backdrop-blur">PROJECT / {project.number}</span>
        <span className="absolute bottom-5 right-5 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] text-white/70 backdrop-blur">{project.liveUrl ? 'Live experience' : 'Project showcase'}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="section-kicker">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{project.name}</h3>
        <p className="mt-2 text-base text-rose-100/90">{project.headline}</p>
        <p className="mt-4 text-sm leading-7 text-white/55">{project.description}</p>
        <p className="mt-4 text-xs font-medium text-white/45">{project.role}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-[11px] text-white/65">{item}</span>)}</div>
        <p className="mt-5 border-l border-rose-400/60 pl-3 text-sm leading-6 text-white/65">{project.outcome}</p>
        <div className="mt-auto flex flex-wrap gap-4 pt-6">{project.liveUrl && <a className="inline-flex items-center gap-2 text-sm font-medium text-rose-200 transition hover:text-white" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}{project.githubUrl && <a className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white" href={project.githubUrl} target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a>}</div>
      </div>
    </article>
  </Reveal>;
}
