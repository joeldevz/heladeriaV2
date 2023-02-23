import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Copas } from "../../components/Copas.tsx";
import { Footer } from "../../components/Footer.tsx";
import { Nav } from "../../components/Nav.tsx";
import FilterIce from "../../islands/FilterIce.tsx";
import { getIces } from "../../utils/getHelados.ts";
export const handler: Handlers = {
  async GET(req, context) {
    const ices = await getIces();
    return context.render({ ices: ices });
  },
};
export default function Home(props: PageProps) {
  const { data } = props;
  const { ices } = data;
  return (
    <>
      <Head>
      <title>Heladeria Roma</title>
        <link rel="stylesheet" href="/dist/css/main.css" />
        <link rel="stylesheet" href="/dist/css/components.css" />
      </Head>
      <Nav />
      <main class="section-menu-card">
        <div class="" style="text-align: center; margin-bottom:20px">
          <a class="btn" href="#icecream">Helados</a>
          <a class="btn" href="#copas">Copas</a>
          <a class="btn" href="#granizado">Granizado</a>
        </div>
        <h2>Nuestras copas</h2>
        <div class="menu-card bd-grid" id="copas">
          {ices.copas.map((item) => (
            <article class="card  h-full">
              <div
                class="card__img"
                style="width: 80% !important; text-align:center;"
              >
                <img
                  src={item.img}
                  style="width: 90% !important;"
                  alt={item.name}
                />
              </div>
              <div class="card__allergens">
              </div>
              <div class="card__precis">
                <a href="" class="card__icon">
                </a>
                <div class="card__name">
                  <h4>
                    {item.name}
                    <br />
                    {item.price}
                  </h4>
                </div>
                <a href="" class="card__icon">
                </a>
              </div>
            </article>
          ))}
        </div>

        <div>
         
         
         <div class="precios mb-3">
            {ices.precios.map((item) => (
              <div class="contenedor-precios">
                <h3>{item.title}</h3>
                {item.items.map((item) => (
                  <p>
                    {item.name} <span>{item.price}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
          <FilterIce start={ices.ices} />
                <Copas/>
        </div>
        <Footer />
      </main>
    </>
  );
}
