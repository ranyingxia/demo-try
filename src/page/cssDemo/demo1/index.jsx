import React, { Component } from 'react';
import './index.css';

export default class cssDemo1 extends Component {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <div><span className="quote-right">标题分割线</span></div>
      </div>
    );
  }
}
