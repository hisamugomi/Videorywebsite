// App.js
import SVGIcon from './assets/earth-svgrepo-com.svg?react'
import React, { useState } from 'react';
// lucide-reactから必要なアイコンをインポート
import { Search, PlayCircle, Shield, Users, MapPinHouse, DollarSign, Landmark, Phone, Mail as MailIcon, X, Menu, Link2} from 'lucide-react';
import './app.css'; // style.cssをインポート
// import {content} from './Prompts.jsx'
import HeroSection from "./HeroSection.jsx" 
import ryugakuSenpai from "./assets/スクリーンショット 2025-07-09 093311.png"
// import classNames from 'classnames';

// メインのAppコンポーネント
const App = () => {

  const content = {
    ja: {
      navbar: {
        logo: "StudyStay Japan",
        whatIs: "国内留学とは",
        experience: "体験の様子",
        testimonials: "生徒の声",
        pricing: "料金プラン",
        freeConsult: "無料相談",
        languageToggle: "English", // 英語に切り替えるボタンのテキスト
      },
      hero: {
        title: "新しい学びの形",
        subtitle: "国内留学",
        description: "海外に行かなくても、日本国内で本格的な語学留学体験を。あなたにぴったりの国内留学プログラムをマッチングします。",
        findProgram: "こちらから",
        watchVideo: "動画で見る",
      },
      whatIsStudyStay: {
        title: "国内留学とは",
        description: "日本国内にいながら、まるで海外留学のような環境で語学学習や文化交流を体験できる新しい学習スタイルです。",
        features: [
          { icon: <MapPinHouse className="icon-green" size={40} />, title: "日本にいながら海外体験", description: "日本国内で英語の環境に。" },
          { icon: <Users className="icon-purple" size={40} />, title: "12歳からできる留学体験", description: "日本国内で実施するため、安心安全に早くから英語の環境へ" },
          // { icon: <DollarSign className="icon-yellow" size={40} />, title: "コスト効率", description: "海外留学と比較して大幅にコストを抑えながら、同等の学習効果を得ることができます。" },
        ],
      },
      experience: {
        title: "他に留学につながるもの",
        description: "ポッドキャスト、イベント、インスタグラムもしています！",
        cards: [
          { imageSrc: ryugakuSenpai, title: "ポッドキャスト", description: "私たちが作っているポッドキャストもぜひ聞いてみてください！", link:"https://open.spotify.com/show/2vUNaAl1dqYFfzONyGGQxl?si=8g0jREPLSXGqrr7fHDuFJw&fbclid=PAZXh0bgNhZW0CMTEAAafxNtpAvKFRDM9HREaxmoLmEsctDKjVGxLbTDjCeXUcMSxNXo9btJL6Sb_zZQ_aem_AerUO8rJ9OCFK059nolUXQ&nd=1&dlsi=c865c31463f14bed"},
        ],
      },
      example: {
        title: "国内留学の例",
        description: "実際の国内留学プログラムの様子をご紹介します。充実した学習環境と楽しい体験をお約束します。",
        cards: [
          { imageSrc: "https://placehold.co/400x250/FFF0F5/333333?text=Accomodation", title: "久米島", description: "日本にいながら英語、異文化、に触れ合い南国で今まで行ったことのない場所に行き触れ合ったことのない文化に出会うチャンス。", link:"https://www.kume-homestay.com/" },
          { imageSrc: "https://placehold.co/400x250/E6E6FA/333333?text=Accommodation", title: "軽井沢", description: "日常の中で自然に英語が息づく「リアルな英語体験」。暮らしの中での交流や実践を通して、実践的な英語力を育みます。 ", link:"https://karuizawahomestay.com/"},
        ],
      },
      testimonials: {
        title: "生徒の声",
        cards: [
          { name: "Coming soon", title: "Coming soon", rating: 5, quote: "Coming Soon" },
        ],
      },
      pricing: {
        title: "料金プラン",
        description: "あなたのニーズに合わせて選べる、3つの料金プランをご用意しています。",
        plans: [
          { planName: "ベーシックプラン", duration: "3日間コース", price: "¥29,800", perPerson: "/人", features: ["3日間の集中英語レッスン", "宿泊費込み (2泊3日)", "食事3食付き", "基本アクティビティ"], isRecommended: false },
          { planName: "スタンダードプラン", duration: "7日間コース", price: "¥68,000", perPerson: "/人", features: ["7日間の充実した英語プログラム", "宿泊費込み (6泊7日)", "食事3食付き", "文化体験・アクティビティ", "修了証書発行"], isRecommended: true },
          { planName: "プレミアムプラン", duration: "14日間コース", price: "¥125,000", perPerson: "/人", features: ["14日間の本格的留学体験", "宿泊費込み (13泊14日)", "食事3食付き", "豊富な課外活動", "個別カウンセリング", "帰国後サポート"], isRecommended: false },
        ],
        recommendedBadge: "おすすめ",
        selectPlan: "プランを選択",
      },
      contactInfo: {
        title: "アクセス・お問い合わせ",
        description: "ご質問やお申し込みは、お気軽にお問い合わせください。",
        infoTitle: "お問い合わせ情報",
        // addressLabel: "住所:",
        // address: "〒150-0001 東京都渋谷区神宮前 1-11 StudyStay Japan ビル5F",
        // phoneLabel: "電話番号:",
        // phone: "03-1234-5678",
        // phoneHours: "(平日9:00-18:00)",
        emailLabel: "メールアドレス:",
        email: "info@studystay-japan.com",
        // accessLabel: "アクセス:",
        // access: "JR山手線 原宿駅 徒歩3分 東京メトロ「明治神宮前駅」徒歩1分",
        // mapAlt: "場所の地図",
        // mapError: "地図の読み込みエラー",
      },
      contactForm: {
        title: "お問い合わせフォーム",
        nameLabel: "お名前",
        namePlaceholder: "お名前を入力してください",
        emailLabel: "メールアドレス",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "電話番号",
        phonePlaceholder: "090-xxxx-xxxx",
        planLabel: "興味のあるプラン",
        selectPlanOption: "選択してください",
        basicPlan: "ベーシックプラン (3日間)",
        standardPlan: "スタンダードプラン (7日間)",
        premiumPlan: "プレミアムプラン (14日間)",
        messageLabel: "お問い合わせ内容",
        messagePlaceholder: "ご質問やご要望など、ご自由にご記入ください。",
        submitButton: "送信する",
      },
      footer: {
        logo: "StudyStay Japan",
        // servicesHeading: "サービス",
        // services: ["国内留学プログラム", "マッチングサービス", "カウンセリング", "アフターサポート"],
        // infoHeading: "情報",
        // info: ["よくある質問", "プライバシーポリシー", "会社概要"],
        // copyright: `© ${new Date().getFullYear()} StudyStay Japan. All rights reserved.`,
        // builtBy: "Built with ❤️ using React and CSS.",
      },
    },
    en: {
      navbar: {
        logo: "StudyStay Japan",
        whatIs: "What is Domestic Study Abroad?",
        experience: "Program Experience",
        testimonials: "Student Voices",
        pricing: "Pricing Plans",
        freeConsult: "Free Consultation",
        languageToggle: "日本語", // 日本語に切り替えるボタンのテキスト
      },
      hero: {
        title: "A New Way of Learning:",
        subtitle: "Domestic Study Abroad",
        description: "Experience authentic language study abroad in Japan without going overseas. We'll match you with the perfect domestic study abroad program.",
        findProgram: "Book a 1 on 1 meeting",
        watchVideo: "Watch Video",
      },
      whatIsStudyStay: {
        title: "What is Domestic Study Abroad?",
        description: "Domestic study abroad is a new learning style where you can experience language learning and cultural exchange in Japan, just like studying abroad.",
        features: [
          { icon: <MapPinHouse className="icon-green" size={40} />, title: "Experience different cultures in Japan", description: "Overseas feeling while still being in Japan" },
          { icon: <Users className="icon-purple" size={40} />, title: "Starting form 12 years old", description: "Exchange programs from 12 years old." },
        ],
      },
      experience: {
        title: "Exchange related programs",
        description: "We do many other things related to exchange, like our Podcast, Instagram, etc.",
        cards: [
          { imageSrc: ryugakuSenpai, title: "Podcast", description: "Please give our Podcast a listen!", link:"https://open.spotify.com/show/2vUNaAl1dqYFfzONyGGQxl?si=8g0jREPLSXGqrr7fHDuFJw&fbclid=PAZXh0bgNhZW0CMTEAAafxNtpAvKFRDM9HREaxmoLmEsctDKjVGxLbTDjCeXUcMSxNXo9btJL6Sb_zZQ_aem_AerUO8rJ9OCFK059nolUXQ&nd=1&dlsi=c865c31463f14bed"},
        ],
      },
      example: { // 'example' を 'experienceExamples' に変更して、既存の 'experience' セクションと区別しやすくしました
        title: "Examples of Domestic Study Abroad",
        description: "Here are some examples of actual domestic study abroad programs. We promise a fulfilling learning environment and enjoyable experiences.",
        cards: [
          { imageSrc: "https://placehold.co/400x250/FFF0F5/333333?text=Accomodation", title: "Kume Island", description: "An opportunity to experience English and different cultures in a tropical paradise within Japan, encountering cultures you've never met before.", link:"https://www.kume-homestay.com/" },
          { imageSrc: "https://placehold.co/400x250/E6E6FA/333333?text=Accommodation", title: "Karuizawa", description: "A 'real English experience' where English naturally thrives in daily life. Develop practical English skills through daily interactions and practice.", link:"https://karuizawahomestay.com/"},
        ],
      },
      testimonials: {
        title: "Student Voices",
        cards: [
          { name: "Coming soon", title: "Coming soon", rating: 5, quote: "coming soon" },
        ],
      },
      pricing: {
        title: "Pricing Plans",
        description: "We offer three pricing plans to suit your needs.",
        plans: [
          { planName: "Basic Plan", duration: "3-Day Course", price: "¥29,800", perPerson: "/person", features: ["3 days of intensive English lessons", "Accommodation included (2 nights, 3 days)", "3 meals included", "Basic activities"], isRecommended: false },
          { planName: "Standard Plan", duration: "7-Day Course", price: "¥68,000", perPerson: "/person", features: ["7 days of comprehensive English program", "Accommodation included (6 nights, 7 days)", "3 meals included", "Cultural experiences & activities", "Certificate of completion issued"], isRecommended: true },
          { planName: "Premium Plan", duration: "14-Day Course", price: "¥125,000", perPerson: "/person", features: ["14 days of authentic study abroad experience", "Accommodation included (13 nights, 14 days)", "3 meals included", "Abundant extracurricular activities", "Individual counseling", "Post-return support"], isRecommended: false },
        ],
        recommendedBadge: "Recommended",
        selectPlan: "Select Plan",
      },
      contactInfo: {
        title: "Access & Contact",
        description: "Please feel free to contact us with any questions or applications.",
        infoTitle: "Contact Information",
        // addressLabel: "Address:",
        // address: "5F StudyStay Japan Bldg., 1-11 Jingumae, Shibuya-ku, Tokyo 150-0001, Japan",
        // phoneLabel: "Phone Number:",
        // phone: "03-1234-5678",
        // phoneHours: "(Weekdays 9:00-18:00 JST)",
        emailLabel: "Email Address:",
        email: "infovideory@gmail.com",
        // accessLabel: "Access:",
        // access: "3-minute walk from Harajuku Station (JR Yamanote Line) 1-minute walk from Meiji-jingumae Station (Tokyo Metro)",
        // mapAlt: "Map of location",
        // mapError: "Map load error",
      },
      contactForm: {
        title: "Contact Form",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "090-xxxx-xxxx",
        planLabel: "Plan of Interest",
        selectPlanOption: "Please select",
        basicPlan: "Basic Plan (3 days)",
        standardPlan: "Standard Plan (7 days)",
        premiumPlan: "Premium Plan (14 days)",
        messageLabel: "Inquiry Details",
        messagePlaceholder: "Please feel free to write your questions or requests.",
        submitButton: "Send Inquiry",
      },
      footer: {
        logo: "StudyStay Japan",
        // servicesHeading: "Services",
        // services: ["Domestic Study Abroad Programs", "Matching Service", "Counseling", "Aftercare Support"],
        // infoHeading: "Information",
        // info: ["FAQ", "Privacy Policy", "Company Profile"],
        // copyright: `© ${new Date().getFullYear()} StudyStay Japan. All rights reserved.`,
        // builtBy: "Built with ❤️ using React and CSS.",
      },
    },
    };
  // 現在のページ表示を管理するステート（ルーティングをシミュレート）
  const [currentPage, setCurrentPage] = useState('home');
  // モバイルドロップダウンメニューの表示状態を管理するステート
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [language, setLanguage] = useState('ja'); // デフォルトは日本語

    
      const currentContent = content[language];

      const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ja' ? 'en' : 'ja'));
  };
  // セクションへスクロールするユーティリティ関数
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPage(id); // アクティブなリンクのスタイルを更新するために現在のページステートを更新
    setIsMenuOpen(false); // リンクをクリックしたらメニューを閉じる
  };

  // ナビゲーションバーコンポーネント
  const Navbar = () => (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* サイトのロゴ/名前 */}
        <div className='logohead'>
          <SVGIcon width="30" height="30" className="svgicon"/>
        <button onClick={() => scrollToSection('home')} className="site-logo">
          StudyStay Japan
        </button>
        </div>

        {/* モバイル用ハンバーガーメニューアイコン */}
        <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* メニューの状態に基づいてMenuまたはXアイコンを条件付きでレンダリング */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ナビゲーションリンク - デスクトップでは常に表示、モバイルでは条件付きで表示 */}
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <NavItem text={currentContent.navbar.whatIs} targetId="what-is" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text={currentContent.navbar.experience} targetId="experience" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text={currentContent.navbar.testimonials} targetId="testimonials" activePage={currentPage} onClick={scrollToSection} />
          {/* <NavItem text={currentContent.navbar.pricing} targetId="pricing" activePage={currentPage} onClick={scrollToSection} /> */}
          <NavItem text={currentContent.navbar.freeConsult} targetId="contact-form" activePage={currentPage} onClick={scrollToSection} />
          {/* 言語切り替えボタンをナビゲーションリンクに追加 */}
          <button className="nav-item" onClick={toggleLanguage}>
            {currentContent.navbar.languageToggle}
          </button>
        </div>
      </div>
    </nav>
  );

  // // ナビゲーションアイテムヘルパーコンポーネント
  const NavItem = ({ text, targetId, activePage, onClick }) => (
    <button
      className={`nav-item ${activePage === targetId ? 'active' : ''}`}
      onClick={() => onClick(targetId)}
    >
      {text}
    </button>
  );

  // ヒーローセクション
  const HeroSection = () => (
    <section id="home" className="hero-section">
      <div className="hero-pattern"></div>
      <div className="container hero-content">
        <h1 className="hero-title1">
          {currentContent.hero.title}
        </h1>
        <h1 className="hero-title2">
          {currentContent.hero.subtitle}
        </h1>
        <p className="hero-description">
          {currentContent.hero.description}
        </p>
        {/* <div className="hero-buttons">
          <a className="button button-primary" href='https://docs.google.com/document/d/16Q11sK813T0N-QsY7ENocIMnPuaNMdOHasVmIfuRo4U/edit?tab=t.0'target="_blank" rel="noopener noreferrer">
            <Search className="button-icon" size={24} />{currentContent.hero.findProgram}
          </a>
          <button className="button button-secondary">
            <PlayCircle className="button-icon" size={24} />{currentContent.hero.watchVideo}
          </button>
        </div> */}
      </div>
    </section>
  );

  // "国内留学とは" セクション
  const WhatIsStudyStay = () => (
    <section id="what-is" className="section what-is-section">
      <div className="container">
        <h2 className="section-title">{currentContent.whatIsStudyStay.title}</h2>
        <p className="section-description">
          {currentContent.whatIsStudyStay.description}
        </p>
        <div className="feature-benefit-cards">
          {currentContent.whatIsStudyStay.features.map((feature, index) => (
            <FeatureBenefitCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // 特徴/利点カードヘルパーコンポーネント
  const FeatureBenefitCard = ({ icon, title, description }) => (
    <div className="feature-benefit-card">
      <div className="feature-icon-wrapper">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );

  // "国内留学の様子" セクション
  const ExperienceSection = () => (
    <>
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">{currentContent.experience.title}</h2>
          <p className="section-description">
            {currentContent.experience.description}
          </p>
          <div className="experience-cards">
            {currentContent.experience.cards.map((card, index) => (
              <ExperienceFeatureCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                link = {card.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
  
  const ExampleSection = () => (
  <>
      <section id="experience" className="section experience-section">
        <div class="container">
          <h2 className="section-title">{currentContent.example.title}</h2>
          <p className="section-description">
            {currentContent.example.description}
          </p>
          <div className="example-cards">
            {currentContent.example.cards.map((card, index) => (
              <ExampleFeatureCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
  // 体験特徴カードヘルパーコンポーネント
  const ExperienceFeatureCard = ({ imageSrc, title, description, link }) => (
    <div className="experience-feature-card">
      <img src={imageSrc} alt={title} className="card-image-experience-feature" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/CCCCCC/666666?text=Image+Error"; }} />
      {/* <img src={imageSrc1} alt={title1} className="card-image-experience-feature" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/CCCCCC/666666?text=Image+Error"; }} /> */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className='examplebutton' target="_blank" rel="noopener noreferrer"><Link2/></a>
      </div>
    </div>
  );

  // Example Feature Card Helper Component (with external link)
  const ExampleFeatureCard = ({ imageSrc, title, description, link, linkText }) => (
    <div className="experience-feature-card">
      <img src={imageSrc} alt={title} className="card-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/CCCCCC/666666?text=Image+Error"; }} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className='examplebutton' target="_blank" rel="noopener noreferrer"><Link2/>{linkText}</a>
      </div>
    </div>
  );

  // "生徒の声" セクション (お客様の声)
  const Testimonials = () => (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">{currentContent.testimonials.title}</h2>
        <div className="testimonial-cards">
          {currentContent.testimonials.cards.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // お客様の声カードヘルパーコンポーネント
  // お客様の声カードヘルパーコンポーネント
  const TestimonialCard = ({ name, title, rating, quote }) => (
    <div className="testimonial-card">
      <div className="star-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <p className="testimonial-quote">"{quote}"</p>
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-title">{title}</p>
    </div>
  );

  // "料金プラン" セクション
  const PricingPlans = () => (
    <section id="pricing" className="section pricing-plans-section">
      <div className="container">
        <h2 className="section-title">{currentContent.pricing.title}</h2>
        <p className="section-description">
          {currentContent.pricing.description}
        </p>
        <div className="pricing-cards">
          {currentContent.pricing.plans.map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              duration={plan.duration}
              price={plan.price}
              perPerson={plan.perPerson}
              features={plan.features}
              isRecommended={plan.isRecommended}
              recommendedBadge={currentContent.pricing.recommendedBadge}
              selectPlanText={currentContent.pricing.selectPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // 料金カードヘルパーコンポーネント
  const PricingCard = ({ planName, duration, price, perPerson, features, isRecommended, recommendedBadge, selectPlanText }) => (
    <div className={`pricing-card ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && (
        <div className="recommended-badge">
          {recommendedBadge}
        </div>
      )}
      <h3 className="card-title">{planName}</h3>
      <p className="card-duration">{duration}</p>
      <div className="card-price">
        {price}<span className="card-price-per-person">{perPerson}</span>
      </div>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`button ${isRecommended ? 'button-pricing-recommended' : 'button-pricing'}`}>
        {selectPlanText}
      </button>
    </div>
  );

  // "お問い合わせ情報" セクション
  const ContactInfoSection = () => (
    <section id="contact-info" className="section contact-info-section">
      <div className="container">
        <h2 className="section-title">{currentContent.contactInfo.title}</h2>
        <p className="section-description">
          {currentContent.contactInfo.description}
        </p>

        <div className="contact-grid">
          {/* お問い合わせ情報 */}
          <div className="contact-details-card">
            <h3 className="card-title">{currentContent.contactInfo.infoTitle}</h3>
            <div className="contact-item-list">
              {/* <div className="contact-item">
                <Landmark className="contact-icon blue" size={24} />
                <div>
                  <p className="contact-label">{currentContent.contactInfo.addressLabel}</p>
                  <p>{currentContent.contactInfo.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon green" size={24} />
                <div>
                  <p className="contact-label">{currentContent.contactInfo.phoneLabel}</p>
                  <p>{currentContent.contactInfo.phone}</p>
                  <p>{currentContent.contactInfo.phoneHours}</p>
                </div>
              </div> */}
              <div className="contact-item">
                <MailIcon className="contact-icon purple" size={24} />
                <div>
                  <p className="contact-label">{currentContent.contactInfo.emailLabel}</p>
                  <p>{currentContent.contactInfo.email}</p>
                </div>
              </div>
              <ContactForm/>
              {/* <div className="contact-item"> */}
                {/* <Landmark className="contact-icon red" size={24} /> アクセス用にLandmarkを再利用（より具体的なアイコンがあれば変更可能） */}
                {/* <div> */}
                  {/* <p className="contact-label">{currentContent.contactInfo.accessLabel}</p> */}
                  {/* <p>{currentContent.contactInfo.access}</p> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>

          {/* 地図のプレースホルダーまたは追加情報 */}
          {/* <div className="map-placeholder-card">
            <img
              src="https://placehold.co/400x300/E0F2F7/333333?text=Map+Placeholder"
              alt={currentContent.contactInfo.mapAlt}
              className="map-image"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/E0F2F7/333333?text=" + encodeURIComponent(currentContent.contactInfo.mapError); }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );

  // お問い合わせフォームセクション
  const ContactForm = () => (
    <section id="contact-form" className="section contact-form-section">
      <div className="container">
        <h2 className="section-title">{currentContent.contactForm.title}</h2>
        <a className="button button-primary" href='https://docs.google.com/document/d/16Q11sK813T0N-QsY7ENocIMnPuaNMdOHasVmIfuRo4U/edit?tab=t.0'target="_blank" rel="noopener noreferrer">
            <Link2 className="button-icon" size={24} />{currentContent.hero.findProgram}
          </a>
      </div>
    </section>
  );

  // フッターコンポーネント
  const Footer = () => (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links-grid">
          <div className="footer-logo">{currentContent.footer.logo}</div>
          {/* <div className="footer-column">
            <h4 className="footer-heading">{currentContent.footer.servicesHeading}</h4>
            {currentContent.footer.services.map((service, index) => (
              <a key={index} href="#" className="footer-link">{service}</a>
            ))}
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">{currentContent.footer.infoHeading}</h4>
            {currentContent.footer.info.map((infoItem, index) => (
              <a key={index} href="#" className="footer-link">{infoItem}</a>
            ))}
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">{currentContent.footer.copyright}</p>
        <p className="footer-built-by">{currentContent.footer.builtBy}</p> */}
      </div>
      </div>
    </footer>
  );

  return (
    <div className="app-container">
      {/* Googleフォント - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* カスタムCSS（style.cssの内容をここに統合） */}
      

      <Navbar/>

      <main className="main-content">
        <HeroSection currentContent={currentContent}/>
        <WhatIsStudyStay />
        <ExampleSection />
        <ExperienceSection />
        
        {/* <Testimonials /> */}
        {/* <PricingPlans /> */}
        <ContactInfoSection />
        {/* <ContactForm /> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;