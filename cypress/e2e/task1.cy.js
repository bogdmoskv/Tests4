let x;

describe('First task', () => {
  before(() => {
    cy.visit('https://suninjuly.github.io/math.html')
  });
  it('should read value of x variable', () => {
    x = cy.get('#input_value')
        .invoke('text')
        .then(x => {
          const result = Math.log(Math.abs(12 * Math.sin(parseFloat(x))));
          cy.get('#answer').type(result);
          cy.get('#robotCheckbox').click();
          cy.get('#robotsRule').click();
          cy.get('button.btn').click();
        });
  });
});