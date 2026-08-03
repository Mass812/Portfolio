import React from 'react';
import DisplayedIcons from './DisplayedIcons';
import Education from './Education';
import Certifications from './Certifications';
import './Bio.scss';

const Bio = () => {
	return (
		<div className='parent'>
			<div className='bio-wrapper'>
				<div className='bio-parent'>
					{/* Each stanza lands on its gold selling point. */}
					<div className='bio-intro'>
						<p>
							<span className='gilt'>
								Integration is where systems get complicated
							</span>
							, and the design approach chosen early is pivotal to
							long-term success &mdash;{' '}
							<span className='gilt'>
								this is where my experience matters
							</span>
							.
						</p>
						<p>
							<span className='gilt'>
								There aren&rsquo;t many tools, frameworks or libraries
								I haven&rsquo;t used &mdash; or built
							</span>
							{' '}&mdash; there are whole lists of my capabilities
							below. What matters is:{' '}
							<span className='gilt'>
								the stack changes, my discipline doesn&rsquo;t
							</span>
							.
						</p>
						<p>
							It&rsquo;s not just knowing the technologies &mdash;{' '}
							<span className='gilt'>
								it&rsquo;s knowing how to use them successfully
							</span>
							.
						</p>
					</div>

					<section className='bio-section'>
						<h2 className='bio-section-title'>Proficiencies</h2>
						<DisplayedIcons />
					</section>

					<Education />
					<Certifications />
				</div>
			</div>
		</div>
	);
};

export default Bio;
