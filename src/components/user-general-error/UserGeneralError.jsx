import style from './userGeneralError.module.scss'

function UserGeneralError({ generalError }) {
  return <span className={style.message}>{generalError}</span>
}

export default UserGeneralError
