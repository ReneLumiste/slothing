<template>
  <Navbar></Navbar>
  <div class="contactContainer">
    <div class="contact">
      <div class="contactSisu">
        <i class="fa fa-envelope"> info@slothing.com</i>
        <br>
        <i class="fa fa-phone"> +372 56620720</i>
      </div>
      <div class="contactForm">
        <h2>Võta meiega ühendust</h2>
        <form action="" method="post" class="form">
          <input type="text" class="text-box" placeholder="Sinu täisnimi" required>
          <input type="email" class="text-box" placeholder="Sinu email" required>
          <input type="text" class="text-single" placeholder="Teema" required>
          <textarea name="" id="" cols="30" rows="10" placeholder="Sisesta sõnum" required></textarea>
          <input type="submit" class="avasta" value="Saada">
        </form>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

export default {
  name: "Contact",
  components: {
    Footer,
    Navbar
  }
}
</script>

<style scoped>
/* KONTAKT PAGE*/
.contact{
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
}
.contactContainer{
  display: flex;
}
.contactSisu{
  color: black;
  max-width: 500px;
  line-height: 50px;
  padding-top: 4%;
  padding-left: 20px;
  margin-right: 20%;
}
.contactSisu i{
  margin-right: 20px;
  font-size: 25px;
  letter-spacing: 2px;
}
.contactForm{
  max-width: 700px;
  margin-right: 50px;
}
.contactFormm .contactSisu{
  flex: 1;
}
.contactForm h2{
  color: #F94000;
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.contactForm .text-box{
  background: #024F44;
  border: none;
  width: calc(50% - 10px);
  height: 50px;
  padding: 12px;
  font-size: 15px;
  border-radius: 2%;
  margin-bottom: 20px;
}
.contactForm .text-box:first-child{
  margin-right: 15px;
}
.contactForm .text-single{
  background: #024F44;
  border: none;
  width: 100%;
  height: 50px;
  padding: 12px;
  font-size: 15px;
  border-radius: 2%;
  margin-bottom: 20px;
}

.contactForm textarea{
  background: #024F44;
  border: none;
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  padding: 12px;
  font-size: 15px;
  border-radius: 2%;
  margin-bottom: 20px;
}

@media screen and (max-width: 1050px) {
  .contact{
    flex-direction: column;
  }
  .contactSisu{
    padding-top: 0;
  }
  .contactSisu, .contactForm{
    margin: 30px 50px;
  }
  .contactForm .text-box{
    width: 100%;
  }
  .contactForm h2{
    font-size: 30px;
  }
  .contactForm textarea{
    margin-bottom: 0;
  }
}
</style>