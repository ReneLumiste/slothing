<template>
  <footer class="footer">
    <h4>Slothing</h4>
    <div class="socials">
      <ul>
        <li class="socialItem"><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></li>
        <li class="socialItem"><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
    <div class="copyright">
      <p>Email: info@slothing.ee</p>
      <p>Copyright &copy; Slothing OÜ. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
/* FOOTER*/
.footer{
  margin-top: 100px;
  padding: 0;
  background-color: black;
  text-align: center;
}


.socialItem{
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 20px 2px 20px 2px;
}

.socialItem a{
  padding: 10px 20px;
  font-size: 30px;
  color: #F94000;
  transition: color 0.4s;
}


.socialItem a:hover{
  color:#FDA750;
}

.footer h4{
  color: white;
  padding-top: 15px;
  font-size: larger;
}

.copyright p{
  font-size: 12px;
  color: white;
  padding-bottom: 10px;
}
</style>