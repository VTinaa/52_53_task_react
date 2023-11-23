import './userCard.css'

const UserCard = ({ animal, breed, photo }) => {
    return (
        <div className='common-user-card'>
            <div>{ `Animal : ${animal}` }</div>
            <div>{ `Breed : ${breed}` }</div>
            {/* <div>{ `Photo : ${photo}` }</div> */}
            <img src={photo} alt={`${animal} ${breed}`} />
        </div>
        
    )
}

export default UserCard;
