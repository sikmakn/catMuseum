import '../../wdyr';

import './animatedInfoCard.scss';
import React from 'react';

export interface AnimatedInfoCardProps {
    header: string,
    info: string,
    imageUrl: string,
    color: string
}

const AnimatedInfoCard: React.FC<AnimatedInfoCardProps> =
    ({header, info, imageUrl, color}) => (
        <div className="animated-info-card">
            <img src={imageUrl} alt={header}/>
            <p style={{color}}>{header}</p>
            <span>{info}</span>
        </div>
    );

export default AnimatedInfoCard;
