const estudiante = {
    curso : "Programacion",
    nombre : "lili",
    nota : "30",
    nombre2 : "cleo",
    nota2 : "40",
    nombre3 : "pedro",
    nota3 : "33",
    nombre4 :"Karla",
    nota4 : "21"
}

console.log(estudiante);


let {nombre, nota, curso, nombre2, nota2 ,nombre3, nota3,nombre4, nota4} = estudiante;
console.log(`Nombre: ${nombre} Nota = ${nota} curso = ${curso} Nombre ${nombre2} 
Nota ${nota2}  Nombre ${nombre3} Nota ${nota3}  Nombre ${nombre4} Nota ${nota4}`);

let contenedor = document.querySelector("#principal");

let html = `<ul>
<li>Curso: ${curso}</li>
<li>Nombre: ${nombre}</li>
<li>Nota: ${nota}</li>
<li>Nombre: ${nombre2}</li>
<li>Nota: ${nota2}</li>
<li>Nombre: ${nombre3}</li>
<li>Nota: ${nota3}</li>
<li>Nombre: ${nombre4}</li>
<li>Nota: ${nota4}</li>`;

contenedor.innerHTML = html;