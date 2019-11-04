import { renderToDom } from './utils/output'
import renderApp from './app'

const app = renderApp()
renderToDom(app)
