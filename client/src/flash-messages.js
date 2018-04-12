import React, { Component } from "react";

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
        console.log("THIS PROPS: ",this.props.status);
        this.state = this.props.status;
        console.log("STATE: ", this.state);
    }


    //Time out for the flash message to disapear
    messageTimeout = () => {
        console.log("ENTERED HERE");
        setTimeout(function () { this.setState({ showMessage: false }); }.bind(this), 3000);
    };

    render() {
        console.log("PROPS: ",this.props);
        if (this.state.showMessage === true) {
            this.messageTimeout();
            return (
                <div>
                    teste
                    </div>
            );

        } else {
            return (
                <div>
                </div>
            )
        };
    }



}

export { FlashMessage };