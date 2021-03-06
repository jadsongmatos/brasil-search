import Header from "../../../components/Header";
import Link from "next/link";

export async function getStaticPaths(){
  //const ranges = [...Array(10000)];
  const ranges = [...Array(200)];

  return {
    paths: ranges.map((e,i)=> {
      return {
        params:{
          range: String(i)
        }
      }
    }),
    fallback:false
  }
}

export async function getStaticProps(context) {
  //let data = [...Array(10001)];
  let data = [...Array(50)];

  let index = parseInt(
    (("0000" + parseInt(context.params.range)).slice(-4) + "00000000").slice(
      0,
      8
    )
  );

  data = data.map(() => {
    index++;
    return ("00000000" + (index - 1)).slice(-8);
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Indice(props) {
  return (
    <div>
      <Header />

      <main className="container pt-5 mt-5">
        <section className="row">
          <ol className="list-group list-group-numbered">
            {props.data.map((e, i) => {
              return (
                <li key={i} className="list-group-item">
                  <Link href={"/cep/" + e}>
                    <a>cep:{e}</a>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>

      <footer>
        <Link href="https://github.com/Slender1808/brasil-search">
          https://github.com/Slender1808/brasil-search
        </Link>
      </footer>
    </div>
  );
}
