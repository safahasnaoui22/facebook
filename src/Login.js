

import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider} from "./firebase"
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
    return (
        <div className="login">
        <div className="login__logo">
<img
src="https://th.bing.com/th/id/R.ebf98d3e949dcc3ffdb5d3afc393e996?rik=oMXD2TvGgKOr5Q&pid=ImgRaw&r=0" alt="bb"/>

<img
src="http://rosedarcyauteure.weebly.com/uploads/3/0/4/7/30474448/3819042_orig.png" alt="bb"/>


            </div>
            <Button  type="submit" onClick={signIn} >

                Sign in
            </Button>
        </div>
    )
}

export default Login
