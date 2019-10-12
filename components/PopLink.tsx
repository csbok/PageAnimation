import React from 'react'
import { useRouter } from 'next/router'

interface PopLinkProps {
    href?: string,
    back?: boolean
    onPop: () => void
}

const PopLink: React.FunctionComponent<PopLinkProps> = ( props ) => {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === props.href ? 'red' : 'black',
  }

  const handleClick = e => {
    e.preventDefault()
    props.onPop()
    if (props.href) {
        setTimeout(() => router.push(props.href), 300)
    } else if (props.back) {
        setTimeout(() => router.back(), 300)
    }
  }

  return (
      <>
    <a href={props.href} onClick={handleClick} style={style}>
      {props.children}
    </a>
    </>
  )
}

export default PopLink