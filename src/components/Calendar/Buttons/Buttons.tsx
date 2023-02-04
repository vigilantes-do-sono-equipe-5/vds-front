import { add, format } from 'date-fns'

import { useEffect, useState } from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

import { ButtonCalendar, Icon, SelectMonth } from './styled'

interface IButtons {
  today: Date
  firstDayCurrentMonth: Date
  changeMonth: (date: string) => void
}
export default function ButtonMonth({
  today,
  firstDayCurrentMonth,
  changeMonth
}: IButtons) {
  // const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM - yyyy'))
  // const [day, setDay] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM - yyyy'))

  useEffect(() => {
    changeMonth(currentMonth)
  }, [changeMonth, currentMonth])

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMMM - yyyy'))
  }

  function backMonth() {
    const firstDayBackMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayBackMonth, 'MMMM - yyyy'))
  }

  return (
    <>
      <ButtonCalendar>
        <SelectMonth type='button'>{currentMonth}</SelectMonth>
        <Icon type='button'>
          <BsCaretLeftFill onClick={backMonth} />
          <BsCaretRightFill onClick={nextMonth} />
        </Icon>
      </ButtonCalendar>
    </>
  )
}
