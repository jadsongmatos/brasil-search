const fs = require("fs");

const start = `
<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CEPs - Brasil Search</title>
  <meta name="description" content="Brasil Search" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
  <main class="container pt-5 mt-5">
    <section class="row">
      <ol class="list-group list-group-numbered">
`

const end = `
</ol>
    </section>
  </main>
  <footer>
    <a href="https://github.com/Slender1808/brasil-search">
      https://github.com/Slender1808/brasil-search
    </a>
  </footer>
  <script src="https://polyfill.io/v3/polyfill.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
</body>

</html>
`

var data = start
var cep = "00000000";

for (let index = 1; index <= 99999999; index++) {
  cep = ("00000000" + (index-1)).slice(-8);
  data = data + `
<li className="list-group-item">
  <a href="/cep/${cep}">
    cep:${cep}
  </a>
</li>
`;

  if(index % 100000 == 0){
    console.log(index, cep);
    data = data + end
    fs.writeFileSync(`${Math.floor((index-1)/100000)}.html`, data);
    data = start;
  }
}