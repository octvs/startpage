const input = document.getElementById("input_search");

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        let value = input.value;

        if (value.length != 0) {
            search(value);
        }
    } else {
        input.focus();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 27) {
        input.value = "";
    }
});

function search(value) {
    // TODO: turn this into a config item
    search_service = "https://www.google.com/search?q=";

    if (search_service.match("startpage")) {
        let url = search_service.replace("SEARCH", value);
        window.location = url;

        return;
    }

    window.location = search_service + value;
}
