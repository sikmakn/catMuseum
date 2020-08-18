import '../../wdyr';

import './horizontalSlider.scss';
import React, {MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {makeActive} from './helpers';

export interface HorizontalSliderProps {
    isKeepFirst?: boolean,
    isKeepLast?: boolean,
    isDraggable?: boolean,
    isClickable?: boolean
    activeElementIndex?: number
}

const HorizontalSlider: React.FC<HorizontalSliderProps> =
    ({
         children,
         isKeepFirst,
         isKeepLast,
         isDraggable = true,
         isClickable = true,
         activeElementIndex = 1
     }) => {
        const ref = useRef(null);
        const [isDown, setIsDown] = useState(false);
        const [isDrag, setIsDrag] = useState(false);

        const clickToCentralElement = useCallback((eventTarget: HTMLElement, target: HTMLElement) => {
            const halfOfWindowWidth = window.innerWidth / 2;
            const halfOfEventTargetWidth = eventTarget.offsetWidth / 2;

            if (isKeepFirst && eventTarget === target.children[0]) return;
            if (isKeepLast && eventTarget === target.children[target.children.length - 1]) return;

            makeActive(target, eventTarget);
            target.scrollTo({
                left: eventTarget.offsetLeft - halfOfWindowWidth + halfOfEventTargetWidth,
                behavior: 'smooth'
            });
        }, [isKeepFirst, isKeepLast]);

        useEffect(() => {
            const target = ref.current! as HTMLElement;
            clickToCentralElement(target.children[activeElementIndex] as HTMLElement, target);
        }, [activeElementIndex, clickToCentralElement]);

        const dragToCentralElement = (target: HTMLElement) => {
            const halfOfWindowWidth = window.innerWidth / 2;
            let i = 0;
            let centralChildren = target.children[0] as HTMLElement;
            while (target.scrollLeft > centralChildren.offsetLeft - centralChildren.offsetWidth * 0.3) {
                i++;
                centralChildren = target.children[i] as HTMLElement;
            }
            makeActive(target, centralChildren);
            target.scrollTo({
                left: centralChildren.offsetLeft - halfOfWindowWidth + centralChildren.offsetWidth / 2,
                behavior: 'smooth'
            });
        };


        const mouseDownHandler = (event: MouseEvent) => {
            event.preventDefault();
            setIsDown(true);
        };

        const mouseMoveHandler = (event: MouseEvent) => {
            if (!isDown || Math.abs(event.movementX) < 5 || !isDraggable) return;

            if (!isDrag) setIsDrag(true);

            const target = ref.current! as HTMLElement;
            target.scrollTo({left: target.scrollLeft - event.movementX});
        };

        const mouseUpHandler = (event: MouseEvent) => {
            setIsDown(false);
            const target = ref.current! as HTMLElement;

            if (isDraggable && isDrag) {
                dragToCentralElement(target);
                setIsDrag(false);
                return;
            }
            if (isClickable) clickToCentralElement(event.target as HTMLElement, target);
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