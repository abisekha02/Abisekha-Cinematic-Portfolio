'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Activity, Bot, CheckCircle2, CircleUserRound, Code2, FileCheck2, LayoutDashboard, ScanEye, Sparkles, Workflow } from 'lucide-react';
import type { Project } from '@/data/projects';
import Reveal from './Reveal';

const icons = { hire: Bot, flow: Workflow, vision: ScanEye, vr: Activity };
const visualStyles = {
  hire: 'from-rose-950 via-[#38101b] to-[#090609]',
  flow: 'from-[#271016] via-[#180d16] to-[#090609]',
  vision: 'from-[#21120d] via-[#261018] to-[#090609]',
  vr: 'from-[#101b29] via-[#17101e] to-[#090609]',
};
function ProjectPreview({ visual, name }: { visual: Project['visual']; name: string }) {
  const reduce = useReducedMotion();
  const Icon = icons[visual];
  return <div className="preview-window relative w-full max-w-[490px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b0f]/90 shadow-2xl transition duration-700 group-hover:-translate-y-1 group-hover:rotate-[.4deg]">
    <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-white/[.035] px-3"><i className="h-2 w-2 rounded-full bg-rose-400/80"/><i className="h-2 w-2 rounded-full bg-amber-300/70"/><i className="h-2 w-2 rounded-full bg-emerald-300/70"/><span className="ml-3 truncate text-[9px] tracking-wide text-white/35">abisekha.dev / {name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</span></div>
    <div className="grid min-h-[164px] grid-cols-[44px_1fr] sm:min-h-[190px] sm:grid-cols-[58px_1fr]">
      <div className="flex flex-col items-center gap-4 border-r border-white/[.07] bg-white/[.02] py-4 text-white/35"><Icon size={15}/><LayoutDashboard size={14}/><Code2 size={14}/><Activity size={14}/></div>
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-3"><div><div className="text-[8px] uppercase tracking-[.18em] text-rose-200/70">Project workspace</div><div className="mt-1 text-xs font-semibold text-white/90 sm:text-sm">{name}</div></div><span className="rounded-full border border-emerald-300/20 bg-emerald-300/[.08] px-2 py-1 text-[8px] text-emerald-200">● UI preview</span></div>
        <div className="mt-3 grid grid-cols-3 gap-2"><div className="rounded-lg border border-white/[.08] bg-white/[.035] p-2"><span className="block text-[8px] text-white/35">Activity</span><span className="mt-1 block text-sm font-semibold">{visual === 'vision' ? '98.4%' : visual === 'flow' ? '12' : visual === 'vr' ? '3D' : 'AI'}</span><div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-rose-300" initial={{ width: '18%' }} animate={reduce ? { width: '72%' } : { width: ['28%', '72%', '56%', '82%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}/></div></div><div className="rounded-lg border border-white/[.08] bg-white/[.035] p-2"><span className="block text-[8px] text-white/35">Status</span><span className="mt-1 block text-sm font-semibold">Ready</span><div className="mt-2 flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-emerald-300"/><i className="h-1.5 w-1.5 rounded-full bg-emerald-300/50"/><i className="h-1.5 w-1.5 rounded-full bg-white/15"/></div></div><div className="rounded-lg border border-white/[.08] bg-white/[.035] p-2"><span className="block text-[8px] text-white/35">Signal</span><span className="mt-1 block text-sm font-semibold">{visual === 'hire' ? 'Match' : visual === 'flow' ? 'Route' : visual === 'vision' ? 'Detect' : 'Map'}</span><div className="mt-2 flex h-2 items-end gap-0.5">{[3, 6, 4, 8, 5, 9, 7, 10, 6, 8, 5, 9].map((height, i) => <motion.i key={i} className="flex-1 rounded-t-sm bg-rose-300/70" style={{ height: `${height}px` }} animate={reduce ? undefined : { opacity: [.35, .9, .5] }} transition={{ duration: 1.4, delay: i * .08, repeat: Infinity }}/>)}</div></div></div>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/[.07] bg-white/[.025] p-2"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-rose-400/10 text-rose-200">{visual === 'hire' ? <CircleUserRound size={14}/> : visual === 'flow' ? <CheckCircle2 size={14}/> : visual === 'vision' ? <FileCheck2 size={14}/> : <Sparkles size={14}/>}</div><div className="min-w-0 flex-1"><div className="h-1.5 w-3/4 rounded-full bg-white/25"/><div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/10"/></div><span className="text-[8px] text-rose-200/70">{visual === 'hire' ? 'Semantic match' : visual === 'flow' ? 'Approval flow' : visual === 'vision' ? 'Vision model' : 'Spatial system'}</span></div>
      </div>
    </div>
  </div>;
}
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  return <Reveal delay={index * 0.07} className="group h-full">
    <motion.article whileHover={reduce ? undefined : { y: -7 }} transition={{ type: 'spring', stiffness: 240, damping: 22 }} className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] transition-colors duration-500 hover:border-rose-400/30 hover:bg-white/[.04]">
      <div className={`relative flex min-h-[250px] items-center justify-center overflow-hidden bg-gradient-to-br ${visualStyles[project.visual]} p-5 sm:min-h-[290px] sm:p-7`}>
        <div className="absolute inset-0 site-grid opacity-50"/><motion.div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-rose-500/15 blur-3xl" animate={reduce ? undefined : { x: [0, -20, 10, 0], y: [0, 16, -8, 0], scale: [1, 1.2, .95, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}/>
        <motion.div className="relative z-10 w-full" initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .06 }}><ProjectPreview visual={project.visual} name={project.name}/></motion.div>
        <span className="absolute left-5 top-4 z-20 text-[10px] tracking-[.2em] text-white/45">PROJECT / {project.number}</span><span className="absolute bottom-4 right-5 z-20 flex items-center gap-2 text-[10px] text-white/40">Animated preview <ArrowDownRight size={12}/></span>
      </div>
      <div className="p-6 sm:p-8"><p className="section-kicker">{project.category}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{project.name}</h3><p className="mt-2 text-base text-rose-100/90">{project.headline}</p><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-[11px] text-white/65 transition-colors hover:border-rose-300/25 hover:text-white">{item}</span>)}</div>
        <p className="mt-5 border-l border-rose-400/60 pl-3 text-sm leading-6 text-white/65">{project.outcome}</p>
        <div className="mt-6 flex flex-wrap gap-4">{project.liveUrl && <a className="inline-flex items-center gap-2 text-sm font-medium text-rose-200 transition hover:translate-x-1 hover:text-white" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}{project.githubUrl && <a className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:translate-x-1 hover:text-white" href={project.githubUrl} target="_blank" rel="noreferrer">Source / GitHub <ArrowUpRight size={15}/></a>}</div>
      </div>
      </motion.article>
  </Reveal>;
}
