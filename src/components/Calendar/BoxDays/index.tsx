import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfWeek
} from 'date-fns'
import { useEffect, useState } from 'react'
import { DaysWeeks, Weeks } from './styled'

interface IButtonMonth {
  firstDayCurrentMonth: Date
  handleSetDate: (object: { period?: string[]; type: 'week' | 'month' }) => void
}

// interface IDate {
//   date: string[]
//   selected?: boolean[]
// }

export default function BoxDays({
  firstDayCurrentMonth,
  handleSetDate
}: IButtonMonth) {
  const dayWeek = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(firstDayCurrentMonth)
  })

  const [click, setClick] = useState<Date>(new Date())
  const [date, setDate] = useState<Date[]>([])
  const [week, setWeek] = useState<string[]>()

  useEffect(() => {
    const data = eachDayOfInterval({
      start: startOfWeek(click),
      end: endOfWeek(click)
    })
    const dados = data.map(el => format(el, 'y-M-d'))

    setWeek([dados[0], dados[6]])
    handleSetDate({ period: week, type: 'week' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click])

  useEffect(() => {
    const date = eachDayOfInterval({
      start: startOfWeek(firstDayCurrentMonth),
      end: endOfWeek(endOfMonth(firstDayCurrentMonth))
    })
    setDate(date)
  }, [firstDayCurrentMonth])
  return (
    <>
      {dayWeek.map(dayName => (
        <DaysWeeks key={dayName.toString()}>
          {format(dayName, 'EEEEE')}
        </DaysWeeks>
      ))}
      {date.map(day => (
        <Weeks
          className={'selected'}
          onClick={() => setClick(day)}
          key={day.toString()}
          type='button'>
          {format(day, 'd')}
        </Weeks>
      ))}
    </>
  )
}
