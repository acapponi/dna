<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>{Nombre del sitio}</title>

	<link rel="stylesheet" href="assets/timple-bs/css/bootstrap.min.css" />
		<link rel="stylesheet" href="assets/slick-1.8.1/slick.css" />
	<link rel="stylesheet" href="css/main.css" />

	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	   <style>
			.ie8-hide {
				display: none;
			}

			.page-template-page-tpl-home, .bg-balloons, .indicadores-home {
				background-color: #137c94;
			}

			.ie8-alert {
				display: block;
			}

	   </style>
	 <![endif]-->

</head>
<body>
	<main>
	<!--[if lt IE 10]>
	<div class="ie8-alert text-center" style="background: #C33;  color: #FFF;  text-align: center; margin-top: 60px;">
		<p>Unfortunately {NOMBRE DEL SITIO} is not compatible with older versions of internet explorer (less to IE 9). <br>
		Please log in with an updated version of Internet Explorer, Firefox, Opera, Safari or Google Chorme</p>

	</div>
	<![endif]-->

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">Navbar</a>
		<button class="navbar-toggler hamburger hamburger--collapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<div class="hamburger-box">
				<div class="hamburger-inner"></div>
			</div>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Dropdown
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
