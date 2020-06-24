import '../../wdyr';

import './horizontalScrollSlider.scss';
import React, {MouseEvent, useEffect, useRef, useState} from 'react';

export interface HorizontalScrollProps {
    images: string[]
}

const HorizontalSlider: React.FC<HorizontalScrollProps> = ({images}) => {
    const ref = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [isDrag, setIsDrag] = useState(false);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        const target = ref.current! as HTMLElement;
        target.scrollTo(scrollX, 0);
    }, [scrollX]);


    const mouseDownHandler = () => setIsDown(true);

    const mouseMoveHandler = (event: MouseEvent) => {
        if (!isDown || Math.abs(event.movementX) < 5) return;
        if (!isDrag) setIsDrag(true);

        const target = ref.current! as HTMLElement;
        setScrollX(target.scrollLeft - event.movementX);
    };

    const mouseUpHandler = (event: MouseEvent) => {
        setIsDown(false);
        if (isDrag) {
            setIsDrag(false);
            return;
        }

        const eventTarget = event.target as HTMLElement;

        const halfOfWidth = eventTarget.offsetWidth / 2;
        setScrollX(eventTarget.offsetLeft - halfOfWidth);
    };

    return (
        <div
            ref={ref}
            className="scroll-container"
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
        >
            <div className="scroll-name"><h2>Фотоальбом</h2></div>
            {images.map((image, i) =>
                (<img
                    src={image}
                    alt="фото кота"
                    key={i}
                    draggable="false"
                />))}
            <div className="last-empty"></div>
        </div>
    );
};

export default HorizontalSlider;