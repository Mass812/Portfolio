import { useEffect } from 'react';

// Sets the document title for the browser tab. Share metadata (og:*, twitter:*)
// lives statically in index.html — social scrapers don't execute JavaScript, so
// runtime-injected tags were never visible to them. This replaced
// react-helmet-async, which had begun silently emitting nothing at runtime.
const SITE_TITLE = 'Matt Wellman';

const HelmetMeta = ({ titleString = SITE_TITLE }) => {
	useEffect(() => {
		document.title = titleString;

		return () => {
			document.title = SITE_TITLE;
		};
	}, [titleString]);

	return null;
};

export default HelmetMeta;
