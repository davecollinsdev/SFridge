import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { DataStore, Predicates, SortDirection } from 'aws-amplify'
import { FridgeReading } from './models';

import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

function App() {
  const [latestReading, setLatestReading] = useState([]);

  useEffect(() => {
    fetchFridgeReadings();
  }, []);

  async function fetchFridgeReadings() {
    
    const apiData = await DataStore.query(FridgeReading, Predicates.ALL, {
      sort: s => s.datetime(SortDirection.DESCENDING)
    });

    console.log(apiData);

    const res = await API.graphql({ query: queries.listFridgeReadings });
    console.log(res.data.listFridgeReadings.items);

    setLatestReading(apiData[0]);
  }

  return (
    <div className="App">
      <h1>Smart Fridge</h1>
      <div style={{marginBottom: 24, display: "inline-flex"}}>
        <table>
        <tr>
        <th>Temperature</th><th>Humidity</th><th>DateTime</th>
        </tr>
        <tr>
        <td>{latestReading?.temperature}</td><td>{latestReading?.humidity}</td><td>{latestReading?.datetime}</td>
        </tr>
        </table>
      </div>

      <div>
      <button className="refreshButton"
      onClick={fetchFridgeReadings}
      >
          Refresh
        </button>
      </div>

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);