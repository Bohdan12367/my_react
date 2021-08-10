import './main.css';

import Geo from "./Geo";

export default function Address({adr}){
    return(
        <div className={'address'}>
            <i>{adr.address.city}</i>
            <i>{adr.address.suite}</i>
            <i>{adr.address.city}</i>
            <i>{adr.address.zipcode}</i>
            <Geo geo={adr}/>
        </div>
    )
}