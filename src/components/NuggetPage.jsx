import { useLayoutEffect } from 'react'
import heroBg from '../assets/images/nugget-hero-bg.png'
import starIcon from '../assets/images/nugget-star-icon.png'
import nuggetUi1 from '../assets/images/nugget-ui1.png'
import nuggetUi2 from '../assets/images/nugget-ui2.png'
import nuggetUi3 from '../assets/images/nugget-ui3.png'
import nuggetUi4 from '../assets/images/nugget-ui4.png'
import nuggetSprite1 from '../assets/images/nugget-sprite1.png'
import nuggetSprite2 from '../assets/images/nugget-sprite2.png'
import nuggetSprite3 from '../assets/images/nugget-sprite3.png'
import nuggetSprite4 from '../assets/images/nugget-sprite4.png'
import nuggetSprite5 from '../assets/images/nugget-sprite5.png'
import nuggetSprite6 from '../assets/images/nugget-sprite6.png'
import nuggetSprite7 from '../assets/images/nugget-sprite7.png'
import nuggetSprite8 from '../assets/images/nugget-sprite8.png'
import card1 from '../assets/images/nugget-card1.png'
import pop1 from '../assets/images/nugget-pop1.png'
import recycleRanking1 from '../assets/images/nugget-recycle-ranking1.png'
import withdraw1 from '../assets/images/nugget-withdraw1.png'

const uiEvolution = [
  {
    num: '01', img: nuggetUi1,
    title: 'Layout & Foundation',
    desc: 'Established a simple layout structure while defining the overall style and color direction.',
  },
  {
    num: '02', img: nuggetUi2,
    title: 'Style Exploration',
    desc: 'Confirmed a pixel-style direction and explored different backgrounds and visual elements.',
  },
  {
    num: '03', img: nuggetUi3,
    title: 'Structure & Function',
    desc: 'Finalized layout, positioning, and core features, then began refining detailed components.',
  },
  {
    num: '04', img: nuggetUi4,
    title: 'Polish & Interaction',
    desc: 'Refined all elements and implemented animations and modals to achieve both functionality and visual completeness.',
  },
]

const spriteImgs = [
  nuggetSprite1, nuggetSprite2, nuggetSprite3, nuggetSprite4,
  nuggetSprite5, nuggetSprite6, nuggetSprite7, nuggetSprite8,
]

const stats = [
  { value: '24.8K', label: 'Active Miners' },
  { value: '1.2M', label: 'WASM Volume' },
  { value: '850', label: 'Mined Daily' },
  { value: '4.2', label: 'Floor Price' },
]

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function NuggetPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>

      {/* Nav */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-8 h-[74px]"
        style={{ background: 'rgba(13,17,23,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(151,162,235,0.15)' }}>
        <button onClick={goBack}
          className="flex items-center gap-2 font-['Heebo',sans-serif] font-medium text-[20px] cursor-pointer bg-transparent border-none"
          style={{ color: '#787cde' }}>
          ‹ back
        </button>
        <span className="font-['Heebo',sans-serif] font-semibold text-[28px]" style={{ color: '#787cde' }}>NUGGET</span>
        <div style={{ width: 109 }} />
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '100vh', minHeight: 600 }}>
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(13,17,23,0.65)' }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,220,60,0.25) 0%, rgba(238,190,35,0) 50%, transparent 100%)'
        }} />
        <div className="relative flex flex-col items-center gap-6 text-center px-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: '#d8caff' }}>
            <img src={starIcon} alt="" style={{ width: 13, height: 13 }} />
            <span className="font-['Inter',sans-serif] font-semibold text-[12px]" style={{ color: '#4f329d' }}>
              The Future of zkWasm Gaming
            </span>
          </div>
          <h1 className="font-['Inter',sans-serif] font-bold text-white" style={{ fontSize: 'clamp(64px,10vw,128px)', letterSpacing: '-6px', lineHeight: 1 }}>
            NUGGET
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-white text-[22px] tracking-[2px] uppercase max-w-[700px]" style={{ opacity: 0.85 }}>
            Fully responsible for all visual design and art direction, from concept to final assets.
          </p>
          <a href="https://nugget.delphinus.dev" target="_blank" rel="noreferrer"
            className="mt-2 px-12 py-4 rounded-[18px] font-['Inter',sans-serif] font-semibold text-[20px]"
            style={{ background: '#97a2eb', color: '#004a5d' }}>
            Play Now
          </a>
        </div>
      </section>

      {/* What is Nugget */}
      <section className="section-container py-24">
        <p className="font-['Space_Grotesk',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#f5c842' }}>
          Core Protocol
        </p>
        <div className="flex gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[56px] leading-[1.1] mb-6" style={{ color: '#f5c842' }}>
              What is<br />Nugget?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.7]" style={{ color: '#a7aabb' }}>
              Nugget is a mining-based incremental game with clear system feedback and intuitive UI. Players collect and trade mineral NFTs on-chain, competing in a zkWASM-powered marketplace where every transaction is verifiably fair.
            </p>
          </div>
          <div className="flex-1">
            <img src={card1} alt="Nugget UI" className="rounded-[18px] w-full object-cover" style={{ maxHeight: 300 }} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: 'rgba(245,200,66,0.05)', borderTop: '1px solid rgba(245,200,66,0.15)', borderBottom: '1px solid rgba(245,200,66,0.15)' }}>
        <div className="section-container grid grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-['Space_Grotesk',sans-serif] font-bold text-[48px]" style={{ color: '#f5c842' }}>{s.value}</p>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] tracking-[2px] uppercase" style={{ color: '#a7aabb' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UI Evolution */}
      <section className="section-container py-24">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>UI Evolution</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>
        <div className="grid grid-cols-2 gap-8">
          {uiEvolution.map(step => (
            <div key={step.num} className="rounded-[32px] overflow-hidden pb-8" style={{ background: 'rgba(220,220,220,0.07)', backdropFilter: 'blur(10px)' }}>
              <div className="overflow-hidden rounded-t-[32px]" style={{ height: 280 }}>
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="px-8 pt-6">
                <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] mb-2" style={{ color: '#e2e4f6' }}>0{step.num}. {step.title}</h3>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6]" style={{ color: '#9ca3af' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-game UI Elements */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>In-game UI Elements</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {spriteImgs.map((src, i) => (
            <img key={i} src={src} alt={`sprite ${i + 1}`} className="rounded-[18px] w-full object-cover" style={{ aspectRatio: '1/1' }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <img src={pop1} alt="Pop UI" className="rounded-[18px] w-full object-cover" />
          <img src={recycleRanking1} alt="Recycle Ranking" className="rounded-[18px] w-full object-cover" />
        </div>
        <div className="mt-6">
          <img src={withdraw1} alt="Withdraw UI" className="rounded-[18px] max-w-[500px] mx-auto block object-cover" />
        </div>
      </section>

      {/* Retrospective */}
      <section className="py-16" style={{ background: 'rgba(151,162,235,0.05)' }}>
        <div className="section-container max-w-[800px]">
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#97a2eb' }}>Retrospective</p>
          <p className="font-['Inter',sans-serif] font-light text-[18px] leading-[1.8]" style={{ color: '#a7aabb' }}>
            Designing for a blockchain game with real economic stakes taught me to treat UI clarity as a trust signal — every ambiguous label is a potential source of user error. If I were to redo this, I would invest more time in edge-case states for the marketplace, especially empty states and loading indicators.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: '#6372cf' }}>
              <span className="text-white font-bold text-[16px]">Y</span>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px]" style={{ color: '#e2e4f6' }}>Design Lead</p>
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase" style={{ color: '#97a2eb' }}>Delphinus Lab</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
