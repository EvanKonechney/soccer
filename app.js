//console.log(firebase);

// show all teams in spain

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results1");

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((d) => {
      const team = d.data();

      // Create a new div for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
        <h3>${team.name}</h3>
        <p><strong>City:</strong> ${team.city}</p>
        <p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
        <p><strong>fans_count:</strong> ${team.fans_count}</p>
        <hr>
      `;

      // Append to the results container
      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// //show all teams in Madrid, Spain
db.collection("teams")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results2");

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
        <h3>${team.name}</h3>
        <p><strong>City:</strong> ${team.city}</p>
        <p><strong>Country:</strong> ${team.country}</p>
        <p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
        <p><strong>fans_count:</strong> ${team.fans_count}</p>
        <hr>
      `;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// // show all national teams

db.collection("teams")
  .where("national_team", "==", "Yes")
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results3");

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
      <h3>${team.name}</h3>
      <p><strong>City:</strong> ${team.city}</p>
      <p><strong>Country:</strong> ${team.country}</p>
      <p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
      <p><strong>fans_count:</strong> ${team.fans_count}</p>
      <hr>
    `;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// //Show all teams that are not in Spain

db.collection("teams")
  .where("country", "not-in", ["Spain"])
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results4");

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
    <h3>${team.name}</h3>
    <p><strong>City:</strong> ${team.city}</p>
    <p><strong>Country:</strong> ${team.country}</p>
    <p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
    <p><strong>fans_count:</strong> ${team.fans_count}</p>
    <hr>
  `;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// //5.	Show all teams that are not in Spain or England

db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results5");

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
  <h3>${team.name}</h3>
  <p><strong>City:</strong> ${team.city}</p>
  <p><strong>Country:</strong> ${team.country}</p>
  <p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
  <p><strong>fans_count:</strong> ${team.fans_count}</p>
  <hr>
`;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// //6.	Show all teams in Spain with more than 700M fans

db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans_count", ">", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results6");

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
<h3>${team.name}</h3>
<p><strong>City:</strong> ${team.city}</p>
<p><strong>Country:</strong> ${team.country}</p>
<p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
<p><strong>fans_count:</strong> ${team.fans_count}</p>
<hr>
`;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// //7.	Show all teams with a number of fans in the range of 500M and 600M

db.collection("teams")
  .where("fans_count", ">=", 500)
  .where("fans_count", "<=", 600)
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results7"); // Make sure this exists in your HTML

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
<h3>${team.name}</h3>
<p><strong>City:</strong> ${team.city}</p>
<p><strong>Country:</strong> ${team.country}</p>
<p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
<p><strong>fans_count:</strong> ${team.fans_count}</p>
<hr>
`;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

// //8.	Show all teams where Ronaldo is a top scorer

db.collection("teams")
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results8"); // Make sure this exists in your HTML

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
<h3>${team.name}</h3>
<p><strong>City:</strong> ${team.city}</p>
<p><strong>Country:</strong> ${team.country}</p>
<p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
<p><strong>fans_count:</strong> ${team.fans_count}</p>
<hr>
`;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

//9.	Show all teams where Ronaldo,  Maradona, or Messi is a top scorer

db.collection("teams")
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let mydocs = data.docs;

    const resultsContainer = document.getElementById("results9"); // Make sure this exists in your HTML

    if (mydocs.length === 0) {
      resultsContainer.innerHTML = "<p>No data returned</p>";
      return;
    }

    mydocs.forEach((doc) => {
      const team = doc.data();

      // Create a new element for each team
      const teamDiv = document.createElement("div");
      teamDiv.innerHTML = `
<h3>${team.name}</h3>
<p><strong>City:</strong> ${team.city}</p>
<p><strong>Country:</strong> ${team.country}</p>
<p><strong>Top Scorers:</strong> ${team.top_scorers.join(", ")}</p>
<p><strong>fans_count:</strong> ${team.fans_count}</p>
<hr>
`;

      resultsContainer.appendChild(teamDiv);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

//1.	Real Madrid: 811 M worldwide fans. Also, change team name to Real Madrid FC

// db.collection("teams").doc("ceHhR5y75ofCviibpYh7").update({
//   fans_count: 811,
//   name: "Real Madrid FC",
// });

// //2.	Barcelona: 747 M worldwide fans. Also, change team name to FC Barcelona

// db.collection("teams").doc("uD5WsiXf4pCsas0j3uhw").update({
//   fans_count: 747,
//   name: "FC Barcelona",
// });

// //1.	Real Madrid: Remove Hazard from the list and add Crispo to the list

// db.collection("teams")
//   .doc("ceHhR5y75ofCviibpYh7")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//   });

// db.collection("teams")
//   .doc("ceHhR5y75ofCviibpYh7")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   });

// //2.	Barcelona: Remove Puyol from the list and add Deco to the list

// db.collection("teams")
//   .doc("uD5WsiXf4pCsas0j3uhw")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//   });

// db.collection("teams")
//   .doc("uD5WsiXf4pCsas0j3uhw")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   });

// //Real Madrid: White (home). Black (away)

// db.collection("teams")
//   .doc("ceHhR5y75ofCviibpYh7")
//   .update({
//     color: { home: "White", away: "Black" },
//   });

// Barcelona: Red (home). Gold (away)

// db.collection("teams")
//   .doc("uD5WsiXf4pCsas0j3uhw")
//   .update({
//     color: { home: "Red", away: "Gold" },
//   });

//c.	Real Madrid: Purple jersey color for away matches

// db.collection("teams")
//   .doc("ceHhR5y75ofCviibpYh7") // replace with the actual document ID for Barcelona
//   .update({
//     "color.away": "Purple",
//   });

// //d.	Barcelona: Pink jersey color for away matches

// db.collection("teams")
//   .doc("uD5WsiXf4pCsas0j3uhw") // replace with the actual document ID for Barcelona
//   .update({
//     "color.away": "Pink",
//   });

// db.collection("mypeople")
//   .doc("tTg9Kuki8j9yKfj6XzTq")
//   .update({
//     friends: ["peter", "kristen"],
//   });

// update()

// update doc ID tTg9Kuki8j9yKfj6XzTq to change sally's age to 31
// age field is a number

// db.collection("mypeople").doc("tTg9Kuki8j9yKfj6XzTq").update({
//   age: 31,
// });

// update favourite color to black

// db.collection("mypeople").doc("tTg9Kuki8j9yKfj6XzTq").update({
//   color: "black",
// });

// add peter and kristen as sally's friends

// db.collection("mypeople")
//   .doc("tTg9Kuki8j9yKfj6XzTq")
//   .update({
//     friends: ["peter", "kristen"],
//   });

let rm = {
  name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  fans_count: 798,
};

// db.collection("teams").add(rm);

let barcelona = {
  name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  fans_count: 738,
};

// db.collection("teams").add(barcelona);

let MU = {
  name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  fans_count: 755,
};

// db.collection("teams").add(MU);

let MC = {
  name: "Manchester City",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  fans_count: 537,
};

// db.collection("teams").add(MC);

let Brazil = {
  name: "Brazil National Team",
  national_team: "Yes",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  fans_count: 950,
};

// db.collection("teams").add(Brazil);

let Argentina = {
  name: "Argentina National Team",
  national_team: "Yes",
  country: "Argentina",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  fans_count: 888,
};

// db.collection("teams").add(Argentina);

let AM = {
  name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragonés", "Griezmann", "Torez"],
  fans_count: 400,
};

// db.collection("teams").add(AM);
