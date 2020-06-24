import '../../wdyr';
import React from "react";
import HorizontalSlider from "../HorizontalSlider";
import './photoGallery.scss'

const PhotoGallery: React.FC = () => {
    const images = [
        'https://previews.123rf.com/images/dolgachov/dolgachov1803/dolgachov180300887/97201038-happy-young-woman-with-cat-in-bed-at-home.jpg',
        'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/08/GettyImages-937808484-e1566545143388.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1',
        'https://cff2.earth.com/uploads/2019/08/23130727/Research-proves-that-the-%E2%80%98Crazy-Cat-Lady%E2%80%99-stereotype-is-false-730x410.jpg',
        'https://iheartcats.com/wp-content/uploads/2020/02/woman-carrying-brown-tabby-cat-3356488-scaled-e1581438118730.jpg',
        'https://kulturologia.ru/files/u18476/koshatnitsy-foto-0.jpg',
        'https://4fun.one/uploads/posts/t/1560537013.jpeg'
    ];

    return (
        <HorizontalSlider>
            <div className="scroll-name"><h2>Фотоальбом</h2></div>
            {images.map((image, i) =>
                (<img className="photo-gallery-elem"
                    src={image}
                    alt="фото кота"
                    key={i}
                    draggable="false"
                />))}
            <div className="last-empty"></div>
        </HorizontalSlider>
    )
};

export default PhotoGallery;