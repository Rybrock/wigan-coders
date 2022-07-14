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
    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
    You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support</template>
    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>
