/**
 * Sticky mobile Call / Consultation bar, ported verbatim from the static
 * pitch site. The Consultation link is a bare anchor on the home page and
 * /#contact from the subpages, exactly as in the original markup.
 */
export function MobileCta({ current }: { current: "home" | "installations" | "motorization" }) {
  return (
    <div className="mobile-cta" aria-label="Quick contact actions">
      <a className="mobile-call" href="tel:+13034889444">Call</a>
      <a className="mobile-consult" href={current === "home" ? "#contact" : "/#contact"}>Consultation</a>
    </div>
  );
}
