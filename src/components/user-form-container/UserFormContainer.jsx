import style from './userFormContainer.module.scss'

function UserFormContainer({ title, children }) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  )
}
export default UserFormContainer
