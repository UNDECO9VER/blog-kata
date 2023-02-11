// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import FormHandler from '../components/form-handler/FormHandler'
import UserFormContainer from '../components/user-form-container/UserFormContainer'
import UserFromLink from '../components/user-form-link/UserFromLink'

function SignIn() {
  // const navigate = useNavigate()

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  console.log('SignIn isloggedIn', isLoggedIn)

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate(-1)
  //   }
  // })

  const formSet = {
    method: 'POST',
    resource: 'users/login',
    fields: [
      { id: 'email', title: 'Email address', type: 'email' },
      { id: 'password', title: 'Password', type: 'password' },
    ],
    button: 'Login',
  }

  return (
    isLoggedIn ? <Redirect to={'/'}/>  :
      <UserFormContainer title="Sign In">
        <FormHandler formSet={formSet} />
        <UserFromLink text="Don’t have an account? " link="Sign Up." to="/sign-up" />
      </UserFormContainer>
  )
}
export default SignIn
