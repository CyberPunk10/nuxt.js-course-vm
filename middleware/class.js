export default function ({ store, route }) {
  console.log('[middleware] class.js')

  store.commit('class/SetClass', route.name)
}
