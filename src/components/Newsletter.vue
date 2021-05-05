<template>
  <div class="newsletter">
    <h1>Ühine meie uudiskirjaga</h1>
    <p>Liitu meie uudiskirjaga, et saaksid esimesena teada uutest raamatutest ning parimatest pakkumistest.</p>
      <form v-on:submit.prevent="sendNewsletter" action="">
        <div class="email" id="newsletter">
          <i class="fas fa-envelope"></i>
          <input v-model="email" id="mail" type="email" class="news-email" placeholder="Sinu email" required>
          <button id="submit" type="submit" class="subscribe">Saada</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name:'Newsletter',

  data: function() {
    return {
      email: "",
    }
  },
  methods: {
    sendNewsletter: async function () {
      let infoNewsletter = {
        "email": this.email,
      };
      try {
        const sendNewsletterRequest = await fetch('http://localhost:3000/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(infoNewsletter),
        });
        let sendNewsletterResponse = await sendNewsletterRequest.json();
        console.log("result" + JSON.stringify(sendNewsletterResponse));
      } catch (e){
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
/*Newsletter*/
.newsletter{
  background: url("../assets/raamaturiiul.jpg") no-repeat center;
  background-size: cover;
  padding: 100px 40px;
  text-align: center;
  color: white;
}

.newsletter p {
  max-width: 600px;
  margin: 40px auto;
  font-size: 16px;
  font-weight: 500;
}

.email{
  height: 40px;
  display: flex;
  justify-content: center;
}

.email i{
  background: #F94000;
  line-height: 40px;
  width: 40px;
}

.news-email,.subscribe{
  border: none;
  outline: none;
}

.news-email{
  width: 0px;
  transition: 0.5s;
}

.email:hover > .news-email{
  width: 250px;
  padding:0 10px;
}

.subscribe{
  background: #F94000;
  color: white;
  padding: 0 10px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
}

@media screen and (max-width: 1050px) {
  .news-email{
    width: 100px;
  }
}

</style>