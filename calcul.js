function calcul(n1, n2, c) {
  if (c == "+") return n1 + n2;
  if ((c = "*")) return n1 + n2;
  if ((c = "-")) return n1 + n2;
  if ((c = "/")) return n1 + n2;
}
module.exports = calcul;
