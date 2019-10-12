import { useState } from "react"
import { useRouter } from 'next/router'

export default function ActiveLink({ children, href, test }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black',
  }

  const [data, setData] = useState(false)
 

  const handleClick = e => {
    e.preventDefault()
    setData(true)
    setTimeout(() => router.push(href), 2000)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
      {/* {data ? test : null} */}
      {test}
    </a>
  )
}