<script>
export default {
  functional: true,
  render(createElement, ctx) {
    return [
      createElement('nuxt', ctx.data, ctx.children),
      createElement('portal-target', {
        props: { name: 'sheets', }
      }, ctx.children),
      createElement('portal-target', {
        props: { name: 'dialogs', }
      }, ctx.children),
    ];
  }
}
</script>

<style>

</style>
