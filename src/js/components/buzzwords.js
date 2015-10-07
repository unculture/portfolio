"use strict";

import { React } from "react";

const Buzzwords = React.createClass({
    render() {
        return (
            <ul className="buzzwords">
                {this.props.buzzwords.map(buzzword => (
                    <li key={buzzword.id} className="buzzwords__word">
                        {buzzword.word}
                    </li>
                ))}
            </ul>
        )
    }
});

export default Buzzwords
