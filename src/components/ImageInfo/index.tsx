import '../../wdyr';

import './imageInfo.scss';
import React, {useState} from "react";

export interface ImageInfoProps {
    info: string
    imageUrl: string
}

const ImageInfo: React.FC<ImageInfoProps> = ({imageUrl, info}) => {
    const [infoClass, setInfoClass] = useState('');
    const onClickHandle = () => {
        if (infoClass) {
            setInfoClass('');
        } else {
            setInfoClass('visible');
        }
    };
    return (
        <div className="image-info-container" onClick={onClickHandle}>
            <img src={imageUrl} alt="нажми на меня"/>
            <div className={'info-container ' + infoClass}>
                {info.split('\n').map((inf, i) => (<p key={i}>{inf}</p>))}
            </div>
        </div>
    );
};

export default ImageInfo;