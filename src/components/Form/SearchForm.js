import React from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./styleForm.scss";

function SearchForm() {
    const [search, setSearch] = useState("");
    const [searchHistory, setSearchHistory] = useLocalStorage("searchHistory", []);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        setSearchHistory([...searchHistory, search]);
    };

    return (
        <div className="search-form">
            <div className="search-icon">
                <img src={process.env.PUBLIC_URL + "/img/vector.png"} alt="vector" />
            </div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Filter by name ..."
                    value={search}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}

export default SearchForm;
