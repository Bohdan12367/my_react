import './main.css';

export default function Company({comp}){
    return(
        <div className={'company'}>
            <h2>{comp.company.name}</h2>;
            <h2>{comp.company.catchPhrase}</h2>;
            <h2>{comp.company.bs}</h2>
        </div>
    )
}