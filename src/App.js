import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { graphqlOperation, API } from 'aws-amplify'
import { fridgeReadingsByDateTime } from './graphql/queries';

import moment from 'moment-timezone'

function App() {
  const [latestReading, setLatestReading] = useState([]);
  const [autoRefreshEnabled, setAutoRefresh] = useState(true);

  useEffect(() => {
    fetchFridgeReadings();
  }, []);

  async function fetchFridgeReadings() {
    const resp = await API.graphql(graphqlOperation(fridgeReadingsByDateTime,
      {
        sortDirection: 'DESC',
        type: 'FridgeReading',
        limit: 1
      }));

    console.log(resp.data?.fridgeReadingsByDateTime.items);

    let reading = resp.data.fridgeReadingsByDateTime.items[0];
    reading.datetime = moment(reading.datetime).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss A');
    
    setLatestReading(reading);
  }

  function handleAutoRefreshChange(event) {
    setAutoRefresh(event.target.checked);
  }

  return (
    <div className="App">
      <h1>Smart Fridge</h1>
      <div style={{marginBottom: 24, display: "inline-flex"}}>
        <table>
        <tbody>
        <tr>
        <th>Temperature</th><th>Humidity</th><th>Date</th>
        </tr>
        <tr>
        <td>{latestReading?.temperature}</td><td>{latestReading?.humidity}</td><td>
          { latestReading?.datetime }</td>
        </tr>
        </tbody>
        </table>
      </div>

      <div className="buttonsDiv">
        <label className="inputLabel">
          <span className="checkboxSpan">Auto Refresh</span>
          <input
          type="checkbox"
          className="inputBox"
          onChange={handleAutoRefreshChange}
          checked={autoRefreshEnabled}>
          </input>
        </label>
      { !autoRefreshEnabled &&
        <button
          className="refreshButton"
          onClick={fetchFridgeReadings}
        >
          Refresh
        </button>
      }
      </div>

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);