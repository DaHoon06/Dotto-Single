import React from "react";
import { NavLink } from "react-router-dom";


export const Navigation = (props: any) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/'>try DOTTO</NavLink>
        </li>
        <li>
          <span>COMMUNITY</span>
        </li>
        {props.showMenu ?
          <li>
            <NavLink to='/board'>닷투 게시판</NavLink>
            <NavLink to='/board'>닷찾사 게시판</NavLink>
          </li>
          : ''}
        <li>
          <NavLink to='/feed'>Feed</NavLink>
        </li>
        <li>
          <span>고객지원</span>
        </li>
        {props.showMenu ?
          <li>
            <NavLink to='/board'>FAQ</NavLink>
            <NavLink to='/board'>공지사항</NavLink>
          </li>
          : ''}
      </ul>
    </nav>
  );
}