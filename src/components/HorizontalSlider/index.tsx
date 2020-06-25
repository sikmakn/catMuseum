import '../../wdyr';

import './horizontalSlider.scss';
import React, {MouseEvent, useEffect, useRef, useState} from 'react';

export interface HorizontalSliderProps {
    isKeepFirst?: boolean,
    isKeepLast?: boolean,
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({children, isKeepFirst, isKeepLast}) => {
    const ref = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [isDrag, setIsDrag] = useState(false);

    useEffect(() => {
        const target = ref.current! as HTMLElement;
        target.children[1].classList.add('active');
    }, []);

    const mouseDownHandler = (event: MouseEvent) => {
        event.preventDefault();
        setIsDown(true);
    };

    const mouseMoveHandler = (event: MouseEvent) => {
        if (!isDown || Math.abs(event.movementX) < 5) return;
        if (!isDrag) setIsDrag(true);

        const target = ref.current! as HTMLElement;
        target.scrollTo({left: target.scrollLeft - event.movementX});
    };

    const dragToCentralElement = (target: HTMLElement) => {
        const halfOfWindowWidth = window.innerWidth / 2;
        let i = 0;
        let centralChildren = target.children[0] as HTMLElement;
        while (target.scrollLeft > centralChildren.offsetLeft - centralChildren.offsetWidth * 0.3) {
            i++;
            centralChildren = target.children[i] as HTMLElement;
        }
        makeActive(target, centralChildren);
        return centralChildren.offsetLeft - halfOfWindowWidth + centralChildren.offsetWidth / 2;
    };

    const clickToCentralElement = (eventTarget: HTMLElement, target: HTMLElement) => {
        const halfOfWindowWidth = window.innerWidth / 2;
        const halfOfEventTargetWidth = eventTarget.offsetWidth / 2;

        if (isKeepFirst && eventTarget === target.children[0]) return;
        if (isKeepLast && eventTarget === target.children[target.children.length - 1]) return;

        makeActive(target, eventTarget);
        return eventTarget.offsetLeft - halfOfWindowWidth + halfOfEventTargetWidth;

    };

    function makeActive(target: HTMLElement, newActiveNode: HTMLElement) {
        for (let i = 0; i < target.children.length; i++)
            target.children[i].classList.remove('active');

        newActiveNode.classList.add('active');
    }

    const mouseUpHandler = (event: MouseEvent) => {
        setIsDown(false);
        const target = ref.current! as HTMLElement;

        let scrollTo;
        if (isDrag) {
            scrollTo = dragToCentralElement(target);
            setIsDrag(false);
        } else {
            scrollTo = clickToCentralElement(event.target as HTMLElement, target);
        }
        if (scrollTo !== undefined)
            target.scrollTo({
                left: scrollTo,
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