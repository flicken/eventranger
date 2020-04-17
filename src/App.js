import React from 'react';
import './App.css';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';

import { useState } from 'react';

import {DateTime} from "luxon";
import {max} from "date-fns";

function emptyRange(index, date) {
  return {
    startDate: date,
    endDate: date,
    key: '' + index
  }
}

function App() {
  const [state, setState] = useState({
    selections: [emptyRange(0, new Date())]
  });

  let onChange = item => {
    console.log("Selected")
    let selection = Object.values(item)[0]
    console.log(selection)
    let i = parseInt(selection.key)
    state.selections[i] = selection
    let maxDate = max(ranges.map(e => e.startDate))
    let newSelection = emptyRange(state.selections.length, maxDate)
    let newSelections = [...state.selections, newSelection]
    setState(
      {
        selections: newSelections
      }
    )
  }

  let ranges = state.selections
  let colors = new Array(ranges.length)
  colors.fill("green")
  let maxDate = max(ranges.map(e => e.startDate))
  return (
    <div className="App">
    <div style={{float: "left"}}>
    <ol>
      {
        ranges.map(range =>
          <li key={range.key}>
            {(range.startDate && DateTime.fromJSDate(range.startDate).toISODate())}
            {" - "}
             {(range.endDate && DateTime.fromJSDate(range.endDate).toISODate())}
          </li>
        )
      }
    </ol>
    </div>
      <DateRange
        onChange={onChange}
        ranges={ranges}
        scroll={{enabled: true}}
        months={3}
        rangeColors={colors}
        minDate={new Date() }
        showDateDisplay={false}
        staticRanges={[]}
        inputRanges={[]}
        focusedRange = {[ranges.length - 1,0]}
//        onRangeFocusChange={e => console.log("onRangeFocusChange") && console.log(e)}
//        onPreviewChange={e => console.log("onPreviewChange") && console.log(e)}
//        onShownDateChange={e => console.log("onShownDateChange") && console.log(e)}
      />
    </div>
  );
}

export default App;
