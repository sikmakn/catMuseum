import '../../wdyr';

import './slider.scss';
import React, {useState} from 'react';

export interface SliderProps {
    images: string[],
}

export const Slider: React.FC<SliderProps> = ({images}) => {
    const [selectedImgInd, setSelectedImg] = useState(0);

    const nextHandler = () => {
        if (selectedImgInd >= images.length - 1) return setSelectedImg(0);
        setSelectedImg(selectedImgInd + 1);
    };
    const prevHandler = () => {
        if (selectedImgInd === 0) return setSelectedImg(images.length - 1);
        setSelectedImg(selectedImgInd - 1);
    };
    const selectHandler = (index: number) => setSelectedImg(index);

    return (
        <div
            className="slider-container"
            style={{background: `url(${images[selectedImgInd]}) no-repeat center bottom / cover`}}
        >
            <div onClick={prevHandler} className="slider-arrow-switcher">
                <img src="/arrow-grey-left.svg" alt="Посетить музей"/>
            </div>
            <div onClick={nextHandler} className="slider-arrow-switcher">
                <img src="/arrow-grey-right.svg" alt="Посетить музей"/>
            </div>
            <div className="slider-drops">
                {images.map((_, i) => {
                    let classNames = 'drop';
                    if (selectedImgInd === i) classNames += ' selected';
                    return (<div className={classNames} key={i} onClick={selectHandler.bind(null, i)}/>)
                })}
            </div>
        </div>
    );
};