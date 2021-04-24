<template>
  <Navbar></Navbar>
  <div class="about">
    <h1>Meist</h1>
    <div class="container"></div>
    <div class="aboutSisu">
      <div class="aboutTekst">
        <h2>Kes me oleme ja mida me pakume?</h2>
        <br>
        <p>Slothing OÜ on ettevõte, mis toodab kakskeelseid raamatuid. Tutvustame täiesti uut ideed, mis seob meelelahutuse keelte õppimisega. Meie äriidee ei ole perspektiivikas mitte ainult Eestis, vaid ka ülejäänud maailmas.
        </p>
        <br>
        <h2>Miks tuleb kakskeelsus kasuks? </h2>
        <br>
        <p>Kakskeelsus tuleb inimestele kasuks nii pikaajalise tervise puhul kui ka igapäevaelus. Inimesed, kes räägivad mitut keelt, on tööturul rohkem hinnatud. Lisaks tuleb 2017. aastal Itaalias Perani ja kolleegide poolt läbiviidud uuringust välja, et võõrkeele oskamine lükkab keskmiselt Alzheimeri tõve ja dementsuse väljendumist edasi viie aasta võrra. Samuti on leitud, et mitme keele oskamine arendab mälu ja kognitiivseid võimeid.</p><br>
        <h2>Kellele on meie raamatud sobilikud?</h2>
        <br>
        <p>Üks meie äriidee eelistest on kindlasti see, et otsest sihtgruppi meil ei ole - meie raamatud sobivad kõikidele inimtüüpidele igas vanuses. Tavalistest raamatutest eristab meid see, et lisaks meelelahutuslikule osale, on meie klientidel võimalik õppida samaaegselt endale meelepärast võõrkeelt.</p>
        <br><br><br>
        <h3>Vaata, milline meie raamat seest välja näeb! <span> <a class="avasta" href="https://drive.google.com/file/d/1oDR8PD5nejbWvmZC_FWqKNwHW7bG3o1f/view?usp=sharing">Näidis &#10148;</a></span></h3>
      </div>
      <div class="aboutPilt">
        <img src="../assets/cover.jpg">
      </div>
    </div>
  </div>

  <NextBook></NextBook>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
import NextBook from "@/components/NextBook";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Footer,
    NextBook,
    Navbar
  }
}
</script>

<style scoped>
span{
  margin-left: 4%;
}
/* ABOUT PAGE*/
.about{
  width: 100%;
  background-color: white;
}
.about h1{
  text-align: center;
  padding-top: 50px;
margin-bottom: 20px;
}
.container{
  max-width: 1700px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  /*padding-bottom: 100px;*/
}

.aboutSisu{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.aboutPilt{
  flex-basis: 20%;
  min-width: 300px;
}

.aboutTekst{
  flex-basis: 70%;
  min-width: 300px;
}
.aboutPilt img{
  width: 100%;
  padding-bottom: 50px;
  padding-top: 20px;
}
@media screen and (max-width: 1050px) {
  .about h1{
    text-align: center;
    padding-top: 10%;
    margin-bottom: 20px;
  }
}
</style>
