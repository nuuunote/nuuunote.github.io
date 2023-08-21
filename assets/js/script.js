$(document).ready(function () {
  // Page Title Definition
  var pageTitle = $(".getTitle").val();
  $(".setTitle").append(`NuuuNote | ${pageTitle}`);
  // end Page Title Definition

  // Set Active Navbar
  $homeActiveStatus = "";
  $blogActiveStatus = "";
  $programmingActiveStatus = "";
  $aboutMeActiveStatus = "";
  if (pageTitle == "Home") {
    $homeActiveStatus = "active";
  } else if (pageTitle == "Blog") {
    $blogActiveStatus = "active";
  } else if (pageTitle == "Programming") {
    $programmingActiveStatus = "active";
  } else if (pageTitle == "About Me") {
    $aboutMeActiveStatus = "active";
  }
  // end Set Active Navbar

  // Add Navbar Content
  var navbarContent = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
        <div class="container-fluid">
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link ${$homeActiveStatus}" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${$blogActiveStatus}" href="/blog.html">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${$programmingActiveStatus}" href="/programming.html">Programming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${$aboutMeActiveStatus}" href="/about-me.html">About Me</a>
            </li>
            </ul>
            <div class="d-flex" role="search">
            <input
                class="form-control me-2 get-search"
                type="search"
                placeholder="Search . . . "
                aria-label="Search"
            />
            <button class="btn btn-outline-light btn-search" type="button">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            </div>
        </div>
        </div>
    </nav>
    `;
  $(".navbar-container").append(navbarContent);
  // end Add Navbar Content

  // Search Process
  $(".btn-search").click(function () {
    var getSearch = $(".get-search").val();
    alert(getSearch);
  });
  // end Search Process

  // Set Header
  var headerContent = `
    <h1 class="text-center mt-5"><a href="/" class="text-decoration-none text-dark">NuuuNote</a></h1>
    <p class="text-center fs-3 fst-italic mb-5">
    "apapun yang terjadi, tetaplah bernafas" (Jack Kahuna Laguna)
    </p>
    <hr />
    `;
  $(".set-header").append(headerContent);
  // end Set Header

  var urlParam = new URLSearchParams(window.location.search);
  if (urlParam.get("slug") == null) {
    // Show Blog List
    var maxPostShow = blogs.length;
    for (var i = 0; i < maxPostShow; i++) {
      $(".blog-list-container").append(`
            <div class='col-lg-6 mb-3'>
                <div class="card" style="width: 100%;">
                    <img src="${blogs[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <div class="small mb-3">by : ${blogs[i].author} at ${blogs[i].category}</div>
                    <h5 class="card-title">${blogs[i].title}</h5>
                    <a href="${window.location.href}?slug=${blogs[i].slug}" class="btn btn-link text-decoration-none">Read more . . .</a>
                    </div>
                </div>
            <div>
        `);
    }
    // end Show Blog List
  } else {
    $('.btn-show-more').hide();
    var slug = urlParam.get("slug");
    var descriptionContent = '';
    var imageContent = '';
    var titleContent = '';
    for(var i = 0; i < blogs.length; i++) {
        if(slug == blogs[i].slug){
            $('.get-file-body').attr('src', ('articles/'+blogs[i].body_file));
            descriptionContent = `<small class="mb-4 mt-3">By : ${blogs[i].author} in ${blogs[i].category} <br />Uploaded at : ${blogs[i].uploaded_at}</small>`;
            imageContent = `<img src="${blogs[i].image}" class="img-fluid mb-4" />`;
            titleContent = `<h4 class="fw-bold mb-3">${blogs[i].title}</h4>`;
            break;
        }
    }
    $('.blog-list-container').append(descriptionContent);
    $('.blog-list-container').append(imageContent);
    $('.blog-list-container').append(titleContent);
  }

  // Set Footer
  var getYear = new Date();
  var footerContent = `
    <div class="bg-dark text-light text-center py-3">
    <p class="m-0 p-0">&copy ${getYear.getFullYear()} - designed and developed by <a href="https://ibnuahmadfauzi.github.io" class="text-decoration-none text-light fw-bold">Ibnu Ahmad Fauzi</a></p>
    </div>
    `;
  $(".footer-container").append(footerContent);
  // end Set Footer
});
