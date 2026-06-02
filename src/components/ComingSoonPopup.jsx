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
        style={{ width: 439, height: 312, background: '#d9d9d9', borderRadius: 18, flexShrink: 0 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top image banner */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 18, top: 22, width: 403, height: 133, borderRadius: 18 }}
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
          style={{ left: 67, top: 31, width: 118, height: 125, objectFit: 'cover' }}
        />

        {/* "Oops" heading */}
        <p
          className="absolute w-full text-center font-['Heebo',sans-serif] font-bold"
          style={{ top: 161, fontSize: 35, color: '#6372cf', lineHeight: 1 }}
        >
          Oops
        </p>

        {/* Subtitle */}
        <p
          className="absolute w-full text-center font-['Heebo',sans-serif] font-medium"
          style={{ top: 216, fontSize: 17, color: '#000', lineHeight: 1.2 }}
        >
          Still working on it, will be available soon!
        </p>

        {/* Okay button */}
        <button
          onClick={onClose}
          className="absolute font-['Heebo',sans-serif] font-medium text-white"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: 253,
            width: 112,
            height: 30,
            fontSize: 13,
            borderRadius: 41,
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
