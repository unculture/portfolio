"use strict";

var React = require("react");
//import { Router, Route, Link } from 'react-router';
var Article = require('./components/article.js');

// Who needs a CMS?
var store = require('./data/data.js');


React.render(
    <Article article={ store.portfolioItems[0] } />,
    document.getElementById('app')
);
