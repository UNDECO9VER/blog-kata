import { Link } from 'react-router-dom'

import style from './userFormLink.module.scss'

function UserFromLink({ text, link, to }) {
  return (
    <div className={style.link}>
      {text}
      <Link to={to}>{link}</Link>
    </div>
  )
}

export default UserFromLink
