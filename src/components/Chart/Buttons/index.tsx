import { useEffect, useState } from 'react'
import { ChartButton } from './styled'

export default function Buttons({
  name,
  change
}: {
  name: string
  change: () => void
}) {
  const [buttonName, setButtonName] = useState<string>('')

  useEffect(() => {
    setButtonName(name)
  }, [])

  return (
    <>
      <ChartButton type='button' onClick={change}>
        <span />
        {buttonName}
      </ChartButton>
    </>
  )
}
