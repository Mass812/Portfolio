import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const HelmetMeta = ({ titleString = 'Matt Wellman React & React Native Developer', bodyString = '', quoteString = '' }) => {
	let currentUrl = 'https://www.mattwellman.dev';

	let imageURL = 'https://mattwellman.dev/static/media/mw_black.653963cb.jpg';

	let hashtagString = '#MattWellmanLouisvilleDev';

	return (
		<Fragment>
			<Helmet>
				<title>{titleString}</title>
				<meta charset='utf-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='csrf_token' content='' />
				<meta property='type' content='website' />
				<meta property='url' content={currentUrl} />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<meta name='msapplication-TileColor' content='red' />
				<meta name='msapplication-TileImage' content={imageURL} />
				<meta name='theme-color' content='#ffffff' />
				<meta name='_token' content='' />
				<meta name='robots' content='noodp' />
				<meta property='title' content={titleString} />
				<meta property='quote' content={quoteString} />
				<meta name='description' content={bodyString} />
				<meta property='image' content={imageURL} />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={titleString} />
				<meta property='og:quote' content={quoteString} />
				<meta property='og:hashtag' content={hashtagString} />
				<meta property='og:image' content={imageURL} />
				<meta content='image/*' property='og:image:type' />
				<meta property='og:url' content={currentUrl} />
				<meta property='og:site_name' content='TopflightSecurityPlus' />
				<meta property='og:description' content={bodyString} />{' '}
			</Helmet>
		</Fragment>
	);
};

export default HelmetMeta;
