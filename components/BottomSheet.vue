<template>
  <client-only>
    <portal to="sheets">
      <vue-bottom-sheet
        v-bind="{ ...options, ...$props, ...$attrs }"
        ref="bottomSheet"
        v-on="{
          ...$on,
          opened: () => $emit('input', true),
          closed: () => $emit('input', false)
        }"
      >
        <slot />
      </vue-bottom-sheet>
    </portal>
  </client-only>
</template>

<script>

const options = {
  "overlay": false,
  "click-to-close": false,
  "max-width": '100vw',
  "max-height": '90%',
  "effect":	'fx-default', // ['fx-default','fx-fadein-scale','fx-slide-from-right','fx-slide-from-left']
  "rounded": false,
  "is-full-screen":	false,
  "swipe-able":	false,
  "overlay-color": '#0000004D',
  "background-scrollable": false,
  "background-clickable": false
};

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options: () => options
  },
  watch: {
    value: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.$refs.bottomSheet.open();
        } else {
          this.$refs.bottomSheet.close();
        }
      }
    }
  },
}
</script>
