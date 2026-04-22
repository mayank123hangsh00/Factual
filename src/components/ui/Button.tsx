import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "shine"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base classes
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50"
    
    // Variant classes
    const variants = {
      default: "bg-surface text-foreground shadow-sm hover:bg-surface-hover border border-border",
      outline: "border border-border bg-transparent hover:bg-surface-hover text-foreground",
      ghost: "hover:bg-surface-hover text-foreground",
      shine: "bg-gradient-to-b from-brand to-[#4A42B3] text-white shadow-[0_0_20px_-5px_rgba(108,99,255,0.5)] hover:shadow-[0_0_30px_-5px_rgba(108,99,255,0.7)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group border-t border-white/20 border-x border-x-white/10 border-b border-b-black/50"
    }
    
    // Size classes
    const sizes = {
      default: "h-9 rounded-lg px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-11 rounded-xl px-8 text-base",
      icon: "h-9 w-9 rounded-lg",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {variant === 'shine' ? (
          <>
             <span className="absolute inset-0 block w-full h-full transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
             <span className="relative font-bold">{props.children}</span>
          </>
        ) : props.children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
