import moment from "moment";

const buildCalendar = (date: moment.Moment) => {

    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const calendar: moment.Moment[][] = [];

    while (day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }

    return calendar
}

export default buildCalendar