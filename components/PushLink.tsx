import { useState } from "react"
import { useRouter } from 'next/router'
import BasePage from './BasePage'

export default ({ children, href }) => {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black',
  }

  const [data, setData] = useState(false)
 

  const handleClick = e => {
    e.preventDefault()
    setData(true)
    setTimeout(() => router.push(href), 300)
  }

  return (
      <>
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
    <BasePage title="" style={Object.assign({opacity:0, zIndex:99, position:'absolute', top:0, left:'100vw'}, data && styles.push)}></BasePage>
    </>
  )
}

const styles = {
    push: {
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        transform: "translate3d(-100vw,0,0)",
        opacity: 1.0
    }
}