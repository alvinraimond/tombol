var nama = document.getElementById('nama')
var angka = document.getElementById('angka')
var detik
var petunjuk = document.getElementById('modal')
var tombol = document.getElementById('tombol')

function kirim(){ 
  if(angka.value == "" || nama.value == "") {
    alert('Harap Masukkan Nama dan Waktu')
  }else if(angka.value > 60){
    alert('Waktu tidak boleh lebih dari 60 detik')
  }else{
  detik = angka.value
      document.getElementById('value').remove()
      petunjuk.remove()
    tombol.style.display = 'block'
      setInterval(timer, 1000)
}
  }
}
    var waktu =  document.getElementById('waktu') 
  function timer(){
    if(detik >= 0) {
      waktu.innerHTML= "00:" + detik
      console.log(detik)
     detik--
    if(detik < 0){
      setTimeout(function hapus(){
        tombol.remove()
     waktu.innerHTML = "Dasar " + nama.value + " Tolol"
     waktu.style.margin= 90 + "px"
      } , 1500)
     
     }
   }
  }
    
      
  function pindah() {
   
var i =Math.abs(Math.floor(Math.random()*window.innerWidth-55))
var j = Math.abs(Math.floor(Math.random()*window.innerHeight-21));
console.log('here' , i ,j , tombol.style.left , tombol.style.top);
    tombol.style.left = i+"px";
    tombol.style.top = j + "px";
    }
