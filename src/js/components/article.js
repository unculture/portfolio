"use strict";

var React = require("react");
var Buzzwords = require('./buzzwords');

const ArticleHeadings = React.createClass({
    render() {
        return (
            <div>
                <img src={this.props.article.featuredImage} className="article__header-image" />
                <div className="article__headings">
                    <div className="article__headings-separator">
                        <h1 className="article__heading" dangerouslySetInnerHTML={{__html: this.props.article.mainHeading}} />
                    </div>
                    <div className="article__headings-separator">
                        <p className="article__standfirst" dangerouslySetInnerHTML={{__html: this.props.article.mainStandfirst}} />
                    </div>
                </div>
            </div>
        )
    }
});

function linkOrDiv(link, children) {
   return React.createElement(
       link ? 'a': 'div',
       link ? { href: link }: {},
       ...children
    );
}

const Article = React.createClass({
    render() {
        return (
            <div className="article">
                <div className="article__header">
                    { linkOrDiv(this.props.article.mainLink, [<ArticleHeadings article={this.props.article} />]) }
                </div>

                <div className="article__content">
                    <div dangerouslySetInnerHTML={{__html: this.props.article.mainContent}} />
                    <Buzzwords buzzwords={this.props.article.buzzwords} />
                </div>
            </div>

        )
    }
});

export default Article;
