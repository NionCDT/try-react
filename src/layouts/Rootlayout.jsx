import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout(){
    return (
        <div className="root-layout">
        <header>
          <nav>
            <h1>Try React Router</h1>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="login">LOGIN</NavLink>
            <NavLink to="register">REGISTER</NavLink>
          </nav>
        </header>

        <main>
            <Outlet/>
        </main>
        
        </div>
    );

}
