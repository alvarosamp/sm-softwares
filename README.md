# S&M Softwares — Site institucional

Site estático (HTML/CSS/JS puro, sem build) apresentando os produtos da S&M Softwares:

- **Edital Matcher** — matching de catálogo x edital com IA (OCR → RAG → LLM)
- **Bid Bunny CRM** — CRM operacional para o ciclo de licitação
- **Erário** — motor preditivo de arrecadação e desvio orçamentário para o setor público

## Rodar localmente

Não há build step. Basta abrir `index.html` no navegador, ou servir a pasta:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Estrutura

```
index.html
styles.css
script.js
```

## Publicação (GitHub Pages)

Este repositório está pronto para GitHub Pages a partir da branch `main`, pasta raiz:

1. `Settings` → `Pages`
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `(root)`
4. Salvar — o site fica em `https://<usuario>.github.io/<repositorio>/`

O arquivo `.nojekyll` na raiz evita que o GitHub Pages rode o processamento Jekyll
(desnecessário aqui e pode interferir em arquivos/pastas iniciados com `_`).

## Pendências antes de um lançamento real

- Formulário de contato ainda não envia e-mail de verdade (front-end apenas)
- Domínio próprio ainda não configurado (hoje roda em `github.io`)
- Textos de preço são valores de referência, não uma tabela comercial fechada
