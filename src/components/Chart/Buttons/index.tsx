import { useEffect, useState } from 'react'
import { ChartButton } from './styled'

export default function Buttons({ name }: { name: string }) {
  const [buttonName, setButtonName] = useState<string>('')

  useEffect(() => {
    setButtonName(name)
  }, [name])

  return (
    <>
      <ChartButton type='button'>
        <span />
        {buttonName}
      </ChartButton>
    </>
  )
}
