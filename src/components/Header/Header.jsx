import './Header.css'

export const Header = ({ title, subtitle }) => {
    return (
        <>
            <header>
                <h1>{ title }</h1>
                <h2>{ subtitle }</h2>
            </header>
        </>
    )
}