
  var $name;
  var $lastName;

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    var $save = $("#save");
    var $clear = $("#clear");
    var $listData = $("#list-data");
    var $persons = $("#persons");

    $('.modal').modal();

   $save.off("click").on("click", save);
   $clear.off("click").on("click", clearAll);
   $listData.off("click").on("click", getAll);

    $name = $("#name");
    $lastName = $("#lastname");
    /*Igualando la variable con el valor de la caja de texto y guardándola en localStorage*/
  });

 function save(){
   var arrayData;
   arrayData = JSON.parse(localStorage.getItem("Datos"));

   if (arrayData == null){
     arrayData =  [];
   }

    var person ={
      name: $name.val(),
      lastname: $lastName.val()
    }

  arrayData.push(person);
  localStorage["Datos"] = JSON.stringify(arrayData);

  var $toastContent = $('<span>Guardado</span>');
   Materialize.toast($toastContent, 1500);

  }

  function clearAll() {
    localStorage.clear();
    $name.val("");
    $lastName.val("");
  }

  function getAll() {
      let li,img,span,p,div;
      var data = JSON.parse(localStorage.getItem("Datos"));
      persons.innerHTML = "";
      if (!data) {
          li = document.createElement("LI");
          span = document.createElement("SPAN");
          img = document.createElement("IMG");
          img.className = "circle"
          img.src = "assets/img/info.png";
          li.className = "collection-item avatar";
          span.className = "title";
          span.innerHTML = "No se encontraron Datos.";
          li.appendChild(span);
          li.appendChild(img);
          persons.appendChild(li);
      } else {
          data.map(function(obj) {
              li = document.createElement("LI");
              img = document.createElement("IMG");
              span = document.createElement("SPAN");
              p = document.createElement("P");
              //styles
              li.className = "collection-item avatar";
              img.className = "circle"
              img.src = "assets/img/user.png";
              span.className = "title";
              span.innerHTML = obj.name;
              p.innerHTML = obj.lastname;
              //assign
              li.appendChild(img);
              li.appendChild(span);
              li.appendChild(p);

              persons.appendChild(li);
          });

      }
  }
