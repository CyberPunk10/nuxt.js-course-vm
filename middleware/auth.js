export default function ({store, redirect}) {
  console.log(store.getters.isAuth)
  if (!store.getters.isAuth) {
    redirect('/login')
  }
}
