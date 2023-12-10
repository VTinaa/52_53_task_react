import { useEffect, useState } from "react";

import QueryLoader from "../QueryLoader";
import ProductsUserCard from "../ProductsUserCard";

import styles from "./products.module.css"

const Products = () => {

    const [users, setUsers] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        setFetching(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(resp => {
            setUsers(resp)
            setFetching(false)
            console.log(resp)
        })
        .catch(err => {
            setFetching(false)
            setFetchError(err)
        });
    },[])

    return (
        <div className={styles["common"]}>

            <QueryLoader fetching={fetching} error={fetchError}>

                {users.map((user,index) => {
                    const { name, username, email, id } = user;
                    return (<ProductsUserCard
                        key={index}
                        name={name}
                        surname={username}
                        email={email}
                        id={id} />
                    )
                })}

            </QueryLoader>

        </div>
    )
}

export default Products;
