import React, { Component } from "react";

class FlashMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showMessage:true,
            message:""
        };
    }

    //Time out for the flash message to disapear
    messageTimeout = () => {
        setTimeout(function() { this.setState({showMessage: false}); }.bind(this), 3000);
    }

    render(){
        if(this.state.showMessage === true){
            this.messageTimeout();
            return(
                <div>
                    teste
                </div>
            );

        }else{
            return(
                <div>
                </div>
            )
        }
        
    }
}

export {FlashMessage};