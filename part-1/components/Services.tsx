import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'

const services = [
	{
		title: ['Search engine', 'optimization'],
		image: '/images/services/services-1.png',
		variant: 'white' as const,
	},
	{
		title: ['Pay-per-click', 'advertising'],
		image: '/images/services/services-2.png',
		variant: 'lime' as const,
	},
	{
		title: ['Social Media', 'Marketing'],
		image: '/images/services/services-3.png',
		variant: 'dark' as const,
	},
	{
		title: ['Email', 'Marketing'],
		image: '/images/services/services-4.png',
		variant: 'white' as const,
	},
	{
		title: ['Content', 'Creation'],
		image: '/images/services/services-5.png',
		variant: 'lime' as const,
	},
	{
		title: ['Analytics and', 'Reporting'],
		image: '/images/services/services-6.png',
		variant: 'dark' as const,
	},
]

/**
 * Services Section
 * Figma spec: 2-column grid, gap-[40px] (card-gap)
 */
export default function Services() {
	return (
		<section id='services' className='section-padding section-y'>
			<SectionTitle
				title='Services'
				description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
			/>

			{/* Spec: 2-col grid, 40px gap */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-[40px]'>
				{services.map((service, index) => (
					<ServiceCard key={index} {...service} />
				))}
			</div>
		</section>
	)
}
