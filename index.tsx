import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "8801943403982";
const MESSENGER_USERNAME = "asikagro75";
const EMAIL = "asikagro75@gmai.com";
const ADDRESS = "সারাদেশে যেখানে কুরিয়ার সার্ভিস রয়েছে সেখানে ডেলিভারি করা হয়।";
const OPENING_HOURS = "সপ্তাহে ৭ দিন, ২৪ ঘণ্টাই অর্ডার করা যাবে";
const DISPLAY_NUMBER = "01943-403982";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const FACEBOOK_PAGE_URL = "https://www.facebook.com/asikagro75/";

const products = [
  {
    name: "🟡 খাঁটি সরিষার তেল",
    productIdentifier: "mustard oil",
    image: "images/1-p.png",
    prices: ["📦 ১ লিটার বোতল – ২৮০ টাকা", "📦 ৫০০ml বোতল – ১৫০ টাকা"],
    features: "✅ ঘানিভাঙা | কেমিক্যালমুক্ত | ঘ্রাণযুক্ত",
  },
  {
    name: "🟠 খাঁটি দেশি ঘি",
    productIdentifier: "ghee",
    image: "images/2-p.png",
    prices: ["📦 ২৫০ গ্রাম – ৫৫০ টাকা", "📦 ৫০০ গ্রাম – ১০৫০ টাকা"],
    features: "✅ গরুর দুধ থেকে তৈরি | একদম খাঁটি",
  },
];

const testimonials = [
  {
    quote:
      "তেল এবং ঘি দুটোই অসাধারণ। খাঁটি পণ্যের জন্য আশিক এগ্রো এখন আমার প্রথম পছন্দ। ডেলিভারিও খুব দ্রুত ছিল।",
    name: "সাকিব আহমেদ",
    location: "ঢাকা",
  },
  {
    quote:
      "অনেকদিন পর এমন খাঁটি সরিষার তেলের ঘ্রাণ পেলাম। রান্নার স্বাদটাই বদলে গেছে। ধন্যবাদ আশিক এগ্রোকে।",
    name: "ফারিয়া ইসলাম",
    location: "চট্টগ্রাম",
  },
  {
    quote:
      "ঘি-টা মুখে দিতেই বোঝা যায় কতটা খাঁটি। প্যাকেজিংও খুব ভালো ছিল। আমি সবার জন্য আশিক এগ্রো সাজেস্ট করবো।",
    name: "ইমরান হোসেন",
    location: "খুলনা",
  },
];

const whatsappMessageTemplate = `Assalamu Alaikum,
আমি Asik Agro থেকে অর্ডার করতে চাই।

পণ্যের নাম: 
পরিমাণ: 
ডেলিভারি ঠিকানা: 
আমার ফোন নম্বর:`;

// --- REACT COMPONENTS ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    "#products": "পণ্য",
    "#why-us": "কেন আমরা",
    "#testimonials": "গ্রাহক সন্তুষ্টি",
    "#coming-soon": "নতুন পণ্য",
    "#order-process": "অর্ডার পদ্ধতি",
    "#contact": "যোগাযোগ",
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="#" className="brand">
          Asik Agro
        </a>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {Object.entries(navItems).map(([href, text]) => (
            <li key={href} className="nav-item">
              <a
                href={href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-shapes">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`shape shape-${i}`}></div>
      ))}
    </div>
    <div className="hero-content">
      <h1>শীঘ্রই আসছি আমরা!</h1>
      <p className="hero-subtitle">
        খাঁটি ও বিশুদ্ধ পণ্যের প্রতিশ্রুতি নিয়ে আসিফ এগ্রো আসছে আপনাদের
        দোরগোড়ায়। আমাদের সাথেই থাকুন!
      </p>
      <div className="hero-update-info">
        <a
          href={FACEBOOK_PAGE_URL}
          className="facebook-link-hero"
          target="_blank"
          rel="noopener noreferrer"
        >
          আপডেট পেতে আমাদের ফেসবুক পেজে ফলো দিন
        </a>
      </div>
    </div>
  </section>
);

const ProductList = () => (
  <section id="products">
    <h2 className="section-title">আমাদের পণ্য</h2>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.name} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          <div className="product-info">
            <h3>{product.name}</h3>
            <ul>
              {product.prices.map((price) => (
                <li key={price}>{price}</li>
              ))}
            </ul>
            <p className="product-features">{product.features}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WhyUsSection = () => {
  const items = [
    {
      icon: "🌿",
      title: "১০০% খাঁটি পণ্য",
      description:
        "বাছাই করা সেরা উপাদান দিয়ে সম্পূর্ণ নিজস্ব তত্ত্বাবধানে তৈরি।",
    },
    {
      icon: "🏡",
      title: "নিজস্ব প্রক্রিয়া",
      description:
        "সম্পূর্ণ ঘরোয়া প্রক্রিয়ায় স্বাস্থ্যসম্মত উপায়ে প্রস্তুতকৃত।",
    },
    {
      icon: "🚚",
      title: "সারাদেশে ডেলিভারি",
      description: "আমরা দ্রুততম সময়ে আপনার ঠিকানায় পণ্য পৌঁছে দিই।",
    },
    {
      icon: "💚",
      title: "গ্রাহক সন্তুষ্টি",
      description: "আমাদের কাছে প্রতিটি গ্রাহকের সন্তুষ্টিই সর্বাগ্রে।",
    },
  ];

  return (
    <section id="why-us" className="why-us-section">
      <h2 className="section-title">কেন আশিক এগ্রো সেরা?</h2>
      <div className="why-us-grid">
        {items.map((item) => (
          <div key={item.title} className="why-us-card">
            <div className="why-us-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <h2 className="section-title">গ্রাহক সন্তুষ্টি</h2>
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="testimonial-card">
          <div className="testimonial-quote-icon">“</div>
          <p className="testimonial-text">{testimonial.quote}</p>
          <div className="testimonial-author">
            <span className="author-name">{testimonial.name}</span>
            <span className="author-location">{testimonial.location}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ComingSoonSection = () => {
  const upcomingProducts = [
    {
      name: "🍯 খাঁটি মধু",
      description: "সুন্দরবনের প্রাকৃতিক চাক থেকে সংগ্রহ করা খাঁটি মধু।",
    },
    {
      name: "🥥 ঘানি ভাঙা নারিকেল তেল",
      description:
        "কেমিক্যালমুক্ত এবং স্বাস্থ্যসম্মত উপায়ে তৈরি খাঁটি নারিকেল তেল।",
    },
    {
      name: "⚫ কালোজিরা তেল",
      description: "রোগ প্রতিরোধ ক্ষমতা বাড়াতে ১০০% খাঁটি কালোজিরা তেল।",
    },
  ];

  return (
    <section id="coming-soon" className="coming-soon-section">
      <h2 className="section-title">শীঘ্রই আসছে নতুন পণ্য</h2>
      <div className="coming-soon-grid">
        {upcomingProducts.map((item) => (
          <div key={item.name} className="coming-soon-card">
            <div className="coming-soon-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="coming-soon-badge">শীঘ্রই আসছে...</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const OrderProcessSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(whatsappMessageTemplate)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section id="order-process" className="order-process-section">
      <h2 className="section-title">কিভাবে অর্ডার করবেন?</h2>
      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">ধাপ ১</div>
          <h3>মেসেজ টেমপ্লেট কপি করুন</h3>
          <p>আপনার অর্ডারের বিবরণী লিখতে নিচের টেমপ্লেটটি ব্যবহার করুন।</p>
          <pre className="template-content">{whatsappMessageTemplate}</pre>
          <button
            onClick={handleCopy}
            className={`copy-button ${isCopied ? "copied" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zM-1 8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1-1 8z" />
            </svg>
            <span>{isCopied ? "কপি হয়েছে!" : "কপি করুন"}</span>
          </button>
        </div>
        <div className="step-card">
          <div className="step-number">ধাপ ২</div>
          <h3>WhatsApp-এ অর্ডার পাঠান</h3>
          <p>
            কপি করা মেসেজটি পেস্ট করে নিচের বাটনে ক্লিক করে আমাদের WhatsApp-এ
            পাঠিয়ে দিন।
          </p>
          <a
            href={WHATSAPP_LINK}
            className="whatsapp-button large"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp-এ অর্ডার করুন
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <h2 className="section-title">যোগাযোগ করুন</h2>
    <div className="contact-container">
      <div className="contact-info-wrapper">
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <div>
            <h4>ফোন</h4>
            <p>
              <a href={`tel:+${WHATSAPP_NUMBER}`}>{DISPLAY_NUMBER}</a>
            </p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <div>
            <h4>ইমেইল</h4>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">⏰</span>
          <div>
            <h4>অর্ডার করার সময়</h4>
            <p>{OPENING_HOURS}</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🚚</span>
          <div>
            <h4>ডেলিভারি এলাকা</h4>
            <p>{ADDRESS}</p>
          </div>
        </div>
        <div className="contact-buttons-container">
          <a
            href={WHATSAPP_LINK}
            className="contact-btn whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={`https://m.me/${MESSENGER_USERNAME}`}
            className="contact-btn messenger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Messenger
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-col">
        <h4>Asik Agro</h4>
        <p>আপনার আস্থাই আমাদের খাঁটি পণ্য পৌঁছে দেওয়ার অনুপ্রেরণা।</p>
      </div>
      <div className="footer-col">
        <h4>কুইক লিংক</h4>
        <ul>
          <li>
            <a href="#products">পণ্য</a>
          </li>
          <li>
            <a href="#why-us">কেন আমরা সেরা</a>
          </li>
          <li>
            <a href="#testimonials">গ্রাহক সন্তুষ্টি</a>
          </li>
          <li>
            <a href="#coming-soon">নতুন পণ্য</a>
          </li>
          <li>
            <a href="#order-process">অর্ডার পদ্ধতি</a>
          </li>
          <li>
            <a href="#contact">যোগাযোগ</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>যোগাযোগ</h4>
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <p>
          <a href={`tel:+${WHATSAPP_NUMBER}`}>{DISPLAY_NUMBER}</a>
        </p>
      </div>
      <div className="footer-col">
        <h4>আমাদের অনুসরণ করুন</h4>
        <div className="social-links">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.62C8.75 21.41 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.15 12.04 20.15C10.46 20.15 8.95 19.68 7.68 18.89L7.32 18.67L4.35 19.56L5.26 16.7L5.03 16.34C4.17 14.95 3.8 13.25 3.8 11.91C3.8 7.39 7.52 3.67 12.04 3.67M17.38 14.46C17.18 14.95 16.14 15.48 15.82 15.53C15.5 15.58 15.09 15.71 14.15 15.36C12.96 14.91 11.83 14.07 10.92 12.92C10.15 11.96 9.53 10.84 9.38 10.56C9.23 10.28 9.38 10.07 9.56 9.89C9.73 9.71 9.92 9.48 10.13 9.25C10.29 9.09 10.34 8.97 10.45 8.79C10.55 8.61 10.5 8.44 10.39 8.23L10.03 7.34C9.93 7.1 9.73 7.04 9.56 7.14C9.38 7.24 8.97 7.47 8.72 7.72C8.47 7.97 8.07 8.37 8.07 9.04C8.07 9.71 8.72 10.33 8.83 10.48C8.93 10.63 10.13 12.63 12.13 13.5C13.88 14.26 14.15 14.13 14.43 14.1C14.71 14.08 15.75 13.53 15.93 12.92C16.11 12.31 16.11 11.8 16.05 11.7C16 11.6 15.82 11.55 15.62 11.45C15.42 11.35 14.71 11 14.43 10.89C14.15 10.79 14.05 10.74 13.88 11.02C13.71 11.3 13.26 11.8 13.1 11.96C12.95 12.12 12.8 12.14 12.57 12.04C12.35 11.93 11.6 11.69 10.7 10.84C10.01 10.2 9.51 9.38 9.38 9.1C9.26 8.82 9.36 8.66 9.51 8.53L10.29 7.64C10.39 7.54 10.44 7.34 10.55 7.19C10.65 7.04 10.7 6.88 10.65 6.73C10.6 6.58 10.13 5.38 9.93 4.88C9.73 4.38 9.53 4.48 9.38 4.48C9.24 4.48 9.09 4.48 8.95 4.48C8.8 4.48 8.55 4.53 8.35 4.73C8.15 4.93 7.68 5.38 7.68 6.35C7.68 7.32 8.35 8.25 8.5 8.44C8.65 8.64 10.08 10.9 12.35 11.82C14.23 12.59 14.81 12.54 15.25 12.49C15.7 12.44 16.69 11.89 16.89 11.3C17.09 10.71 17.09 10.15 17.04 10C16.99 9.85 16.89 9.8 16.74 9.75Z"
              ></path>
            </svg>
          </a>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10.01 10.01 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Asik Agro. সর্বস্বত্ব সংরক্ষিত।</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductList />
        <WhyUsSection />
        <TestimonialsSection />
        <ComingSoonSection />
        <OrderProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
