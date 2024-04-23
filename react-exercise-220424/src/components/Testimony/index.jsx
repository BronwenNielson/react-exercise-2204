
const Testimony = ({photo, person, message}) => {
    return (
        <div>
            <div>
                <img src={photo} alt={person} />
                <div>
                    <h5>{person}</h5>
                    <h5>Verified Buyer</h5>
                </div>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Testimony