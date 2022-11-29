<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      w-full
      lg:mb-8
      bg-stone-50
      pb-8
    "
  >
    <div class="text-center mt-10">
      <h1 class="text-3xl font-bold mb-10">Contact Us </h1>
      <p class="w-full lg:w-8/12 mx-auto text-center text-lg mb-16 mt-4">
        There are many way's you can get in touch. Contact us on social media or
        send us an email. Whatever your preference we hope to respond within
        24hrs.
      </p>
    </div>
    <div
      class="
        flex flex-col
        justify-center
        w-full
        md:flex-row md:space-x-24
        space-y-10
        md:space-y-0
        p-3
        md:p-0
      "
    >
      <div
        v-if="!success"
        class="flex flex-col justify-center w-full lg:w-4/12"
      >
        <h2 class="text-left text-xl font-bold mb-4 px-2 md:px-0">
          Have an enquiry?
        </h2>
        <!-- loading spinner -->
        <div v-if="loading">
          <atom-spinner
            :animation-duration="1000"
            :size="60"
            :color="'#ff1d5e'"
          />
        </div>
        <form
          ref="enquiryForm"
          @submit.prevent="formSubmit()"
          class="
            p-8
            flex flex-col
            justify-center
            text-left
            bg-stone-200
            rounded-lg
            shadow-lg
          "
        >
          <!-- loading spinner ends -->
          <!-- first name -->
          <div class="flex">
            <label
              class="flex flex-col text-gray-500 py-1 font-bold text-sm"
              for="first-name"
              >First Name: </label
            ><span class="text-red-600 mt-1 ml-2">*</span>
          </div>
          <input
            class="p-3 text-sm rounded-lg text-gray-900"
            type="text"
            name="first-name"
            v-model="firstName"
            placeholder="please enter you first name"
            required
          />
          <!-- last name -->
          <div class="flex">
            <label
            class="flex flex-col text-gray-500 py-1 font-bold text-sm"
            for="last-name"
            >Last Name:
          </label>
          <span class="text-red-600 mt-1 ml-2">*</span>
          </div>
          <input
            class="p-3 text-sm rounded-lg text-gray-900"
            type="text"
            name="last-name"
            v-model="lastName"
            placeholder="please enter you last name"
            required
          />
          <!-- email -->
          <div class="flex">
            <label
            class="flex flex-col text-gray-500 py-1 font-bold text-sm"
            for="email"
            >Email:
          </label>
          <span class="text-red-600 mt-1 ml-2">*</span>
          </div>
          <input
            class="p-3 text-sm rounded-lg text-gray-900"
            type="email"
            name="email"
            v-model="email"
            placeholder="please enter you email"
            required
          />
          <!-- phone number -->
          <div class="flex">
            <label
            class="flex flex-col text-gray-500 py-1 font-bold text-sm"
            for="phone"
            >Phone Number:
          </label>
          </div>
          <input
            class="p-3 text-sm rounded-lg text-gray-900"
            type="text"
            name="phone"
            v-model="phoneNumber"
            placeholder="please enter you phone number"
          />
          <!-- message -->
          <div class="flex">
            <label
            class="flex flex-col text-gray-500 py-1 font-bold text-sm"
            for="message"
            >Your Message:
          </label>
          <span class="text-red-600 mt-1 ml-2">*</span>
          </div>

          <textarea
            class="rounded-lg text-gray-900 p-2"
            name="message"
            id="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="your message"
          ></textarea>

          <div class="flex flex-col justify-center items-center mt-5 w-full">
            <button
              class="
                btn
                p-4
                text-center text-stone-600
                bg-white
                hover:bg-blue-300 hover:text-blue-900
                border-blue-900
                rounded-xl
                font-bold
                w-full
                lg:w-6/12
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <!-- success message -->
      <div class="flex flex-col justify-center w-full lg:w-4/12" v-if="success">
        <p class="font-bold text-2xl">Enquiry submitted!</p>
        <img
          src="../assets/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
          class="mx-auto"
          width="150"
          height="150"
          alt=""
        />
        <p class="font-bold text-2xl">Thank you!</p>
      </div>
      <div class="w-full flex flex-col justify-center items-center lg:w-6/12">
        <h2 class="text-center font-bold mb-4 px-2 md:px-0 text-xl md:mt-8">Prefer to call?</h2>
        <div class="flex items-center justify-center lg:space-x-4">
          <div>
            <img
              src="../assets//phone_in_talk_FILL0_wght400_GRAD0_opsz48.svg"
              width="50"
              height="50"
              alt="icon of a phone to indicate a call can be made"
            />
          </div>
          <div>
            <img src="../assets/whatsapp.png" width="50" height="50" alt="WhatsApp Messenger logo" />
          </div>
        </div>
        <p class="font-bold text-xl my-2">07539294710</p>
        <p class="my-2 text0-lg">
          Give us a call on the above number and we'd be delighted to answer any
          of your questions.
        </p>
        <p class="font-bold text-xl my-2">+447539294710</p>
        <p class="my-2 text-lg">
          Alternatively you can send us a message on WhatsApp. Please ensure to
          include your name and reason for messaging.
        </p>
        <div class="mt-6">
          <h2 class="text-center font-bold mb-4 text-xl">
            Or come on down to our next event and meet the team
          </h2>
          <div class="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9482.742113990602!2d-2.6303!3d53.545529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37fbc44593c758a9!2sWigan%20Library!5e0!3m2!1sen!2suk!4v1669138271335!5m2!1sen!2suk"
              class="w-full"
              width="600"
              height="350"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full justify-center items-center p-2 mb-24 md:p-0">
    <p class="font-bold text-sm w-full lg:w-8/12">We are a none for profit organization with the view to helping people understand what coding is and how they go about beginning to learn. We offer free impartial advice and have a HTML, CSS and JAVASCRIPT curriculum coming soon!</p>
    <p class="flex font-bold w-full justify-center p-2 md:p-0 mt-4">*** +16 years and above</p>
</div>
</template>

<script>
import db from "../../.firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AtomSpinner } from "epic-spinners";

export default {
  components: {
    AtomSpinner,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      saving: false,
      loading: false,
      success: false,
    };
  },
  methods: {
    async formSubmit() {
      try {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "userEmail"), {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          message: this.message,
        });
        this.$refs.enquiryForm.reset();
        this.success = true;
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.trinity-rings-spinner,
.trinity-rings-spinner * {
  box-sizing: border-box;
}

.trinity-rings-spinner {
  height: 66px;
  width: 66px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
}

.trinity-rings-spinner .circle {
  position: absolute;
  display: block;
  border-radius: 50%;
  border: 3px solid #ff1d5e;
  opacity: 1;
}

.trinity-rings-spinner .circle:nth-child(1) {
  height: 60px;
  width: 60px;
  animation: trinity-rings-spinner-circle1-animation 1.5s infinite linear;
  border-width: 3px;
}

.trinity-rings-spinner .circle:nth-child(2) {
  height: calc(60px * 0.65);
  width: calc(60px * 0.65);
  animation: trinity-rings-spinner-circle2-animation 1.5s infinite linear;
  border-width: 2px;
}

.trinity-rings-spinner .circle:nth-child(3) {
  height: calc(60px * 0.1);
  width: calc(60px * 0.1);
  animation: trinity-rings-spinner-circle3-animation 1.5s infinite linear;
  border-width: 1px;
}

@keyframes trinity-rings-spinner-circle1-animation {
  0% {
    transform: rotateZ(20deg) rotateY(0deg);
  }

  100% {
    transform: rotateZ(100deg) rotateY(360deg);
  }
}

@keyframes trinity-rings-spinner-circle2-animation {
  0% {
    transform: rotateZ(100deg) rotateX(0deg);
  }

  100% {
    transform: rotateZ(0deg) rotateX(360deg);
  }
}

@keyframes trinity-rings-spinner-circle3-animation {
  0% {
    transform: rotateZ(100deg) rotateX(-360deg);
  }

  100% {
    transform: rotateZ(-360deg) rotateX(360deg);
  }
}
</style>