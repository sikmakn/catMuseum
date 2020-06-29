import '../../wdyr';

import './animalsInDanger.scss';
import React, {useEffect, useRef} from "react";
import ArrowLink from "../../components/ArrowLink";
import Rellax from 'rellax';

const AnimalsInDangerous: React.FC = () => {
    const allBlockRef = useRef(null);
    const whiteBlockRef = useRef(null);

    useEffect(() => {
        new Rellax('.animals-in-dangerous-parallax', {
            center: true,
            speed: -6
        });
    }, []);

    function scrollToDown() {
        const allBlock = allBlockRef.current! as HTMLElement;
        const whiteBlock = whiteBlockRef.current! as HTMLElement;
        if (window.scrollY + whiteBlock.offsetHeight < whiteBlock.offsetTop) {
            window.scroll({
                left: 0,
                top: allBlock.offsetTop,
                behavior: 'smooth'
            });
        } else if (window.scrollY < whiteBlock.offsetTop) {
            window.scroll({
                left: 0,
                top: whiteBlock.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function scrollToTop() {
        const allBlock = allBlockRef.current! as HTMLElement;
        const whiteBlock = whiteBlockRef.current! as HTMLElement;
        if (window.scrollY < whiteBlock.offsetTop && window.scrollY > allBlock.offsetTop) {
            window.scroll({
                left: 0,
                top: allBlock.offsetTop,
                behavior: 'smooth'
            });
        }
        else if (window.scrollY < allBlock.offsetTop && window.scrollY+ whiteBlock.offsetHeight > allBlock.offsetTop ) {
            window.scroll({
                left: 0,
                top: whiteBlock.offsetTop - allBlock.offsetHeight,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        document.onwheel = (event) => {
            const allBlock = allBlockRef.current! as HTMLElement;

            if (window.scrollY + allBlock.offsetHeight <= allBlock.offsetTop) return;

            if (event.deltaY > 0) return scrollToDown();

            scrollToTop();
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
                <div className="animals-in-dangerous-parallax sad"></div>
            </div>
            <div ref={whiteBlockRef} className="animals-in-dangerous-light-container">
                <div className="animal-in-dangers-content">
                    <div>
                        <h2>Вы можете помочь!</h2>
                        <p>Вдохновляйте своим примером. Исследования показывают, что люди куда охотнее занимаются
                            благотворительностью, когда видят пример близких. Волонтерские организации будут рады любой
                            поддержке. Вместе мы сможем защитить право животных на жизнь и подарить им новый дом. </p>
                        <ArrowLink color={'#191919'} linkText={'Узнать, чем можно помочь'} path={'/help'}/>
                    </div>
                </div>
                <div className="animals-in-dangerous-parallax happy"></div>
            </div>
        </div>

    );
};

export default AnimalsInDangerous;