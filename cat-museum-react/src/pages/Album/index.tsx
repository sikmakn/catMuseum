import '../../wdyr';

import './album.scss';
import React, {useEffect, useState} from "react";
import Top from "../../pageParts/Top";
import PhotoAlbum from "../../components/PhotoAlbum";
import Header from "../../components/Header";
import Loader from "../../components/Loader";

const Album: React.FC = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST}/albumPhoto/all`)
            .then(r => r.json()).then(images => setImages(images));
    }, []);

    return (<>
        <Header isDarkPageArr={[true]}/>
        <Top darken={0.25} header="Фотоальбом" backgroundUrl="album-top.jpg"/>
        <div className="album-container">
            <div className="album-content-container">
                {images.length ? <PhotoAlbum imagesInfo={images}/> : <Loader color={'#ffffff'}/>}
            </div>
        </div>
    </>);
};

export default Album;