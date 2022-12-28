//dados para teste
const { data:html } = require('../../html.json')
const {data:rx} = require("../../rx.json")  
const generatePDFromString = require('../util/generatePdf') // teste
const createReadStream = require("../util/createReadStream"); // ok


class LaudosPdfService {
  async getGeneratePDF(data) {
    const atendimento = {nrAtendimento:432564,nomeCliente:'robert',dataNascimento:'12/02/2003', dsConvenio:49,dsSetor:'teste',dataEntrada:new Date(),dsAssinatura:'haha'}
    const tipoProfissional = 1,
    profissional = 2,
    nomeDoc = 'Exame';
const hahah = `<div class="row p-4 mb-4">
<div id="printMe">
   <!-- CABEÇALHO INICIO -->   <div style="display: flex; flex-direction: row; width: 100%; margin-bottom: 10px;">
       <div style="border: solid 1px #93b8a6; display: flex; justify-content: center;">
           <img
               src='data:image/png;base64,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'
               width="100" />
           </div>
        <div style="border: solid 1px #93b8a6; width: 100% ; display: flex; flex-direction: column;">
        <h5 style="margin: 20px 0px 0px 0px; text-align: center;"><strong>SAMEL SERVICOS DE ASSISTENCIA
                   MEDICO HOSPITALAR LTDA</strong></h5>
           <p style="margin: 0px; display: flex; justify-content: center;"><small>Rua Joaquim Nabuco, 1755 -
                   Manaus - AM - CEP 69020030 - Fone: 21292200</small></p>
           <p style="margin: 0px; display: flex; justify-content: center;"><small>CRF-RS 5-11649 CNPJ:
                   04159778000107 INSCRI. MUN.:</small></p>
           </div>
       </div>
   <!-- CABAÇALHO FIM -->
   <!-- EXAMES / ATENDIEMENTO INICIO -->
    <div style="display: flex; margin-bottom: 10px;">
        <div style="width: 100%; border: solid 1px #93b8a6">
            <p style="text-align: center"><strong>${nomeDoc}</strong></p>
           </div>
        <div style="width: 100%; border: solid 1px #93b8a6">
           <p style="text-align: center"><strong>ATENDIMENTO:
               </strong><strong>${atendimento.nrAtendimento}</strong></p>
           </div>
    </div>

</div>
   <!-- EXAMES / ATENDIEMENTO FIM -->
   
    <!---->
    <div style="display: flex; flex-direction: row; width: 100%; margin-bottom: 10px;">
        <div style="width: 100%; border: solid 1px #93b8a6; padding-left: 10px;">
            </div>
        </div>
    <!---->
<!-- CORPO INICIO -->
   <div style="display: flex; flex-direction: row; width: 100%; margin-bottom: 10px; border: solid 1px #93b8a6;
       min-height: 875px;">
       <div class="col-12" >
           ${data}
       </div>
       </div>
    <!-- CORPO FIM -->
   <!-- RODAPÉ INICIO -->
<div style="display: flex; flex-direction: row; width: 100%; margin-bottom: 10px;">
       <div style=width:50%; border: solid 1px #93b8a6; padding-left: 10px;>
            <p style="margin:5px 0px 0px 0px;"><strong>Paciente:</strong> ${atendimento.nomeCliente}</p>
            <p style="margin:0px 0px 5px 0px;"><strong>Data Nasc:</strong> ${atendimento.dataNascimento}</p>

       </div>
       <div style="width: 50%; border: solid 1px #93b8a6; padding-left: 10px;">
           <p style="margin:5px 0px 0px 0px;"><strong>Convênio:</strong> ${atendimento.dsConvenio}</p>
           <p style="margin:0px 0px 5px 0px;"><strong>Setor:</strong> ${atendimento.dsSetor}</p> 
            </div>
        </div>
    <!-- RODAPÉ FIM -->        
    <!-- RODAPÉ 2 INICIO -->
    <div style="display: flex; flex-direction: row; width: 100%; margin-bottom: 10px;">
        <div style="width:70%; border: solid 1px #93b8a6; padding-left: 10px;">
            <p style="margin:5px 0px 0px 0px; text-align: center;>
               <strong>${tipoProfissional}:</strong> ${profissional}</p>
            <p style="margin: 0px 0px 5px 0px; text-align: center"><strong>Data de Entrada:</strong>
               ${atendimento.dataEntrada}</p> 
        </div>
        <div style="width:30%; border: solid 1px #93b8a6; padding-left: 10px;">
            <p style="margin:"5px 0px 0px 0px;"><strong>Assinatura:</strong></p>
            <p style="margin:0px 0px 5px 0px; text-align: center" v-html=assinatura>
               ${atendimento.dsAssinatura}</p> 
            </div>
        </div>
    <!-- RODAPÉ 2 FIM -->
    <div style=display:flex; justify-content: center;>
       <FooterExame></FooterExame>
       </div> 
    </div> 
</div>`


const htmlWithNewTags = `
<html>
<head>
 <style type="text/css">
   html, body {
     height: 100%;
     display: flex!important;
   }


   .col-12  {
     max-width: 100%;
     font-size: 11px;
     padding: 0;
     margin: 0 auto !important;
     -webkit-transform: scale(0.90);
       -moz-transform: scale(0.60);
         transform: scale(0.67);
   }

 </style>
</head>
<body>
  ${hahah}
</body>
</html>`

      const {filePath}  = await generatePDFromString(htmlWithNewTags)
      // const { filePath } = await libteste(rx)
      console.log(filePath)
      const stream = await createReadStream(filePath);
      return stream
  }
} 

module.exports = { LaudosPdfService };

