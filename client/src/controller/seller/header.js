import React from "react";
import userService from "../../service/user-service";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    componentWillMount() {
        let user;
        userService.findByEmail(localStorage.getItem("sessionUser"))
        .then(res => {
            user = res;
            this.setState({ username: user.username });
        })
        
    }

    render() {
        console.log("NAME: ",this.state.username);
        return (
            <div>
                <label>{this.state.username}</label>
                <Messages />
                <LogOut />
                <Map />
                <Dashboard />
            </div>
        )
    }
}

const Messages = () => {

    function goToMessages() {
        window.location.replace("/seller/messagesbox");
    }

    return (

        <button onClick={goToMessages}>Messages(fa fa icon)</button>

    )
}

const LogOut = () => {

    function logOut() {
        localStorage.setItem("sessionUser", undefined);
        window.location.replace("/");
    }

    return (
        <button onClick={logOut}>Logout (fa fa icon?) </button>
    )
}

const Map = () => {

    function goToMap() {
        window.location.replace("/seller/map");
    }

    return (
        <button onClick={goToMap}>Map</button>
    )
}

const Dashboard = () => {

    function goToDashboard() {
        window.location.replace("/seller/dashboard");
    }

    return (
        <button onClick={goToDashboard}>Dashboard</button>
    )
}

export {Header}