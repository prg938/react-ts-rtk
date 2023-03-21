
import type {TDispatch, TState} from '../store'
import {useSelector, useDispatch, TypedUseSelectorHook} from "react-redux"
import {actions} from '../store/slices/cake'

const Cake: React.FunctionComponent<{}> = () => {
  const selector = useSelector as TypedUseSelectorHook<TState>
  const dispatch = useDispatch<TDispatch>()
  const cakesNumber = selector(state => state.cake.count)
  const incHandler = (event: React.MouseEvent) => dispatch(actions.increase())
  const inc3Handler = (event: React.MouseEvent) => dispatch(actions.increaseBy(3))
  return (
    <div>
      <h2>Number of cakes: {cakesNumber}</h2>
      <button onClick={incHandler}>add +1</button>
      <button onClick={inc3Handler}>add +3</button>
    </div>
  )
}

export default Cake