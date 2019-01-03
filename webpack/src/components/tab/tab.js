



export default ($el)=>{
    let $li=$el.querySelectorAll("li")
    let $section=$el.querySelectorAll("section")
    
    Array.from($li).forEach((i,index)=>{
        i.onclick=()=>{
            Array.from($section).forEach((j)=>{
                j.style.display="none"
            })
            $section[index].style.display="block"
        }
    })
}

