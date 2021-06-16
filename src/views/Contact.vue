<template>
  <div id="contact">
    <div class="contact-side">
      <div class="info-side">
        <h1 style="color:rebeccapurple">Contact Us</h1>
        <h2 style="color:hotpink">Lorem Ipsum Dolor Sit Amet</h2>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Autem modi natus odio quasi recusandae veritatis vero.
          A consequatur, distinctio eveniet ex id iure laudantium nemo
          pariatur quis ullam, voluptatibus voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Autem modi natus odio quasi recusandae veritatis vero.
          A consequatur, distinctio eveniet ex id iure laudantium nemo
          pariatur quis ullam, voluptatibus voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Autem modi natus odio quasi recusandae veritatis vero.
          A consequatur, distinctio eveniet ex id iure laudantium nemo
          pariatur quis ullam, voluptatibus voluptatum.
        </strong>
      </div>

      <img src="../assets/images/contact.jpg" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
  .contact-side{
    display: flex;
    justify-content: space-around;
  }
  .contact-side img{
    width: 600px;
  }
  .info-side strong{
    width: 500px;
  }
</style>