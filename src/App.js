import React,{Component} from "react";

import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./index.css"

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        )
    }
}

export default App;
