import moment from 'npm:moment';

function dateFormatter(date, format) {
  return moment(date).format(format);
}

export { dateFormatter };