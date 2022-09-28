const string = window.prompt('Introduce un texto')

function stringIsOnlyMayusOnlyMinusOrMixed (string) {
  if (string === string.toUpperCase()) return 'La cadena solo tiene mayúsculas'
  if (string === string.toLowerCase()) return 'La cadena solo tiene minúsculas'
  return 'La cadena puede contener una mezcla de mayúsculas y minúsculas'
}

const msg = stringIsOnlyMayusOnlyMinusOrMixed(string)
window.alert(msg)
