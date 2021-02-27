export default function ({store, redirect}) {
  console.log('[middleware] admin-auth.js')

  if (!store.getters['auth/isAuthenticated']) {
    redirect('/admin/login?message=login')
  }
}
