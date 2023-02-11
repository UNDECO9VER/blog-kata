import { useHistory } from 'react-router-dom'

function useNavigate() {
  const history = useHistory()

  function navigateTo(path) {
    history.push(path)
  }

  return navigateTo
}

export default useNavigate