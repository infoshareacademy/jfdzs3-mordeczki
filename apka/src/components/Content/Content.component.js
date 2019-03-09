import React, { Component } from 'react';
import './Content.component.css';

const Content = (props) => (
    <div className="content_block"> {props.name }</div>
)

export default Content;