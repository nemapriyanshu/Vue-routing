<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
       <router-link to="/" class="nav-link">HOME</router-link>
      
      </li>
      <li class="nav-item">
         <router-link to="/about" class="nav-link">ABOUT</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/course" class="nav-link">Course</router-link>
      </li>
    
      <li class="nav-item">
         <router-link to="/reset" class="nav-link">Reset(redirect)</router-link>
      </li>
    
      <li class="nav-item">
         <router-link to="/phpcourse" class="nav-link">phpcourse(redirec-name)</router-link>
      </li>
    
    
      <li class="nav-item">
         <router-link to="/aliass" class="nav-link">ALIAS</router-link>
      </li>
    
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name:'Nav',
}
</script>

<style>

</style>