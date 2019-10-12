import { useEffect, useState } from "react"
import PushLink from "../components/PushLink"
import PopLink from "../components/PopLink"
import PopBasePage from "../components/PopBasePage"

export default () => {
    const [data, setData] = useState()

    const getData = async () => {
        const data = await fetch("https://api.thecatapi.com/v1/images/search?format=json").then((r) => r.text())
        console.log(JSON.parse(data))
        
        setData(JSON.parse(data)[0].url)
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <PopBasePage>
            <PushLink href="/con">list push</PushLink><br /><br />
            <PushLink href="/con">list push</PushLink><br /><br />
            <PushLink href="/con">list push</PushLink><br /><br />
            <PushLink href="/con">list push</PushLink><br /><br />
            <button onClick={getData}>haha</button>
            <br />
            <img src={data}  width="100%" />
        </PopBasePage>
    )
}

