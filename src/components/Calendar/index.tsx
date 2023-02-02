import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  setDefaultOptions,
  startOfToday,
  startOfWeek
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import {
  BoxButton,
  BoxCalendar,
  ButtonCalendar,
  Calendary,
  Container,
  DaysWeeks,
  Icon,
  Weeks
} from './styled'

setDefaultOptions({ locale: ptBR })

export default function Calendar() {
  const today = startOfToday()
  const dayWeek = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today)
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [week, setWeek] = useState<string[]>([])

  function getWeek(value: Date) {
    const data = eachDayOfInterval({
      start: startOfWeek(value),
      end: endOfWeek(value)
    })

    const dados = data.map(el => format(el, 'y-M-d'))

    setWeek(dados)
  }

  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM - yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMMM - yyyy', new Date())

  const date = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth))
  })

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMMM - yyyy'))
  }

  function backMonth() {
    const firstDayBackMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayBackMonth, 'MMMM - yyyy'))
  }

  return (
    <Container>
      <BoxCalendar>
        <ButtonCalendar>
          {currentMonth}
          <Icon type='button'>
            <BsCaretLeftFill onClick={backMonth} />
            <BsCaretRightFill onClick={nextMonth} />
          </Icon>
        </ButtonCalendar>
        <Calendary>
          {dayWeek.map(el => (
            <DaysWeeks key={el.toString()}>{format(el, 'EEEEE')}</DaysWeeks>
          ))}
          {date.map(day => (
            <Weeks
              key={day.toString()}
              onClick={() => getWeek(day)}
              type='button'>
              {format(day, 'd')}
            </Weeks>
          ))}
        </Calendary>
      </BoxCalendar>
      <BoxButton />
    </Container>
  )
}
