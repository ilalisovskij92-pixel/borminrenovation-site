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
  width?: number;
  height?: number;
  /** Render the cream variant (for use on dark backgrounds) */
  inverted?: boolean;
  ariaLabel?: string;
}

export default function Logo({
  href = "/",
  className = "",
  width = 180,
  height = 60,
  inverted = false,
  ariaLabel = "Bormin Rénovation",
}: LogoProps) {
  const src = inverted ? "/logo-inverted.svg" : "/logo.svg";

  const img = (
    <Image
      src={src}
      alt={ariaLabel}
      width={width}
      height={height}
      priority
      className="h-auto w-auto select-none"
    />
  );

  if (!href) {
    return <span className={className}>{img}</span>;
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center ${className}`}
    >
      {img}
    </Link>
  );
}
