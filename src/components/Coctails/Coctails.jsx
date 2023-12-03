import BorderWrapper from '../BorderWrapper';

import { useEffect, useState } from 'react';

import styles from './coctails.module.css'
// import UserCard from '../UserCard';
import CoctailCard from '../CoctailCard';
import QueryLoader from '../QueryLoader';

const Coctails = () => {

    const [coctails, setCoctails] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);


    useEffect(function () {
        setFetching(true)
            fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(response => response.json())
            .then(resp => {
                console.log(resp)
                setCoctails(resp.drinks)
                setFetching(false);
            })
            .catch(err => {
                // console.log('err =>',err);
                setFetching(false)
                setFetchError(err)
            });
        // // потом сработала эта функция
        // console.log("useEffect")
    }, [])

    return (
        <>
            <QueryLoader fetching={fetching} error={fetchError}>
                <div className={styles['coctail-list']}>
                    {coctails.map(({ strDrink, strDrinkThumb,idDrink }) => {
                        return (<CoctailCard
                            name={strDrink}
                            photo={strDrinkThumb}
                            key={idDrink}
                            id={idDrink} />)
                    })}
                </div>
            </QueryLoader>
            {/* сначала змонтувався* */}
            {/* {console.log('render')} */}
            {/* <BorderWrapper showDefaultText={true}>
                <div>Hello</div>
                <p>Lorem ipsum dolor sit amet.</p>
            </BorderWrapper> */}
        </>
    )
};

export default Coctails;