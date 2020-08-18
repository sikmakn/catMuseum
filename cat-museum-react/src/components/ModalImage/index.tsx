import '../../wdyr';

import './modalImage.scss';
import React, {MouseEvent} from "react";
import HorizontalSlider from "../HorizontalSlider";
import isHorizontalImage from "../../helpers/isHorizontalImage";
import {ImageInfo} from "../../types";

export interface ModalImageProps {
    imageInfos: ImageInfo[],
    toggleModalHandler: () => void,
    activeElementIndex: number
}

const ModalImage: React.FC<ModalImageProps> = ({imageInfos, toggleModalHandler, activeElementIndex}) => {
    const modalClickHandler = (event: MouseEvent) => {
        if (!(event.target instanceof HTMLImageElement)) toggleModalHandler();
    };

    return (
        <div className="modal-image-background" onClick={modalClickHandler}>
            <HorizontalSlider activeElementIndex={activeElementIndex} isDraggable={false}>
                {imageInfos.map(({_id, photoId}) => {
                    const url = `${process.env.REACT_APP_SERVER_HOST}/photo/${photoId}`;
                    let className = isHorizontalImage(url) ? 'horizontal' : 'vertical';
                    return (<img key={_id} className={'modal-image ' + className} src={url} alt="кот"/>)
                })}
            </HorizontalSlider>
        </div>
    );
};

export default ModalImage;