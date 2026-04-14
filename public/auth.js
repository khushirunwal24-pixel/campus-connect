signupBtn.addEventListener('click', async (e) => {
    e.preventDefault(); // 🔥 MUST ADD THIS

    const email = document.getElementById('signupEmail').value;
    const pass = document.getElementById('signupPass').value;

    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        alert("Account ban gaya!");
        window.location.href = "index.html"; 
    } catch (error) {
        console.log(error);
        alert(error.code + " - " + error.message);
    }
});