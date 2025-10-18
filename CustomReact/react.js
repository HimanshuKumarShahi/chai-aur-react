function customRender(Reactelement,container){
    // const Domelement=document.createElement(Reactelement.type)
    // Domelement.innerHTML=Reactelement.Children
    // Domelement.setAttribute('href', Reactelement.props.href)
    // Domelement.setAttribute('target',Reactelement.props.target)
    // container.appendChild(Domelement)


    const Domelement=document.createElement(Reactelement.type);
    Domelement.innerHTML=Reactelement.Children;

    for (const prop in Reactelement.props) {
       if(prop === 'Children') continue;
        Domelement.setAttribute(prop,Reactelement.props[prop])
    }
    container.appendChild(Domelement)
}

const Reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}

const maincontainer=document.querySelector('#root')
customRender(Reactelement,maincontainer)