export const LOGIN = 'USER/LOGIN';
export const LOGOUT = 'USER/LOGOUT';

const initialState = {
  userId: '',
  userName: '',
  token: '',
};

export const loginState = (userState: any) => ({ type: LOGIN, userState });

export const UserStore = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {

      }
    case LOGOUT:
      return {

      }
    default:
      return state;
  }
}