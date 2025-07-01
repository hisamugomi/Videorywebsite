// App.js
import React, { useState } from 'react';
// lucide-reactから必要なアイコンをインポート
import { Search, PlayCircle, Shield, Users, DollarSign, Landmark, Phone, Mail as MailIcon, Menu, X } from 'lucide-react';
import './app.css'; // style.cssをインポート

// メインのAppコンポーネント
const App = () => {
  // 現在のページ表示を管理するステート（ルーティングをシミュレート）
  const [currentPage, setCurrentPage] = useState('home');
  // モバイルドロップダウンメニューの表示状態を管理するステート
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button onClick={() => scrollToSection('home')} className="site-logo">
          StudyStay Japan
        </button>

        {/* モバイル用ハンバーガーメニューアイコン */}
        <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* メニューの状態に基づいてMenuまたはXアイコンを条件付きでレンダリング */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ナビゲーションリンク - デスクトップでは常に表示、モバイルでは条件付きで表示 */}
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <NavItem text="国内留学とは" targetId="what-is" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text="体験の様子" targetId="experience" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text="生徒の声" targetId="testimonials" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text="料金プラン" targetId="pricing" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text="アクセス・お問い合わせ" targetId="contact-info" activePage={currentPage} onClick={scrollToSection} />
          <NavItem text="無料相談" targetId="contact-form" activePage={currentPage} onClick={scrollToSection} />
        </div>
      </div>
    </nav>
  );

  // ナビゲーションアイテムヘルパーコンポーネント
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
        <h1 className="hero-title">
          新しい学びの形
          国内留学
        </h1>
        <p className="hero-description">
          海外に行かなくても、日本国内で本格的な語学留学体験を。
          あなたにぴったりの国内留学プログラムをマッチングします。
        </p>
        <div className="hero-buttons">
          <button className="button button-primary">
            <Search className="button-icon" size={24} />プログラムを探す
          </button>
          <button className="button button-secondary">
            <PlayCircle className="button-icon" size={24} />動画で見る
          </button>
        </div>
      </div>
    </section>
  );

  // "国内留学とは" セクション
  const WhatIsStudyStay = () => (
    <section id="what-is" className="section what-is-section">
      <div className="container">
        <h2 className="section-title">国内留学とは</h2>
        <p className="section-description">
          日本国内にいながら、まるで海外留学のような環境で語学学習や文化交流を体験できる新しい学習スタイルです。
        </p>
        <div className="feature-benefit-cards">
          <FeatureBenefitCard
            icon={<Shield className="icon-green" size={40} />}
            title="安心・安全"
            description="日本国内での実施なので、初めての方でも安心して参加できます。緊急時のサポートも充実しています。"
          />
          <FeatureBenefitCard
            icon={<Users className="icon-purple" size={40} />}
            title="多様な交流"
            description="外国人や留学生との交流を通じて、リアルな異文化体験を日本国内で実現します。"
          />
          <FeatureBenefitCard
            icon={<DollarSign className="icon-yellow" size={40} />}
            title="コスト効率"
            description="海外留学と比較して大幅にコストを抑えながら、同等の学習効果を得ることができます。"
          />
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
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">国内留学の様子</h2>
        <p className="section-description">
          実際の国内留学プログラムの様子をご紹介します。充実した学習環境と楽しい体験をお約束します。
        </p>
        <div className="experience-cards">
          <ExperienceFeatureCard
            imageSrc="https://placehold.co/400x250/F0F8FF/333333?text=Small+Class"
            title="少人数制授業"
            description="一人ひとりに丁寧な指導を行う少人数クラスです。"
          />
          <ExperienceFeatureCard
            imageSrc="https://placehold.co/400x250/F5FFFA/333333?text=Culture+Exp"
            title="文化体験"
            description="料理教室や書道など、様々な文化体験ができます。"
          />
          <ExperienceFeatureCard
            imageSrc="https://placehold.co/400x250/FFF0F5/333333?text=Activities"
            title="アクティビティ"
            description="授業外でのアクティビティを通じて、実践的な英語を学びます。"
          />
          <ExperienceFeatureCard
            imageSrc="https://placehold.co/400x250/E6E6FA/333333?text=Accommodation"
            title="宿泊施設"
            description="快適で清潔な施設をご用意しており、安心してご利用いただけます。"
          />
        </div>
      </div>
    </section>
  );

  // 体験特徴カードヘルパーコンポーネント
  const ExperienceFeatureCard = ({ imageSrc, title, description }) => (
    <div className="experience-feature-card">
      <img src={imageSrc} alt={title} className="card-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/CCCCCC/666666?text=Image+Error"; }}/>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );

  // "生徒の声" セクション (お客様の声)
  const Testimonials = () => (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">生徒の声</h2>
        <div className="testimonial-cards">
          <TestimonialCard
            name="田中 美咲さん"
            title="大学2年生"
            rating={5}
            quote="「海外留学に憧れていましたが、コストや安全面で不安がありました。国内留学は本当に良い選択でした！外国人の先生方も優しく、英語に自信がつきました。」"
          />
          <TestimonialCard
            name="佐藤 健太さん"
            title="高校3年生"
            rating={5}
            quote="「1週間の短期プログラムでしたが、とても濃い体験ができました。同世代の仲間もできて、今でも連絡を取り合っています。将来は本格的な海外留学にもチャレンジしたいです！」"
          />
          <TestimonialCard
            name="山田 理恵さん"
            title="会社員"
            rating={5}
            quote="「仕事で英語が必要になり参加しました。実践的な会話練習ができて、TOEICスコアも大幅にアップ！現場でも自信を持って英語を使えるようになりました。」"
          />
        </div>
      </div>
    </section>
  );

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
        <h2 className="section-title">料金プラン</h2>
        <p className="section-description">
          あなたのニーズに合わせて選べる、3つの料金プランをご用意しています。
        </p>
        <div className="pricing-cards">
          <PricingCard
            planName="ベーシックプラン"
            duration="3日間コース"
            price="¥29,800"
            perPerson="/人"
            features={[
              "3日間の集中英語レッスン",
              "宿泊費込み (2泊3日)",
              "食事3食付き",
              "基本アクティビティ"
            ]}
            isRecommended={false}
          />
          <PricingCard
            planName="スタンダードプラン"
            duration="7日間コース"
            price="¥68,000"
            perPerson="/人"
            features={[
              "7日間の充実した英語プログラム",
              "宿泊費込み (6泊7日)",
              "食事3食付き",
              "文化体験・アクティビティ",
              "修了証書発行"
            ]}
            isRecommended={true}
          />
          <PricingCard
            planName="プレミアムプラン"
            duration="14日間コース"
            price="¥125,000"
            perPerson="/人"
            features={[
              "14日間の本格的留学体験",
              "宿泊費込み (13泊14日)",
              "食事3食付き",
              "豊富な課外活動",
              "個別カウンセリング",
              "帰国後サポート"
            ]}
            isRecommended={false}
          />
        </div>
      </div>
    </section>
  );

  // 料金カードヘルパーコンポーネント
  const PricingCard = ({ planName, duration, price, perPerson, features, isRecommended }) => (
    <div className={`pricing-card ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && (
        <div className="recommended-badge">
          おすすめ
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
        プランを選択
      </button>
    </div>
  );

  // "お問い合わせ情報" セクション
  const ContactInfoSection = () => (
    <section id="contact-info" className="section contact-info-section">
      <div className="container">
        <h2 className="section-title">アクセス・お問い合わせ</h2>
        <p className="section-description">
          ご質問やお申し込みは、お気軽にお問い合わせください。
        </p>

        <div className="contact-grid">
          {/* お問い合わせ情報 */}
          <div className="contact-details-card">
            <h3 className="card-title">お問い合わせ情報</h3>
            <div className="contact-item-list">
              <div className="contact-item">
                <Landmark className="contact-icon blue" size={24} />
                <div>
                  <p className="contact-label">住所:</p>
                  <p>〒150-0001 東京都渋谷区神宮前 1-11</p>
                  <p>StudyStay Japan ビル5F</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon green" size={24} />
                <div>
                  <p className="contact-label">電話番号:</p>
                  <p>03-1234-5678</p>
                  <p>(平日9:00-18:00)</p>
                </div>
              </div>
              <div className="contact-item">
                <MailIcon className="contact-icon purple" size={24} />
                <div>
                  <p className="contact-label">メールアドレス:</p>
                  <p>info@studystay-japan.com</p>
                </div>
              </div>
              <div className="contact-item">
                <Landmark className="contact-icon red" size={24} /> {/* アクセス用にLandmarkを再利用（より具体的なアイコンがあれば変更可能） */}
                <div>
                  <p className="contact-label">アクセス:</p>
                  <p>JR山手線 原宿駅 徒歩3分</p>
                  <p>東京メトロ「明治神宮前駅」徒歩1分</p>
                </div>
              </div>
            </div>
          </div>

          {/* 地図のプレースホルダーまたは追加情報 */}
          <div className="map-placeholder-card">
            <img
                src="https://placehold.co/400x300/E0F2F7/333333?text=Map+Placeholder"
                alt="場所の地図"
                className="map-image"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/E0F2F7/333333?text=Map+Load+Error"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );

  // お問い合わせフォームセクション
  const ContactForm = () => (
    <section id="contact-form" className="section contact-form-section">
      <div className="container">
        <h2 className="section-title">お問い合わせフォーム</h2>
        <form className="contact-form-layout">
          <div className="form-group">
            <label htmlFor="name" className="form-label">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="お名前を入力してください"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">電話番号</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="090-xxxx-xxxx"
            />
          </div>
          <div className="form-group">
            <label htmlFor="plan" className="form-label">興味のあるプラン</label>
            <select
              id="plan"
              name="plan"
              className="form-input form-select"
            >
              <option value="">選択してください</option>
              <option value="basic">ベーシックプラン (3日間)</option>
              <option value="standard">スタンダードプラン (7日間)</option>
              <option value="premium">プレミアムプラン (14日間)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">お問い合わせ内容</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="form-input form-textarea"
              placeholder="ご質問やご要望など、ご自由にご記入ください。"
            ></textarea>
          </div>
          <button
            type="submit"
            className="button button-submit"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );

  // フッターコンポーネント
  const Footer = () => (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links-grid">
            <div className="footer-logo">StudyStay Japan</div>
            <div className="footer-column">
                <h4 className="footer-heading">サービス</h4>
                <a href="#what-is" onClick={() => scrollToSection('what-is')} className="footer-link">国内留学プログラム</a>
                <a href="#" className="footer-link">マッチングサービス</a>
                <a href="#" className="footer-link">カウンセリング</a>
                <a href="#" className="footer-link">アフターサポート</a>
            </div>
            <div className="footer-column">
                <h4 className="footer-heading">情報</h4>
                <a href="#" className="footer-link">よくある質問</a>
                <a href="#" className="footer-link">プライバシーポリシー</a>
                <a href="#" className="footer-link">会社概要</a>
            </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">&copy; {new Date().getFullYear()} StudyStay Japan. All rights reserved.</p>
        <p className="footer-built-by">Built with ❤️ using React and CSS.</p>
      </div>
    </footer>
  );

  return (
    <div className="app-container">
      {/* 外部CSSファイルへのリンク */}
      <link rel="stylesheet" href="style.css" />
      {/* Googleフォント - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* カスタムCSS（style.cssに含めることも可能ですが、アニメーション用にここに残しています） */}
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
        }
        /* 美的感覚のためのカスタムスクロールバー */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        /* bounce-onceアニメーションのキーフレーム */
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-6px);
          }
          40% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(-3px);
          }
          80% {
            transform: translateY(0);
          }
        }

        .animate-bounce-once {
          animation: bounce-once 1.5s ease-out 1; /* 1回実行 */
        }

        .animate-bounce-once.delay-200 {
            animation-delay: 0.2s;
        }

        /* fade-in-downアニメーションのキーフレーム */
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        /* fade-inアニメーションのキーフレーム */
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        `}
      </style>

      <Navbar />

      <main className="main-content">
        <HeroSection />
        <WhatIsStudyStay />
        <ExperienceSection />
        <Testimonials />
        <PricingPlans />
        <ContactInfoSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
