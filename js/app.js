console.log("app.js loaded...");

// prettier-ignore
const courseListing = 
    [
    {"title": "CH - 3M P2P Infectious Disease Documentation Training", "Specialty": "Infectious Disease", "embeddedUrl": '<iframe src="https://player.vimeo.com/video/915638779?h=ddd5c3d337" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'},
    {"title": "CH - 3M P2P Neonatology Documentation Training", "Specialty": "Neonatology", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Pediatric Hospital Medicine Documentation Training", "Specialty": "Pediatric Hospital Medicine", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Neuro Surgery - Brain Documentation Training", "Specialty": "Neuro Surgery - Brain", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Critical Care Surgery Documentation Training", "Specialty": "Critical Care Surgery", "embeddedUrl": ""},
    {"title": "CH - 3M P2P GYN Oncology Documentation Training", "Specialty": "GYN Oncology", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Obsterics and GYN Documentation Training", "Specialty": "Obsterics and GYN", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Neurology Documentation Training", "Specialty": "Neurology", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Bariatric Surgery Documentation Training", "Specialty": "Bariatric Surgery", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Urology Documentation Training", "Specialty": "Urology", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Critical Care Medicine Documentation Training", "Specialty": "Critical Care Medicine", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Adult Hospital Medicine Documentation Training", "Specialty": "Adult Hospital Medicine", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Neurological Surgery-Neurospine Documentation Training", "Specialty": "Neurological Surgery-Neurospine", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Thoracic Surgery Documentation Training", "Specialty": "Thoracic Surgery", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Nephrology Documentation Training", "Specialty": "Nephrology", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Cardiology (Interventional) Documentation Training", "Specialty": "Cardiology (Interventional)", "embeddedUrl": ""},
    {"title": "CH - 3M P2P General Surgery Documentation Training", "Specialty": "General Surgery", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Cardiac Electrophysiology Documentation Training", "Specialty": "Cardiac Electrophysiology", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Plastic Surgery Documentation Training", "Specialty": "Plastic Surgery", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Vascular Surgery Documentation Training", "Specialty": "Vascular Surgery", "embeddedUrl": ""},
    {"title": "Ch - 3M P2P Orthopaedic Surgery Documentation Training", "Specialty": "Orthopaedic Surgery", "embeddedUrl": ""},
    {"title": "CH - 3M P2P Cardiac Surgery Documentation Training", "Specialty": "Cardiac Surgery", "embeddedUrl": ""}
    ];

document.addEventListener("DOMContentLoaded", function () {
  const specialties = [
    ...new Set(courseListing.map((x) => x.Specialty)),
  ].sort();
  const objSpecialty = document.getElementById("selSpecialty");

  for (let i = 0; i < specialties.length; i++) {
    let option = document.createElement("option");

    option.value = specialties[i];
    option.text = specialties[i];

    objSpecialty.appendChild(option);
  }

  // Add event listener for the 'change' event
  const selSpecialty = document.getElementById("selSpecialty");
  selSpecialty.addEventListener("change", function () {
    const selectedValue = selSpecialty.value;
    const filteredCourses = courseListing
      .filter((el) => el.Specialty == selectedValue)
      .sort();

    const ul = document.getElementById("trainingList");
    ul.innerHTML = "";
    for (let i = 0; i < filteredCourses.length; i++) {
      let a = document.createElement("a");
      a.textContent = filteredCourses[i].title;

      var li = document.createElement("li");
      li.appendChild(a);

      ul.appendChild(li);
    }
  });

  // Add cevent listener for 'clicks' on trainingList
  const trainingList = document.getElementById("trainingList");
  trainingList.addEventListener("click", function (event) {
    // Check if the clicked element is an <a> tag
    if (event.target.tagName === "A") {
      // Prevent the default behavior (in this case, following the link)
      event.preventDefault();

      const course = courseListing.find((el) => el.title == event.target.text);
      const player = document.getElementById("embedded-player");
      player.innerHTML = course.embeddedUrl;
    }
  });
});
