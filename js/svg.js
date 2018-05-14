const icons = document.getElementsByClassName("ada-icon");

function addInline (name, element) {
	fetch(`assets/icons/${name}.svg`)
    .then(response => response.text())
    .then(text => {
		element.innerHTML = text;
		})
    .catch(function(error) {
		console.log('There has been a problem with your fetch operation: ' + error.message);
})
}

for (let i=0; i < icons.length; i++) {
  console.log(icons[i].dataset.iconname);
	addInline(icons[i].dataset.iconname, icons[i]);
}
