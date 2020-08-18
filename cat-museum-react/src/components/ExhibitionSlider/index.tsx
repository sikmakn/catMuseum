import '../../wdyr';

import './exhibitionSlider.scss';
import React, {useState} from 'react';
import ImageInfo from '../ImageInfo';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {getFullFormattedDate, getShortFormattedDate, getStatus} from './helpers';

export interface ExhibitionData {
    type: 'exhibition' | 'competition'
    status: 'now' | 'future'
    header: string
    shortDescription: string
    fullDescription: string
    photoId: string
    from: Date
    to: Date
    _id: string
}

export interface ExhibitionSliderProps {
    data: ExhibitionData[]
}

const ExhibitionSlider: React.FC<ExhibitionSliderProps> = ({data}) => {
    const [selectedData, setSelectedData] = useState(0);

    const prevHandler = () => {
        if (selectedData === 0) return;
        setSelectedData(selectedData - 1);
    };

    const nextHandler = () => {
        if (selectedData === data.length - 1) return;
        setSelectedData(selectedData + 1);
    };

    return (
        <TransitionGroup style={{position: 'relative'}}>
            <CSSTransition
                key={selectedData}
                timeout={1000}
                classNames="exhibition-anim"
            >
                <div className="exhibition-slider-container">
                    <div className="info-container">
                        <span>
                            <span className="type">
                                {data[selectedData].type === 'exhibition' ? 'конкурс' : 'выставка'}
                            </span>
                            &nbsp; - &nbsp;
                            {getStatus(data[selectedData].type, data[selectedData].status)}
                        </span>
                        <span>
                            {getShortFormattedDate(data[selectedData].from)}
                            &nbsp; - &nbsp;
                            {getFullFormattedDate(data[selectedData].to)}
                        </span>
                        <h3>{data[selectedData].header}</h3>
                        <p>{data[selectedData].shortDescription}</p>

                        <div className="arrows">
                            <img src="arrow-grey-left.svg" alt="предыдущий" onClick={prevHandler}/>
                            <span>
                                <span className="active">{selectedData + 1} / </span>
                                {data.length}
                            </span>
                            <img src="arrow-grey-right.svg" alt="следующий" onClick={nextHandler}/>
                        </div>
                    </div>
                    <ImageInfo
                        info={data[selectedData].fullDescription}
                        imageUrl={`${process.env.REACT_APP_SERVER_HOST}/photo/${data[selectedData].photoId}`}
                    />
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default ExhibitionSlider;