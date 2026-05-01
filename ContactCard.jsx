"use strict";

const { useRef } = React;

const ContactIllustration = () => (
  <svg viewBox="0 0 380 215" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'480px', maxHeight:'240px'}}>
    <defs>
      <linearGradient id="ccBronzeH" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#7A4A1E"/>
        <stop offset="20%"  stopColor="#B07028"/>
        <stop offset="45%"  stopColor="#E8A050"/>
        <stop offset="70%"  stopColor="#B07028"/>
        <stop offset="100%" stopColor="#6B3A15"/>
      </linearGradient>
      <linearGradient id="ccBronzeDome" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#F0C060"/>
        <stop offset="35%"  stopColor="#C88840"/>
        <stop offset="75%"  stopColor="#8B5820"/>
        <stop offset="100%" stopColor="#5A3010"/>
      </linearGradient>
      <radialGradient id="ccBronzeKnob" cx="0.3" cy="0.3" r="0.65">
        <stop offset="0%"   stopColor="#F5D070"/>
        <stop offset="50%"  stopColor="#C08030"/>
        <stop offset="100%" stopColor="#6B3A15"/>
      </radialGradient>
      <radialGradient id="ccCatEye" cx="0.35" cy="0.35" r="0.6">
        <stop offset="0%"   stopColor="#FBF0A0"/>
        <stop offset="40%"  stopColor="#C9A14A"/>
        <stop offset="100%" stopColor="#5A3E10"/>
      </radialGradient>
      <linearGradient id="ccEnvBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#FCF5DC"/>
        <stop offset="100%" stopColor="#EBD8A8"/>
      </linearGradient>
      <linearGradient id="ccLetterPaper" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#FFFDF0"/>
        <stop offset="100%" stopColor="#F5EDD0"/>
      </linearGradient>
    </defs>

    {/* Ground shadows */}
    <ellipse cx="305" cy="207" rx="56" ry="7"  fill="rgba(40,20,8,0.25)"/>
    <ellipse cx="195" cy="210" rx="42" ry="5"  fill="rgba(40,20,8,0.18)"/>
    <ellipse cx="62"  cy="150" rx="62" ry="6"  fill="rgba(40,20,8,0.10)"/>

    {/* ── FLOATING ENVELOPE (top-left) ── */}
    <g transform="translate(8,12) rotate(-14,65,65)">
      {/* Letter peeking out */}
      <rect x="18" y="5" width="94" height="58" rx="3"
            fill="url(#ccLetterPaper)" stroke="#C9A14A" strokeWidth="1.2"/>
      <line x1="28" y1="18" x2="102" y2="18" stroke="#C9A14A" strokeWidth="0.7" opacity="0.65"/>
      <line x1="28" y1="26" x2="102" y2="26" stroke="#C9A14A" strokeWidth="0.7" opacity="0.65"/>
      <line x1="28" y1="34" x2="88"  y2="34" stroke="#C9A14A" strokeWidth="0.7" opacity="0.65"/>
      <line x1="28" y1="42" x2="96"  y2="42" stroke="#C9A14A" strokeWidth="0.7" opacity="0.55"/>
      {/* Paw print on letter */}
      <g fill="#C9A14A" opacity="0.30">
        <ellipse cx="90" cy="50" rx="4"   ry="3"/>
        <ellipse cx="84" cy="45" rx="2"   ry="2.5"/>
        <ellipse cx="90" cy="43" rx="2"   ry="2.5"/>
        <ellipse cx="96" cy="45" rx="2"   ry="2.5"/>
      </g>
      {/* Envelope body */}
      <rect x="5" y="32" width="120" height="82" rx="5"
            fill="url(#ccEnvBody)" stroke="#C9A14A" strokeWidth="1.5"/>
      {/* Lower fold */}
      <path d="M5 114 L65 76 L125 114"
            fill="#E8D5A0" stroke="#C9A14A" strokeWidth="0.8" opacity="0.65"/>
      {/* Open flap */}
      <path d="M5 32 L65 68 L125 32"
            fill="#F5E8C8" stroke="#C9A14A" strokeWidth="1.4" strokeLinejoin="round"/>
      {/* Wax seal */}
      <circle cx="65" cy="97" r="15" fill="#7A1515" opacity="0.88"/>
      <circle cx="65" cy="97" r="11" fill="#922020" opacity="0.85"/>
      {/* Paw seal */}
      <g fill="#F0D080" opacity="0.82" transform="translate(58,89)">
        <ellipse cx="7"  cy="10" rx="5"   ry="4"/>
        <ellipse cx="0"  cy="5"  rx="2.5" ry="3"/>
        <ellipse cx="7"  cy="3"  rx="2.5" ry="3"/>
        <ellipse cx="14" cy="5"  rx="2.5" ry="3"/>
      </g>
    </g>

    {/* ── BLACK CAT (sitting, center-left) ── */}
    <g transform="translate(152,58)">
      {/* Tail curling toward mailbox */}
      <path d="M42 130 C65 148 88 138 92 112 C96 88 80 80 70 84"
            stroke="#1a0f0f" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M42 130 C65 148 88 138 92 112 C96 88 80 80 70 84"
            stroke="#241414" strokeWidth="9"  fill="none" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="42" cy="108" rx="32" ry="40" fill="#1a0f0f"/>
      <ellipse cx="42" cy="103" rx="27" ry="33" fill="#221414"/>
      {/* Front legs */}
      <rect x="18" y="132" width="15" height="20" rx="8" fill="#1a0f0f"/>
      <rect x="51" y="132" width="15" height="20" rx="8" fill="#1a0f0f"/>
      {/* Paws */}
      <ellipse cx="25" cy="150" rx="11" ry="6" fill="#1e1010"/>
      <ellipse cx="58" cy="150" rx="11" ry="6" fill="#1e1010"/>
      {/* Chest lighter area */}
      <ellipse cx="42" cy="113" rx="13" ry="18" fill="#271818" opacity="0.75"/>
      {/* Head */}
      <circle cx="42" cy="55" r="32" fill="#1a0f0f"/>
      {/* Left ear */}
      <path d="M20 36 L12 8  L34 30 Z" fill="#1a0f0f"/>
      <path d="M22 34 L16 14 L32 28 Z" fill="#7A3045" opacity="0.55"/>
      {/* Right ear */}
      <path d="M64 36 L72 8  L50 30 Z" fill="#1a0f0f"/>
      <path d="M62 34 L68 14 L52 28 Z" fill="#7A3045" opacity="0.55"/>
      {/* Eyes */}
      <ellipse cx="30" cy="53" rx="10" ry="11" fill="url(#ccCatEye)"/>
      <ellipse cx="54" cy="53" rx="10" ry="11" fill="url(#ccCatEye)"/>
      <ellipse cx="30" cy="53" rx="3.5" ry="9" fill="#080404"/>
      <ellipse cx="54" cy="53" rx="3.5" ry="9" fill="#080404"/>
      <circle cx="33" cy="48" r="3" fill="rgba(255,255,255,0.90)"/>
      <circle cx="57" cy="48" r="3" fill="rgba(255,255,255,0.90)"/>
      {/* Nose */}
      <path d="M39 65 L42 69 L45 65 Z" fill="#D09090"/>
      {/* Mouth */}
      <path d="M42 69 Q37 74 33 72" stroke="#9B6060" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M42 69 Q47 74 51 72" stroke="#9B6060" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Whiskers left */}
      <line x1="10" y1="63" x2="30" y2="65" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="9"  y1="69" x2="30" y2="69" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="10" y1="75" x2="30" y2="73" stroke="#9B8870" strokeWidth="0.9" opacity="0.6"/>
      {/* Whiskers right */}
      <line x1="74" y1="63" x2="54" y2="65" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="75" y1="69" x2="54" y2="69" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="74" y1="75" x2="54" y2="73" stroke="#9B8870" strokeWidth="0.9" opacity="0.6"/>
      {/* Collar (antique gold) */}
      <path d="M16 72 Q42 85 68 72" stroke="#C9A14A" strokeWidth="4.5" fill="none"/>
      {/* Bell */}
      <circle cx="42" cy="82" r="5.5" fill="#C9A14A" stroke="#8B6914" strokeWidth="1"/>
      <line x1="42" y1="86" x2="42" y2="88" stroke="#8B6914" strokeWidth="1"/>
      <circle cx="42" cy="78" r="2" fill="rgba(255,235,150,0.4)"/>
    </g>

    {/* ── BRONZE PILLAR POST BOX (right) ── */}
    <g transform="translate(245,5)">
      {/* Drop shadow */}
      <ellipse cx="56" cy="203" rx="55" ry="8" fill="rgba(30,15,5,0.28)"/>
      {/* Base plinth */}
      <rect x="6"  y="190" width="100" height="16" rx="5" fill="#5A3010" stroke="#3A1A08" strokeWidth="1"/>
      <rect x="10" y="192" width="92"  height="10" rx="3" fill="#6B3A15"/>
      {/* Lower body band */}
      <rect x="10" y="178" width="92" height="15" rx="4" fill="#7A4520" stroke="#4A2808" strokeWidth="0.8"/>
      {/* Main cylindrical body */}
      <rect x="12" y="62" width="88" height="120" rx="9"
            fill="url(#ccBronzeH)" stroke="#4A2808" strokeWidth="1.5"/>
      {/* Cylinder shadow left */}
      <rect x="12" y="66" width="12" height="112" rx="6" fill="rgba(0,0,0,0.25)"/>
      {/* Cylinder shadow right */}
      <rect x="88" y="66" width="12" height="112" rx="6" fill="rgba(0,0,0,0.28)"/>
      {/* Center highlight */}
      <rect x="28" y="66" width="30" height="112" rx="8" fill="rgba(255,225,150,0.12)"/>
      {/* Upper body band */}
      <rect x="10" y="62" width="92" height="14" rx="7" fill="#7A4520" stroke="#4A2808" strokeWidth="0.8"/>
      {/* Dome cap */}
      <ellipse cx="56" cy="62" rx="47" ry="22"
               fill="url(#ccBronzeDome)" stroke="#4A2808" strokeWidth="1.5"/>
      <ellipse cx="40" cy="56" rx="23" ry="10" fill="rgba(255,232,165,0.20)"/>
      <ellipse cx="56" cy="62" rx="47" ry="9"  fill="#7A4520" stroke="#4A2808" strokeWidth="0.8"/>
      {/* Finial ring */}
      <ellipse cx="56" cy="42" rx="17" ry="9" fill="#8B5820" stroke="#4A2808" strokeWidth="1"/>
      {/* Finial ball/knob */}
      <circle cx="56" cy="36" r="11" fill="url(#ccBronzeKnob)" stroke="#4A2808" strokeWidth="1"/>
      <circle cx="52" cy="32" r="4"  fill="rgba(255,235,180,0.45)"/>
      {/* Letter slot */}
      <rect x="18" y="104" width="76" height="13" rx="6.5" fill="#2A1005" stroke="#4A2808" strokeWidth="1.2"/>
      <rect x="20" y="107" width="72" height="7"  rx="3.5" fill="#160802"/>
      <line x1="20" y1="107" x2="92" y2="107"
            stroke="rgba(200,150,80,0.3)" strokeWidth="1"/>
      {/* Royal cypher plate (oval) */}
      <ellipse cx="56" cy="162" rx="33" ry="27" fill="#6B3A15" stroke="#4A2808" strokeWidth="1.2"/>
      <ellipse cx="56" cy="162" rx="29" ry="23" fill="#7A4520"/>
      <ellipse cx="56" cy="162" rx="25" ry="19" fill="#6B3A15" stroke="#C9A14A" strokeWidth="1"/>
      {/* Crown */}
      <path d="M44 150 L46 142 L50 148 L56 140 L62 148 L66 142 L68 150 Z"
            fill="#C9A14A" stroke="#8B6914" strokeWidth="0.5"/>
      <rect x="43" y="150" width="26" height="5" rx="2.5" fill="#C9A14A"/>
      {/* GR monogram */}
      <text x="56" y="173" textAnchor="middle"
            fontFamily="'Cinzel','IM Fell English SC',serif"
            fontSize="12" fontWeight="700" fill="#C9A14A" letterSpacing="3">GR</text>
      {/* Aged patina spots */}
      <ellipse cx="24" cy="144" rx="8"  ry="5"   fill="#3A7050" opacity="0.22"/>
      <ellipse cx="87" cy="170" rx="6"  ry="4"   fill="#3A7050" opacity="0.18"/>
      <ellipse cx="26" cy="182" rx="10" ry="5"   fill="#3A7050" opacity="0.20"/>
      <ellipse cx="80" cy="124" rx="5"  ry="3.5" fill="#3A7050" opacity="0.15"/>
    </g>

    {/* Ground decorative line */}
    <line x1="8" y1="203" x2="372" y2="203"
          stroke="#C9A14A" strokeWidth="0.8" opacity="0.40"/>

    {/* Scattered paw prints */}
    <g fill="#8B6914" opacity="0.22">
      <ellipse cx="200" cy="207" rx="4.5" ry="3.5"/>
      <ellipse cx="192" cy="203" rx="2.2" ry="2.8"/>
      <ellipse cx="200" cy="201" rx="2.2" ry="2.8"/>
      <ellipse cx="208" cy="203" rx="2.2" ry="2.8"/>
    </g>
    <g fill="#8B6914" opacity="0.17">
      <ellipse cx="225" cy="208" rx="4.5" ry="3.5"/>
      <ellipse cx="217" cy="204" rx="2.2" ry="2.8"/>
      <ellipse cx="225" cy="202" rx="2.2" ry="2.8"/>
      <ellipse cx="233" cy="204" rx="2.2" ry="2.8"/>
    </g>
  </svg>
);

const ContactCard = () => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(-6px) scale(1.015)';
    }
  };
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(0) scale(1)';
    }
  };

  return (
    <section className="mt-14 md:mt-20" id="contact-section">
      {/* Section header */}
      <div className="text-center mb-8">
        <p className="font-fell text-[11px] tracking-[0.5em] text-amber-800/70 mb-2">✦ CONTACT ✦</p>
        <h2 className="font-yuji text-3xl md:text-4xl nouveau-text" style={{letterSpacing:'0.15em'}}>
          お 問 合 せ
        </h2>
      </div>

      {/* Card link */}
      <a
        href="https://form.run/@yaseieneko-IHhS4nvQhddS0viY89A1"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration:'none', display:'block', maxWidth:'700px', margin:'0 auto'}}
      >
        {/* ── Thin ribbon frame ── */}
        <div
          ref={cardRef}
          style={{
            padding: '5px',
            background: 'linear-gradient(135deg, #C09050 0%, #7A4A1E 25%, #9B6230 50%, #7A4A1E 75%, #C09050 100%)',
            borderRadius: '6px',
            boxShadow: '0 5px 24px rgba(40,20,8,0.18), inset 0 1px 0 rgba(255,220,150,0.18)',
            transition: 'transform 0.4s cubic-bezier(.2,.9,.3,1)',
            cursor: 'pointer'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="parchment-bg px-6 py-10 text-center"
               style={{position:'relative', overflow:'hidden', borderRadius:'3px'}}>
            {/* Art Nouveau corner decorations */}
            <svg className="absolute top-2 left-2 w-14 h-14" viewBox="0 0 80 80">
              <use href="#nouveauCorner"/>
            </svg>
            <svg className="absolute top-2 right-2 w-14 h-14"
                 style={{transform:'scaleX(-1)'}} viewBox="0 0 80 80">
              <use href="#nouveauCorner"/>
            </svg>
            <svg className="absolute bottom-2 left-2 w-14 h-14"
                 style={{transform:'scaleY(-1)'}} viewBox="0 0 80 80">
              <use href="#nouveauCorner"/>
            </svg>
            <svg className="absolute bottom-2 right-2 w-14 h-14"
                 style={{transform:'scale(-1,-1)'}} viewBox="0 0 80 80">
              <use href="#nouveauCorner"/>
            </svg>

            {/* Illustration */}
            <div className="flex justify-center mb-4">
              <ContactIllustration />
            </div>

            {/* Ornamental divider */}
            <div className="flex justify-center my-4 px-4">
              <svg viewBox="0 0 400 30" className="w-full max-w-xs h-5">
                <use href="#dividerSym"/>
              </svg>
            </div>

            {/* CTA text */}
            <p className="font-yuji text-2xl md:text-3xl nouveau-text mb-2"
               style={{letterSpacing:'0.2em'}}>
              お問合せはこちらから
            </p>
            <p className="font-cormorant italic text-amber-800/70 text-sm mt-1"
               style={{letterSpacing:'0.15em'}}>
              ✉ &nbsp;Contact Form&nbsp; ✉
            </p>
            {/* ── Glossy brown CTA button ── */}
            <div style={{display:'inline-block', position:'relative', overflow:'hidden',
                         marginTop:'22px', padding:'14px 52px',
                         background:'linear-gradient(180deg, #C07830 0%, #8A4418 42%, #5A2C0E 73%, #7A3A1A 100%)',
                         border:'1px solid #3A1A08',
                         borderRadius:'5px',
                         boxShadow:'0 8px 22px rgba(40,20,8,0.58), 0 3px 7px rgba(40,20,8,0.32), inset 0 1px 0 rgba(255,225,150,0.30), inset 0 -3px 6px rgba(0,0,0,0.35)',
                         cursor:'pointer'}}>
              {/* Top gloss sheen */}
              <span style={{position:'absolute', top:0, left:0, right:0,
                            height:'46%',
                            background:'linear-gradient(180deg, rgba(255,218,130,0.28) 0%, rgba(255,218,130,0.02) 100%)',
                            borderRadius:'4px 4px 50% 50% / 4px 4px 80% 80%',
                            pointerEvents:'none'}}></span>
              {/* Bottom shadow inset */}
              <span style={{position:'absolute', bottom:0, left:0, right:0,
                            height:'28%',
                            background:'linear-gradient(0deg, rgba(0,0,0,0.30) 0%, transparent 100%)',
                            pointerEvents:'none'}}></span>
              {/* Label */}
              <span style={{position:'relative',
                            fontFamily:"'Cinzel','IM Fell English SC',serif",
                            fontSize:'14px', fontWeight:'700',
                            letterSpacing:'0.35em',
                            color:'#F5D98A',
                            textShadow:'0 1px 3px rgba(40,20,8,0.85), 0 0 10px rgba(255,200,60,0.22)'}}>
                ✉ &nbsp;CONTACT HERE&nbsp; ✉
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

ReactDOM.createRoot(document.getElementById('contact-card-root')).render(
  React.createElement(React.StrictMode, null,
    React.createElement(ContactCard, null)
  )
);
