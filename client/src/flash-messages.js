import React, { Component } from "react";

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            message: "",
            addUser: false

        };
    }


    //Time out for the flash message to disapear
    messageTimeout = () => {
        console.log("ENTERED HERE");
        setTimeout(function () {
            this.setState({
                showMessage: false,
                message: "",
                addUser: false
            });
        }.bind(this), 3000);
    };

    componentWillReceiveProps(newProps){
        this.setState({showMessage:true});
        this.messageTimeout();
        
  }

    render() {
        let flashMessage;
        if (this.props.status.showMessage) {
            //this.setState(this.props.status);
            this.componentWillReceiveProps(this.props);
            console.log("OLA");
            if(this.state.showMessage){
                flashMessage = (
                    <div>
                        teste
                    </div>
                )
            }
          
        }else{
            flashMessage = (
                <div>
                </div>
            )
        };

        return(
            <div>
                {flashMessage}
            </div>
        )
    }



}

export { FlashMessage };