<template>
  <Navbar></Navbar>
  <div class="products">
    <h1>Meie raamatud</h1>
    <div class="productsSisu">
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Esimene Kirjanik "Raamat"</h3>
            </div>
            <div class="back">
              <p>See raamat on see ja see, see ja see, see ja see.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Teine Kirjanik "Raamat"</h3>
            </div>
            <div class="back">
              <p>See raamat on see ja see, see ja see, see ja see.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Kolmas Kirjanik "Raamat"</h3>
            </div>
            <div class="back">
              <p>See raamat on see ja see, see ja see, see ja see.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Neljas Kirjanik "Raamat"</h3>
            </div>
            <div class="back">
              <p>See raamat on see ja see, see ja see, see ja see.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Viies Kirjanik "Raamat"</h3>
            </div>
            <div class="back">
              <p>See raamat on see ja see, see ja see, see ja see.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="card">
          <div class="inner">
            <div class="front">
              <h3>Kuues Kirjanik "Raamat"</h3>
            </div>
            <div class="back">
              <p>See raamat on see ja see, see ja see, see ja see.</p>
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