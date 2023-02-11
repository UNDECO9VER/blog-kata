import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUserLocal, logOut } from '../../store/userSlice'
import HeaderSignBtns from '../header-sign-btns/HeaderSignBtns'
import HeaderUserInfo from '../header-user-info/HeaderUserInfo'

import style from './layout.module.scss'

function Layout({children}) {
  const userLocal = localStorage.getItem('user') || null
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const user = useSelector((state) => state.user.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLoggedIn && userLocal) {
      dispatch(getUserLocal(JSON.parse(userLocal)))
    }
  }, [dispatch, isLoggedIn, userLocal])

  const onLogout = () => {
    dispatch(logOut())
  }

  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Link to="/">Realworld Blog</Link>
        </div>
        {isLoggedIn ? <HeaderUserInfo user={user} logout={onLogout} /> : <HeaderSignBtns />}
      </header>
      <main>
        {children}
        {/* <Outlet /> */}
      </main>
    </>
  )
}

export default Layout
