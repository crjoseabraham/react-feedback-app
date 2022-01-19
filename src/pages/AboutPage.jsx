import Card from '../components/shared/Card'

const AboutPage = () => {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>Made with React, react-router-dom 6.</p>

                <p>
                    <a href='/'>Back to Home</a>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
