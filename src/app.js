export default function renderApp() {
  const source = { a: 1, b: 1 }
  const newObject = Object.assign(source, { b: 2, c: 2 })
  console.log(newObject)

  return 'It works.'
}
