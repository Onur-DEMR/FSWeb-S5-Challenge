import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  
  const cardDiv = document.createElement("div");
  const headDiv = document.createElement("div");
  const authorDiv= document.createElement("div");
  const imgDiv= document.createElement("div");
  const imgSrc = document.createElement("img");
  const yazarSpan = document.createElement("span");

  cardDiv.classList.add("card");
  headDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  headDiv.textContent = makaleler.anabaslik;
  imgSrc.src = makaleler.yazarFoto;
  yazarSpan.textContent = makaleler.yazarAdi + " tarafıdan";

  cardDiv.appendChild(headDiv);
  headDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgSrc);
  imgSrc.appendChild(imgDiv);
  authorDiv.appendChild(yazarSpan);

  cardDiv.addEventListener("click", (a)=>{
const ekran = a.target.querySelector(".headline").textContent ;
console.log(ekran);
  } )
  return cardDiv;
}

const cardEkleyici = (secici) => {
  const cardEkle = document.querySelector(secici);
  axios .get("http://localhost:5001/api/makaleler") .then((response)=>{
    for(let key in response.data.makaleler){
      for(let i=0;i<response.data.makaleler[key].length;i++){
        gelenVeri.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  });
  
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
}

export { Card, cardEkleyici }
