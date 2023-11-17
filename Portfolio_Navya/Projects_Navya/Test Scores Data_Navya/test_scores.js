var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function addScore(){
	var name = $('name').value;
	var score = parseInt($('score').value);
	if(name.trim() == ""){
		document.getElementById("nameSpan").style.display = "inline"; 
		return false;
	}else{
		document.getElementById("nameSpan").style.display = "none"; 
		names.push(name);
		$('name').value = '';
	}
	if(name.trim() == ""){
		document.getElementById("scoreSpan").style.display = "inline"; 
		return false;
	}else{
		document.getElementById("scoreSpan").style.display = "none"; 
		scores.push(score);
		$('score').value = '';
	}
};

function displayResults(){
	var total =0;
	var avg =0;
	var highestScore  = 0;
	for(var i=0;i<scores.length;i++){
		total += scores[i];
		if(scores[highestScore] < scores[i]){
			highestScore = i;
		}
	}
	
	avg = parseFloat(total/scores.length);
	var h2Ele = document.createElement("h2");
	h2Ele.className = "headings";
	h2Ele.innerHTML = "Results";
	var resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = '';
	resultsDiv.append(h2Ele);
	var pEleOne = document.createElement("p");
	pEleOne.className = "spanContent";
	pEleOne.textContent = `Avgerage Score = ${avg.toFixed(2)}`;
	var pEleTwo = document.createElement("p");
	pEleTwo.className = "spanContent";
	pEleTwo.textContent = `High Score = ${names[highestScore]} with a score of ${scores[highestScore]}`;
	resultsDiv.append(pEleOne);
	resultsDiv.append(pEleTwo);
};

function displayScores(){
	var h2Ele = document.createElement("h2");
	h2Ele.className = "headingTwo";
	h2Ele.textContent = "Scores";
	var scoresDiv = document.getElementById("scoreDiv");
	var len = document.getElementsByClassName('headingTwo')
	if(!(len.length)){
		scoresDiv.prepend(h2Ele);
	}
	
	var tableELe = '<tr><th class="th">Name</th><th class="th">Scores</th></tr>';
	for(let i = 0; i< scores.length;i++){
		tableELe += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`
	}
	var scoresTable = document.getElementById("scores_table");
	scoresTable.innerHTML = tableELe ;
	
};