
export const date = new Date();
export let currentYear = date.getFullYear();
export let currentMonth = date.getMonth();
export const todayDate = date.getDate();
export const todayMonth = date.getMonth();
export const todayYear = date.getFullYear();

export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const getLastDateOfMonth = () => new Date(currentYear, currentMonth + 1, 0).getDate();
export const getFirstDayOfMonth = () => new Date(currentYear, currentMonth, 1).getDay();
export const getLastDayOfMonth = () => new Date(currentYear, currentMonth, getLastDateOfMonth()).getDay();
export const getLastDateOfPrevMonth = () => new Date(currentYear, currentMonth, 0).getDate();
export const getMonthName = () => months[currentMonth];


export const updateMonth = (change) => {
    currentMonth += change;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
}; 