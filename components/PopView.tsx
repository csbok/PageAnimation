import BasePage from './BasePage'

export default ({children, pop, title}) => {
    return (<BasePage title={title} style={Object.assign({opacity: 1, position:'absolute', top:0}, pop && styles.pop)}>{children}</BasePage>)
}

const styles = {
    pop: {
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        transform: "translate3d(100vw,0,0)",
        opacity: 0
    }
}


