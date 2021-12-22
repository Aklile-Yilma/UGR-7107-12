MENU_DOM = document.getElementById("nav_header")
VISIBILITY_CLASS = "visible"

function isMenuVisible(){
	return MENU_DOM.classList.contains(VISIBILITY_CLASS)

}

function toggleMenu(){
	if(isMenuVisible())
		hideMenu()
	else
		showMenu()

}

function showMenu(){
	MENU_DOM.classList.add(VISIBILITY_CLASS)
}

function hideMenu(){
	MENU_DOM.classList.remove(VISIBILITY_CLASS)
}
