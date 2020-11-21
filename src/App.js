import React,{Component} from "react";

import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//import { ThemeProvider } from 'styled-components';
//import { useDarkMode } from './useDarkMode';
//import { lightTheme, darkTheme } from './theme';
//import { GlobalStyles } from './global';
//import Toggle from './Toggle';
import "./index.css"


//import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
class App extends Component{
    constructor() {
        super();
        this.state = {
            theme:'light'
        };
    }
    
    // toggleTheme=()=>{
    //     if (this.state.theme==='light'){
    //         this.setState({theme:'dark'});
    //     }
    //     else{
    //         this.setState({theme:'light'});
    //     }
    // }
    render(){
        return(
            //<ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
            <>
                
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </>
            //</ThemeProvider>
        )
    }
}

export default App;
