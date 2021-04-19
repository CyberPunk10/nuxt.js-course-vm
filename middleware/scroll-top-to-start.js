// export default function ({store, route}) {
export default function (context) {
  console.log('[middleware] scroll-top-to-start')

  // если выполнение происходит не на сервере, а на клиенте, то..
  if (!process.server) {
    // console.log("middleware from client side")

    const $MainContent = document.querySelector('.layout-wrapper>.main-container>.main-content')
    if ($MainContent) {
      $MainContent.style.scrollBehavior = 'auto' // отменяем плавность прокрутки, установленную в css (scroll-behavior: smooth)
      $MainContent.scrollTop = 0
      $MainContent.style.scrollBehavior = ''
    }
  }
}

// export default function (context) {
//   // Add the userAgent property in the context (available in `asyncData` and `fetch`)
//   // context.userAgent = process.server
//   //   ? context.req.headers['user-agent']
//   //   : navigator.userAgent
// }
