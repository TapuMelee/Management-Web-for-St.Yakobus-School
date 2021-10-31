function validateReg(form){

    if (form.name.value == ""){
    alert("Name must be filled!");
    form.name.focus();
    return (false);
  }
    
    if (form.address.value == ""){
    alert("Address must be filled!");
    form.address.focus();
    return (false);
  }

    if (form.dob.value == ""){
    alert("DOB must be filled!");
    form.dob.focus();
    return false;
  }

    if (form.email.value == ""){
    alert("Email must be filled!");
    form.email.focus();
    return false;
  }

    emailValidate=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailValidate.test(form.email.value)){
    alert('Email is invalid!');
    form.email.focus();
    return false;
  }

    if (form.password.value == ""){
    alert("Password must be filled!");
    form.password.focus();
    return false;
  }

    passValidate = /[a-z]/;
    if (!passValidate.test(form.password.value)){
    alert("Password must contain at least one lowercase letter!")
    form.password.focus();
    return false;
  }

    passValidate = /[A-Z]/;
    if (!passValidate.test(form.password.value)){
    alert("Password must contain at least one uppercase letter!")
    form.password.focus();
    return false;
  }

    passValidate = /[0-9]/;
    if (!passValidate.test(form.password.value)){
    alert("Password must contain at least one number!")
    form.password.focus();
    return false;
  }

  return true;
}

function validateLog(form){

        if (form.email.value == ""){
        alert("Email must be filled!");
        form.email.focus();
        return false;
      }
    
        emailValidate=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailValidate.test(form.email.value)){
        alert('Email is invalid!');
        form.email.focus();
        return false;
      }
    
        if (form.password.value == ""){
        alert("Password must be filled!");
        form.password.focus();
        return false;
      }
    
        passValidate = /[a-z]/;
        if (!passValidate.test(form.password.value)){
        alert("Password must contain at least one lowercase letter!")
        form.password.focus();
        return false;
      }
    
        passValidate = /[A-Z]/;
        if (!passValidate.test(form.password.value)){
        alert("Password must contain at least one uppercase letter!")
        form.password.focus();
        return false;
      }
    
        passValidate = /[0-9]/;
        if (!passValidate.test(form.password.value)){
        alert("Password must contain at least one number!")
        form.password.focus();
        return false;
      }

      return true;
}

function searchItem() {
  var search, filter, table, tr, td, i, tabletxt;
  search = document.getElementById("search");
  filter = search.value.toUpperCase();
  table = document.getElementById("manTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      tabletxt = td.textContent;
      if (tabletxt.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortColumn(n){
  var table, rows, swapping, i, x, y, shouldSwap, dir, swapno = 0;
  table = document.getElementById("manTable");
  swapping = true;
  dir = "asc";
  while (swapping) {
    swapping = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwap = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwap = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwap = true;
          break;
        }
      }
    }
    if (shouldSwap) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      swapping = true;
      swapno ++;
    } else {
      if (swapno == 0 && dir == "asc") {
        dir = "desc";
        swapping = true;
      }
    }
  }
}

function sortColnum(n){
  var table, rows, swapping, i, x, y, shouldSwap, dir, swapno = 0;
  table = document.getElementById("manTable");
  swapping = true;
  dir = "asc";
  while (swapping) {
    swapping = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwap = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwap = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwap = true;
          break;
        }
      }
    }
    if (shouldSwap) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      swapping = true;
      swapno ++;
    } else {
      if (swapno == 0 && dir == "asc") {
        dir = "desc";
        swapping = true;
      }
    }
  }
}

var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function toggleMenu(){
  if(menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "400px";
  }
  else{
    menuList.style.maxHeight = "0px";
  }
}
