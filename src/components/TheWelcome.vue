<script setup>
import WelcomeItem from './WelcomeItem.vue'
import QuestionIcon from './icons/QuestionIcon.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <QuestionIcon />
    </template>
    <template #heading>Why learn how to code?</template>
    <p>Learning how to code can be very rewarding in many different ways. Flexible hours and remote working to name but a few.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Digital Tooling and Skills</template>
    <p>Who doesn't want to learn a new skill? Maybe a new language?</p>
    <p>At Wigan Coders, we can provide with the digital tools and coding environment you need to get started.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    Got stuck? Ask your question on Slack or many other digital tools we use to communicate. Once you've been to see us a couple of times, we will add you to our growing community where you can ask any questions you like, anytime of the day.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support</template>
    Here at Wigan Coders we are 2 professional developers working in the industry. We have first hand experience and knowledge to help guide and advise you. From improving your coding skills to improving your interviewing experience, we are here to help.
  </WelcomeItem>
</template>
