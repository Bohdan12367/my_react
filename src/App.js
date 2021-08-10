import './App.css';
import Product from './components/character/Character';

export default function App() {
    return (
        <div className="products">
            {/*new Product('milk','20 uah')*/}
            <Product title={'milk'} price={'20 uah'}/>
            <Product title={'juice'} price={'120 uah'}/>
            <Product title={'bread'} price={'40 uah'}/>

        </div>
    );
}