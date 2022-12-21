import React from 'react'

let Element = (props) =>{
    return(
        <>
        <div className={props.classname} onClick={props.ClickHandler}>
            {props.value}
        </div>
        </>
    )
}

export default Element;