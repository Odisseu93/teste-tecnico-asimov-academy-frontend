import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Services from '@/components/Services'
import CTABanner from '@/components/CTABanner'
import CaseStudies from '@/components/CaseStudies'
import WorkingProcess from '@/components/WorkingProcess'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<main className='min-h-screen max-w-[1600px]  bg-white selection:bg-lime selection:text-dark'>
			<Navbar />
			<Hero />
			<LogoTicker />
			<Services />
			<CTABanner />
			<CaseStudies />
			<WorkingProcess />
			<Team />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	)
}
