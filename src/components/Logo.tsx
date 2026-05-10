// Logo — official Bormin Rénovation mark.
// Uses a plain <img> (not next/image) because:
//   1) SVG doesn't benefit from Next.js image optimisation
//   2) <Image> aggressively caches src; with prop-driven src swap (inverted)
//      it sometimes serves the wrong file from the build manifest
// `inverted` swaps the wordmark to cream for use on dark backgrounds.

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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={src}
      src={src}
      alt={ariaLabel}
      width={width}
      height={computedHeight}
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
