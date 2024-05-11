import "./Hero.css";
import  Typography  from "@mui/material/Typography";   

function Hero() {
    return (
        <>
            <Typography variant="h1" gutterBottom>Welcome
            </Typography>
            <Card 
            name= "Denisse Rodríguez"
            age= "24"
            job= "Front-end Developer"
            linkedin= "www.linkedin.com/in/denisse-rodriguez-"
            about= "Fan de las hamburguesas"/>
        </>
    );
} 

// <Typography variant="h1" gutterBottom>

function Card(props) {
return (
    <div className = "card">
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <p>{props.job}</p>
        <p>{props.linkedin}</p>
        <p>{props.about}</p>
    </div>
    )
}

export default Hero; 