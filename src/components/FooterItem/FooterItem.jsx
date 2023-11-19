const FooterItem = (props) => {

    const { text, isLowercaseText} = props;
    console.log(props);

    // let textToRender;
    
    // if (isLowercaseText) {
    //     textToRender = text.toLowerCase()
    // }
    // else {
    //     textToRender = text.toUpperCase()
    // }
    // return (
    //     <div>{textToRender}</div>
    // )

    let textToRender =  isLowercaseText ? text.toLowerCase() : text.toUpperCase();

    return(
        <div>
            {textToRender}
        </div>
    )
    
}

export default FooterItem;