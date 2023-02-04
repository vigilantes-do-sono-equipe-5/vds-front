import { eachMonthOfInterval, endOfMonth, format } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import { MonthBox } from './styled'

export default function MonthView() {
  // const today = new Date()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [month, setMonth] = useState(format(today, 'MMMM - yyyy'))

  const months = eachMonthOfInterval({
    start: startOfMonth(1),
    end: endOfMonth(12)
  })
  months.map(el => console.log(format(el, 'MMMM')))

  return (
    <>
      <MonthBox>
        {months.map(el => (
          <div key={el.toString()}>{format(el, 'MMMM')}</div>
        ))}
      </MonthBox>
    </>
  )
}
