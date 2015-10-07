"use strict";

import { React } from "react";
import { Buzzwords } from './buzzwords';

const Article = React.createClass({
    render() {
        return (
            <div className="article">
                <div className="article__header">
                    <img src="/assets/portfolio/1/featured.jpg" className="article__header-image">
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
                        <Buzzwords buzzwords=this.state.article.buzzwords>
                    </div>
                </div>

            <div>
        )
    }
});

export default Article
