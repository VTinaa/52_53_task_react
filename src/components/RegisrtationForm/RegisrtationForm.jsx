import { useState } from 'react';
import Input from '../Input';
import UserCard from '../UserCard';
import './registrationForm.css';
const RegistrationForm = () => {


    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState('');

    const onGetName = (value) => {
        setName(value)
    };
    const onGetAge = (value) => {
        setAge(value);
    };

    const onGetEmail = (value) => {
        setEmail(value)
    };
    const onGetPassword = (value) => {
        setPassword(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(name.trim() === ''){
        // 	setError(`Будь ласка, заповніть Name поле`);
        // 	return;
        // }
        // if(age.trim() === ''){
        // 	setError(`Будь ласка, заповніть Age поле`);
        // 	return;
        // }
        // if(email.trim() === ''){
        // 	setError(`Будь ласка, заповніть Email поле`);
        // 	return;
        // }
        // if(password.trim() === ''){
        // 	setError(`Будь ласка, заповніть Password поле`);
        // 	return;
        // }

        // Проверяем каждое значение перед вызовом trim()
        if (!name || name.trim() === '') {
            setError('Будь ласка, заповніть Name поле');
            return;
        }
        if (!age || age.trim() === '') {
            setError('Будь ласка, заповніть Age поле');
            return;
        }
        if (!email || email.trim() === '') {
            setError('Будь ласка, заповніть Email поле');
            return;
        }
        if (!password || password.trim() === '') {
            setError('Будь ласка, заповніть Password поле');
            return;
        }

        setName('');
        setAge('');
        setEmail('');
        setPassword('');
        setError('');
    }


    ///////////////////task 2
    const [animals, setAnimals] = useState([]);

    const [animal, setAnimal] = useState();
    const [breed, setBreed] = useState();
    const [photo, setPhoto] = useState('');

    const onAddAnimals = () => {
        const pet = {
            animal,
            breed,
            photo,
        };
        setAnimals([...animals, pet])
        // setAnimal([pet])
        setAnimal('');
        setBreed('');
        setPhoto('');
    }
    console.log(animals)

    const onGetAnimal = (value) => {
        setAnimal(value)
    };
    const onGetBreed = (value) => {
        setBreed(value);
    };

    const onGetPhoto = (value) => {
        setPhoto(value)
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="common-form">
                <Input label="Name: "
                    placeholder="Enter Your Name"
                    onChangeFunction={onGetName}
                    value={name}
                // error={name && name.trim() === '' && 'Будь ласка, заповніть Name поле'} 
                />

                <Input label="Age: "
                    placeholder="Enter Your Age"
                    onChangeFunction={onGetAge}
                    value={age}
                // error={age && age.trim() === '' && 'Будь ласка, заповніть Age поле'} 
                />

                <Input label="Email: "
                    placeholder="Enter Your Email"
                    onChangeFunction={onGetEmail}
                    value={email}
                // error={email && email.trim() === '' && 'Будь ласка, заповніть Email поле'} 
                />

                <Input label="Password: "
                    placeholder="Enter Your Password"
                    type="password"
                    onChangeFunction={onGetPassword}
                    value={password}
                // error={password && password.trim() === '' && 'Будь ласка, заповніть Password поле'} 
                />

                <button type='submit'>Sign Up</button>
                {error && <p>{error}</p>}
            </form>

            <div className='d-flex'>
                <form className="common-form animal">
                    <Input label="Animal: "
                        placeholder="Enter Your Animal"
                        onChangeFunction={onGetAnimal}
                        value={animal}

                    />

                    <Input label="Breed: "
                        placeholder="Enter Your Breed"
                        onChangeFunction={onGetBreed}
                        value={breed}

                    />

                    <Input label="Photo: "
                        placeholder="Enter Your Photo"
                        onChangeFunction={onGetPhoto}
                        type="url"
                        value={photo}

                    />
                    <button className='animal' type='button' onClick={onAddAnimals}>Add Animals</button>
                </form>
                {/* <UserCard /> */}
                <div className="animals-list">
                    {animals.map((pet, index) => {
                        const { animal, breed, photo } = pet;
                        return (<UserCard key={index} animal={animal} breed={breed} photo={photo} />)
                    })}
                    {/* <img src={photo} alt="photo" /> */}
                    {/* imageUrl */}
                </div>
            </div>
        </div>
    );
};


export default RegistrationForm;