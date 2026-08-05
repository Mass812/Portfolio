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
							Integration is where systems become complex, and
							the architectural decisions made early often
							determine long-term success.{' '}
							<span className='gilt'>
								This is where my experience matters
							</span>
							.
						</p>
						<p>
							My work spans traditional enterprise integrations
							as well as AI-enabled systems&mdash;including
							agentic workflows, automation pipelines, and Model
							Context Protocol (MCP) integrations that connect AI
							tools with the systems and context they need to
							operate effectively.{' '}
							<span className='gilt'>
								I have worked with&mdash;and built&mdash;a broad
								range of tools, frameworks, and libraries
							</span>
							, but the principle remains the same:{' '}
							<span className='gilt'>
								the stack changes; my discipline doesn&rsquo;t
							</span>
							.
						</p>
						<p>
							It&rsquo;s not just knowing the technologies&mdash;
							<span className='gilt'>
								it&rsquo;s knowing how to integrate and apply
								them successfully
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
