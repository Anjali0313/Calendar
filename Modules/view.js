import { todayDate, todayMonth, todayYear, currentMonth, currentYear } from "./model.js";
const currentMonthYear = document.querySelector("#Months");
const datess = document.querySelector(".days");

export const renderMonthYear = (month, year) => {
    currentMonthYear.innerHTML = `${month} ${year}`;
};

export const renderDays = (dates) => {
    datess.innerHTML = dates;
};

export const DateList = (firstDay, lastDay, lastDate, lastDatePrevMonth) => {
    let dates = "";

    for (let i = firstDay; i > 0; i--) {
        dates += `<li class="inactive">${lastDatePrevMonth - i + 1}</li>`;
    }


    for (let i = 1; i <= lastDate; i++) {
        let today = "";
        if (i === todayDate && currentMonth === todayMonth && currentYear === todayYear) {
            today = "active";
        }
        dates += `<li class="${today}">${i}</li>`;
    }


    for (let i = lastDay; i < 6; i++) {
        dates += `<li class="inactive">${i - lastDay + 1}</li>`;
    }

    return dates;

};
