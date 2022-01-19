import PropTypes from 'prop-types'

function Header({ text }) {
    const headerStyles = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#ff6a95',
    }
    return (
        <header style={headerStyles}>
            <div className='container'>
                <h4>{text}</h4>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Test title',
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header
