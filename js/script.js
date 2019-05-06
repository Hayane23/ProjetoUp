let today = new Date();
let year = today.getFullYear();

let cal = function(divId) {
  
  //guardando o div id
  this.divId = divId;
  
  // Dias da semana, começando em Domingo
  this.DaysOfWeek = ['Dom','Seg','Ter','Qua','Qui','sex','Sab'];
  
  // Meses, começando em Janeiro
  this.Months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
  
  // Seleciona o mês e ano atual
  let d = new Date();
  
  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
  
};

// Vai para o próximo mês
cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Vai para o mês anterior
cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Mostra o mês atual
cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Mostra o mês (ano, mês)
cal.prototype.showMonth = function(y, m) {
  
  let d = new Date()
  // Primeiro dia da semana no mês selecionado
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  // Ultimo dia do mês selecionado
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  // Ultimo dia do mês anterior
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  
  
  let html = '<table>';
  
  // Mostra o mês e o ano selecionados
  html += '';
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>'; //o contador m, vai percorrer os indices na variavel Month
  
  html += '</tr></thead>';
  
  
  // "Header" dos dias da semana
  html += '<tr class="days">';
  for(let i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';
  
  //Mostra os dias
  let i=1;
  do {
    
    let dow = new Date(y, m, i).getDay();
    
    // Se for Domingo, começa nova linha
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // Se não for domingo o primeiro dia do mês
    // Vai aparecer os ultimos dias do mês anterior
    else if ( i == 1 ) {
      html += '<tr>';
      let k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(let j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }
    
    // Mostra o dia atual no loop
    let chk = new Date();
    let chkY = chk.getFullYear();
    let chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // Se for sábado,  a linha acaba
    //dow = days of week
    if ( dow == 6 ) {
      html += '</tr>';
    }
    // Se não for sábado o ultimo dia do mês selecionado
    // vai aparecer os próximos dias a partir do próximo mês
    else if ( i == lastDateOfMonth ) {
      let k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }
    
    i++;
  }while(i <= lastDateOfMonth);
  
  // fecha a tabela
  html += '</table>';
  
  // Escreve em html para a div
  document.getElementById(this.divId).innerHTML = html;
};

// Quando a pagina carregar
window.onload = function() {
  
  // começa o calendario
  let c = new cal("divCal");			
  c.showcurr();
  
  // Ativa o click dos botões próximo e anterior
  getId('btnNext').onclick = function() {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth();
  };
}

// Get element by id
function getId(id) {
  return document.getElementById(id);
}