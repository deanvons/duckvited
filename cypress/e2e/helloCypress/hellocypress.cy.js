describe('should see welcome message', () => {
  it('passes', () => {
    cy.visit('http://120.1:5500/index.html')
    cy.contains('Hllo JS lker til')
  })
})
