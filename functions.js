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

  // function to find person with a name
  findPersonByName(name) {
    PersonModel.findOne({ name })
      .then((person) => {
        console.log(`Person with the name "${name}":`, person);
      })
      .catch((error) => {
        console.error("Error finding person:", error);
      });
  },

  // function to find person by id
  findPersonById(id) {
    PersonModel.findById(id)
      .then((person) => {
        console.log(`Person with the id "${id}":`, person);
      })
      .catch((error) => {
        console.error("Error finding person:", error);
      });
  },

  // function to update a person's name by id
  updatePerson(id, name) {
    PersonModel.findOneAndUpdate(
      { _id: id },
      { $set: { name } },
      { new: true },
      (error, updatedPerson) => {
        if (error) {
          console.error("Error updating person:", error);
        } else {
          console.log("Person updated successfully:", updatedPerson);
        }
      }
    );
  },

  // function to find a person by id and delete
  findByIdAndRemove(personId) {
    PersonModel.findByIdAndRemove(personId, (error, removedPerson) => {
      if (error) {
        console.error("Error removing person:", error);
      } else {
        console.log("Person deleted successfully.");
      }
    });
  },
};

module.exports = functions;
