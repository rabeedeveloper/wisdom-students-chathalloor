let header = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" >${det.bname}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" topage="wisdomstudentschathalloor" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  topage="about">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Programes
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" topage="cre">CRE</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Theme
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0)" work="light">Light</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0)" work="dark">Dark</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
`