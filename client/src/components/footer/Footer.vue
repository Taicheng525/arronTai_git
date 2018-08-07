<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col s12 l6">
          <h5>What We Do : </h5>
          <p>this is wut we do constructore computer for everyoneas asdf as asdf asf </p>
          <p>this is wut we do constructore computer for everyoneas asdf as asdf asf </p>
        </div>

        <div class="col s12 l4 offset-l2">
          <h5>About Us : </h5>
          <ul>
            <!-- <li><a href="#" class="grey-text text-lighten-3"></a>Facebook</li>
            <li><a href="#" class="grey-text text-lighten-3"></a>Twitter</li>
            <li><a href="#" class="grey-text text-lighten-3"></a>Linkedin</li>
            <li><a href="#" class="grey-text text-lighten-3"></a>Instgram</li> -->
            <li id="tags">
              <a id="a" href="" class="waves-effect waves-light btn-floating z-depth-5 transparent">
                <font-awesome-icon :icon="['fab', 'facebook']" class="icon alt" size="2x"/>
              </a>
              <a href="" class="waves-effect waves-light btn-floating z-depth-5 transparent">
                <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" size="2x"/>
              </a>
              <a href="" class="waves-effect waves-light btn-floating z-depth-5 transparent">
                <font-awesome-icon :icon="['fab', 'instagram']" class="icon alt" size="2x"/>
              </a>
              <a href="" class="waves-effect waves-light btn-floating z-depth-5 transparent">
                <font-awesome-icon :icon="['fab', 'twitch']" class="icon alt" size="2x"/>
              </a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="fotter-copyright">
      <div class="container center-align">
        &copy; 2018 AronTai Desktop Website
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background: linear-gradient(#000000, #4e1111, #e20606);
}

#tags a{
  margin: 0px 5px
}
</style>
