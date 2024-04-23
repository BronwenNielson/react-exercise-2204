
const Stars = ({num, name}) => {
    const starJSX = <span>★</span>

    const starArray = []
    for (let i = 0; i < num; i++) {
        starArray.push(starJSX)
    }

    return (
        <div>
            <div>{starArray}</div>
            <p>Rated {num} stars in {name}</p>
        </div>
    )
}

export default Stars