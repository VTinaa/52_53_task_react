import './coctailCard.css'

const CoctailCard = ({ name, photo, id }) => {
    return (
        <>
            <div className='common-coctail-card'>
                <div>{`Cocktail : ${name}`}</div>
                <img src={photo} alt={`${name}`} className='alcohol-img'/>
                {/* <div>{`ID : ${id}`}</div> */}
            </div>

        </>
    )
}

export default CoctailCard;
