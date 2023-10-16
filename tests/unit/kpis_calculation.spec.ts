import { test } from '@japa/runner'

test('Kpis calculation', ({assert}) => {//formula acumulativa
  const numbers = [13,12,12,11,14,53,23,42,32,16,17,32,12,35,13,43,16,23,45,64,12,45,34,54]
  const sum_age = numbers.reduce((total, numero) => total + numero, 0);
  const sum_age_squared = numbers.reduce((total, numero) => total + numero ** 2, 0);
  const varianza_new_form = (sum_age_squared - (sum_age*sum_age)/numbers.length)/numbers.length
  const new_form = Math.sqrt(varianza_new_form)

  const media = numbers.reduce((total, numero) => total + numero, 0) / numbers.length;
  const sumaDiferenciasCuadrado = numbers.reduce((total, numero) => total + Math.pow(numero - media, 2), 0);
  const varianza = sumaDiferenciasCuadrado / numbers.length;
  
  const desviacionEstandarPoblacional = Math.sqrt(varianza);

  console.log("New: "+new_form.toFixed(4));
  console.log("Old: "+desviacionEstandarPoblacional.toFixed(4));
  assert.approximately(new_form, desviacionEstandarPoblacional, 0.0001);
})
