## api-pdf

#### Descrição
Esta aplicanção tem como foco gerar pdf's a partir de um html string, 
fazendo upload destes arquivos para AWS(s3), sendo então retornado o link do mesmo.

 #### Objetivo
 - Gerar pdf
 - Fazer Upload para AWS(s3)
 - Retorna o link do arquivo

#### Rotas
  <div>
  		<h1>"/generate"</h1>
      <p>Descrição: Gerar/upload de um unico arquivo para aws(que é recebido via body da requisição)</p>
    	<p>Método: POST</p>
    	<p>estrutura Body: </p>
    	<img align="center"  height="200" width="350" src="https://user-images.githubusercontent.com/85000849/213530362-34f9e3d2-8f0b-4e25-a010-9384007fe6ee.png"/>
  </div>
    <div>
  		<h1>"/generateMultiples"</h1>
      <p>Descrição: Gerar/upload de varios arquivos para aws de forma ordenada(que é recebido via body da requisição), exemplo se for passado 10 html (conforme a image abaixo) ele ira gera/upload dos arquivo um de cada vez</p>
    	<p>Método: POST</p>
    	<p>estrutura Body: </p>
    	<img align="center"  height="300" width="450" src="https://user-images.githubusercontent.com/85000849/213534819-11ff7d6d-879b-447f-951d-536339416164.png"/>
  </div>
    <div>
  		<h1>"/generateSaveLocation"</h1>
      <p>Descrição: Gera somente o pdf, sem fazer o upload para aws, função criada somente para validar se o pdf que está sendo gerado está conforme o desejado</p>
    	<p>Método: POST</p>
    	<p>estrutura Body: </p>
    	<img align="center"  height="200" width="350" src="https://user-images.githubusercontent.com/85000849/213530362-34f9e3d2-8f0b-4e25-a010-9384007fe6ee.png"/>
  </div>
     <div>
  		<h1>"/fetch_file"</h1>
      <p>Descrição: Busca os arquivos na aws conforme o nome que é passado no body da requisição, se for feito uploads de arquivo com o mesmo nome, ao fazer a solicitação para buscar esses arquivos ele retornará os dois, ou seja, ele te retornar o link de todos os arquivos que corresponde com nome passado na requisição</p>
    	<p>Método: POST</p>
    	<p>estrutura Body: </p>
    	<img align="center"  height="180" width="330" src="https://user-images.githubusercontent.com/85000849/213536038-b6f8b926-56eb-45f9-af65-4f2b8510bb1d.png"/>
  </div>
