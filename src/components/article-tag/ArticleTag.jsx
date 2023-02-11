import style from './ArticleTag.module.scss'

const ArticleTag =({text})=>{
  return(
    <span className={style.ArticleTag}>
      {text}
    </span>
  )
}

export default ArticleTag