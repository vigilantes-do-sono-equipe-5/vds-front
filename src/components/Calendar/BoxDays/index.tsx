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
}

// interface IDate {
//   date: string[]
//   selected?: boolean[]
// }

export default function BoxDays({ firstDayCurrentMonth }: IButtonMonth) {
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
    const dados = data.map(el => format(el, 'd-M-y'))

    setWeek(dados)
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
