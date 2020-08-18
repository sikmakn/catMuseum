import '../../wdyr';

import './animalsInDanger.scss';
import React, {useEffect, useRef} from "react";
import ArrowLink from "../../components/ArrowLink";
import Rellax from 'rellax';
import {COLORS, PATHS} from "../../constants";
import scroll from "../../helpers/scroll";


const AnimalsInDangerous: React.FC = () => {
    const allBlockRef = useRef(null);
    const whiteBlockRef = useRef(null);

    useEffect(() => {
        new Rellax('.animals-in-dangerous-parallax', {
            center: true,
            speed: -6
        });
    }, []);

    useEffect(() => {

        async function scrollToDown() {
            const allBlock = allBlockRef.current! as HTMLElement;
            const whiteBlock = whiteBlockRef.current! as HTMLElement;
            if (window.pageYOffset + whiteBlock.offsetHeight >= allBlock.offsetTop
                && window.pageYOffset < allBlock.offsetTop) {
                await scroll(allBlock.offsetTop, onWheelHandler);
            } else if (window.pageYOffset < whiteBlock.offsetTop && window.pageYOffset > allBlock.offsetTop) {
                await scroll(whiteBlock.offsetTop, onWheelHandler);
            }
        }

        async function scrollToTop() {
            const allBlock = allBlockRef.current! as HTMLElement;
            const whiteBlock = whiteBlockRef.current! as HTMLElement;
            if (window.pageYOffset < whiteBlock.offsetTop && window.pageYOffset > allBlock.offsetTop) {
                await scroll(allBlock.offsetTop, onWheelHandler, false);
            } else if (window.pageYOffset < allBlock.offsetTop + allBlock.offsetHeight
                && window.pageYOffset > allBlock.offsetTop) {
                await scroll(whiteBlock.offsetTop, onWheelHandler, false);
            }
        }

        function onWheelHandler(event: Event): any {
            const wheelEvent = event as WheelEvent;
            if (allBlockRef.current == null) return document.removeEventListener('wheel', onWheelHandler);

            const allBlock = allBlockRef.current! as HTMLElement;

            if (window.scrollY + allBlock.offsetHeight <= allBlock.offsetTop) return;

            if (wheelEvent.deltaY > 0) return scrollToDown();
            scrollToTop();
        }

        document.addEventListener('wheel', onWheelHandler);
        return () => {
            document.removeEventListener('wheel', onWheelHandler);
        }
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