export default function ({store, redirect}) {
  // if (!store.getters['auth/isAuthenticated']) {
  //   redirect('/admin/login?message=login')
  // }
  console.log('scroll-top-to-start (middleware)')
  // ниже способ не работает, когда обновляешь придя с другого layout (document is not defined)
  // const $MainContent = document.querySelector('.layout-wrapper>.main-container>.main-content')
  // if ($MainContent) $MainContent.scrollTop = 0
}

// export default function (context) {
//   // Add the userAgent property in the context (available in `asyncData` and `fetch`)
//   // context.userAgent = process.server
//   //   ? context.req.headers['user-agent']
//   //   : navigator.userAgent
// }
