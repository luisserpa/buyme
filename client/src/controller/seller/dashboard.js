import React, { Component } from "react";
import { Header } from "./header";

class DashboardSeller extends React.Component {
    render() {
        const userTest = localStorage.getItem("sessionUser");
        return (
            <div>
                <Header />
                <h1>{userTest}</h1>
            </div>
        )
    }

}

export { DashboardSeller };