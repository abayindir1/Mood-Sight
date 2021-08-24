import React from 'react'

function Songs() {
    React.useEffect(() => {
        console.log(window.location.hash)
    })

    return (
        <div>
            <h1>This is a test</h1>
        </div>
    )
}

export default Songs
