import { useLayoutEffect } from 'react'
import phoneImg from '../assets/images/zkwasm-phone.png'
import ellipse1 from '../assets/images/zkwasm-ellipse1.png'
import ellipse2 from '../assets/images/zkwasm-ellipse2.png'
import zkwPartnerYZiLabs from '../assets/images/zkwasm-partner-yzilabs.png'
import zkwPartnerOKG from '../assets/images/zkwasm-partner-okg.png'
import zkwPartnerHashKey from '../assets/images/zkwasm-partner-hashkey.png'
import zkwPartnerMirana from '../assets/images/zkwasm-partner-mirana.png'
import zkwPartnerUnicornVerse from '../assets/images/zkwasm-partner-unicornverse.png'
import zkwPartnerSevenX from '../assets/images/zkwasm-partner-sevenx.png'
import zkwFeatVerifiable from '../assets/images/zkwasm-feat-verifiable.png'
import zkwFeatPerformance from '../assets/images/zkwasm-feat-performance.png'
import zkwFeatDecentralized from '../assets/images/zkwasm-feat-decentralized.png'
import zkwFeatWasm from '../assets/images/zkwasm-feat-wasm.png'
import zkwIllus1 from '../assets/images/zkwasm-illus1.png'
import zkwIllus2 from '../assets/images/zkwasm-illus2.png'
import zkwIllus3 from '../assets/images/zkwasm-illus3.png'
import zkwIllus4 from '../assets/images/zkwasm-illus4.png'
import zkwIllus5 from '../assets/images/zkwasm-illus5.png'
import zkwIllus6 from '../assets/images/zkwasm-illus6.png'
import zkwMockup1 from '../assets/images/zkwasm-mockup1.png'
import zkwMockup2 from '../assets/images/zkwasm-mockup2.png'
import zkwMockup3 from '../assets/images/zkwasm-mockup3.png'

const partners = [
  { img: zkwPartnerYZiLabs, name: 'YZiLabs' },
  { img: zkwPartnerOKG, name: 'OKG' },
  { img: zkwPartnerHashKey, name: 'HashKey' },
  { img: zkwPartnerMirana, name: 'Mirana' },
  { img: zkwPartnerUnicornVerse, name: 'UnicornVerse' },
  { img: zkwPartnerSevenX, name: 'SevenX' },
]

const featureIcons = [
  { img: zkwFeatVerifiable, label: 'Fully Verifiable' },
  { img: zkwFeatPerformance, label: 'High Performance' },
  { img: zkwFeatDecentralized, label: 'Decentralized' },
  { img: zkwFeatWasm, label: 'WASM Ready' },
]

const illustrations = [
  { img: zkwIllus1, title: 'Prepare Application Bytecode (WASM)' },
  { img: zkwIllus2, title: 'Run in ZKWASM Virtual Machine' },
  { img: zkwIllus3, title: 'Generate & Batch Proofs' },
  { img: zkwIllus4, title: 'Utilize Prover Network' },
  { img: zkwIllus5, title: 'Deploy via ZKWASM Deployment Service' },
  { img: zkwIllus6, title: 'Launch on ZKWASM Apps (Launchpad)' },
]

const mockupCards = [zkwMockup1, zkwMockup2, zkwMockup3]

const donutColors = ['#69daff', '#d4c8f2', '#8596ff', '#cf8cff']
const tokenDist = [
  { color: '#69daff', label: 'Ecosystem & Mining', pct: '35%' },
  { color: '#d4c8f2', label: 'Others', pct: '32%' },
  { color: '#8596ff', label: 'Ecosystem & Mining', pct: '18%' },
  { color: '#cf8cff', label: 'Team & Contributors', pct: '15%' },
]

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function ZKwasmHubPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-8 h-[74px] bg-white" style={{ borderBottom: '1px solid rgba(151,162,235,0.2)' }}>
        <button onClick={goBack}
          className="flex items-center gap-2 font-['Heebo',sans-serif] font-medium text-[20px] cursor-pointer bg-transparent border-none"
          style={{ color: '#787cde' }}>
          ‹ back
        </button>
        <span className="font-['Heebo',sans-serif] font-semibold text-[28px]" style={{ color: '#787cde' }}>ZKwasm Hub</span>
        <div style={{ width: 109 }} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #f5f0ff 100%)' }}>
        <div className="absolute pointer-events-none" style={{ left: -40, top: 88, width: 715, height: 654, opacity: 0.25 }}>
          <img src={ellipse1} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute pointer-events-none" style={{ right: -297, top: 331, width: 829, height: 904, opacity: 0.2 }}>
          <img src={ellipse2} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="section-container relative flex items-center gap-16" style={{ paddingTop: 80, paddingBottom: 80, minHeight: '100vh' }}>
          {/* Left: phone mockup */}
          <div className="relative flex-shrink-0" style={{ width: 377 }}>
            <div className="absolute rounded-full border-4 border-blue-300 opacity-20" style={{ width: 357, height: 621, left: 10, top: 30, transform: 'rotate(12.77deg)' }} />
            <img src={phoneImg} alt="ZKwasm Hub app mockup" className="relative rounded-[22px] shadow-2xl" style={{ width: 377, height: 637, objectFit: 'cover' }} />
          </div>

          {/* Right: text */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 self-start px-4 py-2 rounded-full border" style={{ background: 'rgba(96,122,251,0.08)', borderColor: 'rgba(96,122,251,0.2)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#607afb' }} />
              <span className="font-['Public_Sans',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase" style={{ color: '#607afb' }}>
                Next-Gen ZK Infrastructure
              </span>
            </div>
            <h1 className="font-['Public_Sans',sans-serif] font-black leading-[1.15]" style={{ fontSize: 'clamp(36px,5vw,60px)', color: '#6372cf', letterSpacing: '-1.8px' }}>
              Effortless ZK-Proof Generation for Any Code
            </h1>
            <p className="font-['Public_Sans',sans-serif] font-normal text-[18px] leading-[1.65] max-w-[580px]" style={{ color: '#94a3b8' }}>
              Unlock the power of ZK-Proof generation for WASM-based applications with seamless deployment and high-performance infrastructure.
            </p>
            <a href="https://zkwasmhub.com" target="_blank" rel="noreferrer"
              className="self-start px-10 py-4 rounded-[18px] font-['Public_Sans',sans-serif] font-bold text-[16px] text-white"
              style={{ background: '#97a2eb' }}>
              Visit website
            </a>
          </div>
        </div>
      </section>

      {/* What is + Economy */}
      <section className="section-container py-24">
        <div className="grid grid-cols-2 gap-16">
          {/* Left: What is */}
          <div className="flex flex-col gap-6">
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px]" style={{ color: '#141928' }}>What is zkWASM Hub?</h2>
            <p className="font-['Public_Sans',sans-serif] text-[18px] leading-[1.65]" style={{ color: '#64748b' }}>
              zkWASM Hub is a decentralized infrastructure layer designed to bridge the gap between traditional software development and the blockchain ecosystem.
            </p>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.65]" style={{ color: '#64748b' }}>
              By leveraging Zero-Knowledge Proofs for WebAssembly, we enable developers to run complex computations off-chain while maintaining full on-chain verifiability.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {featureIcons.map(f => (
                <div key={f.label} className="flex items-center gap-3 px-5 py-3 rounded-[10px] border" style={{ background: 'rgba(151,162,235,0.08)', borderColor: '#97a2eb' }}>
                  <img src={f.img} alt={f.label} className="w-6 h-6 object-contain" />
                  <span className="font-['Inter',sans-serif] font-semibold text-[15px]" style={{ color: '#6372cf' }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Economy */}
          <div className="flex flex-col gap-6">
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[36px] text-center" style={{ color: '#141928' }}>$ZKWASM Economy</h2>
            <p className="font-['Inter',sans-serif] text-[14px] text-center leading-[1.6]" style={{ color: '#4b5563' }}>
              Sustaining the sovereign decentralized network through transparent allocation.
            </p>
            {/* Token dist card */}
            <div className="rounded-[8px] p-8" style={{ background: '#141928' }}>
              <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[22px] mb-6" style={{ color: '#e2e4f6' }}>Token Distribution</h3>
              <div className="flex gap-8 items-center">
                {/* Donut placeholder */}
                <div className="relative flex-shrink-0" style={{ width: 120, height: 120 }}>
                  <svg viewBox="0 0 120 120" style={{ width: 120, height: 120, transform: 'rotate(-90deg)' }}>
                    {(() => {
                      const pcts = [35, 32, 18, 15]
                      let offset = 0
                      return pcts.map((p, i) => {
                        const dashArray = `${p * 2.827} ${282.7 - p * 2.827}`
                        const el = (
                          <circle key={i} cx="60" cy="60" r="45"
                            fill="none"
                            stroke={donutColors[i]}
                            strokeWidth="16"
                            strokeDasharray={dashArray}
                            strokeDashoffset={-offset * 2.827}
                          />
                        )
                        offset += p
                        return el
                      })
                    })()}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-['Space_Grotesk',sans-serif] font-bold text-[18px]" style={{ color: '#e2e4f6' }}>1.2B</span>
                    <span className="font-['Inter',sans-serif] text-[10px] tracking-[1px] uppercase" style={{ color: '#a7aabb' }}>Supply</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  {tokenDist.map(t => (
                    <div key={t.label + t.pct} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 flex-shrink-0" style={{ background: t.color }} />
                        <span className="font-['Inter',sans-serif] font-medium text-[13px]" style={{ color: '#e2e4f6' }}>{t.label}</span>
                      </div>
                      <span className="font-['Space_Grotesk',sans-serif] font-bold text-[15px]" style={{ color: '#e2e4f6' }}>{t.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Supply info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[['Max Supply', '1,200,000,000'], ['Initial Circulating', '144,000,000'], ['Lockup Period', '48 Months']].map(([label, val]) => (
                <div key={label}>
                  <p className="font-['Inter',sans-serif] text-[11px] tracking-[1.2px] uppercase mb-1" style={{ color: '#2b2b2b' }}>{label}</p>
                  <p className="font-['Space_Grotesk',sans-serif] font-bold text-[16px]" style={{ color: '#7b6bc8' }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-12" style={{ background: '#97a2eb' }}>
        <div className="section-container">
          <div className="flex items-center gap-6 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="font-['Space_Grotesk',sans-serif] font-bold text-[14px] tracking-[2.8px] uppercase text-white">Strategic Alliances</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
          <div className="flex items-center justify-between gap-8 flex-wrap">
            {partners.map(p => (
              <img key={p.name} src={p.img} alt={p.name} className="object-contain" style={{ height: 48 }} />
            ))}
          </div>
        </div>
      </section>

      {/* App Mockups */}
      <section className="section-container py-24">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] mb-2" style={{ color: '#6372cf' }}>The Challenge & Design Thinking</h2>
        <div className="mb-6 font-['Inter',sans-serif] text-[18px] leading-[2]" style={{ color: '#64748b' }}>
          <p><strong>Concept:</strong> Translating the complex workflow into an 'Automated Cloud Factory' narrative.</p>
          <p><strong>Process:</strong> Extensive client communication to fully understand the technology and knowledges.</p>
          <p><strong>Execution:</strong> Thoughtfully conceptualizing specific visual forms for each technical feature for maximum clarity.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {mockupCards.map((src, i) => (
            <div key={i} className="rounded-[18px] overflow-hidden" style={{ height: 520, border: '1px solid rgba(151,162,235,0.3)' }}>
              <img src={src} alt={`App mockup ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Illustration Display */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] mb-12" style={{ color: '#6372cf' }}>Illustration display</h2>
        <div className="grid grid-cols-3 gap-6">
          {illustrations.map(item => (
            <div key={item.title} className="flex flex-col gap-5 p-9 rounded-[18px] items-center"
              style={{ background: 'rgba(151,162,235,0.06)', border: '3px solid rgba(255,255,255,0.8)', backdropFilter: 'blur(34px)' }}>
              <div className="w-[220px] h-[220px] flex items-center justify-center">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <p className="font-['Inter',sans-serif] font-semibold text-[22px] text-center leading-[1.4]" style={{ color: '#6372cf' }}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retrospective */}
      <section className="py-16" style={{ background: 'linear-gradient(to bottom, #97a2eb, white)' }}>
        <div className="section-container max-w-[800px]">
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#6372cf' }}>Data Insight</p>
          <ul className="font-['Inter',sans-serif] font-light text-[18px] leading-[2.2] mb-8 list-disc pl-6" style={{ color: '#1a1c2e' }}>
            <li>Improved user onboarding efficiency, reducing friction in transitioning from Web2 to Web3 applications.</li>
            <li>Increased user engagement by streamlining the end-to-end deployment and launch process within a single platform.</li>
            <li>Enhanced scalability and performance, enabling more efficient on-chain execution with lower operational costs.</li>
          </ul>
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#6372cf' }}>Retrospective</p>
          <p className="font-['Inter',sans-serif] font-light text-[18px] leading-[1.8]" style={{ color: '#1a1c2e' }}>
            The tight deadline made it hard to match the final back end setup with my original design. If I could do it again, I'd check the technical limits earlier to make sure my ideas are doable. I'd also use more AI tools to speed up the work and get a much better result in less time.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-[16px] flex items-center justify-center" style={{ background: '#6372cf' }}>
              <span className="text-white font-bold text-[18px]">Y</span>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px]" style={{ color: '#1a1c2e' }}>Design Lead</p>
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase" style={{ color: '#6372cf' }}>Delphinus Lab</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
