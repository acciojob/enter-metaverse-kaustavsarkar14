//your JS code here. If required.
const text = document.getElementById('status')
const btn = document.getElementById('enterBtn')
btn.addEventListener('click',()=>{
	let newText = document.createElement("h1")
	newText.textContent = "Entered Metaverse"
	newText.setAttribute('id','status');
	text.parentNode.replaceChild(newText, text)
})