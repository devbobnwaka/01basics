

const header = ({keyword}) => {

    return(
        <header className="logo">
            <input 
                onChange={keyword}
            />
        </header>
    )
}

export default header