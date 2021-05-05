<template>
  <Navbar></Navbar>
  <div class="contactContainer">
    <div class="contact">
      <div class="contactSisu">
        <i class="fa fa-envelope"> info@slothing.ee</i>
        <br>
        <i class="fa fa-phone"> +372 56620720</i>
      </div>
      <div class="contactForm">
        <h2>Võta meiega ühendust</h2>
        <form v-on:submit.prevent="sendContact" action="" method="POST" class="form">
          <input v-model="name" type="text" class="text-box" placeholder="Sinu täisnimi" required>
          <input v-model="email" type="email" class="text-box" placeholder="Sinu email" required>
          <input v-model="subject" type="text" class="text-single" placeholder="Teema" required>
          <textarea v-model="input" name="" id="" class="text-area" cols="30" rows="10" placeholder="Sisesta sõnum" required></textarea>
          <button type="submit" class="avasta">Saada</button>
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
  },
  data: function() {
    return {
      name: "",
      email: "",
      subject: "",
      input: "",
    }
  },
  methods: {
    sendContact: async function () {
      let infoContact = {
        "name": this.name,
        "receiver": this.email,
        "title": this.subject,
        "body": this.input,
      };
      try {
        const sendContactRequest = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(infoContact),
        });
        let sendContactResponse = await sendContactRequest.json();
        console.log("result" + JSON.stringify(sendContactResponse));
      } catch (e){
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
/* KONTAKT PAGE*/
::placeholder{
  color: white;
}
.text-box,.text-single,.text-area{
  color: white;
}
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