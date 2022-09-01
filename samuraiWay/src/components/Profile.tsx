import React from "react";
import style from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src="https://wc.wallpaperuse.com/wallp/13-134363_s.jpg" alt="background-content"/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                <div>
                    My posts
                </div>
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 1
                </div>
            </div>
        </div>
    )
}
