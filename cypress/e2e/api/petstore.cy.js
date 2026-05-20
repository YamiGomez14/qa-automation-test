describe('PetStore API Tests Devsu', () => {

  const petId = Date.now()

  it('Should complete PetStore CRUD flow', () => {

    // POST - Add a pet to the store
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: petId,
        name: 'Dolly Gomez',
        status: 'available'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Dolly Gomez')
    });

    // GET - Pet by ID
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${petId}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(petId)
    });

    // UPDATE - Pet
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: petId,
        name: 'Dolly Moran',
        status: 'sold'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('sold')
    })

    // Find the modified pet by status
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
    }).then((response) => {

      expect(response.status).to.eq(200)

      const petFound = response.body.some(
        pet => pet.id === petId
      )

      expect(petFound).to.be.true
    });
  });
});