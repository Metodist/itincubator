import React from "react";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <img className={style.logo} src="https://image.shutterstock.com/image-vector/tiger-logo-png-head-silhouette-260nw-1804459321.jpg"
                 alt="logo"/>
        </div>
    )
}
