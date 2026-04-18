import { imgStarPurple1, imgIcon, imgNewPlanet1, imgImage2 } from '../assets/figmaAssets'

function Tag({ label }) {
  return (
    <div
      className="flex items-center justify-center h-[28px] px-4 rounded-full flex-shrink-0"
      style={{ background: 'rgba(151,161,235,0.1)' }}
    >
      <span className="font-['Heebo',sans-serif] font-semibold text-[14px] text-center" style={{ color: '#787cde' }}>
        {label}
      </span>
    </div>
  )
}

function GradientBtn({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center h-[43px] px-[40px] rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] whitespace-nowrap w-fit"
      style={{ background: 'linear-gradient(12deg, rgb(120,124,222) 20%, rgb(169,203,255) 80%)' }}
    >
      {children}
    </a>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative bg-white overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="max-w-[1280px] mx-auto px-[80px]">

        {/* --- AUTOMATA --- */}
        <div className="relative flex items-start gap-16 mb-24">
          {/* Left: mockup placeholder area */}
          <div className="relative flex-shrink-0" style={{ width: '600px', height: '480px' }}>
            {/* Purple glow background */}
            <div
              className="absolute inset-0 rounded-[24px]"
              style={{ background: 'linear-gradient(135deg, rgba(120,124,222,0.15) 0%, rgba(169,203,255,0.1) 100%)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[520px] h-[420px] rounded-[20px] flex items-center justify-center"
                style={{ background: 'rgba(120,124,222,0.08)', border: '1px solid rgba(120,124,222,0.2)' }}
              >
                <span className="font-['Inter',sans-serif] font-black text-[80px]" style={{ color: 'rgba(120,124,222,0.2)' }}>
                  AUTOMATA
                </span>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1 flex flex-col gap-5 pt-8">
            <div className="relative inline-flex items-center">
              <img src={imgStarPurple1} alt="" className="w-[25px] h-[26px] mr-3" />
              <span
                className="font-['Heebo',sans-serif] font-bold text-[20px] tracking-[1.4px] uppercase"
                style={{ color: '#787cde' }}
              >
                Featured Project
              </span>
            </div>

            <p className="font-['Inter',sans-serif] font-black text-[48px] leading-[48px]" style={{ color: '#0f172a' }}>
              AUTOMATA
            </p>

            <div className="flex flex-wrap gap-3">
              {['UI/UX Design', 'Game design', 'Animation'].map(t => <Tag key={t} label={t} />)}
            </div>

            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[25px]" style={{ color: '#475569', maxWidth: '426px' }}>
              Automata is an automation-driven strategy game where players design smart workflows and rules to keep systems running on their own.
            </p>

            <ul className="space-y-2 mt-2">
              {['Lead designer', 'More than 10k players', 'Popular topic on Reddit'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <img src={imgIcon} alt="" className="w-5 h-5 flex-shrink-0" />
                  <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: '#64748b' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <GradientBtn>Detail</GradientBtn>
            </div>
          </div>

          {/* Decorative planets */}
          <img src={imgNewPlanet1} alt="" className="absolute pointer-events-none" style={{ right: '-20px', bottom: '-40px', width: '280px', opacity: 0.8 }} />
          <img src={imgNewPlanet1} alt="" className="absolute pointer-events-none" style={{ left: '580px', top: '-30px', width: '120px', opacity: 0.6, transform: 'scaleY(-1) rotate(180deg)' }} />
        </div>

        {/* --- ZKwasm Dapp Hub --- */}
        <div className="relative flex items-start gap-16">
          {/* Left: text */}
          <div className="flex-1 flex flex-col gap-5 pt-8">
            <div className="relative inline-flex items-center">
              <img src={imgStarPurple1} alt="" className="w-[25px] h-[26px] mr-3" />
              <span
                className="font-['Heebo',sans-serif] font-bold text-[20px] tracking-[1.4px] uppercase"
                style={{ color: '#787cde' }}
              >
                Featured Project
              </span>
            </div>

            <p className="font-['Inter',sans-serif] font-black text-[48px] leading-[48px]" style={{ color: '#0f172a' }}>
              ZKwasm Dapp Hub
            </p>

            <Tag label="App UI/UX Design" />

            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[29px]" style={{ color: '#475569', maxWidth: '463px' }}>
              A centralized mobile platform integrating all corporate editorial content and gaming portfolios. Designed to streamline brand discovery, the app allows users to explore company insights and access our full suite of games and web applications through a single, cohesive interface.
            </p>

            <div className="mt-2">
              <GradientBtn>Details</GradientBtn>
            </div>
          </div>

          {/* Right: mockup image */}
          <div className="relative flex-shrink-0" style={{ width: '558px', height: '592px' }}>
            <img
              src={imgImage2}
              alt="ZKwasm Dapp Hub mockup"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
