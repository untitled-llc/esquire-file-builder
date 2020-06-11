import React from 'react';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <form className="App-header">
      <label for="count">Choose count category</label>
      <br/>
        <select id="count">
          <option value="count-1">Count 1</option>
          <option value="count-2">Count 2</option>
          <option value="count-3">Count 3</option>
          <option value="count-4">Count 4</option>
        </select>
      <br />
        <button type="submit">Get Count</button>
      </form>
    </div>
  );
}

export default withAuthenticator(App, true);
