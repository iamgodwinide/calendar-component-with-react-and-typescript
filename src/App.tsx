import { useState, useEffect } from 'react';
import moment from 'moment'
import Month from './components/calendar/Month';
import buildCalendar from './components/calendar/buildCalendar';
import Header from './components/header/Header';

const App: React.FC = () => {

  const [calendar, setCalendar] = useState<moment.Moment[][]>([]);
  const [date, setDate] = useState<moment.Moment>(moment());

  const isSelected = (day: moment.Moment) => date.isSame(day, "day");
  const beforeToday = (day: moment.Moment) => day.isBefore(new Date(), "day");
  const beforeMonth = (day: moment.Moment) => day.isBefore(new Date(), "month");
  const afterMonth = (day: moment.Moment) => day.isAfter(new Date(), "month");
  const isToday = (day: moment.Moment) => day.isSame(new Date(), "day");

  const [weeks, setWeeks] = useState<moment.Moment[][]>(calendar);
  const [curretnWeek, setCurrentWeek] = useState<number>(0);

  const dayStyles = (day: moment.Moment) => {
    if (beforeToday(day) && !isSelected(day) && !beforeMonth(day)) return 'before'
    if (beforeMonth(day)) return 'before-month'
    if (afterMonth(day)) return 'after-month'
    if (isSelected(day) && !isToday(day)) return 'selected'
    if (isToday(day)) return "today"
    return '';
  }

  const handleSetDate = (day: moment.Moment): void => {
    setDate(day);
  }

  const resetWeek = (): void => {
    setCurrentWeek(0);
  }

  const nextMonth = (): void => {
    setDate(date.clone().add(1, "month"));
    setCalendar(buildCalendar(date));
    setWeeks(buildCalendar(date));
  }

  const prevMonth = (): void => {
    setDate(date.clone().subtract(1, "month"));
    setCalendar(buildCalendar(date));
  }

  const handleNextWeek = (): void => {
    if (curretnWeek < (weeks.length - 1)) {
      setCurrentWeek(curretnWeek + 1);
    } else {
      resetWeek();
      nextMonth();
    }
  }

  const handlePrevWeek = (): void => {
    if (curretnWeek > 0) {
      setCurrentWeek(curretnWeek - 1);
    } else {
      resetWeek();
      prevMonth();
    }
  }

  const build = (): void => {
    setCalendar(buildCalendar(date));
    setWeeks(buildCalendar(date));
  }

  useEffect(() => {
    build()
  }, [date]);




  return (
    <div className='calendar'>
      <Header date={date} nextMonth={nextMonth} prevMonth={prevMonth} />
      <Month
        dayStyles={dayStyles}
        handleSetDate={handleSetDate}
        weeks={weeks}
        currentWeek={curretnWeek}
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
      />
    </div>
  )
}



export default App