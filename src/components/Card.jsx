function Card(props){
    return(
        <div className="container-card">
            <img className="imagen-card" 
            src={props.image}
            alt="cute dog image"/>
            <div className="container-texto-card">
                <h3 className="name-text">
                    {props.name}
                </h3>
                <strong className="subtitle-text">
                    {props.breed}
                </strong>
                <p className="description-text">
                    {props.description}
                </p>
            </div>
        </div>
    );
}
export default Card;