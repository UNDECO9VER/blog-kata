import { useDispatch, useSelector } from 'react-redux'

import useNavigate from '../hooks/useNavigate'
import ArticleForm from '../components/article-form/ArticleForm'
import { fetchArticle } from '../store/articlesSlice'

function EditArticle() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((state) => state.user.user.token)
  const article = { title: '', description: '', body: '', tagList: [''] }

  const onSubmit = (data, tagValues = []) => {
    for (let i = 0; i < tagValues.length; i++) {
      if (tagValues[i] === '') {
        tagValues.splice(i, 1)
      }
    }
    const dataForm = {
      resource: 'articles',
      method: 'POST',
      token,
      article: {
        title: data.title,
        description: data.description,
        body: data.text,
        tagList: tagValues,
      },
      redirect: (path) => navigate(path),
    }
    dispatch(fetchArticle(dataForm))
  }

  return <ArticleForm pageTitle="Edit article" article={article} onSubmit={onSubmit} />
}

export default EditArticle
