

//photo change
let slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(function(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}, 3000);



//password Section
function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let suggestions = document.getElementById("suggestions");

    let score = 0;

    // reset suggestions
    suggestions.innerHTML = "";

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {

        result.innerHTML = "🔴 Weak Password";
        result.style.color = "red";

        suggestions.innerHTML = `
            <h4>🔐 Suggested Strong Passwords:</h4>
            <ul>
                <li>Cyber@2026Safe</li>
                <li>Secure#Net99</li>
                <li>BlueShield!88</li>
                <li>VaultKey@1234</li>
            </ul>
        `;

    } else if (score <= 4) {

        result.innerHTML = "🟡 Medium Password";
        result.style.color = "orange";

        suggestions.innerHTML = `
            <h4>💡 Improve Your Password:</h4>
            <p>Add special characters and uppercase letters.</p>
        `;

    } else {

        result.innerHTML = "🟢 Strong Password";
        result.style.color = "lime";

        suggestions.innerHTML = `
            <p>✅ Great! Your password is secure.</p>
        `;
    }
}

//phishing part
function checkURL(){

    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if(url.startsWith("https://")){

        result.innerHTML = "🟢 Secure Connection (HTTPS)";
        result.style.color = "#16f47d";

    }
    else if(url.startsWith("http://")){

        result.innerHTML = "🟡 Not Secure (HTTP)";
        result.style.color = "orange";

    }
    else{

        result.innerHTML = "🔴 Invalid URL";
        result.style.color = "red";

    }
}