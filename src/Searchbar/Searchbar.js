export const Searchbar = ({ onSubmit, searchQuery, onChange }) => {
    return (
        <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
            <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            </button>

            <input
            className="SearchForm-input"
            value={searchQuery}
            name='searchQuery'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
            />
        </form>
        </header>
    )
}