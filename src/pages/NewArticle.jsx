import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import useNavigate from '../hooks/useNavigate'
import NewArticle from '../hoc/ArticleNew'

function CreateNewArticle() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/sign-in')
    }
  }, [isLoggedIn, navigate])

  return <NewArticle />
}

export default CreateNewArticle
