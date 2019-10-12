import React from 'react'
import PushLink from "../components/PushLink"
import BasePage from "../components/BasePage"

declare var kakao: any;

class Map extends React.Component {
    componentDidMount() {
    if (process.browser && typeof window !== 'undefined') {
        var container = window.document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
    }
    }

    render() {

    return (
        <BasePage title="Main">
            <PushLink href="list">haha</PushLink>

            <div id="map" style={{zIndex:0, width:"500px",height:"400px"}}></div>
        </BasePage>
    )
    }
}

export default Map

