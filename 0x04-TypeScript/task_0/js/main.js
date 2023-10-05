var student1 = {
    firstName: 'Chris',
    lastName: 'Vip',
    age: 27,
    location: 'Anambra'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Vip',
    age: 25,
    location: 'Anambra'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
