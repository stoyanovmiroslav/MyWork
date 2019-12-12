
import React, { Component} from 'react';
import { FacebookProvider, Share } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="2439973969550308">
        <Share href="http://my-workapp.azurewebsites.net/">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Share</button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}