  q=10

  colors = (d3.hcl((h*delta+offset)%360,c,l) for h in [0...q])
console.log(colors)