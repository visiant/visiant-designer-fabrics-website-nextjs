import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

export const metadata: Metadata = {
  title: "Motorization | Motorized Draperies, Blinds & Shades \u2014 Designer Fabrics, Centennial & Denver, CO",
  description: "Motorized draperies, blinds and shades in Centennial and Denver \u2014 Hunter Douglas PowerView\u00ae Automation, Somfy-powered drapery motors with TaHoma\u00ae control, and Forest motorized tracks and rods, professionally measured, installed and programmed.",
  robots: "index, follow",
  alternates: { canonical: "https://designer-fabrics-website-pitch.visiantwebsolutions.com/motorization" },
  openGraph: {
    type: "website",
    siteName: "Designer Fabrics",
    title: "Motorization | Motorized Draperies, Blinds & Shades \u2014 Designer Fabrics",
    description: "Window treatments that move to your schedule: PowerView\u00ae Automation for Hunter Douglas shades, Somfy-powered custom draperies, and Forest motorized tracks and rods.",
    url: "https://designer-fabrics-website-pitch.visiantwebsolutions.com/motorization",
    images: ["https://designer-fabrics-website-pitch.visiantwebsolutions.com/assets/img/motorization.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motorization | Motorized Draperies, Blinds & Shades \u2014 Designer Fabrics",
    description: "Remote, app, voice and scheduled control for compatible Hunter Douglas shades and custom draperies \u2014 measured, installed and programmed by Designer Fabrics.",
    images: ["https://designer-fabrics-website-pitch.visiantwebsolutions.com/assets/img/motorization.jpg"],
  },
};

const JSON_LD = [
  "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebPage\",\n    \"name\": \"Motorization \u2014 Motorized Draperies, Blinds and Shades\",\n    \"url\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/motorization\",\n    \"about\": { \"@id\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/#business\" },\n    \"mainEntity\": {\n      \"@type\": \"Service\",\n      \"name\": \"Window treatment motorization\",\n      \"serviceType\": \"Motorized draperies, blinds and shades \u2014 Hunter Douglas PowerView\u00ae Automation, Somfy-powered drapery motors and Forest motorized tracks and rods\",\n      \"provider\": { \"@id\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/#business\" },\n      \"areaServed\": [\"Centennial\", \"Denver\", \"Castle Rock\", \"Castle Pines\"]\n    }\n  }",
  "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Can custom draperies be motorized?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Yes. Custom draperies can be built for a motorized track or rod selected around the finished fabric weight, window span, stack and mounting conditions. Somfy-powered drapery motors and Forest motorized track and rod systems are among the options reviewed during a consultation.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How are motorized window treatments controlled?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Depending on the system, treatments can be operated by handheld remote, wall control, smartphone app, voice assistant, scheduled scenes or a compatible whole-home control system. Designer Fabrics programs the selected controls and shows you how to use them at installation.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Do motorized shades have to be hardwired?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Not always. Depending on the product and window, power may come from a rechargeable battery, replaceable batteries, a plug-in supply or a hardwired connection planned during construction or remodeling. The best option is chosen around access for charging, outlet locations and how often the treatment will move.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Why motorize hard-to-reach windows?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Motorization makes tall, wide or hard-to-reach treatments practical to use every day. Scheduled movement can also support privacy, glare control and a lived-in appearance while you are away.\"\n        }\n      }\n    ]\n  }"
];

export default function MotorizationPage() {
  return (
    <>
      <SiteHeader current="motorization" />
      {JSON_LD.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: block }} />
      ))}
<main id="main">
    <section id="top" className="hero" aria-labelledby="motorization-title">
      <div className="hero-media">
        <img src="assets/img/motorization.jpg" width="1500" height="845" alt="Motorized window shades moving in a modern living room" fetchPriority="high" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content reveal">
        <p className="eyebrow light">Motorized Window Treatments</p>
        <h1 id="motorization-title">Motorized Draperies, Blinds &amp; Shades</h1>
        <p className="hero-lede">Open the room to morning light, close out afternoon glare and settle in for the evening—without walking from window to window. Designer Fabrics plans the covering, motor, power and controls as one system, then measures, installs and programs it in your home.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="/#contact">Plan My Motorization</a>
          <a className="button button-outline" href="#systems">Explore the Systems</a>
        </div>
        <p className="hero-note">Hunter Douglas PowerView® Automation · Somfy-powered draperies · Forest motorized tracks &amp; rods</p>
      </div>
    </section>

    <section className="trust-strip" aria-label="Motorization benefits">
      <div className="container trust-grid reveal">
        <div><strong>Remote &amp; App</strong><span>Control one window or a whole room</span></div>
        <div><strong>Scenes &amp; Schedules</strong><span>Move with the day—or sunrise and sunset</span></div>
        <div><strong>Cordless Operation</strong><span>No lift cords to reach or manage</span></div>
        <div><strong>Hard-to-Reach Windows</strong><span>Make tall and wide treatments usable</span></div>
        <div><strong>Professionally Programmed</strong><span>Set up and demonstrated at installation</span></div>
      </div>
    </section>

    <section id="systems" className="section" aria-labelledby="systems-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Start With the Right System</p>
          <h2 id="systems-title">Three ways to put a window in motion</h2>
          <p>There is no single motor for every treatment. A Hunter Douglas shade, a pair of lined custom draperies and a decorative traversing rod need different hardware. We match the platform to the product, fabric weight, span, mounting and the way you want to control it.</p>
        </div>
        <div className="trio-grid">
          <article className="feature-card reveal">
            <img src="assets/img/silhouette.jpg" width="1200" height="500" loading="lazy" alt="Hunter Douglas Silhouette® Window Shadings diffusing daylight in a bright room" />
            <div>
              <p className="part-tag">Hunter Douglas</p>
              <h3>PowerView® Automation</h3>
              <p>For compatible Hunter Douglas blinds, shades and shutters, PowerView® Automation builds the motor into the treatment itself. Use the PowerView® App or Pebble® Remote, create Scenes for favorite positions, and schedule them through the day—including with sunrise or sunset. Voice and whole-home control are available when PowerView® is connected to a compatible system. Hunter Douglas products are backed by the Hunter Douglas Lifetime Limited Warranty.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <img src="assets/img/draperies.jpg" width="1200" height="500" loading="lazy" alt="Full-length custom draperies framing a bright window" />
            <div>
              <p className="part-tag">Custom Draperies</p>
              <h3>Somfy-Powered Drapery Motion</h3>
              <p>Somfy drapery motors—including Glydea® and Irismo™ families, depending on the application—can move pinch pleat, Ripplefold® and Accordia® draperies with soft starts and stops, adjustable speed and, on compatible motors, a gentle touch-motion start. Add TaHoma® control for smartphone access, scenes and compatible voice assistants.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <img src="assets/img/cornice.jpg" width="1200" height="500" loading="lazy" alt="A tailored cornice and drapery treatment above a window" />
            <div>
              <p className="part-tag">Tracks &amp; Rods</p>
              <h3>Forest Motorized Hardware</h3>
              <p>Forest Drapery Hardware builds the moving backbone for custom draperies: the original FMS® motorized track, the recessed RMS system for heavy-duty applications, the DSXL® LED motorized profile, and motorized rod collections—including wood rods. The right format depends on whether the hardware should disappear, sit in a recess or remain part of the design.</p>
            </div>
          </article>
        </div>
        <p className="alustra-line reveal">Brand, motor and control availability is confirmed during the design consultation. Compatibility depends on the treatment, finished dimensions, fabric weight, power source and control platform.</p>
        <div className="hd-legal reveal">
          <p>The PowerView® App is required for programmed operation.</p>
          <p>©2026 Hunter Douglas. All rights reserved. All trademarks used herein are the property of Hunter Douglas or their respective owners.</p>
        </div>
      </div>
    </section>

    <section className="section section-cream" aria-labelledby="controls-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Control It the Way You Live</p>
          <h2 id="controls-title">One tap, one word—or no touch at all</h2>
          <p>The best control is the one everyone in the house will actually use. Most projects combine a simple everyday control with app access and a few well-chosen automations.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <div>
              <h3>Remote &amp; Wall Controls</h3>
              <p>Keep control in the room with a handheld remote or wall-mounted control. PowerView® Pebble® controls can operate groups of treatments, while Somfy systems can use remotes and wall switches suited to the selected motor.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div>
              <h3>App Control</h3>
              <p>The PowerView® App and Somfy TaHoma® app can put individual treatments, rooms and Scenes on a phone or tablet—at home or, when the system is connected, while you are away.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div>
              <h3>Scenes &amp; Schedules</h3>
              <p>Program a morning opening, afternoon glare position, movie-night close or vacation routine. Automated movement can support privacy, comfort, energy-conscious light control and a lived-in look while the house is empty.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div>
              <h3>Voice &amp; Whole-Home Systems</h3>
              <p>Compatible systems can connect with Amazon Alexa, Google Assistant, Apple Home and other platforms. If the home already uses Lutron lighting, Control4, Crestron, Savant or another control system, tell us at the first consultation—the motor, hub and programming path need to be chosen together.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="power-title">
      <div className="container split-layout">
        <div className="section-heading align-left reveal">
          <p className="part-tag">Design &amp; Installation</p>
          <p className="eyebrow">Power Without Visual Clutter</p>
          <h2 id="power-title">The motor should disappear into the design</h2>
          <p>Power is a design decision, not an afterthought. We look at outlet locations, charging access, window depth, trim and whether the room is finished or still under construction before recommending a power source.</p>
          <ul className="check-list">
            <li>Rechargeable or replaceable batteries for many retrofit projects</li>
            <li>Plug-in power where an outlet can be reached discreetly</li>
            <li>Hardwired power planned during construction or remodeling</li>
            <li>Motor and track placement coordinated with drapery stack and sight lines</li>
            <li>Limits, groups, Scenes and favorite positions programmed at installation</li>
          </ul>
          <a className="text-link" href="/installations">See how our Master Installer process works <span aria-hidden="true">→</span></a>
        </div>
        <div className="image-stack reveal">
          <figure className="image-card large">
            <img src="assets/img/installing.jpg" width="1200" height="500" loading="lazy" alt="A window treatment being professionally installed" />
            <figcaption>Measured, installed and programmed</figcaption>
          </figure>
          <div className="image-pair">
            <figure className="image-card">
              <img src="assets/img/measuring.jpg" width="1203" height="872" loading="lazy" alt="A professional precisely measuring a window" />
              <figcaption>Measured for the finished treatment</figcaption>
            </figure>
            <figure className="image-card">
              <img src="assets/img/roman-shades.jpg" width="1200" height="500" loading="lazy" alt="Fabric Roman shades paired with draperies in a bedroom" />
              <figcaption>Layered treatments, coordinated control</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-light" aria-labelledby="treatments-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">What Can Be Motorized?</p>
          <h2 id="treatments-title">More than a roller shade</h2>
          <p>Motorization is most valuable where treatments are large, layered, high or adjusted every day. These are the projects we plan most often.</p>
        </div>
        <div className="card-grid">
          <article className="product-card reveal">
            <img src="assets/img/blinds.jpg" width="1200" height="600" loading="lazy" alt="Blinds filtering warm natural light across a room" />
            <div><h3>Blinds, Shades &amp; Shutters</h3><p>Compatible Hunter Douglas products with PowerView® Automation, selected for the room's light, privacy and insulation needs.</p></div>
          </article>
          <article className="product-card reveal">
            <img src="assets/img/soft-treatments.jpg" width="1200" height="500" loading="lazy" alt="Soft window treatments in a finished living space" />
            <div><h3>Custom Draperies</h3><p>Pinch pleat and Ripplefold® panels made in our workroom, paired with a motorized track or rod sized for the finished drapery.</p></div>
          </article>
          <article className="product-card reveal">
            <img src="assets/img/duette.jpg" width="1200" height="700" loading="lazy" alt="Honeycomb shades covering tall windows" />
            <div><h3>Tall &amp; Hard-to-Reach Windows</h3><p>Clerestories, two-story windows, skylight-adjacent openings and wide banks that are impractical to adjust by hand.</p></div>
          </article>
          <article className="product-card reveal">
            <img src="assets/img/showroom.jpg" width="1200" height="500" loading="lazy" alt="Inside the Designer Fabrics showroom" />
            <div><h3>Layered &amp; Whole-Room Designs</h3><p>Sheers, shades and draperies grouped into Scenes so the whole room changes together instead of one window at a time.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">How a Project Comes Together</p>
          <h2 id="process-title">Designed in the showroom, programmed in the room</h2>
        </div>
        <ol className="steps-strip reveal">
          <li><span className="step-num" aria-hidden="true">1</span><div><strong>Choose the treatment &amp; control</strong><small>Fabric, product, motor, power and platform</small></div></li>
          <li><span className="step-num" aria-hidden="true">2</span><div><strong>Measure &amp; make</strong><small>Professional measurements before anything is ordered or sewn</small></div></li>
          <li><span className="step-num" aria-hidden="true">3</span><div><strong>Install &amp; program</strong><small>Limits, groups, Scenes, schedules and a walkthrough</small></div></li>
        </ol>
        <div className="section-heading reveal">
          <p>Bring photos of the windows, rough dimensions and—if you have one—the name of your home-control or lighting system. We will help sort out which motorization path fits before you commit to a treatment.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a className="button button-gold" href="/#contact">Schedule a Motorization Consultation</a>
            <a className="button button-dark" href="tel:+13034889444">Call 303-488-9444</a>
          </div>
        </div>
      </div>
    </section>
  </main>
      <SiteFooter />
      <MobileCta current="motorization" />
    </>
  );
}
