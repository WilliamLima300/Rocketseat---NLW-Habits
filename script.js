// adicionar constante e dar o nome conforme documentação da biblioteca

const form = document.querySelector("#form-habits")

// adicionar variavel para inicaiar a biblioteca

const nlwSetup = new NLWSetup(form)

// objeto tem o nome do atributo HTML datan-name
const data = {
  run: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
  takePills: ["01-03"],
  journal: ["01-02"],
}

//adicionar ao nlwSetup ops dados da constante data
nlwSetup.setData(data)

//carregar dados internos e renderizar o layout
nlwSetup.load()
