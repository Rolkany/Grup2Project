"use strict";

const age = document.querySelector("#age");
const gender = document.querySelector("#gender");
const profession = document.querySelector("#profession");
const hobbies = document.querySelector("#hobbies");
const sports = document.querySelector("#sports");
const description = document.querySelector("#description");
const save = document.querySelector("#save");

save.addEventListener("click", (event) => {
  event.preventDefault();

  const navigate = () => {
    window.location.href = "../Profile/profile.html";
  };

  class PersonalInfo {
    constructor(age, gender, profession, hobbies, sports, description) {
      this.age = age;
      this.gender = gender;
      this.profession = profession;
      this.hobbies = hobbies;
      this.sports = sports;
      this.description = description;
    }
  }
  const personalInfo = new PersonalInfo(
    age.value,
    gender.value,
    profession.value,
    hobbies.value,
    sports.value,
    description.value
  );
  console.log(personalInfo);
  navigate();
});
