import '../../wdyr';

import './photoAlbum.scss';
import React, {useEffect, useState} from "react";
import ModalImage from "../ModalImage";
import AOS from 'aos';
import isHorizontalImage from "../../helpers/isHorizontalImage";

export interface PhotoAlbumProps {
    urls: string[]
}

interface RelativeImages {
    url: string
    absoluteIndex: number
}

//todo подгрузка при скролле
const PhotoAlbum: React.FC<PhotoAlbumProps> = ({urls}) => {
        const [modalIndex, setModalIndex] = useState(0);
        const [isShowModal, setIsShowModal] = useState(false);

        useEffect(() => {
            AOS.init()
        }, []);

        const urlsFirst: RelativeImages[] = [];
        const urlsSecond: RelativeImages[] = [];
        const urlsThird: RelativeImages[] = [];

        let number = 0;
        urls.forEach((url, absoluteIndex) => {
            if (number === 1) {
                urlsFirst.push({url, absoluteIndex});
            } else if (number === 2) {
                urlsSecond.push({url, absoluteIndex});
            } else {
                urlsThird.push({url, absoluteIndex});
            }
            number++;
            if (number > 3) number = 1;
        });

        const onClickHandler = (index: number) => {
            setModalIndex(index);
            setIsShowModal(true);
        };

        const toggleModalHandler = () => setIsShowModal(false);

        const getImageColumn = (urls: RelativeImages[]) => (
            <div className="column">
                {urls.map(({url, absoluteIndex}) => {
                    let className = isHorizontalImage(url) ? 'horizontal' : 'vertical';
                    return (
                        <div data-aos="fade-up" className={className + ' image-container'} key={absoluteIndex}>
                            <img src={url} className="scalable" alt="кот"
                                 onClick={onClickHandler.bind(null, absoluteIndex)}/>
                        </div>
                    );
                })}
            </div>
        );

        return (<div className="photo-album-container">
                {isShowModal &&
                <ModalImage activeElementIndex={modalIndex} urls={urls} toggleModalHandler={toggleModalHandler}/>}
                {getImageColumn(urlsFirst)}
                {getImageColumn(urlsSecond)}
                {getImageColumn(urlsThird)}
            </div>
        );
    }
;

export default PhotoAlbum;