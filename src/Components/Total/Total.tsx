import './Total.css'

            const Total = (props:{count:number}) => {
    const total = Math.ceil(props.count * 1.15);
    return (
        <div className='Total'>
            Your order : {props.count} KGS
            <span>            Grand total is (with 15% for service) : {total}KGS</span>

        </div>
    )
            }

            export default Total