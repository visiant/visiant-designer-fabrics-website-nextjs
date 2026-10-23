import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

export const metadata: Metadata = {
  title: "Installations | Hunter Douglas Master Installer \u2014 Designer Fabrics, Centennial & Denver, CO",
  description: "Certified Hunter Douglas Master Installer in Centennial, CO \u2014 precision measuring and installation, PowerView\u00ae Automation programming for Crestron, Control4, Savant and Apple Home, and white-glove service that preserves your Hunter Douglas Lifetime Limited Warranty.",
  robots: "index, follow",
  alternates: { canonical: "https://www.designerfabricsdenver.com/installations" },
  openGraph: {
    type: "website",
    siteName: "Designer Fabrics",
    title: "Installations | Hunter Douglas Master Installer \u2014 Designer Fabrics",
    description: "Installation elevated to an art form: millimeter-accurate measuring, elite smart-home automation, and certified Master Installer craftsmanship in Centennial & Denver.",
    url: "https://www.designerfabricsdenver.com/installations",
    images: ["https://www.designerfabricsdenver.com/assets/img/installing.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installations | Hunter Douglas Master Installer \u2014 Designer Fabrics",
    description: "A premium window fashion is only as extraordinary as the precision with which it is installed. Certified Hunter Douglas Master Installer \u2014 Centennial, CO.",
    images: ["https://www.designerfabricsdenver.com/assets/img/installing.jpg"],
  },
};

const JSON_LD = [
  "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebPage\",\n    \"name\": \"Installations \u2014 Hunter Douglas Master Installer\",\n    \"url\": \"https://www.designerfabricsdenver.com/installations\",\n    \"about\": { \"@id\": \"https://www.designerfabricsdenver.com/#business\" },\n    \"mainEntity\": {\n      \"@type\": \"Service\",\n      \"name\": \"Window treatment measuring and installation\",\n      \"serviceType\": \"Hunter Douglas Master Installer \u2014 precision measuring, installation and PowerView\u00ae Automation programming\",\n      \"provider\": { \"@id\": \"https://www.designerfabricsdenver.com/#business\" },\n      \"areaServed\": [\"Centennial\", \"Denver\", \"Castle Rock\", \"Castle Pines\"]\n    }\n  }"
];

export default function InstallationsPage() {
  return (
    <>
      <SiteHeader current="installations" />
      {JSON_LD.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: block }} />
      ))}
<main id="main">
    <section id="top" className="hero" aria-labelledby="installations-title">
      <div className="hero-media">
        <img src="assets/img/installing.jpg" width="1200" height="500" alt="A Hunter Douglas window treatment being professionally installed in a bright home" fetchPriority="high" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content reveal">
        <p className="eyebrow light">Certified Hunter Douglas Master Installer</p>
        <h1 id="installations-title">The Pinnacle of Window Architecture</h1>
        <p className="hero-lede">A premium window fashion is only as extraordinary as the precision with which it is installed. As a certified Hunter Douglas Master Installer, we represent the elite tier of technical craftsmanship, advanced automation mastery, and white-glove service.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="/#contact">Schedule Your Private Technical Consultation</a>
          <a className="button button-outline" href="tel:+13034889444">Call the Showroom</a>
        </div>
        <p className="hero-note">Showroom visits by appointment · Monday–Friday, 10am–5pm</p>
      </div>
    </section>

    <section className="section" aria-labelledby="distinction-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">The Master Installer Distinction</p>
          <h2 id="distinction-title">The Master Installer Distinction</h2>
          <p>Exceptional interior design demands flawless execution. We bring years of rigorous factory training and uncompromising attention to detail to every residence, ensuring your architectural investments perform beautifully, operate effortlessly, and endure elegantly.</p>
        </div>
        <div className="trio-grid">
          <article className="feature-card reveal">
            <img src="assets/img/measuring.jpg" width="1203" height="872" loading="lazy" alt="Precision measuring of a window ahead of a custom installation" />
            <div>
              <h3>Flawless Architectural Integration</h3>
              <p>Luxury architecture often presents complex glazing, minimal casings, and soaring expansive scales. We specialize in precision engineering and millimeter-accurate measuring. From deep-set pockets to challenging angled windows, we ensure that elite silhouettes, sheers, and woven textures integrate seamlessly with your interior framework, appearing completely bespoke.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <img src="assets/img/motorization.jpg" width="1500" height="845" loading="lazy" alt="Motorized Hunter Douglas shades operated by remote in a modern living room" />
            <div>
              <h3>Elite Smart Home Automation</h3>
              <p>Modern luxury relies on intuitive environments. We provide expert configuration and programming for Hunter Douglas PowerView® Automation. We seamlessly synchronize your motorized shading with premier whole-home control networks—including Crestron, Control4, Savant, Apple Home, and Lutron—delivering whisper-quiet, synchronized motion tailored exactly to your daily lifestyle.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <img src="assets/img/silhouette.jpg" width="1200" height="500" loading="lazy" alt="Hunter Douglas Silhouette® window shadings diffusing light in an elegant room" />
            <div>
              <h3>Preserving Your Investment</h3>
              <p>Premium window treatments require specialized, manufacturer-sanctioned care. Our certified installation methodology guarantees that every complex mechanism operates at its peak engineering capacity. Entrusting your project to a Master Installer fully preserves the integrity of your Hunter Douglas Lifetime Limited Warranty.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section section-cream" aria-labelledby="standards-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Craftsmanship Standards</p>
          <h2 id="standards-title">Our Craftsmanship Standards</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <div>
              <h3>Master-Tier Certification</h3>
              <p>Formally accredited by Hunter Douglas at the industry's highest professional standard of technical expertise and installation artistry.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div>
              <h3>Architectural Precision</h3>
              <p>Flawless execution for complex window geometries, hard-to-reach spaces, oversized glass, and specialized luxury shutters or drapery.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div>
              <h3>White-Glove Automation Deployment</h3>
              <p>Expert deployment of motorized systems, ensuring seamless Bluetooth, Gateway, and smart ecosystem programming.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div>
              <h3>Sanctuary Respect</h3>
              <p>An immaculate, white-glove on-site experience that respects the absolute privacy, cleanliness, and sanctuary of your home.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section section-dark" aria-labelledby="elevate-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Elevate Your Space</p>
          <h2 id="elevate-title">Elevate Your Space</h2>
          <p>Whether you are a homeowner seeking absolute perfection or a design professional executing a visionary project, we invite you to experience installation elevated to an art form.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a className="button button-gold" href="/#contact">Schedule Your Private Technical Consultation</a>
          </div>
        </div>
      </div>
    </section>
  </main>
      <SiteFooter />
      <MobileCta current="installations" />
    </>
  );
}
