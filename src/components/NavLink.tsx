"use client"

import { forwardRef, ComponentProps } from "react"
import { usePathname } from "next/navigation"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

// Pegamos todas as props válidas do Link
type NextLinkProps = ComponentProps<typeof Link>

interface NavLinkProps extends Omit<NextLinkProps, "className"> {
  className?: string
  activeClassName?: string
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname()
    const isActive = pathname === href || pathname === href.toString()

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    )
  }
)

NavLink.displayName = "NavLink"

export { NavLink }