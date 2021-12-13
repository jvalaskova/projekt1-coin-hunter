

// sem začni psát svůj program ******************************************************
// 0. zavedení proměnné                  mince
// 1. definování rozměru (šířka, výška)  mince.height
// 2. definování pozice (x, y)           minceX = random+inner+window
// 3. zavedení fce (pozicuje)            mince.style.left = minceX+px
// 4. nastavení hudby+podmínky pro 4 směry (key a o kolik, nastavení <0 =0, aby neodešel z window)
// + fce umistiPanacka + fce otestujKolizi
// 5. otestujKolizi + novaMince() + zvukMince.play() + zvysScore()
// 6. zvysScore

let panacek, panacekX, panacekY, panacekVyska, panacekSirka;
let mince, minceX, minceY, minceSirka, minceVyska;
let score, pocetMinci;
let zvukMince, zvukFanfara;
let musicPlay = false;

panacek = document.querySelector('#panacek');
mince = document.querySelector('#mince');
score = document.querySelector('#score');
zvukMince = document.querySelector('#zvukMince');
zvukFanfara = document.querySelector('#zvukFanfara');
pocetMinci = 0;


function priNacteniStranky() {

	panacekSirka = panacek.width;
	panacekVyska = panacek.height;
	
	panacekX = Math.round(window.innerWidth / 2 - panacekSirka / 2);
	panacekY = Math.round(window.innerHeight / 2 - panacekVyska / 2);
	umistiPanacka();

	minceSirka = mince.width;
	minceVyska = mince.height;
	novaMince();
}

function umistiPanacka() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
}

function novaMince() {
	minceX = Math.round(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.round(Math.random() * (window.innerHeight - minceVyska));
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';

}

//************************************* 

function priStisknutiKlavesy(udalost) {

	if(!musicPlay) {
		document.querySelector('#hudba').play();
		musicPlay = true;
	}



	if (udalost.key === 'ArrowLeft') {
		panacekX -= 10;
		if (panacekX < 0) {
			panacekX = 0;
		}
		panacek.src = 'obrazky/panacek-vlevo.png';
	}

	if (udalost.key === 'ArrowRight') {
		panacekX += 10;
		if (panacekX + panacekSirka > window.innerWidth) {
			panacekX = window.innerWidth - panacekSirka;
		}
		panacek.src = 'obrazky/panacek-vpravo.png';
	}

	if (udalost.key === 'ArrowUp') {
		panacekY -= 10;
		if (panacekY < 0) {
			panacekY = 0;
		}
		panacek.src = 'obrazky/panacek-nahoru.png';
	}

	if (udalost.key === 'ArrowDown') {
		panacekY += 10;
		if (panacekY + panacekVyska > window.innerHeight) {
			panacekY = window.innerHeight - panacekVyska;
		}
		panacek.src = 'obrazky/panacek.png';
	}

	umistiPanacka();

	otestujKolizi();
}

//***********************
function otestujKolizi() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
	novaMince();
	zvukMince.play();
	zvysScore();
	}
}
	
	
zvysScore();
function zvysScore () {
	pocetMinci+=1;
	score.innerText = pocetMinci;
	if(pocetMinci === 5) {
		zvukFanfara.play();
		alert('The winner is ...yes...You! Congratulation.');
	}

	

}