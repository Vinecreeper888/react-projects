import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import {
	BrowserRouter,
	Route,
	Link,
} from 'react-router-dom';


class App extends React.Component {
  render() {

    return (
    	<BrowserRouter>
    		<div className="hello-world">
		       <ul>
		       	<li><Link to='/'>Home</Link></li>
		       	<li><Link to='/about'>About</Link></li>
		       	<li><Link to='/topics'>Topics</Link></li>
		       </ul>


		       <hr/>


		    <Route exact path='/' component={Home}/>
	    	<Route path='/about' component={About}/>
	    	<Route path='/topics' component={Topics}/>
		    </div>
    	</BrowserRouter>
      
      )
  }
}


export default App;