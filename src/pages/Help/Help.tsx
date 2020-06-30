import '../../wdyr';

import './help.scss';
import React, {useEffect, useState} from 'react';
import Top from "../../pageParts/Top";
import HelpInfo, {HelpInfoProps} from "../../pageParts/HelpInfo";
import {COLORS, PATHS} from "../../constants";
import ArrowLink from "../../components/ArrowLink";
import HelpNavigation from "../../components/HelpNavigation";

const Help: React.FC = () => {
    const subPages: HelpInfoProps[] = [
        {
            backgroundUrl: 'homeless-back.jpg',
            content: (
                <>
                    <h2>Бездомные<br/> животные</h2>
                    <p>
                        Более 2.7 миллионов котов и собак погибают каждый год из-за того, что приюты переполнены. Лишь 1
                        из 10 котов найдет себе хозяина. Животные, проживающие в приютах, либо были выброшены хозяевами,
                        либо пойманы службой отлова.
                    </p>
                </>
            )
        },
        {
            backgroundUrl: 'museum-part.jpg',
            content: (
                <>
                    <h2>Вклад Музея</h2>
                    <p>
                        Сотрудники музея подбирают на улицах города бездомных котов и кошек. Большинство животных,
                        обитающих в музее, в прошлом бездомные. Многие из них находились в критическом состоянии, им
                        грозила неминуемая гибель. На данный момент музей насчитывает более 15 пушистых обитателей.
                    </p>
                </>
            )
        },
        {
            backgroundUrl: 'museum-life-back.jpg',
            content: (
                <>
                    <h2>Жизнь в Музее</h2>
                    <p>
                        После прохождения ветеринарного осмотра, вакцинации и прочих необходимых процедур, животные
                        устраиваются в музей. В дальнейшем посетители музея могут забрать к себе домой понравившегося
                        четвероногого друга, обязавшись надлежащим образом заботиться о нем.
                    </p>
                </>
            )
        },
        {
            backgroundUrl: 'museum-help.jpg',
            content: (
                <>
                    <h2>Как <span style={{color: COLORS.RED}}>я</span> могу помочь</h2>
                    <p>
                        Вы можете поучаствовать в спасении жизней множеством способов: начиная с пожертвований и
                        заканчивая личной помощью, например при транспортировке животных в клинику. Лучшей помощью,
                        однако, будет ваше внимание и желание рассказать другим о проблемах, которые испытывают братья
                        наши меньшие.
                    </p>
                    <ArrowLink color={COLORS.RED} linkText={'Поддержать музей'} path={PATHS.BUY}/>
                </>
            )
        },
        {
            backgroundUrl: 'thanks-back.jpg',
            content: (
                <>
                    <h2>Спасибо!</h2>
                    <p>
                        От всего сердца хочется поблагодарить всех тех, кто не остался равнодушным к чужой беде.
                        Переданный вами корм, отправленные вами денежные пожертвования, оказанная вами личная помощь
                        спасли и спасут множество жизней. Спасибо, что вы есть, друзья!
                    </p>
                </>
            )
        }
    ];
    const navigationItems = ['Бездомные животные', 'Вклад музея', 'Жизнь в музее', 'Чем я могу помочь?', 'Спасибо!'];

    const [selectedItem, setSelectedItem] = useState(0);
    // let scrollTop = 0;
    //
    //
    // useEffect(() => {
    //     document.onscroll = (event: Event) => {
    //         event.preventDefault();
    //         if (Math.abs(window.scrollY - scrollTop) < 10) return;
    //
    //         let newSelected = selectedItem;
    //         if (window.scrollY > scrollTop && selectedItem < navigationItems.length) {
    //             newSelected++;
    //         } else if (selectedItem > 0) {
    //             newSelected--;
    //         }
    //
    //         window.scrollTo({top: newSelected * window.innerHeight, behavior: 'smooth'});
    //         setSelectedItem(newSelected);
    //         scrollTop = window.scrollY;
    //     };
    //
    //     return () => {
    //         document.onscroll = null;
    //     }
    // }, [selectedItem]);


    return (
        <>
            <Top backgroundUrl={'help-top.jpg'} darken={0.3} header={'Долгий путь домой'}/>
            <HelpNavigation items={navigationItems} selectedItemIndex={selectedItem - 1}/>
            {subPages.map(({backgroundUrl, content}) => (
                <HelpInfo key={backgroundUrl} content={content} backgroundUrl={backgroundUrl}/>))}
        </>
    );
};

export default Help;