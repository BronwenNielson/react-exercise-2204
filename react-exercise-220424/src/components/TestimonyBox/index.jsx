import Testimony from '../Testimony'

const TestimonyBox = () => {
    const Customers = [{photo:'.assets/profile-img1.jpg', person:'Colton Smith', message: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also recieved it in time. Excellent!'},
                        {photo:'.assets/profile-img2.jpg', person:'Irene Roberts', message: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'},
                        {photo:'.assets/profile-img3.jpg', person:'Anne Wallace', message: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and reccommend them to everyone'}]
    return (
        <div>
        {Customers.map(customer => {
            return <Testimony photo={customer.photo} person={customer.person} message={customer.message} />
        }
    )}
    </div>
    )
}

export default TestimonyBox