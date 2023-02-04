import { format, parse, setDefaultOptions } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import BoxMonth from './ButtonMonth/ButtonMonth'
import ButtonMonth from './Buttons/Buttons'
import MonthView from './MonthView'
import { BoxButton, BoxCalendar, Calendary, Container } from './styled'

setDefaultOptions({ locale: ptBR })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ISelect {
  Week: boolean
  Month: boolean
}

export default function Calendar() {
  const today = new Date()
  const [month, setMonth] = useState(format(today, 'MMMM - yyyy'))
  const [currentMonth, setCurrentMonth] = useState(new Date())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [select, setSelect] = useState<boolean>(false)

  useEffect(() => {
    const firstDayCurrentMonth = parse(month, 'MMMM - yyyy', new Date())
    setCurrentMonth(firstDayCurrentMonth)
  }, [month])

  function changeMonth(date: string) {
    setMonth(date)
  }

  return (
    <Container>
      {select ? (
        <MonthView />
      ) : (
        <BoxCalendar>
          <ButtonMonth
            changeMonth={changeMonth}
            today={today}
            firstDayCurrentMonth={currentMonth}
          />
          <Calendary>
            <BoxMonth firstDayCurrentMonth={currentMonth} />
          </Calendary>
        </BoxCalendar>
      )}
      <BoxButton />
    </Container>
  )
}
