function verificar(){
    var do1 = document.getElementById('tdo')
    var res = document.getElementById('res')
    var list1 = document.getElementById('lista')
    var dora = Number(do1.value)
    res.innerHTML = ` Você assistiu ${dora} doramas em 2023`
    if (dora<=10){
        res.innerHTML = `<p>💗 DORAMEIRA INICIANTE: <p>
            Você entrou nesse mundo faz pouco tempo, mas já ama. Continue assistindo e logo você virará uma profissional.</p>`
            res.style.color = 'rgb(138, 12, 111)'}
        else if (dora>10 && dora<=20){
            res.innerHTML = `<p>💞DORAMEIRA ESFORÇADA:</p>
            Você não tem muito tempo para assistir, mas se esforça. Mal pode esperar as férias para maratonar vários dramas.`
            res.style.color = 'rgb(138, 12, 111)'

       }else{
            res.innerHTML += `<p>💕DORAMEIRA PROFISSIONAL:<p>
            Você já conhece bastante da dramaland, assiste andando, cozinhando e até dormindo. Sempre tem um novo drama para adicionar a sua lista interminável.`
            res.style.color = 'rgb(138, 12, 111)'
            
        
    }
}function verificar(){
            var do1 = document.getElementById('tdo')
            var res = document.getElementById('res')
            var list1 = document.getElementById('lista')
            var dora = Number(do1.value)
            if (dora<=10){
                res.innerHTML = `<p>💗 DORAMEIRA INICIANTE: <p>
                    Você entrou nesse mundo faz pouco tempo, mas já ama. Continue assistindo e logo você virará uma profissional.</p>`
                    res.style.color = 'rgb(138, 12, 111)'
                } else if (dora>10 && dora<=20){
                        res.innerHTML = `<p>💞DORAMEIRA ESFORÇADA:</p>
                        Você não tem muito tempo para assistir, mas se esforça. Mal pode esperar as férias para maratonar vários dramas.`
                        res.style.color = 'rgb(138, 12, 111)'

                   }else{
                          res.innerHTML += `<p>💕DORAMEIRA PROFISSIONAL:<p>
                          Você já conhece bastante da dramaland, assiste andando, cozinhando e até dormindo. Sempre tem um novo drama para adicionar a sua lista interminável.`
                          res.style.color = 'rgb(138, 12, 111)'
                    
                
            }
        }