// valor da moeda mais cara para a mais barata
const dolarReal = 5.79
const wonReal = 0.003998
const dolarWon = 1448

let usdInput = document.getElementById("usd")
let brlInput = document.getElementById("brl")
let krwInput = document.getElementById("krw")

usdInput.addEventListener("input", () => convert("usd"))
brlInput.addEventListener("input", () => convert("brl"))
krwInput.addEventListener("input", () => convert("krw"))

function convert(from) {

   // Se o campo estiver vazio, assume 0 para evitar erros
   let usd = parseFloat(usdInput.value.replace(/\./g, "").replace(",", ".")) || 0
   let brl = parseFloat(brlInput.value.replace(/\./g, "").replace(",", ".")) || 0
   let krw = parseFloat(krwInput.value.replace(/\./g, "").replace(",", ".")) || 0


   if (from == "usd") {

      brlInput.value = formatarNumero(usd * dolarReal)
      krwInput.value = formatarNumero(usd * dolarWon)

   } else if (from == "brl") {
      
      usdInput.value = formatarNumero(brl / dolarReal)
      krwInput.value = formatarNumero(brl / wonReal)

   }  else if (from == "krw") {
      
      usdInput.value = formatarNumero(krw / dolarWon)
      brlInput.value = formatarNumero(krw * wonReal)

   }
}

 // Função para formatar um número (milhar com "." e decimal com ",")
 // @param valor - Número a ser formatado 
 // @returns Número formatado
function formatarNumero(valor) {
   return valor
   .toFixed(2) // Garante 2 casas decimais
   .replace(".", ",") // Substitui ponto decimal por vírgula
   .replace(/\B(?=(\d{3})+(?!\d))/g, ".") // Adiciona pontos nos milhares
}