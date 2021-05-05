<template>
  <Navbar></Navbar>
  <div class="products">
    <h1>Meie raamatud</h1>
    <div class="productsSisu">
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Francis Scott Fitzgerald "Suur Gatsby"</h3>
            </div>
            <div class="back">
              <p>"Suur Gatsby" on romantiline seiklusjutt, mis sobib kõigile adrenaliinisõpradele. Jay Gatsby on miljonär, kes korraldab suurejoonelisi pidusid ja kiindub sügavalt Daisy Buchananisse.</p>
              <p>Raamat on jutustus Gatsby sõbra Carraway vaatepunktist ja tema mõtetest.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>George Orwell "1984"</h3>
            </div>
            <div class="back">
              <p>George Orwelli "1984" on väga põnev düstoopiline väljamõeldis, mis paneb mõtlema mineviku ja tuleviku olemuse üle. </p>
              <p>Kes kontrollib minevikku, kontrollib ka tulevikku. Kes saab aru olevikust, mõistab ka minevikku. </p>
              <p>Sellised küsimused ja arutelud on selle raamatu põhisisu.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Mihhail Bulgakov "Koera süda"</h3>
            </div>
            <div class="back">
              <p>"Koera süda" on Mihhail Bulgakovi üks märkimisväärsemaid teoseid. Seda raamatut tõlgendatakse kui revolutsiooni ekslikku katset inimkonda radikaalselt ümber kujundada. </p>
              <p>See raamat on Venemaal tõeline kultuurifenomen, mida inimesed (koolilastest poliitikuteni) läbi ja lõhki teavad.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Raamat tulekul</h3>
            </div>
            <div class="back">
              <p>See raamat on siia lisatud näidise eesmärgil.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Raamat tulekul</h3>
            </div>
            <div class="back">
              <p>See raamat on siia lisatud näidise eesmärgil.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Raamat tulekul</h3>
            </div>
            <div class="back">
              <p>See raamat on siia lisatud näidise eesmärgil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";


export default {
  components: {
    Footer,
    Navbar
  }
}
</script>

<style scoped>
/*Products*/

/*Products - Filters*/
.languages{
  display: flex;
  margin-left: 6%;
  margin-top:  30px;
}
.language{
  font-size: 1.5em;
  margin-left: 15px;
  display: flex;
}

.language label{
  cursor: pointer;
}
.language label input{
  display: none;
}
.language label span{
  background: radial-gradient(#FCEEDD,#FEF1D3);
  padding: 5px 30px;
  color: black;
  border-radius: 5%;
  display: flex;
}
.language label input:checked ~ span{
  background: #F94000;
}

.filter{
  background: radial-gradient(#FCEEDD,#FEF1D3);
  border: none;
  width: 120px;
  height: 40px;
  padding: 12px;
  font-size: 15px;
  border-radius: 2%;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}

.filter:hover{
  background:#F94000;
}



</style>