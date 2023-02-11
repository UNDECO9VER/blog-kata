// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import FormHandler from '../components/form-handler/FormHandler'
import UserFormContainer from '../components/user-form-container/UserFormContainer'

function Profile() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate()
  //   }
  // }, [isLoggedIn, navigate])

  const formSet = {
    method: 'PUT',
    resource: 'user',
    fields: [
      { id: 'username', title: 'Username', type: 'text' },
      { id: 'email', title: 'Email address', type: 'email' },
      { id: 'password', title: 'Password', type: 'password' },
      { id: 'image', title: 'Avatar image (url)', type: 'url' },
    ],
    agreement: false,
    button: 'Save',
  }

  return (
    !isLoggedIn ? <Redirect to={'/sign-in'}/> :
      <UserFormContainer title="Edit Profile">
        <FormHandler formSet={formSet} />
      </UserFormContainer>    
  )
}
export default Profile
