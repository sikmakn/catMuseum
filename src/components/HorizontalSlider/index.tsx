import '../../wdyr';

import './horizontalSlider.scss';
import React, {MouseEvent, useRef, useState} from 'react';

const HorizontalSlider: React.FC = ({children}) => {
    const ref = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [isDrag, setIsDrag] = useState(false);

    const mouseDownHandler = () => setIsDown(true);

    const mouseMoveHandler = (event: MouseEvent) => {
        if (!isDown || Math.abs(event.movementX) < 5) return;
        if (!isDrag) setIsDrag(true);

        const target = ref.current! as HTMLElement;
        target.scrollTo({left: target.scrollLeft - event.movementX});
    };

    const mouseUpHandler = (event: MouseEvent) => {
        setIsDown(false);
        if (isDrag) return setIsDrag(false);

        const eventTarget = event.target as HTMLElement;
        const halfOfWidth = eventTarget.offsetWidth / 2;

        const target = ref.current! as HTMLElement;
        target.scrollTo({
            left: eventTarget.offsetLeft - window.innerWidth / 2 + halfOfWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div
            id="horizontal-scroll-container"
            ref={ref}
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
        >
            {children}
        </div>
    );
};

export default HorizontalSlider;