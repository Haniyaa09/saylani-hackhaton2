var backgroundImg;

function post() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  var category = document.getElementById("category"); // Get the selected category
  
  if (title.value.trim() && description.value.trim()) {
    var post = document.getElementById("post");
    post.innerHTML += `
      <div class="card p-2 mb-2">
        <div class="card-header">
          <em>@post</em> | <strong>Category:</strong> ${category.options[category.selectedIndex].text} <!-- Display selected category -->
        </div>
        <div style="background-image: url(${backgroundImg})" class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${title.value}</p>
            <footer class="blockquote-footer">${description.value}</footer>
          </blockquote>
        </div>
      </div>
    `;

    title.value = "";
    description.value = "";
    category.selectedIndex = 0;  
  } else {
    Swal.fire({
      title: "Empty Post",
      text: "Can't publish post without Title or Description",
      icon: "question"
    });
  }
}

function selectImg(src) {
  backgroundImg = src;
  var bgImg = document.getElementsByClassName('bg-img');
  for (var i = 0; i < bgImg.length; i++) {
    bgImg[i].className = "bg-img";
  } 
  event.target.className += " selectedImg";
}





