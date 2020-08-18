import '../../wdyr';

import './yandexMap.scss';
import React from 'react';
import {Map, Placemark, YMaps, ZoomControl} from 'react-yandex-maps';

const YandexMap: React.FC = () => (
    <YMaps>
        <Map style={{width: 570, height: 570}}
             defaultState={{center: [53.9037926, 27.5564535], zoom: 19}}>
            <Placemark
                geometry={[53.9037926, 27.5564535]}
                options={{preset: 'islands#redIcon'}}/>
            <ZoomControl options={{float: 'right'}}/>
        </Map>
    </YMaps>
);

export default YandexMap;