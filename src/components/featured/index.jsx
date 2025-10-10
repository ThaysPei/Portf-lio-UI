import "./style.css";
import tela from "./featured1.png";
import menina from "./featured2.png";
import logo from "./featured3.png";

export function Featured(){
    return(
        <section className="section-featured">
            <h3>Featured works</h3>
            <div className="grid-image-tela" src="#">
            <img src={tela} alt="tela de pc" />
            <h2>Designing Dashboards</h2>
            <h4>2020</h4>
            <h3>Dashboard</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.</p>
            </div>


            <div className="grid-image-menina">
            <img src={menina} alt="image-menina" />
            <h2>Vibrant Portraits of 2020</h2>
            <h4>2018</h4>
            <h3>Ilustration</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.</p>


            <div className="grid-image-logo">
            <img src={logo} alt="image-logo" />
            <h2>36 Days of Malayalam type</h2>
            <h4>2018</h4>
            <h3>Typography</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.</p>
            </div>


            </div>








        </section>
    );
}