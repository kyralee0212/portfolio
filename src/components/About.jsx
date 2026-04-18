import {
  imgPlanet2, imgSquare3, imgStar4, imgMe1, imgCloud22
} from '../assets/figmaAssets'

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      <div className="max-w-[1280px] mx-auto px-[80px] flex items-start gap-16">

        {/* Left: photo collage */}
        <div className="relative flex-shrink-0" style={{ width: '504px', height: '646px' }}>
          <div
            className="absolute"
            style={{
              left: 0, right: '3.74%', top: '19px',
              height: '92%',
              background: 'rgba(151,161,235,0.18)',
              borderRadius: '50%',
              transform: 'rotate(7.4deg)',
              zIndex: 0,
            }}
          />
          <img src={imgPlanet2} alt="" className="absolute pointer-events-none" style={{ left: '32%', top: '219px', width: '102px', zIndex: 2 }} />
          <img src={imgSquare3} alt="" className="absolute pointer-events-none" style={{ left: '57%', top: '323px', width: '61px', zIndex: 2 }} />
          <img src={imgStar4} alt="" className="absolute pointer-events-none" style={{ left: '45%', top: '210px', width: '60px', zIndex: 2 }} />
          <img src={imgMe1} alt="Yun Lee" className="absolute object-cover pointer-events-none" style={{ left: '5.76%', top: 0, width: '82%', zIndex: 1 }} />
          <img src={imgCloud22} alt="" className="absolute pointer-events-none" style={{ left: '2%', top: '384px', width: '100%', zIndex: 3, transform: 'scaleX(-1)' }} />
        </div>

        {/* Right: bio text */}
        <div className="flex-1" style={{ paddingTop: '50px' }}>
          {/* Decorative stars */}
          <div className="relative mb-3" style={{ height: '49px' }}>
            <img src={imgStar4} alt="" className="absolute pointer-events-none" style={{ left: '6px', top: '0', width: '47px' }} />
            <img src={imgSquare3} alt="" className="absolute pointer-events-none" style={{ left: '269px', top: '0', width: '50px' }} />
          </div>

          <h2
            className="font-['Heebo',sans-serif] font-bold leading-[1.221] mb-5"
            style={{ fontSize: '45px', color: 'rgba(0,0,0,0.7)' }}
          >
            Hello ~<br />I am Yun Lee
          </h2>

          <p
            className="font-['Heebo',sans-serif] font-normal text-[20px] leading-[30px] mb-10"
            style={{ color: '#475569', maxWidth: '519px' }}
          >
            I&apos;m a commercial illustrator and visual designer working across games and digital products, with experience on multiple successfully launched apps and websites. I create illustration, animation, and visual systems with a strong focus on design logic and user experience, while leveraging AI tools to work faster and smarter, delivering visuals that are both impactful and purposeful.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-12">
            <div>
              <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[44px]" style={{ color: '#475569' }}>Work experience</p>
              <p className="font-['Inter',sans-serif] font-extrabold text-[28px] leading-[36px]" style={{ color: '#475569' }}>5+ years</p>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[44px]" style={{ color: '#475569' }}>Lunched Projects</p>
              <p className="font-['Inter',sans-serif] font-extrabold text-[28px] leading-[36px]" style={{ color: '#475569' }}>30+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
