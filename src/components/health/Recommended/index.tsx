import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const suggestions = [
  {
    id: 1,
    title: 'RECOMMENDED COLUMN',
    text: 'オススメ',
  },
  {
    id: 2,
    title: 'RECOMMENDED DIET',
    text: 'ダイエット',
  },
  {
    id: 3,
    title: 'RECOMMENDED BEAUTY',
    text: '美容',
  },
  {
    id: 4,
    title: 'RECOMMENDED HEALTH',
    text: '健康',
  },
];

const Recommended = () => {
  return (
    <div className="recommended">
      <div className="my-container">
        <div className="suggestion-list">
          <div className="d-flex flex-wrap">
            {suggestions.map(item => (
              <div className="suggestion-item" key={item.id}>
                <div className="suggestion-item-inner text-center">
                  <h3 className="suggestion-item-title mb-3">
                    <Link to="/#">{item.title}</Link>
                  </h3>
                  <span className="suggestion-item-text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Recommended;
