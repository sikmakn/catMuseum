import '../../wdyr';

import './helpNavigation.scss';
import React from "react";

export interface HelpNavigationProps {
    items:string[],
    selectedItemIndex:number
}

const HelpNavigation:React.FC<HelpNavigationProps> = ({items, selectedItemIndex}) =>{
  return (
      <div className="help-navigation-container">
      </div>
  );
};

export default HelpNavigation;