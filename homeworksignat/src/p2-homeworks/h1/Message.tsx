import React from 'react'
import Style from '././Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {

    return (
        <div className={Style.box}>
            <div>
                <img className={Style.img} src={props.avatar} alt={"avatar"}></img>
            </div>
            <div className={Style.wrapper}>
                <div className={Style.message}>
                    <div><span className={Style.name}>{props.name}</span></div>
                    <div>
                        <div><span className={Style.text}>{props.message}</span> <span className={Style.time}>{props.time}</span></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Message
