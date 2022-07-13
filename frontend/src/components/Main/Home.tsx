import React from "react";
import './Home.style.scss';
import { Dotto } from "../DottoBoard/Dotto";

export const Home = (props: any) => {
  const limit = 8;

  return (
    <main id='home-container'>
      <article id='home-items-container'>

        <article>
          <section className='home-top-items-menu'>
            <div>
              <h1>닷투게시판</h1>
              <h2>타투이스트가 올린 다양한 작품 중 내 취향을 찾아보세요!</h2>
            </div>
            <div>
              <h6>전체보기</h6>
              <h6>전체보기 링크</h6>
            </div>
          </section>
          <Dotto limit={limit}/>
        </article>


        <article>
          <section className='home-top-items-menu'>
            <div>
              <h1>닷투게시판</h1>
              <h6>타투이스트가 올린 다양한 작품 중 내 취향을 찾아보세요!</h6>
            </div>
            <div>
              <h2>전체보기</h2>
              <h6>전체보기 링크</h6>
            </div>
          </section>
        </article>

        <article>
          <section className='home-top-items-menu'>
            <div>
              <h1>닷투게시판</h1>
              <h6>타투이스트가 올린 다양한 작품 중 내 취향을 찾아보세요!</h6>
            </div>
            <div>
              <h2>전체보기</h2>
              <h6>전체보기 링크</h6>
            </div>
          </section>
        </article>


      </article>
    </main>
  )
}