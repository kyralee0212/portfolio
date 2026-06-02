import { useLayoutEffect } from 'react'
import heroBg1 from '../assets/images/disco-hero-bg1.png'
import heroBg2 from '../assets/images/disco-hero-bg2.png'
import starIcon from '../assets/images/disco-star-icon.png'
import discoUi1 from '../assets/images/disco-ui1.png'
import discoUi2 from '../assets/images/disco-ui2.png'
import discoSprite1 from '../assets/images/disco-sprite1.png'
import discoSprite2 from '../assets/images/disco-sprite2.png'
import discoSprite3 from '../assets/images/disco-sprite3.png'
import discoSprite4 from '../assets/images/disco-sprite4.png'
import discoSprite5 from '../assets/images/disco-sprite5.png'
import discoSprite6 from '../assets/images/disco-sprite6.png'
import discoSprite7 from '../assets/images/disco-sprite7.png'
import discoSprite8 from '../assets/images/disco-sprite8.png'
import discoDog from '../assets/images/disco-dog.png'
import xiuDiscoDog from '../assets/images/xiu-discodog.png'
import withdrawPopup from '../assets/images/disco-withdraw-popup.png'
import joinMe from '../assets/images/disco-join-me.png'
import bar1 from '../assets/images/disco-bar1.png'
import lotteryHeat from '../assets/images/disco-lottery-heat.png'
import group10 from '../assets/images/disco-group10.png'
import goodJob from '../assets/images/disco-good-job.png'
import amazing from '../assets/images/disco-amazing.png'
import nice from '../assets/images/disco-nice.png'

const uiEvolution = [
  {
    img: discoUi1,
    title: '01. Layout & Foundation',
    desc: 'Established a simple layout structure while defining the overall style and color direction.',
  },
  {
    img: discoUi2,
    title: '02. Style Exploration',
    desc: 'Confirmed a pixel-style direction and explored different backgrounds and visual elements.',
  },
]

const spriteImgs = [
  discoSprite1, discoSprite2, discoSprite3, discoSprite4,
  discoSprite5, discoSprite6, discoSprite7, discoSprite8,
]

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function MemeDiscoPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen" style={{ background: '#0d0a1a' }}>

      {/* Nav */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-8 h-[74px]"
        style={{ background: 'rgba(13,10,26,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(151,162,235,0.15)' }}>
        <button onClick={goBack}
          className="flex items-center gap-2 font-['Heebo',sans-serif] font-medium text-[20px] cursor-pointer bg-transparent border-none"
          style={{ color: '#787cde' }}>
          ‹ back
        </button>
        <span className="font-['Heebo',sans-serif] font-semibold text-[28px]" style={{ color: '#787cde' }}>MEMEDISCO</span>
        <div style={{ width: 109 }} />
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '100vh', minHeight: 600 }}>
        <img src={heroBg1} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src={heroBg2} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ mixBlendMode: 'screen', opacity: 0.4 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(13,10,26,0.6)' }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,220,0,0.3) 0%, rgba(238,190,35,0) 50%, transparent 100%)'
        }} />
        <div className="relative flex flex-col items-center gap-6 text-center px-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: '#d8caff' }}>
            <img src={starIcon} alt="" style={{ width: 13, height: 13 }} />
            <span className="font-['Inter',sans-serif] font-semibold text-[12px]" style={{ color: '#4f329d' }}>
              The Future of zkWasm Gaming
            </span>
          </div>
          <h1 className="font-['Inter',sans-serif] font-bold text-white" style={{ fontSize: 'clamp(56px,9vw,128px)', letterSpacing: '-6px', lineHeight: 1 }}>
            MEMEDISCO
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-white text-[22px] tracking-[2px] uppercase max-w-[700px]" style={{ opacity: 0.85 }}>
            Fully responsible for all visual design and art direction, from concept to final assets.
          </p>
          <a href="https://memedisco.xyz" target="_blank" rel="noreferrer"
            className="mt-2 px-12 py-4 rounded-[18px] font-['Inter',sans-serif] font-semibold text-[20px]"
            style={{ background: '#97a2eb', color: '#004a5d' }}>
            Play Now
          </a>
        </div>
      </section>

      {/* What is Memedisco */}
      <section className="section-container py-24">
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <p className="font-['Space_Grotesk',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#69daff' }}>
              Core Protocol
            </p>
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[56px] leading-[1.1] mb-6" style={{ color: '#97a2eb' }}>
              What is<br />Memedisco?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.7]" style={{ color: '#a7aabb' }}>
              Memedisco is an interactive on-chain experience focused on character customisation and expressive motion. Players upload meme characters and compete in disco-themed NFT battles powered by zkWASM proofs, with fully transparent and verifiable outcomes on every match.
            </p>
          </div>
          <div className="flex-1">
            <img src={discoDog} alt="Discodog sprite sheet" className="rounded-[18px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* UI Evolution */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>UI Evolution</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>
        <div className="grid grid-cols-2 gap-8">
          {uiEvolution.map((step, i) => (
            <div key={i} className="rounded-[32px] pb-8" style={{ background: 'rgba(220,220,220,0.07)', backdropFilter: 'blur(10px)' }}>
              <div className="p-[15px] pb-0">
                <div className="overflow-hidden rounded-[20px]" style={{ height: 313 }}>
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="px-[15px] pt-6">
                <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] mb-2" style={{ color: '#e2e4f6' }}>{step.title}</h3>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6] pl-[22px]" style={{ color: '#9ca3af' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-game UI Elements */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>In-game UI Elements</h2>
        <p className="text-center text-[16px] mb-10" style={{ color: '#6b7280' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>

        {/* Full-width discodog banner */}
        <img src={xiuDiscoDog} alt="DiscoDog characters" className="rounded-[18px] w-full object-cover mb-8" />

        {/* Two-column layout */}
        <div className="flex gap-6 items-start">

          {/* Left column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Sprite grid in a card */}
            <div className="rounded-[24px] p-5" style={{ background: 'rgba(220,225,240,0.1)' }}>
              <div className="grid grid-cols-4 gap-3">
                {spriteImgs.map((src, i) => (
                  <img key={i} src={src} alt={`sprite ${i + 1}`} className="rounded-[12px] w-full object-cover" style={{ aspectRatio: '1/1' }} />
                ))}
              </div>
            </div>

            {/* Score bar */}
            <img src={bar1} alt="Score bar" className="rounded-[18px] w-full object-cover" />

            {/* Bottom row: good-job/nice/amazing + connecting/lottery */}
            <div className="flex gap-4 items-start">
              <div className="flex flex-col gap-3" style={{ flex: '0 0 44%' }}>
                <img src={goodJob} alt="Good Job" className="rounded-[18px] w-full object-cover" />
                <img src={nice} alt="Nice" className="rounded-[18px] w-full object-cover" />
                <img src={amazing} alt="Amazing" className="rounded-[18px] w-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <img src={group10} alt="Connecting UI" className="rounded-[18px] w-full object-cover" />
                <img src={lotteryHeat} alt="Lottery Heat" className="rounded-[18px] w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-6">
            <img src={withdrawPopup} alt="Withdraw Balance" className="rounded-[18px] w-full object-cover" />
            <img src={joinMe} alt="Upload meme" className="rounded-[18px] w-full object-cover" />
          </div>

        </div>
      </section>

      {/* Retrospective */}
      <section className="py-16" style={{ background: 'rgba(151,162,235,0.05)' }}>
        <div className="section-container max-w-[800px]">
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#97a2eb' }}>Retrospective</p>
          <p className="font-['Inter',sans-serif] font-light text-[18px] leading-[1.8]" style={{ color: '#a7aabb' }}>
            Designing Memedisco was a challenge in balancing playfulness with clarity. The meme upload flow required multiple rounds of testing to make sure users understood what was happening at each step. If I were to start over, I would allocate more time to the social/sharing features, which ended up being cut due to timeline constraints.
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
