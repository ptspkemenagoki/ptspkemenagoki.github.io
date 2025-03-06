// ambil tanggal
const getDate = new Date();
const getYear = getDate.getFullYear();
const getMont = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function bulan(){
	if(getMont < 10 ){
		bulan = `0${getMont}`;
	}else{
		bulan = getMont
	}
	return bulan
}

// ambil hari
function hari(){
	if (getDay < 10){
		hari = `0${getDay}`;
	}else {
		hari = getDay;
	}
	return hari;
}
const tanggal = `${getYear}-${bulan()}-${hari()}`;


function getJadwalSholat() {
	fetch('https://api.myquran.com/v2/sholat/jadwal/0809/' + tanggal)
	.then(res => res.json())
	.then ( data => {
		const jadwal = data.data.jadwal
		// console.log(jadwal)
		document.getElementById('imsak').textContent = jadwal.imsak
		document.getElementById('subuh').textContent = jadwal.subuh
		document.getElementById('dzuhur').textContent = jadwal.dzuhur
		document.getElementById('ashar').textContent = jadwal.ashar
		document.getElementById('maghrib').textContent = jadwal.maghrib
		document.getElementById('isya').textContent = jadwal.isya
		document.getElementById('tanggal').textContent = tanggal 
	})
}

getJadwalSholat()