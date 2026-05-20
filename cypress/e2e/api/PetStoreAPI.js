class PetStoreApi {

  createPet(body) {

    return cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body
    })
  }

  getPetById(petId) {

    return cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${petId}`
    })
  }

  updatePet(body) {

    return cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body
    })
  }

  findPetsByStatus(status) {

    return cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`
    })
  }
}

export default PetStoreApi;