"use strict";

var React = require("react");
//import { Router, Route, Link } from 'react-router';
var Article = require('./components/article.js');


var article = {
    featuredImage: "/assets/portfolio/1/featured.jpg",
    content: `<p>I'm a senior level web developer with mostly agency experience building web sites and applications for small, medium and large businesses.</p>
            <p> I have experience building sites alone, leading teams, joining teams, mentoring, evangelizing processes or technologies, estimating and planning work, hiring, pitching work to clients, and proposing creative technical solutions to briefs. </p>
            <p> See some of my recent work in my <a href="/portfolio">portfolio</a>, or <a href="/contact">contact</a> me. </p>
            <p> Some of the technologies that I've worked with very recently: </p>`,
    buzzwords: [
        {
            id: 0,
            word: "React"
        },
        {
            id: 1,
            word: "Angular"
        },
        {
            id: 2,
            word: "Ember"
        }
    ]
};

React.render(
    <Article article={article}/>,
    document.getElementById('app')
);
