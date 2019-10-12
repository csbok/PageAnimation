import BasePage from "./BasePage"
import PopView from "./PopView"
import PopLink from "./PopLink"
import { useState } from "react"

export default ({children}) => {
    const [pop, setPop] = useState(false)

    const onPop = () => {
        setPop(true)
    }

    return (
        <BasePage title="">
            <PopView title="List" pop={pop}>
               <PopLink back={true} onPop={onPop}>back</PopLink><br />
                { children}
            </PopView>
        </BasePage>
    )
}
