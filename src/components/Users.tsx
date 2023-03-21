import {useSelector, useDispatch, TypedUseSelectorHook} from "react-redux"
import {fetchUsers} from '../store/slices/users'
import {useEffect} from "react"
import type {TDispatch, TState} from '../store'

const Users: React.FunctionComponent<{}> = () => {

  useEffect(() => void dispatch(fetchUsers('https://jsonplaceholder.typicode.com/users')), [])
  
  const selector = useSelector as TypedUseSelectorHook<TState>
  const dispatch = useDispatch<TDispatch>()
  const users = selector(state => state.users)
  let content = null
  
  if (users.loading) {
    content = 'Loading...'
  }
  else {
    if (users.error) {
      content = 'Error: ' + users.error
    }
    else {
      content = <ul>{users.list.map(user => <li key={user.id}>{user.name} (<b>{user.email}</b>)</li>)}</ul>
    }
  }
  
  return (
    <div>
      <h2>List of users</h2>
      <div>{content}</div>
    </div>
  )
}

export default Users