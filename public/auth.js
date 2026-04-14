import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const signupBtn = document.getElementById('signupBtn');

if (signupBtn) {
    signupBtn.addEventListener('click', async () => {
        const email = document.getElementById('signupEmail').value;
        const pass = document.getElementById('signupPass').value;

        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            alert("Account ban gaya! Welcome to Campus Connect.");
            window.location.href = "index.html"; 
        } catch (error) {
            alert("Error: " + error.message);
        }
    });
}