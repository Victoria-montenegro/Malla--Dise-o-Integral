const materias = [
  // PRIMER AÑO
  {id:"comp1", n:"Composición I", a:1, s:"I", r:[]},
  {id:"plas1", n:"Plástica I", a:1, s:"I", r:[]},
  {id:"teo1", n:"Teoría e His. del Arte y Arq. I", a:1, s:"I", r:[]},
  {id:"mat1", n:"Materiales Aplicados I", a:1, s:"I", r:[]},
  {id:"terr1", n:"Teoría del Territorio I", a:1, s:"I", r:[]},
  {id:"calc", n:"Cálculo", a:1, s:"I", r:[]},
  {id:"rep", n:"Sistema de Representación", a:1, s:"I", r:[]},

  {id:"comp2", n:"Composición II", a:1, s:"II", r:["comp1"]},
  {id:"plas2", n:"Plástica II", a:1, s:"II", r:["plas1"]},
  {id:"teo2", n:"Teoría e His. del Arte y Arq. II", a:1, s:"II", r:["teo1"]},
  {id:"mat2", n:"Materiales Aplicados II", a:1, s:"II", r:["mat1"]},
  {id:"terr2", n:"Teoría del Territorio II", a:1, s:"II", r:["terr1"]},
  {id:"fis", n:"Física Técnica", a:1, s:"II", r:[]},
  {id:"estr", n:"Estrategia del Aprendizaje", a:1, s:"II", r:[]},

  // SEGUNDO AÑO
  {id:"obj1", n:"Diseño de los Objetos I", a:2, s:"III", r:["comp2","plas2"]},
  {id:"plas3", n:"Plástica III", a:2, s:"III", r:["comp2","plas2"]},
  {id:"teo3", n:"Teoría e Hist. del Diseño III", a:2, s:"III", r:["teo2"]},
  {id:"mat3", n:"Materiales Aplicados al Diseño III", a:2, s:"III", r:["mat2"]},
  {id:"ant", n:"Antrop. Diseño", a:2, s:"III", r:["teo2"]},
  {id:"ergo1", n:"Ergonomía I", a:2, s:"III", r:["comp2"]},
  {id:"erg1", n:"Ergonometría I", a:2, s:"III", r:["comp2"]},

  {id:"obj2", n:"Diseño de los Objetos II", a:2, s:"IV", r:["obj1"]},
  {id:"plas4", n:"Plástica IV", a:2, s:"IV", r:["plas3"]},
  {id:"teo4", n:"Teoría e Hist. del Diseño IV", a:2, s:"IV", r:["teo3"]},
  {id:"mat4", n:"Materiales Aplicados al Diseño IV", a:2, s:"IV", r:["mat3"]},
  {id:"amb", n:"Medio Ambiente", a:2, s:"IV", r:["terr2"]},
  {id:"tec", n:"Tecnología de la Comunicación", a:2, s:"IV", r:["estr"]},
  {id:"geo", n:"Geometría Descriptiva", a:2, s:"IV", r:["rep"]},

  // TERCER AÑO
  {id:"obj3", n:"Diseño de los Objetos III", a:3, s:"V", r:["obj2"]},
  {id:"amb1", n:"Diseño Ambiental I", a:3, s:"V", r:["plas4","amb"]},
  {id:"graf1", n:"Diseño Gráfico I", a:3, s:"V", r:["obj2"]},
  {id:"ind1", n:"Diseño Industrial I", a:3, s:"V", r:["obj2"]},
  {id:"teo5", n:"Teoría e Hist. del Diseño V", a:3, s:"V", r:["teo4"]},
  {id:"sem", n:"Semiótica I", a:3, s:"V", r:["obj2"]},

  {id:"obj4", n:"Diseño de los Objetos IV", a:3, s:"VI", r:["obj3"]},
  {id:"amb2", n:"Diseño Ambiental II", a:3, s:"VI", r:["amb1"]},
  {id:"graf2", n:"Diseño Gráfico II", a:3, s:"VI", r:["graf1"]},
  {id:"ind2", n:"Diseño Industrial II", a:3, s:"VI", r:["ind1"]},
  {id:"teo6", n:"Teoría e Hist. del Diseño VI", a:3, s:"VI", r:["teo5"]},
  {id:"est", n:"Estética I", a:3, s:"VI", r:["amb"]},
  {id:"erg2", n:"Ergonometría II", a:3, s:"VI", r:["erg1"]},

  // CUARTO AÑO
  {id:"obj5", n:"Diseño de los Objetos V", a:4, s:"VII", r:["obj4"]},
  {id:"esc1", n:"Diseño Escenográfico I", a:4, s:"VII", r:["amb2"]},
  {id:"pub1", n:"Diseño Publicitario I", a:4, s:"VII", r:["graf2"]},
  {id:"top", n:"Diseño Topográfico I", a:4, s:"VII", r:["graf2"]},
  {id:"teo7", n:"Teoría e Hist. del Diseño VII", a:4, s:"VII", r:["teo6"]},
  {id:"eco", n:"Economía Industrial", a:4, s:"VII", r:[]},

  {id:"obj6", n:"Diseño de los Objetos VI", a:4, s:"VIII", r:["obj5"]},
  {id:"esc2", n:"Diseño Escenográfico II", a:4, s:"VIII", r:["esc1"]},
  {id:"pub2", n:"Diseño Publicitario II", a:4, s:"VIII", r:["pub1"]},
  {id:"med", n:"Medios Audiovisuales", a:4, s:"VIII", r:[]},
  {id:"teo8", n:"Teoría e Hist. del Diseño VIII", a:4, s:"VIII", r:["teo7"]},
  {id:"proc", n:"Proceso de Producción", a:4, s:"VIII", r:["eco"]},
  {id:"cond", n:"Conducta del Consumidor", a:4, s:"VIII", r:[]},

  // QUINTO AÑO
  {id:"pg1", n:"Proyecto de Grado I", a:5, s:"IX", r:["obj6","esc2","pub2","med","teo8","proc","cond"]},
  {id:"eti", n:"Ética", a:5, s:"IX", r:[]},
  {id:"gest", n:"Gestión Empresarial", a:5, s:"IX", r:[]},
  {id:"leg", n:"Legislación y Normas", a:5, s:"IX", r:[]},
  {id:"mar", n:"Mercadeo", a:5, s:"IX", r:["proc"]},
  {id:"prac", n:"Práctica Pre profesional", a:5, s:"IX", r:["obj6","esc2","pub2"]},

  {id:"pg2", n:"Proyecto de Grado II", a:5, s:"X", r:["pg1"]}
];

const estado = JSON.parse(localStorage.getItem("estadoDI")) || {};

function render(){
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for(let a=1;a<=5;a++){
    const col = document.createElement("div");
    col.className="anio";
    col.innerHTML=`<h2>${a}° Año</h2>`;

    ["I","II","III","IV","V","VI","VII","VIII","IX","X"].forEach(s=>{
      const lista = materias.filter(m=>m.a===a && m.s===s);
      if(!lista.length) return;

      const sem = document.createElement("div");
      sem.className="semestre";
      sem.innerHTML=`<h3>${s} Semestre</h3>`;

      lista.forEach(m=>{
        const div=document.createElement("div");
        div.className="materia";
        div.textContent=m.n;

        const faltan=m.r.filter(r=>!estado[r]);
        if(faltan.length){
          div.classList.add("bloqueada");
          div.dataset.tooltip="Falta aprobar: "+faltan.join(", ");
        }

        if(estado[m.id]) div.classList.add("aprobada");

        div.onclick=()=>{
          if(faltan.length) return;
          estado[m.id]=!estado[m.id];
          localStorage.setItem("estadoDI",JSON.stringify(estado));
          render();
        };

        sem.appendChild(div);
      });

      col.appendChild(sem);
    });

    malla.appendChild(col);
  }
}

render();
