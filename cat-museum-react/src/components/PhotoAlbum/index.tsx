import '../../wdyr';

import './photoAlbum.scss';
import React, {useEffect, useState} from 'react';
import ModalImage from '../ModalImage';
import AOS from 'aos';
import isHorizontalImage from '../../helpers/isHorizontalImage';
import {ImageInfo} from '../../types';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {LazyLoadImage, ScrollPosition, trackWindowScroll} from 'react-lazy-load-image-component';

export interface PhotoAlbumProps {
    imagesInfo: ImageInfo[]
    scrollPosition: ScrollPosition
}

interface RelativeImages {
    imageInfo: ImageInfo
    absoluteIndex: number
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({imagesInfo, scrollPosition}) => {
        const urlsFirst: RelativeImages[] = [];
        const urlsSecond: RelativeImages[] = [];
        const urlsThird: RelativeImages[] = [];

        let number = 1;
        imagesInfo.forEach((imageInfo, absoluteIndex) => {
            if (number === 1) {
                urlsFirst.push({imageInfo, absoluteIndex});
            } else if (number === 2) {
                urlsSecond.push({imageInfo, absoluteIndex});
            } else {
                urlsThird.push({imageInfo, absoluteIndex});
            }
            number++;
            if (number > 3) number = 1;
        });

        const [modalIndex, setModalIndex] = useState(0);
        const [isShowModal, setIsShowModal] = useState(false);

        useEffect(() => {
            AOS.init();
        }, []);

        const onClickHandler = (index: number) => {
            setModalIndex(index);
            setIsShowModal(true);
        };

        const toggleModalHandler = () => setIsShowModal(false);

        const getImageColumn = (urls: RelativeImages[]) => (
            <div className="column">
                {urls.map(({imageInfo: {_id, photoId}, absoluteIndex}) => {
                    const url = `${process.env.REACT_APP_SERVER_HOST}/photo/${photoId}`;
                    let className = isHorizontalImage(url) ? 'horizontal' : 'vertical';
                    return (
                        <div data-aos="fade-up" className={className + ' image-container'} key={_id}>
                            <LazyLoadImage
                                className="scalable" alt="кот" effect="blur"
                                src={url}
                                onClick={onClickHandler.bind(null, absoluteIndex)}
                                scrollPosition={scrollPosition}/>
                        </div>
                    );
                })}
            </div>
        );

        return (<div className="photo-album-container">
                {isShowModal &&
                <ModalImage activeElementIndex={modalIndex} imageInfos={imagesInfo}
                            toggleModalHandler={toggleModalHandler}/>}
                {getImageColumn(urlsFirst)}
                {getImageColumn(urlsSecond)}
                {getImageColumn(urlsThird)}
            </div>
        );
    }
;

export default trackWindowScroll(PhotoAlbum);