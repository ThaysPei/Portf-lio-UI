import "./style.css";
import foto from "./foto perfil.png";

export function TopBanner(){
    return(
        <div className="topbanner-container">
        <div className="texto">
        <h1>
            Hi, I am John,
            Creative Technologist
        </h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
         Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
        sunt nostrud amet.</p>
        <button className="button-topbanner">Download Resume</button>
        </div>
        <img src={foto} alt="foto de perfil"/>
        </div>




    );
}