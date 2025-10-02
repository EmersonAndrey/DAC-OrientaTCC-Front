# 🎓 OrientaTCC Frontend — React + Bootstrap

## 📝 Descrição do Projeto

O OrientaTCC Frontend é a interface web do sistema OrientaTCC, um projeto desenvolvido para auxiliar alunos, orientadores e coordenadores na gestão de Trabalhos de Conclusão de Curso (TCC).

O frontend foi construído em React, aplicando boas práticas de componentização, organização de serviços e consumo de APIs REST expostas pelo backend (Spring Boot).

---

## 📂 Estrutura do Projeto

O projeto segue uma organização modular para facilitar a manutenção e evolução.

```shell
DAC-OrientaTCC-Front/
├── public/                     # Arquivos estáticos
├── src/
│   ├── componentes/            # Componentes reutilizáveis
│   ├── paginas/                # Telas principais (Aluno, Orientador, Coordenador)
│   ├── services/               # Serviços para chamadas de API (fetch/axios)
│   ├── formularios/            # Componentes voltados para formulários
│   ├── context/                # Context API para estados globais (ex: autenticação)
│   ├── util/                   # Funções utilitárias
│   ├── App.jsx                 # Componente principal
│   └── main.jsx                # Ponto de entrada da aplicação
├── index.html                  # Página inicial
└── package.json                # Dependências e scripts`
```

---

## ✨ Funcionalidades
- [x] Autenticação e controle de acesso (aluno, orientador, coordenador)
- [x] Cadastro e gerenciamento de **TCCs**
- [x] Envio e visualização de **atividades** e **PDFs**
- [x] Painel do aluno para acompanhar progresso
- [x] Painel do orientador para acompanhar TCCs vinculados
- [x] Integração com backend em Spring Boot via chamadas REST
- [x] Interface responsiva com Bootstrap
      
---

## 🛠️ Tecnologias Utilizadas  

- **Frontend:** React 18   
- **Estilização:** Bootstrap 5, CSS   
- **Gerenciamento de estado:** React Context API  
- **Consumo de API:** Axios

---
      
## 🚀 Como Rodar o Projeto  

### 🔧 Pré-requisitos  
- Node.js 18+  
- npm ou yarn  

### ▶️ Passo a Passo  

```bash
# Clone o repositório
git clone https://github.com/EmersonAndrey/DAC-OrientaTCC-Front.git

# Acesse a pasta do projeto
cd DAC-OrientaTCC-Front

# Instale as dependências
npm install

# Inicie a aplicação
npm start
```
A aplicação ficará disponível em:
👉 http://localhost:3000

---

## 🔗 Integração com Backend
O frontend se conecta ao backend OrientaTCC (Spring Boot), que expõe endpoints REST.

Exemplo de configuração no `services/AtividadeService.js:`
```bash
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/trabalhoAcademico/";

export async function criarTrabalhoAcademico(trabalhoAcademico, tokenUsuario) {
  try {
    const response = await axios.post(`${API_BASE_URL}`, trabalhoAcademico, {
      headers: {
        Authorization: `Bearer ${tokenUsuario}`
      }
    });
    return response.data;

  } catch (error) {
    console.error("Erro ao criar trabalho:", error);
    throw error;
  }
}
```

## 👨‍💻 Desenvolvedores
- [Ana Maria Alves Felix](https://github.com/anaMariaFelix)
- [Emerson Andrey Fausto dos Santos](https://github.com/EmersonAndrey)
- [Ismael Morais Ribeiro](https://github.com/IsmaelMoraisRibeiro20)
