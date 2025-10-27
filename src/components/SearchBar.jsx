const SearchBar = ({userInput, setUserInput}) => (
    <input
        className="search-bar"
        type="text"
        placeholder="search a robot"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
);


export default SearchBar;