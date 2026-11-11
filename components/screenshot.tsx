import Image from "next/image"

// A product screenshot in a plain browser frame, with the demo-data caption.
export function Screenshot({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-lg border bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
        <div className="flex items-center gap-1.5 border-b bg-[#F8FAF9] px-4 py-2.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
        </div>
        <Image src={src} alt={alt} width={1280} height={800} priority={priority} className="h-auto w-full" />
      </div>
      <figcaption className="micro-label mt-3 text-[11px] text-muted-foreground">
        Chironis demo workspace · illustrative data
      </figcaption>
    </figure>
  )
}
