export default function PlusMinusModule() {
    const minusBtns = document.querySelectorAll('.count-minus')
    const plusBtns = document.querySelectorAll('.count-plus')
    const numerMain = document.querySelectorAll('.count-number')
    if (numerMain) {
        numerMain.forEach(item => {
            const input = item.parentElement.querySelector('.count-input')
            item.innerHTML = `${input.value < 10 && input.value > 0 ? '0' : ' '}` + input.value
        })
    }
    if (minusBtns) {
        minusBtns.forEach(item => {
            item.addEventListener('click', () => {
                const number = item.parentElement.querySelector('.count-number')
                const input = item.parentElement.querySelector('.count-input')

                if (parseInt(input.value) > parseInt(input.min)) {
                    input.value--
                        number.innerHTML = `${input.value < 10 && input.value > 0 ? '0' : ' '}` + input.value
                }

            })
        })
    }
    if (plusBtns) {
        plusBtns.forEach(item => {
            item.addEventListener('click', () => {
                const number = item.parentElement.querySelector('.count-number')
                const input = item.parentElement.querySelector('.count-input')

                if (parseInt(input.value) < parseInt(input.max)) {
                    input.value++
                        number.innerHTML = `${input.value < 10 && input.value > 0 ? '0' : ' '}` + input.value
                }

            })
        })
    }
}