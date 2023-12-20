import React from "react";
import './Lekcja.css';

const Lekcja = (props) => (
    <tr>
        <td className="numer">{props.nr}</td>
        <td className="godzina">{props.godzina}</td>
        <td className="nazwa">{props.nazwa}</td>
    </tr>
);

export default Lekcja;