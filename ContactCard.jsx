"use strict";

const { useRef } = React;

/* ── Ribbon bow SVG ── */
const RibbonBow = () => (
  <svg viewBox="0 0 180 108" width="164" height="98" style={{display:'block'}}>
    <defs>
      <linearGradient id="bwH" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#5A3010"/>
        <stop offset="25%"  stopColor="#B07830"/>
        <stop offset="55%"  stopColor="#C8983A"/>
        <stop offset="80%"  stopColor="#9B6228"/>
        <stop offset="100%" stopColor="#5A3010"/>
      </linearGradient>
      <linearGradient id="bwV" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#C09050"/>
        <stop offset="45%"  stopColor="#8B5A2B"/>
        <stop offset="100%" stopColor="#4A2808"/>
      </linearGradient>
      <radialGradient id="bwKnot" cx="0.38" cy="0.3" r="0.65">
        <stop offset="0%"   stopColor="#E0B060"/>
        <stop offset="60%"  stopColor="#9B6228"/>
        <stop offset="100%" stopColor="#5A3010"/>
      </radialGradient>
    </defs>

    {/* ── Left tail ── */}
    <path d="M 82 52 C 72 65 56 80 42 102 L 56 102 C 64 82 74 68 90 55 Z"
          fill="url(#bwV)"/>
    <path d="M 84 54 C 76 65 62 80 50 100 C 52 97 62 82 76 62 Z"
          fill="rgba(220,170,80,0.22)"/>

    {/* ── Right tail ── */}
    <path d="M 98 52 C 108 65 124 80 138 102 L 124 102 C 116 82 106 68 90 55 Z"
          fill="url(#bwV)"/>
    <path d="M 96 54 C 104 65 118 80 130 100 C 128 97 118 82 104 62 Z"
          fill="rgba(220,170,80,0.22)"/>

    {/* ── Left loop ── */}
    <path d="M 88 46 C 72 24 36 12 16 26 C 4 38 22 62 58 55 C 70 53 82 49 88 46 Z"
          fill="url(#bwH)"/>
    {/* left loop shadow fold */}
    <path d="M 88 46 C 74 32 46 20 26 28" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" fill="none"/>
    <path d="M 58 55 C 52 44 34 34 20 38" stroke="rgba(0,0,0,0.12)" strokeWidth="1"   fill="none"/>
    {/* left loop sheen */}
    <path d="M 82 44 C 66 28 40 18 22 28 C 18 32 20 40 28 43 C 40 30 64 34 82 44 Z"
          fill="rgba(230,180,90,0.20)"/>

    {/* ── Right loop (mirror of left about x=90) ── */}
    <path d="M 92 46 C 108 24 144 12 164 26 C 176 38 158 62 122 55 C 110 53 98 49 92 46 Z"
          fill="url(#bwH)"/>
    {/* right loop shadow fold */}
    <path d="M 92 46 C 106 32 134 20 154 28" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" fill="none"/>
    <path d="M 122 55 C 128 44 146 34 160 38" stroke="rgba(0,0,0,0.12)" strokeWidth="1"  fill="none"/>
    {/* right loop sheen */}
    <path d="M 98 44 C 114 28 140 18 158 28 C 162 32 160 40 152 43 C 140 30 116 34 98 44 Z"
          fill="rgba(230,180,90,0.20)"/>

    {/* ── Center knot ── */}
    <ellipse cx="90" cy="49" rx="14" ry="11" fill="url(#bwKnot)" stroke="#5A3010" strokeWidth="0.8"/>
    <ellipse cx="87" cy="45" rx="5"  ry="3.5" fill="rgba(240,190,100,0.40)"/>
  </svg>
);

/* ── Baroque frame SVG overlay ── */
const BaroqueFrame = () => (
  <svg
    style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}
    viewBox="0 0 600 490"
    preserveAspectRatio="none"
  >
    {/* Outer concave-corner border */}
    <path d="
      M 58 5
      L 542 5
      Q 542 58 595 58
      L 595 432
      Q 542 432 542 485
      L 58 485
      Q 58 432 5 432
      L 5 58
      Q 58 58 58 5
      Z
    " fill="none" stroke="#8B5A2B" strokeWidth="2.8"/>

    {/* Inner accent line */}
    <path d="
      M 68 14
      L 532 14
      Q 532 66 583 66
      L 583 424
      Q 532 424 532 476
      L 68 476
      Q 68 424 17 424
      L 17 66
      Q 68 66 68 14
      Z
    " fill="none" stroke="#8B5A2B" strokeWidth="0.9" opacity="0.35"/>

    {/* Corner ornaments – reuse the nouveauCorner symbol from the page SVG defs */}
    <svg x="5"   y="5"   width="72" height="72" viewBox="0 0 80 80" opacity="0.55"><use href="#nouveauCorner"/></svg>
    <svg x="523" y="5"   width="72" height="72" viewBox="0 0 80 80" opacity="0.55" style={{transform:'scaleX(-1)', transformOrigin:'559px 41px'}}><use href="#nouveauCorner"/></svg>
    <svg x="5"   y="413" width="72" height="72" viewBox="0 0 80 80" opacity="0.55" style={{transform:'scaleY(-1)', transformOrigin:'41px 449px'}}><use href="#nouveauCorner"/></svg>
    <svg x="523" y="413" width="72" height="72" viewBox="0 0 80 80" opacity="0.55" style={{transform:'scale(-1,-1)', transformOrigin:'559px 449px'}}><use href="#nouveauCorner"/></svg>
  </svg>
);

/* ── Illustration ── (unchanged) */
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

    <ellipse cx="305" cy="207" rx="56" ry="7"  fill="rgba(40,20,8,0.25)"/>
    <ellipse cx="195" cy="210" rx="42" ry="5"  fill="rgba(40,20,8,0.18)"/>
    <ellipse cx="62"  cy="150" rx="62" ry="6"  fill="rgba(40,20,8,0.10)"/>

    {/* ── Floating envelope ── */}
    <g transform="translate(8,12) rotate(-14,65,65)">
      <rect x="18" y="5" width="94" height="58" rx="3" fill="url(#ccLetterPaper)" stroke="#C9A14A" strokeWidth="1.2"/>
      <line x1="28" y1="18" x2="102" y2="18" stroke="#C9A14A" strokeWidth="0.7" opacity="0.65"/>
      <line x1="28" y1="26" x2="102" y2="26" stroke="#C9A14A" strokeWidth="0.7" opacity="0.65"/>
      <line x1="28" y1="34" x2="88"  y2="34" stroke="#C9A14A" strokeWidth="0.7" opacity="0.65"/>
      <line x1="28" y1="42" x2="96"  y2="42" stroke="#C9A14A" strokeWidth="0.7" opacity="0.55"/>
      <g fill="#C9A14A" opacity="0.30">
        <ellipse cx="90" cy="50" rx="4"   ry="3"/>
        <ellipse cx="84" cy="45" rx="2"   ry="2.5"/>
        <ellipse cx="90" cy="43" rx="2"   ry="2.5"/>
        <ellipse cx="96" cy="45" rx="2"   ry="2.5"/>
      </g>
      <rect x="5" y="32" width="120" height="82" rx="5" fill="url(#ccEnvBody)" stroke="#C9A14A" strokeWidth="1.5"/>
      <path d="M5 114 L65 76 L125 114" fill="#E8D5A0" stroke="#C9A14A" strokeWidth="0.8" opacity="0.65"/>
      <path d="M5 32 L65 68 L125 32"   fill="#F5E8C8" stroke="#C9A14A" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="65" cy="97" r="15" fill="#7A1515" opacity="0.88"/>
      <circle cx="65" cy="97" r="11" fill="#922020" opacity="0.85"/>
      <g fill="#F0D080" opacity="0.82" transform="translate(58,89)">
        <ellipse cx="7"  cy="10" rx="5"   ry="4"/>
        <ellipse cx="0"  cy="5"  rx="2.5" ry="3"/>
        <ellipse cx="7"  cy="3"  rx="2.5" ry="3"/>
        <ellipse cx="14" cy="5"  rx="2.5" ry="3"/>
      </g>
    </g>

    {/* ── Black cat ── */}
    <g transform="translate(152,58)">
      <path d="M42 130 C65 148 88 138 92 112 C96 88 80 80 70 84"
            stroke="#1a0f0f" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M42 130 C65 148 88 138 92 112 C96 88 80 80 70 84"
            stroke="#241414" strokeWidth="9"  fill="none" strokeLinecap="round"/>
      <ellipse cx="42" cy="108" rx="32" ry="40" fill="#1a0f0f"/>
      <ellipse cx="42" cy="103" rx="27" ry="33" fill="#221414"/>
      <rect x="18" y="132" width="15" height="20" rx="8" fill="#1a0f0f"/>
      <rect x="51" y="132" width="15" height="20" rx="8" fill="#1a0f0f"/>
      <ellipse cx="25" cy="150" rx="11" ry="6" fill="#1e1010"/>
      <ellipse cx="58" cy="150" rx="11" ry="6" fill="#1e1010"/>
      <ellipse cx="42" cy="113" rx="13" ry="18" fill="#271818" opacity="0.75"/>
      <circle cx="42" cy="55" r="32" fill="#1a0f0f"/>
      <path d="M20 36 L12 8  L34 30 Z" fill="#1a0f0f"/>
      <path d="M22 34 L16 14 L32 28 Z" fill="#7A3045" opacity="0.55"/>
      <path d="M64 36 L72 8  L50 30 Z" fill="#1a0f0f"/>
      <path d="M62 34 L68 14 L52 28 Z" fill="#7A3045" opacity="0.55"/>
      <ellipse cx="30" cy="53" rx="10" ry="11" fill="url(#ccCatEye)"/>
      <ellipse cx="54" cy="53" rx="10" ry="11" fill="url(#ccCatEye)"/>
      <ellipse cx="30" cy="53" rx="3.5" ry="9" fill="#080404"/>
      <ellipse cx="54" cy="53" rx="3.5" ry="9" fill="#080404"/>
      <circle cx="33" cy="48" r="3" fill="rgba(255,255,255,0.90)"/>
      <circle cx="57" cy="48" r="3" fill="rgba(255,255,255,0.90)"/>
      <path d="M39 65 L42 69 L45 65 Z" fill="#D09090"/>
      <path d="M42 69 Q37 74 33 72" stroke="#9B6060" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M42 69 Q47 74 51 72" stroke="#9B6060" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <line x1="10" y1="63" x2="30" y2="65" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="9"  y1="69" x2="30" y2="69" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="10" y1="75" x2="30" y2="73" stroke="#9B8870" strokeWidth="0.9" opacity="0.6"/>
      <line x1="74" y1="63" x2="54" y2="65" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="75" y1="69" x2="54" y2="69" stroke="#9B8870" strokeWidth="0.9" opacity="0.8"/>
      <line x1="74" y1="75" x2="54" y2="73" stroke="#9B8870" strokeWidth="0.9" opacity="0.6"/>
      <path d="M16 72 Q42 85 68 72" stroke="#C9A14A" strokeWidth="4.5" fill="none"/>
      <circle cx="42" cy="82" r="5.5" fill="#C9A14A" stroke="#8B6914" strokeWidth="1"/>
      <line x1="42" y1="86" x2="42" y2="88" stroke="#8B6914" strokeWidth="1"/>
      <circle cx="42" cy="78" r="2" fill="rgba(255,235,150,0.4)"/>
    </g>

    {/* ── Bronze post box ── */}
    <g transform="translate(245,5)">
      <ellipse cx="56" cy="203" rx="55" ry="8" fill="rgba(30,15,5,0.28)"/>
      <rect x="6"  y="190" width="100" height="16" rx="5" fill="#5A3010" stroke="#3A1A08" strokeWidth="1"/>
      <rect x="10" y="192" width="92"  height="10" rx="3" fill="#6B3A15"/>
      <rect x="10" y="178" width="92"  height="15" rx="4" fill="#7A4520" stroke="#4A2808" strokeWidth="0.8"/>
      <rect x="12" y="62"  width="88"  height="120" rx="9" fill="url(#ccBronzeH)" stroke="#4A2808" strokeWidth="1.5"/>
      <rect x="12" y="66"  width="12"  height="112" rx="6" fill="rgba(0,0,0,0.25)"/>
      <rect x="88" y="66"  width="12"  height="112" rx="6" fill="rgba(0,0,0,0.28)"/>
      <rect x="28" y="66"  width="30"  height="112" rx="8" fill="rgba(255,225,150,0.12)"/>
      <rect x="10" y="62"  width="92"  height="14"  rx="7" fill="#7A4520" stroke="#4A2808" strokeWidth="0.8"/>
      <ellipse cx="56" cy="62" rx="47" ry="22" fill="url(#ccBronzeDome)" stroke="#4A2808" strokeWidth="1.5"/>
      <ellipse cx="40" cy="56" rx="23" ry="10" fill="rgba(255,232,165,0.20)"/>
      <ellipse cx="56" cy="62" rx="47" ry="9"  fill="#7A4520" stroke="#4A2808" strokeWidth="0.8"/>
      <ellipse cx="56" cy="42" rx="17" ry="9"  fill="#8B5820" stroke="#4A2808" strokeWidth="1"/>
      <circle  cx="56" cy="36" r="11" fill="url(#ccBronzeKnob)" stroke="#4A2808" strokeWidth="1"/>
      <circle  cx="52" cy="32" r="4"  fill="rgba(255,235,180,0.45)"/>
      <rect x="18" y="104" width="76" height="13" rx="6.5" fill="#2A1005" stroke="#4A2808" strokeWidth="1.2"/>
      <rect x="20" y="107" width="72" height="7"  rx="3.5" fill="#160802"/>
      <line x1="20" y1="107" x2="92" y2="107" stroke="rgba(200,150,80,0.3)" strokeWidth="1"/>
      <ellipse cx="56" cy="162" rx="33" ry="27" fill="#6B3A15" stroke="#4A2808" strokeWidth="1.2"/>
      <ellipse cx="56" cy="162" rx="29" ry="23" fill="#7A4520"/>
      <ellipse cx="56" cy="162" rx="25" ry="19" fill="#6B3A15" stroke="#C9A14A" strokeWidth="1"/>
      <path d="M44 150 L46 142 L50 148 L56 140 L62 148 L66 142 L68 150 Z" fill="#C9A14A" stroke="#8B6914" strokeWidth="0.5"/>
      <rect x="43" y="150" width="26" height="5" rx="2.5" fill="#C9A14A"/>
      <text x="56" y="173" textAnchor="middle" fontFamily="'Cinzel','IM Fell English SC',serif"
            fontSize="12" fontWeight="700" fill="#C9A14A" letterSpacing="3">GR</text>
      <ellipse cx="24" cy="144" rx="8"  ry="5"   fill="#3A7050" opacity="0.22"/>
      <ellipse cx="87" cy="170" rx="6"  ry="4"   fill="#3A7050" opacity="0.18"/>
      <ellipse cx="26" cy="182" rx="10" ry="5"   fill="#3A7050" opacity="0.20"/>
      <ellipse cx="80" cy="124" rx="5"  ry="3.5" fill="#3A7050" opacity="0.15"/>
    </g>

    <line x1="8" y1="203" x2="372" y2="203" stroke="#C9A14A" strokeWidth="0.8" opacity="0.40"/>
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

/* ── Main card component ── */
const ContactCard = () => {
  const wrapRef = useRef(null);

  const handleMouseEnter = () => {
    if (wrapRef.current) wrapRef.current.style.transform = 'translateY(-6px) scale(1.012)';
  };
  const handleMouseLeave = () => {
    if (wrapRef.current) wrapRef.current.style.transform = 'translateY(0) scale(1)';
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

      {/* Card + ribbon wrapper */}
      <a
        href="https://form.run/@yaseieneko-IHhS4nvQhddS0viY89A1"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration:'none', display:'block', maxWidth:'660px', margin:'0 auto'}}
      >
        {/* Outer wrapper handles hover lift and accommodates the bow */}
        <div
          ref={wrapRef}
          style={{
            position: 'relative',
            paddingBottom: '52px',
            transition: 'transform 0.4s cubic-bezier(.2,.9,.3,1)',
            cursor: 'pointer'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* ── Parchment card ── */}
          <div
            className="parchment-bg"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '42px',
              boxShadow: '0 6px 28px rgba(40,20,8,0.18), 0 2px 8px rgba(40,20,8,0.10)',
              padding: '40px 36px 44px'
            }}
          >
            {/* SVG baroque frame overlay */}
            <BaroqueFrame />

            {/* Content */}
            <div className="text-center" style={{position:'relative'}}>
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
              <p className="font-yuji text-2xl md:text-3xl nouveau-text mb-1"
                 style={{letterSpacing:'0.2em'}}>
                お問合せはこちらから
              </p>
              <p className="font-cormorant italic text-amber-800/70 text-sm mt-1"
                 style={{letterSpacing:'0.15em'}}>
                ✉ &nbsp;Contact Form&nbsp; ✉
              </p>

              {/* ── Glossy pill button ── */}
              <div style={{
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '22px',
                padding: '14px 56px',
                background: 'linear-gradient(180deg, #C07830 0%, #8A4418 42%, #5A2C0E 73%, #7A3A1A 100%)',
                border: '1px solid #3A1A08',
                borderRadius: '50px',
                boxShadow: '0 8px 22px rgba(40,20,8,0.58), 0 3px 7px rgba(40,20,8,0.32), inset 0 1px 0 rgba(255,225,150,0.30), inset 0 -3px 6px rgba(0,0,0,0.35)',
                cursor: 'pointer'
              }}>
                {/* Top glass sheen */}
                <span style={{
                  position: 'absolute', top:0, left:0, right:0, height:'46%',
                  background: 'linear-gradient(180deg, rgba(255,218,130,0.28) 0%, rgba(255,218,130,0.02) 100%)',
                  borderRadius: '50px 50px 50% 50% / 50px 50px 80% 80%',
                  pointerEvents: 'none'
                }}></span>
                {/* Bottom shadow inset */}
                <span style={{
                  position: 'absolute', bottom:0, left:0, right:0, height:'28%',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.30) 0%, transparent 100%)',
                  pointerEvents: 'none'
                }}></span>
                {/* Label */}
                <span style={{
                  position: 'relative',
                  fontFamily: "'Cinzel','IM Fell English SC',serif",
                  fontSize: '14px', fontWeight: '700',
                  letterSpacing: '0.35em',
                  color: '#F5D98A',
                  textShadow: '0 1px 3px rgba(40,20,8,0.85), 0 0 10px rgba(255,200,60,0.22)'
                }}>
                  ✦ &nbsp;CONTACT HERE&nbsp; ✦
                </span>
              </div>
            </div>
          </div>

          {/* ── Ribbon bow – overlaps bottom of card ── */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          }}>
            <RibbonBow />
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
