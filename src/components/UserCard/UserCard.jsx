import './userCard.css'

const UserCard = ({ animal, breed, photo, id, onClickDeleteBtn, onClickUpdateBtn }) => {
    return (
        <div className='common-user-card'>
            <div>{ `Animal : ${animal}` }</div>
            <div>{ `Breed : ${breed}` }</div>
            {/* <div>{ `Photo : ${photo}` }</div> */}
            <img src={photo} alt={`${animal} ${breed}`} />
            <button className='animal' type='button' onClick={() => { onClickDeleteBtn(id) } }> Delete Animal</button>
            <button className='animal' type='button' onClick={() => { onClickUpdateBtn(id) } }> Update Animal</button>
        </div>
        
    )
}

export default UserCard;
