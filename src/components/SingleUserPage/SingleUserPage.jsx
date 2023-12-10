import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { PRODUCTS_PATH } from "../../constants/routes-links";

import styles from './singleUserPage.module.css'

const SingleUserPage = () => {

    const navigator = useNavigate();

    const { id } = useParams();
    console.log(id)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user2, setUser2] = useState({});



    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(resp => {
                setUser2(resp)
                setLoading(false)
            })
            .then(err => setError(err))
            .catch(err => {
                setError(err);
                setLoading(false)
            })

    }, [])

    return (
        <div className={styles["common"]}>
            <div className={styles["single-user-card"]}>
            <div><span className={styles["second-span"]}>Single User with ID:</span> <span className={styles["first-span"]}>{id}</span></div>
            <div> <span>Name:</span> {user2.name}</div>
            <div><span>User name:</span> {user2.username}</div>
            <div><span>Email:</span> {user2.email}</div>
            <div><span>Phone:</span> {user2.phone}</div>
            <button className={styles["btn-single-user"]} type='button' onClick={() => {navigator(PRODUCTS_PATH)}}>Link to User</button>
            </div>
        </div>
    )
};

export default SingleUserPage;