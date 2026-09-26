function createAccount(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("message").innerText =
            "Passwords do not match!";
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentPhone", phone);
    localStorage.setItem("studentPassword", password);

    document.getElementById("message").innerText =
        "Account created successfully!";

    setTimeout(function () {
        window.location.href = "dashboard.html";
    }, 700);
}


function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("studentEmail");
    let savedPassword = localStorage.getItem("studentPassword");

    if (email === savedEmail && password === savedPassword) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("loginMessage").innerText =
            "Email or password is incorrect.";

    }
}


function openPage(page) {

    let loading = document.getElementById("loadingScreen");

    if (loading) {

        loading.style.display = "flex";

        setTimeout(function () {
            window.location.href = page;
        }, 500);

    } else {

        window.location.href = page;

    }
}


function closeWelcome() {

    let popup = document.getElementById("welcomePopup");

    if (popup) {
        popup.style.display = "none";
    }

    localStorage.setItem("welcomeShown", "true");
}


function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "true");

    } else {

        localStorage.setItem("darkMode", "false");

    }
}


function showNotifications() {

    let notifications =
        document.getElementById("notifications");

    if (!notifications) return;

    if (notifications.style.display === "block") {

        notifications.style.display = "none";

    } else {

        notifications.style.display = "block";

    }
}


function searchCourses() {

    let input =
        document.getElementById("searchInput");

    if (input && input.value.length > 0) {

        console.log("Searching for:", input.value);

    }
}


function contactTeacher() {

    let message =
        prompt(
            "Write your message to Mr. Abdelrahman Ahmed:"
        );

    if (message) {

        alert(
            "✅ Your message has been sent successfully!"
        );

    }
}


function logout() {

    let confirmLogout =
        confirm("Are you sure you want to log out?");

    if (confirmLogout) {

        localStorage.removeItem("loggedIn");

        window.location.href =
            "login.html";

    }
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            localStorage.getItem("darkMode")
            === "true"
        ) {

            document.body.classList.add(
                "dark-mode"
            );

        }


        let popup =
            document.getElementById(
                "welcomePopup"
            );

        if (popup) {

            if (
                localStorage.getItem(
                    "welcomeShown"
                ) === "true"
            ) {

                popup.style.display = "none";

            } else {

                popup.style.display = "flex";

            }

        }


        let studentName =
            document.getElementById(
                "studentName"
            );

        if (studentName) {

            studentName.innerText =
                localStorage.getItem(
                    "studentName"
                ) || "Student";

        }


        let profileName =
            document.getElementById(
                "profileName"
            );

        let profileEmail =
            document.getElementById(
                "profileEmail"
            );

        let profilePhone =
            document.getElementById(
                "profilePhone"
            );


        if (profileName) {

            profileName.innerText =
                localStorage.getItem(
                    "studentName"
                ) || "Student";

        }


        if (profileEmail) {

            profileEmail.innerText =
                localStorage.getItem(
                    "studentEmail"
                ) || "Not provided";

        }


        if (profilePhone) {

            profilePhone.innerText =
                localStorage.getItem(
                    "studentPhone"
                ) || "Not provided";

        }


        let imageInput =
            document.getElementById(
                "imageInput"
            );

        let profileImage =
            document.getElementById(
                "profileImage"
            );


        if (
            imageInput &&
            profileImage
        ) {

            imageInput.addEventListener(
                "change",
                function () {

                    let file =
                        this.files[0];

                    if (file) {

                        profileImage.src =
                            URL.createObjectURL(
                                file
                            );

                    }

                }
            );

        }

    }
);
