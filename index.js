function shadowizard(options)
{
    let shadow_params = {
        x: "0px",
        y: "0px",
        blur: "10px",
        spread: "0px",
        color: "rgba(0,0,0,.2)",
        inset: false
    };
    let dom = document.querySelectorAll('[m-sw]');

    if(options.shadow_type === "hard")
    {
        shadow_params.blur = "0px";
    }

    dom.forEach(el => {
        el.style.boxShadow = `${shadow_params.inset ? 'inset' : ''} ${shadow_params.x} ${shadow_params.y} ${shadow_params.blur}  ${shadow_params.spread}  ${shadow_params.color}`;
    });
}

module.exports.shadowizard = shadowizard;