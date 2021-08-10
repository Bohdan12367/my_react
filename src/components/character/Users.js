import './main.css';

import User from "./User";

export default function Users({users}){
    console.log(users);
    return(
        <div className={'users'}>
            {/*<h1>{id}</h1>*/}
            {/*<h2>{name}</h2>*/}
            {/*<h3>{username}</h3>*/}
            {/*<p>{email}</p>*/}
            {/*<p>{address}</p>*/}
            {/*<p>{phone}</p>*/}
            {/*<p>{website}</p>*/}
            {/*<h3>{company}</h3>*/}

            {users.map(value=> <User user={value}/>)}
        </div>
    )
}