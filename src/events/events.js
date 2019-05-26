function showEvents() {
    $.ajax({
        url: proxy + "/events",
        type: "GET",
        data: { name, organization, description, date, category },
        success: function (data, status, jqXHR) {
            localStorage.setItem("events", JSON.stringify(data))
        },
        error: function (jqXHR, status, errorThrown) {
            console.log(jqXHR)
        },
        dataType: "JSON",
        timeout: 5000
    })
}
