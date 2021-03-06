module.exports = {
	siteMetadata: {
		title: 'Jungho Bang',
	},
	plugins: [
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `src`,
			path: `${__dirname}/src/`,
		},
	},
	`gatsby-transformer-remark`,
	`gatsby-plugin-glamor`,
	{
		resolve: `gatsby-plugin-typography`,
		options: {
			pathToConfigModule: `src/utils/typography`,
		},
	},
	{
	    resolve: `gatsby-plugin-google-analytics`,
	    options: {
	      trackingId: 'UA-106316452-1',
	    },
  	},
	],
}