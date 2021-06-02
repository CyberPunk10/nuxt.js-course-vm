module.exports = {
  client: {
    service: {
      name: 'nuxt.js-course-vm',
      // URL to the GraphQL API
      url: process.env.BASE_URL_GRAPHQL || 'http://localhost:4000/graphql',
      // url: process.env.BASE_URL_GRAPHQL + '/graphql' || 'http://localhost:4000/graphql',
    },
    // Files processed by the extension
    includes: [
      'pages/**/*.vue',
      'pages/**/*.js',
      'layout/**/*.vue',
      'layout/**/*.js',
      'components/**/*.vue',
      'components/**/*.js',
    ],
  },
}
