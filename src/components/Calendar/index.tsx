import { format, parse, setDefaultOptions } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import BoxDays from './BoxDays'
import ButtonsCalendar from './ButtonsCalendar'
import MonthView from './MonthView'
import {
  BoxButton,
  BoxCalendar,
  BoxMonth,
  Container,
  SelectionButtons
} from './styled'

setDefaultOptions({ locale: ptBR })

interface ISelect {
  Week: boolean
  Month: boolean
}

export default function Calendar() {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [month, setMonth] = useState(format(today, 'MMMM - yyyy'))
  const [year, setYear] = useState(format(today, 'yyyy'))

  const [select, setSelect] = useState(true)

  useEffect(() => {
    if (select) {
      const firstDayCurrentMonth = parse(month, 'MMMM - yyyy', new Date())
      setCurrentDate(firstDayCurrentMonth)
    } else {
      const firstDayCurrentMonth = parse(year, 'yyyy', new Date())
      setCurrentDate(firstDayCurrentMonth)
    }
  }, [month, select, year])

  function changeMonth(date: string) {
    setMonth(date)
  }

  function changeYear(date: string) {
    setYear(date)
  }

  function selectButton(value: string) {
    if (value === 'week') {
      setMonth(format(new Date(), 'MMMM - yyyy'))
      setSelect(true)
    } else if (value === 'month') {
      setYear(format(new Date(), 'yyyy'))
      setSelect(false)
    }
  }

  return (
    <Container>
      <BoxCalendar>
        <ButtonsCalendar
          changeYear={changeYear}
          changeMonth={changeMonth}
          today={today}
          firstDayCurrentMonth={currentDate}
          select={select}
        />
        {select ? (
          <BoxMonth>
            <BoxDays firstDayCurrentMonth={currentDate} />
          </BoxMonth>
        ) : (
          <MonthView />
        )}
      </BoxCalendar>
      <BoxButton>
        <SelectionButtons onClick={() => selectButton('week')}>
          <span />
          Semana
        </SelectionButtons>
        <SelectionButtons onClick={() => selectButton('month')}>
          <span />
          Meses
        </SelectionButtons>
      </BoxButton>
    </Container>
  )
}
