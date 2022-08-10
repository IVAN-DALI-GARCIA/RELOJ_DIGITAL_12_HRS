function displayTime() {
    var dataTime = new Date();
    var hrs = dataTime.getHours();
    var min = dataTime.getMinutes();
    var sec = dataTime.getSeconds();
    var session = document.getElementById('session');

    // Para cambiar el pm y am. segun sea el caso.

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';    
    }

    // para cambiar el formato de hora de 24hrs a 12 hrs no importa el meridiano del dia.

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('horas').innerHTML = hrs;
    document.getElementById('minutos').innerHTML = min;
    document.getElementById('segundos').innerHTML = sec;    
}

setInterval(displayTime , 10);

