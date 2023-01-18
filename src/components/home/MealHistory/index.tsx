import React, { useState, useEffect } from "react";
import axios from "../../../ultil/axios";
import "./index.scss";

interface MealItemHistory {
  id: number,
  date: string,
  type: string,
  image: string
}

const mockData = [
  {
    id: 1,
    date: '05.21',
    type: 'Morning',
    image: '/img/m01.jpg'
  },
  {
    id: 2,
    date: '05.21',
    type: 'Lunch',
    image: '/img/l03.jpg'
  },
  {
    id: 3,
    date: '05.21',
    type: 'Dinner',
    image: '/img/d01.jpg'
  },
  {
    id: 4,
    date: '05.21',
    type: 'Snack',
    image: '/img/l01.jpg'
  },
  {
    id: 5,
    date: '05.21',
    type: 'Morning',
    image: '/img/m01.jpg'
  },
  {
    id: 6,
    date: '05.21',
    type: 'Lunch',
    image: '/img/l02.jpg'
  },
  {
    id: 7,
    date: '05.21',
    type: 'Dinner',
    image: '/img/d02.jpg'
  },
  {
    id: 8,
    date: '05.21',
    type: 'Snack',
    image: '/img/s01.jpg'
  }
];

const MealHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mealsData, setMealsData] = useState<MealItemHistory[]>([]);

  const getMealsData = () => {
    setIsLoading(true);
    axios.get('/test_api').then(res => {
      setIsLoading(false);
      setMealsData(mockData);
    }).catch(e => console.log(e));
  }

  const loadMore = () => {

  }

  useEffect(() => {
    getMealsData();
  }, []);

  return (
    <div className="meal-history">
      <div className="meal-history-inner">
        {isLoading && <p>...Loading</p>}
        {!isLoading && (
          <>
            {!mealsData.length && <p>No data!</p>}
            {mealsData.length && (
              <>
                <div className="d-flex flex-wrap">
                  {mealsData.map(item => (
                    <div className="meal-item" key={item.id}>
                      <img src={item.image} alt={item.type} />
                      <span className="meal-text">{item.date} {item.type}</span>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-primary btn-load-more" onClick={loadMore}>記録をもっと見る</button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
};

export default MealHistory;
