import FormHandler from '../components/form-handler/FormHandler'
import UserFormContainer from '../components/user-form-container/UserFormContainer'
import UserFromLink from '../components/user-form-link/UserFromLink'

function SignUp() {
  const formSet = {
    method: 'POST',
    resource: 'users',
    fields: [
      { id: 'username', title: 'Username', type: 'text' },
      { id: 'email', title: 'Email address', type: 'email' },
      { id: 'password', title: 'Password', type: 'password' },
      { id: 'repeatPassword', title: 'Repeat password', type: 'password' },
    ],
    agreement: true,
    button: 'Create',
  }

  return (
    <UserFormContainer title="Create new account">
      <FormHandler formSet={formSet} />
      <UserFromLink text="Already have an account? " link="Sign In" to="/sign-in" />
    </UserFormContainer>
  )
}
export default SignUp
