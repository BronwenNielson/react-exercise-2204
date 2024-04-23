import Heading from '../Heading'
import Starsbox from '../StarsBox'
import './styles.css'

const TopHalf = () => {
    return (
        <div className='flex w-11/12 justify-center'>
            <Heading />
            <Starsbox />
        </div>
    )
}

export default TopHalf