function Input (props) { //agora vai
  return (
    <input
    className="border border-slate-300 outline-slate-400 px-4 py-2"
    {...props} // isso é um spread operator, ele pega todas as propriedades do objeto props e passa para o input
    // entao nao tem a necessidade de passar todas as propriedades do input manualmente
    // nao precisa colocar props.type, props.placeholder, etc
    />
  );
}

export default Input;

// Agora podemos trocar nos inputs do AddTask.jsx para o componente Input que criamos
// basicamente temos um componente classname que recebe as propriedades do input
// nao é necessario colocar classname no input do AddTask.jsx
//detalhe que o input é com letra maiuscula, pois é um componente
// pq normalmente o input é com letra minusculaa