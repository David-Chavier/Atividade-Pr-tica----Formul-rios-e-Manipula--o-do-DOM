// 1. Desenvolva uma página HTML que replique a imagem acima,
// contendo um formulário com todos os itens mostrados.
// 2. Todos os campos de dados pessoais devem ser preenchidos
// obrigatoriamente pelo usuário.
// 3. Ao carregar a página deve vir previamente marcado um dos radios
// buttons.
// 4. O usuário deve marcar ao menos um checkbox. Deve ser validado o
// preenchimento desse input.
// 5. O campo de texto de label “mini-curriculo” não é obrigatório o
// preenchimento pelo usuário.
// 6. Capture os dados preenchidos no formulário utilizando os métodos
// de manipulação do DOM. Ao final, mostre no console.log os dados
// preenchidos pelo usuário.

let inputs = document.querySelectorAll('input.interesse');
function verificar() {
    return [].filter.call(inputs, function (input) {
        return input.checked;
    }).length;
} 
document.getElementById('botton-login').addEventListener('click', () => {
    let valido = verificar();
    if (!valido){

        const dados = document.getElementById('formulario')

        dados.addEventListener("submit", (evento) => {
            evento.preventDefault()
            console.clear()
        })

        alert('Falta escolher uma checkbox!')
      
    }else{
        passouValidaçao()

    }
});

function passouValidaçao(){
    const dados = document.getElementById('formulario')

    dados.addEventListener("submit", (evento) => {
        evento.preventDefault()
  
        const nome = document.getElementById('nome').value

        const endereço = document.getElementById('endereço').value

        const cidade = document.getElementById('cidade').value

        const estado = document.getElementById('estado').value

        const cargo = document.querySelector('input[name="cargo"]:checked').value

        let resultadoCheckbox = []

        const checkboxComputaçao = document.getElementById('computaçao')
        if(checkboxComputaçao.checked){
            resultadoCheckbox.push(checkboxComputaçao.value)
        }
        const checkboxBiologia = document.getElementById('biologia')
        if(checkboxBiologia.checked){
            resultadoCheckbox.push(checkboxBiologia.value)
        }
        const checkboxAmbiente = document.getElementById('ambiente')
        if(checkboxAmbiente.checked){
            resultadoCheckbox.push(checkboxAmbiente.value)
        }
        const checkboxEngenharia = document.getElementById('engenharia')
        if(checkboxEngenharia.checked){
            resultadoCheckbox.push(checkboxEngenharia.value)
        }
        const checkboxHistoria = document.getElementById('historia')
        if(checkboxHistoria.checked){
            resultadoCheckbox.push(checkboxHistoria.value)
        }

        const curriculo = document.getElementById('curriculo').value

        let usuario = {
            nome: nome,
            endereço: endereço,
            cidade: cidade,
            estado: estado,
            cargo: cargo,
            checkbox: resultadoCheckbox,
            curriculo: curriculo
        }
        console.clear()
        console.log(usuario)
    })
}