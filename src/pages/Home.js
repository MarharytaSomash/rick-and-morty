import React from "react";
import GetData from "../components/Data/GetData";
import SearchForm from "../components/Form/SearchForm";
import ShowLogo from "../components/Logo/ShowLogo";

function Home() {
    return (
        <div>
            <ShowLogo />
            <SearchForm />
            <GetData />
        </div>
    );
}

export default Home;
