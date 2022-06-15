import React from "react";
import Card from "../UI/Card";

import userClasses from "./Users.module.css"

const Users = props => {
if(props.item.length > 0){
 return (
    <Card className = {userClasses.users}>
    <ul>{props.item.map(item => <li key = {Math.random.toString()}> {item.name} ({item.age} years old)</li>)}</ul>
    </Card>
 );
}
else if(props.item.length <=0) {
    return (
    <Card className = {userClasses.users}>
        <ul><li>There is no Data to display</li></ul>
    </Card>
    );
}
};

export default Users;