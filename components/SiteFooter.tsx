export function SiteFooter() {
  return (
<footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="Back to top — Designer Fabrics">
          <span className="brand-mark" aria-hidden="true">DF</span>
          <span className="brand-copy"><span className="brand-name">Designer Fabrics</span><span className="brand-sub">Centennial, Colorado · Since 1981</span></span>
        </a>
        <p>Custom draperies, upholstery, bedding, wallpaper and fabric by the yard from our Centennial workroom—plus Hunter Douglas window fashions as an authorized dealer.</p>
      </div>
      <div>
        <h2>Visit</h2>
        <address>2555 E. Jamison Avenue<br />Centennial, CO 80122</address>
        <p>Monday–Friday · 10am–5pm<br />By appointment only</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p><a href="tel:+13034889444">303-488-9444</a><br /><a href="mailto:designerfabricsinc@yahoo.com">designerfabricsinc@yahoo.com</a></p>
      </div>
      <div>
        <h2>Service Areas</h2>
        <p>Denver, Centennial, Castle Rock, Castle Pines and surrounding areas.</p>
      </div>
    </div>
    <div className="container footer-bottom">
      <p>© <span id="current-year">2026</span> Designer Fabrics, Inc. All rights reserved.</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
  );
}
