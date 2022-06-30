import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/icons/dotto.svg";

export const Top = (props: any) => {
  return (
    <article id='top-container'>
      <section>
        <NavLink to='/'>
          <img src={logo} alt='logo' id='logo' />
        </NavLink>
      </section>
      <section>
        <input type='text' placeholder='Search' />
        <button type='button'>검색</button>
        {props.isDataLists ?
          <section>
            <h6>최근 검색어</h6>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </section> :
          <section>
            <p>검색된 검색어가 존재하지 않습니다.</p>
          </section>
        }
      </section>
      {props.isDataLists ? '' :
        <section>
          <button type='button'>CLOSE</button>
        </section>
      }
    </article>
  )
}