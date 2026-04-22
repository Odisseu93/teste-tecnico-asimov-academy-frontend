import Image from 'next/image'
import Link from 'next/link'

/**
 * Footer
 * Figma spec (node 341-690) with mobile adjustments from user screenshot:
 * - Desktop: Contained in section-padding, Row 1 (Logo, Nav, Social), Row 2 (Contact, Newsletter)
 * - Mobile: Everything centered, stacked vertically.
 */
export default function Footer() {
	const navLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

	return (
		<footer className='section-padding bg-white pb-0 pt-0'>
			{/* Inner dark card with top rounded corners */}
			<div className='bg-dark text-white rounded-t-[45px] px-[20px] md:px-[40px] lg:px-[50px] xl:px-[60px] pt-[55px] pb-[50px]'>
				<div className='flex flex-col gap-[60px]'>
					{/* ── Row 1: Logo + Nav + Social ── */}
					<div className='flex flex-col lg:flex-row items-center justify-between gap-4 xl:gap-8'>
						{/* Logo – centered on mobile, left on desktop */}
						{/* Logo – inverted white, adjusted size for tablet/desktop */}
						<Link href='/' className='relative w-[160px] xl:w-[220px] h-[36px] shrink-0'>
							<Image
								src='/images/logo.png'
								alt='Positivus'
								fill
								className='object-contain lg:object-left invert'
								priority
							/>
						</Link>

						{/* Navigation Links – centered and vertical on mobile, horizontal on desktop */}
						<nav>
							<ul className='flex flex-col lg:flex-row items-center gap-4 lg:gap-6 xl:gap-10'>
								{navLinks.map((item) => (
									<li key={item}>
										<Link
											href={`#${item.toLowerCase().replace(' ', '-')}`}
											className='text-body underline underline-offset-4 hover:text-lime transition-colors whitespace-nowrap'
										>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* Social Media Links – centered on mobile, right on desktop */}
						<div className='flex items-center gap-5'>
							<Link
								href='#'
								aria-label='LinkedIn'
								className='w-9 h-9 rounded-full bg-white text-dark flex items-center justify-center hover:bg-lime transition-all'
							>
								<svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
									<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
								</svg>
							</Link>
							<Link
								href='#'
								aria-label='Facebook'
								className='w-9 h-9 rounded-full bg-white text-dark flex items-center justify-center hover:bg-lime transition-all'
							>
								<svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
									<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
								</svg>
							</Link>
							<Link
								href='#'
								aria-label='Twitter'
								className='w-9 h-9 rounded-full bg-white text-dark flex items-center justify-center hover:bg-lime transition-all'
							>
								<svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
									<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
								</svg>
							</Link>
						</div>
					</div>

					{/* ── Row 2: Contact Info + Newsletter ── */}
					<div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10'>
						{/* Contact Info – centered on mobile */}
						<div className='flex flex-col items-center lg:items-start gap-[27px] text-center lg:text-left'>
							<span className='bg-lime text-dark px-2 py-0.5 rounded-lg lg:rounded-none lg:bg-lime lg:text-dark  font-medium lg:px-1.5 lg:py-0.5'>
								Contact us:
							</span>
							<div className='flex flex-col gap-[14px] text-body'>
								<p>Email: info@positivus.com</p>
								<p>Phone: 555-567-8901</p>
								<p>
									Address: 1234 Main St
									<br />
									Moonstone City, Stardust State 12345
								</p>
							</div>
						</div>

						{/* Newsletter Box – right-aligned on desktop */}
						<div className='flex-1 max-w-[634px] bg-[#292A32] px-[20px] lg:px-[40px] py-[40px] lg:py-[58px] rounded-[14px] flex flex-col lg:flex-row items-center gap-5'>
							<input
								type='email'
								placeholder='Email'
								aria-label='Newsletter email'
								className='w-full lg:flex-1 bg-transparent border border-white px-[35px] py-[22px] rounded-button text-body placeholder:text-white/70 focus:outline-none focus:border-lime transition-colors'
							/>
							<button className='w-full lg:w-auto px-[35px] py-[22px] bg-lime text-dark rounded-button text-body font-medium hover:opacity-90 transition-all whitespace-nowrap'>
								Subscribe to news
							</button>
						</div>
					</div>

					{/* ── Row 3: Footer Bottom (Divider + Copyright) ── */}
					<div className='border-t border-white/20 pt-[50px] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 lg:gap-10 text-body text-center'>
						<p>© 2023 Positivus. All Rights Reserved.</p>
						<Link href='#' className='underline underline-offset-4 hover:text-lime transition-colors'>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
