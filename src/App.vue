<template>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Montserrat', sans-serif;
}
hr{
  border: 1px solid #024F44;
}
a{
  text-decoration: none;
  color: #0C0402;
}

/* Nav and second nav background*/
.index{
  background: radial-gradient(#FCEEDD,#FEF1D3);
}

/* Buttons */
.avasta{
  display: inline-block;
  background: #F94000;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 20px 0;
  color: white;
  font-size: 24px;
  font-weight: bolder;
  transition: background 0.4s;
  border: none;
}
.avasta:hover{
  background:#FDA750;
}

/*Products - used in Main and Products view */
.products h1{
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.products{
  max-width: 1800px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.productsSisu{
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.product{
  overflow: hidden;
  margin-top: 4%;
}

.card{
  width: 350px;
  height: 500px;
  margin: auto;
  perspective: 1000px;
  cursor: pointer;
}

.inner{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.front,.back{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.front{
  background-image: url("./assets/cover.jpg");
  background-size: cover;
  background-position: center;
}

.front h3{
  display: inline-block;
  width: 250px;
  padding: 5px 0;
  margin-top: 420px;
  border-radius: 2%;
  background: radial-gradient(#FCEEDD,#FEF1D3);
  color: black;
}

.back{
  background: radial-gradient(#FCEEDD,#FEF1D3);
  transform: rotateX(180deg);
}

.card:hover .inner{
  transform: rotateX(180deg);
}
.back p{
  display: inline-block;
  color: black;
  text-align: left;
  margin-left: 5%;
  margin-top: 10%;
}

@media screen and (max-width: 1600px) {
  .card {
    width: 250px;
    height: 350px;
  }
  .productsSisu {
    width: 60%;
  }
  .front h3{
    margin-top: 110%;
    width: 230px;
  }
}

@media screen and (max-width: 1400px) {
  .card {
    width: 250px;
    height: 350px;
  }
  .productsSisu {
    width: 73%;
  }
}


@media screen and (max-width: 1090px) {
  .products h1{
    margin-top: 10%;
    font-size: 26px;
  }
  .back p{
    display: inline-block;
    color: black;
    margin-top: 0;
    padding: 5px;
  }
  .products{
    padding-left: 0;
    padding-right: 0;
  }
  .front{
    background-image: url("./assets/cover.jpg");
    background-size: cover;
    background-position: center;
  }

  .productsSisu{
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
    max-width: 350px;
  }
  .product{
    overflow: visible;
    margin-top: 4%;
  }

  .inner{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 10px;
  }
  .front,.back{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .back{
    margin-top: 4%;
    background: radial-gradient(#FCEEDD,#FEF1D3);
    transform: none;
  }
  .card:hover .inner{
    transform: none;
  }
  .card{
    width: 100%;
    height: 100%;
    margin: auto;
    cursor: pointer;
  }
  /* Buttons */
  .avasta{
    display: inline-block;
    background: #F94000;
    border-radius: 50px;
    padding: 10px 20px;
    margin: 20px 0;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    transition: none;
    border: none;
  }
}

</style>
