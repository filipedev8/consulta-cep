const cep = document.getElementById('cep');
const buscarCep = document.getElementById('btnBuscar'); 
const btnDarkLight = document.querySelector('.btn-darkLight')

buscarCep.addEventListener('click', () => {
    const logradouro = document.getElementById('logradouro');
    const complemento =  document.getElementById('complemento');
    const bairro = document.getElementById('bairro');
    const localidade = document.getElementById('localidade');
    const estado = document.getElementById('estado');

    if(cep.value === "") {
        return alert('Precha o Campo "Digite aqui seu CEP" e tente novamente :)')
    } else if(cep.value.length < 8) {
        return alert('Formato de CEP inválido.')
    }

    const request = axios.get(`https://viacep.com.br/ws/${cep.value}/json/`).then(({data}) => {
        if(data?.erro){
            return alert('O CEP Informado Não foi encontrado')  
        } else{
            logradouro.value = data.logradouro
            complemento.value = data.complemento
            bairro.value = data.bairro
            localidade.value = data.localidade
            estado.value = data.uf
        }
        document.querySelector('.row-result').style.display = "flex";
    })
});

btnDarkLight.addEventListener('click', function() {
    this.classList.toggle('dark-light')
    document.querySelector('body').classList.toggle('dark-light')
})