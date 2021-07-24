/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////MESSAGGIO  PER CHI PROVA A LEGGERE QUESTO CODICE/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  
    Se stai provando a capire come funziona il codice provo a spiegartelo: tutte le domande/risposte/informazioni-sul-modulo
    vengono prese dalle funzioni nella cartella "ajax" in un modo che non ho capito ma che funziona.
    Le funzioni che estraggono le informazioni dalla variabile parsata "tutteDomande" sono quelle del tipo getQualcosa
    che dovrebbero essere in fondo.
    Tutti gli elementi del DOM utili ai fini del javascript sono variabili globali e vengono assegnate all'inizio del main.
    Le variabili hanno tutte lo stesso nome dell'id dell'elemento
    Per il resto ci sono un po' di commenti in giro.
*/
var tutteDomande;
const NOME_SPREAD_SHEET = "Domande e risposte";
const POSIZIONE_FILES = "./files/";
// Variabili che rappresentano elementi della pagina html
var contenitoreQuiz, domanda, risposte, prossima, fine, verifica, messaggioFinale, cambiaSfondo,
    timestampDomanda, timer, contatore, orologio, numeroDomanda, randomSwitch, inputInizio, labelInizio,
    copiaTimestamp, divTimestamp, contenitoreSelezioneModuli, divModuli, modal, bottonePopup, stampaDomande;

var contatoreGiuste; //Tiene il conto delle risposte corrette fatte dall'inizio del qui
var contatoreTotale; //Tiene il conto di tutte le risposte date dall'inizio del quiz

var ordineDomandeDaFare = []; //Contiene gli indici (casuale) delle domande da fare durante il quiz, è
var indiceDomandaCorrente = 0; // Indice di ordineDomandeDaFare a cui sono arrivato
var sfondo = true; //Se lo sfondo è standard o no

var timerInterval;
var secondiTrascorsi = 0;

var emojiOrologi = ["🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🕛", "🕧"];
var counterOrologio = 0; //Che emoji di orologio devo mostrare

var moduliEsistenti = {}; // Dizionario con i moduli per cui esiste almeno una domanda e il numero di domande per quel modulo
var moduliSelezionati = []; // Contiene gli indici dei moduli attualmente selezionati

function getResponse() {
    var url = "https://docs.google.com/spreadsheets/d/1e2CCZyObH5hRTmX7IVEVNlwMLxvw1Bjm3kJaDEyYLVA/edit?usp=sharing";
    getTableData(url, ef);
}

function ef(d) {
    tutteDomande = d;
    main();
}
// Il main e' leggermente grosso e per qualche motivo ci sono tantissime funzioni dentro
function main() {
    
    // Assegno gli elementi della pagina alle variabili
    contenitoreQuiz = document.getElementById("contenitoreQuiz");
    domanda = document.getElementById("domanda");
    risposte = document.getElementById("risposte");
    prossima = document.getElementById("prossima");
    verifica = document.getElementById("verifica");
    fine = document.getElementById("fine");
    messaggioFinale = document.getElementById("messaggioFinale");
    cambiaSfondo = document.getElementById("cambiaSfondo");
    timestampDomanda = document.getElementById("timestampDomanda");
    timer = document.getElementById("timer");
    contatore = document.getElementById("contatore");
    orologio = document.getElementById("orologio");
    numeroDomanda = document.getElementById("numeroDomanda");
    randomSwitch = document.getElementById("randomSwitch");
    inputInizio = document.getElementById("inputInizio");
    labelInizio = document.getElementById("labelInizio");
    copiaTimestamp = document.getElementById("copiaTimestamp");
    divTimestamp = document.getElementById("divTimestamp");
    contenitoreSelezioneModuli = document.getElementById("contenitoreSelezioneModuli");
    divModuli = document.getElementById("divModuli");
    popup = document.getElementById("popup");
    bottonePopup = document.getElementById("bottonePopup");
    stampaDomande = document.getElementById("stampaDomande");


    // Gestisco il popup

    // When the user clicks on the button, open the modal
    bottonePopup.onclick = function() {
        popup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    document.getElementById("chiudiPopup").onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Se il cookie "visitata" non e' settato mostro il popup
    if (getCookie("visitata5") !== "true") {
        bottonePopup.click();
        // Setto un cookie per mostrare il banner se l'utente non ha visitato la pagina negli ultimi "giorni" giorni
        var giorni = 10;
        setCookie("visitata5", true, giorni);
    }

    // Inizializzo i contatori delle domande
    contatoreTotale = 0;
    contatoreGiuste = 0;

    // Riempio sequenzialmente ordineDomandeDaFare
    for (var i in tutteDomande[NOME_SPREAD_SHEET]) {
        ordineDomandeDaFare.push(i);
    }

    // Si puo' saltare la domanda attuale con spazio
    window.onkeydown = function(event){
        if(event.keyCode === 32) {
            event.preventDefault();
            prossima.click(); //This will trigger a click on the first <a> element.
        }
    };

    // Mischio ordineDomandeDaFare cosi' da avere domande sempre in ordine diverso
    mischia(ordineDomandeDaFare);

    selezionaModuliEsistenti();
    mostraScletaModulo();
    aggiornaModuliSelezionati();
    verifica.addEventListener("click", mostraSoluzione);
    prossima.addEventListener("click", timerHandler); // Al primo click sul pulsante prossima parte il timer, l'eventListener viene tolto subito dopo

    // prossima
    prossima.addEventListener("click", prossimaClickHandler);
    // cambiaSfondo
    cambiaSfondo.addEventListener("click", cambiaSfondoClickHandler)
    // fine
    fine.addEventListener("click", fineQuiz);

    // randomSwitch
    randomSwitch.addEventListener("click", randomSwitchClickHandler)

    // inputInizio
    inputInizio.addEventListener("change", inizioValueChangeHandler);
    inputInizio.addEventListener("keyup", inizioValueChangeHandler);
    // Non accetto valori negativi
    inputInizio.onkeydown = function(e) {
        if (!((e.keyCode > 95 && e.keyCode < 106) ||
                (e.keyCode > 47 && e.keyCode < 58) ||
                e.keyCode == 8)) {
            return false;
        }
    }

    // copiaTimestamp

    copiaTimestamp.addEventListener("click", (event) => {
        event.preventDefault();
        var tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = timestampDomanda.textContent;
        tempInput.style.display = "hidden";
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    })

    stampaDomande.addEventListener("click", stampa);

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////FINE MAIN/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////EVENT LISTENER HANDLERS/////////////////////////////////
function prossimaClickHandler() {
    // Rimuovo l'eventListener che fa partire il timer
    setTimeout(() => {
        prossima.removeEventListener("click", timerHandler);
    }, 50);
    // Gestisco l'aspetto dell'interfaccia
    prossima.value = "Salta";
    // verifica.disabled = false;
    fine.disabled = false;
    messaggioFinale.style.display = "none";
    divTimestamp.style.opacity = "1";

    // Disabilito il menu di selezione del modulo
    toggleMenuModulo(true);

    // Aggiorno moduliSelezionati in caso siano cambiati
    aggiornaModuliSelezionati();
    var qualeDomandaFare;
    // Se la domanda non fa parte di uno dei moduli selezionati e c'e' almeno un modulo selezionato vado alla successiva
    do {
        // qualeDomandaFare è scelta da ordineDomandeDaFare se l'ordine delle domande è casuale oppure viene incrementata di 1 altrimenti
        qualeDomandaFare = (randomSwitch.checked == true) ? ordineDomandeDaFare[indiceDomandaCorrente++] : indiceDomandaCorrente++;

    } while (indiceDomandaCorrente <= tutteDomande[NOME_SPREAD_SHEET].length && !moduliSelezionati.includes(getModulo(qualeDomandaFare)))

    // Se le domande non sono finite
    if (indiceDomandaCorrente <= tutteDomande[NOME_SPREAD_SHEET].length) {
        pulisci(); // Cancello le opzioni precedenti
        mostraDomanda(qualeDomandaFare);
    } else {
        alert("Non ci sono più domande. Assicurati di aver selezionato almeno una sezione!");
        prossima.disabled = true;
    }
}

function cambiaSfondoClickHandler() {
    if (sfondo) {
        document.body.style.backgroundImage = "url('./martini.jpg')";
    } else {
        document.body.style.backgroundImage = "none"
        document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
    }
    sfondo = !sfondo;
}

function randomSwitchClickHandler() {
    if (randomSwitch.checked) {
        inputInizio.style.opacity = "0";
        labelInizio.style.opacity = "0";
        mischia(ordineDomandeDaFare);
        prossima.value = "Salta";
    } else {
        inputInizio.style.opacity = "1";
        labelInizio.style.opacity = "1";
        indiceDomandaCorrente = inputInizio.value;
        prossima.value = "Vai a " + String(inputInizio.value);
    }
}

function inizioValueChangeHandler() {
    
    if (inputInizio.value < 2) {
        prossima.disabled = 1;
    }
    else {
        prossima.disabled = 0;
        prossima.value = "Vai a " + ((String(inputInizio.value) == "") ? "0" : String(inputInizio.value));
    }
    var indiceVero = (inputInizio.value >= 2) ? (inputInizio.value - 2) : 2;
    // indiceDomandaCorrente = inputInizio.value - 2;
    indiceDomandaCorrente = indiceVero;

    prossima.value = "Vai a " + ((String(inputInizio.value) == "") ? "0" : String(inputInizio.value));
    // prossima.value = "Vai a " + ((String(indiceVero) == "") ? "0" : String(indiceVero));
}


// Setta un cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// Legge un cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// crea un vettore contenente i moduli per cui esiste almeno una domanda in "data"
function selezionaModuliEsistenti() {
    for (var i in tutteDomande[NOME_SPREAD_SHEET]) {
        var mod = getModulo(i);
        if (moduliEsistenti.hasOwnProperty(mod)) {
            moduliEsistenti[mod]++;
        } else {
            moduliEsistenti[mod] = 1;
        }
    }
}

// Dato il numero di un modulo ne restituisce il nome
function daiUnNomeAiModuli(numeroModulo) {
    var nome;
    switch (numeroModulo) {
        case "0":
            nome = "Altre";
            break;
        case "1":
            nome = "Bilancio";
            break;
        case "3":
            nome = "Investimenti";
            break;
    }
    if (nome == "" || nome == undefined) {
        nome = numeroModulo;
    }
    return nome;
}

// Mostra su schermo delle checkbox personalizzata per selezionare quali moduli si vogliono, buona fortuna a capirci qualcosa (e' quasi uguale a mostraDomanda)
function mostraScletaModulo() {
    for (var i in moduliEsistenti) {
        nuovaRiga = document.createElement("label");
        nuovaRiga.classList.add("container");
        nuovaRiga.classList.add("opzione");
        var mod = daiUnNomeAiModuli(i);
        nuovaRiga.textContent = mod + " (" + moduliEsistenti[i] + " domande)";
        nuovaOpzione = document.createElement("input");
        nuovaOpzione.type = "checkbox";
        nuovaOpzione.value = i;

        // Seleziono di default tutti i moduli eccetto che quello dell'orale
        if (i !== "Orale"){
            nuovaOpzione.checked = true;
        }

        // Quando viene selezionata la sezione "Orale" vengono deselezionate le altre per comodita'
        if (i == "Orale") {
            nuovaOpzione.addEventListener("change", (event)=>{
                var evt=event||window.event;
                if (evt.target.checked) {
                    var v = divModuli.getElementsByTagName("input");
                    for (var i of v) {
                        if (i.value !== "Orale") {
                            i.checked = false;
                        }
                    }
                }
            })
        }

        nuovaOpzione.name = "opzione" + String(i);

        var customCheckMark = document.createElement("span");
        customCheckMark.classList.add("checkmark");

        nuovaRiga.appendChild(nuovaOpzione);
        nuovaRiga.appendChild(customCheckMark);
        divModuli.appendChild(nuovaRiga);
    }

}

//Aggiorna moduliSelezionati in base alle checkbox
function aggiornaModuliSelezionati() {
    moduliSelezionati = [];
    var iv = divModuli.getElementsByTagName("input");
    for (var i of iv) {
        if (i.checked) {
            moduliSelezionati.push(i.value);
        }
    }
}

// Fa partire un timer per il cronometro e uno per aggiornare le emoji
function timerHandler() {
    timerInterval = setInterval(aggiornaTimer, 1000);
    orologioInterval = setInterval(aggiornaOrologio, 400);
}

// Aggiorna il contatore delle domande date
function aggiornaContatore() {
    var corr = Number(contatore.textContent) + 1;
    contatore.textContent = String(corr++);
}

// Aggiorna il cronometro, formato mm : ss
function aggiornaTimer() {
    secondiTrascorsi++;
    var sec = secondiTrascorsi % 60;
    var min = Math.floor(secondiTrascorsi / 60);
    if (sec < 10) {
        sec = "0" + String(sec)
    };
    if (min < 10) {
        min = "0" + String(min)
    }
    timer.textContent = min + " : " + sec;

}

// Aggiorna le emoji dell'orologio
function aggiornaOrologio() {
    orologio.textContent = emojiOrologi[counterOrologio];
    counterOrologio = (counterOrologio + 3) % (emojiOrologi.length);
}

// Abilita o disabilita menu selezione modulo
function toggleMenuModulo(disabledState) {
    var vett = divModuli.getElementsByTagName("input");
    for (var i of vett) {
        i.disabled = disabledState;
    }
}

// Gestisce la fine del qui\
function fineQuiz() {

    // Gestisco l'aspetto dell'interfaccia
    fine.disabled = true;
    prossima.disabled = false;
    timer.style.color = "orange";
    contatore.style.color = "orange";
    contatore.classList.add("strong");
    prossima.value = "Ricomincia";
    verifica.disabled = true;
    // Blocco i timer 
    clearInterval(timerInterval);
    clearInterval(orologioInterval);

    // Riabilito il menu di selezione del modulo
    toggleMenuModulo(false);

    var secondiPerDomanda = secondiTrascorsi / contatoreTotale;
    secondiPerDomanda = secondiPerDomanda.toFixed(2);
    secondiTrascorsi = 0;
    // Aggiungo l'eventListener che fa ricominciare i timer al riavvio del quiz
    prossima.addEventListener("click", timerHandler);

    var percentualeGiuste = contatoreGiuste / contatoreTotale; // Percentuale di risposte giuste
    percentualeGiuste = percentualeGiuste.toFixed(2);
    var messaggi = ["Non ho parole", "Sei peggio di Paola", "Fai molto schifo", "Fai un po' schifo", "Insomma...", "Mmm...", "Sei bravino", "Bravo", "Complimenti", "Sei talmente bravo che ora cambio modalità di esame"];

    // Seleziono il giusto messaggio in base al punteggio fatto
    var messaggio = messaggi[Math.floor(percentualeGiuste * 9)];

    // Seleziono l'articolo per gestire LO "zero"
    if ((percentualeGiuste * 100) % 100 == 0 && percentualeGiuste != 1) {
        articolo = "lo";
    } else {
        articolo = "il";
    }

    var messaggione = "<p><strong>" + messaggio + "</strong> ne hai azzeccate " + articolo + " <strong>" + String(percentualeGiuste * 100) + "%</strong> e hai impiegato in media <strong>" + secondiPerDomanda + "</strong> secondi per ogni domanda</p>";
    if (contatoreTotale == 0) {
        messaggione += "<br> <span class='light'>è una feature non un bug che credi???</span>"
    }
    messaggioFinale.innerHTML = messaggione;
    messaggioFinale.style.display = "block";
    indiceDomandaCorrente = 0;
    prossima.addEventListener("click", resetta);
}

function resetta() {
    prossima.removeEventListener("click", resetta);
    timer.textContent = "00 : 00"
    contatore.textContent = "0";
    contatoreTotale = 0;
    contatoreGiuste = 0;
    mischia(ordineDomandeDaFare);
    // indiceDomandaCorrente = (randomSwitch.checked == true) ? indiceDomandaCorrente + 1 : 0;
    indiceDomandaCorrente = 0;
    timer.style.color = "inherit";
    contatore.style.color = "inherit";
}

// Cancella domanda e opzioni
function pulisci() {
    while (risposte.firstChild) {
        risposte.removeChild(risposte.firstChild);
    }

    var frequenza = contenitoreQuiz.getElementsByClassName("frequenza");
    for (var i of frequenza) {
        i.remove();
    }
    var input = contenitoreQuiz.getElementsByTagName("input");
    for (var i of input) {
        i.remove();
    }
    if (document.getElementById("spanSoluzione")){
        document.getElementById("spanSoluzione").remove();
    }
    var brs = contenitoreQuiz.getElementsByTagName("br");
    if (brs[0]) brs[0].remove();
    contenitoreQuiz.classList.remove("giusta");
    contenitoreQuiz.classList.remove("sbagliata");
}

// Mostra la soluzione alla domanda e registra il punteggio fatto
function mostraSoluzione() {
    prossima.value = "Prossima Domanda";
    opzioni = document.getElementsByClassName("opzione");
    var rispostaGiusta = true;
    for (var i of opzioni) {
        i.classList.add("svela");
        var cb = i.getElementsByTagName("input")[0];
        var lab = i.getElementsByTagName("label")[0];
        cb.disabled = true;
        if ((cb.checked && i.classList.contains("sbagliata")) || (!cb.checked && i.classList.contains("giusta"))) {
            rispostaGiusta = false;
        }
    }
    if (rispostaGiusta == true) {
        contatoreGiuste++;
    }

    // modifico l'aspetto di contenitoreQuiz
    var classeDaAggiungere = (rispostaGiusta == true) ? "giusta" : "sbagliata";
    contenitoreQuiz.classList.add(classeDaAggiungere);

    contatoreTotale++;
    aggiornaContatore();
    verifica.disabled = true;
}

// Mostra su schermo domanda e opzioni con checkbox personalizzata, buona fortuna a capirci qualcosa
function mostraDomanda(indice) {
    numeroDomanda.textContent = String(indice + 2);
    domanda.textContent = getDomanda(indice).replace(/^\s+/g, ''); // Tolgo le righe vuote e gli spazi all'izio e alla fine
    arrayGiuste = getGiuste(indice);
    arraySbagliate = getSbagliate(indice);
    arrayRisposte = arrayGiuste.concat(arraySbagliate);
    mischia(arrayRisposte);

    const domandaOrale = getModulo(indice) == "Orale";
    const domandaARispostaLibera = getGiuste(indice).length == 1 && getSbagliate(indice).length == 0;
    if (getNomeFile(indice) != false) {
        // verifica.disabled = true;
        // var spanFile = document.createElement("span");
        // spanFile.classList.add("frequenza");
        var br = document.createElement("br");
        domanda.appendChild(br);
        // spanFile.textContent = "File: ";
        var link = document.createElement("a");
        link.href = POSIZIONE_FILES + getNomeFile(indice);
        link.target = "_blank";
        link.textContent = "File";
        // domanda.appendChild(spanFile);
        contenitoreQuiz.appendChild(link);
    }

    if (domandaARispostaLibera) { //Per quelle in cui la risposta va scritta a mano
        var bottoneSoluzione = document.createElement("input");
        bottoneSoluzione.type = "button";
        bottoneSoluzione.value = "Mostra soluzione";

        var spanSoluzione = document.createElement("pre");
        spanSoluzione.id = "spanSoluzione";
        bottoneSoluzione.onclick = function(event) {
            var evt=event||window.event;
            document.getElementById("spanSoluzione").textContent = getGiuste(indice)[0];
            event.target.disabled = true;}
        contenitoreQuiz.appendChild(bottoneSoluzione);
        contenitoreQuiz.appendChild(spanSoluzione);
    }

    if (domandaOrale) {
        verifica.disabled = true;
        var spanFrequenza = document.createElement("span");
        spanFrequenza.classList.add("frequenza");
        var v = " volta";
        if ( getFrequenza(indice) > 1) {
            v = " volte";
        }
        var br = document.createElement("br");
        contenitoreQuiz.appendChild(br);
        spanFrequenza.textContent = "Questa domanda è stata fatta circa " + getFrequenza(indice) + v;
        contenitoreQuiz.appendChild(spanFrequenza);
    }

    if (!domandaOrale && !domandaARispostaLibera) {
        console.log(getGiuste(indice));
        verifica.disabled = false;
        for (var i in arrayRisposte) {
            if (arrayRisposte[i] == "" || arrayRisposte[i] == " ") {
                continue;
            }
            nuovaRiga = document.createElement("label");
            nuovaRiga.classList.add("container");
            var giusta = arrayGiuste.includes(arrayRisposte[i]);
            if (giusta == true) {
                nuovaRiga.classList.add("giusta");
            } else {
                nuovaRiga.classList.add("sbagliata");
            }
            nuovaRiga.classList.add("opzione");
            nuovaOpzione = document.createElement("input");
            nuovaOpzione.type = "checkbox";
            nuovaOpzione.value = arrayRisposte[i].replace(/^\s+/g, '');;
            nuovaOpzione.name = "opzione" + String(i);

            nuovaRiga.textContent = arrayRisposte[i].replace(/^\s+/g, '');;

            var customCheckMark = document.createElement("span");
            customCheckMark.classList.add("checkmark");

            nuovaRiga.appendChild(nuovaOpzione);
            nuovaRiga.appendChild(customCheckMark);
            risposte.appendChild(nuovaRiga);

        }
    }
    timestampDomanda.textContent = getTimestamp(indice);

}

// Mischia un array
function mischia(array) {
    if (array.length == 2) {
        if (Math.random() > 0.5) {
            var t = array[1];
            array[1] = array[0];
            array[0] = t;
        }
        return;
    }
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

// Per qualche motivo sui telefoni se la roba da stampare viene eliminata subito il file viene tutto bianco
//  quindi ho messo un timeout che elimina la roba dopo 10 secondi. Per evitare che il file contenga il doppio
//  della roba (per esempio se il pulsante viene premuto due volte di fila), prima di creare la roba da stampare
//  viene eliminata, se presente, quella già creata. 
//  Forse si poteva evitare di ricrearla se gia' presente ma sticazzi.
function stampa() {
    eliminaRobaDaStampare(); 
    var daStampare = document.createElement("div");
    document.body.appendChild(daStampare);
    daStampare.classList.add("stampa");
    daStampare.id = "contenitoreRobaDaStampare";
    var scrittaGiuste = document.createElement("pre");
    document.body.appendChild(scrittaGiuste);
    scrittaGiuste.classList.add("stampa");
    scrittaGiuste.id = "scrittaGiuste";
    scrittaGiuste.textContent = "Giuste";
    creaRobaDaStampare(daStampare);
    print();

    setTimeout(eliminaRobaDaStampare, 10000);
    
}

function eliminaRobaDaStampare() {
    var daStampare = document.getElementById("contenitoreRobaDaStampare");
    if (!daStampare) return;
    while (daStampare.firstChild) {
       daStampare.removeChild(daStampare.firstChild);
    }

    document.body.removeChild(daStampare);
}

function creaRobaDaStampare(daStampare) {
    aggiornaModuliSelezionati();
    for (var i = 0; i < tutteDomande[NOME_SPREAD_SHEET].length; i++) {
        if (moduliSelezionati.includes(getModulo(i)) && getNomeFile(i) == false) {
            var bloccoDaStampare = document.createElement("div"); // Contiene domanda, risposte e risposta esatta di una domanda
            daStampare.appendChild(bloccoDaStampare);
            bloccoDaStampare.classList.add("stampa");
            bloccoDaStampare.classList.add("bloccoDaStampare");
            var numeroDaStampare = document.createElement("pre");
            bloccoDaStampare.appendChild(numeroDaStampare);
            numeroDaStampare.classList.add("stampa");
            numeroDaStampare.classList.add("numeroDaStampare");
            numeroDaStampare.innerHTML =  "(" + i + ")";

            var domandaDaStampare = document.createElement("pre");
            bloccoDaStampare.appendChild(domandaDaStampare);
            domandaDaStampare.classList.add("stampa");
            domandaDaStampare.classList.add("domandaDaStampare");
            domandaDaStampare.textContent = getDomanda(i).replace(/^\s+/g, '');

            if (getModulo(i) != "Orale") {
                var vettRisposteMischiate = getGiuste(i);
                vettRisposteMischiate = vettRisposteMischiate.concat(getSbagliate(i));
                mischia(vettRisposteMischiate);
                var vettRisposteFormattate = vettRisposteMischiate.concat();

                function formattaLettera(l) {
                    // return "<b class='stampa'> " + l + ") </b>";
                    return l + ") ";
                    // return "<span class='stampa cerchietto'> " + l + "</span>";
                }

                for (var k in vettRisposteFormattate) {
                    vettRisposteFormattate[k].replace(/^\s+/g, '');
                    var lettera = String.fromCharCode("a".charCodeAt(0) + Number(k));

                    vettRisposteFormattate[k] = "<b class='stampa'> " + formattaLettera(lettera) + "</b>" + vettRisposteFormattate[k];
                    if (k != 0) vettRisposteFormattate[k] = " " + vettRisposteFormattate[k];
                }

                var risposteDaStampare = document.createElement("pre");
                bloccoDaStampare.appendChild(risposteDaStampare);
                risposteDaStampare.classList.add("stampa");
                risposteDaStampare.classList.add("risposteDaStampare");
                risposteDaStampare.innerHTML = vettRisposteFormattate;

                var lettereGiuste = "";
                var giuste = getGiuste(i);
                for (var g of giuste) {
                    lettereGiuste += formattaLettera(String.fromCharCode("a".charCodeAt(0) + Number(vettRisposteMischiate.indexOf(g))));
                }

                var giusteDaStampare = document.createElement("pre");
                bloccoDaStampare.appendChild(giusteDaStampare);
                giusteDaStampare.classList.add("stampa");
                giusteDaStampare.classList.add("giusteDaStampare");
                giusteDaStampare.innerHTML = lettereGiuste;
            }

        }
    }
}

function getDomanda(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["Domanda"]);
}

function getGiuste(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["GIUSTE"].split(";")).filter((v)=>{return v !== ""});
}

function getSbagliate(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["SBAGLIATE"].split(";")).filter((v)=>{return v !== ""});
}

function getTimestamp(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["Informazioni cronologiche"]);
}

function getModulo(indice) {
    if (tutteDomande[NOME_SPREAD_SHEET][indice].hasOwnProperty("Modulo")) {
        return (tutteDomande[NOME_SPREAD_SHEET][indice]["Modulo"]);
    } else {
        return "0"; // Per quelli per cui non e' specificato nessun modulo
    }
}

function getNomeFile(indice) {
    if (tutteDomande[NOME_SPREAD_SHEET][indice].hasOwnProperty("Nome del file")) {
        return (tutteDomande[NOME_SPREAD_SHEET][indice]["Nome del file"]);
    } else {
        return false; // Per quelli per cui non e' presente un file
    }
}

function getFrequenza(indice) {
    if (tutteDomande[NOME_SPREAD_SHEET][indice].hasOwnProperty("Frequenza")) {
        return (tutteDomande[NOME_SPREAD_SHEET][indice]["Frequenza"]);
    } else {
        return "1"; // Per quelli per cui non e' specificato nessun modulo
    }
}