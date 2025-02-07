document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    document.getElementById("responseMessage").textContent = result.message;
});