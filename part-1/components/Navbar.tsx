'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
	{ name: 'About us', href: '#about' },
	{ name: 'Services', href: '#services' },
	{ name: 'Use Cases', href: '#use-cases' },
	{ name: 'Pricing', href: '#pricing' },
	{ name: 'Blog', href: '#blog' },
]

/**
 * Navbar
 * Figma spec:
 * - Logo: 220px wide × 36px tall
 * - Nav links: text-body (18px), medium weight
 * - CTA button: border border-dark, rounded-button, text-body
 *   hover: bg-dark text-white
 * - Fixed top, white bg with slight blur
 */
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-dark/10'>
			<div className='px-5 lg:px-[71px] py-[30px] flex items-center justify-between'>
				{/* Logo */}
				<Link href='/' className='relative w-[160px] xl:w-[220px] h-[36px] shrink-0'>
					<Image src='/images/logo.png' alt='Positivus' fill className='object-contain' priority />
				</Link>

				{/* Desktop Nav */}
				<div className='hidden lg:flex items-center gap-4 xl:gap-10'>
					<ul className='flex items-center gap-6 xl:gap-10'>
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link
									href={link.href}
									className='text-body font-medium hover:text-lime transition-colors whitespace-nowrap'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					{/* CTA – outlined button */}
					<Link href='#contact' className='btn-outline'>
						Request a quote
					</Link>
				</div>

				{/* Mobile hamburger */}
				<button
					className='lg:hidden p-2 text-dark'
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Toggle navigation menu'
				>
					{isOpen ? <X size={32} /> : <Menu size={32} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-dark/10 shadow-2xl transition-all duration-300 transform ${
					isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
				}`}
			>
				<div className='p-8 flex flex-col gap-8 text-center'>
					<ul className='flex flex-col gap-6'>
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link
									href={link.href}
									className='text-h3 font-bold block hover:text-lime transition-colors'
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					<Link href='#contact' className='btn-outline inline-block' onClick={() => setIsOpen(false)}>
						Request a quote
					</Link>
				</div>
			</div>
		</nav>
	)
}
