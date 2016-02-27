// Add iceland divs for flag
var flagHTML  =  '<div id="stretch-bg">'
    flagHTML +=  '  <div class="horizontal outer">'
    flagHTML +=  '  </div>'
    flagHTML +=  '  <div class="horizontal inner"></div>'
    flagHTML +=  '  <div class="vertical outer">'
    flagHTML +=  '  </div>'
    flagHTML +=  '  <div class="vertical inner"></div>'
    flagHTML +=  '</div>'

window.onload = function(){
  var container_el = document.querySelector('#work-container')
  console.log(container_el)
  container_el.outerHTML = flagHTML + container_el.outerHTML
}