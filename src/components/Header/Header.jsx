// import { Fragment } from "react";
import NavigationItem from "../NavigationItem";

import { useContext } from "react";
import { UsersContext } from "../../App";

import './Header.css'


// const Header = () => {

//     // const navElements = [
//     //     'First', 'Second', 'Third'
//     // ]
//     // console.log(navElements.map((element) => {
//     //     return element.toUpperCase()
//     // }))
//     return (
//         <div className='common-header'>
//             <NavigationItem
//                 text='main'
//                 isUppercaseText={true}
//                 description="some description"
//                 shoulRenderDescription={true} />

//             <NavigationItem
//                 text='second'
//                 isUppercaseText={true}
//                 description="second description"
//                 shoulRenderDescription={true} />

//             <NavigationItem
//                 text='third'
//                 isUppercaseText={true}
//                 description="third description"
//                 shoulRenderDescription={true} />

//             <NavigationItem text='Second elem' isUppercaseText={false} />
//             <NavigationItem text='Third elem' isUppercaseText={false} />
//             <NavigationItem text='Fourth elem' isUppercaseText={true} />
//         </div>
//     );
// }



/////////////way2

const Header = () => {

    const { data } = useContext(UsersContext);

    const navElements = [
        {
            text: 'First',
            isUppercasetext: true,
            description: "second description",
        },
        {
            text: 'Second',
            isUppercasetext: true,
            description: "second description",
        },
        {
            text: 'Third',
            isUppercasetext: true,
            description: "second description",
        },
        // {
        //     text: 'samsung',
        //     isUppercasetext: true,
        // },
    ];
    //    console.log(undefined && "Hello" )

    return (
        <header>
            <div className='common-header'>
                {
                    navElements.map((element) => {
                        return (
                            <NavigationItem
                                key={element.text}
                                text={element.text}
                                isUppercasetext={element.isUppercasetext}
                                description={element.description}
                                shoulRenderDescription={true} />
                        )
                    })
                }
            {/* <div>Animal Caunt: {data} </div> */}
            <div>Max. Characters: {data} </div>
            </div>
            {/* <NavigationItem text='header' isUppercasetext={false} /> */}
        </header>);
}

export default Header;