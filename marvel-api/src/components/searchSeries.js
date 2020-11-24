import React, {useState} from "react";
import CharacterCard from './common/Heroes';

export default function SearchHeroes() {

    const searchMarvelContent = async(e) => {
        e.preventDefault();
        console.log("submitting");
        setSearch(true);
        setSearchVal(document.getElementById('searchInput').value);
    }

    const [search,
        setSearch] = useState(false);
    const [searchVal,
        setSearchVal] = useState('');

    return (

        <div className="searchContainer">
            <form className="form" onSubmit={searchMarvelContent}>
                <label className="label" htmlFor="query">
                    <h3>Hero Name</h3>
                </label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder=" Spider-Girl"
                    id="searchInput" />
                <button className="button" type="submit">SEARCH HEROES</button>
                <a className="reset" href="./pages/ComicPage.js">RESET</a>
            </form>

            {search
                ? < CharacterCard searchVal = {
                    searchVal
                } />
                : <div></div>}
        </div>
    )
}