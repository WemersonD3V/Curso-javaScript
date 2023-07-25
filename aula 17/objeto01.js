let amigo = {nome:'wemerson',
    idade:'26',
    peso:'86',
    emagrecer(p=0){console.log('emagreceu')
this.peso-=p } 
  } 
  amigo.emagrecer(6)
    console.log(` O ${amigo.nome} com a idade de ${amigo.idade} emagreceu
     ${amigo.peso}  `)