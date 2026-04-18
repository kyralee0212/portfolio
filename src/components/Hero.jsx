import { imgVector1, imgVector2, imgAlien2 } from '../assets/figmaAssets'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-[74px]" style={{ minHeight: '860px' }}>
      {/* Purple background blob */}
      <div
        className="absolute"
        style={{
          left: '5%',
          top: '51px',
          width: '66%',
          aspectRatio: '1208/832',
          background: 'rgba(151,161,235,0.15)',
          borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
        }}
      />

      {/* Vector bg shape */}
      <img
        src={imgVector2}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: '29%', top: '0', width: '65%', opacity: 0.9, zIndex: 1 }}
      />
      <img
        src={imgVector1}
        alt=""
        className="absolute pointer-events-none"
        style={{ right: '7%', top: '6%', width: '38%', zIndex: 1 }}
      />

      {/* Alien illustration */}
      <img
        src={imgAlien2}
        alt="Alien character"
        className="absolute pointer-events-none"
        style={{ right: '2%', top: '-20px', width: '220px', zIndex: 2 }}
      />

      {/* Text content */}
      <div
        className="absolute"
        style={{ left: '75px', top: '277px', width: '487px', zIndex: 3 }}
      >
        <h1
          className="font-['Heebo',sans-serif] font-bold text-[40px] leading-[1.3] mb-3"
          style={{ color: 'rgba(0,0,0,0.7)', width: '405px' }}
        >
          Bringing Worlds to Life Through Design
        </h1>
        <p
          className="font-['Heebo',sans-serif] font-normal text-[25px] leading-[1.3] mb-3"
          style={{ color: 'rgba(0,0,0,0.5)' }}
        >
          UI/UX Designer &amp; Game Visual Designer
        </p>
        <p
          className="font-['Heebo',sans-serif] font-normal text-[18px] leading-[1.5]"
          style={{ color: 'rgba(0,0,0,0.4)', width: '418px' }}
        >
          Specializing in stylized characters, environments, and digital experiences that convert ideas into engaging products.
        </p>
        <p
          className="font-['Heebo',sans-serif] font-normal text-[14px] mt-6"
          style={{ color: 'rgba(0,0,0,0.3)' }}
        >
          Trusted by startups, game studios, and creative teams worldwide.
        </p>
      </div>

      {/* CTA button */}
      <a
        href="#projects"
        className="absolute flex items-center justify-center h-[43px] px-[39px] rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] whitespace-nowrap"
        style={{
          left: '68px',
          top: '572px',
          width: '173px',
          background: 'linear-gradient(11deg, rgb(120,124,222) 20%, rgb(169,203,255) 80%)',
          zIndex: 3,
        }}
      >
        view my work
      </a>
    </section>
  )
}
