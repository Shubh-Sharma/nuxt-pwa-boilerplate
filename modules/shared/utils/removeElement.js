export default function removeElement(el) {
  if (typeof el.remove !== 'undefined') el.remove();
  else el.parentNode.removeChild(el);
}
