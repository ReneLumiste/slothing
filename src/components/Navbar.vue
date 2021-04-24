<template>
  <div class="index">
    <div class="navbar">
      <div class="logo">
        <router-link to="/"><img src="../assets/logoMust.png" width="150"></router-link>
      </div>
      <router-link to="#" class="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </router-link>
      <nav class="navButtons">
        <ul>
          <li><router-link to="/">Kodu</router-link></li>
          <li><router-link to="/tooted">Tooted</router-link></li>
          <li><router-link to="/meist">Meist</router-link></li>
          <li><router-link to="/kontakt">Võta ühendust</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.logo{
  margin-left: 6%;
}

.navbar{
  display: flex;
  align-items: center;
  padding: 20px;
}
nav{
  flex: 1;
  text-align: right;
}
nav ul{
  display: inline-block;
  list-style-type: none;
  margin-right: 20px
}
nav ul li{
  display: inline-block;
  margin-right: 40px;
  font-weight: bold;
  font-size: larger;
}

nav ul li a:hover{
  font-size: larger;
  color: #F94000;
  transition: 0.1s;
}

.toggle{
  position: absolute;
  top: .75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle .bar{
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  /*.toggle{
    display: flex;
  }*/
  .navbar{
    flex-direction: column;
    align-items: flex-start;
  }
  nav{
    width: 100%;
    /*display: none;*/
}
nav ul{
  width: 100%;
  display: flex;
  flex-direction: column;
}

nav li {
  text-align: right;
}
}
</style>