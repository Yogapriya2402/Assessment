document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("click").addEventListener("click", function () {
        const name = document.getElementById("username").value.trim(); // Get input value

        if (name !== "") {
            // Redirect to greeting page with name in URL
            window.location.href = `greeting.html?name=${encodeURIComponent(name)}`;
        } else {
            alert("Please Enter Your Name"); // Alert if input is empty
        }
    });
});


