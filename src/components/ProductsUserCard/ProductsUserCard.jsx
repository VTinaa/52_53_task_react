import { Link } from "react-router-dom";
import styles from "./productsUserCard.module.css"

const ProductsUserCard = ({ name, surname, email, id }) => {
    return (
        <Link to={`/user/${id}`}>
            <div className={styles["common"]}>
                <div>{`Name : ${name}`}</div>
                <div>{`Surname : ${surname}`}</div>
                <div>{`Email : ${email}`}</div>
            </div>
        </Link>
    )
};

export default ProductsUserCard;