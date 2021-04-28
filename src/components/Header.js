import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title, showAdd, onAdd}) => {


    return (
        <header className = 'header'>
            <h1>{title}</h1>  
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Open'} onClick={onAdd}/> 
        </header>
    )
}

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
