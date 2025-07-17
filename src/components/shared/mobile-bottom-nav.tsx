"use client"

import { Palette, FolderOpen, Hammer, Settings } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Services", href: "#services", icon: <Palette size={22} /> },
  { label: "Portfolio", href: "#portfolio", icon: <FolderOpen size={22} /> },
  { label: "Projects", href: "#construction-projects", icon: <Hammer size={22} /> },
  { label: "What We Do", href: "#what-we-do", icon: <Settings size={22} /> },
]

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg flex justify-around items-center py-3 z-50 md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center text-secondary hover:text-primary transition-colors px-2 py-1"
        >
          {item.icon}
          <span className="text-xs mt-1 font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
