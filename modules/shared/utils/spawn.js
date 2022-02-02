export default function spawn(id, propsData, Component, Vue, options) {
  if (propsData) {
    if (options) {
      if (options.defaults) {
        propsData.defaults = options.defaults;
      }
      if (options.defaultProps) {
        propsData = { ...options.defaultProps, ...propsData };
      }
    }
  }
  const Instance = Vue.extend(Component);
  return new Instance({
    el: document.getElementById(id).appendChild(document.createElement('div')),
    propsData,
  });
}
