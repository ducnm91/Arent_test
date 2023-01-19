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

const MyDiary = () => {
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
    <div className="my-diary">
      <div className="my-container">
        {isLoading && <p>...Loading</p>}
        {!isLoading && (
          <>
            {!mealsData.length && <p>No data!</p>}
            {mealsData.length && (
              <>
                <div className="list-item d-flex flex-wrap">
                  {mealsData.map(item => (
                    <div className="item" key={item.id}>
                      <p className="item-date mb-2">
                        2021.05.21<br />23:25
                      </p>
                      <h3 className="item-title">私の日記の記録が一部表示されます。</h3>
                      <p className="item-text">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                      </p>
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

export default MyDiary;
