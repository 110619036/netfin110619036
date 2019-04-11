import $ from 'jquery';

import bird from '../images/bird.jpg';
import squirrel from '../images/squirrel.jpg';

import '../css/style.css';
import '../css/normalize.css';
import "../css/fonts/PT-Sans-Bold.eot";
import "../css/fonts/PT-Sans-Bold.svg";
import "../css/fonts/PT-Sans-Bold.ttf";
import "../css/fonts/PT-Sans-Bold.woff";
import "../css/fonts/PT-Sans-BoldItalic.eot";
import "../css/fonts/PT-Sans-BoldItalic.svg";
import "../css/fonts/PT-Sans-BoldItalic.ttf";
import "../css/fonts/PT-Sans-BoldItalic.woff";
import "../css/fonts/PT-Sans-Italic.eot";
import "../css/fonts/PT-Sans-Italic.svg";
import "../css/fonts/PT-Sans-Italic.ttf";
import "../css/fonts/PT-Sans-Italic.woff";
import "../css/fonts/PT-Sans.eot";
import "../css/fonts/PT-Sans.svg";
import "../css/fonts/PT-Sans.ttf";
import "../css/fonts/PT-Sans.woff";

$('#bird').attr("src", bird);
$('#squirrel').attr("src", squirrel);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});

