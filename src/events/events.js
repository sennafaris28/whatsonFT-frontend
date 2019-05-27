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

function getEventsByOrganization(orgId) {
    $.ajax({
        url: domain + "/organizations/" + orgId + "/events",
        type: "GET",
        data: orgId,
        success: function (data) {
            localStorage.setItem("woftEventsByOrgInfo", JSON.stringify(data))
            showEvents(data)
        },
        error: function (status) {
            console.log(status)
            alert("Failed to fetch data!")
        },
        dataType: "json",
        timeout: 10000
    })
}

function newEvent(name, organization, type, category, description, date) {
    $.ajax({
        url: domain + "/events/new",
        type: "POST",
        data: { name, organization, type, category, description, date },
        success: function (data) {
            alert("Create event success!")
            window.location.href = 'index.html'
        },
        error: function (status) {
            console.log(status)
            alert("Error")
        },
        dataType: "json",
        timeout: 10000
    })
}
