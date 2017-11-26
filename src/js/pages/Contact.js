import React from "react";

export default class Contact extends React.Component {
    render() {
        console.log("contact")
        return (
            <div>
                <b>MIYA JAPAN TEE</b><br />
                Döltschihalde 19, CH-8055 Zürich<br />
                tel: ++ 41 44 463 10 93<br />
                email: tee@miya.ch<br />
                Laden wird nach Vereinbarung geöffnet.<br />
                Bitte melden Sie mir wann Sie vorbei kommen möchten
            </div>
        );
    }
}