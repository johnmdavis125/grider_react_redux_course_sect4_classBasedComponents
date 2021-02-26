import React from 'react'; 
import ReactDOM from 'react-dom'; 

// const App = () => {
  
    
//     return (
//         <div>Latitude: </div>
//     )
// }

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     // this is the only time we do direct assignment to this.state (i.e.in constr)
    //     this.state = { lat: null, errorMessage: '' };   
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }


    // lifecycle methods
    // componentDidMount() {
    //     console.log('my component was rendered to the screen'); 
    // }
    // componentDidUpdate() {
    //     console.log('my component was just updated. it re-rendered!'); 
    // }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);