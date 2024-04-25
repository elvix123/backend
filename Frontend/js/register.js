document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = {
        id: 0, 
        nombre: e.target.querySelector('#user').value,
        email: e.target.querySelector('#email').value,
        password: e.target.querySelector('#password').value
    };

    const res = await fetch("http://localhost:4000/api/clientes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });   
});
