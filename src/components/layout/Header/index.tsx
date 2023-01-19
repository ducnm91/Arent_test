import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from "./DropdownMenu";

import './index.scss';
const Header = () => (
  <div className="main-header">
    <div className="main-header-inner d-flex align-items-center justify-content-between">
      <a href="/"><img src="/img/logo.png" alt="" /></a>
      <div className="d-flex align-items-center">
        <ul className="header-nav list-unstyled d-flex mb-0 me-4">
          <li>
            <Link to="/home" className="d-flex align-items-center">
              <img src="/img/icons/icon_memo.png" alt="" className="me-2" />
              自分の記録
            </Link>
          </li>
          <li>
            <Link to="/my-record" className="d-flex align-items-center">
              <img src="/img/icons/icon_challenge.png" alt="" className="me-2" />
              チャレンジ
            </Link>
          </li>
          <li>
            <Link to="/health" className="d-flex align-items-center">
              <img src="/img/icons/icon_info.png" alt="" className="me-2" />
              お知らせ
            </Link>
          </li>
        </ul>
        <DropdownMenu />
      </div>
    </div>
  </div>
);

export default Header;
