function RegisterUser(name, username, department, password, email) {
    $.ajax({
        url: proxy + "/users/register",
        type: "POST",
        data: { name, username, department, password, email },
        success: function (data, status, jqXHR) {
            alert("Registered Successfully ! ")
            window.location.href = "login.html"
        },
        error: function (jqXHR, status, errorThrown) {
            alert("Registration Failed :(")
        },
        dataType: "JSON",
        timeout: 5000
    })
}

function LoginUser(email, password) {
    $.ajax({
        url: proxy + "/users/login",
        type: "POST",
        data: { email, password },
        success: function (data, status, jqXHR) {
            localStorage.setItem("userInfo", JSON.stringify(data))
            window.location.href = "events.html"
        },
        error: function (jqXHR, status, errorThrown) {
            alert("Login Failed :(")
        },
        dataType: "JSON",
        timeout: 5000
    })
}
