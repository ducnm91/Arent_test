import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../ultil/axios";
import "./index.scss";

interface PostItemType {
  id: number,
  date: string,
  title: string,
  image: string,
  tags: string[]
}

const mockDataPost = [
  {
    id: 1,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-1.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 2,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-2.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 3,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-3.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 4,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-4.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 5,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-5.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 6,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-6.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 7,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-7.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
  {
    id: 8,
    date: '2021.05.17   23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    image: '/img/column-8.jpg',
    tags: ["魚料理", "和食", "DHA"]
  },
];

const Post = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postsData, setPostsData] = useState<PostItemType[]>([]);

  const getPostsData = () => {
    setIsLoading(true);
    axios.get('/test_api').then(res => {
      setIsLoading(false);
      setPostsData(mockDataPost);
    }).catch(e => console.log(e));
  }

  const loadMore = () => {

  }

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="post">
      <div className="my-container">
        <div className="post-inner">        
          {isLoading && <p>...Loading</p>}
          {!isLoading && (
            <>
              {!postsData.length && <p>No data!</p>}
              {postsData.length && (
                <div className="post-list">
                  <div className="d-flex flex-wrap">
                    {postsData.map(item => (
                      <div className="post-item" key={item.id}>
                        <div className="post-item-inner">
                          <Link to="/#" className="post-thumbnail mb-2">
                            <img src={item.image} alt={item.title} />
                            <span className="post-date">{item.date}</span>
                          </Link>
                          <h3 className="post-title mb-0">
                            <Link to="/#">{item.title}</Link>
                          </h3>
                          {item.tags.length && (
                            <div className="post-tags">
                              {item.tags.map(item => (
                                <Link to="/#" className="post-tag">
                                  #{item}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary btn-load-more" onClick={loadMore}>記録をもっと見る</button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
};

export default Post;
