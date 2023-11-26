import { useState } from 'react';
import Input from '../Input';
import UserCard from '../UserCard';

import { v4 as uuidv4 } from 'uuid';

import './registrationForm.css';

//////task3
const DEFAULT_ANIMAL = [
    {
        animal: 'Cat',
        breed: 'Sphynx',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sphynx_cat%2C_lit_from_one_side.jpg/1280px-Sphynx_cat%2C_lit_from_one_side.jpg',
        id: uuidv4(),
    },
    {
        animal: 'Dog',
        breed: 'Labrador',
        photo: 'https://img.freepik.com/premium-photo/portrait-of-a-labrador-retriever-dog-on-an-isolated-black-background-the-picture-was-taken-in-a-photo-studio_259162-158.jpg',
        id: uuidv4(),
    },
    {
        animal: 'Dog',
        breed: 'Pitbull',
        photo: 'https://animals.pibig.info/uploads/posts/2023-09/1695682754_animals-pibig-info-p-pitbul-chernii-shchenok-oboi-5.jpg',
        id: uuidv4(),
    },
];
///////

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
    const [animals, setAnimals] = useState(DEFAULT_ANIMAL);
    // console.log(DEFAULT_ANIMAL)
    const [isEditMode, setIsEditMode] = useState(false);
    const [animal, setAnimal] = useState();
    const [breed, setBreed] = useState();
    const [photo, setPhoto] = useState('');

    const [currentAnimal, setCurrentAnimal] = useState(null);

    const onAddAnimals = () => {
        const pet = {
            animal,
            breed,
            photo,
            id: uuidv4(),
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

    // Удаляем карточку
    const onDeleteAnimalHandler = (id) => {
        console.log(id)
        // setAnimals(animals.filter((pet) => pet.id !== id ))
        const filterAnimals = animals.filter((pet) => pet.id !== id);
        setAnimals(filterAnimals)
    };
    // Сохраняем карточку
    const onUpdateAnimalsHandler = (id) => {
        // console.log(id)
        const currentAnimal = animals.find((pet) => pet.id === id);
        setAnimal(currentAnimal.animal);
        setBreed(currentAnimal.breed);
        setPhoto(currentAnimal.photo);
        setIsEditMode(true);
        setCurrentAnimal(currentAnimal);

        //way2
        // const currentAnimal = animals.filter((pet) => pet.id === id)[0];
        // // setAnimals(currentAnimals)
        // setAnimal(currentAnimal.animal);
        // setBreed(currentAnimal.breed);
        // setPhoto(currentAnimal.photo);
        // setIsEditMode(true)

        //way3
        // const currentAnimal = animals.find ((pet) => pet.id === id);
        // if ( currentAnimal ) {
        //     const { animal, breed, photo } = currentAnimal;
        //     setAnimal(animal);
        //     setBreed(breed);
        //     setPhoto(photo);
        // }
        // setIsEditMode(true)
        // setCurrentAnimal(currentAnimal);

        //way4
        // const currentAnimal = animals.filter((pet) => pet.id === id)[0];
        // if (currentAnimal.length > 0) {
        //     const { animal, breed, photo } = currentAnimal[0];
        //     setAnimal(animal);
        //     setBreed(breed);
        //     setPhoto(photo);
        // }
        //


    }
    const onSaveAnimal = () => {

        // Если какое-то из полей пустое -> выходим с функции(не изменяем карточку)
        if (!currentAnimal || !animal || !breed || !photo) {
            return;
        }
        // Создаем обновленный массив с изменениями в текущей карточке
        const updatedAnimals = animals.map((pet) => {
            if (pet.id === currentAnimal.id) {
                return {
                    ...pet,
                    animal,
                    breed,
                    photo,
                };
            }
            return pet;
        });
        setAnimals(updatedAnimals);
        setAnimal('');
        setBreed('');
        setPhoto('');
        setIsEditMode(false)
        setCurrentAnimal(null);

    }

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

                <button className='form-button' type='submit'>Sign Up</button>
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
                    {
                        isEditMode ? (
                            <button className='animal' type='button' onClick={onSaveAnimal}>Save Animals</button>
                        ) : (
                            <button className='animal' type='button' onClick={onAddAnimals}>Add Animals</button>
                        )
                    }

                </form>
                {/* <UserCard /> */}
                <div className="animals-list">
                    {animals.map((pet, index) => {
                        const { animal, breed, photo, id } = pet;
                        return (<UserCard
                            key={index}
                            animal={animal}
                            breed={breed}
                            photo={photo}
                            id={id}
                            onClickDeleteBtn={onDeleteAnimalHandler}
                            onClickUpdateBtn={onUpdateAnimalsHandler}
                        />)
                    })}
                    {/* <img src={photo} alt="photo" /> */}
                    {/* imageUrl */}
                </div>
            </div>
        </div>
    );
};


export default RegistrationForm;