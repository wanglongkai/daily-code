const str = 'today is ${year}-${month}-${day}' // tody is 2025-03-17

function fillIn(str, year, month, day){
  const map = {
    year,month, day
  }
  return str.replace(/\$\{(\w*)\}/g, (m, p1) => {
      return map[p1]
  })
}

console.log(fillIn(str, 2025, 3, 17))
