import React from "react";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import PropTypes from "prop-types";

import "./styleForm.scss";

function SearchForm({ onSearch }) {
    const [search, setSearch] = useState("");
    const [searchHistory, setSearchHistory] = useLocalStorage("searchHistory", []);

    useEffect(() => {
        if (searchHistory.length > 0) {
            onSearch(searchHistory[searchHistory.length - 1]);
        }
    }, [onSearch, searchHistory]);
    
    const handleInputChange = (event) => {
        setSearch(event.target.value);
        onSearch(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchHistory([...searchHistory, search]);
    };

    return (
        <div className="search-form">
            <div className="search-icon">
                <img src={process.env.PUBLIC_URL + "/img/search.png"} alt="vector" />
            </div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Filter by name ..."
                    value={search}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}

export default SearchForm;

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
