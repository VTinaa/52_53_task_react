import './navigationItem.css';

const NavigationItem = (props) => {
    const { text, isUppercaseText, description, shoulRenderDescription } = props;
    console.log(props);


    {/* way2 */}
    // const descriptionSection = (
    //     <div className="description">
    //         {description}
    //     </div>
    // );

    return (
        // <div>{ props.text }</div>

        <div className="common">
            <div className="text">
                {isUppercaseText ? text.toUpperCase() : text}
            </div>
            {shoulRenderDescription && (
                <div className="description">
                    { description }
                </div>
            )}

            {/* way2 */}
            {/* {description && descriptionSection} */}

        </div>
    )
}

export default NavigationItem;
