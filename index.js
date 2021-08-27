function shadowizard({
    x= "5px",
    y= "5px",
    blur= "10px",
    spread= "0px",
    color= "rgba(0,0,0,.2)",
    inset= false,

    shadow_type=null
} = {})
{
    let dom = document.querySelectorAll('[m-sw]');

    if(options.shadow_type === "hard")
        blur = "0px";

    dom.forEach(el => {
        el.style.boxShadow = `${inset ? 'inset' : ''} ${x} ${y} ${blur}  ${spread}  ${color}`;
    });
}

module.exports.shadowizard = shadowizard;