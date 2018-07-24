import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
//import mapRender from "../../utils/map-render";
import Map from "../../utils/map-render";


class SellerMap extends React.Component {
    componentDidMount() {
        console.log("MAP RENDER: ",mapRender);
        mapRender.startMap("map");
    }


  render(){
    return(
    <div>
      <Map/>
    </div>
    );
  }


};

export {SellerMap};
