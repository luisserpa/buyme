import React, { Component } from "react";

class FlashMessage extends React.Component {

    onCreateUser = () => {
        let flashMessage;
        if (this.props.status.showMessage) {
            this.props.onChange();
            flashMessage = (
                <div>
                    {this.props.status.message}
                </div>
            )


        } else {
            flashMessage = (
                <div>
                </div>
            )
        };

        return flashMessage;

    }

    render() {
    
        return (
            <div>
                {this.onCreateUser()}
            </div>
        )
    }



}

//This function is called from the parent class to trigger the timer
function onChange(objectClass) {
    setTimeout(function () {
        objectClass.setState({
            flashMessageStatus: {
                showMessage: false,
                message: ""
            }
        });
    }, 3000);
}

export { FlashMessage, onChange };