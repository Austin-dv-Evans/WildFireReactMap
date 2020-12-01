import spinner from './Loading_icon.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading"/>
            <h1>Loading Map</h1>
        </div>
    )
}

export default Loader
