import './Login.style.scss';
import google from '../assets/images/icons/login/Google.png'
import kakao from '../assets/images/icons/login/kakao.png';
import logo from '../assets/images/icons/dotto.svg';
import login_line from '../assets/images/icons/login/login_line.svg';
import { useState } from "react";
import { customAxios } from "../lib/customAxios";
import axios from "axios";

export const Login = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
  });
  const { id, password } = inputValue;

  const onChangeHandler = async (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  };

  const login = async () => {

    const { data } = await customAxios.post('/user/login', inputValue);
    console.log(data);
  }

  return (
    <article id='login-container'>

      <article id="logo-wrapper" className='login-items'>
        <img src={logo} alt='logo' id='logo' />
      </article>
      <article className='login-items'>
        <form>
          <section className='login-button-wrapper'>
            <input name='id' type='text' className='login-input' placeholder='아이디' onChange={onChangeHandler} value={id} />
          </section>
          <section className='login-button-wrapper'>
            <input name='password' type='password' autoComplete='false' className='login-input' placeholder='비밀번호' onChange={onChangeHandler} value={password}  />
          </section>
          <p id='warning-msg'>ERROR MSG</p>
          <section id='id-save-wrapper'>
            <input type='checkbox' id='save-id' />
            <label>아이디 저장</label>
          </section>
          <section className='login-button-wrapper'>
            <button type='submit' id='login-button' onClick={login}>로그인</button>
          </section>
        </form>
      </article>

      <article className='login-items'>
        <img src={login_line} alt='login-line' />
        <article id='social-login-button-container'>
          <section className='login-button-wrapper'>
            <button id='google-button'>
              <img src={google} alt='google' />
            </button>
          </section>

          <section className='login-button-wrapper'>
            <button id='kakao-button'>
              <img src={kakao} alt='kakao' />
            </button>
          </section>
        </article>
      </article>

      <article id='login-sub-container'>
        <section id="password-find">
          비밀번호 찾기
        </section>
        <section id="line-division">|</section>
        <section id='join'>
          회원가입 하기
        </section>
      </article>


    </article>
  );
};