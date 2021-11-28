import editorDesktop from '../assets/illustration-editor-desktop.svg';
import editorMobile from '../assets/illustration-editor-mobile.svg';

const DesignSection = () => {
	return (
		<section className='p-8'>
			<h2 className='text-center'>Designed for the future</h2>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-8'>
					<div>
						<h3 className=''>Introducing an extensible editor</h3>
						<p>
							Blogr features an exceedingly intuitive interface which lets you
							focus on one thing: creating content. The editor supports
							management of multiple blogs and allows easy manipulation of
							embeds such as images, videos, and Markdown. Extensibility with
							plugins and themes provide easy ways to add functionality or
							change the looks of a blog.
						</p>
					</div>
					<div>
						<h3>Robust content management</h3>
						<p>
							Flexible content management enables users to easily move through
							posts. Increase the usability of your blog by adding customized
							categories, sections, format, or flow. With this functionality,
							you’re in full control.
						</p>
					</div>
				</div>

				<div className='order-first'>
					<img
						className='hidden lg:block order-first'
						src={editorDesktop}
						alt='illustration-editor-desktop'
					/>
					<img
						className=' lg:hidden'
						src={editorMobile}
						alt='illustration-editor-desktop'
					/>
				</div>
			</div>
		</section>
	);
};

export default DesignSection;
