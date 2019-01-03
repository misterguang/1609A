
import TabHtml from "./tab.html"
import "./tab.css"
import TabJs from "./tab.js"

export default (el)=>{
    let $el=document.getElementById(el)
    $el.innerHTML=TabHtml
    TabJs($el)
 
}