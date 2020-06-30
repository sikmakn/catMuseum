import '../../wdyr';

import './animalsInDanger.scss';
import React, {useEffect, useRef} from "react";
import ArrowLink from "../../components/ArrowLink";
import Rellax from 'rellax';
import {COLORS, PATHS} from "../../constants";

const AnimalsInDangerous: React.FC = () => {
    const allBlockRef = useRef(null);
    const whiteBlockRef = useRef(null);
    let isScroll = false;

    useEffect(() => {
        new Rellax('.animals-in-dangerous-parallax', {
            center: true,
            speed: -6
        });
    }, []);

    function scroll(to: number, isUp = true, speed = 20) {
        if (isUp) {
            if (window.pageYOffset < to) {
                window.scrollTo({left: 0, top: window.pageYOffset + speed});
                setTimeout(() => scroll(to, true, speed), 10)
            } else {
                window.scrollTo({left: 0, top: to});
                isScroll = false;
            }
        } else {
            if (window.pageYOffset > to) {
                window.scrollTo({left: 0, top: window.pageYOffset - speed});
                setTimeout(() => scroll(to, false, speed), 10)
            } else {
                window.scrollTo({left: 0, top: to});
                isScroll = false;
            }
        }
    }

    useEffect(() => {
        function scrollToDown(event: WheelEvent) {
            const allBlock = allBlockRef.current! as HTMLElement;
            const whiteBlock = whiteBlockRef.current! as HTMLElement;
            if (window.pageYOffset + whiteBlock.offsetHeight >= allBlock.offsetTop
                && window.pageYOffset < allBlock.offsetTop) {
                if (isScroll) return event.preventDefault();
                isScroll = true;
                scroll(allBlock.offsetTop)
            } else if (window.pageYOffset < whiteBlock.offsetTop && window.pageYOffset > allBlock.offsetTop) {
                if (isScroll) return event.preventDefault();
                isScroll = true;
                scroll(whiteBlock.offsetTop);
            }
        }

        function scrollToTop(event: WheelEvent) {
            const allBlock = allBlockRef.current! as HTMLElement;
            const whiteBlock = whiteBlockRef.current! as HTMLElement;
            if (window.pageYOffset < whiteBlock.offsetTop && window.pageYOffset > allBlock.offsetTop) {
                if (isScroll) return event.preventDefault();
                isScroll = true;
                scroll(allBlock.offsetTop, false);
            } else if (window.pageYOffset < allBlock.offsetTop + allBlock.offsetHeight && window.pageYOffset > allBlock.offsetTop) {
                if (isScroll) return event.preventDefault();
                isScroll = true;
                scroll(whiteBlock.offsetTop, false);
            }
        }

        document.onwheel = (event: WheelEvent) => {
            if (allBlockRef.current == null) return document.onwheel = null;

            const allBlock = allBlockRef.current! as HTMLElement;

            if (window.scrollY + allBlock.offsetHeight <= allBlock.offsetTop) return;

            if (event.deltaY > 0) return scrollToDown(event);

            scrollToTop(event);
        };
    }, []);

    return (
        <div className="animals-in-dangerous" ref={allBlockRef}>
            <div className="animals-in-dangerous-dark-container">
                <div className="animal-in-dangers-content">
                    <div>
                        <h2>Животные в беде</h2>
                        <p>Каждый день десятки животных становятся бездомными: кого-то выбросили, кто-то потерялся,
                            кто-то
                            был рожден на улице. У каждого из них своя история. К сожалению, далеко не каждому
                            посчастливится встретить на своем пути волонтеров.</p>
                    </div>
                </div>
                <div className="animals-in-dangerous-parallax sad"/>
            </div>
            <div ref={whiteBlockRef} className="animals-in-dangerous-light-container">
                <div className="animal-in-dangers-content">
                    <div>
                        <h2>Вы можете помочь!</h2>
                        <p>Вдохновляйте своим примером. Исследования показывают, что люди куда охотнее занимаются
                            благотворительностью, когда видят пример близких. Волонтерские организации будут рады любой
                            поддержке. Вместе мы сможем защитить право животных на жизнь и подарить им новый дом. </p>
                        <div className="link">
                            <ArrowLink color={COLORS.BLACK} linkText={'Узнать, чем можно помочь'} path={PATHS.HELP}/>
                        </div>
                    </div>
                </div>
                <div className="animals-in-dangerous-parallax happy"/>
            </div>
        </div>

    );
};

export default AnimalsInDangerous;