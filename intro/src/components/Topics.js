
import React from 'react';
import {
	Route,
	Link,
} from 'react-router-dom';


function Topic ({match}) {
	//console.log('props in topic',props)
	return <h3>{match.params.topicId}</h3>
}

export default function Topics ({match}) {

	return (
		<div>
			<h2>TOPICS</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props vs State</Link>
				</li>
			</ul>


			<hr/>


			<Route path={`${match.path}/:topicId`} component={Topic}/>
			<Route exact path={match.path} render={() => {
				return <h3>Please select a topic</h3>
			}}/>
		</div>
	)
}


// components
// component proposition

// lifecycle
// routing
// new context API




import React from 'react';

export default function SearchMovies() {

	render() {

		return (
        <form className="form" 
        htmlFor="query">
            <label htmlFor="query" className="label"/>
            <input className="input" type="text" name="query" placeholder="enter name here"/>
            <button className="button" type="submit">Submit</button>
        </form>
        
    	)
	} 
}
