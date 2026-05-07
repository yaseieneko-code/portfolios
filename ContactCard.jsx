"use strict";

const ContactCard = () => (
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
      className="contact-image-link"
      style={{
        display: "block",
        width: "min(100%, 680px)",
        margin: "0 auto",
        textDecoration: "none",
        borderRadius: "28px",
        outlineOffset: "6px"
      }}
    >
      <img
        src="images/contact-card.png"
        alt="お問い合わせはこちらから Contact Form"
        width="1086"
        height="1448"
        loading="lazy"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "28px",
          boxShadow: "0 18px 34px rgba(70, 38, 10, 0.20)",
          transition: "transform 0.35s cubic-bezier(.2,.9,.3,1), box-shadow 0.35s ease"
        }}
      />
    </a>
  </section>
);

ReactDOM.createRoot(document.getElementById("contact-card-root")).render(
  React.createElement(React.StrictMode, null, React.createElement(ContactCard, null))
);
