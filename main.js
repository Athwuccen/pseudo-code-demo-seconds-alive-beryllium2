let monthOfBirth = prompt("what  is your month of birth?" )
let yearOfBirth = prompt("what is your year of birth?")
let currentDay = new Date()
let currentMonth = currentDay.getMonth()
let currentYear = currentDay.getFullYear()
let secsInMonth = 60 * 60 * 24 * 30
let secsInYear = secsInMonth * 12
let secsInBirthYear = secsInMonth * (12 - monthOfBirth)
let secsInCurrentYear = secsInMonth * currentMonth
let secsInBetweenYear = secsInYear * (currentYear -yearOfBirth - 2)
let secsSinceBirth = secsInBirthYear + secsInCurrentYear + secsInBetweenYear
    document.write(secsSinceBirth )
