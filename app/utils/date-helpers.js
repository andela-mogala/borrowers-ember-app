function dateFormatter(date, format) {
  return window.moment(date).format(format);
}

export { dateFormatter };