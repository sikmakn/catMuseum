import '../../wdyr';

import './helpInfo.scss';
import React from "react";

export interface HelpInfoProps {
    content: JSX.Element
    backgroundUrl: string
}

const HelpInfo: React.FC<HelpInfoProps> = ({content, backgroundUrl}) => (
    <div
        style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        className="help-info-container"
    >
        <div className="content">
            <div className="information">
                {content}
            </div>
        </div>
    </div>
);

export default HelpInfo;