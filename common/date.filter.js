export default (value, type) => {
  // если value пусто, то возвращаем пустую строку
  // if (!value) return '' // не обязательно

  // В цикле не все поля нужно форматировать, некоторые возвращаем без изменений
  if (type === 'return without changes') return value

  const date = new Date(value)

  if (type === 'date') return date.toLocaleDateString()
  if (type === 'time') return date.toLocaleTimeString()

  return date.toLocaleString()
}
