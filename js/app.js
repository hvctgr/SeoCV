

/* Display menu */
console.log('cargo js')

/* Form */
function setForm() {

    let form = document.querySelector('#contact')
    let oContact = {}
    form.addEventListener('submit', enviar)

    function enviar(oEv) {
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value 
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#phone').value
        oContact.message = document.querySelector('#message').value
        oContact.selection = getSelector(document.querySelector('#selection'))
        
        console.log("Formulario enviado!")
        console.log(oContact)
    }

    function getSelector(nodo) {
        let i = nodo.selectedIndex
        if (nodo[i].value == "other"){
            let otherFieldValue = document.querySelector('#other-field').value
            return otherFieldValue
        }else{
            return nodo[i].value
        }
    }
}

function selectionChange() {
    let selectElement = document.querySelector('#selection')
    let otherField = document.querySelector('#other-field')
    selectElement.addEventListener('change', showOtherField)

    function showOtherField() {
        let index = selectElement.selectedIndex
        let fieldValue = selectElement[index].value

        if ( fieldValue == "other"){
            otherField.classList.remove('hidden-field')
        }else
        {
            otherField.classList.add('hidden-field')
        }
    }
}

/* Word counter */
function wordCount() {
    let maxWords = 150
    let wordsInserted
    let textArea = document.querySelector('#message')
    let textMessage = document.querySelector('#message').value
    let textWordLeft = document.querySelector('#wordsLeft')
 
    textArea.addEventListener('keyup', wordInserted)
    textArea.addEventListener('keydown', writeCharacter)

    function wordInserted() {
        wordsInserted = textMessage.trim().split(/\s+/).length
        textMessage = document.querySelector('#message').value
        textWordLeft.innerHTML = maxWords-wordsInserted
    }

    function writeCharacter() {
        if (wordsInserted > maxWords-1) {
            if (event.keyCode == 46 || event.keyCode == 8) {
            } else if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    }
}

/* Scrollspy */
function setScroll() {
    let aMenuItems = document.querySelectorAll("nav.tablet a")
    let aSections = document.querySelectorAll("section")
    let oOffsets = []

    prepareNavigation()
    window.addEventListener('scroll', changeMenuStyle)


    function prepareNavigation() {
        aSections.forEach(
            (item) => oOffsets['#' + item.id] = item.offsetTop
        )
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >= oOffsets['#home'] && pageOffset < oOffsets['#whoiam']) {
            menuItem = 0
        } else if (pageOffset >= oOffsets['#whoiam'] && pageOffset < oOffsets['#studies']) {
            menuItem = 1
        } else if (pageOffset >= oOffsets['#studies'] && pageOffset < oOffsets['#work']) {
            menuItem = 2
        } else if (pageOffset >= oOffsets['#work'] && pageOffset < oOffsets['#about']) {
            menuItem = 3
        } else if (pageOffset >= oOffsets['#about'] && pageOffset < oOffsets['#contact']) {
            menuItem = 4
        } else {
            menuItem = 5
        }

        aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        aMenuItems[menuItem].classList.add('active')
    }
}

/* Show more */
function showMoreWork(){
    let moreWork1 = document.querySelector('.show-more-work1')
    let infoWork1 = document.querySelector('.work-info-work1')

    let moreWork2 = document.querySelector('.show-more-work2')
    let infoWork2 = document.querySelector('.work-info-work2')
    
    let moreWork3 = document.querySelector('.show-more-work3')
    let infoWork3 = document.querySelector('.work-info-work3')
    
    let moreWork4 = document.querySelector('.show-more-work4')
    let infoWork4 = document.querySelector('.work-info-work4')

   
    moreWork1.addEventListener('click', function(){showInformation(moreWork1, infoWork1)})
    moreWork2.addEventListener('click', function(){showInformation(moreWork2, infoWork2)})
    moreWork3.addEventListener('click', function(){showInformation(moreWork3, infoWork3)})
    moreWork4.addEventListener('click', function(){showInformation(moreWork4, infoWork4)})

    function showInformation(moreWork, infoWork){
        console.log(moreWork)
        console.log(infoWork)
        infoWork.classList.toggle('hidden-field')
        moreWork.classList.toggle('fa-chevron-up')
    }
}



