
import { renderCalendar ,previousMonth,nextMonth} from "/modules/controller.js";
document.querySelector('.left-btn').addEventListener("click",previousMonth);
document.querySelector('.right-btn').addEventListener("click",nextMonth);
renderCalendar();

