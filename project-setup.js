// Add iceland divs for flag
var flagHTML  =  '<div id="stretch-bg">'
    flagHTML +=  '  <div class="horizontal outer">'
    flagHTML +=  '  </div>'
    flagHTML +=  '  <div class="horizontal inner"></div>'
    flagHTML +=  '  <div class="vertical outer">'
    flagHTML +=  '  </div>'
    flagHTML +=  '  <div class="vertical inner"></div>'
    flagHTML +=  '</div>'



function putQOnDOM(qOb){
   var domEl = document.querySelector('#' + qOb.id)
   domEl.innerHTML = qOb.htmlStr + domEl.innerHTML
} 


allQuestions = []

// QUESTION - BIKES COUNT
var qObj = {}
    qObj.id      = "bikes-count"
    qObj.htmlStr =    "<span>1</span>"
    qObj.htmlStr +=   "<h2>"
    qObj.htmlStr +=       "How many bikes have been rented <u>year-to-date</u> with Iceland's city "
    qObj.htmlStr +=       "bicycles program (tracked by <b>Bicyclecounter</b>)?"
    qObj.htmlStr +=   "</h2>"

allQuestions.push(qObj)

// QUESTION - TOTAL PATIENTS
var qObj = {}
    qObj.id      = "total-patients"
    qObj.htmlStr = "</h2>"
    qObj.htmlStr += '<span>2</span>'
    qObj.htmlStr += '<h2>How many <u>total patients</u> are in Iceland`s national '
    qObj.htmlStr += '<b>hospital</b> at the moment?'
    qObj.htmlStr += '</h2>'

allQuestions.push(qObj)


// QUESTION - ARRIVING FLIGHTS LIST
var qObj = {}
    qObj.id = "london-flights"
    qObj.htmlStr ='<span>3</span>'
    qObj.htmlStr += '<h2>Create a html-list of <b>flights</b> '
    qObj.htmlStr += 'that are <u>scheduled to arrive</u> from London after 6:00pm</h2>'
    qObj.htmlStr += '<p><strong>Note: create list with <code> &lt;li&gt; </code>'
    qObj.htmlStr += 'tags as formatted below</strong></p>'

allQuestions.push(qObj)


// QUESTION - CARPOOL DESTINATIONS LIST
var qObj = {}
    qObj.id = "carpool-passenger-requests"
    qObj.htmlStr ='<span>4</span>'
    qObj.htmlStr +='<h2>'
    qObj.htmlStr +='  Create a html-list that shows all of the carpool '
    qObj.htmlStr +='  destinations and counts the total <b>carpool passenger-requests</b> to each destination'
    qObj.htmlStr +='</h2>'
    qObj.htmlStr +='<p><strong>Note: create list with <code> &lt;li&gt; </code>tags as formatted below</strong></p>'

allQuestions.push(qObj)

// QUESTION - CARPOOL DESTINATIONS LIST
var qObj = {}
    qObj.id = "lottery-prizes"    
    qObj.htmlStr = '<span>5</span>'
    qObj.htmlStr += '<h2>What is the <u>total value</u> of prizes in the Icelandic <b>lottery</b>?</h2>'
    qObj.htmlStr += '<p>'
    qObj.htmlStr += '  <strong><u>Year-to-date total</u> in Iceland Krona (kr)</strong><br/>'
    qObj.htmlStr += '   <small><em><strong>Note:</strong> '
    qObj.htmlStr += '      In Europe, large numbers are separated '
    qObj.htmlStr += '      by periods rather than commas</em>'
    qObj.htmlStr += '  </small>'
    qObj.htmlStr += '</p>'

allQuestions.push(qObj)

var container_el = document.querySelector('#work-container')
container_el.outerHTML = flagHTML + container_el.outerHTML
allQuestions.forEach(function(q){
  putQOnDOM(q)
})