export default (value, type) => {
  // если value пусто, то возвращаем пустую строку
  // if (!value) return '' // не обязательно

  const date = new Date(value)

  if (type === 'date') return date.toLocaleDateString()
  if (type === 'time') return date.toLocaleTimeString()

  return date.toLocaleString()
}
