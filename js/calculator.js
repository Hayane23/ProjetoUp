const daysOfWeek = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];

class Calculator{
    constructor(id){
        this.id = id;

        this.date = new Date();
        this.currentMonth = date.getMonth();
        this.currentYear = date.getYear();
        this.currentDay = date.getDay();
    }

    nextMonth = () => {
        if (this.currentMonth == 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        else {
            this.currentMonth++;
        }
        this.showcurr();
    };

    prevMonth = () => {
        if (this.currentMonth == 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        else {
            this.currentMonth--;
        }
        this.showcurr();
    };
}

export default Calculator;