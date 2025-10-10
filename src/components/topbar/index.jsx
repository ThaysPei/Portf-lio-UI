import "./style.css";


export function TopBar(){
    return(
      
        <nav className="topbar-container">     
        <a href="#">Works</a>
        <a href="#">Blogs</a>
        <a href="#">Contact</a>
        <button className="menu-hamburguer" aria-label="Abrir Menu">
        &#9776; </button>
        </nav>

    );
}

