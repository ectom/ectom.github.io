import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Work from "./pages/Work";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Social from "./pages/Social";
import '@material-ui/core';
import {CssBaseline, Grid, styled} from "@material-ui/core";
import {getMuiTheme} from '@material-ui/styles/';
import {theme} from './styles';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    background: {
        background: '#1e2511',
    },
});

const classes = useStyles();

class App extends Component {

    state = {
        response: '',
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };


    render() {

        return (
            <div
                // className="App"
                className={classes.background}
            >
                <CssBaseline />
                <Navbar/>
                <div>
                    <About />
                    <Work />
                    <Projects />
                    <Contact />
                    <Social />
                </div>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default App;