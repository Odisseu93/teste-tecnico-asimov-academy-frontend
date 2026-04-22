interface SectionTitleProps {
	title: string
	description: string
	titleMaxWidth?: number
	descriptionMaxWidth?: number
}

/**
 * Section Title
 * Figma spec: title has a lime-green highlighted badge (bg-lime, rounded-lg)
 * to the left of the description paragraph. Row on desktop, column on mobile.
 */
export default function SectionTitle({
	title,
	description,
	titleMaxWidth = 580,
	descriptionMaxWidth = 580,
}: SectionTitleProps) {
	return (
		<div className='flex flex-col lg:flex-row items-center lg:items-center gap-8 mb-20 text-center lg:text-left'>
			{/* Highlighted title badge — spec: bg-lime, rounded-lg, px-1.5 */}
			<h2 className='highlight-badge text-h2 whitespace-nowrap shrink-0' style={{ maxWidth: titleMaxWidth }}>
				{title}
			</h2>
			{/* Description — spec: 18px body, max-w-[580px] */}
			<p className='text-body leading-relaxed' style={{ maxWidth: descriptionMaxWidth }}>
				{description}
			</p>
		</div>
	)
}
