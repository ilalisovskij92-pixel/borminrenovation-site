// Logo — official Bormin Rénovation mark, served from /public/logo.svg.
// The SVG is intrinsically 1500x1500 with a graphite house + ochre arrow
// and the wordmark "BORMIN RÉNOVATION" baked in. We expose it as a single
// <Image> wrapper so width/aspect can be controlled per call site.
//
// `inverted` swaps the wordmark to cream — useful on the dark Footer.

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
  /** Width in px — height is derived from the cropped logo aspect ratio (~2.48). */
  width?: number;
  /** Optional override; otherwise derived from width / aspect. */
  height?: number;
  /** Render the cream variant (for use on dark backgrounds) */
  inverted?: boolean;
  ariaLabel?: string;
}

// SVG aspect ratio after viewBox crop ≈ 2.48 : 1
const LOGO_ASPECT = 2.478;

export default function Logo({
  href = "/",
  className = "",
  width = 160,
  height,
  inverted = false,
  ariaLabel = "Bormin Rénovation",
}: LogoProps) {
  const computedHeight = height ?? Math.round(width / LOGO_ASPECT);
  const src = inverted ? "/logo-inverted.svg" : "/logo.svg";

  const img = (
    <Image
      src={src}
      alt={ariaLabel}
      width={width}
      height={computedHeight}
      priority
      style={{ width: `${width}px`, height: "auto" }}
      className="select-none block"
    />
  );

  if (!href) {
    return <span className={className}>{img}</span>;
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      style={{ maxWidth: `${width}px` }}
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      {img}
    </Link>
  );
}
