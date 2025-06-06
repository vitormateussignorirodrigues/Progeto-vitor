export async function getprojects(){
    try {
       const response = await fetch('http://localhost:3000')
       const dados = await response.json() 
       return dados
    }catch(e) {
       console.log(`Erro: ${e}`)
    }
}