import { useState, useEffect } from 'react'
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  isBefore,
  getMonth,
  getYear,
  startOfToday,
} from 'date-fns'

import { ptBR } from 'date-fns/locale'

import './styles.css'

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

interface CalendarProps {
  onSelectedDatesChange?: (selectedDates: Date[]) => void
  disabledDates?: Date[] // Novo parâmetro opcional
}

export const Calendar: React.FC<CalendarProps> = ({
  onSelectedDatesChange,
  disabledDates,
}) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [activeDate, setActiveDate] = useState(new Date())
  const today = startOfToday()
  const maxDate = addDays(today, 3)

  useEffect(() => {
    if (onSelectedDatesChange) {
      onSelectedDatesChange(selectedDates)
    }
  }, [selectedDates, onSelectedDatesChange])

  // Se disabledDates for passado, define essas datas como selecionadas
  useEffect(() => {
    if (disabledDates) {
      setSelectedDates(disabledDates)
    }
  }, [disabledDates])

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      (text: string) =>
        text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
    )
  }

  const getHeader = () => {
    const previousMonth = subMonths(activeDate, 1)
    const isPreviousMonthDisabled = isBefore(previousMonth, startOfMonth(today))

    return (
      <div className="header">
        <h2 className="currentMonth">
          {toTitleCase(format(activeDate, 'MMMM yyyy', { locale: ptBR }))}
        </h2>
        <div>
          <MdArrowBackIos
            className={`navIcon ${isPreviousMonthDisabled ? 'disabled' : ''}`}
            onClick={() => {
              if (!isPreviousMonthDisabled) {
                setActiveDate(previousMonth)
              }
            }}
          />
          <MdArrowForwardIos
            className="navIcon"
            onClick={() => setActiveDate(addMonths(activeDate, 1))}
          />
        </div>
      </div>
    )
  }

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate)
    const weekDays = []
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div className="day weekNames" key={day}>
          {toTitleCase(
            format(addDays(weekStartDate, day), 'E', { locale: ptBR }),
          ).substring(0, 3)}
        </div>,
      )
    }
    return <div className="weekContainer">{weekDays}</div>
  }

  const generateDatesForCurrentWeek = (
    date: Date,
    selectedDates: Date[],
    activeDate: Date,
  ) => {
    let currentDate = date
    const week = []
    const isSelectionDisabled = disabledDates !== undefined

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate
      const isSelected = selectedDates.some((selectedDate) =>
        isSameDay(cloneDate, selectedDate),
      )
      const isDisabledDate = disabledDates?.some((disabledDate) =>
        isSameDay(cloneDate, disabledDate),
      )
      const isInactive =
        (isBefore(cloneDate, today) && !isSameDay(cloneDate, today)) ||
        isBefore(maxDate, cloneDate)
      const isDifferentMonth =
        getMonth(cloneDate) !== getMonth(activeDate) ||
        getYear(cloneDate) !== getYear(activeDate)

      week.push(
        <div
          key={day}
          className={`day ${isSameMonth(currentDate, activeDate) ? '' : 'inactiveMonthDay'
            } ${isSelected || isDisabledDate ? 'selectedDay' : ''} ${isInactive || (isSelectionDisabled && !isDisabledDate)
              ? 'inactiveDay'
              : ''
            } ${isDifferentMonth ? 'nextMonth' : ''}`}
          onClick={() => {
            if (!isInactive && !isSelectionDisabled) {
              if (isSelected) {
                setSelectedDates(
                  selectedDates.filter((date) => !isSameDay(date, cloneDate)),
                )
              } else {
                setSelectedDates([...selectedDates, cloneDate])
              }
            }
          }}
        >
          {format(currentDate, 'd', { locale: ptBR })}
        </div>,
      )
      currentDate = addDays(currentDate, 1)
    }
    return <>{week}</>
  }

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate)
    const endOfTheSelectedMonth = endOfMonth(activeDate)
    const startDate = startOfWeek(startOfTheSelectedMonth)
    const endDate = endOfWeek(endOfTheSelectedMonth)

    let currentDate = startDate

    const allWeeks = []

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDates, activeDate),
      )
      currentDate = addDays(currentDate, 7)
    }

    return <div className="weekContainer">{allWeeks}</div>
  }

  return (
    <section>
      {getHeader()}
      {getWeekDaysNames()}
      {getDates()}
    </section>
  )
}
