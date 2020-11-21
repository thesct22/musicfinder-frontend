import React,{Component} from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
//import DarkModeToggle from './DarkModeToggle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import './styles.scss';

//import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
class App extends Component{
    render(){
        return(
            <>
                {/* <div className="navbar">
                    <DarkModeToggle />
                </div> */}
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </>
        )
    }
}

export default App;
