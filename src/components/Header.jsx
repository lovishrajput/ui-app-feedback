import PropTypes from "prop-types"

function Header({text,bgcolor,textcolor}){
const headerstyles={
    backgroundColor:bgcolor,
    color:textcolor,
}


    return(
        <header style={headerstyles}>
        <div className="container">
         <h2>{text}</h2>
        </div>
        </header>
    )

}

Header.defaultProps={
    text:'feedback ui',
    bgcolor:'black',
    textcolor:'white',

}
Header.propTypes={
    text: PropTypes.string,
}

export default Header
