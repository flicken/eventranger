import React from 'react';
import './App.css';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';

import { useState } from 'react';

import {DateTime} from "luxon";

function emptyDate(index) {
  let maybeEpoch = new Date(1970, 1, 31)
  return {
    startDate: maybeEpoch,
    endDate: maybeEpoch,
    key: '' + index
  }
}

function App() {
  const [state, setState] = useState({
    selections: [emptyDate(0),
    ]
  });

  let onChange = item => {
    console.log("Selected")
    let selection = Object.values(item)[0]
    console.log(selection)
    let i = parseInt(selection.key)
    state.selections[i] = selection
    let newSelections = [...state.selections, emptyDate(i + 1)]
    setState(
      {
        selections: newSelections
      }
    )
  }

  let ranges = state.selections
  let colors = new Array(ranges.length)
  colors.fill("green")
  return (
    <div className="App">
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
  );
}

export default App;
