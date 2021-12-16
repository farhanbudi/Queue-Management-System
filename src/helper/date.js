import moment from 'moment';
import "moment/locale/id";

  const dateFormat = {
    dayDate: "dddd, LL",
    dateDefault: "YYYY-MM-DD",
    dateMonth    : "LL",
  };

const getDateWithDay = (date = null, format = dateFormat.dayDate) => {
  const dateTime = date ? new Date(date) : new Date();
  return moment(dateTime).format(format);
};

const getTommorrowDate = (format =  dateFormat.dayDate) =>
  getDateWithDay(new Date().getTime() + 86400000, format);
  
const getYesterdayDate = (format =  dateFormat.dayDate) =>
  getDateWithDay(new Date().getTime() - 86400000, format);


export { dateFormat ,getDateWithDay, getTommorrowDate, getYesterdayDate };

