import React from 'react'
import './App.css'

/**
 * Top-level React component for the application.
 */
class App extends React.Component {
    //state = {
    //    message: 'Hello World!'
    //}

    componentDidMount() {
        console.info("Fetching initial state.");
    }

    render() {
        // const { message } = this.state;
        const message = 'Hello World!';

        console.info("Render message: " + message);

        return (
            <div className="app-container">
                <p>{ message }</p>
            </div>
        )
    }
}

export default App;
