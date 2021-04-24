<template>
  <div class="suggestions">
    <h1>Millist raamatut sooviksid sina järgmisena näha?</h1>
    <div class="suggestion">
      <i class="fal fa-books"></i>
      <input type="text" class="suggestionText" placeholder="Autor" required>
      <input type="text" class="suggestionText" placeholder="Raamatu pealkiri" required>
      <br>
      <input type="submit" class="avasta" value="Saada">
    </div>
  </div>
</template>

<script>
export default {
  name: "NextBook"
}
</script>

<style scoped>
/*Suggestions*/
.suggestions{
  background: url("../assets/next.jpg") no-repeat center;
  background-size: cover;
  padding: 50px 20px;
  text-align: center;
  color: white;
}

.suggestion{
  margin-top: 50px;
}

.suggestionText{
  background: white;
  border: none;
  width: 40%;
  height: 50px;
  padding: 12px;
  font-size: 15px;
  border-radius: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
}

.suggestionSend{
  background: #F94000;
  border: none;
  width: 120px;
  height: 40px;
  padding: 12px;
  font-size: 15px;
  border-radius: 2%;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}

.suggestionSend:hover{
  background:#FDA750;
}

@media screen and (max-width: 1050px) {
  .suggestionText{
    background: white;
    border: none;
    width: 100%;
    height: 50px;
    padding: 12px;
    font-size: 15px;
    border-radius: 10px;
    margin-right: 15px;
    margin-bottom: 20px;
  }
}
</style>