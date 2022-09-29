const string = window.prompt('Introduce un texto para comprobar si es palíndromo')

const result = isPalindrome(string)
window.alert(`"${string}" ${result ? 'es' : 'no es'} un palíndromo`)

function isPalindrome(string) {
  const normalizedString = normalize(string)
  let result = true

  if (normalizedString.length === 0) return false

  let i = 0
  let j = normalizedString.length - 1

  while (i < j) {
    if (normalizedString[i] === normalizedString[j]) {
      i++;
      j--;
    } else {
      result = false
      i = j
    }
  }

  return result
}

function normalize(string) {
  const regex = /[\s,;:\.!¡?¿[\]]/g
  const stringWithoutPunctuationSigns = string.replaceAll(regex, '')
  const lowercaseString = stringWithoutPunctuationSigns.toLowerCase()
  const stringWithoutStressedVowels = replaceStressedVowels(lowercaseString)

  return stringWithoutStressedVowels
}

function replaceStressedVowels(string) {
  const getUnstressedVowel = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u' }
  let result = ''

  for (const char of string) {
    const selectedChar = getUnstressedVowel[char] ?? char
    result += selectedChar
  }

  return result
}
