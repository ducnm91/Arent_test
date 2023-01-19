import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import './index.scss';
const DropdownMenu = () => (
  <Dropdown className="main-dropdown-menu">
    <Dropdown.Toggle variant="secondary" id="dropdown-main-menu">
      <img src="/img/icons/icon_menu.png" className="icon-open" alt="" />
      <img src="/img/icons/icon_close.png" className="icon-close" alt="" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/">自分の記録</Dropdown.Item>
      <Dropdown.Item href="/">体重グラフ</Dropdown.Item>
      <Dropdown.Item href="/">目標</Dropdown.Item>
      <Dropdown.Item href="/">選択中のコース</Dropdown.Item>
      <Dropdown.Item href="/">コラム一覧</Dropdown.Item>
      <Dropdown.Item href="/">設定</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownMenu;
