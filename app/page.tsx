import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

export const metadata: Metadata = {
  title: "Designer Fabrics | Custom Draperies, Upholstery & Hunter Douglas Window Treatments \u2014 Centennial & Denver, CO",
  description: "Custom draperies, reupholstery, bedding & fabric by the yard, made in our Centennial workroom since 1981 \u2014 plus Hunter Douglas window treatments from an authorized dealer.",
  robots: "index, follow",
  alternates: { canonical: "https://designer-fabrics-website-pitch.visiantwebsolutions.com/" },
  openGraph: {
    type: "website",
    siteName: "Designer Fabrics",
    title: "Designer Fabrics | Custom Draperies, Upholstery & Hunter Douglas Window Treatments \u2014 Centennial & Denver, CO",
    description: "Family-owned since 1981: a Centennial custom workroom for draperies, upholstery, bedding and fabric by the yard \u2014 and an authorized Hunter Douglas dealer.",
    url: "https://designer-fabrics-website-pitch.visiantwebsolutions.com/",
    images: ["https://designer-fabrics-website-pitch.visiantwebsolutions.com/assets/img/hero-fabrics.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designer Fabrics | Custom Workroom & Hunter Douglas Dealer \u2014 Centennial, CO",
    description: "Custom draperies, reupholstery, bedding & fabric by the yard, made in our Centennial workroom since 1981 \u2014 plus Hunter Douglas window treatments from an authorized dealer.",
    images: ["https://designer-fabrics-website-pitch.visiantwebsolutions.com/assets/img/hero-fabrics.jpeg"],
  },
};

const JSON_LD = [
  "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"HomeGoodsStore\",\n    \"@id\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/#business\",\n    \"name\": \"Designer Fabrics\",\n    \"legalName\": \"Designer Fabrics, Inc.\",\n    \"url\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/\",\n    \"image\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/assets/img/hero-fabrics.jpeg\",\n    \"telephone\": \"+1-303-488-9444\",\n    \"email\": \"designerfabricsinc@yahoo.com\",\n    \"foundingDate\": \"1981\",\n    \"description\": \"Family-owned Centennial custom workroom and fabric showroom \u2014 custom draperies, reupholstery, bedding, wallpaper and fabric by the yard \u2014 and an authorized Hunter Douglas dealer offering professional measuring and installation.\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"2555 E. Jamison Avenue\",\n      \"addressLocality\": \"Centennial\",\n      \"addressRegion\": \"CO\",\n      \"postalCode\": \"80122\",\n      \"addressCountry\": \"US\"\n    },\n    \"geo\": {\n      \"@type\": \"GeoCoordinates\",\n      \"latitude\": 39.5793,\n      \"longitude\": -104.8762\n    },\n    \"openingHoursSpecification\": {\n      \"@type\": \"OpeningHoursSpecification\",\n      \"dayOfWeek\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"],\n      \"opens\": \"10:00\",\n      \"closes\": \"17:00\"\n    },\n    \"areaServed\": [\"Centennial\", \"Denver\", \"Castle Rock\", \"Castle Pines\"],\n    \"sameAs\": [\"https://designer-fabrics-website-pitch.visiantwebsolutions.com/\"]\n  }",
  "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Do you make your own draperies, or do you sell Hunter Douglas?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Both \u2014 they are two crafts under one roof. The Centennial workroom designs and sews custom draperies, bedding and upholstery on site and sells fabric by the yard, while Designer Fabrics is also an authorized Hunter Douglas dealer for branded blinds, shades, shutters and motorization, with professional measuring and installation.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Are your prices competitive?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Yes. Designer Fabrics focuses on competitive pricing and exceptional value through product quality, service, expertise and selection. Consultants help you choose products that fit the room, your lifestyle and your budget.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Will you help me choose the right products and fabrics?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Yes. The knowledgeable team will ask about your needs, walk you through the choices and help with colors, textures and finishes that complement your d\u00e9cor. The goal is a personalized look that fits your lifestyle, functional needs and budget.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Why do you provide professional measuring and installation?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Exact measuring and installation are critical, especially for fitted products such as shutters. Professional measuring accounts for window shape and protrusions, helping your window coverings fit correctly and operate beautifully.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Can I buy fabric by the yard for my own project?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Yes. Designer Fabrics sells fabric by the yard for DIY and home d\u00e9cor projects, with a showroom library of more than 30,000 fabrics, trims and hardware options.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Do I need an appointment to visit?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The Centennial showroom is open by appointment only, Monday through Friday from 10:00 a.m. to 5:00 p.m. Call 303-488-9444 to schedule a visit or consultation.\"\n        }\n      }\n    ]\n  }",
  "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebSite\",\n    \"name\": \"Designer Fabrics\",\n    \"url\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/\",\n    \"publisher\": {\n      \"@id\": \"https://designer-fabrics-website-pitch.visiantwebsolutions.com/#business\"\n    }\n  }"
];

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      {JSON_LD.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: block }} />
      ))}
<main id="main">
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <img src="assets/img/hero-fabrics.jpeg" width="1536" height="1024" alt="Ivory and natural linen fabrics rolled out across a workroom table, lit by sunlight from a nearby window" fetchPriority="high" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content reveal">
        <p className="eyebrow light">Family-owned · Centennial, Colorado · Since 1981</p>
        <h1 id="hero-title">Custom Window Treatments, Upholstery, Motorization and Hunter Douglas Blinds and Shades</h1>
        <p className="hero-lede">Designer Fabrics is a family-owned Centennial workroom and showroom. We design and sew custom draperies, bedding and upholstery right on site, sell fabric by the yard from a library of more than 30,000 fabrics—and, as an authorized Hunter Douglas dealer, we fit blinds, shades and shutters with professional measuring and installation.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#photo-order">Start Your Design</a>
          <a className="button button-outline" href="tel:+13034889444">Call the Showroom</a>
        </div>
        <p className="hero-note">Showroom visits by appointment · Monday–Friday, 10am–5pm</p>
      </div>
    </section>

    <section className="trust-strip" aria-label="Designer Fabrics highlights">
      <div className="container trust-grid reveal">
        <div><strong>On-Site Workroom</strong><span>Drapery &amp; upholstery craftsmanship</span></div>
        <div><strong>30,000+</strong><span>Fabrics, trims &amp; hardware</span></div>
        <div><strong>Since 1981</strong><span>Family-owned expertise</span></div>
        <div><strong>Hunter Douglas</strong><span>Authorized dealer &amp; Alustra® Collection</span></div>
        <div><strong>BBB Rated</strong><span>Trusted local service</span></div>
      </div>
    </section>

    <section className="section two-ways" aria-labelledby="two-ways-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Two Ways We Work</p>
          <h2 id="two-ways-title">One showroom, two crafts</h2>
          <p>Designer Fabrics is both a working custom workroom and an authorized Hunter Douglas dealer. Start with whichever fits your project—many finished rooms end up using a little of both.</p>
        </div>
        <div className="ways-grid">
          <article className="way-card reveal">
            <p className="way-badge">Made in Our Workroom</p>
            <h3>The Custom Workroom</h3>
            <p>Custom draperies, cornices and valances, reupholstery, custom bedding and pillows, and wallpaper—designed with you and sewn on site in Centennial. Or start from the bolt: fabric by the yard from our library of more than 30,000 fabrics.</p>
            <a className="button button-dark" href="#custom">Explore the Workroom</a>
          </article>
          <article className="way-card way-card-dark reveal">
            <p className="way-badge way-badge-light">Authorized Dealer</p>
            <h3>Hunter Douglas Window Fashions</h3>
            <p>The complete line of Hunter Douglas blinds, shades, shutters and PowerView® Automation—chosen with you in the showroom, then professionally measured and installed so every window fits exactly.</p>
            <a className="button button-gold" href="#hunter-douglas">Explore Hunter Douglas</a>
          </article>
        </div>
      </div>
    </section>

    <section id="custom" className="part-band part-band-custom" aria-labelledby="custom-title">
      <div className="container reveal">
        <p className="eyebrow light">Part One</p>
        <h2 id="custom-title">The Custom Workroom</h2>
        <p>Designed and sewn on premise in Centennial. Since 1981, our own workroom has turned fabric from our library into draperies, bedding and upholstery made for one home at a time—yours.</p>
      </div>
    </section>


    

    <section id="draperies" className="section section-cream" aria-labelledby="draperies-title">
      <div className="container split-layout">
        <div className="section-heading align-left reveal">
          <p className="part-tag">Custom Workroom</p>
          <p className="eyebrow">Custom Draperies &amp; Top Treatments</p>
          <h2 id="draperies-title">The finishing layer that makes a room feel complete</h2>
          <p>Custom draperies can stand beautifully on their own or soften blinds and shades beneath them. In Designer Fabrics’ on-premise workroom, draperies, cornices and valances are made to your specifications—down to the fabric, trim and hardware.</p>
          <ul className="check-list">
            <li>Custom drapery panels and soft treatments</li>
            <li>Cornices and valances tailored to the window</li>
            <li>Decorative tapes, trims, banding and hardware</li>
            <li>Motorized drapery options for long or hard-to-reach treatments</li>
          </ul>
        </div>
        <div className="image-stack reveal">
          <figure className="image-card large">
            <img src="assets/img/draperies.jpg" width="1200" height="500" loading="lazy" alt="Full-length custom draperies framing a bright window" />
            <figcaption>Custom draperies</figcaption>
          </figure>
          <div className="image-pair">
            <figure className="image-card">
              <img src="assets/img/cornice.jpg" width="1200" height="500" loading="lazy" alt="A tailored custom cornice above a window treatment" />
              <figcaption>Cornices</figcaption>
            </figure>
            <figure className="image-card">
              <img src="assets/img/valance.jpg" width="1200" height="500" loading="lazy" alt="A custom valance adding a finished top treatment to a window" />
              <figcaption>Valances</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="fabrics" className="section section-dark" aria-labelledby="fabrics-title">
      <div className="container">
        <div className="split-layout split-layout-reverse">
          <div className="fabric-images reveal">
            <img className="fabric-main" src="assets/img/fabric-bolts.jpg" width="1200" height="500" loading="lazy" alt="Bolts of upholstery and drapery fabric arranged by color" />
            <img className="fabric-detail" src="assets/img/fabric-library-detail.jpg" width="1200" height="500" loading="lazy" alt="Upright bolts of linen and drapery fabric in warm, muted tones" />
          </div>
          <div className="section-heading align-left light-copy reveal">
            <p className="part-tag">Custom Workroom</p>
            <p className="eyebrow brass">Fabrics &amp; the Workroom</p>
            <h2 id="fabrics-title">A fabric library built for one-of-a-kind rooms</h2>
            <p>Browse more than 30,000 beautiful fabrics, trims and hardware options for draperies, bedding, pillows and upholstery. Doing the project yourself? Purchase fabric by the yard. Ready for a custom finish? The experienced on-premise workroom can bring the vision to life.</p>
            <div className="mini-stats">
              <div><strong>30,000+</strong><span>fabrics, trims &amp; hardware</span></div>
              <div><strong>By the yard</strong><span>for DIY décor projects</span></div>
              <div><strong>On premise</strong><span>custom workroom</span></div>
            </div>
          </div>
        </div>
        <div className="workroom-strip reveal">
          <h3>Made here, made to your specifications</h3>
          <p>The on-site drapery and upholstery workroom creates custom window treatments, valances and cornices, bedding and pillows, upholstery and window-seat cushions—with close attention to workmanship at every step.</p>
        </div>
      </div>
    </section>

    <section id="upholstery" className="section section-light" aria-labelledby="upholstery-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="part-tag">Custom Workroom</p>
          <p className="eyebrow">Reupholstery Services</p>
          <h2 id="upholstery-title">Bring a favorite piece back to life</h2>
          <p>A well-made chair, sofa or family heirloom does not have to be replaced when the fabric fades or cushions lose their shape. Reupholstery can restore comfort, repair visible wear and give a treasured piece a completely new point of view.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <img src="assets/img/upholstery.jpg" width="1200" height="500" loading="lazy" alt="A newly upholstered sofa in a styled living room" />
            <div><h3>Sofas, chairs &amp; more</h3><p>Antique chairs and sofas, benches, lounges, sectionals, ottomans and headboards can be refreshed in a fabric that fits how you live now.</p></div>
          </article>
          <article className="feature-card reveal">
            <img src="assets/img/chairs.jpg" width="1200" height="500" loading="lazy" alt="Upholstered dining chairs around a table" />
            <div><h3>Pickup &amp; delivery available</h3><p>Designer Fabrics offers pickup and delivery on reupholstery projects. Restrictions may apply—contact the store for complete details.</p></div>
          </article>
        </div>
        <div className="benefit-row reveal" aria-label="Benefits of reupholstery">
          <span>Preserve heirloom quality</span><span>Restore sagging cushions</span><span>Refresh stains &amp; wear</span><span>Improve comfort</span><span>Update the style</span>
        </div>
      </div>
    </section>

    <section className="section section-cream" aria-labelledby="bedding-title">
      <div className="container split-layout">
        <div className="image-stack reveal">
          <figure className="image-card large">
            <img src="assets/img/bedding.jpg" width="1200" height="500" loading="lazy" alt="Custom bedding and draperies creating a coordinated bedroom retreat" />
            <figcaption>Custom bedding ensembles</figcaption>
          </figure>
          <div className="image-pair">
            <figure className="image-card">
              <img src="assets/img/pillows.jpg" width="1200" height="700" loading="lazy" alt="Blue custom throw pillows arranged on a sofa" />
              <figcaption>Custom pillows</figcaption>
            </figure>
            <figure className="image-card">
              <img src="assets/img/bedding2.jpg" width="1200" height="700" loading="lazy" alt="A tailored custom bed with coordinated bedding and upholstered details" />
              <figcaption>Bedding &amp; headboards</figcaption>
            </figure>
          </div>
        </div>
        <div className="section-heading align-left reveal">
          <p className="part-tag">Custom Workroom</p>
          <p className="eyebrow">Custom Bedding &amp; Pillows</p>
          <h2 id="bedding-title">A bedroom retreat, tailored down to the last pillow</h2>
          <p>When ready-made bedding is almost right—but not quite—custom design fills the gap. Designer Fabrics creates bedding, comforters, coverlets, duvets, dust ruffles, quilting, throw pillows and pillow forms in-house to your exact tastes and dimensions.</p>
          <ul className="check-list">
            <li>Coordinated bedding, draperies and headboards</li>
            <li>Pillows made for unusual spaces or hard-to-match fabrics</li>
            <li>One custom accent—or a complete bedroom transformation</li>
          </ul>
          <a className="button button-dark" href="#contact">Design My Bedding</a>
        </div>
      </div>
    </section>

    <section className="section wallpaper-section" aria-labelledby="wallpaper-title">
      <div className="container split-layout">
        <div className="section-heading align-left reveal">
          <p className="part-tag">Custom Workroom</p>
          <p className="eyebrow">Wallpaper &amp; Wallcoverings</p>
          <h2 id="wallpaper-title">Pattern, texture and personality for the walls</h2>
          <p>Wallpaper can do what paint cannot: add dimension, pattern, texture and a sense of craft. Choose a solid or print, bring the outdoors in with grasscloth, select an easy-care vinyl or coordinate a wallcovering with the fabric in the room.</p>
          <p>Designer Fabrics’ designers can help narrow the choices by style and use—and can even develop custom wallpaper from a favorite fabric in the showroom collection.</p>
          <a className="text-link" href="#contact">Explore wallpaper options <span aria-hidden="true">→</span></a>
        </div>
        <figure className="wallpaper-image reveal">
          <img src="assets/img/wallpaper.jpg" width="1200" height="700" loading="lazy" alt="Patterned wallpaper adding texture and color to a furnished room" />
        </figure>
      </div>
    </section>

    <section id="photo-order" className="section photo-order-section" aria-labelledby="photo-order-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Start Your Design</p>
          <h2 id="photo-order-title">Snap it, send it—we’ll take it from there</h2>
          <p>A chair that has seen better days? A window that needs dressing? Start with a photo. Add up to six pictures, tell us what you’re dreaming up, and send it straight to the showroom team.</p>
          <p className="photo-note">This starts a consultation—no prices or quotes are given online. For Hunter Douglas products, final measurements are always taken professionally in person before an order is placed.</p>
        </div>
        <ol className="steps-strip reveal">
          <li><span className="step-num" aria-hidden="true">1</span><div><strong>Add photos</strong><small>Of the room, window or piece</small></div></li>
          <li><span className="step-num" aria-hidden="true">2</span><div><strong>Tell us the dream</strong><small>Pick your interests below</small></div></li>
          <li><span className="step-num" aria-hidden="true">3</span><div><strong>Send it in</strong><small>We reply with ideas &amp; next steps</small></div></li>
        </ol>
        <form id="photo-order-form" className="photo-card reveal" noValidate>
          <div className="photo-step">
            <h3><span className="step-num" aria-hidden="true">1</span> Add your photos</h3>
            <label className="upload-area" htmlFor="po-photos">
              <svg className="upload-icon" viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              <span className="upload-title">Add Photos</span>
              <span className="upload-sub">Tap to take a photo or choose from your library · up to 6 photos</span>
            </label>
            <input id="po-photos" className="visually-hidden" type="file" accept="image/*" multiple />
            <div id="po-previews" className="photo-previews" aria-live="polite"></div>
            <p id="po-photo-note" className="photo-note" role="status"></p>
            <p className="privacy-line">Your photos stay on your device until you send them—nothing is uploaded to a server.</p>
          </div>
          <div className="photo-step">
            <h3><span className="step-num" aria-hidden="true">2</span> Tell us what you’re dreaming up</h3>
            <div className="chip-row" role="group" aria-label="What are you interested in">
              <button type="button" className="chip" aria-pressed="false">Window Treatments (Hunter Douglas)</button>
              <button type="button" className="chip" aria-pressed="false">Custom Draperies</button>
              <button type="button" className="chip" aria-pressed="false">Reupholstery</button>
              <button type="button" className="chip" aria-pressed="false">Bedding &amp; Pillows</button>
              <button type="button" className="chip" aria-pressed="false">Wallpaper</button>
              <button type="button" className="chip" aria-pressed="false">Fabric by the Yard</button>
              <button type="button" className="chip" aria-pressed="false">Not Sure Yet</button>
            </div>
          </div>
          <div className="photo-step">
            <h3><span className="step-num" aria-hidden="true">3</span> Send it to the showroom</h3>
            <div className="form-row">
              <label htmlFor="po-name">Name <span aria-hidden="true">*</span></label>
              <input id="po-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-row">
              <label htmlFor="po-phone">Phone <span aria-hidden="true">*</span></label>
              <input id="po-phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className="form-row">
              <label htmlFor="po-email">Email <span className="optional">(optional)</span></label>
              <input id="po-email" name="email" type="email" autoComplete="email" />
            </div>
            <div className="form-row">
              <label htmlFor="po-size">Approx. size / measurements <span className="optional">(optional)</span></label>
              <input id="po-size" name="size" type="text" placeholder="e.g. Living room window, about 72 in. wide by 60 in. tall" />
            </div>
            <div className="form-row">
              <label htmlFor="po-notes">Notes</label>
              <textarea id="po-notes" name="notes" rows={4} placeholder="Room, colors you love, timing—anything that helps us dream with you."></textarea>
            </div>
            <p className="ref-line">Your reference: <strong id="po-ref">shown when you start</strong> <span>— mention it if you call.</span></p>
            <p id="po-error" className="form-error" role="alert" hidden></p>
            <button className="button button-gold photo-send" type="submit">Send Photos &amp; Details</button>
            <div id="po-fallback" className="share-fallback" hidden>
              <p><strong>One more step on this device:</strong> your photos could not be attached automatically here, so send them by email instead. Attach the photos you picked before sending—your details are already written into the email for you.</p>
              <div className="button-row">
                <a id="po-mailto" className="button button-dark" href="mailto:designerfabricsinc@yahoo.com">Email Photos &amp; Details</a>
                <button type="button" id="po-copy" className="button button-light-outline">Copy Details</button>
              </div>
              <p id="po-copy-status" className="photo-note" role="status"></p>
            </div>
            <p className="form-note">Rather call it in? <a href="tel:+13034889444">Call 303-488-9444</a>.</p>
            <p id="po-status" className="form-status" role="status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </section>

    <section id="hunter-douglas" className="part-band part-band-hd" aria-labelledby="hd-band-title">
      <div className="container reveal">
        <p className="eyebrow">Part Two</p>
        <h2 id="hd-band-title">Hunter Douglas Window Fashions</h2>
        <p><span className="dealer-badge">Authorized Dealer</span> Branded blinds, shades, shutters and motorization from Hunter Douglas—selected with you in the showroom, then professionally measured and installed.</p>
      </div>
    </section>

    <section id="window-coverings" className="section section-light" aria-labelledby="window-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Authorized Hunter Douglas Dealer</p>
          <h2 id="window-title">Window coverings for light, privacy and everyday ease</h2>
          <p>As an authorized Hunter Douglas dealer, Designer Fabrics carries the complete line—including the exclusive Alustra® Collection. See, touch and operate full-size displays in the Centennial showroom, with guidance on privacy, light control, energy efficiency, child and pet safety, and motorization.</p>
        </div>
        <div className="card-grid card-grid-five">
          <article className="product-card reveal">
            <img src="assets/img/silhouette.jpg" width="1200" height="500" loading="lazy" alt="Silhouette® Window Shadings diffusing daylight in a bright room" />
            <div><p className="part-tag">Hunter Douglas</p><h3>Silhouette® Window Shadings</h3><p>Soft fabric vanes float between sheer fabrics, diffusing sunlight while preserving a view to the outdoors.</p></div>
          </article>
          <article className="product-card reveal">
            <img src="assets/img/duette.jpg" width="1200" height="700" loading="lazy" alt="Duette honeycomb shades covering tall windows" />
            <div><p className="part-tag">Hunter Douglas</p><h3>Duette® Honeycomb Shades</h3><p>A cellular design made to add insulation at the window while offering flexible light and privacy control.</p></div>
          </article>
          <article className="product-card reveal">
            <img src="assets/img/blinds.jpg" width="1200" height="600" loading="lazy" alt="Wood blinds filtering warm natural light across a room" />
            <div><p className="part-tag">Hunter Douglas</p><h3>Wood Blinds &amp; Shutters</h3><p>Parkland® Wood Blinds and Heritance® Hardwood Shutters bring structure, warmth and precise control to nearly any window.</p></div>
          </article>
          <article className="product-card reveal">
            <img src="assets/img/roman-shades.jpg" width="1200" height="500" loading="lazy" alt="Fabric Roman shades paired with draperies in a bedroom" />
            <div><p className="part-tag">Hunter Douglas</p><h3>Roman Shades</h3><p>The softness of a drapery in a tailored shade—Vignette® Roman Shades, Provenance® Woven Wood Shades and Pirouette® Window Shadings.</p></div>
          </article>
          <article className="product-card product-card-wide reveal">
            <img src="assets/img/motorization.jpg" width="1500" height="845" loading="lazy" alt="Motorized Hunter Douglas window treatments controlled in a modern living space" />
            <div><p className="part-tag">Hunter Douglas</p><h3>PowerView® Automation</h3><p>Raise, lower and schedule compatible blinds and shades by remote, the PowerView® App or a compatible whole-home system. Cordless control is especially useful for hard-to-reach windows and homes with children and pets.</p><a className="text-link" href="/motorization">Explore motorization <span aria-hidden="true">→</span></a></div>
          </article>
        </div>
        <div className="hd-highlights reveal">
          <div><strong>2,400+ textiles</strong><span>From light filtering to total blackout</span></div>
          <div><strong>Cordless options</strong><span>Child- and pet-friendly operating systems</span></div>
          <div><strong>Every budget</strong><span>A Hunter Douglas price point for every project</span></div>
          <div><strong>Hunter Douglas Lifetime Limited Warranty</strong><span>Coverage on Hunter Douglas products</span></div>
        </div>
        <p className="alustra-line reveal">The <strong>Alustra® Collection</strong>—Architectural Roller Shades, Woven Textures® Roman Shades, Luminette® Privacy Sheers and more, including Alustra® versions of Silhouette® Window Shadings, Duette® Honeycomb Shades, Pirouette® Window Shadings and Vignette® Roman Shades—is available at Designer Fabrics.</p>
        <div className="hd-legal reveal">
          <p>The PowerView® App is required for programmed operation.</p>
          <p>©2026 Hunter Douglas. All rights reserved. All trademarks used herein are the property of Hunter Douglas or their respective owners.</p>
        </div>
        <div className="service-banner reveal">
          <img src="assets/img/measuring.jpg" width="1203" height="872" loading="lazy" alt="A professional measuring a window frame for custom window treatments" />
          <div>
            <p className="part-tag">Hunter Douglas</p><h3>Measured and installed by professionals</h3>
            <p>Exact measuring matters—especially when windows are not perfectly square. Designer Fabrics offers professional measuring and installation so your finished treatments fit and operate as intended.</p>
          </div>
          <a className="button button-dark" href="#contact">Start With a Consultation</a>
        </div>
      </div>
    </section>

    <section id="showroom" className="section section-light" aria-labelledby="showroom-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Visit the Showroom</p>
          <h2 id="showroom-title">Touch, feel and operate full-size displays</h2>
          <p>The Centennial showroom is designed to make decisions easier. Operate real window treatments, compare fabrics in person and talk through privacy, light control, energy efficiency, safety and motorization with an experienced team.</p>
        </div>
        <div className="showroom-grid reveal">
          <figure>
            <img src="assets/img/showroom-collage.jpg" width="1600" height="1600" loading="lazy" alt="Collage inside the Designer Fabrics showroom: bolts of fabric, the Hunter Douglas window display, hanging fabric samples and decorative trims" />
            <figcaption>Inside the showroom — fabrics, displays and trims</figcaption>
          </figure>
          <figure>
            <img src="assets/img/storefront.jpg" width="1200" height="500" loading="lazy" alt="The Designer Fabrics storefront in Centennial, Colorado" />
            <figcaption>2555 E. Jamison Avenue, Centennial</figcaption>
          </figure>
        </div>
        <div className="showroom-details">
          <div className="detail-card reveal">
            <h3>What you’ll find</h3>
            <ul>
              <li>Complete Hunter Douglas line, including Alustra®</li>
              <li>Full-size blinds, shades, shutters and draperies</li>
              <li>PowerView® Automation displays</li>
              <li>Fabric, trim and drapery hardware library</li>
              <li>Cornice, valance, bedding and pillow samples</li>
              <li>On-site drapery, upholstery and bedding workroom</li>
            </ul>
          </div>
          <div className="detail-card visit-card reveal">
            <h3>Plan your visit</h3>
            <address>
              Designer Fabrics<br />
              2555 E. Jamison Avenue<br />
              Centennial, CO 80122
            </address>
            <p><strong>Hours:</strong> Monday–Friday, 10am–5pm<br /><strong>Visits:</strong> By appointment only</p>
            <p>Bring your clippings, swatches, photos and rough sizes—we’ll help turn them into a plan.</p>
            <div className="button-row">
              <a className="button button-gold" href="tel:+13034889444">Call 303-488-9444</a>
              <a className="button button-light-outline" href="#contact">Book an Appointment</a>
            </div>
          </div>
          <figure className="install-photo reveal">
            <img src="assets/img/installing.jpg" width="1200" height="500" loading="lazy" alt="A professional installing custom draperies in a home" />
            <figcaption>Professional measuring &amp; installation</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="reveal">
          <p className="eyebrow brass">About Designer Fabrics</p>
          <h2 id="about-title">Ordinary to extraordinary, since 1981</h2>
          <p>Designer Fabrics is a family-owned company that has spent more than 35 years helping clients decorate their homes. From custom draperies to blinds, shades, shutters, comforters, decorative pillows and wallcoverings, the team turns ideas into rooms that feel personal and complete.</p>
          <p>Custom work is done on premise, and the BBB-rated business serves homeowners and businesses throughout the Denver area.</p>
        </div>
        <figure className="about-image reveal">
          <img src="assets/img/soft-treatments.jpg" width="1200" height="500" loading="lazy" alt="Custom pillows, upholstered seating and soft treatments styled in a living room" />
        </figure>
        <div className="team-card reveal">
          <h3>Meet the team</h3>
          <div className="team-names" aria-label="Designer Fabrics team members">
            <span>Nancy</span><span>Amanda</span><span>Nick</span>
          </div>
          <p>Nancy, Amanda and Nick are available to help you find the products, fabrics and finishes your project needs.</p>
        </div>
      </div>
    </section>

    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="section-heading align-left reveal">
          <p className="eyebrow">Common Questions</p>
          <h2 id="faq-title">Before you visit the Centennial showroom</h2>
          <p>Answers to the questions Designer Fabrics hears most often—about how our workroom and the Hunter Douglas dealership fit together, pricing, installation, fabric by the yard and appointments.</p>
        </div>
        <div className="faq-list reveal">
          <div className="faq-item">
            <h3><button type="button" aria-expanded="false" aria-controls="faq-panel-1" id="faq-button-1">Do you make your own draperies, or do you sell Hunter Douglas?</button></h3>
            <div className="faq-panel" id="faq-panel-1" role="region" aria-labelledby="faq-button-1" hidden>
              <p>Both—and they are two different crafts under one roof. Our Centennial workroom designs and sews custom draperies, bedding and upholstery right on site, and sells fabric by the yard. Separately, we are an authorized Hunter Douglas dealer for branded blinds, shades, shutters and motorization, with professional measuring and installation.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3><button type="button" aria-expanded="false" aria-controls="faq-panel-2" id="faq-button-2">Are your prices competitive?</button></h3>
            <div className="faq-panel" id="faq-panel-2" role="region" aria-labelledby="faq-button-2" hidden>
              <p>Yes. Designer Fabrics focuses on competitive pricing and exceptional value through product quality, service, expertise and selection. Consultants help you choose products that fit the room, your lifestyle and your budget.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3><button type="button" aria-expanded="false" aria-controls="faq-panel-3" id="faq-button-3">Will you help me choose the right products and fabrics?</button></h3>
            <div className="faq-panel" id="faq-panel-3" role="region" aria-labelledby="faq-button-3" hidden>
              <p>Yes. The knowledgeable team will ask about your needs, walk you through the choices and help with colors, textures and finishes that complement your décor. The goal is a personalized look that fits your lifestyle, functional needs and budget.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3><button type="button" aria-expanded="false" aria-controls="faq-panel-4" id="faq-button-4">Why do you provide professional measuring and installation?</button></h3>
            <div className="faq-panel" id="faq-panel-4" role="region" aria-labelledby="faq-button-4" hidden>
              <p>Exact measuring and installation are critical, especially for fitted products such as shutters. Professional measuring accounts for window shape and protrusions, helping your window coverings fit correctly and operate beautifully.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3><button type="button" aria-expanded="false" aria-controls="faq-panel-5" id="faq-button-5">Can I buy fabric by the yard for my own project?</button></h3>
            <div className="faq-panel" id="faq-panel-5" role="region" aria-labelledby="faq-button-5" hidden>
              <p>Yes. Designer Fabrics sells fabric by the yard for DIY and home décor projects, with a showroom library of more than 30,000 fabrics, trims and hardware options.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3><button type="button" aria-expanded="false" aria-controls="faq-panel-6" id="faq-button-6">Do I need an appointment to visit?</button></h3>
            <div className="faq-panel" id="faq-panel-6" role="region" aria-labelledby="faq-button-6" hidden>
              <p>The Centennial showroom is open by appointment only, Monday through Friday from 10:00 a.m. to 5:00 p.m. Call <a href="tel:+13034889444">303-488-9444</a> to schedule a visit or consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow brass">Design Consultation</p>
          <h2 id="contact-title">Let’s talk about your next room</h2>
          <p>Meet in the showroom or ask about an in-home consultation. Tell us what you’re imagining—window treatments, a favorite chair, a bedroom retreat or a fabric you have been searching for—and we’ll help you explore the possibilities.</p>
          <div className="contact-details">
            <div>
              <h3>Visit</h3>
              <address>2555 E. Jamison Avenue<br />Centennial, CO 80122</address>
            </div>
            <div>
              <h3>Contact</h3>
              <p><a href="tel:+13034889444">303-488-9444</a><br /><a href="mailto:designerfabricsinc@yahoo.com">designerfabricsinc@yahoo.com</a></p>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Monday–Friday · 10am–5pm<br />By appointment only</p>
            </div>
          </div>
        </div>
        <form id="consultation-form" className="consultation-form reveal" noValidate>
          <h3>Request a consultation</h3>
          <p className="form-intro">Complete the form and it will open a pre-addressed email to Designer Fabrics.</p>
          <fieldset className="slot-picker">
            <legend>Pick a consultation time</legend>
            <div className="slot-dates" id="slot-dates" role="group" aria-label="Choose a day"></div>
            <div className="slot-times" id="slot-times" role="group" aria-label="Choose a time"></div>
            <p className="slot-selected" id="slot-selected" role="status" aria-live="polite"></p>
            <p className="slot-note">Sample availability for demonstration. In production this connects to Designer Fabrics' own calendar, and booked times disappear automatically.</p>
          </fieldset>
          <div className="form-row">
            <label htmlFor="visitor-name">Name <span aria-hidden="true">*</span></label>
            <input id="visitor-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="visitor-phone">Phone <span aria-hidden="true">*</span></label>
            <input id="visitor-phone" name="phone" type="tel" autoComplete="tel" required />
          </div>
          <fieldset>
            <legend>I’m interested in</legend>
            <div className="interest-grid">
              <label><input type="checkbox" name="interests" value="Window treatments" /> Window treatments</label>
              <label><input type="checkbox" name="interests" value="Custom draperies" /> Custom draperies</label>
              <label><input type="checkbox" name="interests" value="Fabric by the yard" /> Fabric by the yard</label>
              <label><input type="checkbox" name="interests" value="Upholstery" /> Upholstery</label>
              <label><input type="checkbox" name="interests" value="Custom bedding & pillows" /> Bedding &amp; pillows</label>
              <label><input type="checkbox" name="interests" value="Wallpaper" /> Wallpaper</label>
              <label><input type="checkbox" name="interests" value="Other" /> Other</label>
            </div>
          </fieldset>
          <div className="form-row">
            <label htmlFor="visitor-message">Tell us about your project</label>
            <textarea id="visitor-message" name="message" rows={6} placeholder="Room, windows or furniture, fabrics you love, timing—anything that helps us prepare."></textarea>
          </div>
          <button className="button button-gold form-button" type="submit">Email My Request</button>
          <p className="form-note">Prefer to talk? Call <a href="tel:+13034889444">303-488-9444</a>.</p>
          <p className="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>
      <SiteFooter />
      <MobileCta current="home" />
    </>
  );
}
