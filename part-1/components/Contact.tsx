import Image from 'next/image'
import SectionTitle from './SectionTitle'

/**
 * Contact Section
 * Figma spec:
 * - Card: bg-gray, rounded-card, padding 60px
 * - Form takes left ~60% on desktop; illustration on right
 * - Radio options at top: 20px text (text-h4 weight regular)
 * - Input labels: text-body, font-medium
 * - Inputs: rounded-button, border border-dark, p-5, text-body, focus:outline-lime
 * - Submit button: btn-primary, full width
 */
export default function Contact() {
	return (
		<section id='contact' className='section-padding section-y'>
			<SectionTitle
				title='Contact Us'
				description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
				descriptionMaxWidth={320}
			/>

			<div className='bg-gray rounded-card px-[60px] py-[60px] relative overflow-hidden'>
				<div className='lg:w-[60%] flex flex-col gap-10'>
					<form className='flex flex-col gap-8'>
						{/* Contact type radio buttons */}
						<div className='flex gap-10'>
							<label className='flex items-center gap-3 cursor-pointer'>
								<div className='relative w-7 h-7'>
									<input
										type='radio'
										name='type'
										defaultChecked
										className='peer appearance-none w-7 h-7 rounded-full border border-dark checked:bg-lime transition-all'
									/>
									<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dark opacity-0 peer-checked:opacity-100 transition-all' />
								</div>
								<span className='text-body'>Say Hi</span>
							</label>

							<label className='flex items-center gap-3 cursor-pointer'>
								<div className='relative w-7 h-7'>
									<input
										type='radio'
										name='type'
										className='peer appearance-none w-7 h-7 rounded-full border border-dark checked:bg-lime transition-all'
									/>
									<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dark opacity-0 peer-checked:opacity-100 transition-all' />
								</div>
								<span className='text-body'>Get a Quote</span>
							</label>
						</div>

						{/* Name field */}
						<div className='flex flex-col gap-3'>
							<label htmlFor='contact-name' className='text-body font-medium'>
								Name
							</label>
							<input
								id='contact-name'
								type='text'
								placeholder='Name'
								className='p-5 rounded-button border border-dark bg-white focus:outline-lime text-body'
							/>
						</div>

						{/* Email field */}
						<div className='flex flex-col gap-3'>
							<label htmlFor='contact-email' className='text-body font-medium'>
								Email*
							</label>
							<input
								id='contact-email'
								type='email'
								placeholder='Email'
								required
								className='p-5 rounded-button border border-dark bg-white focus:outline-lime text-body'
							/>
						</div>

						{/* Message field */}
						<div className='flex flex-col gap-3'>
							<label htmlFor='contact-message' className='text-body font-medium'>
								Message*
							</label>
							<textarea
								id='contact-message'
								placeholder='Message'
								required
								rows={5}
								className='p-5 rounded-button border border-dark bg-white focus:outline-lime text-body resize-none'
							/>
						</div>

						{/* Submit */}
						<button type='submit' className='btn-primary w-full text-center'>
							Send Message
						</button>
					</form>
				</div>

				{/* Decorative illustration */}
				<div className='hidden lg:block absolute right-[-350px] top-1/2 -translate-y-1/2 w-[650px] h-[650px]'>
					<Image src='/images/illustrations/contact-bg.png' alt='Contact illustration' fill className='object-contain object-right' />
				</div>
			</div>
		</section>
	)
}
