let data = [{ id: 1, unit: "Reborn Diesel V 2.4 G/MT 2020", track: "Malang", status: "Selesai", price: "Rp. 200.000" }];
let nextId = 2;

function addData() {
  let unit = document.getElementById("unit").value;
  let track = document.getElementById("track").value;
  let status = document.getElementById("status").value;
  let price = document.getElementById("price").value;

  data.push({ id: nextId, unit: unit, track: track, status: status, price: price });
  nextId++;

  updateTable();
}

function updateTable() {
  let table = document.getElementById("dataTable");
  table.innerHTML = "";

  let header = `<tr>
                <th>No</th>
                <th>Unit</th>
                <th>Tujuan</th>
                <th>Status</th>
                <th>Total Harga</th>
                <th>Actions</th>
                </tr>`;
  table.innerHTML = header;

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].unit}</td>
                    <td>${data[i].track}</td>
                    <td>${data[i].status}</td>
                    <td>${data[i].price}</td>
                    <td>
                        <button onclick="updateData(${i})" class="btn-up">Update</button>
                        <button onclick="deleteData(${i})" class="btn-del">Delete</button>
                    </td>
                </tr>`;
    table.innerHTML += row;
  }
}

function updateData(index) {
  let status = prompt("Enter New Status:");

  data[index].status = status;

  updateTable();
}

function deleteData(index) {
  data.splice(index, 1);

  updateTable();
}
