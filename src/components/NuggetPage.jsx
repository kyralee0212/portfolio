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
import cinematicPreview from '../assets/images/nugget-cinematic-preview.png'
import analyticsGraph from '../assets/images/nugget-analytics-graph.svg'
import trendArrow from '../assets/images/nugget-trend-arrow.svg'
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
        <span className="font-['Heebo',sans-serif] font-semibold text-[32px]" style={{ color: '#787cde' }}>NUGGET</span>
        <a href="mailto:kyralee0212@gmail.com"
          className="flex items-center justify-center px-8 py-2 rounded-full font-['Heebo',sans-serif] font-medium text-[18px] text-white"
          style={{ background: 'linear-gradient(11deg, #787cde 20%, #a9cbff 79%)' }}>
          Work with me
        </a>
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '100vh', minHeight: 600 }}>
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.69)' }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,220,60,0.28) 0%, rgba(238,190,35,0) 50%, transparent 100%)'
        }} />
        <div className="relative flex flex-col items-center gap-6 text-center px-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: '#d8caff' }}>
            <img src={starIcon} alt="" style={{ width: 13, height: 13 }} />
            <span className="font-['Inter',sans-serif] font-semibold text-[12px]" style={{ color: '#4f329d' }}>
              The Future of zkWasm Gaming
            </span>
          </div>
          <h1 className="font-['Inter',sans-serif] font-bold text-white" style={{ fontSize: 'clamp(64px,10vw,128px)', letterSpacing: '-8px', lineHeight: 1 }}>
            NUGGET
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-white text-[22px] tracking-[3px] uppercase max-w-[700px]" style={{ opacity: 0.85 }}>
            Fully responsible for all visual design and art direction, from concept to final assets.
          </p>
          <a href="https://nugget.delphinus.dev" target="_blank" rel="noreferrer"
            className="mt-2 px-12 py-4 rounded-[18px] font-['Inter',sans-serif] font-semibold text-[20px]"
            style={{ background: '#97a2eb', color: '#004a5d' }}>
            Play Now
          </a>
        </div>
      </section>

      {/* The Essence of Discovery */}
      <section className="section-container py-24">
        <div className="flex gap-16 items-center">
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="font-['Manrope',sans-serif] font-bold text-[48px] leading-[1.0] tracking-[-1.2px]" style={{ color: '#e2e4f6' }}>
              The Essence of Discovery.
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.7]" style={{ color: '#a7aabb' }}>
              Nugget isn't just a game; it's a protocol for verifiable digital treasure.
              We leverage zero-knowledge proofs to ensure that every find is fair,
              and every asset is truly yours. Our interface is designed to breathe,
              utilizing atmospheric layers to keep the focus on the hunt.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[30px] leading-none" style={{ color: '#702ae1' }}>100%</p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] tracking-[1.4px] uppercase mt-1" style={{ color: '#a7aabb' }}>Verifiable</p>
              </div>
              <div>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[30px] leading-none" style={{ color: '#8b6be8' }}>Sub-sec</p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] tracking-[1.4px] uppercase mt-1" style={{ color: '#a7aabb' }}>Latency</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={cinematicPreview} alt="Nugget cinematic preview"
              className="rounded-[18px] w-full object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]" />
          </div>
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

      {/* Market Analytics */}
      <section className="section-container py-16">
        <div className="relative rounded-[48px] overflow-hidden px-12 pt-12 pb-12"
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Background graph line */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10 pointer-events-none">
            <img src={analyticsGraph} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative">
            <div className="mb-10">
              <h2 className="font-['Manrope',sans-serif] font-bold text-[48px] tracking-[-1.2px]" style={{ color: '#e2e4f6' }}>
                Market Analytics
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] mt-2" style={{ color: '#a7aabb' }}>
                Real-time pulse of the Nugget ecosystem across all luminary clusters.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-12">
              {/* Active Miners */}
              <div className="flex flex-col gap-2">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] tracking-[1.4px] uppercase" style={{ color: '#a7aabb' }}>Active Miners</p>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[48px] leading-none" style={{ color: '#702ae1' }}>24.8k</p>
                <div className="flex items-center gap-1">
                  <img src={trendArrow} alt="" style={{ width: 13, height: 8 }} />
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px]" style={{ color: '#16a34a' }}>+12.4%</span>
                </div>
              </div>
              {/* Volume Traded */}
              <div className="flex flex-col gap-2">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] tracking-[1.4px] uppercase" style={{ color: '#a7aabb' }}>Volume Traded</p>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[48px] leading-none" style={{ color: '#e2e4f6' }}>1.2M</p>
                <p className="font-['Inter',sans-serif] font-normal text-[12px]" style={{ color: '#a7aabb' }}>Total NGT Tokens</p>
              </div>
              {/* Mined Daily */}
              <div className="flex flex-col gap-2">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] tracking-[1.4px] uppercase" style={{ color: '#a7aabb' }}>Mined Daily</p>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[48px] leading-none" style={{ color: '#e2e4f6' }}>850</p>
                <div className="flex items-center gap-1">
                  <img src={trendArrow} alt="" style={{ width: 13, height: 8 }} />
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px]" style={{ color: '#16a34a' }}>+30.8%</span>
                </div>
              </div>
              {/* Floor Price */}
              <div className="flex flex-col gap-2">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] tracking-[1.4px] uppercase" style={{ color: '#a7aabb' }}>Floor Price</p>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[48px] leading-none" style={{ color: '#c9507c' }}>4.2</p>
                <p className="font-['Inter',sans-serif] font-normal text-[12px]" style={{ color: '#a7aabb' }}>USDT / Artifact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Audit */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(151,162,235,0.1)' }}>
        <div className="section-container" style={{ maxWidth: 1232 }}>
          <h2 className="font-['Manrope',sans-serif] font-bold text-[48px] tracking-[-1.2px] mb-8" style={{ color: '#e2e4f6' }}>
            Design Audit.
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.7]" style={{ color: '#a7aabb' }}>
            I'm really happy to have completed this game and contributed to generating revenue for the company. It's designed to be simple and easy to understand, while also giving me the chance to explore a new visual style, pixel art, which I hadn't tried before.
            <br /><br />
            If I were to revisit this project, I would further improve the colour palette, as it currently feels a bit muted and lacks the vibrant, playful energy typical of games. I would also enhance the motion design by adding more dynamic elements to enrich the overall experience.
          </p>
        </div>
      </section>

    </div>
  )
}
