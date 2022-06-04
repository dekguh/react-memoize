import React, { useRef } from 'react'

const Children: React.FC<{
  increament?: () => void;
  list?: Array<string>;
}> = ({ increament, list }) => {
  const ref = useRef(0)
  console.log('children rendered', ref.current++)

  return (
    <div>
      <button onClick={() => increament && increament()}>
        click from children
      </button>

      <ul>
        {list &&
          list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  )
}

export default React.memo(Children)
