import moment from "moment"


interface IMonthProps {
    currentWeek: number;
    weeks: moment.Moment[][];
    handleSetDate: (date: moment.Moment, index: number) => void;
    dayStyles: (date: moment.Moment) => string;
    handleNextWeek: () => void;
    handlePrevWeek: () => void;
}

const Month = ({ weeks, handleSetDate, dayStyles, handlePrevWeek, handleNextWeek, currentWeek }: IMonthProps) => {
    return (
        <div className='month'>
            <button
                onClick={handlePrevWeek}
                className="nav-button"
            >{'<<'}</button>
            <div className='week'>
                {
                    weeks.length > 0
                    &&
                    weeks[currentWeek].map((day, key) => (
                        <div className={`day-wrap ${dayStyles(day)}`}
                            key={key.toString()}
                            onClick={() => handleSetDate(day, currentWeek)}
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
            <button
                onClick={handleNextWeek}
                className="nav-button"
            >{'>>'}</button>
        </div>
    )
}

export default Month