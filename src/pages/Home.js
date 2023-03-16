import React from "react";
import GetData from "../components/Data/Data";
import SearchForm from "../components/Form/SearchForm";
import ShowLogo from "../components/Logo/ShowLogo";
import { useState } from "react";

function Home() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <ShowLogo />
            <SearchForm onSearch={setSearch} />
            <GetData search={search} />
        </div>
    );
}

export default Home;
