import React, { CSSProperties } from 'react'

interface BasePageProps {
    title: string,
    style?: CSSProperties
}

const BasePage: React.FunctionComponent<BasePageProps> = ( props ) => {
    return (
        <div style={Object.assign({boxShadow: "5px 5px 5px 5px gray", backgroundColor:'white', width:'100vw', height:'100vh',position:'relative',overflow:'hidden'}, props.style)}>
            <div style={{backgroundColor:'#6699FF', height:'80px'}}><h1>{props.title}</h1></div>
            {props.children}
        </div>
    )
}

export default BasePage