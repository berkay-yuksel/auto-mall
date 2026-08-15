import Link from 'next/link';
import './page.css';

export default function HomePage() {
  return (
    <div className="demolar-page">
      <div className="demolar-shell">
        <p className="demolar-eyebrow">AVM Deneyim Paketi</p>
        <h1 className="demolar-title">Demolar</h1>
        <p className="demolar-subtitle">İncelemek istediğiniz deneyimi seçin.</p>

        <nav className="demolar-grid" aria-label="Demo seçimi">
          <Link href="/tur" className="demolar-card demolar-card--tur">
            <span className="demolar-card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <ellipse cx="24" cy="24" rx="19" ry="8.5" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M24 5 C31 5 36 13.6 36 24 C36 34.4 31 43 24 43 C17 43 12 34.4 12 24 C12 13.6 17 5 24 5Z" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M39 15 L44 13.5 L42.8 18.7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="demolar-card-body">
              <span className="demolar-card-kicker">Deneyim 01</span>
              <span className="demolar-card-title">360° Panoramik Tur</span>
              <span className="demolar-card-desc">AVM'yi adım adım gezin, her köşeyi 360° keşfedin.</span>
            </span>
            <span className="demolar-card-arrow" aria-hidden="true">&#8594;</span>
          </Link>

          <Link href="/harita" className="demolar-card demolar-card--harita">
            <span className="demolar-card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M6 13 L18 8 L30 13 L42 8 V35 L30 40 L18 35 L6 40 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M18 8 V35" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M30 13 V40" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="24" cy="22" r="3.2" fill="currentColor"/>
              </svg>
            </span>
            <span className="demolar-card-body">
              <span className="demolar-card-kicker">Deneyim 02</span>
              <span className="demolar-card-title">İnteraktif Kat Planı</span>
              <span className="demolar-card-desc">Kat kat mağazaları filtreleyin, konumlarını anında bulun.</span>
            </span>
            <span className="demolar-card-arrow" aria-hidden="true">&#8594;</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}