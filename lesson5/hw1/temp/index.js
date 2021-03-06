import { calendarRendering } from './calendar-visualization.js';
import { createDates, renderDates, showCurrentMonthAndYear, renderNextWeek, renderPreviousWeek, today_button_function } from './navigation.js';
import { generateNumbersRange, getTimesBlocks } from './utils.js';
import { addButton } from './popup.js';
import { redLine } from './red-line.js';
import { saveEvent } from './save-event.js';
import { activeEventOnclick } from './edit-event.js';
import { deleteButtonOnclick } from './delete-event.js';