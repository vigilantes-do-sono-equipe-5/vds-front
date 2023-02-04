import { format, parse, setDefaultOptions } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import BoxDays from './BoxDays'
import ButtonsCalendar from './ButtonsCalendar'
import MonthView from './MonthView'
import { BoxButton, BoxCalendar, BoxMonth, Container } from './styled'

setDefaultOptions({ locale: ptBR })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ISelect {
  Week: boolean
  Month: boolean
}

export default function Calendar() {
  const today = new Date()

  const [month, setMonth] = useState(format(today, 'MMMM - yyyy'))
  // const [year, setYear] = useState(format(today, 'yyyy'))
  const [currentDate, setCurrentDate] = useState(new Date())

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [select, setSelect] = useState<boolean>(false)

  useEffect(() => {
    const firstDayCurrentMonth = parse(month, 'MMMM - yyyy', new Date())
    setCurrentDate(firstDayCurrentMonth)
  }, [month])

  function changeMonth(date: string) {
    setMonth(date)
  }

  function changeYear(date: string) {
    // setYear(date)
  }

  return (
    <Container>
      <BoxCalendar>
        <ButtonsCalendar
          changeMonth={select ? changeMonth : changeYear}
          today={today}
          firstDayCurrentMonth={currentDate}
        />
        {select ? (
          <MonthView />
        ) : (
          <BoxMonth>
            <BoxDays firstDayCurrentMonth={currentDate} />
          </BoxMonth>
        )}
      </BoxCalendar>
      <BoxButton onClick={() => setSelect(!select)}>Select</BoxButton>
    </Container>
  )
}
