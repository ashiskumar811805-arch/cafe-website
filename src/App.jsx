import { siteConfig } from './config/siteConfig';

function App() {
  const { brand, navLinks, hero, about, menu, features, gallery, testimonials, visit, socialLinks, footer } = siteConfig;

  return (
    <div className="page-shell">
      <header className="topbar" id="home">
        <div className="container nav-wrap">
          <div className="brand-block">
            <div className="brand-mark">A</div>
            <div>
              <div className="brand-name">{brand.name}</div>
              <div className="brand-tagline">{brand.tagline}</div>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#visit">
            {visit.cta}
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-spacing">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="lead">{hero.description}</p>

              <div className="hero-actions">
                <a className="primary-btn" href="#menu">
                  {hero.primaryCta}
                </a>
                <a className="secondary-btn" href="#visit">
                  {hero.secondaryCta}
                </a>
              </div>

              <div className="stats-row">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="stat-item">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-card large-card">
                <img
                  src={hero.image}
                  alt="Coffee art"
                />
              </div>
              <div className="floating-badge">
                <span>Today’s special</span>
                <strong>Honey Cinnamon Latte</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing about" id="about">
          <div className="container split-grid">
            <div className="about-visual">
              <div className="image-frame">
                <img
                  src={about.image}
                  alt="Cafe interior"
                />
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow alt">{about.eyebrow}</p>
              <h2>{about.title}</h2>
              <p>{about.description}</p>

              <ul className="check-list">
                {about.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-spacing menu-section" id="menu">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">{menu.eyebrow}</p>
              <h2>{menu.title}</h2>
            </div>

            <div className="menu-grid">
              {menu.items.map((item) => (
                <article key={item.name} className="menu-card">
                  <div className="menu-topline">
                    <span className="menu-tag">{item.tag}</span>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing features-section" id="experience">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">The Aurora experience</p>
              <h2>Thoughtful details that make every moment memorable.</h2>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => (
                <div key={feature.title} className="feature-card">
                  <div className="feature-icon">0{index + 1}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">{gallery.eyebrow}</p>
              <h2>{gallery.title}</h2>
            </div>

            <div className="gallery-grid">
              {gallery.images.map((image, index) => (
                <div key={index} className={`gallery-item item-${index + 1}`}>
                  <img src={image} alt={`Aurora Café gallery shot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing testimonials-section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">{testimonials.eyebrow}</p>
              <h2>{testimonials.title}</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.items.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <p className="quote">“{item.quote}”</p>
                  <div className="person">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing visit-section" id="visit">
          <div className="container visit-grid">
            <div className="visit-copy">
              <p className="eyebrow">{visit.eyebrow}</p>
              <h2>{visit.title}</h2>
              <div className="visit-contact">
                <p>{brand.address}</p>
                <p>{brand.phone}</p>
                <p>{brand.email}</p>
              </div>
              <a className="primary-btn wide" href={visit.mapLink} target="_blank" rel="noreferrer">
                {visit.cta}
              </a>
            </div>

            <div className="hours-card">
              <h3>Opening hours</h3>
              {visit.hours.map((hour) => (
                <div key={hour.day} className="hours-row">
                  <span>{hour.day}</span>
                  <strong>{hour.time}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>{footer.note}</p>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
