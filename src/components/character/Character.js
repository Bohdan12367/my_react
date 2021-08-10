
import './Character.css';

export default function Simpson({name, surname,age,info,photo}) {//props
    // let {title, price} = props;


    return (
        <div className={'simpson'}>
            <h1>{name}</h1>
            <h2>{surname}</h2>
            <h3>agge - {age}</h3>
            <p>{info}</p>
            <img src={photo} alt=""/>
            <hr/>
        </div>
    );
}