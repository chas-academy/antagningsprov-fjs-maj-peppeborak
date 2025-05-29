function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument
  const persons = [
    { name: 'Peppe', age: 22 },
    { name: 'Janne', age: 35 },
    { name: 'Malin', age: 32 },
    { name: 'Ella', age: 25 },
    { name: 'Rasmus', age: 28 },
  ]
  function getAgesOver30(persons) {
    for (const person of persons) {
      if (person.age > 30) {
        console.log(person.name)
      }
    }
  }
  return getAgesOver30(persons)
}

module.exports = { uppg8 }
