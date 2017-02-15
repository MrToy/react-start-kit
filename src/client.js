import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import store from './store'
import { Provider } from 'react-redux'
import {RouterContext,Router, Route,browserHistory} from 'react-router'
import routes from './routes'

export const App=()=>(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>
)

ReactDOM.render(<App />,document.getElementById('root'))