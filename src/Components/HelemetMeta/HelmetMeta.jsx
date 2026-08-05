import { useEffect } from 'react';

// Sets the document title for the browser tab. Share metadata (og:*, twitter:*)
// lives statically in index.html — social scrapers don't execute JavaScript, so
// runtime-injected tags were never visible to them. This replaced
// react-helmet-async, which had begun silently emitting nothing at runtime.
const SITE_TITLE = 'Matt Wellman';
const SITE_DESCRIPTION =
	'Matt Wellman — Senior Software Engineer at Fabletics. React, React Native and Node. I led the real-time inventory platform across 159 retail stores.';
const SITE_URL = 'https://mattwellman.info';

// Canonical and description are also JS-only (same caveat as the title above:
// invisible to non-JS crawlers, and Google only picks it up on its slower
// second-pass render). Still a real fix over the alternative this replaced —
// every route previously shared one static canonical pointing at "/", which
// told Google /resume, /about and /references were duplicates of the
// homepage rather than pages worth indexing on their own.
const HelmetMeta = ({ titleString = SITE_TITLE, descriptionString = SITE_DESCRIPTION, path = '/' }) => {
	useEffect(() => {
		document.title = titleString;

		const canonical = document.querySelector('link[rel="canonical"]');
		const prevCanonical = canonical ? canonical.href : null;
		if (canonical) canonical.href = `${SITE_URL}${path}`;

		const description = document.querySelector('meta[name="description"]');
		const prevDescription = description ? description.content : null;
		if (description) description.content = descriptionString;

		return () => {
			document.title = SITE_TITLE;
			if (canonical) canonical.href = prevCanonical;
			if (description) description.content = prevDescription;
		};
	}, [titleString, descriptionString, path]);

	return null;
};

export default HelmetMeta;
