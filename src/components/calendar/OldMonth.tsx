import moment from "moment"


interface IMonthProps {
    calendar: moment.Moment[][];
    handleSetDate: (date: moment.Moment) => void;
    dayStyles: (date: moment.Moment) => string;
}

const Month = ({ calendar, handleSetDate, dayStyles }: IMonthProps) => {
    return (
        <div className='month'>
            {
                calendar.map((week, key) => (
                    <div className='week' key={key.toString()}>
                        {
                            week.map((day, key) => (
                                <div className={`day-wrap ${dayStyles(day)}`}
                                    key={key.toString()}
                                    onClick={() => handleSetDate(day)}
                                >
                                    <div className='day-abbr'>
                                        {day.format("ddd").toString()}
                                    </div>
                                    <div className='day'>
                                        {day.format("D").toString()}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Month