import React from "react";
import HomePresenter from "./HomePresenter";
import { customAxios } from "../../../lib/customAxios";

// markup 없이 데이터만 presnter에게 props 로 내림
const HomeContainer = async () => {
  /*#TODO
  *   3개의 게시물 불러오기
  * */
  const data = await customAxios.get('/api/getDottoLists');
  console.log(data);

  return (
    <HomePresenter />
  )
}

export default HomeContainer;