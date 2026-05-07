"use strict";

const { useRef } = React;

const ContactCardSVG = () => (
  <svg
    viewBox="0 0 720 840"
    role="img"
    aria-label="お問い合わせフォームへの装飾カード"
    style={{ width: "100%", height: "auto", display: "block", pointerEvents: "none" }}
  >
    <defs>
      <radialGradient id="ccPaper" cx="50%" cy="44%" r="70%">
        <stop offset="0%" stopColor="#FFF8DF" />
        <stop offset="58%" stopColor="#F4E4C0" />
        <stop offset="100%" stopColor="#E8D0A4" />
      </radialGradient>
      <linearGradient id="ccGoldLine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F2D89A" />
        <stop offset="38%" stopColor="#C7954C" />
        <stop offset="70%" stopColor="#8B5E34" />
        <stop offset="100%" stopColor="#E8C782" />
      </linearGradient>
      <linearGradient id="ccBronze" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7C471A" />
        <stop offset="18%" stopColor="#B8732A" />
        <stop offset="46%" stopColor="#E5AB58" />
        <stop offset="76%" stopColor="#9A5B22" />
        <stop offset="100%" stopColor="#63320F" />
      </linearGradient>
      <linearGradient id="ccBronzeV" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0C46E" />
        <stop offset="44%" stopColor="#A86828" />
        <stop offset="100%" stopColor="#5B2C0C" />
      </linearGradient>
      <radialGradient id="ccEye" cx="36%" cy="34%" r="68%">
        <stop offset="0%" stopColor="#FFF5B8" />
        <stop offset="44%" stopColor="#D89C32" />
        <stop offset="100%" stopColor="#4E320B" />
      </radialGradient>
      <linearGradient id="ccEnvelope" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF6D8" />
        <stop offset="100%" stopColor="#E7C98E" />
      </linearGradient>
      <linearGradient id="ccButton" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C7863D" />
        <stop offset="42%" stopColor="#8E4E1D" />
        <stop offset="76%" stopColor="#5C2E0D" />
        <stop offset="100%" stopColor="#7A4218" />
      </linearGradient>
      <linearGradient id="ccRibbon" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#6B3511" />
        <stop offset="25%" stopColor="#B97831" />
        <stop offset="55%" stopColor="#D6A243" />
        <stop offset="82%" stopColor="#9A5B24" />
        <stop offset="100%" stopColor="#5B2C0D" />
      </linearGradient>
      <filter id="ccSoftShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="#4A2308" floodOpacity="0.22" />
      </filter>
      <filter id="ccButtonShadow" x="-20%" y="-50%" width="140%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#351706" floodOpacity="0.55" />
      </filter>
    </defs>

    <rect x="36" y="30" width="648" height="760" rx="28" fill="url(#ccPaper)" opacity="0.96" />
    <rect x="36" y="30" width="648" height="760" rx="28" fill="none" stroke="#C99A62" strokeWidth="1.1" opacity="0.42" />

    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 106 72 C 232 96 488 96 614 72 Q 612 118 658 124 L 658 656 Q 612 662 614 710 C 488 686 232 686 106 710 Q 108 662 62 656 L 62 124 Q 108 118 106 72 Z"
        stroke="url(#ccGoldLine)" strokeWidth="2.6" />
      <path d="M 120 88 C 240 108 480 108 600 88 Q 600 132 642 140 L 642 640 Q 600 648 600 692 C 480 672 240 672 120 692 Q 120 648 78 640 L 78 140 Q 120 132 120 88 Z"
        stroke="#A9763C" strokeWidth="1" opacity="0.58" />
      <path d="M 140 104 C 252 118 468 118 580 104 M 140 676 C 252 662 468 662 580 676"
        stroke="#D9B672" strokeWidth="0.95" opacity="0.75" />
    </g>

    <g fill="none" stroke="#D0A15B" strokeWidth="1.25" opacity="0.66">
      <path d="M 90 128 C 60 110 68 70 98 78 C 132 88 116 132 82 150 C 56 164 48 122 76 96" />
      <path d="M 130 104 C 96 92 90 48 122 48 C 156 50 156 96 124 126 C 98 150 78 118 100 88" />
      <path d="M 630 128 C 660 110 652 70 622 78 C 588 88 604 132 638 150 C 664 164 672 122 644 96" />
      <path d="M 590 104 C 624 92 630 48 598 48 C 564 50 564 96 596 126 C 622 150 642 118 620 88" />
      <path d="M 90 620 C 60 638 68 678 98 670 C 132 660 116 616 82 598 C 56 584 48 626 76 652" />
      <path d="M 630 620 C 660 638 652 678 622 670 C 588 660 604 616 638 598 C 664 584 672 626 644 652" />
    </g>

    <g transform="translate(88 148) rotate(-12 98 88)" filter="url(#ccSoftShadow)">
      <rect x="58" y="6" width="116" height="72" rx="4" fill="#FFF9E8" stroke="#D3A45E" strokeWidth="1.7" />
      <path d="M 76 26 L 158 26 M 76 39 L 146 39 M 76 52 L 154 52" stroke="#D7B56E" strokeWidth="1.2" opacity="0.65" />
      <rect x="12" y="52" width="170" height="112" rx="8" fill="url(#ccEnvelope)" stroke="#C9954A" strokeWidth="2" />
      <path d="M 12 52 L 98 107 L 182 52" fill="#F7E7C2" stroke="#C9954A" strokeWidth="1.8" />
      <path d="M 12 164 L 98 104 L 182 164" fill="#E6C789" opacity="0.62" stroke="#C9954A" strokeWidth="1.2" />
      <circle cx="98" cy="138" r="18" fill="#8F1F1E" />
      <circle cx="98" cy="138" r="12" fill="#A52B28" />
      <g fill="#F0D080" transform="translate(88 127)">
        <ellipse cx="10" cy="15" rx="6" ry="5" />
        <ellipse cx="2" cy="8" rx="3" ry="4" />
        <ellipse cx="10" cy="5" rx="3" ry="4" />
        <ellipse cx="18" cy="8" rx="3" ry="4" />
      </g>
    </g>

    <g transform="translate(318 180)" filter="url(#ccSoftShadow)">
      <path d="M 72 180 C 104 206 132 184 128 144 C 126 118 108 108 94 118"
        stroke="#1A0F0C" strokeWidth="15" fill="none" strokeLinecap="round" />
      <path d="M 74 178 C 102 198 120 180 118 148 C 116 128 104 118 94 118"
        stroke="#2A1712" strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="62" cy="176" rx="45" ry="58" fill="#1A0F0C" />
      <ellipse cx="62" cy="166" rx="35" ry="45" fill="#231410" />
      <ellipse cx="62" cy="178" rx="20" ry="29" fill="#2F1A15" opacity="0.5" />
      <path d="M 25 77 L 12 22 L 49 62 Z" fill="#160C0A" />
      <path d="M 99 77 L 112 22 L 75 62 Z" fill="#160C0A" />
      <path d="M 27 68 L 18 33 L 44 62 Z M 97 68 L 106 33 L 80 62 Z" fill="#7B3345" opacity="0.58" />
      <circle cx="62" cy="96" r="47" fill="#1A0F0C" />
      <circle cx="45" cy="91" r="14" fill="url(#ccEye)" />
      <circle cx="79" cy="91" r="14" fill="url(#ccEye)" />
      <ellipse cx="45" cy="92" rx="4.2" ry="11" fill="#080403" />
      <ellipse cx="79" cy="92" rx="4.2" ry="11" fill="#080403" />
      <circle cx="50" cy="85" r="3.3" fill="#FFF8D8" />
      <circle cx="84" cy="85" r="3.3" fill="#FFF8D8" />
      <path d="M 58 110 L 66 110 L 62 116 Z" fill="#D69A98" />
      <path d="M 62 116 Q 56 123 50 120 M 62 116 Q 68 123 74 120" stroke="#B98A7E" strokeWidth="1.4" fill="none" />
      <g stroke="#BAA17C" strokeWidth="1.25" opacity="0.82">
        <path d="M 18 108 L 44 111 M 17 118 L 44 118 M 19 128 L 44 124" />
        <path d="M 106 108 L 80 111 M 107 118 L 80 118 M 105 128 L 80 124" />
      </g>
      <path d="M 24 132 Q 62 149 100 132" stroke="#CDA24A" strokeWidth="6" fill="none" />
      <path d="M 28 129 Q 62 140 96 129" stroke="#F0D080" strokeWidth="1.2" fill="none" opacity="0.75" />
      <circle cx="62" cy="147" r="7" fill="#D1A04A" stroke="#7D5514" strokeWidth="1.2" />
      <rect x="28" y="228" width="20" height="22" rx="10" fill="#1A0F0C" />
      <rect x="76" y="228" width="20" height="22" rx="10" fill="#1A0F0C" />
      <ellipse cx="38" cy="248" rx="16" ry="8" fill="#1A0F0C" />
      <ellipse cx="86" cy="248" rx="16" ry="8" fill="#1A0F0C" />
    </g>

    <g transform="translate(485 138)" filter="url(#ccSoftShadow)">
      <ellipse cx="72" cy="312" rx="76" ry="12" fill="#59300F" opacity="0.35" />
      <rect x="14" y="288" width="116" height="24" rx="7" fill="#5B2C0C" stroke="#3A1A08" strokeWidth="1.3" />
      <rect x="8" y="265" width="128" height="28" rx="7" fill="#7C471A" stroke="#4A2409" strokeWidth="1.4" />
      <rect x="18" y="82" width="108" height="190" rx="14" fill="url(#ccBronze)" stroke="#4A2409" strokeWidth="2" />
      <rect x="20" y="90" width="16" height="174" rx="8" fill="#2D1305" opacity="0.25" />
      <rect x="110" y="90" width="16" height="174" rx="8" fill="#2D1305" opacity="0.28" />
      <rect x="42" y="92" width="34" height="170" rx="10" fill="#FFF1B0" opacity="0.13" />
      <rect x="14" y="78" width="116" height="20" rx="10" fill="#8A5020" stroke="#4A2409" strokeWidth="1.3" />
      <ellipse cx="72" cy="75" rx="61" ry="31" fill="url(#ccBronzeV)" stroke="#4A2409" strokeWidth="2" />
      <ellipse cx="51" cy="66" rx="30" ry="12" fill="#FFE0A0" opacity="0.24" />
      <ellipse cx="72" cy="78" rx="61" ry="12" fill="#7B4218" stroke="#4A2409" strokeWidth="1.2" />
      <ellipse cx="72" cy="46" rx="22" ry="13" fill="#9A5B22" stroke="#4A2409" strokeWidth="1.4" />
      <circle cx="72" cy="35" r="15" fill="url(#ccBronzeV)" stroke="#4A2409" strokeWidth="1.4" />
      <circle cx="66" cy="29" r="5" fill="#FFF0B5" opacity="0.48" />
      <rect x="26" y="148" width="92" height="16" rx="8" fill="#240D03" stroke="#4A2409" strokeWidth="1.6" />
      <rect x="30" y="152" width="84" height="8" rx="4" fill="#100501" />
      <ellipse cx="72" cy="232" rx="42" ry="34" fill="#6B3511" stroke="#4A2409" strokeWidth="1.5" />
      <ellipse cx="72" cy="232" rx="34" ry="27" fill="#784319" stroke="#CFA45A" strokeWidth="1.3" />
      <path d="M 56 217 L 60 205 L 67 214 L 72 203 L 79 214 L 86 205 L 89 217 Z" fill="#D0A24D" />
      <rect x="54" y="217" width="36" height="7" rx="3.5" fill="#D0A24D" />
      <text x="72" y="247" textAnchor="middle" fontFamily="'Cinzel','IM Fell English SC',serif" fontSize="18" fontWeight="700" fill="#D0A24D" letterSpacing="5">GR</text>
    </g>

    <ellipse cx="360" cy="468" rx="214" ry="8" fill="#5D310D" opacity="0.12" />
    <path d="M 333 516 Q 360 498 387 516 M 343 516 Q 360 528 377 516" stroke="#B88746" strokeWidth="1.6" fill="none" />
    <circle cx="360" cy="516" r="3.2" fill="#B88746" />

    <text x="360" y="596" textAnchor="middle" fontFamily="'Yuji Syuku','Shippori Mincho',serif" fontSize="34" fill="#8B5E34" letterSpacing="9">
      お問い合わせはこちらから
    </text>
    <text x="360" y="640" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontSize="22" fontStyle="italic" fill="#9A6A36" letterSpacing="6">
      &#9993;  Contact Form  &#9993;
    </text>

    <g filter="url(#ccButtonShadow)">
      <rect x="184" y="684" width="352" height="62" rx="31" fill="url(#ccButton)" stroke="#3A1A08" strokeWidth="2" />
      <rect x="196" y="692" width="328" height="23" rx="15" fill="#FFE0A0" opacity="0.18" />
      <path d="M 210 721 L 510 721" stroke="#2A1005" strokeWidth="1" opacity="0.32" />
      <text x="360" y="725" textAnchor="middle" fontFamily="'Cinzel','IM Fell English SC',serif" fontSize="23" fontWeight="700" fill="#F5D98A" letterSpacing="7">
        CONTACT HERE
      </text>
      <text x="206" y="725" textAnchor="middle" fontFamily="'Cinzel',serif" fontSize="18" fill="#F5D98A">✧</text>
      <text x="514" y="725" textAnchor="middle" fontFamily="'Cinzel',serif" fontSize="18" fill="#F5D98A">✧</text>
    </g>

    <g transform="translate(270 760)">
      <path d="M 90 23 C 70 1 22 -10 4 10 C -8 28 24 54 66 41 C 78 37 86 29 90 23 Z" fill="url(#ccRibbon)" stroke="#734015" strokeWidth="1.2" />
      <path d="M 90 23 C 110 1 158 -10 176 10 C 188 28 156 54 114 41 C 102 37 94 29 90 23 Z" fill="url(#ccRibbon)" stroke="#734015" strokeWidth="1.2" />
      <path d="M 82 30 C 68 48 52 64 38 82 L 56 82 C 64 64 78 44 92 30 Z" fill="url(#ccBronzeV)" />
      <path d="M 98 30 C 112 48 128 64 142 82 L 124 82 C 116 64 102 44 88 30 Z" fill="url(#ccBronzeV)" />
      <ellipse cx="90" cy="26" rx="16" ry="12" fill="#B97831" stroke="#734015" strokeWidth="1.2" />
      <path d="M 18 12 C 44 0 72 12 89 23 M 162 12 C 136 0 108 12 91 23" fill="none" stroke="#F2D89A" strokeWidth="1" opacity="0.55" />
    </g>
  </svg>
);

const ContactCard = () => {
  const wrapRef = useRef(null);

  const lift = (value) => {
    if (wrapRef.current) wrapRef.current.style.transform = value;
  };

  return (
    <section className="mt-14 md:mt-20" id="contact-section">
      <div className="text-center mb-7">
        <p className="font-fell text-[11px] tracking-[0.5em] text-amber-800/70 mb-2">✦ CONTACT ✦</p>
        <h2 className="font-yuji text-3xl md:text-4xl nouveau-text" style={{ letterSpacing: "0.15em" }}>
          お 問 合 せ
        </h2>
      </div>

      <a
        href="https://form.run/@yaseieneko-IHhS4nvQhddS0viY89A1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="お問い合わせフォームを開く"
        style={{ display: "block", maxWidth: "680px", margin: "0 auto", textDecoration: "none" }}
      >
        <div
          ref={wrapRef}
          onMouseEnter={() => lift("translateY(-5px)")}
          onMouseLeave={() => lift("translateY(0)")}
          style={{
            transition: "transform 0.35s cubic-bezier(.2,.9,.3,1)",
            cursor: "pointer",
            filter: "drop-shadow(0 16px 24px rgba(68, 35, 8, 0.16))"
          }}
        >
          <ContactCardSVG />
        </div>
      </a>
    </section>
  );
};

ReactDOM.createRoot(document.getElementById("contact-card-root")).render(
  React.createElement(React.StrictMode, null, React.createElement(ContactCard, null))
);
