import '../../wdyr';

import './imageInfo.scss';
import React, {useState} from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';

export interface ImageInfoProps {
    info: string
    imageUrl: string
}

const ImageInfo: React.FC<ImageInfoProps> = ({imageUrl, info}) => {
    const [infoClass, setInfoClass] = useState('');
    const onClickHandle = () => {
        const className = infoClass ? '' : 'visible';
        setInfoClass(className);
    };
    return (
        <div className="image-info-container" onClick={onClickHandle}>
            <LazyLoadImage alt="нажми на меня" effect="blur" src={imageUrl}/>
            <div className={'info-container ' + infoClass}>
                {info.split('\n').map((inf, i) => (<p key={i}>{inf}</p>))}
            </div>
        </div>
    );
};

export default ImageInfo;