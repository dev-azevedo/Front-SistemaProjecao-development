const TipoPessoa = () => {
    let typeClient = [{ id: 1, value: 'MAW' }, { id: 2, value: "WHP" }]
    localStorage.setItem("TypeClient", JSON.stringify(typeClient))
}



export default new TipoPessoa();