let tabs = document.querySelectorAll('.tab')


tabs.forEach(tab => {

    //Изменение активности табов и соответствующего контента
    function chengeTab() {
      let tabName = tab.querySelector('.tab__name')  
        tabName.addEventListener('click', function () {
            if (window.innerWidth >= 576) {
                document.querySelector('.tab.active').classList.remove('active')
                tab.classList.add('active')
            } else {
                tab.classList.toggle('active')
            }
        })
    }

    chengeTab()

    //валидация инпута
    const input = tab.querySelector('input')
    const container = tab.querySelector('.card__bottom_features')
    const validationBtn = tab.querySelector('.validation_btn')
    const submitBtn = tab.querySelector('.submit')
    const reversalBtn = tab.querySelector('.white_btn')
    
    
    //регулярка для инпута
    // input.addEventListener('input',()=> {
    //     input.value = input.value.replace(/[^а-я0-9\s()'"%*]/,'');
    // });


    validationBtn.addEventListener('click', function () {
        if(input.value.length != 0){
            let newLi = document.createElement('li');
            newLi.className = 'text newLi'
            newLi.textContent = input.value
            container.append(newLi)
            input.value = ''
            submit()
            reversal()
        } else {
            input.placeholder.textContent = 'Введите значение'
        }
    })

    function submit() {
        submitBtn.addEventListener('click', function() {
            let newLi = tab.querySelectorAll('.text.newLi')
            newLi.forEach(el => {
                el.classList.remove('newLi')
            });
        });
    }

    function reversal() {
        reversalBtn.addEventListener('click', function() {
            let newLi = tab.querySelectorAll('.text.newLi')
            newLi.forEach(el => {
                el.remove()
            });
        });
    }

    

});


