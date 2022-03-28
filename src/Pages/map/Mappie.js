import {YMaps, Map, Circle, FullscreenControl} from 'react-yandex-maps';

const Clear = () => (
    <YMaps>
        <Map width="100%" defaultState={{ center: [ 41.326333,69.228405], zoom: 11  ,controls: ['zoomControl', 'fullscreenControl'],
        }}
             modules={['control.ZoomControl', 'control.FullscreenControl']}  >
            <Circle
                geometry={[[ 41.326333,69.228405], 3000]}
                options={{
                    draggable: true,
                    fillColor: '#DB709377',
                    strokeColor: '#990066',
                    strokeOpacity: 0.8,
                    strokeWidth: 5,
                }}
            />
        </Map>

    </YMaps>
);
export default Clear