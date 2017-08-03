import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Router ,Route ,IndexRoute ,hashHistory} from 'react-router';

class App extends PureComponent {
	render() {
		return (
			<div className = "root">
	            {this.props.children}
	        </div>
		)
	}
}

class Welcome extends PureComponent {
	render() {
		return (
			<div>
			 I am the home!
	        </div>
		)
	}
}


ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>
			<IndexRoute component={Welcome}/>
			<Route path='*' component={Welcome}/>
		</Route>
	</Router>
	, document.getElementById('app')
)