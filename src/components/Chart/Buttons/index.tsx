import { useEffect, useState } from 'react'
import { ChartButton } from './styled'

export default function Buttons({ name }: { name: string }) {
  const [buttonName, setButtonName] = useState<string>('')

  useEffect(() => {
    setButtonName(name)
  }, [])

  return (
    <>
      <ChartButton>
        <span />
        {buttonName}
      </ChartButton>
    </>
  )
}
