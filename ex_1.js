const parser = new DOMParser();

const xmlElement = `
<list>
 <student>
   <name lang="en">
     <first>Ivan</first>
     <second>Ivanov</second>
   </name>
   <age>35</age>
   <prof>teacher</prof>
 </student>
 <student>
   <name lang="ru">
     <first>Петр</first>
     <second>Петров</second>
   </name>
   <age>58</age>
   <prof>driver</prof>
 </student>
</list>
 `;

const xmlDOM = parser.parseFromString(xmlElement, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");

   const firstNode = nameNode.querySelector("first");
   const second = nameNode.querySelector("second");

const ageNode = studentNode.querySelector("age");
const profiNode = studentNode.querySelector("prof");

const langStudent = nameNode.getAttribute('lang');

const result = {
 list: [ 
{ 
 name: nameNode.textContent,
 age: Number(ageNode.textContent),
 prof: profiNode.textContent,
 lang: langStudent.textContent,
},
{ 
 name: nameNode.textContent,
 age: Number(ageNode.textContent),
 prof: profiNode.textContent,
 lang: langStudent.textContent,
}
]};

console.log(result);
