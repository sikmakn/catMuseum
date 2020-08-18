import '../../wdyr';

import './loader.scss';
import React from 'react';

export interface LoaderParams {
    color: string
}

const Loader: React.FC<LoaderParams> = ({color}) => (
    <div className="loader-container">
        <div className="lds-ring" style={{borderColor: `${color} transparent transparent transparent`}}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
);

export default Loader;