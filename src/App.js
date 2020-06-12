import React from 'react';
import './App.css';
import MyTheme from './MyTheme';
import Upload from './Upload';
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
    <form className="App-header">
    <label for="count">Upload a png file</label>
    <br/>
    <Upload />
    </form>
  </div>
  );
}

export default withAuthenticator(App, true, [], null, MyTheme);
