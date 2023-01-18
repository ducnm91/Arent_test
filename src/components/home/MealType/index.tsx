import React from "react";
import "./index.scss";

const meals = [
  {
    id: 1,
    icon: '/img/icons/icon_knife.png',
    name: 'Morning'
  },
  {
    id: 2,
    icon: '/img/icons/icon_knife.png',
    name: 'Lunch'
  },
  {
    id: 3,
    icon: '/img/icons/icon_knife.png',
    name: 'Dinner'
  },
  {
    id: 4,
    icon: '/img/icons/icon_cup.png',
    name: 'Snack'
  }
]

const MealType = () => {
  return (
    <div className="meal-type d-flex justify-content-center">
      {meals.map(item => (
        <div className="meal-item d-flex flex-column align-items-center justify-content-center" key={item.id}>
          <img src={item.icon} alt={item.name} width={56} height={56} />
          <span className="meal-name">{item.name}</span>
        </div>
      ))}
    </div>
  )
};

export default MealType;
