import PetStoreApi from '../api/PetStoreAPI';

describe('PetStore API Tests - Dolly (My Dog)', () => {

  const api = new PetStoreApi();

  const petId = Date.now();

  beforeEach(function () {

    cy.fixture('pet').then((petData) => {

      this.petData = petData;
    })
  })

  it('Should complete PetStore CRUD flow successfully', function () {

    //Create
    api.createPet({
      id: petId,
      name: this.petData.name,
      status: this.petData.initialStatus
    }).then((response) => {

      expect(response.status).to.eq(200)

      expect(response.duration)
        .to.be.lessThan(3000);

      expect(response.body.name)
        .to.eq(this.petData.name);
    })

    // GET by ID
    api.getPetById(petId)
      .then((response) => {

        expect(response.status)
          .to.eq(200);

        expect(response.body.id)
          .to.eq(petId);

        expect(response.body.name)
          .to.eq(this.petData.name);
      })

    // Update the name and status
    api.updatePet({
      id: petId,
      name: this.petData.updatedName,
      status: this.petData.updatedStatus
    }).then((response) => {

      expect(response.status)
        .to.eq(200);

      expect(response.body.status)
        .to.eq(this.petData.updatedStatus);

      expect(response.body.name)
        .to.eq(this.petData.updatedName);
    })

    // Find by status
    api.findPetsByStatus(this.petData.updatedStatus)
      .then((response) => {

        expect(response.status)
          .to.eq(200);

        const petFound = response.body.some(
          pet => pet.id === petId
        )

        expect(petFound)
          .to.be.true
      });
  });
});