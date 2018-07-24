import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import mapRender from "../../utils/map-render";

class SellerMap extends React.Component {
    componentDidMount() {
        console.log("MAP RENDER: ",mapRender);
        mapRender.startMap("map");
    }
    

    render() {
        console.log("HERE");
        const style={
            height:"500px",
            width:"500px"
        }
        return (
            <div>
                <Header />
                <div id='app'>
                    <div id='map' style={style}/>
                </div>
            </div>

        );
    }
};

export {SellerMap};
