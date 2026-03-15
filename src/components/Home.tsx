import jiylogo from "../assets/jiylogo.jpg";
import "../styles/Home.css";

const Home = () => {
    return(
        <div className="logo">
            <img className="logoimg" src={jiylogo} alt="JIY Logo`" width="150" height={150}/>
        </div>

    )
}

export default Home;