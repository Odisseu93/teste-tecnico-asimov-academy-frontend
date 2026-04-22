import Image from 'next/image'

const logos = [
	{ name: 'Amazon', src: '/images/clients/amazon.png' },
	{ name: 'Dribbble', src: '/images/clients/dribbble.png' },
	{ name: 'HubSpot', src: '/images/clients/hubspot.png' },
	{ name: 'Notion', src: '/images/clients/notion.png' },
	{ name: 'Netflix', src: '/images/clients/netflix.png' },
	{ name: 'Zoom', src: '/images/clients/zoom.png' },
]

export default function LogoTicker() {
	return (
		<section className='section-padding py-[70px]'>
			<div className='flex flex-wrap justify-between items-center gap-10 transition-all'>
				{logos.map((logo) => (
					<div key={logo.name} className='relative h-[30px] lg:h-[48px] w-[120px] lg:w-[150px]'>
						<Image src={logo.src} alt={logo.name} fill className='object-contain grayscale' />
					</div>
				))}
			</div>
		</section>
	)
}
