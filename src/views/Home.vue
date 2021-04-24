<template>
  <Navbar></Navbar>
  <div class="index">
    <div class="container">
      <hr>
      <div class="indexSisu">
        <div class="veerg">
          <h1>Ühenda kasulik vajalikuga!</h1>
          <p>Slothing pakub kakskeelseid raamatuid, mille abil saavad inimesed siduda meelelahutuse keelte õppimisega. </p>
          <br>
          <p>Meie raamatutes on tekst paralleelselt originaalkeeles ning tõlgitud keeles. Seega saab iga inimene tundmatule sõnale kohe vastava tähenduse emakeeles. </p>
          <br>
          <p>Hetkel meil ühtegi raamatut veel müügil ei ole, ent peagi valmivad esimesed kuus raamatut! Liitu all pool oleva uudiskirjaga, et hoida ennast meie ettevõtmistega kursis.</p>
          <router-link class="avasta" to="/meist">Tutvu lähemalt &#10148;</router-link>
        </div>
        <div class="veerg">
          <img src="../assets/raamatTransparent.png">
        </div>
      </div>
    </div>
  </div>

  <!--------Tooted----------->
  <div class="products">
    <h1>Viimased raamatud</h1>
    <div class="productsSisu">
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Francis Scott Fitzgerald "Suur Gatsby"</h3>
            </div>
            <div class="back">
              <p>"Suur Gatsby" on raamat, mis  sssssssssss ddsf dsf sdf we dfs ew fds</p>
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
              <p>See raamat sobib ideaalselt neile, kes sssssssssss ddsf dsf sdf we dfs ew fds</p>
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
              <p>"Koera süda" räägib loo sellest, sssssssssss ddsf dsf sdf we dfs ew fds </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="allItems">
    <router-link class="avasta" to="/tooted">Vaata kõiki raamatuid</router-link>
  </div>
  <Newsletter></Newsletter>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Footer,
    Newsletter,
    Navbar
  }
};
</script>

<style scoped>
.veerg p{
  color: #0C0402;
  font-size: 20px;
}

.container{
  max-width: 1700px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  /*padding-bottom: 100px;*/
}

.indexSisu{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.veerg{
  flex-basis: 40%;
  min-width: 300px;
}
.veerg img{
  max-width: 100%;
  padding-top: 20px;

}
.veerg h1{
  font-size: 50px;
  line-height: 60px;
  margin-bottom: 25px;
}

.viimane {
  flex-basis: 30%;
  min-width: 300px;
}

.viimane img{
  max-width: 100%;
  padding-top: 40px;
}

.viimased h1{
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
}


.viimased h1{
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
}

.allItems{
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
  font-size: larger;
}

.viimane p {
  text-align: center;
}

.viimasedSisu{
  max-width: 1080px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
@media screen and (max-width: 1050px) {
  .veerg h1{
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 25px;
    margin-top: 5%;
  }
}
</style>