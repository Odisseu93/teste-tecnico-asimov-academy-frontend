'use client'

import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { Plus, Minus } from 'lucide-react'

const processes = [
	{
		number: '01',
		title: 'Consultation',
		content:
			'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
	},
	{
		number: '02',
		title: 'Research and Strategy Development',
		content:
			'We conduct thorough market research and competitor analysis to develop a customized strategy that aligns with your specific goals.',
	},
	{
		number: '03',
		title: 'Implementation',
		content:
			'Our team executes the strategy across chosen channels, ensuring brand consistency and optimal performance.',
	},
	{
		number: '04',
		title: 'Monitoring and Optimization',
		content:
			'We continuously track campaign performance and make data-driven adjustments to maximize results.',
	},
	{
		number: '05',
		title: 'Reporting and Communication',
		content: 'Regular updates and detailed reports keep you informed about progress and key metrics.',
	},
	{
		number: '06',
		title: 'Continual Improvement',
		content:
			'We refine our approach based on ongoing results and evolving market trends to ensure long-term success.',
	},
]

/**
 * Working Process
 * Figma spec:
 * - Accordion items: rounded-accordion (30px), border border-dark, shadow-solid
 * - Closed state: bg-gray; Open state: bg-lime
 * - Step number: 60px bold; Title: 30px bold (text-h3)
 * - Toggle icon circle: 58px, rounded-full, border border-dark, bg-gray
 * - Content: text-body (18px), preceded by full-width 1px dark divider
 */
export default function WorkingProcess() {
	const [openIndex, setOpenIndex] = useState(0)

	return (
		<section id='process' className='section-padding section-y'>
			<SectionTitle
				title='Our Working Process'
				description='Step-by-Step Guide to Achieving Your Business Goals'
				descriptionMaxWidth={320}
			/>

			<div className='flex flex-col gap-[30px]'>
				{processes.map((process, i) => {
					const isOpen = openIndex === i
					return (
						<div
							key={process.number}
							className={`${
								isOpen ? 'bg-lime' : 'bg-gray'
							} border border-dark rounded-accordion shadow-solid transition-all duration-300 overflow-hidden`}
						>
							<button
								className='w-full flex items-center justify-between px-[60px] py-[41px] text-left cursor-pointer'
								onClick={() => setOpenIndex(isOpen ? -1 : i)}
							>
								<div className='flex items-center gap-6 lg:gap-[28px]'>
									{/* Step number – 60px bold per spec */}
									<span className='text-[60px] font-bold leading-none'>{process.number}</span>
									{/* Title – text-h3 (30px bold) */}
									<span className='text-h3'>{process.title}</span>
								</div>
								{/* Toggle icon – 58px circle, border border-dark, bg-gray */}
								<div className=' w-[58px] h-[58px] rounded-full border border-dark hidden lg:flex items-center justify-center bg-gray shrink-0'>
									{isOpen ? <Minus size={28} /> : <Plus size={28} />}
								</div>
							</button>

							<div
								className={`transition-all duration-300 ${
									isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-[60px] pb-[41px] pt-0'>
									<div className='h-px bg-dark mb-[30px]' />
									<p className='text-body leading-relaxed'>{process.content}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
