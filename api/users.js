async function getDataFromBD() {
  return (await require('axios').get('https://reqres.in/api/users?page=1'))
    .data
}

async function index() {
  let res = await getDataFromBD()

  // some business logic
  let ret = res.data.map(el => {
    return {
      id: el.id,
      full_name: el.first_name + " " + el.last_name,
      highlight: el.first_name.charAt(0) === "J"
    }
  })
  ret = ret.sort(() => 0.5 - Math.random())

  return ret
}

export { index }
