import "./Card.css";

function Card(){
    const Personal ={
        name: "Daniela Denisse",
        age: 24,
        job: "Front-end Developer",
        linkedin: "denisserodriguez@linkedin.com",
        about: "Fan de las hamburguesas",
    };
    return (
        <div className="cardD">
            <h2>{Personal.name}</h2>
            <p>{Personal.age}</p>
        </div>
    )
}

export default Card; 