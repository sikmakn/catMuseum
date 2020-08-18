import '../../wdyr';

import './arrowLink.scss';
import React from 'react';

export interface ArrowLinkProps {
    color: string,
    linkText: string,
    path: string
}

const ArrowLink: React.FC<ArrowLinkProps> = ({color, path, linkText}) => (
    <div className="link-container">
        <a href={path}>
            <span>{linkText}</span>
            <div style={{background: color}} className="arrow-square">
                <img src="arrow-white-right.svg" alt={linkText}/>
            </div>
        </a>
    </div>
);

export default ArrowLink;