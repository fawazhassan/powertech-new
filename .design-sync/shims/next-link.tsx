// Shim for next/link outside the Next.js runtime (design-sync bundle only).
// Renders a plain anchor; drops router-only props.
import * as React from "react"

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string | { pathname?: string }
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  legacyBehavior?: boolean
  locale?: string | false
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, prefetch, replace, scroll, shallow, passHref, legacyBehavior, locale, children, ...rest },
  ref
) {
  const resolved = typeof href === "string" ? href : href?.pathname ?? "#"
  return (
    <a ref={ref} href={resolved} {...rest}>
      {children}
    </a>
  )
})

export default Link
