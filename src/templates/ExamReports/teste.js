const test = `
<div class="header" style="">
  <div style="text-align: center; font-size:6pt;">
    <h1>LAUDO DE EXAME</h1>
  </div>
<div style="display:-webkit-inline-flex; width: 100%; margin-bottom: 20px;">
  <div style="display:-webkit-inline-flex;">
    <ul style="list-style: none;">
      <li style="margin-bottom: 5px; font-size: 7pt ;"><strong> DATA: </strong><span></span>@Data</li>
      <li style="margin-bottom: 5px; font-size: 7pt ;"><strong> REGISTRO: </strong><span></span>@Registro</li>
      <li style="margin-bottom: 5px; font-size: 7pt ;"><strong> NOME: </strong><span></span>@Nome</li>
      <li style="margin-bottom: 5px; font-size: 7pt ;"><strong> SOLICITANTE: </strong><span></span>@Solicitante</li>
  </div>
  <div style="">
    <ul style="list-style: none; windth:80%; margin-right:100px;">
      <li style="margin-bottom: 5px; font-size: 7pt ;"><strong> DATA NASC: </strong><span>@Data_nasc</span></li>
      <li style="margin-bottom: 5px; font-size: 7pt ;"><strong> IDADE: </strong><span></span>@Idade</li>
    </ul>
  </div>
    <div style="padding-left:5%; box-sizing: border-box;width:20%; height: 12%;-webkit-justify-content: center;border: solid 1px #93b8a6;">
      <div style="width:100%; -webkit-justify-content: center;">
        <img width="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC0CAYAAADW+r0xAAADhklEQVR42u3dwW7CMBBF0fz/T4d9V5Uwnjcz50rdlVLIMRJOYj+vNLTHWyC4JbgluCW4JbgluAW3BLcEtwS3BLcEt+CW4P7zh54n5ue//1/Va/vmeY8DCD9ucMMNN9xwww033HDDDfdS3Fe+ER9+3tMD6PTgq/q99OMGN9xwww033HDDDTfccC/AXTULcuMbe9VAS3r/kgYV3HDDDTfccMMNN9xwww331dPq6a+t6hQ/3HDDDTfccMMNN9xwww033IdmKG7MoCTN8MANN9xwww033HDDDTfccJfjPv4CggZBx1zPDTfccMMNN9xwww033HBH4u644pTfs+IU3HDDDTfccMMNN9xww30Zt954jOvee/zghltwwy244YYb7h64O15/nQRgyspZblaAG2644YYbbrjhhhtuuH+GLGl1pCkzHlWPvfEBBDfccMMNN9xwww033HAvwJ0EJR1Ax5uVV684BTfccMMNN9xwww033HD3wl11cKpw29fmhRtuuOGGG2644YYbbri34k5a4Shp9iV9ieWyU+M2fIIbbrjhhhtuuOGGG264I1/UkOu+O84ERQ0guOGGG2644YYbbrjhhnvnDcKTl/5NOnWf9Bxwww033HDDDTfccMMN91Lc6aCSZoKmXAsefzzghhtuuOGGG2644YYb7h64k2YeqmZp0m84TvpgGTkVCDfccMMNN9xwww033HBnwEs/EB332EkfaHDDDTfccMMNN9xwww33Utw33uCkpYSTBmnSrJSpQLjhhhtuuOGGG2644Yb76sxD0mNvnM6fstRxenDDDTfccMMNN9xwww13E9zp11VX7buTvqxx0n5EcMMNN9xwww033HDDDfdS3PHfnINOtVetTNXxwwtuuOGGG2644YYbbrjhXoC76tt50maiVVBOzzZVDRa44YYbbrjhhhtuuOGGG+7WS+EmbQxbNTCq/me44YYbbrjhhhtuuOGGG+42N8wmrVbVcVZq9XJqcMMNN9xwww033HDDDTfcKas3TZnxWHM9N9xwww033HDDDTfccMO9B3fHjUiPH+yGM0twww033HDDDTfccMMNN9w/a/LSv+nHI32fHLjhhhtuuOGGG2644Ya7Me6O+7JUzYxsu6HXcmpwww033HDDDTfccMMNtxQb3IJbgluCW4JbgluCW3BLcEtwS3BLcEtwC24JbgluCW4Jbglure4DwoiI/VmNglMAAAAASUVORK5CYII=" >
      </div>
      <p style="font-size: 4em;"><strong>Usuario:@Usuario </strong></p>
      <p style="font-size: 4em;"><strong>Senha: @Senha</strong></p>
    </div>
</div>

<div style="">
  <h1 style="text-align: center; font-size:7pt;">MAMOGRAFIA BILATERAL</h1>
  <div style="margin-right:50px">
    <div style="padding-left:10%; font-size:7pt;">
      <p><strong>Técnica de exame:</strong></p>
      <p>O estudo radiográfico das mamas, realizado com incidências crânio-caudal e médio-lateral oblíqua, evidencia:</p>
    </div>

    <div style="padding-left:10%;font-size:7pt;">
      <p><strong>Relatório:</strong></p>
      <p>Pele, papilas e tecido subcutâneo sem alterações.
      Parênquima mamário com composição heterogeneamente dens
      a, o que pode obscurecer nódulos.Não se identificam nódulos,
      microcalcificações agrupadas ou distorção arquitetural de carát
      er relevante.
      Espaço retromamário preservado.
      Não há sinais de linfonodomegalias axilares</p>
    </div>

    <div style="padding-left:10%;font-size:7pt;">
      <p><strong>Conclusão:</strong></p>
      <p>Achados radiológicos benignos.
      CATEGORIA 2 pelo sistema de padronização de laudos BIRA
      DS.</p>
    </div>

    <div style="padding-left:10%;font-size:7pt;">
      <p><strong>Comentários:</strong></p>
      <p>A critério clínico, sugere-se controle radiográfico de rotina.</p>
    </div>
  </div>
</div>
</div>

`

module.exports = test