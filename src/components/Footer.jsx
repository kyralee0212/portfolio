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
              {[imgContainer3, imgContainer4, imgContainer5].map((src, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center rounded-[8px] flex-shrink-0"
                  style={{ width: '40px', height: '40px', background: '#f1f5f9' }}
                >
                  <img src={src} alt="" className="w-5 h-5 object-contain" />
                </a>
              ))}
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
