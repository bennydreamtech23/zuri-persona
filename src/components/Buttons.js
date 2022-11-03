
const Buttons = ({href,text,id,target, tabindex,title}) =>{
  return(
  <div>
    <a className ="btn1" href={href} role="button" id={id} target=
    {target} tabindex={tabindex} title={title}>
    <span>{text}</span>
    </a>
    </div>
    )
}
export default Buttons