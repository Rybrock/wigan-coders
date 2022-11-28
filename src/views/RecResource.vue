<template>
  <div class="bg-stone-50 p-2">
    <h1 class="text-3xl font-bold my-10">Recommended resources</h1>
    <div
      class="
        flex flex-col
        md:flex-row
        justify-center
        items-center
        mx-auto
        w-full
      "
    >
      <div class="w-full lg:w-5/12 p-4">
        <h2 class="text-xl font-bold mb-8">Wigan Coders Bootcamp!!</h2>
        <p class="w-full text-lg">
          Here at Wigan Coders we aim to offer part-time, affordable coding
          classes and courses in HTML, CSS, JAVASCRIPT and VUE.JS. We are in the
          process of building this curriculum and almost have the HTML courses
          ready to go! The other courses to follow in due time.
        </p>
        <p class="w-full text-lg">
          We aim to be the first part-time, affordable fully remote coding
          school in Wigan. With our weekly meet-up group continuing every
          Saturday morning.
        </p>
      </div>
      <div
        class="
          w-full
          lg:w-7/12
          p-4
          mt-16
          flex flex-col
          justify-center
          items-center
          bg-white
          shadow
        "
      >
        <h2 class="text-xl font-bold mb-8">Exciting new courses on the way!</h2>
        <ul class="space-y-5">
          <li class="flex items-center justify-between space-x-5">
            <div class="flex flex-col text-left">
              <span class="text-lg font-bold">HTML5 - almost complete!</span>
              <p>
                Projects include a Contact Card, a YouTub clone and much more!
              </p>
            </div>
            <img src="../assets/html-5.png" alt="" width="48" height="48" />
          </li>
          <li class="flex items-center justify-between space-x-5">
            <div class="flex flex-col text-left">
              <span class="text-lg font-bold">CSS3 - almost complete!</span>
              <p>
                Projects include a Contact Card, a YouTub clone and much more!
              </p>
            </div>
            <img
              src="../assets/icons8-css3-48.png"
              alt=""
              width="48"
              height="48"
            />
          </li>
          <li class="flex items-center justify-between space-x-5">
            <div class="flex flex-col text-left">
              <span class="text-lg font-bold">JAVASCRIPT - almost complete!</span>
              <p>
                Projects include a Contact Card and a YouTub clone, a weather
                app and much more!
              </p>
            </div>
            <img
              src="../assets/icons8-javascript-logo-50.png"
              alt=""
              width="48"
              height="48"
            />
          </li>
          <li class="flex items-center justify-between space-x-5">
            <div class="flex flex-col text-left">
              <span class="text-lg font-bold">VUE.JS - almost complete!</span>
              <p>
                Projects include a Todo app, digital clock, a live chat app and
                much more!
              </p>
            </div>
            <img
              src="../assets/icons8-vue-js-48.png"
              alt=""
              width="48"
              height="48"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="my-24 bg-white py-10">
      <h2 class="text-xl font-bold">Free online resources</h2>
      <p class="mb-16 text-lg">
        There are many free online resources you can use to get started straight
        away. Here's a few of our favorites to get you up and running totally
        free!
      </p>
      <div class="w-full flex flex-col md:flex-row md:space-x-4">
        <div class="card flex flex-col justify-center items-center w-full md:w-4/12 p-2">
            <h2 class="font-bold text-lg mb-5">Free Code Camp</h2>
            <img src="../assets/icons8-free-code-camp-48.png" class="mb-4" width="58" height="58" alt="">
            <p class="text-lg">Free Code Camp is exactly that. An online website where you can learn almost any coding language you like completely free. They have hundreds of projects you can build to make it even more fun.</p>
            <p class="mt-5 font-bold text-lg">You can find their website here <a href="https://www.freecodecamp.org/" target="_blank">https://www.freecodecamp.org/</a></p>
        </div>
        <div class="card flex flex-col justify-center items-center w-full md:w-4/12 p-2">
            <h2 class="font-bold text-lg mb-5">Code Academy</h2>
            <img src="../assets/4691345_codecademy_icon.png" class="mb-4" width="58" height="58" alt="">
            <p class="text-lg">Code Academy is another fantastic free online resource that is project based learning. All coding stacks are available and they even have a premium tier to join for the more enthusiastic coders out there.</p>
            <p class="mt-5 font-bold text-lg">You can find their website here <a href="https://www.codecademy.com/" target="_blank">https://www.codecademy.com/</a></p>
        </div>
        <div class="card flex flex-col justify-center items-center w-full md:w-4/12 p-2">
            <h2 class="font-bold text-lg mb-5">YouTube</h2>
            <img src="../assets/youtube.png" class="mb-4" width="58" height="58" alt="">
            <p class="text-lg">YouTube is a great place to find video courses for free. You can find everything from coding websites and apps to games! We have 2 favorite online tutors teaching a wide range of tech.</p>
            <p class="mt-5 font-bold text-lg flex flex-col">
                <a href="https://www.youtube.com/@NetNinja">The Net Ninja</a>
                <a href="https://www.youtube.com/@TraversyMedia" target="_blank">Traversy Media</a>
            </p>
        </div>
      </div>
    </div>

    <div class="my-24 bg-yellow-100 py-10 w-full">
      <h2 class="text-xl font-bold">Paid Coding Bootcamp</h2>
      <div class="flex flex-col md:flex-row justify-center items-center mt-10">
        <div>
            <p class="mb-16 p-2 md:mb-0 text-lg w-full md:w-6/12">
        There really is only one option here. If you have the finances to pay for your tuition and are ready to take the leap, then check out <span class="font-bold">Manchester Codes</span> They offer a part-time full stack fully remote bootcamp. They're teaching all the most up to date tech languages including React!
      </p>
        </div>
      <div class="p-2 w-full md:w-6/12">
        <a href="https://www.manchestercodes.com/" target="_blank">
            <span class="bg-blue-500 hover:bg-blue-300 p-4 text-white text-lg font-bold rounded-lg w-full">Visit the site</span>
        </a>
      </div>
      </div>

      <div class="w-full flex flex-col md:flex-row md:space-x-4">

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>