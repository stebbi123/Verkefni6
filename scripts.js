

var tag = document.getElementsByTagName("main")[0];
//var tag = document.getElementById("start");
console.log(tag.lastChild.nextSibling);
console.log(tag.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nodeValue);
tag.firstChild.nextSibling.className = 'active';
tag.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = ''; //skíta mix i know, var ekki að finna úr þessu með því að nota lastChild

var replaceName = tag.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nodeValue;
replaceName = replaceName.replace('Gunnar', 'Jónas');
tag.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nodeValue = replaceName;

console.log(tag.firstChild.nextSibling);
console.log(tag.firstChild.nextSibling.getAttribute('class').parentNode);
console.log('hi');

document.getElementById('test').innerHTML = tag.firstChild.nextSibling.getAttribute('class');
