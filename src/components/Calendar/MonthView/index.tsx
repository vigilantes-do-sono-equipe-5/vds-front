import {
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfDay,
  endOfMonth,
  endOfYear,
  format,
  startOfDay,
  startOfYear
} from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import { useEffect, useState } from 'react'
import { Month, MonthBox } from './styled'

export default function MonthView() {
  const today = new Date()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [month, setMonth] = useState(today)
  const [daysInMonth, setDaysInMonth] = useState<string[]>([])

  const months = eachMonthOfInterval({
    start: startOfMonth(startOfYear(today)),
    end: endOfMonth(endOfYear(today))
  })
  useEffect(() => {
    const Days = eachDayOfInterval({
      start: startOfDay(startOfMonth(month)),
      end: endOfDay(endOfMonth(month))
    })
    const date = Days.map(el => format(el, 'yyyy-M-d'))
    setDaysInMonth(date)
  }, [month])
  console.log(daysInMonth)

  return (
    <>
      <MonthBox>
        {months.map(el => (
          <Month key={el.toString()} onClick={() => setMonth(el)}>
            <div>{format(el, 'MMMM')}</div>
          </Month>
        ))}
      </MonthBox>
    </>
  )
}
