<template>
  <div>

<vue-cookie-accept-decline
  :debug="false"
  :disableDecline="false"
  :showPostponeButton="false"
  @clicked-accept="cookieClickedAccept"
  @clicked-decline="cookieClickedDecline"
  @clicked-postpone="cookieClickedPostpone"
  @removed-cookie="cookieRemovedCookie"
  @status="cookieStatus"
  elementId="myPanel1"
  position="bottom-left"
  ref="myPanel1"
  transitionName="slideFromBottom"
  type="floating"
>

</vue-cookie-accept-decline>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>