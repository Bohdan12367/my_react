export default function Geo({geo}){
    return(
        <div className={'geo'}>
            <b>{geo.address.geo.lat}</b>
            <b>{geo.address.geo.lng}</b>
        </div>
    )
}