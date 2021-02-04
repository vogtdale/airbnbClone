import React, { useState } from "react";
import "./DatePicker.css";
import { DateRangePicker } from "react-date-range";

// main style file
import "react-date-range/dist/styles.css";
// theme css file
import "react-date-range/dist/theme/default.css";
import { Button } from "@material-ui/core";
import { People } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const DatePicker = () => {
  const history = useHistory()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // date selection
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="datePicker">
      <DateRangePicker className="datePicker-daterange" ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        <People />
        Number of Guests
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => history.push("/search")} variant="outlined">Search Airbnb</Button>
    </div>
  );
};

export default DatePicker;
