import '../../wdyr';

import './helpInfo.scss';
import React from "react";

export interface HelpInfoProps {
    content: JSX.Element
    backgroundUrl: string
}

const HelpInfo: React.FC<HelpInfoProps> = ({ content, backgroundUrl}) => (
    <div style={{backgroundImage: `url(${backgroundUrl})`}} className="help-info-container">
        <div className="content">
            <div className="information">
                {content}
            </div>
        </div>
    </div>
);

export default HelpInfo;