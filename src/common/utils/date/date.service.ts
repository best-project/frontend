class DateService {
  static defaultDateFormat = "dd/mm/yyyy";
  static defaultDateRequestFormat = "yyyy-mm-dd";
  static defaultDatetimeFormat = "dd/mm/yyyy hh:MM";

  private static getHoursWithLeadingZero = (date: Date) =>
    ("0" + date.getHours()).slice(-2);

  private static getMinutesWithLeadingZero = (date: Date) =>
    ("0" + date.getMinutes()).slice(-2);

  private static getDayWithLeadingZero = (date: Date) =>
    ("0" + date.getDate()).slice(-2);

  private static getMonthWithLeadingZero = (date: Date) =>
    ("0" + (date.getMonth() + 1)).slice(-2);

  static getFormattedDate(
    date: Date | string,
    format: string = DateService.defaultDateFormat
  ): string {
    const parsedDate: Date = typeof date === "object" ? date : new Date(date);

    if (!this.isDateValid(parsedDate)) {
      return "";
    }

    return format
      .replace("yyyy", parsedDate.getFullYear().toString())
      .replace("hh", DateService.getHoursWithLeadingZero(parsedDate))
      .replace("dd", DateService.getDayWithLeadingZero(parsedDate))
      .replace("d", parsedDate.getDate().toString())
      .replace("mm", DateService.getMonthWithLeadingZero(parsedDate))
      .replace("MM", DateService.getMinutesWithLeadingZero(parsedDate));
  }

  static getFormattedDatetime(date: Date | string): string {
    return DateService.getFormattedDate(
      date,
      DateService.defaultDatetimeFormat
    );
  }

  static getFormattedDateForRequest(date: Date): string {
    return DateService.getFormattedDate(
      date,
      DateService.defaultDateRequestFormat
    );
  }

  static parse(date: string): Date {
    return new Date(Date.parse(date));
  }

  static areDatesEqual(date1: Date, date2: Date) {
    return date1.getTime() === date2.getTime();
  }

  static isDateValid(date: Date) {
    return !isNaN(date.getDate());
  }

  static getDateWithoutTimeZones(date: Date | string): string {
    const newDate = new Date(date);
    const noTimezoneDate = new Date(
      newDate.getTime() + newDate.getTimezoneOffset() * 60 * 1000
    );
    return DateService.getFormattedDate(noTimezoneDate);
  }

  static getDayFullName(date: Date) {
    return date.toLocaleDateString("en", { weekday: "long" });
  }

  static getDayAndMonth(date: Date) {
    const day = this.getDayFullName(date);
    const month = `${date.getDate().toString()} ${date.toLocaleDateString(
      "en",
      { month: "long" }
    )}`;
    return `${day}, ${month}`;
  }
}

export default DateService;
