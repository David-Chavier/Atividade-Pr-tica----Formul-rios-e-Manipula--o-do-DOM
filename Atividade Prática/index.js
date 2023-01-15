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

document.getElementById('formulario').addEventListener("submit", (evento) => {
    evento.preventDefault()
    let valido = verificar();
    
    if (!valido){

        return alert('Falta escolher uma checkbox!')

    }

    const nome = document.getElementById('nome').value
    const endereço = document.getElementById('endereço').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
    const cargo = document.querySelector('input[name="cargo"]:checked').value
    const curriculo = document.getElementById('curriculo').value
    let areasSelecionadas = [];
    const area = document.querySelectorAll('input[name="area"]:checked')

    for (let i = 0; i < area.length; i++) {
        areasSelecionadas.push(area[i].value);

    }
    

    let usuario = {
        nome: nome,
        endereço: endereço,
        cidade: cidade,
        estado: estado,
        cargo: cargo,
        checkbox: areasSelecionadas,
        curriculo: curriculo
    }
    console.clear()
    console.log(usuario)
})
