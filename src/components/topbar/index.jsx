import { useState } from "react";
import "./style.css";
// import WorksIcon from "@mui";
// import blogIcons from "";
// import contactIcons from "";
import Drawer from "@mui/material/Drawer";



export function TopBar(){
    const  [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
            { text: "Works", href: "#" },
            { text: "Blogs", href: "#" },
            { text: "Contact", href: "#" },
        ];



    return(
      
       <nav className="topbar-container">
      {menuOptions.map((option) => (
        <a key={option.text} href={option.href}>
          {option.text}
        </a>
      ))}


        <div className="container-hamburguer">
        <button className="menu-hamburguer" onClick={() => setOpenMenu(true)} aria-label="Abrir Menu">
        &#9776; </button>
        </div>

         <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <div className="drawer-content">
        <button className="close-button" onClick={() => setOpenMenu(false)}>
        ✕
        </button>
       
          {menuOptions.map((option) => (
            <a key={option.text} href={option.href}>
              {option.text}
            </a>
          ))}
        </div>
      </Drawer>

        </nav>
        
    );
}

