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

    render() {
        let flashMessage;
        if (this.props.status.showMessage) {
            //this.setState(this.props.status);
            this.props.onChange()
            flashMessage = (
                <div>
                    teste
                </div>
            )


        } else {
            flashMessage = (
                <div>
                </div>
            )
        };

        return (
            <div>
                {flashMessage}
            </div>
        )
    }



}

export { FlashMessage };