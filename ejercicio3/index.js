const string = window.prompt('Introduce un texto para comprobar si es palíndromo')

const result = isPalindrome(string)
window.alert(`"${string}" ${result ? 'es' : 'no es'} un palíndromo`)

function isPalindrome (string) {
  const normalized = normalize(string)
}

function normalize (string) {
  const withoutPunctuationSign = string.replaceAll(regex, '')
  const lowercase = withoutPunctuationSign.toLowerCase()
  const regex = /[\s,;:\.!¡?¿[\]]/g
}
