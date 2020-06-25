import '../../wdyr';

import './yellowScroll.scss';
import React from "react";
import PhotoGallery from "../../components/PhotoGallery";

const YellowScroll: React.FC = () => (
    <div className="yellow-scroll">
        <div className="yellow-rect"></div>
        <PhotoGallery/>
    </div>
);

export default YellowScroll;