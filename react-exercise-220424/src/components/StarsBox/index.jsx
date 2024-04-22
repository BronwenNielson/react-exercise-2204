import Stars from '../Stars'

const Starsbox = () => {
    const Ratings = [{num: '3', name: 'Reviews'}, {num: '5', name: 'ReportGuru'}, {num: '4', name: 'BestTech'}]

    return (
        <div>
            {Ratings.map(rating => {
                return <Stars num={rating.num} name={rating.name} />
            }
        )}
        </div>
    )
}

export default Starsbox