const Header = () => {
    return (
        <>
            <h1 style={headingStyle}> Echo-Vids</h1>
            <h2 style={subHeadingStyle}> A YouTube Video Recommender for the Sounds in Life</h2>
        </>
    )
}

const headingStyle = {
    color:'White',
    backgroundColor:'#ff4931',
    textAlign:"center"
}

const subHeadingStyle = {
    color:'Grey',
    textAlign:"center"
}

export default Header
