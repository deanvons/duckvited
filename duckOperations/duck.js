export function doSomething() {
  let other = ''
  let otherLord = 'Saruman'

  doSomethingElse()
}

export function doSomethingElse() {
  let functionScope = 'Saruman'
  other = 'updated'
}
