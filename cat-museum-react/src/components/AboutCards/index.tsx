import '../../wdyr';

import './aboutCard.scss';
import React from 'react';
import AnimatedInfoCard from '../AnimatedInfoCard';

const AboutCards: React.FC = () => {
    const data = [
        {
            header: 'Дружелюбные коты и кошки',
            info: 'Пушистые сотрудники музея привыкли вести социальную жизнь и охотно идут на контакт с посетителями.',
            imageUrl: 'collar-logo.svg',
            color: '#0091FE'
        },
        {
            header: 'Все котики здоровы',
            info: 'Коты, обитающие в Музее, привиты и регулярно проходят ветеринарные осмотры.',
            imageUrl: 'health-logo.svg',
            color: '#FF615C'
        },
        {
            header: 'Котокафе',
            info: 'В музее работает кафе. Каждый посетитель получает в подарок напитки и сладости.',
            imageUrl: 'cafe-logo.svg',
            color: '#53CC60'
        },
        {
            header: 'Выставки и конкурсы',
            info: 'Музей предлагает ознакомиться с произведениями искусства на кошачью тематику, ' +
                'а также добавить к коллекции вашу работу.',
            imageUrl: 'art-logo.svg',
            color: '#FFC72C'
        },
        {
            header: 'Благотворительная помощь',
            info: 'Музей поддерживает организации помощи бездомным животным и регулярно перечисляет ' +
                'им часть от выручки от продажи билетов.',
            imageUrl: 'help-logo.svg',
            color: '#F89ABA'
        }
    ];

    return (
        <div className="icons-info-container">
            {data.map(({header, info, imageUrl, color}, i) =>
                (<AnimatedInfoCard header={header} info={info} imageUrl={imageUrl} color={color} key={i}/>))}
        </div>
    )
};

export default AboutCards;