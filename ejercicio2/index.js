const $result = document.getElementById('result')
let n = Number(window.prompt('Introduce un número entero'))

while (!Number.isInteger(n)) {
  n = Number(window.prompt('No se ha introducido un número entero. Introducelo de nuevo'))
}

printIsEven(n, $result)

function printIsEven (n, $element) {
  const result = isEven(n)
  $element.textContent = `${n} es ${result ? 'par' : 'impar'}`
}

function isEven (n) {
  return n % 2 === 0
}
