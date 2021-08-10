import './Character.css';

export default function Simpson({simpson}) {
    return(
        <div className={simpson}>
            <h1>{simpson.name}</h1>
            <h2>{simpson.surname}</h2>
            <h3>{simpson.age}</h3>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt=""/>
        </div>
    )
}