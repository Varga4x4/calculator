const DIVIDE_BUTTON_ID = 'button-divide'
const EQUAL_BUTTON_ID = 'button-equal'

const main = () => {
    console.log("main")

    let number1 = undefined
    let number2 = undefined
    let currInput = ""
    let operation = undefined

    const handleDisplayValue = (param1) => {
        const display = document.getElementById("display")
        display.innerText = param1
        console.log(display)
    }

    const handleNumberButtonOnClick = (param1) => {
        console.log("handleNumberButtonOnClick")

        const buttonValue = param1.target.innerText
        console.log('buttonValue', buttonValue)

        const len = currInput.length
        console.log("len", len)

        if (len < 10) {
            currInput += buttonValue

            handleDisplayValue(currInput)
            
            const shouldDivideButtonBeDisabled = number1 !== undefined
            toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, shouldDivideButtonBeDisabled)
            
            const alfa = number1 === undefined
            const beta = !currInput.length
            const shouldEqualButtonBeDisabled = alfa || beta
            toggleButtonDisabledProperty(EQUAL_BUTTON_ID, shouldEqualButtonBeDisabled)
            console.log("shouldEqualButtonBeDisabled", shouldEqualButtonBeDisabled)
            console.log("alfa", alfa, "beta", beta)


        }
        console.log('currInput', currInput)
    }

    const handleResetButtonOnClick = () => {
        console.log("handleResetButtonOnClick")

        currInput = ""
        number1 = undefined
        number2 = undefined
        operation = undefined
        console.log("currInput", currInput)

        handleDisplayValue(currInput)
        toggleButtonDisabledProperty(EQUAL_BUTTON_ID, true)
        toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, true)
    }

    const handleEqualButtonOnClick = () => {
        console.log("handleEqualButtonOnClick")
        
        number2 = parseInt(currInput)
        currInput = ""

        let result = 0
        switch (operation) {
            case "/":
                console.log(number1, number2)
                result = number1 / number2
                break;
        }

        currInput = result.toString()
        handleDisplayValue(result)
        toggleButtonDisabledProperty(EQUAL_BUTTON_ID, true)
        toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, false)
    }

    const handleOperationButtonOnClick = (event) => {
        console.log("handleOperationButtonOnClick", event.target.innerText)

        number1 = parseFloat(currInput)
        currInput = ""
        console.log(number1, currInput)
        toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, true)
        handleDisplayValue(currInput)

        operation = event.target.innerText
    }

    const toggleButtonDisabledProperty = (elementId, requiredValue) => {
        console.log("toggleButtonDisabledProperty")

        const buttonElement = document.getElementById(elementId)

        let newValue = !buttonElement.disabled
        if (requiredValue !== undefined) {
            newValue = requiredValue
        }
        buttonElement.disabled = newValue

    }

    const button7 = document.getElementById('button-7')
    button7.onclick = handleNumberButtonOnClick

    const button8 = document.getElementById('button-8')
    button8.onclick = handleNumberButtonOnClick

    const button9 = document.getElementById('button-9')
    button9.onclick = handleNumberButtonOnClick

    const buttonDivide = document.getElementById(DIVIDE_BUTTON_ID)
    buttonDivide.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(DIVIDE_BUTTON_ID)

    const buttonReset = document.getElementById('button-reset')
    buttonReset.onclick = handleResetButtonOnClick

    const buttonEqual = document.getElementById(EQUAL_BUTTON_ID)
    buttonEqual.onclick = handleEqualButtonOnClick
    toggleButtonDisabledProperty(EQUAL_BUTTON_ID)

    handleDisplayValue(currInput)
}

main()

