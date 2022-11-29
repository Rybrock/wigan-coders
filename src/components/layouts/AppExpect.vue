<template>
  <div class="my-24 p-4 md:p-0">
    <div class="mb-5">
      <h2 class="text-4xl font-bold">Sound good?</h2>
      <p>Great, all you need is a laptop and heaps of enthusiasm!</p>
    </div>
    <div class="flex flex-col items-center md:flex-row justify-center w-full">
      <div class="w-full md:w-8/12">
        <div class="flex justify-center items-center flex-col w-full">
          <div
            class="
              flex flex-col
              items-center
              md:flex-row
              justify-center
              mt-12
              w-full
              md:space-x-12
              space-y-4
              nd:space-y-0
              md:w-8/12
            "
          >
            <img
              src="../../assets/visual-studio-code-icon.png"
              width="70"
              height="40"
              alt=""
            />
            <p class="w-full">
              Preferably have VS Code installed on your laptop. This is a Text
              Editor, or IDE, and we use this to write our code. You can install
              it
              <a
                href="https://code.visualstudio.com/"
                class="font-bold"
                target="_blank"
                >here</a
              >
            </p>
          </div>
          <div
            class="
              flex flex-col
              items-center
              md:flex-row
              justify-center
              mt-12
              w-full
              md:space-x-12
              space-y-4
              nd:space-y-0
              md:w-8/12
            "
          >
            <img src="../../assets/github.webp" width="70" height="30" alt="" />
            <p class="w-full">
              An account with GitHub. We can however do this on the day. We use
              GitHub to store our code and more. You can signup
              <a href="https://github.com/" class="font-bold" target="_blank"
                >here</a
              >
            </p>
          </div>
          <div
            class="
              flex flex-col
              items-center
              md:flex-row
              justify-center
              mt-12
              w-full
              md:space-x-12
              space-y-4
              nd:space-y-0
              md:w-8/12
            "
          >
            <img
              src="../../assets/285695_terminal_icon.webp"
              width="70"
              height="30"
              alt=""
            />
            <p class="w-full">
              For Mac users the Terminal app will already be installed. For
              Windows we use Git Bash. You'll find the link to install
              <a
                href="https://git-scm.com/downloads"
                class="font-bold"
                target="_blank"
                >here</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 bg-gray-200 w-full p-6">
          <p class="text-2xl">
            register your interest with us
            <router-link to="/contact" class="font-bold">here</router-link>
          </p>
        </div>
  </div>
  <div
    class="flex flex-col w-full justify-center items-center p-2 mb-24 md:p-0"
  >
    <p class="font-bold text-sm w-full lg:w-8/12">
      We are a none for profit organization with the view to helping people
      understand what coding is and how they go about beginning to learn. We
      offer free impartial advice and have a HTML, CSS and JAVASCRIPT curriculum
      coming soon!
    </p>
    <p class="flex font-bold w-full justify-center p-2 md:p-0 mt-4">
      *** +16 years and above
    </p>
  </div>
</template>

<script>
export default {};
</script>7

<style>
</style>