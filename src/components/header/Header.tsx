import moment from "moment"

interface IHeaderProps {
    date: moment.Moment;
    nextMonth: any;
    prevMonth: any
}

function Header({ date, nextMonth, prevMonth }: IHeaderProps) {
    return (
        <div className='header'>
            <div className="header-title-wrap">
                <h3>{date.format("YYYY")}</h3>
                <h1>{date.format("ddd, MMM D")}</h1>
            </div>
            <div className="month-nav">
                <h4>{date.format("MMMM YYYY")}</h4>
                <button className="nav-button" onClick={prevMonth}>{String.fromCharCode(171)}</button>
                <button className="nav-button" onClick={nextMonth}>{String.fromCharCode(187)}</button>
            </div>
        </div>
    )
}

export default Header