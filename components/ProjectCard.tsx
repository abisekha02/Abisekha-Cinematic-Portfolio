'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Activity, Code2, FileCheck2, Fingerprint, LayoutDashboard, Network, ScanEye, Sparkles, Vote, Hand, Github } from 'lucide-react';
import type { Project } from '@/data/projects';
import Reveal from './Reveal';

const icons = {
  dashboard: LayoutDashboard, face: Fingerprint, network: Network, helmet: ScanEye,
  gesture: Hand, document: FileCheck2, ml: Activity, voting: Vote, sign: Sparkles,
};
const visualStyles: Record<Project['visual'], string> = {
  dashboard: 'from-[#17182f] via-[#171326] to-[#080a12]',
  face: 'from-[#102735] via-[#111a2d] to-[#080a12]',
  network: 'from-[#102c35] via-[#121c2d] to-[#080a12]',
  helmet: 'from-[#32251a] via-[#201a25] to-[#080a12]',
  gesture: 'from-[#1b1d38] via-[#20172e] to-[#080a12]',
  document: 'from-[#242039] via-[#1a1a2b] to-[#080a12]',
  ml: 'from-[#12302d] via-[#14222b] to-[#080a12]',
  voting: 'from-[#2a1b32] via-[#1a172c] to-[#080a12]',
  sign: 'from-[#24213c] via-[#1b1a2e] to-[#080a12]',
};

function ProjectPreview({ visual, name, number }: { visual: Project['visual']; name: string; number: string }) {
  const reduce = useReducedMotion();
  const Icon = icons[visual];
  const isVision = ['face', 'helmet', 'gesture', 'document', 'sign'].includes(visual);
  return <div className="preview-window relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[#090d17]/90 shadow-2xl transition duration-700 group-hover:-translate-y-1">
    <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-white/[.035] px-3"><i className="h-2 w-2 rounded-full bg-rose-300/80"/><i className="h-2 w-2 rounded-full bg-amber-200/70"/><i className="h-2 w-2 rounded-full bg-cyan-200/70"/><span className="ml-3 truncate text-[9px] tracking-wide text-white/35">PROJECT / {number} — {name.toUpperCase()}</span><span className="ml-auto text-[8px] text-cyan-100/50">INTERFACE CONCEPT</span></div>
    <div className="grid min-h-[178px] grid-cols-[42px_1fr] sm:min-h-[202px] sm:grid-cols-[54px_1fr]">
      <div className="flex flex-col items-center gap-4 border-r border-white/[.07] bg-white/[.02] py-4 text-white/35"><Icon size={15}/><LayoutDashboard size={14}/><Code2 size={14}/><Activity size={14}/></div>
      <div className="relative overflow-hidden p-3 sm:p-4">
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-violet-400/10 blur-3xl"/>
        <div className="relative flex items-start justify-between gap-3"><div><div className="text-[8px] uppercase tracking-[.2em] text-cyan-100/55">{isVision ? 'Vision pipeline' : visual === 'ml' ? 'Model workspace' : visual === 'network' ? 'Service portal' : visual === 'voting' ? 'Voting workflow' : 'Application workspace'}</div><div className="mt-1 text-xs font-semibold text-white/90 sm:text-sm">{name}</div></div><span className="rounded-full border border-cyan-200/20 bg-cyan-200/[.06] px-2 py-1 text-[8px] text-cyan-100/80">{isVision ? 'Tracking' : visual === 'ml' ? 'Inference' : 'Active view'}</span></div>
        {isVision ? <div className="relative mt-3 flex h-[82px] items-center justify-center overflow-hidden rounded-xl border border-cyan-100/10 bg-gradient-to-br from-cyan-300/[.06] to-violet-300/[.04]">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage:'linear-gradient(rgba(148,220,255,.14) 1px, transparent 1px),linear-gradient(90deg,rgba(148,220,255,.14) 1px,transparent 1px)',backgroundSize:'18px 18px'}}/>
          {visual === 'document' ? <div className="relative flex h-[62px] w-[46px] flex-col gap-1 rounded border border-cyan-100/25 bg-[#111827] p-2 shadow-lg"><div className="h-1 w-4 rounded bg-cyan-100/40"/><div className="mt-1 h-1 w-full rounded bg-white/25"/><div className="h-1 w-4/5 rounded bg-white/15"/><div className="h-1 w-full rounded bg-white/15"/><div className="mt-auto h-3 w-3 rounded-sm border border-emerald-200/60"/></div> : visual === 'gesture' ? <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-violet-200/30 bg-violet-200/[.06]"><Hand size={26} className="text-violet-100/80"/><motion.span className="absolute inset-[-9px] rounded-full border border-cyan-100/30" animate={reduce ? undefined : {scale:[.9,1.15,.9],opacity:[.4,.9,.4]}} transition={{duration:3,repeat:Infinity}}/></div> : visual === 'sign' ? <div className="relative grid grid-cols-3 gap-1">{Array.from({length:9}).map((_,i)=><motion.i key={i} className="h-2 w-2 rounded-full bg-violet-100/70" animate={reduce ? undefined : {opacity:[.25,.85,.4]}} transition={{duration:2,delay:i*.1,repeat:Infinity}}/> )}</div> : <div className="relative h-12 w-12 rounded-xl border border-cyan-100/35 bg-cyan-100/[.05]"><span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/55"/><span className="absolute left-1/2 top-0 h-full w-px bg-cyan-100/25"/><span className="absolute left-0 top-1/2 h-px w-full bg-cyan-100/25"/><motion.span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/70 shadow-[0_0_16px_rgba(103,232,249,.6)]" animate={reduce ? undefined : {x:[-7,7,-3,-7],y:[0,-5,5,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}/></div>}
          {visual !== 'document' && <motion.div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent" animate={reduce ? undefined : {y:[-40,100,-40]}} transition={{duration:4.5,repeat:Infinity,ease:'linear'}}/>}
          <span className="absolute bottom-2 right-2 text-[7px] uppercase tracking-widest text-cyan-100/55">{visual === 'document' ? 'OCR / fields' : visual === 'gesture' ? 'Landmarks' : visual === 'sign' ? 'Recognition' : visual === 'helmet' ? 'Object scan' : 'Face scan'}</span>
        </div> : <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/[.08] bg-white/[.035] p-2"><span className="block text-[8px] text-white/35">{visual === 'ml' ? 'Model' : visual === 'voting' ? 'Ballots' : 'Records'}</span><span className="mt-1 block text-sm font-semibold">{visual === 'ml' ? 'ML' : visual === 'voting' ? 'Secure' : visual === 'network' ? 'Online' : 'Live'}</span><div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-violet-300 to-cyan-200" animate={reduce ? undefined : {width:['28%','74%','51%','84%']}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}/></div></div>
          <div className="rounded-lg border border-white/[.08] bg-white/[.035] p-2"><span className="block text-[8px] text-white/35">Workflow</span><span className="mt-1 block text-sm font-semibold">Ready</span><div className="mt-2 flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-emerald-200"/><i className="h-1.5 w-1.5 rounded-full bg-emerald-200/50"/><i className="h-1.5 w-1.5 rounded-full bg-white/15"/></div></div>
          <div className="rounded-lg border border-white/[.08] bg-white/[.035] p-2"><span className="block text-[8px] text-white/35">Signal</span><span className="mt-1 block text-sm font-semibold">{visual === 'ml' ? 'Classify' : visual === 'voting' ? 'Count' : visual === 'network' ? 'Connect' : 'Manage'}</span><div className="mt-2 flex h-2 items-end gap-0.5">{[3,6,4,8,5,9,7,10,6,8,5,9].map((height,i)=><motion.i key={i} className="flex-1 rounded-t-sm bg-cyan-100/70" style={{height:`${height}px`}} animate={reduce ? undefined : {opacity:[.35,.9,.5]}} transition={{duration:1.8,delay:i*.07,repeat:Infinity}}/>)}</div></div>
        </div>}
        <div className="relative mt-2 flex items-center gap-2 rounded-lg border border-white/[.07] bg-white/[.025] p-2"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-violet-300/10 text-violet-100"><Icon size={14}/></div><div className="min-w-0 flex-1"><div className="h-1.5 w-3/4 rounded-full bg-white/25"/><div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/10"/></div><span className="text-[8px] text-cyan-100/70">{visual === 'face' ? 'Attendance log' : visual === 'document' ? 'Extracted fields' : visual === 'helmet' ? 'Detection result' : visual === 'gesture' ? 'Gesture event' : visual === 'ml' ? 'Prediction output' : visual === 'voting' ? 'Result summary' : visual === 'sign' ? 'Predicted label' : visual === 'network' ? 'Service request' : 'Dashboard view'}</span></div>
      </div>
    </div>
  </div>;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  return <Reveal delay={index * 0.045} className="group h-full">
    <motion.article whileHover={reduce ? undefined : { y: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 24 }} className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] transition-colors duration-500 hover:border-cyan-200/25 hover:bg-white/[.04]">
      <div className={`relative flex min-h-[250px] items-center justify-center overflow-hidden bg-gradient-to-br ${visualStyles[project.visual]} p-5 sm:min-h-[290px] sm:p-7`}>
        <div className="absolute inset-0 site-grid opacity-50"/><motion.div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl" animate={reduce ? undefined : {x:[0,-12,8,0],y:[0,12,-6,0],scale:[1,1.12,.97,1]}} transition={{duration:12,repeat:Infinity,ease:'easeInOut'}}/>
        <motion.div className="relative z-10 w-full" initial={reduce ? false : {opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.55,delay:index*.025}}><ProjectPreview visual={project.visual} name={project.name} number={project.number}/></motion.div>
        <span className="absolute left-5 top-4 z-20 text-[10px] tracking-[.2em] text-white/45">CASE STUDY / {project.number}</span><span className="absolute bottom-4 right-5 z-20 flex items-center gap-2 text-[10px] text-white/40">Motion preview <ArrowUpRight size={12}/></span>
      </div>
      <div className="p-6 sm:p-8"><p className="section-kicker">{project.category}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{project.name}</h3><p className="mt-2 text-base text-cyan-50/90">{project.headline}</p><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-[11px] text-white/65 transition-colors hover:border-cyan-100/25 hover:text-white">{item}</span>)}</div>
        <p className="mt-5 border-l border-cyan-100/50 pl-3 text-sm leading-6 text-white/65">{project.outcome}</p>
        <div className="mt-6 flex flex-wrap gap-4">{project.liveUrl && <a className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:translate-x-1 hover:text-white" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}{project.githubUrl && <a className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:translate-x-1 hover:text-white" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={14}/> GitHub repository <ArrowUpRight size={15}/></a>}</div>
      </div>
    </motion.article>
  </Reveal>;
}
