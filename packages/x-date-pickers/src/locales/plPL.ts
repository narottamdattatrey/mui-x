import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import { DateView } from '../internals/models';

const plPLPickers: Partial<PickersLocaleText<any>> = {
  // Calendar navigation
  previousMonth: 'Poprzedni miesiąc',
  nextMonth: 'Następny miesiąc',

  // View navigation
  openPreviousView: 'otwórz poprzedni widok',
  openNextView: 'otwórz następny widok',
  calendarViewSwitchingButtonAriaLabel: (view: DateView) =>
    view === 'year'
      ? 'otwarty jest widok roku, przełącz na widok kalendarza'
      : 'otwarty jest widok kalendarza, przełącz na widok roku',
  // inputModeToggleButtonAriaLabel: (isKeyboardInputOpen, viewType) => isKeyboardInputOpen ? `text input view is open, go to ${viewType} view` : `${viewType} view is open, go to text input view`,

  // DateRange placeholders
  start: 'Początek',
  end: 'Koniec',

  // Action bar
  cancelButtonLabel: 'Anuluj',
  clearButtonLabel: 'Wyczyść',
  okButtonLabel: 'Zatwierdź',
  todayButtonLabel: 'Dzisiaj',

  // Toolbar titles
  // datePickerToolbarTitle: 'Select date',
  // dateTimePickerToolbarTitle: 'Select date & time',
  // timePickerToolbarTitle: 'Select time',
  // dateRangePickerToolbarTitle: 'Select date range',

  // Clock labels
  clockLabelText: (view, time, adapter) =>
    `Select ${view}. ${
      time === null ? 'Nie wybrano czasu' : `Wybrany czas to ${adapter.format(time, 'fullTime')}`
    }`,
  hoursClockNumberText: (hours) => `${hours} godzin`,
  minutesClockNumberText: (minutes) => `${minutes} minut`,
  secondsClockNumberText: (seconds) => `${seconds} sekund`,

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value != null && utils.isValid(value)
      ? `Wybierz datę, obecnie wybrana data to ${utils.format(value, 'fullDate')}`
      : 'Wybierz datę',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Wybierz czas, obecnie wybrany czas to ${utils.format(value, 'fullTime')}`
      : 'Wybierz czas',

  // Table labels
  timeTableLabel: 'wybierz czas',
  dateTableLabel: 'wybierz datę',

  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
};

export const plPL = getPickersLocalization(plPLPickers);
