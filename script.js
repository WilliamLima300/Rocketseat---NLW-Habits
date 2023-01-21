// adicionar constante e dar o nome conforme documentação da biblioteca
const form = document.querySelector("#form-habits")

//adicionar variavel para inicaiar a biblioteca
const nlwSetup = new NLWSetup(form)

//variavel para botão registrar dia
const button = document.querySelector("header button")

// adicionar eventos para adicionar o dia e salvar mudanças
button.addEventListener("click", add)
form.addEventListener("change", save)

//adicionar função ao botão registrar dia
function add() {
  //adiciona a data atual tira os dados do ano.
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //guarda na variavel atraves de uma função se o dia já existe
  const dayExists = nlwSetup.dayExists(today)

  //se existir dia adiciona mensagem ao usuario
  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Dia adicionado com sucesso ✅")

  //função para adicionar o dia
  nlwSetup.addDay(today)
}
//adicionar função para salvar as mudanças
function save() {
  window.localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//variavel para guardar e transformar em objeto novamente usando o JSON os dados da local Storage ou um objeto vazio
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//adicionar ao nlwSetup os dados da constante data
nlwSetup.setData(data)

//carregar dados internos e renderizar o layout
nlwSetup.load()
