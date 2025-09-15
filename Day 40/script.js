let user = [
      {"Sr":1, "Name":"Usama","Role":"Admin"},
      {"Sr":2, "Name":"Arslan","Role":"Vendor"},
      {"Sr":3, "Name":"Sana","Role":"User"},
      {"Sr":4, "Name":"Ali","Role":"Vendor"},
      {"Sr":5, "Name":"Salman","Role":"User"},
    ];

    let tbody = document.getElementById("userTableBody");
    let roleFilter = document.getElementById("roleFilter");
    function displayData(filterRole) {
      tbody.innerHTML = "";
      let filteredUsers = user.filter(u => filterRole === "All" || u.Role === filterRole);
      filteredUsers.forEach(u => {
        let data = `<tr>
                    <td>${u.Sr}</td>
                    <td>${u.Name}</td>
                    <td>${u.Role}</td>
                  </tr>`;
        tbody.innerHTML += data;
      });
    }
    displayData("All");
    roleFilter.addEventListener("change", () => {
      displayData(roleFilter.value);
    });


    