const laudosTemplate = (data)=>{
    console.log(data.nomeDoc)
    const template = `
</div>

    <div style="display:-webkit-inline-flex; width: 100%; margin-bottom: 10px;">
        <div style="width: 50%; border: solid 1px #93b8a6">
            <p style="text-align: center"><strong>${data.nomeDoc}</strong></p>
        </div>
        <div style="width: 50%; border: solid 1px #93b8a6">
            <p style="text-align: center"><strong>ATENDIMENTO:
                </strong><strong>${data.atendimento[0].nrAtendimento}</strong></p>
        </div>
    </div>


    <div style="width: 100%; margin-bottom: 10px; border: solid 1px #93b8a6;
       min-height: 400px;">
       <div class="col-12" style="margin:10px;" max-width!importants:50%; heigth:50% -web-transform:scale(0.93); -moz-tranform:scanle(0.67);
       transform:scanle(0.67) >
           ${data.data}
       </div>
    </div>

</div>`

return template
}

module.exports = laudosTemplate