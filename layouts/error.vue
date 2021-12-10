<template>
  <div class="w-full h-full grid place-center">
    <h1>
      {{ error.statusCode }}
    </h1>
    <p>
      {{ error.message }}
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style>

</style>
