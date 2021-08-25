
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function range(n) {     
	let a = Array(n);
	for (let i = 0; i < n; a[i++] = i);
	return a;
}

function Lottery(){
	var main = document.getElementById("main_numbers").value, 
		extra = document.getElementById("bonus_humbers").value,
		mainHowMany = document.getElementById("main_howmany").value,
		extraHowMany = document.getElementById("bonus_howmany").value;  

	var mainnumbers = range(main),
		extranumbers = range(extra),
		setMain = shuffle(mainnumbers),
		setExtra = shuffle(extranumbers),
		getlotto = setMain.slice(0, mainHowMany),
		getbonus = setExtra.slice(0, extraHowMany);
	
	document.getElementById("Lotto").innerHTML = getlotto;
	document.getElementById("Bonus").innerHTML = getbonus;
}
function setLottery(mn, ex, mnHM, exHM){
	
	var mainnumbers = range(mn),
		extranumbers = range(ex),
		setMain = shuffle(mainnumbers),
		setExtra = shuffle(extranumbers),
		getlotto = setMain.slice(0, mnHM),
		getbonus = setExtra.slice(0, exHM);

		sortlotto = getlotto.sort(function(a, b){return a-b});
		sortbonus = getbonus.sort(function(a, b){return a-b});
	
	document.getElementById("Lotto").innerHTML = sortlotto;
	document.getElementById("Bonus").innerHTML = sortbonus;
}

$(document).ready(function(){
	$('.mainballs').hide();
	$('.bonusballs').hide();
	$('#lotto').on("click", function(){
		$('.mainballs').fadeIn('slow');
		$('.bonusballs').fadeOut('slow');
		$('.mainballs_title').text('The National Lottery Numbers');
		$('.bonusballs_title').text('');
		$('.bonusballs_title, .mainballs_title')
			.removeClass('text-primary')
			.removeClass('text-info')
			.removeClass('text-inverse')
			.addClass('text-danger');
	});
	$('#euromillions').on("click", function(){
		$('.mainballs').fadeIn('slow');
		$('.bonusballs').fadeIn('slow');
		$('.mainballs_title').text('EuroMillions Numbers');
		$('.bonusballs_title').text('Lucky Stars');
		$('.bonusballs_title, .mainballs_title')
			.removeClass('text-danger')
			.removeClass('text-info')
			.removeClass('text-inverse')
			.addClass('text-primary');
	});
	$('#setforlife').on("click", function(){
		$('.mainballs').fadeIn('slow');
		$('.bonusballs').fadeIn('slow');
		$('.mainballs_title').text('Set For Life Numbers');
		$('.bonusballs_title').text('Life Ball');
		$('.bonusballs_title, .mainballs_title')
			.removeClass('text-danger')
			.removeClass('text-primary')
			.removeClass('text-inverse')
			.addClass('text-info');
	});
	$('#thunderball').on("click", function(){
		$('.mainballs').fadeIn('slow');
		$('.bonusballs').fadeIn('slow');
		$('.mainballs_title').text('Main Numbers');
		$('.bonusballs_title').text('Thunderball');
		$('.bonusballs_title, .mainballs_title').
			removeClass('text-info')
			.removeClass('text-primary')
			.removeClass('text-danger')
			.addClass('text-inverse');
	});
});
