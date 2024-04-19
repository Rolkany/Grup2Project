"use strict";

// Date-Time config
const config = {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d H:i",
};
flatpickr("input[type=eventDateTime]", config);

document.addEventListener("DOMContentLoaded", function () {
  const eventPicture = document.getElementById("eventPicture");
  const fileInput = document.getElementById("fileInput");
  const crearButton = document.getElementById("crear");
  let contadorEventos = 1;
  let imageData;

  eventPicture.addEventListener("click", function () {
    fileInput.click();
  });

  function ImageChange() {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        eventPicture.src = e.target.result;
      };
      reader.readAsDataURL(file);

      imageData = {
        imageName: file.name,
      };
    }
  }

  fileInput.addEventListener("change", ImageChange);

  crearButton.addEventListener("click", (event) => {
    event.preventDefault();

    const eventTitle = document.getElementById("eventTitle");
    const eventDateTime = document.getElementById("eventDateTime");
    const eventLang = document.getElementById("eventLang");
    const eventType = document.getElementById("eventType");
    const eventLocation = document.getElementById("eventLocation");
    const eventColabInput = document.getElementById("eventColab");
    const eventDescript = document.getElementById("eventDescript");

    const eventData = {
      eventNumber: contadorEventos,
      eventPicture: imageData ? imageData.imageName : null,
      eventTitle: eventTitle.value,
      eventDateTime: eventDateTime.value,
      eventLang: eventLang.value,
      eventType: eventType.value,
      eventLocation: eventLocation.value,
      eventColab: eventColabInput.value
        .split(",")
        .map((colab) => ({ nombre: colab.trim() })),
      eventDescript: eventDescript.value,
    };

    contadorEventos++;

    const jsonData = JSON.stringify(eventData, null, 2);
    console.log(jsonData);

    // Reinicia el valor del input para que se pueda cargar la misma imagen nuevamente
    fileInput.value = "";
    document.getElementById("eventForm").reset();

    function navigate() {
      console.log("test");
      window.location.href = "../Eventos-Organizados/event-list.html";
    }
    navigate();
  });
});
