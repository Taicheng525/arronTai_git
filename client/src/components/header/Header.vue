<template>
  <header class="nav_page">
    <nav class="nav-wrapper z-depth-0 transparent">
      <div class="containerr">
        <a href="" class="brand-logo vert_mid">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1296 1728" style="enable-background:new 0 0 1296 1728;" xml:space="preserve">
            
            <circle id="circle"  stroke="#ffffff" stroke-width="58" class="st0" cx="623.7" cy="986" r="562" />
            <g id="tai">
                <path class="st0" stroke="#ffffff" stroke-width="66" d="M308.4,908.8c-30.6-5.1-57.8-24.2-76.6-48.9c-18.8-24.7-29.8-54.6-36.1-85c-1.9-9.4-3.4-19.4-0.1-28.4
            c5.5-14.8,22-22.1,37.2-26.4c91.2-25.5,187.6,3,279.2,26.9c91.6,23.9,193.1,42.5,277.7-0.1c13.4-6.8,28-19.5,23.8-33.9
            c-4.5-15.4-25.6-17.2-41.2-13.8c-55.2,12.3-101.4,51.6-133.9,97.8c-32.5,46.3-53.2,99.6-74.2,152.2
            c-35.3,88.4-72.2,176.2-113.3,262.1c-13.7,28.7-28.2,57.5-49.6,81c-5.2,5.7-11.1,11.2-18.5,13.4c-21.5,6.3-39.4-18.2-44.2-40.1
            c-5.5-24.8-3.9-51.2,4.4-75.2c3.2-9.3,7.8-18.6,15.9-24.2c6.6-4.5,14.7-6,22.6-6.9c31.4-3.6,63.7-0.2,93.7,9.9
            c35.8,12.1,68.4,33.5,105.5,40.8c58.1,11.3,116.5-13.8,170.1-39c18.1-8.5,39.3-22.5,36.3-42.3c-38.9-2.3-69.1,33.6-85.9,68.9
            c-7.9,16.5-13.3,38.8,0.2,51c10.2,9.2,26.2,7.5,39,2.7c21.6-8.2,40.4-23.9,52.1-43.9c-10.1,11.7-3.5,31.5,9.7,39.7
            c13.2,8.2,29.9,7.4,45.1,4.5c50.1-9.8,95.4-42.1,121-86.4c-19.7,10.9-33.2,32.1-34.9,54.5c-0.3,3.5-0.1,7.3,2.1,10
            c1.9,2.4,5,3.4,8,4.1c25.2,6,53.2-1.3,72.2-18.9" />  
            </g>
            <g id="dot">
              <path class="st0" stroke="#ffffff" stroke-width="50" d="M960.5,1085.5"/>
            </g>
          </svg> 
          <span>ArronTai</span>
        </a>
        
        <a href="" class="sidenav-trigger" data-target="mobile-menu">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul class="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".sidenav");
      const instances = M.Sidenav.init(elems, {});
    });
  }
};
</script>

<style scoped>
.containerr {
  margin: 0 7%;
}

.nav_page {
  background: url(../../assets/header_back4.png);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

@media screen and (max-width: 670px) {
  .nav_page {
    background: url(../../assets/header_back2.jpg);
    min-height: 330px;
    background-size: cover;
    background-position: center;
  }

  nav .brand-logo {
    margin-top: 120px;
  }
}

.st0 {
  fill: none;
}

svg {
  width: 52px;
}

.vert_mid {
  display: flex;
  align-items: center;
}

svg #tai {
  stroke-dasharray: 3300;
  stroke-dashoffset: 3300;
  animation-direction: alternate;
  animation: dash 5.5s linear infinite alternate;
}

svg #circle {
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  animation-direction: alternate;
  animation: dash 5.5s linear infinite alternate;
}

@keyframes dash {
  from {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
