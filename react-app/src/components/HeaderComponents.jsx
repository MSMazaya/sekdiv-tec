import logo from '../logo.svg';

export default function HeaderComponents() {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React with Mazaya
            </a>
        </>
    )

}

