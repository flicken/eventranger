import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

import { addDays } from "date-fns";
import { useState } from 'react';



function App() {
  const [state, setState] = useState({
    selection1: {
      startDate: addDays(new Date(), 1),
      endDate: null,
      key: 'selection1'
    },
    selection2: {
      startDate: addDays(new Date(), 4),
      endDate: addDays(new Date(), 8),
      key: 'selection2'
    },
    selection3: {
      startDate: addDays(new Date(), 8),
      endDate: addDays(new Date(), 10),
      key: 'selection3',
      autoFocus: false
    }
  });

  return (
    <div className="App">
      <DateRangePicker
        onChange={item => setState({ ...state, ...item })}
        ranges={[state.selection1, state.selection2, state.selection3]}
      />
    </div>
  );
}

export default App;
