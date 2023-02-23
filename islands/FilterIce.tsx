import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";

interface IcesProps {
  start: Array<{name:string,"allergens": boolean,
  "frutosSecos": boolean,
  "Huevo": boolean,
  "Gluten": boolean,
  "Lacteos": boolean,
  "img": string }>;
}

export default function FilterIce(props:IcesProps) {
  const [filter, setFilter] = useState({
    allergens:false,
    lacteos:false,
    egg:false,
    gluten:false,
    nuts:false
  });
  const [ices, setIces]= useState(props.start)
  useEffect(()=>{
    let newIce = props.start
    if(filter.allergens){
      newIce = newIce.filter((item)=>(item.allergens!=filter.allergens))
    }
    if(filter.lacteos){
      newIce = newIce.filter((item)=>(item.Lacteos!=filter.lacteos))
    }
    if(filter.egg){
      newIce = newIce.filter((item)=>(item.Huevo!=filter.egg))
    }
    if(filter.gluten){
      newIce = newIce.filter((item)=>(item.Gluten!=filter.gluten))
    }
    if(filter.nuts){
      newIce = newIce.filter((item)=>(item.frutosSecos!=filter.nuts))
    }
    setIces(newIce)
    console.log(newIce.length)

  },[filter])
  const checkFilter=(e:JSX.TargetedMouseEvent<HTMLInputElement>)=>{
    const id = e.target?.id as string;
    setFilter({...filter,[id]:!filter[id]})
  }
  return (
    <>
      <div class="search" style="text-align: center;">
        <div>
          <input
            onClick={checkFilter}
            type="checkbox"
            name=""
            id="allergens"
          />
          <label for="allergens">No Alérgenos</label>
        </div>
        <div>
          <input type="checkbox" onClick={checkFilter} name="" id="lacteos" />
          <label for="lacteos">No Lacteos</label>
        </div>
        <div>
          <input type="checkbox" onClick={checkFilter} name="" id="egg" />
          <label for="egg">No Huevos</label>
        </div>
        <div>
          <input type="checkbox" onClick={checkFilter} name="" id="gluten" />
          <label for="gluten">No Gluten</label>
        </div>
        <div>
          <input type="checkbox" onClick={checkFilter} name="" id="nuts" />
          <label for="nuts">No Frutos Secos</label>
        </div>
      </div>
      <h2 class="my-3">Hay <b>{ices.length} helados</b>  según el filtro</h2>
      <div class="menu-card bd-grid" id="icecream">
{ices.map((item) => (
  
  <article class={`card ${item.allergens == true ? "active" : null}`} >
    <div class="card__img">
      <img src={`./dist/img/icecream/${
        item.img
      }.png`} loading="lazy" alt="heladeria roma ${icecreams[i].img}" />
    </div>
    <div class="card__allergens">
      <a href="" class={`"card__icon" ${item.Huevo == true ? "" : "hidden"}`}
      >
        <img
          src="./dist/img/allergens/Egg.svg"
          width="50px"
          loading="lazy"
        />
      </a>
      <a href="" class={`"card__icon" ${
        item.frutosSecos == true ? "" : "hidden"
      }`}>
        <img
          src="./dist/img/allergens/nuts.svg"
          width="50px"
          loading="lazy"
        />
      </a>
      <a href="" class={`"card__icon" ${
        item.Gluten == true ? "" : "hidden"
      }`}>
        <img
          src="./dist/img/allergens/Gluten.svg"
          width="50px"
          loading="lazy"
        />
      </a>
      <a href="" class={`"card__icon" ${
        item.Lacteos == true ? "" : "hidden"
      }`}>
        <img
          src="./dist/img/allergens/Lacteos.svg"
          width="50px"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card__precis">
      <a href="" class="card__icon"
        ></a>
      <div class="card__name">
        <h4>{item.name}</h4>
      </div>
      <a href="" class="card__icon"
        ></a>
    </div>
  </article>
))}
      </div>
    </>
  );
}
