import React from "react";

function Accordion(props: AccordionPropsType) {
    if (props.collapsed === false) {
        return (
            <div>
                <AccordionTitle titleValue={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle titleValue={props.title}/>
            </div>

        )
    }


}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.titleValue}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    titleValue: string

}
export default Accordion;