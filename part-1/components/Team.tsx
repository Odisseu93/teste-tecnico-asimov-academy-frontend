import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'

const team = [
	{
		name: 'John Smith',
		role: 'CEO and Founder',
		bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
		image: '/images/team/jhon-smith.png',
	},
	{
		name: 'Jane Doe',
		role: 'Director of Operations',
		bio: '7+ years of experience in project management and operations. Skilled in leading teams and ensuring efficient processes',
		image: '/images/team/jane-doe.png',
	},
	{
		name: 'Michael Brown',
		role: 'Senior SEO Specialist',
		bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
		image: '/images/team/michael-brown.png',
	},
	{
		name: 'Emily Johnson',
		role: 'PPC Manager',
		bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
		image: '/images/team/emily-johnson.png',
	},
	{
		name: 'Brian Williams',
		role: 'Social Media Specialist',
		bio: '4+ years of experience in social media marketing. Proficient in creating engaging content and building online communities',
		image: '/images/team/brian-williams.png',
	},
	{
		name: 'Sarah Kim',
		role: 'Content Strategist',
		bio: '2+ years of experience in writing and editing. Skilled in creating compelling copy and optimizing content for search engines',
		image: '/images/team/sarah-kim.png',
	},
]

function LinkedInIcon() {
	return (
		<svg
			width={34}
			height={34}
			viewBox='0 0 34 34'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-label='LinkedIn icon'
			role='img'
		>
			<circle cx='17' cy='17' r='17' fill='black' />
			<path d='M9.31776 25H12.8131V13.6844H9.31776V25Z' fill='#B9FF66' />
			<path
				d='M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z'
				fill='#B9FF66'
			/>
			<path
				d='M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z'
				fill='#B9FF66'
			/>
		</svg>
	)
}

/**
 * Team Section
 * Figma spec:
 * - Cards: bg-white, border border-dark, rounded-card, p-10, shadow-solid
 * - Avatar: PNG with baked-in lime blob, 100px × 100px
 * - Name: text-h4 (20px bold); Role: text-body (18px)
 * - LinkedIn icon: absolute top-8 right-8 (34px SVG)
 * - Divider: 1px bg-dark between header row and bio text
 * - "See all team" button: btn-outline, right-aligned
 */
export default function Team() {
	return (
		<section id='team' className='section-padding section-y'>
			<SectionTitle
				title='Team'
				description='Meet the skilled and experienced team behind our successful digital marketing strategies'
			/>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-[40px]'>
				{team.map((member, i) => (
					<div
						key={i}
						className='bg-white border border-dark rounded-card p-10 shadow-solid flex flex-col gap-6 relative'
					>
						{/* LinkedIn icon – absolute top-right */}
						<Link
							href='#'
							aria-label={`${member.name} on LinkedIn`}
							className='absolute top-8 right-8 hover:opacity-80 transition-opacity z-10'
						>
							<LinkedInIcon />
						</Link>

						{/* Header: avatar + name/role */}
						<div className='flex flex-col gap-6 '>
							<div className='flex items-end gap-5'>
								{/* Avatar – PNG includes lime blob effect from Figma */}
								<div className='relative w-[100px] h-[100px] shrink-0'>
									<Image src={member.image} alt={member.name} fill className='object-contain' sizes='100px' />
								</div>

								<div className='flex flex-col gap-1'>
									{/* Name: text-h4 (20px bold) */}
									<h4 className='text-h4 leading-tight'>{member.name}</h4>
									{/* Role: text-body (18px regular) */}
									<p className='text-body leading-snug'>{member.role}</p>
								</div>
							</div>

							{/* Divider */}
							<div className='h-px bg-dark' />
						</div>

						{/* Bio */}
						<p className='text-body leading-relaxed'>{member.bio}</p>
					</div>
				))}
			</div>

			<div className='flex justify-end mt-10'>
				<button className='btn-primary min-w-[269px]'>See all team</button>
			</div>
		</section>
	)
}
