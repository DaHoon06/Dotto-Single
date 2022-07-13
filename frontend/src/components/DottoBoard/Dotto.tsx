import React from "react";
import './Dotto.style.scss';
export interface IDotto {
  limit: number
}

export const Dotto = (props: IDotto) => {
  return(
    <article id='dotto-board-container'>

      <article className='dotto-card-container'>
        <figure className='dotto-img-wrapper'>
          이미지
        </figure>
        <figcaption>
          tattoist_06
        </figcaption>
        <article className='dotto-item-list-container'>
          <section>
            반짝이와 패턴 (도안 수정 가능)
          </section>
          <section>
            <h1>5만원</h1>
            <h2>10만원</h2>
            <h1>50%</h1>
          </section>
          <section>
            <span className='tags'>서울 홍대</span>
            <span className='tags'>라인워크</span>
            <span className='tags'>미니타투</span>
          </section>
        </article>
      </article>

    </article>
  );
}