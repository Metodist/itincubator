import React from "react";
import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src="https://wc.wallpaperuse.com/wallp/13-134363_s.jpg" alt="background-content"/>
            </div>
            <div>
                ava+description
            </div>

            <MyPosts/>
        </div>
    )
}
