
const sylediv=document.getElementById("btn9");
sylediv.addEventListener("click", getCSS);



function getCSS() {

    const element=document.getElementById("displayStyle");
    let css_data = '';
    let css_obj = getComputedStyle(element);

    for (let i = 0; i < css_obj.length; i++) {
        css_data +=
            css_obj[i] + ':' +
            css_obj.getPropertyValue(css_obj[i])
            + ';<br>';
    }
   
    document.getElementById('demo2').innerHTML = css_data;
    return;
}