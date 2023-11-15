window.onload = () => {
    document.getElementById("input_search").focus();

    document.getElementById("clock").innerHTML = getTime();
    document.getElementById("message").innerText = defineMessage();

    // Set clock interval to tick clock
    setInterval(() => {
        document.getElementById("clock").innerHTML = getTime();
    }, 30000);

    getService();
    getTheme();
};

function getService() {
    let search_saved = localStorage.getItem("search-service");

    if (search_saved === null)
        search_saved = "https://www.google.com/search?q=";

    document.getElementById("search_select").value = search_saved;
}

function getTheme() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }
}
