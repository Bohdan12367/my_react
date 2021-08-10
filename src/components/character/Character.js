
import './Character.css';

export default function Product({title, price}) {//props
    // let {title, price} = props;


    return (
        <div className={'product'}>
            <h2>{title}</h2>
            <h3>price is - {price}</h3>
            <hr/>
        </div>
    );
}