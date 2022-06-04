import React from 'react'
import Children from './Children'

/**
 * use memoize while component have a loop data
 */
const Container: React.FC = () => {
  const [count, setCount] = React.useState<number>(0)

  /** useMemo for memoize array value */
  const dataList = React.useMemo(() => {
    return ['ahoi', 'oioi', 'punk']
  }, [])

  // useCallback for memoize function
  const increament = React.useCallback(() => {
    setCount((curr) => curr + 1)
  }, [])

  return (
    <div>
      <h1>clicked {count}</h1>
      <button onClick={() => setCount(count + 1)}>update</button>
      <Children increament={increament} list={dataList} />
    </div>
  )
}

export default Container
