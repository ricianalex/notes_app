

export default function Header({handleToggleDarkMode, darkMode}) {

    const styles = {
        backgroundColor: darkMode ? "white" : "rgb(24, 23, 23)" ,
        color: darkMode ? "rgb(24, 23, 23)" : "white",
        fontWeight: "bold",
        transition: "0.3s"
    }


    return(
        <div className="header">
                <h1>Notes</h1>
                <button onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)} className="save" style={styles}>{darkMode ? "Light Theme" : "Dark Theme"}</button>
        </div>
    )
}
