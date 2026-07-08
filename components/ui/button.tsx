import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-[transform,box-shadow,color,background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Lumina primary: machined gradient, inner highlight, chunky offset
        // shadow that presses in on hover.
        default:
          "bg-gradient-to-b from-[#059669] to-[#047857] text-white border-[1.5px] border-[#064E3B] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),2px_2px_0_#064E3B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),1px_1px_0_#064E3B]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "bg-white text-ink border-[1.5px] border-ink shadow-[2px_2px_0_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#0F172A]",
        secondary:
          "bg-white text-ink border-[1.5px] border-ink shadow-[2px_2px_0_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#0F172A]",
        ghost: "hover:bg-primary-50 hover:text-primary",
        link: "text-accent hover:text-[#4338CA]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
