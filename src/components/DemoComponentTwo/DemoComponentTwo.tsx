import { useState } from 'react'

type Props = {
  initialCount?: number
}

export function DemoComponentTwo({ initialCount = 0 }: Props) {
  const [count, setCount] = useState(initialCount)

  return <button onClick={() => setCount((v) => v + 1)}>Count: {count}</button>
}
