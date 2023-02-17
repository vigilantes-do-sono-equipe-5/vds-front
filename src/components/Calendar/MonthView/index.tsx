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

interface IProps {
  firstDayCurrentMonth: Date
  handleSetDate: (object: { period?: string[]; type: 'week' | 'month' }) => void
}

export default function MonthView({
  handleSetDate,
  firstDayCurrentMonth
}: IProps) {
  const today = new Date()
  const [month, setMonth] = useState<Date>(new Date())

  const [daysInMonth, setDaysInMonth] = useState<string[]>([])

  const months = eachMonthOfInterval({
    start: startOfMonth(startOfYear(firstDayCurrentMonth)),
    end: endOfMonth(endOfYear(firstDayCurrentMonth))
  })

  useEffect(() => {
    const Days = eachDayOfInterval({
      start: startOfDay(startOfMonth(month)),
      end: endOfDay(endOfMonth(month))
    })
    const date = Days.map(el => format(el, 'yyyy-M-d'))
    setDaysInMonth([date[0], date[date.length - 1]])
    handleSetDate({ period: daysInMonth, type: 'month' })
    console.log(date)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month])

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
