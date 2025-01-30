const freelancers = [
    { Name: "Alice", Occupation: "Writer", Starting_price: 30 },
    { Name: "Bob", Occupation: "Teacher", Starting_price: 50 },
  ];

  const newFreelancers = [
    { Name: "Carol", Occupation: "Programmer", Starting_price: 70 },
    { Name: "Dave", Occupation: "Designer", Starting_price: 40 },
    { Name: "Eve", Occupation: "Data Analyst", Starting_price: 60 },
    { Name: "Frank", Occupation: "SEO Specialist", Starting_price: 55 },
    { Name: "Grace", Occupation: "Project Manager", Starting_price: 65 },
];
  

function updateAveragePrice() {
    const avgPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.Starting_price, 0) / freelancers.length;
    document.querySelector("#avg_price").textContent = avgPrice.toFixed(2);
    }

function renderFreelancers(tbody) {
  
    const freelancerElements = freelancers.map(freelancer => {
      
      const row = document.createElement("tr");
  
      const freelancer_name = document.createElement("td");
      freelancer_name.textContent = freelancer.Name;
  
      const freelancer_occupation = document.createElement("td");
      freelancer_occupation.textContent = freelancer.Occupation;
  
      const freelancer_price = document.createElement("td");
      freelancer_price.textContent = `$${freelancer.Starting_price}`;
  
      row.append(freelancer_name, freelancer_occupation, freelancer_price);
  
      return row;
    });

    tbody.replaceChildren(...freelancerElements);
    updateAveragePrice();
    }
    
function addFreelancers() {
    const newby = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    freelancers.push(newby);
    renderFreelancers(document.querySelector("tbody"));
    }

function init() {

    const freelance_table = document.querySelector("#freelancer_container");

    const table = document.createElement("table");

    table.style.margin = "auto"; // 

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const header_row = document.createElement("tr");
  
    //create headers for table
    for (let key in freelancers[0]) {
      const th = document.createElement("th");
      th.textContent = key;
      header_row.append(th);
    }
  
    thead.append(header_row);
    table.append(thead);
    table.append(tbody);
  
    //add table to root div
    freelance_table.append(table);
    
    renderFreelancers(tbody);
  }
    

  setInterval(addFreelancers, 3000);
  
  init();