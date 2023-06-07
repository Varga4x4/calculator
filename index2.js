const DIVIDE_BUTTON_ID = 'button-divide'
const EQUAL_BUTTON_ID = 'button-equal'
const TIMES_BUTTON_ID = 'button-times'
const MINUS_BUTTON_ID = 'button-minus'
const PLUS_BUTTON_ID = 'button-plus'
const POWER_BUTTON_ID = 'button-power'
const ROOT_BUTTON_ID = 'button-root'
const DOT_BUTTON_ID = 'button-dot'
const CE_BUTTON_ID = 'button-ce'

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
            
            const shouldOperationButtonBeDisabled = number1 !== undefined
            toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, shouldOperationButtonBeDisabled)
            toggleButtonDisabledProperty(TIMES_BUTTON_ID, shouldOperationButtonBeDisabled)
            toggleButtonDisabledProperty(MINUS_BUTTON_ID, shouldOperationButtonBeDisabled)
            toggleButtonDisabledProperty(PLUS_BUTTON_ID, shouldOperationButtonBeDisabled)
            toggleButtonDisabledProperty(POWER_BUTTON_ID, shouldOperationButtonBeDisabled)
            toggleButtonDisabledProperty(ROOT_BUTTON_ID, shouldOperationButtonBeDisabled)
            toggleButtonDisabledProperty(DOT_BUTTON_ID, shouldOperationButtonBeDisabled)
            
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
        toggleButtonDisabledProperty(TIMES_BUTTON_ID, true)
        toggleButtonDisabledProperty(MINUS_BUTTON_ID, true)
        toggleButtonDisabledProperty(PLUS_BUTTON_ID, true)
        toggleButtonDisabledProperty(POWER_BUTTON_ID, true)
        toggleButtonDisabledProperty(ROOT_BUTTON_ID, true)
        toggleButtonDisabledProperty(DOT_BUTTON_ID, true)
        
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

            case "*":
                console.log(number1, number2)
                result = number1 * number2
                break;

            case "-":
                console.log(number1, number2)
                result = number1 - number2
                break;

            case "+":
                console.log(number1, number2)
                result = number1 + number2
                break;

            case "Xʸ":
                console.log(number1, number2)
                result = Math.pow(number1, number2)
                break;

            case "√":
                console.log(number1, number2)
                result = Math.sqrt(number1, number2)
                break;
        }

        currInput = result.toString()
        handleDisplayValue(result)
        toggleButtonDisabledProperty(EQUAL_BUTTON_ID, true)
        toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, false)
        toggleButtonDisabledProperty(TIMES_BUTTON_ID, false)
        toggleButtonDisabledProperty(MINUS_BUTTON_ID, false)
        toggleButtonDisabledProperty(PLUS_BUTTON_ID, false)
        toggleButtonDisabledProperty(POWER_BUTTON_ID, false)
        toggleButtonDisabledProperty(ROOT_BUTTON_ID, false)
        toggleButtonDisabledProperty(DOT_BUTTON_ID, false)
    }

    const handleOperationButtonOnClick = (event) => {
        console.log("handleOperationButtonOnClick", event.target.innerText)

        number1 = parseFloat(currInput)
        currInput = ""
        console.log(number1, currInput)
        toggleButtonDisabledProperty(DIVIDE_BUTTON_ID, true)
        toggleButtonDisabledProperty(TIMES_BUTTON_ID, true)
        toggleButtonDisabledProperty(MINUS_BUTTON_ID, true)
        toggleButtonDisabledProperty(PLUS_BUTTON_ID, true)
        toggleButtonDisabledProperty(POWER_BUTTON_ID, true)
        toggleButtonDisabledProperty(ROOT_BUTTON_ID, true)
        toggleButtonDisabledProperty(DOT_BUTTON_ID, true)
        
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

    const button0 = document.getElementById('button-0')
    button0.onclick = handleNumberButtonOnClick

    const button1 = document.getElementById('button-1')
    button1.onclick = handleNumberButtonOnClick

    const button2 = document.getElementById('button-2')
    button2.onclick = handleNumberButtonOnClick

    const button3 = document.getElementById('button-3')
    button3.onclick = handleNumberButtonOnClick

    const button4 = document.getElementById('button-4')
    button4.onclick = handleNumberButtonOnClick

    const button5 = document.getElementById('button-5')
    button5.onclick = handleNumberButtonOnClick

    const button6 = document.getElementById('button-6')
    button6.onclick = handleNumberButtonOnClick

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

    const buttonTimes = document.getElementById(TIMES_BUTTON_ID)
    buttonTimes.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(TIMES_BUTTON_ID)

    const buttonMinus = document.getElementById(MINUS_BUTTON_ID)
    buttonMinus.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(MINUS_BUTTON_ID)

    const buttonPlus = document.getElementById(PLUS_BUTTON_ID)
    buttonPlus.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(PLUS_BUTTON_ID)

    const buttonPower = document.getElementById(POWER_BUTTON_ID)
    buttonPower.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(POWER_BUTTON_ID)

    const buttonRoot = document.getElementById(ROOT_BUTTON_ID)
    buttonRoot.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(ROOT_BUTTON_ID)

    const buttonDot = document.getElementById(DOT_BUTTON_ID)
    buttonDot.onclick = handleNumberButtonOnClick
    toggleButtonDisabledProperty(DOT_BUTTON_ID)

    const buttonCe = document.getElementById(CE_BUTTON_ID)
    buttonCe.onclick = handleOperationButtonOnClick
    toggleButtonDisabledProperty(CE_BUTTON_ID)

    handleDisplayValue(currInput)
}

main()

