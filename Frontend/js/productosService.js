async function getProductos(){
    const res = await fetch('http://localhost:4000/api/productos');
    const resJson = await res.json()
    console.log(resJson)
    return resJson;
};

async function getClientes(){
    const res = await fetch('http://localhost:4000/api/clientes');
    const resJson = await res.json()
    console.log(resJson)
    return resJson;
}

