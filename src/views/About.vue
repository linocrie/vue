<template>
  <div class="about container-fluid">
    <div class="main-section">
      <h1>
        <div>
          <span style="color: deeppink">Make</span>
          <span style="color: slateblue">Your</span>
        </div>
        <div style="display: flex; justify-content: center">
          <span style="color: darkred">Life</span>
          <img src="../assets/images/giphy.gif" alt="" style="width:100px">
        </div>
        <span style="color: darkgreen">Colorful</span>
      </h1>
    </div>
    <div class="empty">
      <h6>Our History</h6>
    </div>
    <div class="row about-section">
      <div class="col-md-6 img-section">
        <img src="../assets/images/legs-up-air.jpg" alt="" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h3 style="color:purple">Colorful Socks</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur distinctio doloribus, ea eligendi eos excepturi hic,
          inventore iure maiores molestiae nihil numquam obcaecati, porro quisquam
          repudiandae sint tempora? Laudantium, neque.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur distinctio doloribus, ea eligendi eos excepturi hic,
          inventore iure maiores molestiae nihil numquam obcaecati, porro quisquam
          repudiandae sint tempora?
        </p>
      </div>
    </div>
    <div class="empty">
      <h6>Gallery</h6>
    </div>
    <div class="row gallery">
        <div class="col-md-6 mb-3">
            <img src="../assets/images/gn.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-md-6">
            <img src="../assets/images/pregnant.jpg" alt=""  class="img-fluid">
        </div>
        <div class="col-md-6">
            <img src="../assets/images/girl.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-md-6">
            <img src="../assets/images/woman.jpg" alt="" class="img-fluid">
        </div>

    </div>

  </div>
</template>

<style scoped>
  h1{
    display: flex;
    flex-direction: column;
    font-size: 80px;
    margin-left: 20%;
  }

  .main-section{
    width: 100%;
    display: flex;
    padding: 8% 0 8%;
    background-image: url("../assets/images/colorful-girl.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 30px;
  }
  .about-section{
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }
  .about-section p{
    width: 600px;
  }
  .empty{
    height: 20px;
    margin: 20px;
    background-color: darkslateblue;
  }
  .empty h6 {
    color:white;
  }
</style>