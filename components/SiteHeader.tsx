/**
 * Shared site header, ported verbatim from the static pitch site.
 * The home page links its sections with bare anchors (#custom); the
 * subpages prefix them with / and mark their own nav link
 * aria-current="page" — `current` reproduces each page's variant.
 */
export function SiteHeader({ current }: { current: "home" | "installations" | "motorization" }) {
  const home = current === "home";
  const anchor = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={home ? "#top" : "/"} aria-label="Designer Fabrics home">
          <span className="brand-mark" aria-hidden="true">DF</span>
          <span className="brand-copy">
            <span className="brand-name">Designer Fabrics</span>
            <span className="brand-sub">Centennial, Colorado · Since 1981</span>
          </span>
        </a>
        <button className="menu-button" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">
          <span></span><span></span><span></span>
        </button>
        <nav id="primary-nav" className="primary-nav" aria-label="Primary navigation">
          <a href={anchor("custom")}>Custom Workroom</a>
          <a href={anchor("hunter-douglas")}>Hunter Douglas</a>
          <a href="/installations" {...(current === "installations" ? { "aria-current": "page" as const } : {})}>Install</a>
          <a href="/motorization" {...(current === "motorization" ? { "aria-current": "page" as const } : {})}>Motorization</a>
          <a href={anchor("showroom")}>Showroom</a>
          <a href={anchor("contact")}>Contact</a>
          <a className="header-phone" href="tel:+13034889444" aria-label="Call Designer Fabrics at 303-488-9444">
            <span aria-hidden="true">☎</span> 303-488-9444
          </a>
        </nav>
      </div>
    </header>
  );
}
