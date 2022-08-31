import React, {useState} from 'react'

import { DatePicker } from 'react-datetime-range-super-picker'
import 'react-datetime-range-super-picker/dist/index.css'


const DatePickerWrapper = () => {

  const [curr_date, setDate] = useState(new Date())
  // OR use JSON object with : day, month, year

  const handleDateUpdate = ({date}) => {
    setDate(date)
  }
  
  return (
    <DatePicker weekStartsOn={0} 
      date={curr_date}
      onDateUpdate={handleDateUpdate} />
  )
}