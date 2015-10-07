"use strict";

var React = require("react");
var Buzzwords = require('./buzzwords');

const Article = React.createClass({
    render() {
        return (
            <div className="article">
                <div className="article__header">
                    <img src={this.props.article.featuredImage} className="article__header-image" />
                    <div className="article__headings">
                        <div className="article__headings-separator">
                            <h1 className="article__heading">James Browne</h1>
                        </div>
                        <div className="article__headings-separator">
                            <p className="article__standfirst">Web Developer, London</p>
                        </div>
                    </div>
                </div>

                <div className="article__content">
                    <div dangerouslySetInnerHTML={{__html: this.props.article.content}} />
                    <Buzzwords buzzwords={this.props.article.buzzwords} />
                </div>
            </div>

        )
    }
});

export default Article;
