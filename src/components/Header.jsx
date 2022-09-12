

export default function Header({handleToggleDarkMode, darkMode}) {

    const styles = {
        backgroundColor: darkMode ? "white" : "rgb(24, 23, 23)" ,
        color: darkMode ? "rgb(24, 23, 23)" : "white",
        fontWeight: "bold",
        transition: "0.3s",
        boxShadow: "2px 5px 15px 1px rgba(0,0,0,0.44)"
    }


    return(
        <div className="header">
                <h1>Notes</h1>
                <button onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)} className="save" style={styles}>{darkMode ? "Light Theme" : "Dark Theme"}</button>
        </div>
    )
}
