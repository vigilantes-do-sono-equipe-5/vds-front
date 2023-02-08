import { add, format } from 'date-fns'

import { useEffect, useState } from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

import { ButtonCalendar, Icon, SelectMonth } from './styled'

interface IButtons {
  today: Date
  firstDayCurrentMonth: Date
  select: boolean
  changeMonth: (date: string) => void
  changeYear: (date: string) => void
}
export default function ButtonsCalendar({
  today,
  firstDayCurrentMonth,
  select,
  changeMonth,
  changeYear
}: IButtons) {
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM - yyyy'))
  const [currentYear, setCurrentYear] = useState(format(today, 'yyyy'))

  useEffect(() => {
    changeMonth(currentMonth)
    changeYear(currentYear)
  }, [changeMonth, changeYear, currentMonth, currentYear])

  function next() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMMM - yyyy'))

    const firstDayNextYear = add(firstDayCurrentMonth, { years: 1 })
    setCurrentYear(format(firstDayNextYear, 'yyyy'))
  }

  function back() {
    const firstDayBackMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayBackMonth, 'MMMM - yyyy'))

    const firstDayBackYear = add(firstDayCurrentMonth, { years: -1 })
    setCurrentYear(format(firstDayBackYear, 'yyyy'))
  }

  return (
    <>
      <ButtonCalendar>
        <SelectMonth type='button'>
          {select ? currentMonth : currentYear}
        </SelectMonth>
        <Icon type='button'>
          <BsCaretLeftFill onClick={back} />
          <BsCaretRightFill onClick={next} />
        </Icon>
      </ButtonCalendar>
    </>
  )
}
