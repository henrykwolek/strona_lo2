import React from 'react'

export default function Gallery() {
    return (
        <div>
            <h1 className="text-2xl">Mordowanie</h1>
        </div>
    )
}

if (document.getElementById("gallery")) {
    ReactDOM.render(<Gallery />, document.getElementById("gallery"));
}


