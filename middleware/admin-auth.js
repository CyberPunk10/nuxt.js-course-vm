export default function ({ store, redirect }) {
  console.log('[middleware] admin-auth.js')

  if (!store.getters['authStore/isAuthenticated']) {
    redirect('/admin/login?message=login')
  }
}
