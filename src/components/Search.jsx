import search from "../icons/search.png"

export default function Search({handleSearchNote, Text}) {
    return (
        <div className="search">
            <img src={search} className="search-icons" width="15px"/>
            <input onChange={(event) => handleSearchNote(event.target.value.toLocaleLowerCase())} type="text" placeholder="type to search" value={Text}/>
        </div>
    )
}
