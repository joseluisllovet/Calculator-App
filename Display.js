class Display{
    constructor(displayValueBefore, displayValueNow){
        this.displayValueNow = displayValueNow;
        this.displayValueBefore = displayValueBefore;
        this.calculator = new Calculator();
        this.operator = undefined; //Reset the operator (de)
        this.valueNow = '';
        this.valueBefore = '';
        this.signes = {
            add: '+',
            deduct: '-',
            multiply: '×',
            split: '÷',
            exp: '^',
            ans: 'ans',
        }
    }

    delete(){
        this.valueNow = this.valueNow.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll(){
        this.valueNow = '';
        this.valueBefore = '';
        this.operator = undefined; //Reset the operator
        this.printValues();
    }

    selectOperator(type){
        this.operator !== 'equal' && this.calculate(); //If the operator is not equal, execute the calculate method
        this.operator = type;
        this.valueBefore = this.valueNow || this.valueBefore; //If the current value is empty, use the previous value
        this.valueNow = ''; //Reset the current value
        this.printValues();
    }

    addNumber(number){
        if(number === '.' && this.valueNow.includes('.')) return; //If the number is a point and the current value already contains a point, do nothing
        this.valueNow = this.valueNow + number;
        this.printValues();
    }

    printValues(){
        this.displayValueNow.textContent = this.valueNow;
        this.displayValueBefore.textContent = `${this.valueBefore} ${this.signes[this.operator] || ''}`; //Print the previous value and the current operator
    }

    calculate(){
        const valueBefore = parseFloat(this.valueBefore); //parseFloat converts a string to a floating point number (decimal)
        const valueNow = parseFloat(this.valueNow);

        if(isNaN(valueNow) || isNaN(valueBefore)) return; //If valueNow or valueBefore is not a number, do nothing
        this.valueNow = this.calculator[this.operator](valueBefore, valueNow); //Execute the operation
    }
}