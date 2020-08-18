import '../../wdyr';

import './helpNavigation.scss';
import React, {Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';

export interface HelpNavigationProps {
    items: string[],
    selectedItemIndex: number
    setSelectedItemIndex: (n: number) => any
    isShow: boolean
}

const HelpNavigation: React.FC<HelpNavigationProps> =
    ({
         items,
         selectedItemIndex,
         setSelectedItemIndex,
         isShow
     }) => {

        function getCityImg() {
            return selectedItemIndex === 0
                ? <img src="yellow-city-logo.svg" alt="город"/>
                : <img src="white-city-logo.svg" alt="город"/>;
        }

        function getBullets() {
            return items.map((item, i) => {
                let stickUrl = 'white-stick.svg';
                let radioUrl = 'white-radio.svg';
                let spanClassName = '';
                let imageClassname = '';
                if (i === selectedItemIndex) {
                    stickUrl = 'yellow-stick.svg';
                    radioUrl = 'yellow-radio.svg';
                    spanClassName = 'yellow yellow-image';
                    imageClassname = 'make-yellow';
                }
                if (i - 1 === selectedItemIndex) stickUrl = "yellow-stick.svg";

                return (
                    <Fragment key={i}>
                        <div className={'stick'}>
                            <img src={stickUrl} alt=""/>
                        </div>
                        <div onClick={setSelectedItemIndex.bind(null, i)} className="radio">
                            <span className={spanClassName}>{item}</span>
                            <img className={imageClassname} src={radioUrl} alt="item"/>
                        </div>
                    </Fragment>
                );
            })
        }

        function getHomeImg() {
            const stick = selectedItemIndex === (items.length - 1)
                ? <div key="last-stick" className="stick make-yellow">
                    <img src="yellow-stick.svg" alt=""/>
                </div>
                : <div key="last-stick" className="stick"><img src="white-stick.svg" alt=""/></div>;

            const homeImage = selectedItemIndex === (items.length - 1)
                ? <img src="yellow-house-logo.svg" alt="дом"/>
                : <img src="white-house-logo.svg" alt="дом"/>;
            return <>
                {stick}
                {homeImage}
            </>
        }

        return (
            <CSSTransition
                in={isShow}
                timeout={{enter: 1000, exit: 500}}
                classNames="help-navigation"
                unmountOnExit
            >
                <div className="help-navigation-container">
                    {getCityImg()}
                    {getBullets()}
                    {getHomeImg()}
                </div>
            </CSSTransition>
        );
    };

export default HelpNavigation;