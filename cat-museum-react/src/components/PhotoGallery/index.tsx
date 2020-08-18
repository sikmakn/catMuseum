import '../../wdyr';

import React, {useEffect, useState} from 'react';
import HorizontalSlider from '../HorizontalSlider';
import './photoGallery.scss';
import Loader from '../Loader';


const PhotoGallery: React.FC = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST}/bestPhoto/all`)
            .then(r => r.json()).then(images => setImages(images));
    }, []);

    if (!images.length) return (<Loader color={'#000000'}/>);

    return (
        <HorizontalSlider isKeepFirst isKeepLast>
            <div className="scroll-name"><h2>Фотоальбом</h2></div>
            {images.map(({_id, photoId}) =>
                (<img
                    className="photo-gallery-elem"
                    src={`${process.env.REACT_APP_SERVER_HOST}/photo/${photoId}`}
                    alt="фото кота"
                    key={_id}
                    draggable="false"
                />))}
            <div className="last-empty"/>
        </HorizontalSlider>
    );
};

export default PhotoGallery;