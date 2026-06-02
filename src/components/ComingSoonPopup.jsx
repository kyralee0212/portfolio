import { useEffect } from 'react'
import { useState } from 'react'
import popupBg from '../assets/images/popup-bg.png'
import popupAlien from '../assets/images/popup-alien.png'

export default function ComingSoonPopup({ onClose }) {
  const [btnState, setBtnState] = useState('default')

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative"
        style={{ width: 627, height: 446, background: '#d9d9d9', borderRadius: 26, flexShrink: 0 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top image banner */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 26, top: 31, width: 576, height: 190, borderRadius: 26 }}
        >
          <img
            src={popupBg}
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>

        {/* Alien illustration */}
        <img
          src={popupAlien}
          alt=""
          className="absolute pointer-events-none"
          style={{ left: 95, top: 44, width: 169, height: 179, objectFit: 'cover' }}
        />

        {/* "Oops" heading */}
        <p
          className="absolute w-full text-center font-['Heebo',sans-serif] font-bold"
          style={{ top: 230, fontSize: 50, color: '#6372cf', lineHeight: 1 }}
        >
          Oops
        </p>

        {/* Subtitle */}
        <p
          className="absolute w-full text-center font-['Heebo',sans-serif] font-medium"
          style={{ top: 309, fontSize: 24, color: '#000', lineHeight: 1.2 }}
        >
          Still working on it, will be available soon!
        </p>

        {/* Okay button */}
        <button
          onClick={onClose}
          className="absolute font-['Heebo',sans-serif] font-medium text-[18px] text-white"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: 361,
            width: 160,
            height: 43,
            borderRadius: 59,
            border: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(11deg, #787cde 20%, #a9cbff 79%)',
            backgroundSize: '200% 100%',
            backgroundPosition: btnState === 'hover' ? '100% 0%' : '0% 0%',
            color: btnState === 'active' ? '#3d4196' : 'white',
            transition: 'background-position 0.4s ease, color 0.1s',
          }}
          onMouseEnter={() => setBtnState('hover')}
          onMouseLeave={() => setBtnState('default')}
          onMouseDown={() => setBtnState('active')}
          onMouseUp={() => setBtnState('hover')}
        >
          Okay
        </button>
      </div>
    </div>
  )
}
