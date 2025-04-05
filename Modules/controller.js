import { updateMonth } from "./model.js";
import { currentYear, getFirstDayOfMonth, getLastDayOfMonth, getLastDateOfMonth, getLastDateOfPrevMonth, getMonthName } from "./model.js";
import { renderMonthYear, renderDays, DateList } from "./view.js";

export const renderCalendar = () => {
    const firstDay = getFirstDayOfMonth();
    const lastDay = getLastDayOfMonth();
    const lastDate = getLastDateOfMonth();
    const lastDatePrevMonth = getLastDateOfPrevMonth();
    const monthName = getMonthName();

    const dates = DateList(firstDay, lastDay, lastDate, lastDatePrevMonth);
    renderMonthYear(monthName, currentYear);
    renderDays(dates);
};

export const previousMonth = () => {
    updateMonth(-1);
    renderCalendar();
};
export const nextMonth = () => {
    updateMonth(1);
    renderCalendar();
}