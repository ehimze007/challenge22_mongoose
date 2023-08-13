const PersonModel = require("./person.schema.js");

const functions = {

  // function to save a person
  save() {
    const newPerson = new PersonModel({
      name: "Nathanel",
      age: 27,
      favoriteFoods: ["rice", "eba"],
    });

    newPerson.save((error, savedRecord) => {
      if (error) {
        console.error("Error saving record:", error);
      } else {
        console.log("Record saved:", savedRecord);
      }
    });
  },

  // function to create many person records
  saveMany() {
    const recordsToCreate = [
      {
        name: "Nathanel",
        age: 27,
        favoriteFoods: ["rice", "eba"],
      },
      {
        name: "Abel",
        age: 27,
        favoriteFoods: ["rice", "bole"],
      },
    ];

    PersonModel.create(recordsToCreate, (error, createdRecords) => {
      if (error) {
        console.error("Error creating records:", error);
      } else {
        console.log("Records created:", createdRecords);
      }
    });
  },

  // function to find people with a name
  findPeopleByName(name) {
    PersonModel.find({ name })
      .then((people) => {
        if (people.length > 0) {
          console.log(`People with the name "${name}":`, people);
        } else {
          console.log(`No people found with the name "${name}".`);
        }
      })
      .catch((error) => {
        console.error("Error finding people:", error);
      });
  },

// function to find person wuth a name
  findPersonByName(name) {
    PersonModel.findOne({ name })
      .then((people) => {
        console.log(`Person with the name "${name}":`, people);

        return people;
      })
      .catch((error) => {
        console.error("Error finding people:", error);
      });
  },

  // function to find person by id
  findPersonById(id) {
    PersonModel.findById(id)
      .then((person) => {
        console.log(`Person with the id "${id}":`, person);

        return person;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // function to find to find person by id and update a person name
  updatePerson(id, name) {
    Person.findOneAndUpdate(
      { _id: personId },
      { $set: { name } },
      { new: true },
      (error, updatedPerson) => {
        if (error) {
          console.error('Error updating person:', error)
        } else {
          console.log("Person delete successfully");        }
      }
    );
  }

  // function to find a person by id and also delete that person
  findByIdAndRemove() {
    PersonModel.findByIdAndRemove(personId, (error, removedPerson) => {
      if (error) {
        console.error("Error removing person:", error);
      } else {
        console.log("Person delete successfully");
      }
    });
  },
};


module.exports = functions