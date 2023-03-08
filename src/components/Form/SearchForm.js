import React from "react";
import { useState } from "react";
import "./styleForm.scss";

function SearchForm() {
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="search-form">
            <div className="search-icon">
                <img src={process.env.PUBLIC_URL + "/img/vector.png"} alt="vector" />
            </div>
            <form>
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
