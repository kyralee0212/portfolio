import {
  imgContainer, imgContainer1, imgContainer2,
  imgContainer3, imgContainer4, imgContainer5
} from '../assets/figmaAssets'

export default function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: '#e2e8f0' }}>
      <div className="max-w-[1280px] mx-auto px-[80px] py-12">
        <div className="flex gap-12 mb-8">
          {/* Portfolio */}
          <div style={{ flex: 1 }}>
            <div className="flex items-center gap-2 mb-4">
              <img src={imgContainer} alt="" className="w-[18px] h-[20px]" />
              <span className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px]" style={{ color: '#0f172a' }}>Portfolio</span>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22.75px]" style={{ color: '#64748b' }}>
              Designer exploring illustration, motion and digital worlds.
            </p>
          </div>

          {/* Contact Details */}
          <div style={{ flex: 1 }}>
            <h4 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] mb-4" style={{ color: '#0f172a' }}>
              Contact Details
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <img src={imgContainer1} alt="" className="w-[13px] h-[11px]" />
              <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px]" style={{ color: '#64748b' }}>
                Kyralee0212@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={imgContainer2} alt="" className="w-[11px] h-[13px]" />
              <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px]" style={{ color: '#64748b' }}>
                Sydney, NSW
              </span>
            </div>
          </div>

          {/* Follow Me */}
          <div style={{ flex: 1 }}>
            <h4 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] mb-4" style={{ color: '#0f172a' }}>
              Follow Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kyra_leeee"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-[8px] flex-shrink-0"
                style={{ width: '40px', height: '40px', background: '#f1f5f9', color: '#64748b', transition: 'background 0.18s, color 0.18s, transform 0.12s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e2377a'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#64748b'; e.currentTarget.style.transform = 'scale(1)'; }}
                onMouseDown={e => { e.currentTarget.style.background = '#c4185e'; e.currentTarget.style.transform = 'scale(0.9)'; }}
                onMouseUp={e => { e.currentTarget.style.background = '#e2377a'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yun-lee-0212/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-[8px] flex-shrink-0"
                style={{ width: '40px', height: '40px', background: '#f1f5f9', color: '#64748b', transition: 'background 0.18s, color 0.18s, transform 0.12s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0a66c2'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#64748b'; e.currentTarget.style.transform = 'scale(1)'; }}
                onMouseDown={e => { e.currentTarget.style.background = '#004d96'; e.currentTarget.style.transform = 'scale(0.9)'; }}
                onMouseUp={e => { e.currentTarget.style.background = '#0a66c2'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="9" width="4" height="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-8"
          style={{ borderTop: '1px solid #e2e8f0' }}
        >
          <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px]" style={{ color: '#94a3b8' }}>
            Built in 2026 • Yun Lee crafting UI Design though Figma
          </p>
          <div className="flex gap-6">
            <a href="#privacy-policy" className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px]" style={{ color: '#94a3b8' }}>Privacy Policy</a>
            <a href="#terms-of-service" className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px]" style={{ color: '#94a3b8' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
