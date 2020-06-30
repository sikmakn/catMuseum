import '../../wdyr';

import './modalImage.scss';
import React, {MouseEvent} from "react";
import HorizontalSlider from "../HorizontalSlider";
import isHorizontalImage from "../../helpers/isHorizontalImage";

export interface ModalImageProps {
    urls: string[],
    toggleModalHandler: () => void,
    activeElementIndex: number
}

const ModalImage: React.FC<ModalImageProps> = ({urls, toggleModalHandler, activeElementIndex}) => {
    const modalClickHandler = (event: MouseEvent) => {
        const target = event.target;
        if (!(target instanceof HTMLImageElement)) toggleModalHandler();
    };

    return (
        <div className="modal-image-background" onClick={modalClickHandler}>
            <HorizontalSlider activeElementIndex={activeElementIndex} isDraggable={false}>
                {urls.map(url => {
                    let className = isHorizontalImage(url) ? 'horizontal' : 'vertical';
                    return (<img className={'modal-image ' + className} src={url} alt="кот"/>)
                })}
            </HorizontalSlider>
        </div>
    );
};

export default ModalImage;