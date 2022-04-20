import React from "react";
import './menu.scss';
import food1 from "../../assets/img/food1.jpg";
import food2 from "../../assets/img/food2.jpg";
import food3 from "../../assets/img/food3.jpg";

export const Menu = () => {
  return(
    <div className='menu' id="menu">
      <div className='menu__title'>
        <h2>Menu</h2>
      </div>
      <div className='menu__list'>
        <div className="item">
          <img src={food1} width="300px" alt=""/>
          <h5>Mixed Rice</h5>
        </div>
        <div className="item">
          <img src={food2} width="300px" alt=""/>
          <h5>Mixed Rice</h5>
        </div>
        <div className="item">
          <img src={food3} width="300px" alt=""/>
          <h5>Mixed Rice</h5>
        </div>
        <div className="item">
          <img src={food2} width="300px" alt=""/>
          <h5>Mixed Rice</h5>
        </div>
      </div>
    </div>
  );
};