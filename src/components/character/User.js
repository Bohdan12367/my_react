import './main.css';

import Address from "./Address";
import Company from "./Company";

export default function User({user}){

    return(
        <div className={'user'}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <Address adr={user}/>
            <h4>{user.phone}</h4>
            <p>{user.website}</p>
            <Company comp={user}/>
        </div>
    )
}