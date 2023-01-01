const laudosTemplate = (data)=>{
    console.log(data.nomeDoc)
    const template = `
</div>
<!-- CABAÇALHO FIM -->
<!-- EXAMES / ATENDIEMENTO INICIO -->
    <div style="display:-webkit-inline-flex; width: 100%; margin-bottom: 10px;">
        <div style="width: 50%; border: solid 1px #93b8a6">
            <p style="text-align: center"><strong>${data.nomeDoc}</strong></p>
        </div>
        <div style="width: 50%; border: solid 1px #93b8a6">
            <p style="text-align: center"><strong>ATENDIMENTO:
                </strong><strong>${data.atendimento[0].nrAtendimento}</strong></p>
        </div>
    </div>
<!-- EXAMES / ATENDIEMENTO FIM -->

<!-- CORPO INICIO -->
<div style="width: 100%; margin-bottom: 10px; border: solid 1px #93b8a6;
   min-height: 200px;">
   <div class="col-12" max-width:100%;  >
       ${data.data}
   </div>
   </div>
<!-- CORPO FIM -->
<!-- RODAPÉ INICIO -->

<!-- RODAPÉ FIM -->
<!-- RODAPÉ 2 INICIO -->


<!-- RODAPÉ 2 FIM -->
<div style=display:flex; justify-content: center;>
   <FooterExame></FooterExame>
   </div>
</div>
</div>`

return template
}

module.exports = laudosTemplate