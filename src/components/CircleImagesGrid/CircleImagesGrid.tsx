import React, {useState} from 'react';
import './circleImagesGrid.scss';
import {ObjForCircleImagesGrid} from "../../interfaces";

interface CircleImagesProps {
    data: ObjForCircleImagesGrid[],
}

const CircleImagesGrid: React.FC<CircleImagesProps> = ({data}) => {
    const [isAllVisible, setIsAllVisible] = useState(false);
    const [visibleImages, setVisibleImages] = useState(data.slice(0, 9));
    const showAllHandler = () => {
        setVisibleImages(data);
        setIsAllVisible(value => !value);
    };
    const hidePartHandler = () => {
        setVisibleImages(data.slice(0, 9));
        setIsAllVisible(value => !value);
    };
    return (
        <>
            <div className="circles-container">
                {visibleImages.map(imgObj => (<div className="image-card" key={imgObj.id}>
                    <img className="circle-image" src={imgObj.imageUrl} alt={imgObj.name}/>
                    <span className="image-name">{imgObj.name}</span>
                </div>))}
            </div>
            {isAllVisible ?
                <button className="show-circles" onClick={hidePartHandler}>
                    <img src="/arrow-black-down.svg" alt="Показать всех"/>
                    Свернуть
                </button>
                : <button className="show-circles" onClick={showAllHandler}>
                    Показать всех <img src="/arrow-black-down.svg" alt="Показать всех"/>
                </button>
            }
        </>
    );
};

export default CircleImagesGrid;