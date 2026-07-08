// Shim for next/image outside the Next.js runtime (design-sync bundle only).
// Renders a plain <img>; drops optimizer-only props.
import * as React from "react"

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | { src: string }
  priority?: boolean
  quality?: number | string
  fill?: boolean
  loader?: unknown
  placeholder?: string
  blurDataURL?: string
  unoptimized?: boolean
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(
  { src, priority, quality, fill, loader, placeholder, blurDataURL, unoptimized, style, ...rest },
  ref
) {
  const resolved = typeof src === "string" ? src : src?.src
  const fillStyle: React.CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
    : style
  // Outside the site, optimizer-served assets (e.g. /assets/…) may 404 —
  // hide the broken-image glyph instead of rendering it; the alt text's
  // sibling brand copy carries the identity.
  return (
    <img
      ref={ref}
      src={resolved}
      style={fillStyle}
      onError={(e) => {
        e.currentTarget.style.display = "none"
      }}
      {...rest}
    />
  )
})

export default Image
