import '../../wdyr';

import './exhibitionSlider.scss';
import React, {useState} from "react";
import ImageInfo from "../ImageInfo";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export interface ExhibitionData {
    type: 'выставка' | 'конкурс'
    status: 'текущая' | 'предстоящая'
    title: string
    commonInfo: string
    fullInfo: string
    imageUrl: string
    dateFrom: Date
    dateTo: Date
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
                        <span> <span
                            className="type">{data[selectedData].type}</span> - {data[selectedData].status}</span>
                        <h3>{data[selectedData].title}</h3>
                        <p>{data[selectedData].commonInfo}</p>

                        <div className="arrows">
                            <img src="arrow-grey-left.svg" alt="предыдущий" onClick={prevHandler}/>
                            <span><span className="active">{selectedData + 1}</span>/{data.length}</span>
                            <img src="arrow-grey-right.svg" alt="следующий" onClick={nextHandler}/>
                        </div>
                    </div>
                    <ImageInfo info={data[selectedData].fullInfo} imageUrl={data[selectedData].imageUrl}/>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
        ;
};

export default ExhibitionSlider;