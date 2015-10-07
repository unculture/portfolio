(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var React = require("react");
//import { Router, Route, Link } from 'react-router';
var Article = require('./components/article.js');

var article = {
    featuredImage: "/assets/portfolio/1/featured.jpg",
    content: "<p>I'm a senior level web developer with mostly agency experience building web sites and applications for small, medium and large businesses.</p>\n            <p> I have experience building sites alone, leading teams, joining teams, mentoring, evangelizing processes or technologies, estimating and planning work, hiring, pitching work to clients, and proposing creative technical solutions to briefs. </p>\n            <p> See some of my recent work in my <a href=\"/portfolio\">portfolio</a>, or <a href=\"/contact\">contact</a> me. </p>\n            <p> Some of the technologies that I've worked with very recently: </p>",
    buzzwords: [{
        id: 0,
        word: "React"
    }, {
        id: 1,
        word: "Angular"
    }, {
        id: 2,
        word: "Ember"
    }]
};

React.render(React.createElement(Article, { article: article }), document.getElementById('app'));

},{"./components/article.js":2,"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require("react");
var Buzzwords = require('./buzzwords');

var Article = React.createClass({
    displayName: "Article",

    render: function render() {
        return React.createElement(
            "div",
            { className: "article" },
            React.createElement(
                "div",
                { className: "article__header" },
                React.createElement("img", { src: this.props.article.featuredImage, className: "article__header-image" }),
                React.createElement(
                    "div",
                    { className: "article__headings" },
                    React.createElement(
                        "div",
                        { className: "article__headings-separator" },
                        React.createElement(
                            "h1",
                            { className: "article__heading" },
                            "James Browne"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "article__headings-separator" },
                        React.createElement(
                            "p",
                            { className: "article__standfirst" },
                            "Web Developer, London"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "article__content" },
                React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.article.content } }),
                React.createElement(Buzzwords, { buzzwords: this.props.article.buzzwords })
            )
        );
    }
});

exports["default"] = Article;
module.exports = exports["default"];

},{"./buzzwords":3,"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require("react");

var Buzzwords = React.createClass({
    displayName: "Buzzwords",

    render: function render() {
        return React.createElement(
            "ul",
            { className: "buzzwords" },
            this.props.buzzwords.map(function (buzzword) {
                return React.createElement(
                    "li",
                    { key: buzzword.id, className: "buzzwords__word" },
                    buzzword.word
                );
            })
        );
    }
});

exports["default"] = Buzzwords;
module.exports = exports["default"];

},{"react":"react"}]},{},[1])


//# sourceMappingURL=app.bundle.js.map
