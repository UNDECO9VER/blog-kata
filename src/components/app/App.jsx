import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import Layout from '../layout/Layout'
import Posts from '../../pages/Posts'
import Post from '../../pages/Post'
import EditPost from '../../pages/EditArticle'
import CreateNewArticle from '../../pages/NewArticle'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import Profile from '../../pages/Profile'

const App =()=> {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={['/','/articles']} component={Posts} />
          <Route exact path="/articles/:slug" component={Post} />
          <Route path="/articles/:slug/edit" component={EditPost} />
          <Route path="/new-article" component={CreateNewArticle} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/profile" component={Profile} />  
          <Redirect to={'/'}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App