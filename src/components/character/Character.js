
import './Character.css';

import Simpson from "./Simpson";

export default function Simpsons({simpsons/*name, surname,age,info,photo*/}) {//props
    // let {title, price} = props;


    return (
        <div className={'simpson'}>
            {/*<h1>{name}</h1>*/}
            {/*<h2>{surname}</h2>*/}
            {/*<h3>age - {age}</h3>*/}
            {/*<p>{info}</p>*/}
            {/*<img src={photo} alt=""/>*/}
            {/*<hr/>*/}
            {simpsons.map(value=> <Simpson simpson={value}/>)}
        </div>
    );
}