/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////MESSAGGIO  PER CHI PROVA A LEGGERE QUESTO CODICE/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  
    Se stai provando a capire come funziona il codice provo a spiegartelo: tutte le domande/risposte/informazioni-sul-modulo
    stanno nella variabile di testo "data" in formato JSON. Fai attenzione al formato, deve essere uguale a quello che c'e'
    ora. Le funzioni che estraggono le informazioni dalla variabile parsata "tutteDomande" sono quelle del tipo getQualcosa
    che dovrebbero essere in fondo.
    Tutti gli elementi del DOM utili ai fini del javascript sono variabili globali e vengono assegnate all'inizio del main.
    Le variabili hanno tutte lo stesso nome dell'id dell'elemento
    Per il resto ci sono un po' di commenti in giro.
*/

// variabile contenente il JSON con domande e risposte, 
// per ottenerlo selezionare le colonne dal foglio excel e convertirle in JSON su http://beautifytools.com/excel-to-json-converter.php
var data = `{
    "Domande e risposte": [
        {
            "Informazioni cronologiche": "5/7/2020 18:54:47",
            "Domanda": "Collocare in bilancio la voce interessi attivi",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Attivo di SP; Valore della produzione; Costi della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 19:00:30",
            "Domanda": "Collocare in bilancio la voce attrezzatura",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Valore della produzione; Costi operativi di CE; Costi della produzione di CE; Passivo SP; Capitale netto; Area straordinaria",
            "Modulo": "1",
            "Frequenza": "2"
        },
        {
            "Informazioni cronologiche": "5/7/2020 19:04:19",
            "Domanda": "La voce impianti è un costo pluriennale",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 19:07:16",
            "Domanda": "Quali delle seguenti voci sono costi di esercizio",
            "GIUSTE": "Interessi passivi su mutuo; Perdita su crediti;Decremento magazzino materie; Quota TFR",
            "SBAGLIATE": "Nessuna delle altre",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 20:35:49",
            "Domanda": "Collocare in bilancio la voce riserva legale",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Area finanziaria di CE; Attivo di SP; Area patrimoniale di CE; Area straordinaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 20:37:00",
            "Domanda": "I crediti v/soci si riferiscono a quote di capitale sociale che i soci non hanno ancora versato",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 20:39:42",
            "Domanda": "Quali delle seguenti voci sono costi",
            "GIUSTE": "Risconto attivo",
            "SBAGLIATE": "Rateo passivo; Risconto passivo; Rateo attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 20:50:46",
            "Domanda": "Quali delle seguenti voci sono valori finanziari",
            "GIUSTE": "Debiti v. fornitore; IVA a credito; Cambiale passiva; Mutuo passivo",
            "SBAGLIATE": "Quota TFR; Oneri finanziari",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 21:23:35",
            "Domanda": "Collocare in bilancio la voce brevetti",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Capitale netto; Costi della produzione di CE; Costi della produzione di CE; Area operativa CE; Costi anticipati; Passivo SP; Ricavi della produzione CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/7/2020 21:29:52",
            "Domanda": "Quali delle seguenti voci sono vere",
            "GIUSTE": "Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; Le immobilizzazioni materiali sono oggetto si ammortamento; L'IVA sugli acquisti configura un credito; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi del periodo; La riserva straordinaria è un valore economico di capitale; La minusvalenza è un valore economico; il risconto attivo si riferisce ad un costo a manifestazione finanziaria già avvenuta",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La pusvalenza è un costo; La riserva legale è prevista dall'atto costitutivo; L'IVA sulle vendite configura un credito",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:34:26",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Capitale Netto",
            "SBAGLIATE": "Attivo SP; Passivo SP; Costi della produzione; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:35:29",
            "Domanda": "Un costo fisso non varia al variare del solo cost driver rappresentato volume di produzione",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:36:57",
            "Domanda": "Collocare in Bilancio la voce MAGAZZINO PRODOTTI",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Valore della produzione; Capitale Netto; Passivo SP; Costi della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:37:38",
            "Domanda": "Si ha una PLUSVALENZA quando il prezzo di vendita di un fattore è > del suo valore contabile",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:38:11",
            "Domanda": "Il costo di manodopera diretta, di stabilimento, è un costo di periodo",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:38:53",
            "Domanda": "Collocare in Bilancio la voce PRESTITO OBBLIGAZIONARIO",
            "GIUSTE": "Passivo SP",
            "SBAGLIATE": "Attivo SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:39:51",
            "Domanda": "Collocare in Bilancio la voce PRESTITO OBBLIGAZIONARIO",
            "GIUSTE": "Passivo SP",
            "SBAGLIATE": "Attivo SP; Area straordinaria; Area fiscale; Capitale Neto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:40:55",
            "Domanda": "Collocare in Bilancio la voce QUOTA DI AMMORTAMENTO",
            "GIUSTE": "Costi di CE",
            "SBAGLIATE": "Attivo SP; Ricavi di CE; Passivo SP; Capitale Netto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:42:25",
            "Domanda": "L'ammortamento riguarda SOLO immobilizzazioni immateriali",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:42:55",
            "Domanda": "Collocare in Bilancio la voce IVA sugli acquisti",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Passivo SP; Area fiscale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:47:15",
            "Domanda": "Collocare in Bilancio la voce CAPITALE SOCIALE",
            "GIUSTE": "Capitale Netto",
            "SBAGLIATE": "Attivo SP; Passivo SP; Valore della produzione; Costi della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:47:53",
            "Domanda": "Un costo fisso si ha solo nel lungo periodo",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:48:23",
            "Domanda": "Il costo di manodopera diretta, di stabilimento, è un costo di periodo",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:49:10",
            "Domanda": "Collocare in Bilancio la voce QUOTA DI AMMORTAMENTO",
            "GIUSTE": "Costi di CE",
            "SBAGLIATE": "Attivo SP; Capitale Netto; Passivo SP; Ricavi di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:50:09",
            "Domanda": "Collocare in Bilancio la voce MAGAZZINO PRODOTTI",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Costi della produzione; Passivo SP; Valore della produzione; Capitale Netto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:50:59",
            "Domanda": "Si ha un PLUSVALENZA quando il prezzo di vendita di un fattore è > del suo prezzo di acquisto",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:51:48",
            "Domanda": "Collocare in Bilancio la voce BREVETTI",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Area straordinaria; Capitale Netto; Area Fiscale; Passivo SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:53:02",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Mutuo passivo; Fondo TFR; Cassa; Debiti v. fornitore; Iva a credito",
            "SBAGLIATE": "Oneri finanziari; Quota TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:54:00",
            "Domanda": "Collocare in Bilancio la voce MARCHIO",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Ricavi della produzione di CE; Passivo SP; Costi della produzione di CE; Area operativa di CE; Capitale netto; Costi anticipati",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:54:47",
            "Domanda": "Quali delle seguenti voci sono RICAVI",
            "GIUSTE": "Risconto passivo",
            "SBAGLIATE": "Rateo attivo; Risconto attivo; Rateo passivo",
            "Modulo": "1",
            "Frequenza": "2"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:55:33",
            "Domanda": "Collocare in Bilancio la voce Proventi finanziari",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Attivo di SP; Costi della produzione; Valore della produzione; Area tributaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:56:10",
            "Domanda": "L'ammortamento riguarda SOLO le immobilizzazioni immateriali",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:56:48",
            "Domanda": "Collocare in Bilancio la voce IVA sugli acquisti",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Pssivo SP; Area fiscale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:57:26",
            "Domanda": "Collocare in Bilancio la voce relativa alla fattura da un cliente",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Area caratteristica di CE; Capitale Netto; Passivo SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:58:54",
            "Domanda": "Collocare in Bilancio la voce AUTOMEZZI",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Passivo di SP; Capitale Netto; Area Straordinaria; Costi operativi di C.E.; Costi della produzione di C.E.; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 15:59:57",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Capitale Netto",
            "SBAGLIATE": "Area straordinaria di CE; Area finanziaria di CE; Attivo di SP; Area patrimoniale di CE; Passivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:01:24",
            "Domanda": "Quali dell seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Quota TFR; Perdita su crediti; Interessi passivi su mutuo",
            "SBAGLIATE": "Riserva legale; Incremento magazzino materie; fondo ammortamento impianto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:03:00",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Il risconto si riferisce ad un costo o un ricavo a manifestazione finanziaria già avvenuta",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La plusvalenza è un costo; Le immobilizzazioni finanziarie sono oggetto di ammortamento; L'IVA sulle vendite si configura un credito",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:05:04",
            "Domanda": "Collocare in Bilancio la voce Interessi Attivi",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Valore della produzione; Attivo di SP; Costi della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:05:32",
            "Domanda": "La voce Impianti è un costo pluriennale",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:06:40",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Perdita su crediti; Interessi passivi su mutuo; Quota TFR; Decremento magazzino materie",
            "SBAGLIATE": "Fondo ammortamento impianto; Riserva legale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:07:33",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Risconto attivo",
            "SBAGLIATE": "Rateo attivo; Rateo passivo; Risconto passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:08:31",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Capitale Netto",
            "SBAGLIATE": "Attivo di SP; Area patrimoniale di CE; Area straordinaria di CE; Passivo di SP; Area finanziaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:09:55",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Cambiale passiva; Mutuo passivo; IVA a credito; Debiti v. fornitore; Cambiale attiva tratta; azioni in società controllata; fondi TFR ",
            "SBAGLIATE": "Oneri finanziari; Quota TFR; proventi finanziari; risconto attivo; fondo ammortamento; ",
            "Modulo": "1",
            "Frequenza": "2"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:12:36",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Le immobilizzazioni materiali sono oggetto di ammortamento; Il risconto di riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; L'IVA sugli acquisti configura un credito",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La plusvalenza è un costo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:13:43",
            "Domanda": "Collocare in Bilancio la voce BREVETTI ",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Ricavi della produzione di CE; Capitale Netto; Passivo di SP; Area operativa di CE; Costi della produzione di CE; Costi anticipati",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:14:21",
            "Domanda": "I crediti v/soci si riferiscono a quote di capitale sociale che i soci non hanno ancora versato",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 16:14:47",
            "Domanda": "La voce Impianti è un costo pluriennale",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:11:37",
            "Domanda": "I principi IAS-IFRS sono obbligatori per tutte le società",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:14:56",
            "Domanda": "Quali delle seguenti voci sono ricavi di esercizio",
            "GIUSTE": "Proventi finanziari; Vendita prodotti; plusvalenza",
            "SBAGLIATE": "Risconto passivo; Rateo attivo; Rivalutazione (x fair value); Acconto ricevuto dai clienti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:17:28",
            "Domanda": "Quali delle seguenti voci sono valori finanziari",
            "GIUSTE": "Obbligazioni emesse; IVA sulle vendite; Cambiale tratta emessa; Cambiale ricevuta da cliente",
            "SBAGLIATE": "Oneri finanziari; brevetto; Risconto passivo; Riserva legale; Capitale sociale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:19:42",
            "Domanda": "Quali delle seguenti voci sono costi di esercizio",
            "GIUSTE": "Interessi passivi su mutuo; Costo del venduto; Decremento magazzino materie; Perdita su crediti; Quota TFR",
            "SBAGLIATE": "Rimanenze finali di materie; Accantonamento a riserva legale; Fondo ammortamento impianto ",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:21:52",
            "Domanda": "Quali delle seguenti voci sono valori finanziari",
            "GIUSTE": "Mutuo passivo; Fondo TFR; Azioni in società controllata; Obbligazioni in portafoglio; Cambialie passiva; IVA accredito",
            "SBAGLIATE": "Quota TFR; risconto attivo; fondo ammortamento; Oneri finanziari",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:23:22",
            "Domanda": "Quali delle seguenti voci sono costi",
            "GIUSTE": "risconto attivo",
            "SBAGLIATE": "rateo attivo; risconto passivo; rateo passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:26:14",
            "Domanda": "Collocare in bilancio la voce costi capitalizzati",
            "GIUSTE": "Attivo si SP",
            "SBAGLIATE": "Capitale netto; Costi della produzione DI C.E.; Passivo di SP; Area straordinaria; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:28:01",
            "Domanda": "Collocare in bilancio la voce riserva di rivalutazione",
            "GIUSTE": "Capitale netto",
            "SBAGLIATE": "Area patrimoniale di CE; Passivo di SP; Attivo di SP; Area finanziaria di CE; Area straordinaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:31:25",
            "Domanda": "Collocare in bilancio la voce proventi finanziari",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Attivo di SP; Area fiscale di CE; Valore della produzione; Area tributaria di CE; Costi della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:35:39",
            "Domanda": "collocare in bilancio la voce di riserva di rivalutazione ",
            "GIUSTE": "Passivo di Sp",
            "SBAGLIATE": "attivo di SP; area straordinaria di CE; area finanziaria di CE; area patrimoniale di CE; ",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:37:14",
            "Domanda": "quali delle seguenti voci sono costi di esercizio",
            "GIUSTE": "interessi passivi su mutuo; quota TFR; esistenze iniziali di materie; ",
            "SBAGLIATE": "Nessuna delle altre",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:39:25",
            "Domanda": "collocare in bilancio la voce incrementi alle immobilizzazioni per lavori interni",
            "GIUSTE": "valore della produzione;",
            "SBAGLIATE": "area straordinaria; costi operativi di CE; passivo di SP; capitale netto; attivo di SP; costi della produzione di CE;",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:48:00",
            "Domanda": "quali delle seguenti affermazioni sono vere",
            "GIUSTE": "il reddito di esercizio è la differenza tra tutti i ricavi e tutti i costi del periodo; le immobilizzazioni finanziarie non sono oggetto di ammortamento; ",
            "SBAGLIATE": "l'iva sulle vendite configura un credito; la plusvalenza è un costo capitalizzato; il rateo si riferisce a un costo o ricavo a manifestazione finanziaria già avvenuta; la riserva statutaria è prevista dall'atto costitutivo;",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 18:51:39",
            "Domanda": "collocare in bilancio la voce cambiale ricevuta da clienti",
            "GIUSTE": "attivo SP; ",
            "SBAGLIATE": "area operativa CE; ricavi della produzione di CE; passivo SP; costi anticipati; costi della produzione di CE; capitale netto;",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:16:45",
            "Domanda": "Collocare in Bilancio la voce BREVETTI E CONCESSIONI GOVERNATIVE",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Passivo SP; Capitale NETTO; Costi Anticipati; Ricavi della produzione di CE; Area operativa CE; Costi della produzione di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:19:49",
            "Domanda": "Quali delle seguenti affermazioni sono VERE?",
            "GIUSTE": "Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta;Le immobilizzazioni materiali sono oggetto di ammortamento;L'IVA sugli acquisti configura un credito",
            "SBAGLIATE": "La plusvalenza è un costo capitalizzato;Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:22:18",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO?",
            "GIUSTE": "Interessi passivi su mutuo;Costo del venduto",
            "SBAGLIATE": "Nessuna delle altre",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:24:04",
            "Domanda": "Collocare in Bilancio la voce INCREMENTI ALLE IMMOBILIZZAZIONI PER LAVORI INTERNI",
            "GIUSTE": "Valore della produzione",
            "SBAGLIATE": "Passivo di SP;Attivo di SP;Costi operativi di CE;Area straordinaria;Capitale netto; Costi della produzione di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:25:38",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Impianto; RIsconto attivo",
            "SBAGLIATE": "Fondo TFR; Risconto Passivo; Rateo Passivo; Rateo Attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:28:55",
            "Domanda": "Collocare in Bilancio la voce AMMORTAMENTO IMPIANTO",
            "GIUSTE": "Costi della Produzione",
            "SBAGLIATE": "Valore della produzione; Area straordinaria di CE; Attivo di SP; Passivo di SP; Area Accessoria",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:30:03",
            "Domanda": "Collocare in Bilancio la voce relativa all'incasso per la RISCOSSIONE DI UN CREDITO",
            "GIUSTE": "Attività correnti",
            "SBAGLIATE": "Passivo di SP; Area caratteristica di CE; Area finanziaria di CE; Attività destinate a cessare",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:31:56",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Interessi attivi su obbligazioni in portafoglio; Plusvalenza; Fitto attivo",
            "SBAGLIATE": "Oneri finanziari; Rateo Passivo; Brevetto; Risconto attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:36:28",
            "Domanda": "Il Rendiconto Finanziario è un documento obbligatorio ai fini IAS/IFRS",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:46:14",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "La PLUSVALENZA è un valore economico;",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La riserva legale deriva da versamenti dei soci; L'IVA sulle vendite configura un credito; Il RATEO ATTIVO si riferisce ad un costo a manifestazione finanziaria già avvenuta; Il VALORE DELLA PRODUZIONE è il valore dei prodotti venduti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:47:57",
            "Domanda": "Il COSTO DEL VENDUTO corrisponde al COSTO DELLA PRODUZIONE",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:49:13",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Marchio; Ammortamento",
            "SBAGLIATE": "Erario C/IVA; Anticipi a Fornitori; Vendita prodotti; Rateo Attivo; Rateo Passivo; Fondo TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:51:33",
            "Domanda": "Collocare in Bilancio la voce RISERVA SOVRAPPREZZO AZIONI",
            "GIUSTE": "Patrimonio NETTO",
            "SBAGLIATE": "N.A. ; Area fiscale di CE; Passività correlate ad attività cessate; Costo del venduto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:53:33",
            "Domanda": "Quali delle seguenti voci sono VALORI ECONOMICI",
            "GIUSTE": "Perdita di esericizo; Avviamento; Capitale sociale; Riserva statutaria",
            "SBAGLIATE": "Rateo passivo; IVA sulle vendite; Fondo imposte; Obbligazioni emesse",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:55:02",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Cassa; Obbligazioni in portafoglio; Mutuo Passivo; Prestito obbligazionario; Erario C/IVA",
            "SBAGLIATE": "Proventi finanziari; Capitale Sociale; Risconto passivo; Riserva Legale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:56:21",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Obbligazioni in portafoglio; Mutuo passivo; Erario C/IVA; Prestito obbligazionario; Cassa",
            "SBAGLIATE": "Proventi finanziari; Risconto passivo; Capitale sociale; Riserva legale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/8/2020 23:57:50",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Interessi attivi su obbligazioni in portafoglio; FItto attivo; Plusvalenza",
            "SBAGLIATE": "Oneri finanziari; Rateo passivo; Brevetto; Risconto attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:00:36",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "La PLUSVALENZA è un valore economico; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi di competenza; Il COSTO DEL VENDUTO si trova nel CE",
            "SBAGLIATE": "Il RATEO ATTIVO si riferisce ad un costo a manifestazione finanziaria non ancora avvenuta; L'IVA sulle vendite configura un credito; La riserva legale deriva da versamenti dei soci; Il VALORE DELLA PRODUZIONE è il valore dei prodotti venduti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:01:57",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Obbligazioni in portafoglio; Mutuo passivo; Erario C/IVA; Prestito obbligazionario; Cassa",
            "SBAGLIATE": "Proventi finanziari; Risconto passivo; Capitale sociale; Riserva legale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:02:50",
            "Domanda": "Il COSTO DEL VENDUTO corrisponde al costo dei beni venduti?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:04:34",
            "Domanda": "Alla riserva legale va accantonato il 20% dell'utile?",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:16:12",
            "Domanda": "Collocare in Bilancio la voce AMMORTAMENTO IMPIANTO",
            "GIUSTE": "Costi della Produzione",
            "SBAGLIATE": "Valore della Produzione; Attivo di SP; Area Straordinaria di CE; Area accessoria; Passivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:17:42",
            "Domanda": "Quali delle seguenti voci sono VALORI ECONOMICI",
            "GIUSTE": "Avviamento; Capitale sociale; Perdita di esercizio",
            "SBAGLIATE": "Obbligazioni emesse; Iva sulle vendite; Rateo passivo; Fondo imposte",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:18:23",
            "Domanda": "Collocare in Bilancio la voce Mutuo Passivo",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Area caratteristica di CE; Attività correnti; Area finanziaria di CE; Attività destinate a CESSARE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 00:21:22",
            "Domanda": "Collocare in Bilancio la voce RISERVA STRAORDINARIA",
            "GIUSTE": "Patrimonio netto",
            "SBAGLIATE": "Area straordinaria di CE; N.A.; Area fiscale di CE; Costo del venduto; Passività correlate ad attività cessate",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:17:04",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Ammortamento; Marchio",
            "SBAGLIATE": "Fondo TFR; Vendita prodotti; Rateo attivo; Rateo Passivo; Erario C/IVA; Anticipi a fornitori",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:18:05",
            "Domanda": "Quali delle seguenti voci sono VALORI ECONOMICI",
            "GIUSTE": "Capitale sociale; Avviamento; Riserva statuaria; Perdita di esercizio",
            "SBAGLIATE": "Fondo imposte; IVA sulle vendite; Obbligazioni emesse; Rateo Passivo;",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:19:09",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Fitto attivo; Plusvalenza; Interessi attivi su obbligazioni in portafoglio",
            "SBAGLIATE": "Brevetto; Risconto attivo; Oneri finanziari; Rateo Passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:20:45",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Cassa; Mutuo Passivo; Obbligazioni in portafoglio; Prestito obbligazionario; Erario C/IVA",
            "SBAGLIATE": "Riserva legale; Capitale sociale; Proventi finanziari; Risconto passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:23:11",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "La PLUSVALENZA è un valore economico",
            "SBAGLIATE": "La riserva LEGALE deriva da versamenti dei soci; Il VALORE DELLA PRODUZIONE è il valore dei prodotti venduti; L'IVA sulle vendite configura un credito; Il RATEO ATTIVO si riferisce ad un costo a manifestazione finanziaria già avvenuta; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:24:11",
            "Domanda": "Collocare in Bilancio la voce RISERVA DI SOVRAPPREZZO AZIONI",
            "GIUSTE": "Patrimonio NETTO",
            "SBAGLIATE": "Costo del venduto; Area fiscale di CE; N.A.; Passivitò correlate ad attività cessate",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:25:05",
            "Domanda": "Collocare in Bilancio la voce relativa all'incasso per la RISCOSSIONE DI UN CREDITO",
            "GIUSTE": "Attività correnti",
            "SBAGLIATE": "Area caratteristica di CE; Area finanziaria di CE; Attività destinate a cessare; Passivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:26:02",
            "Domanda": "Collocare in Bilancio la voce AMMORTAMENTO IMPIANTO",
            "GIUSTE": "Costi della Produzione",
            "SBAGLIATE": "Attivo di SP; Area straordinaria di CE; Valore della produzione; Passivo di SP; Area accessoria",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:26:54",
            "Domanda": "Il RENDICONTO FINANZIARIO è un documento obbligatorio ai fini IAS/IFRS",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:27:22",
            "Domanda": "Il COSTO DEL VENDUTO corrisponde al costo della produzione",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:28:24",
            "Domanda": "Collocare in Bilancio la voce Proventi finanziari",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Area tributaria di CE; Costi della produzione; Attivo di SP; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:29:20",
            "Domanda": "Collocare in Bilancio la voce RISERVA STRAORDINARIA",
            "GIUSTE": "Capitale NETTO",
            "SBAGLIATE": "Area straordinaria di CE; Area finanziaria di CE; Passivo di SP; Area patrimoniale di CE; Attivo di SP;",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:30:21",
            "Domanda": "L'indice S (analisi di bilancio) indica l'importanza dell'area fiscale e straordinaria?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:31:39",
            "Domanda": "Collocare in Bilancio la voce RATEO relativo ad un RICAVO DI COMPETENZA",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Passivo SP; Costi della produzione di CE; Area operativa CE; Ricavi della produzione di CE; Non viene inserito in bilancio; Capitale NETTO",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:32:57",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Obbligazioni Acquistate; Cassa; Fondo TFR; Debiti verso Banca; IVA a credito ",
            "SBAGLIATE": "Plusvalenza; Quota TFR; Interessi Passivi",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:34:07",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Salari e stipendi; Svalutazione CREDITI; Oneri Finanziari; ",
            "SBAGLIATE": "Riserva sovrapprezzo azioni; Fondo ammortamento impianto; Incremento magazzino prodotti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:47:53",
            "Domanda": "Quali delle seguenti voci sono RICAVI",
            "GIUSTE": "Risconto PASSIVO",
            "SBAGLIATE": "Materie in magazzino; Rateo Passivo; Rateo Attivo; Risconto ATTIVO",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:48:43",
            "Domanda": "Collocare in Bilancio la voce ANTICIPO DA CLIENTI",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Valore della produzione; Area straordinaria; Costi della produzione di CE; Costi operativi di CE; Capitale NETTO; Attivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:49:18",
            "Domanda": "La voce AVVIAMENTO è un costo pluriennale?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:51:12",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Il reddito di esercizio è la differenza tra i costi ed i ricavi di un periodo amministrativo",
            "SBAGLIATE": "Il fondo TFR è un fondo rischi; Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria nell'esercizio successivo; L'IVA sulle vendite è IVA a credito; La minusvalenza è un ricavo straordinario",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:57:13",
            "Domanda": "Collocare in Bilancio la voce AZIONI IN SOCIETA COLLEGATE",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Area finanziaria; Passivo SP; Capitale netto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:59:07",
            "Domanda": "Collocare in Bilancio la voce OBBLIGAZIONI ACQUISTATE (in impresa collegata)",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Area Fiscale; Passivo SP; Proventi Finanziari; Capitale NETTO",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 11:59:51",
            "Domanda": "Collocare in Bilancio la voce QUOTA TFR",
            "GIUSTE": "Costi della produzione",
            "SBAGLIATE": "Area fiscale; Passivo SP; Capitale NETTO; Valore della produzione; Attivo SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:01:18",
            "Domanda": "Collocare in Bilancio la voce COSTI CAPITALIZZATI",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Passivo SP; Valore della produzione; Area straordinaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:02:32",
            "Domanda": "Quali delle seguenti opzioni sono VERE",
            "GIUSTE": "Il RATEO è un valore finanziario; Il RATEO Passivo si riferisce ad un'uscita di Cassa non ancora avvenuta",
            "SBAGLIATE": "Il RATEO attivo si riferisce ad un ricavo non ancora maturato",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:04:15",
            "Domanda": "Quali delle seguenti opzioni sono VERE",
            "GIUSTE": "La QUOTA DI AMMORTAMENTO è un costo di competenza dell'esercizio",
            "SBAGLIATE": "Il FONDO AMMORTAMENTO si trova nell'area caratteristica di CE; La QUOTA DI AMMORTAMENTO è un valore economico di Capitale; La QUOTA DI AMMORTAMENTO è un valore economico di reddito pluriennale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:04:47",
            "Domanda": "Collocare in Bilancio la voce BREVETTI",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Area Straordinaria; Costi della Produzione; Capitale NETTO; Passivo SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:05:50",
            "Domanda": "Collocare in Bilancio la voce SVALUTAZIONE CREDITO",
            "GIUSTE": "Costi della Produzione",
            "SBAGLIATE": "Valore della produzione; Area straordinaria; Passivo SP; Attivo SP; Area Fiscale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:07:24",
            "Domanda": "Collocare in Bilancio la voce INCREMENTO MAGAZZINO MATERIE (RF > EI)",
            "GIUSTE": "Costi della Produzione con segno -",
            "SBAGLIATE": "Costi della Produzione con segno +; Valore della Produzione con segno +; Attivo circolante di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:08:40",
            "Domanda": "I crediti v/soci (verso soci) si riferiscono a quote di capitale sociale che i soci non hanno ancora versato?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:10:37",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Le immobilizzazioni materiali sono oggetto di ammortamento; Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; L'IVA sugli acquisti configura un credito",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La plusvalenza è un costo capitalizzato",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:11:07",
            "Domanda": "Quali delle seguenti affermazioni sono vere",
            "GIUSTE": "Il reddito di esercizio e la differenza tra tutti i costi e tutti i ricavi del periodo; Le Immobilizzazioni finanziarie non sono oggetti di ammortamento",
            "SBAGLIATE": "L'IVA sulle vendite configura un credito; La plusvalenza è un costo capitalizzato; Il rateo si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; La riserva statutaria è prevista dall'atto costitutivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:11:12",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Risconto Attivo",
            "SBAGLIATE": "Risconto Passivo; Rateo Passivo; Rateo Attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:12:03",
            "Domanda": "Collocare in Bilancio la voce INTERESSI ATTIVI",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Attivo di SP; Area fiscale di CE; Costi della produzione; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:13:05",
            "Domanda": "Collocare in Bilancio la voce RISERVA DI RIVALUTAZIONE",
            "GIUSTE": "Capitale NETTO",
            "SBAGLIATE": "Passivo di SP; Attivo di SP; Area finanziaria di CE; Area straordinaria di CE; Area patrimoniale di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:14:10",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Mutuo Passivo; Cambiale Passiva; Azioni in società controllata; Obbligazioni in portafoglio; Fondo TFR; IVA a credito",
            "SBAGLIATE": "Risconto Attivo; Fondo Ammortamento; Quota TFR; Oneri Finanziari",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:16:10",
            "Domanda": "Collocare in Bilancio la voce COSTI CAPITALIZZATI",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Costi operativi di CE; Valore della Produzione; Passivo di SP; Capitale NETTO; Area Straordinaria",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:16:33",
            "Domanda": "Collocare in bilancio la voce cambiale ricevuta(da cliente)",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Area operativa CE; Ricavi della produzione di CE; Passivo SP; Costi anticipati; COsti della produzione di CE; Capitale netto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:17:17",
            "Domanda": "Collocare in Bilancio la voce BREVETTI E CONCESSIONI GOVERNATIVE",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Area operativa di CE; Ricavi della produzione di CE; Passivo di SP; Costi anticipati; Costi della produzione di CE; Capitale NETTO",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:17:31",
            "Domanda": "La voce IMPIANTI è un valore economico?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:17:51",
            "Domanda": "La voce AVVIAMENTO è un valore economico?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:19:29",
            "Domanda": "Quai delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Cambiale Attiva (tratta); Mutuo Passivo; Fondo TFR; IVA a Credito; Rateo Passivo; Azioni in Società controllata",
            "SBAGLIATE": "Oneri finanziari; Quota TFR; Risconto Attivo; Proventi finanziari; Fondo Ammortamento",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:20:37",
            "Domanda": "Collocare in Bilancio la voce CAMBIALE RICEVUTA (da Cliente)",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Passivo SP; Area operativa di CE; Costi della produzione di CE; Capitale NETTO; Ricavi della produzione di CE; Costi anticipati",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:21:45",
            "Domanda": "I crediti v/soci, negli IAS-IFRS, si espongono tra le voci di Capitale NETTO",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:25:53",
            "Domanda": "Collocare in bilancio la voce anticipo da clienti",
            "GIUSTE": "Passivo SP",
            "SBAGLIATE": "Area straordinaria: Valore della produzione; Capitale netto; Costi della produzione di CE; Attivo di SP; Costi operativi di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:34:12",
            "Domanda": "Quali delle seguenti voci sono costi di esercizio",
            "GIUSTE": "Salari e stipendi; Oneri finanziari; Svalutazione crediti",
            "SBAGLIATE": "Riserva sovrapprezzo azioni; Fondo ammortamento impianto;Incremento magazzino prodotti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:36:43",
            "Domanda": "Collocare in Bilancio la voce Proventi finanziari",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Attivo di SP; Valore della produzione; Area tributaria di CE; Costi della produzione; Area fiscale di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:37:45",
            "Domanda": "Collocare in Bilancio la voce INCREMENTI ALLE IMMOBILIZZAZIONI PER LAVORI INTERNI",
            "GIUSTE": "Valore della Produzione",
            "SBAGLIATE": "Attivo di SP; Passivo di SP; Costi operativi di CE; Area straordinaria; Capitale NETTO; Costi della produzione di CE; ",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:41:56",
            "Domanda": "L'indice S (analisi di bilancio) indica l'importanza dell'area fiscale e straordinaria",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:42:21",
            "Domanda": "Collocare in Bilancio la voce RISERVA DI RIVALUTAZIONE",
            "GIUSTE": "Nessuna delle risposte",
            "SBAGLIATE": "Attivo di SP; Passivo di SP; Area straordinaria di CE; Area finanziaria di CE; Area patrimoniale di CE;",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:44:49",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Le immobilizzazioni Finanziarie non sono oggetto di ammortamento; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi del periodo;",
            "SBAGLIATE": "L'IVA sulle vendite configura un credito; Il RATEO si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; La plusvalenza è un costo capitalizzato; La riserva statuaria è prevista dall'atto costitutivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:47:17",
            "Domanda": "Quali sdelle seguenti affermazioni sono vere",
            "GIUSTE": "Il reddito di esercizio è la differenza tra i costi ed i ricavi di un periodo di amministrazione",
            "SBAGLIATE": "L'IVA sulle vendite è IVA a credito; Il fondo TFR è un fondo rischi; L minusvalenza è un ricavo straordinario; Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria nell'esercizio successivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:48:15",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Impianto; Risconto Attivo",
            "SBAGLIATE": "Risconto Passivo; Rateo Attivo; Rateo Passivo; Fondo TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/9/2020 12:50:06",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Quota TFR; Costo del venduto; Esistenze iniziali di materie; Perdita su Crediti; Interessi passivi su mutuo",
            "SBAGLIATE": "Fondo Ammortamento impianto; Plusvalenza; Accantonamento a riserva rivalutazione; Incremento magazzino prodotti finiti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 12:39:17",
            "Domanda": "Collocare in bilancio la voce relativa ad una fattura emessa verso un cliente",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Passivo SP; Capitale Netto; Area caratteristica di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:12:40",
            "Domanda": "Collocare in Bilancio la voce AUTOMEZZI",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Passivo di SP; Costi operativi di C.E.; Valore della produzione; Area straordinaria; Costi della produzione di C.E.; Capitale Netto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:13:40",
            "Domanda": "Collocare in Bilancio la voce Proventi finanziari",
            "GIUSTE": "Area finanziaria di C.E.",
            "SBAGLIATE": "Costi della produzione; Area tributaria di C.E.; Attivo di SP; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:14:59",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Mutuo passivo; Fondo TFR; Debiti V. fornitore; Cassa; IVA a credito",
            "SBAGLIATE": "Oneri finanziari; Quota TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:21:01",
            "Domanda": "Quali delle seguenti voci sono RICAVI",
            "GIUSTE": "Risconto Passivo",
            "SBAGLIATE": "Rateo Attivo; Risconto attivo; Rateo Passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:21:54",
            "Domanda": "Collocare in bilancio la voce AUTOMEZZI",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Passivo di SP; Costi operativi di C.E.; Valore della produzione; Area Straordinaria",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:23:06",
            "Domanda": "I crediti v/soci si riferiscono a quote di capitale sociale che i soci non hanno ancora versato",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:24:15",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Interessi passivi su mutuo; Perdita su crediti; Quota TFR",
            "SBAGLIATE": "Incremento magazzino materie; Riserva legale; Fondo ammortamento impianto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:24:32",
            "Domanda": "La voce impianti è un costo pluriennale",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 13:26:29",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La plusvalenza è un costo; Le immobilizzazioni finaziarie sono oggetto di ammortamento; L'IVA sulle vendite si configura un credito",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 15:56:06",
            "Domanda": "Collocare in Bilancio la voce MARCHIO",
            "GIUSTE": "Attivo SP",
            "SBAGLIATE": "Ricavi della produzione di CE; Area operativa di CE; Costi anticipati; Passivo SP; Capitale Netto; Costi della produzione di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 15:56:43",
            "Domanda": "I crediti v/soci si riferiscono a quote di capitale sociale che i soci non hanno ancora versato",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 15:57:31",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Capitale netto",
            "SBAGLIATE": "Area straordinaria di CE; Area patrimoniale di CE; Passivo di SP; Attivo di SP; Area finanziaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 15:58:03",
            "Domanda": "Un costo fisso non varia al variare del suo cost driver rappresentato volume di produzione",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 15:59:21",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Proventi finanziari; Vandita prodotti; Plusvalenza",
            "SBAGLIATE": "Risconto passivo; Rateo attivo; Rivalutazione (x Fair Value); Acconto ricevuto da clienti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:00:22",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Obbligazioni emesse; IVA sulle vendite; Cambiale tratta emessa; Cambiale ricevuta da cliente",
            "SBAGLIATE": "Oneri finanziari; Brevetto; Risconto passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:01:44",
            "Domanda": "Collocare in Bilancio la voce BREVETTI E CONCESSIONI GOVERNATIVE",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Passivo di SP; Capitale Netto; Costi anticipati; Ricavi della produzione di CE; Area operativa di CE; Costi della produzione di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:03:39",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Il risconto si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; Le immobilizzazioni materiali sono oggetto di ammortamento; L'IVA sugli acquisti configura un credito",
            "SBAGLIATE": "La plusvalenza è un costo capitalizzato; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:04:55",
            "Domanda": "Collocare in Bilancio la voce RISERVA DI RIVALUTAZIONE",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Attivo di SP; Area straordinaria di CE; Area finanziaria di CE; Area patrimoniale di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:05:46",
            "Domanda": "Collocare in Bilancio la voce PROVENTI FINANZIARI",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Area tributaria di CE; Area fiscale di CE; Valore della produzione; Attivo di SP; Costi della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:07:33",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Rateo passivo; Mutuo passivo; Azioni in società controllata; Iva a credito; Cambiale attiva (tratta); Fondo TFR",
            "SBAGLIATE": "Proventi finanziari; Quota TFR; Fondo ammortamento; Risconto attivo; Oneri finanziari",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:09:02",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Interessi passivi su mutuo; Quota TFR; Esistenze iniziali di materie; Perdita su crediti; Costo del venduto",
            "SBAGLIATE": "Plusvalenza; Accantonamento a riserva di rivalutazione; Incremento magazzino prodotti finiti; Fondo ammortamento impianto",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:09:43",
            "Domanda": "I crediti v/soci, negli IAS-IFRS, si espongono tra le voci del Capitale Netto",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:10:01",
            "Domanda": "La voce Avviamento è un valore economico",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:11:48",
            "Domanda": "Quali delle seguenti voci sono VALORI ECONOMICI",
            "GIUSTE": "Capitale sociale; Utile es. precedente; Brevetto; Oneri finanziari; Riserva legale; Risconto passivo",
            "SBAGLIATE": "IVA sulle vendite; Obbligazioni emesse",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:12:45",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Svalutazione crediti; Brevetti; Imposte di competenza",
            "SBAGLIATE": "Acconti da clienti; IVA sugli acquisti; Rateo attivo; Risconto passivo; Fondo TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:13:36",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Patrimonio netto",
            "SBAGLIATE": "Costo del venduto; Passività correlate da attività cessate; Area fiscale di CE; Nessuna di queste",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/12/2020 16:14:56",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Mutuo passivo; Obbligazioni in portafoglio; Cassa; Erario C/IVA; Prestito obbligazionari",
            "SBAGLIATE": "Proventi finanziari; Risconto passivo; Capitale sociale; Riserva legale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:43:05",
            "Domanda": "Collocare in Bilancio la voce ANTICIPO DA CLIENTI",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Area straordinaria; Valore della produzione; Capitale Netto; Costi della produzione di C.E.; Attivo di SP; Costi operativi di C.E.",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:44:20",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Salari e stipendi; Oneri finanziari; Svalutazione crediti",
            "SBAGLIATE": "Riserva sovrapprezzo azioni; Fondo ammortamento impianto; Incremento magazzino prodotti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:44:47",
            "Domanda": "La voce AVVIAMENTO è un costo pluriennale",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:45:41",
            "Domanda": "Quali delle seguenti voci sono RICAVI",
            "GIUSTE": "Risconto passivo",
            "SBAGLIATE": "Rateo Attivo; Rateo passivo; Materie in magazzino; Risconto attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:47:45",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Il reddito di esercizio è la differenza tra i costi ed i ricavi di un periodo amministrativo",
            "SBAGLIATE": "L'IVA sulle vendite è IVA a credito; Il fondo TFR è un fondo rischi; La minusvalenza è ricavo straordinario; Il risconto si riferisce ad un costo o un ricavo a manifestazione finaziaria nell'esercizio successivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:48:27",
            "Domanda": "L'indice S (analisi di bilancio) indica l'importanza dell'area fiscale e straordinaria",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:49:34",
            "Domanda": "Quali delle seguenti voci sono VALORI FINANZIARI",
            "GIUSTE": "Cassa; Fondo TFR; Obbligazioni acquistate; Debiti v. banca; IVA a credito",
            "SBAGLIATE": "Plusvalenza; Interessi passivi; Quota TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:50:15",
            "Domanda": "Collocare in Bilancio la voce Proventi finanziari",
            "GIUSTE": "Area finanziaria di CE",
            "SBAGLIATE": "Valore della produzione; Costi della produzione; Area tributaria di CE; Attivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:51:28",
            "Domanda": "Collocare in Bilancio la voce RATEO relativo ad un ricavo di competenza",
            "GIUSTE": "Attivo di SP",
            "SBAGLIATE": "Non viene inserito in Bilancio; Capitale Netto; Costi della produzione di CE; Ricavi della produzione di CE; Area Operativa di CE; Passivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:52:26",
            "Domanda": "Collocare in Bilancio la voce RISERVA STRAORDINARIA",
            "GIUSTE": "Capitale Netto",
            "SBAGLIATE": "Attivo di SP; Passivo di SP; Area patrimoniale di CE; Area straordinaria di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:53:44",
            "Domanda": "Collocare in Bilancio la voce RISERVA DI VALUTAZIONE",
            "GIUSTE": "Nessuna delle altre",
            "SBAGLIATE": "Area straordinaria di CE; Attivo di SP; Area finanziaria di CE; Passivo di SP; Area patrimoniale di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 10:56:08",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "Le immobilizzazioni finaziarie non sono oggetto di ammortamento; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi del periodo",
            "SBAGLIATE": "La riserva statutaria è prevista dall'atto costitutivo; L'IVA sulle vendite configura un credito; Il RATEO si riferisce ad un costo o ricavo a manifestazione finanziaria già avvenuta; La plusvalenza è un costo capitalizzato",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:00:35",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Capitale Netto",
            "SBAGLIATE": "Passivo di SP; Area straordinaria di CE; Attivo di SP; Area finanziaria di CE; Area patrimoniale di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:01:36",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Salari e stipendi; Oneri finaziari; Svalutazione crediti;",
            "SBAGLIATE": "Riserva sovrapprezzo azioni; Fondo ammortamento impianto; Incremento magazzino prodotti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:02:56",
            "Domanda": "Collocare in Bilancio la voce INCREMENTO MAGAZZINO MATERIE (RF > EI)",
            "GIUSTE": "Costi della produzione con segno -",
            "SBAGLIATE": "Costi della produzione con segno +; Valore della produzione con segno +; Attivo circolante di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:03:46",
            "Domanda": "Quali delle seguenti voci sono COSTI DI ESERCIZIO",
            "GIUSTE": "Esistenze iniziali di materie; Interessi passivi su mutuo; Quota TFR",
            "SBAGLIATE": "Nessuna delle altre",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:05:08",
            "Domanda": "Quali dei seguenti è un valore finanziario",
            "GIUSTE": "Crediti di finanziamento; Debiti di finanziamento; IVA sugli acquisti; IVA sulle vendite; Assegno bancario",
            "SBAGLIATE": "Oneri finanziari; Proventi finaziari",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:06:33",
            "Domanda": "Un RATEO è",
            "GIUSTE": "Un valore di SP; Un valore finanziario",
            "SBAGLIATE": "Un valore di Conto Economico; Un valore con manifestazione finanziaria già avvenuta",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:08:37",
            "Domanda": "La quota di ammortamento",
            "GIUSTE": "è un costo di competenza; è un valore economico di reddito negativo",
            "SBAGLIATE": "rappresenta il denaro che viene recuperato nell'esercizio; figura nello Stato Patrimoniale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:09:49",
            "Domanda": "Collocare in Bilancio la voce ΔMagazzino Prodotti Finiti > 0",
            "GIUSTE": "Valore della produzione",
            "SBAGLIATE": "Costi della produzione; Area patrimoniale; Rimanenze di magazzino in SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:10:50",
            "Domanda": "Quali dei seguenti è un costo di Conto Economico",
            "GIUSTE": "Interessi su mutuo v. banca; Minusvalenza",
            "SBAGLIATE": "Fatturato; Impianto; Brevetto; Plusvalenza",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:11:42",
            "Domanda": "Collocare in Bilancio il costo elementare relativo ad un Fabbricato ad uso industriale",
            "GIUSTE": "Area caratteristica di CE",
            "SBAGLIATE": "Attivo circolante; Attivo Fisso; Area fiscale di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:12:14",
            "Domanda": "Sono obbligate a redigere il Bilancio di esercizio solo le società",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:13:17",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Plusvalenza; Interessi attivi su obbligazioni in portafoglio; Fitto attivo",
            "SBAGLIATE": "Brevetto; Risconto attivo; Oneri finanziari; Rateo passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:14:23",
            "Domanda": "Quali delle seguenti voci sono VALORI ECONOMICI",
            "GIUSTE": "Riserva statutaria; Capitale sociale; Perdita di esercizio; Avviamento",
            "SBAGLIATE": "Fondo imposte; Rateo passivo; Obbligazioni emesse; IVA sulle vendite",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:14:49",
            "Domanda": "Il COSTO DEL VENDUTO corrisponde al valore aggiunto",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:15:16",
            "Domanda": "I principali IAS-IFRS sono obbligatori per tutte le società",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:16:27",
            "Domanda": "Collocare in Bilancio la voce CAMBIALE RICEVUTA (a saldo di un credito)",
            "GIUSTE": "Attività correnti",
            "SBAGLIATE": "Area finaziaria di CE; Attività destinate a cessare; Passivo di SP; Area caratteristica di CE",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:18:34",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "La PLUSVALENZA è un valore economico",
            "SBAGLIATE": "Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; L'IVA sulle vendite configura un credito; il VALORE DELLA PRODUZIONE è il valore dei prodotti venduti; La riserva LEGALE deriva da versamenti dei soci; Il RATEO ATTIVO si riferisce ad un costo a manifestazione finanziaria già avvenuta",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:19:23",
            "Domanda": "Collocare in Bilancio la voce ANTICIPO DA CLIENTI",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Attivo di SP; Costi della produzione; Area accessoria; Area straordinaria di CE; Valore della produzione",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:21:22",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Marchio; Ammortamento",
            "SBAGLIATE": "Vendita prodotti; Anticipi a fornitori; Erario C/IVA; Rateo Attivo; Rateo passivo; Fondo TFR",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:21:50",
            "Domanda": "Il COSTO DEL VENDUTO corrisponde al valore aggiunto",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:23:11",
            "Domanda": "Quali delle seguenti voci sono COSTI",
            "GIUSTE": "Marchio; Ammortamento",
            "SBAGLIATE": "Erario C/IVA; Fondo TFR; Anticipi a fornitori; Rateo Attivo; Vendita prodotti; Rateo Passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:23:46",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Plusvalenza",
            "SBAGLIATE": "Brevetto; Oneri finaziari; Risconto attivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:25:14",
            "Domanda": "Quali delle seguenti voci sono RICAVI DI ESERCIZIO",
            "GIUSTE": "Plusvalenza; Fitto attivo; Interessi attivi su obbligazioni in portafoglio",
            "SBAGLIATE": "Brevetto; Oneri finanziari; Risconto attivo; Rateo passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:26:06",
            "Domanda": "Collocare in Bilancio la voce RISERVA LEGALE",
            "GIUSTE": "Patrimonio netto",
            "SBAGLIATE": "Area fiscale di CE; Costo del venduto; Passività correlate ad attività cessate; Nessuna di queste",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:26:46",
            "Domanda": "Quali delle seguenti voci sono VALORI FINAZIARI",
            "GIUSTE": "Erario C/IVA",
            "SBAGLIATE": "Riserva legale; Capitale sociale",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:29:58",
            "Domanda": "Quali delle seguenti voci sono VALORI FINAZIARI",
            "GIUSTE": "Erario C/IVA; Cassa; Mutuo Passivo; Obbligazioni in portafoglio; Prestito obbligazionario",
            "SBAGLIATE": "Riserva legale; Capitale sociale; Proventi Finaziari; Risconto passivo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:31:08",
            "Domanda": "Collocare in Bilancio la voce ANTICIPO DA CLIENTI",
            "GIUSTE": "Passivo di SP",
            "SBAGLIATE": "Costi della produzione; Area straordinaria di CE; Valore della produzione; Area accessoria; Attivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:32:05",
            "Domanda": "Collocare in Bilancio la voce CAMBIALI E RICEVUTA (a saldo di un credito)",
            "GIUSTE": "Attività correnti",
            "SBAGLIATE": "Attività destinate a cessare; Area finaziaria di CE; Area caratteristica di CE; Passivo di SP",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:34:38",
            "Domanda": "Quali delle seguenti affermazioni sono VERE",
            "GIUSTE": "La PLUSVALENZA è un valore economico",
            "SBAGLIATE": "L'IVA sulle vendite configura un credito; Il reddito di esercizio è la differenza tra tutti i costi e tutti i ricavi; La riserva LEGALE deriva da versamenti dei soci; Il RATEO ATTIVO  si riferisce ad un costo a manifestazione finanziaria già avvenuta; Il VALORE DELLA PRODUZIONE è il valore dei prodotti venduti",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/15/2020 11:35:49",
            "Domanda": "Quali delle seguenti voci sono VALORI ECONOMICI",
            "GIUSTE": "Riserva statutaria; Capitale Sociale; Perdita di esercizio; Avviamento",
            "SBAGLIATE": "Fondo imposte; IVA sulle vendite; Rateo passivo; Obbligazioni emesse",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:16:33",
            "Domanda": "Il tempo di Recupero (PBT) si usa in situazioni:",
            "GIUSTE": "Di crisi di liquidità aziendale; Di alta incertezza",
            "SBAGLIATE": "Di mancanza di conoscenza del costo opportunità del capitale; Di assenza di rischio",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:18:22",
            "Domanda": "Nella valutazione degli investimenti è utile ragionare al lordo delle imposte se:",
            "GIUSTE": "L'impresa non ha utili; L'impresa non si occupa di politiche fiscali ad esempio se è una sussidiaria e queste sono gestite a livello di holding",
            "SBAGLIATE": "Adotto il criterio del tempo di recupero; Non ci sono impianti da ammortizzare",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:18:52",
            "Domanda": "Il Margine Operativo Lordo riguarda solo l'Area Caratteristica",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:20:52",
            "Domanda": "Un investimento in un progetto con VAN=10 fa si che il valore netto dell'azienda aumenti a 110; L'azienza  non ha effettuato altri investimenti. Posso concludere che:",
            "GIUSTE": "Gli azionisti hanno avuto un rendimento del 10%",
            "SBAGLIATE": "Non ho abbastanza informazioni per rispondere; Gli azionisti hanno avuto un rendimento del 9.09%; Gli azionisti hanno avuto un rendimento del 100%",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:22:48",
            "Domanda": "I flussi di cassa differenziali per un progetto di investimento sono di -63, 12, 18, 22, 22 all'istante T0 e nei 4 anni successivi rispettivamente. Il tempo di recupero sarà pari a:",
            "GIUSTE": "3.5 anni",
            "SBAGLIATE": "4.5 anni; 4 anni; 3 anni",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:24:52",
            "Domanda": "Un progetto ha un VAN > 0 con costo opportunità del capitale pari ad X. Posso concludere che l'ivestimento:",
            "GIUSTE": "Remunera i proprietari dell'azienda almeno di X%;Permette di recuperare il capitale iniziale; Purché gli azionisti abbiano accesso al mercato dei capitali saranno tutti d'accordo per intraprenderlo",
            "SBAGLIATE": "Crea valore per i clienti;",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:26:18",
            "Domanda": "Nel metodo CAPM il coefficiente di rischiosità sistematica Beta rappresenta:",
            "GIUSTE": "La covarianza dei rendimenti dell'impresa con il mercato azionario",
            "SBAGLIATE": "Il rendimento atteso del mercato azionario; Il rendimento offerto da investimenti privi di richio; Un premio per il rischio di mercato",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "5/31/2020 11:27:23",
            "Domanda": "Il coefficiente di capitalizzazione indica:",
            "GIUSTE": "Il valore futuro di un capitale in base al tasso di interesse",
            "SBAGLIATE": "Il tasso di remunerazione richiesto dagli azionisti; Il costo opportunità del capitale; Nessuna delle precedenti",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 11:50:04",
            "Domanda": "Valutando un investimento nel netto delle imposte(aliquota 40%), se i miei ricavi aumentassero di 1€, i miei flussi di cassa varierebbero di:",
            "GIUSTE": "60 centesimi in entrata",
            "SBAGLIATE": "40 centesimi in uscita; 40 centesimi in entrata; 60 centesimi in uscita",
            "Motivazione": "FC_t = (Delta Ricavi - Delta Costi)(1 - tau) {+ ... (Delta Ammortamenti + Delta Accantonamenti)*tau}; variano in positivo di +1 quindi +(1 - 0,4) => + 0,6 in entrata",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 11:54:01",
            "Domanda": "A differenza del metodo dell’indice di rendimento, il metodo del VAN:",
            "GIUSTE": "Gode della proprietà additiva",
            "SBAGLIATE": "Riconosce il valore temporale del denaro;Nessuna delle precedenti;Dipende esclusivamente dai flussi di cassa stimati e dal costo opportunità del capitale;Tutte le precedenti",
            "Motivazione": "VAN(X-Y)>0 => VAN(X)>VAN(Y)",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 11:55:46",
            "Domanda": "Nella metodologia SROI, per stakeholder si intende",
            "GIUSTE": "Chiunque viva il cambiamento o influenzi l’attività sia positivamente che negativamente",
            "SBAGLIATE": "Solo chi subisce gli impatti dell’investimento;Solo chi riceve benefici dall’investimento;Solo chi partecipa alle attività dell’investimento",
            "Motivazione": "In una città, tutti gli abitanti; pure il tuo pusher preferito",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 11:56:43",
            "Domanda": "Nello SROI il deadweight rappresenta",
            "GIUSTE": "La parte di outcome che non si può imputare in modo differenziale all’investimento",
            "SBAGLIATE": "La parte del problema che viene spostato ma non risolto;La parte di outcome che non si è effettivamente realizzata;Gli outcome negativi dell’investimento",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 11:57:47",
            "Domanda": "La flessibilità proattiva a seguito di un investimento riguarda l’ampliamento di:",
            "GIUSTE": "Insieme di cambiamenti economicamente possibili",
            "SBAGLIATE": "Gamma dei prodotti offerti;Impiego delle risorse;Configurazioni possibili della produzione",
            "Motivazione": "Analisi Decisionale",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:01:29",
            "Domanda": "Quali di queste voci producono flussi di cassa da considerare per la valutazione degli investimenti ragionando al netto delle imposte?",
            "GIUSTE": "Costi differenziali produzione;Incassi per cessione impianti relativi all’investimento;Ricavi differenziali da vendite di prodotti e servizi",
            "SBAGLIATE": "Ammortamento degli impianti acquistati per l’investimento;Oneri finanziari differenziali",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:03:04",
            "Domanda": "Il coefficiente di capitalizzazione indica [(1+i), ndr]",
            "GIUSTE": "Il valore futuro di un capitale in base al tasso di interesse",
            "SBAGLIATE": "Il tasso di remunerazione richiesto dagli azionisti;Il costo opportunità del capitale;Nessuna delle precedenti",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:04:51",
            "Domanda": "Nel caso di investimento uni-periodale non dovrò intraprendere investimenti se:",
            "GIUSTE": "Il tasso di ritorno è minore del costo opportunità del capitale",
            "SBAGLIATE": "Nessuna delle precedenti;Il tasso di ritorno è uguale al costo opportunità del capitale;Il tasso di ritorno è maggiore del costo opportunità del capitale",
            "Motivazione": "perché se tau < i allora (tau - i) < 0 e quindi VAN < 0 ",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:05:47",
            "Domanda": "Se il Margine di Struttura Secondario è negativo significa che parte dell’attivo fisso è finanziata con debiti a breve termine",
            "GIUSTE": "VERO",
            "SBAGLIATE": "FALSO",
            "Motivazione": "MOD 1 - Analisi",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:07:40",
            "Domanda": "Quali delle seguenti sono vere",
            "GIUSTE": "Il ROT è un indice di rotazione;q dipende anche dagli utili non distribuiti;Il ROS influenza il ROI",
            "SBAGLIATE": "Il ROE non è influenzato da S;Il margine di tesoreria dipende dal magazzino",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:09:25",
            "Domanda": "Il costo opportunità del capitale nella prospettiva dell’azionista rappresenta",
            "GIUSTE": "La remunerazione minima che desidera l’azionista",
            "SBAGLIATE": "Il rendimento offerto da investimenti privi di rischio;Il rischio del progetto di investimento;Il rendimento atteso del mercato azionario",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/11/2020 12:10:43",
            "Domanda": "Collocare in bilancio la voce relativa ad una fattura da un fornitore",
            "GIUSTE": "Mezzi di terzi Operativi",
            "SBAGLIATE": "Area caratteristica di CE:Attivo SP;Capitale Netto;Mezzi di terzi finanziari",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:51:31",
            "Domanda": "In quali di questi casi mi trovo di fronte ad un investimento obbligato",
            "GIUSTE": "Ho un impianto che non è a norma secondo le nuove norme ambientali",
            "SBAGLIATE": "Ho un impianto con costi di manutenzione molto elevati;Nessuna delle precedenti;Ho un impianto obsoleto da un punto di vista tecnologico",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:51:57",
            "Domanda": "Il metodo del VAN permette di confrontare progetti con diversa durata, diverso importo e livelli di rischio differenti?",
            "GIUSTE": "Vero",
            "SBAGLIATE": "Falso",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:53:06",
            "Domanda": "Sto valutando un investimento per creare una nuova linea di prodotti che sono più performanti rispetto a quello attualmente in produzione. Quali ipotesi dovrei fare sul caso differenziale di investimento?",
            "GIUSTE": "Le vendite del vecchio prodotto andranno a diminuire per via dell’introduzione del nuovo prodotto",
            "SBAGLIATE": "Le vendite del nuovo prodotto saranno maggiori di quelle del vecchio prodotto;Le vendite del vecchio prodotto saranno maggiori di quelle del nuovo prodotto;Le vendite del nuovo prodotto avranno un andamento esponenziale",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:54:04",
            "Domanda": "Con il termine fonte si intende",
            "GIUSTE": "I mezzi di terzi + il capitale di rischio",
            "SBAGLIATE": "I mezzi di terzi;Gli obblighi che l’azienda ha contrattato con i propri fornitori",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:54:27",
            "Domanda": "L’EBIT riguarda l’area caratteristica e l’area finanziaria",
            "GIUSTE": "Falso",
            "SBAGLIATE": "Vero",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:55:13",
            "Domanda": "Un’impresa investe 10.000€ in un investimento che dopo un anno ne rende 11.000 e finanzia l’investimento per il 70% con un prestito di un anno ad un tasso del 5%. Secondo la logica dell’azionista qual è il flusso di cassa netto al primo anno?",
            "GIUSTE": "3650€",
            "SBAGLIATE": "11.000€;3.000€;4.000€;10.650€",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:57:19",
            "Domanda": "I principi guida della finanza aziendale riguardano",
            "GIUSTE": "Investimenti, finanziamenti, dividendi",
            "SBAGLIATE": "Investimenti, finanziamenti, flussi di cassa;Investimenti, finanziamenti, ammortamenti;Investimenti, dividendi, ammortamenti",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:58:11",
            "Domanda": "Ho un investimento che mi costa 4.000€ e alla fine del primo anno mi restituiscono 525.000€ attualizzati. Il ritorno che offre agli investitori è",
            "GIUSTE": "31.3%",
            "SBAGLIATE": "Non ho abbastanza informazioni per rispondere;23.8%",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:59:18",
            "Domanda": "Nella prospettiva dell’azionista, se un’azienda ha un coefficiente di rischiosità simmetrica di 2, il tasso di rendimento privo di rischio è del 7% ed il premio per il rischio del mercato è l’8%, calcola il ritorno atteso degli investitori",
            "GIUSTE": "N.A.",
            "SBAGLIATE": "10%;9%;8%;2%",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 19:59:54",
            "Domanda": "Per ricavo di esercizio si intende",
            "GIUSTE": "Una variazione economica di reddito positiva",
            "SBAGLIATE": "Una variazione economica positiva;Una vendita di prodotti finiti;Gli incassi effettuati nel periodo",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/13/2020 20:00:58",
            "Domanda": "Considerare un investimento per un impianto che creerà una nuova linea di prodotti di produzione in azienda da valutare secondo il criterio del VAN al netto delle imposte. I flussi di cassa differenziali da imputare al progetto includono",
            "GIUSTE": "L’acquisto del macchinario",
            "SBAGLIATE": "Gli stipendi degli operai che si trasferiscono dalla vecchia alla nuova linea di produzione;I costi di gestione del vecchio impianto che rimane in funzione;I costi R&S per determinare l’impianto migliore da acquistare",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 20:01:56",
            "Domanda": "Quali delle seguenti affermazioni sono vere",
            "GIUSTE": "Il ROS influenza il ROI;q dipende anche dagli utili non distribuiti;Il ROT è un indice di rotazione",
            "SBAGLIATE": "Il ROE non è influenzato da S;Il margine di tesoreria dipende dal magazzino",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/13/2020 20:02:48",
            "Domanda": "Se un investimento i cui flussi di cassa netti annuali cambiano segno nel tempo per più di due periodi",
            "GIUSTE": "Non potrò calcolare il TIR",
            "SBAGLIATE": "Il tempo di recupero è il metodo migliore per valutare l’investimento;L’indice di rendimento sarà sicuramente inferiore del VAN;Tutte le precedenti;Sicuramente il VAN sarà negativo",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/13/2020 20:03:40",
            "Domanda": "Se il valore delle vendite (V) aumenta, qual’è l’effetto del ROS",
            "GIUSTE": "Dipende dal comportamento dei costi",
            "SBAGLIATE": "Il ROS diminuisce;Dipende dal ROT;Dipende dalla liquidità",
            "Modulo": "1"
        },
        {
            "Informazioni cronologiche": "6/13/2020 20:04:13",
            "Domanda": "Se il tempo di recupero di un progetto, con tutti i flussi di cassa netti positivi tranne l’investimento iniziale è di X anni, il tempo di recupero attualizzato sarà",
            "GIUSTE": "Superiore ad X anni",
            "SBAGLIATE": "Uguale ad X anni;Inferiore ad X anni",
            "Modulo": "3"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:00:59",
            "Domanda": "Collocare in bilancio i marchi e dire se vengono ammortizzati o no.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:01:35",
            "Domanda": "Perché i marchi non acquisiti non figurano nel bilancio?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:02:25",
            "Domanda": "Parlare dei 10 tipi di innovazione e dire di che tipo di innovazione si tratta nel progetto",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:02:50",
            "Domanda": "A cosa serve e come è fatta la matrice sociometrica delle relazioni?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:03:21",
            "Domanda": "Che differenze ci sono tra Amministratore Delegato e Amministratore Unico?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:03:51",
            "Domanda": "Che differenze ci sono tra S.p.a e S.n.c.?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:04:36",
            "Domanda": "Dire cosa è la value proposition",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:05:36",
            "Domanda": "Che tipo di ragionamenti vanno fatti nella valutazione degli investimenti?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:05:54",
            "Domanda": "Come funziona il processo di ammortamento?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale",
            "Frequenza": "2"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:06:14",
            "Domanda": "Qual è la funzione finanziaria dell'ammortamento?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:06:32",
            "Domanda": "Spiegare cosa è un processo e fare un esempio",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:06:50",
            "Domanda": "Cos'è il margine di contribuzione?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale",
            "Frequenza": "2"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:08:36",
            "Domanda": "Quali sono le differenze tra società di persone e società di capitali? Quali sono le società di un tipo e quali quelle dell'altro?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:09:12",
            "Domanda": "Quali sono le differenze tra S.r.l. e S.p.a.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 13:09:32",
            "Domanda": "Quali sono le differenze tra VAN e SROI?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:54:01",
            "Domanda": "A cosa serve il modello CVR?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:54:19",
            "Domanda": "Cos'è il principio di competenza?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:54:52",
            "Domanda": "Parlare della struttura divisionale e farne uno schema. Quali sono i vantaggi e quali gli svantaggi?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:55:15",
            "Domanda": "Cos'è una struttura ibrida?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:56:08",
            "Domanda": "Parlare delle tipologie di azioni speciali",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:56:39",
            "Domanda": "Illustrare le differenze tra azioni e obbligazioni",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:57:05",
            "Domanda": "Quali sono le differenze tra S.n.c. e S.r.l.?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:57:35",
            "Domanda": "Quali sono i passi principali per il calcolo dello SROI?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:57:57",
            "Domanda": "Quali sono le differenze tra costi diretti e indiretti?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:58:14",
            "Domanda": "Quali sono le differenze tra rateo e risconto?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:58:58",
            "Domanda": "Quando la regola del VAN mette d'accordo tutti gli investitori? (Spiegare con uno schema)",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:59:21",
            "Domanda": "Parlare dei due tipi di capitalizzazione e scriverne le formule.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 16:59:45",
            "Domanda": "Spiegare la struttura matrice e illustrare l'organigramma.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:00:05",
            "Domanda": "Illustrare i vantaggi e gli svantaggi del PBT.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:00:24",
            "Domanda": "Perché il denaro cambia valore nel tempo?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:00:40",
            "Domanda": "Parlare delle società di capitale.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:00:59",
            "Domanda": "Quali sono le caratteristiche delle azioni di risparmio?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:01:17",
            "Domanda": "Descrivere ROI, ROE e ROD.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:01:46",
            "Domanda": "Parlare della mappatura dei modelli di businnes.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale",
            "Frequenza": "2"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:02:12",
            "Domanda": "Cosa sono deadweight e spiazzamento nello SROI?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:02:49",
            "Domanda": "Quando vale la pena segmentare i clienti? (Businnes model canvas)",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:03:13",
            "Domanda": "Perché un'impresa ragiona in termini di modello di businness?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:11:31",
            "Domanda": "Ilustrare le caratteristiche di una S.p.a.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 17:13:11",
            "Domanda": "Parlare dei vari tipi di azioni.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 21:38:52",
            "Domanda": "Parlare della piramide del ROE",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 21:39:07",
            "Domanda": "Descrivere l'effetto leva",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 21:39:31",
            "Domanda": "Descrivere cosa sono l'interesse semplice e l'interesse composto.",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 21:40:45",
            "Domanda": "Cosa sono i costi fissi e i costi variabili?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        },
        {
            "Informazioni cronologiche": "6/15/2020 21:41:07",
            "Domanda": "Cos'è il break even point?",
            "GIUSTE": ";",
            "SBAGLIATE": ";",
            "Modulo": "Orale"
        }
    ]
}`;



var tutteDomande = JSON.parse(data);
const NOME_SPREAD_SHEET = "Domande e risposte";

// Variabili che rappresentano elementi della pagina html
var contenitoreQuiz, domanda, risposte, prossima, fine, verifica, messaggioFinale, cambiaSfondo,
    timestampDomanda, timer, contatore, orologio, numeroDomanda, randomSwitch, inputInizio, labelInizio,
    copiaTimestamp, divTimestamp, contenitoreSelezioneModuli, divModuli, modal, bottonePopup;

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

// Il main e' leggermente grosso
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
    if (getCookie("visitata") !== "true") {
        bottonePopup.click();
        // Setto un cookie per mostrare il banner se l'utente non ha visitato la pagina negli ultimi "giorni" giorni
        var giorni = 10;
        setCookie("visitata", true, giorni);
    }

    // Inizializzo i contatori delle domande
    contatoreTotale = 0;
    contatoreGiuste = 0;

    // Riempio sequenzialmente ordineDomandeDaFare
    for (var i in tutteDomande[NOME_SPREAD_SHEET]) {
        ordineDomandeDaFare.push(i);
    }

    // Mischio ordineDomandeDaFare cosi' da avere domande sempre in ordine diverso
    // mischia(ordineDomandeDaFare);

    selezionaModuliEsistenti();
    mostraScletaModulo();

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
    inputInizio.addEventListener("keyup", () => {
        indiceDomandaCorrente = inputInizio.value;
    })
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

} //////////////////////////////////////////////////////////////////////////////////////////FINE MAIN

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
    divTimestamp.style.opacity = "100%";

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
        inputInizio.style.opacity = "0%";
        labelInizio.style.opacity = "0%";
        mischia(ordineDomandeDaFare);
    } else {
        inputInizio.style.opacity = "100%";
        labelInizio.style.opacity = "100%";
        indiceDomandaCorrente = inputInizio.value;
    }
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
            nuovaOpzione.addEventListener("change", (evt)=>{
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
    numeroDomanda.textContent = String(indice);
    domanda.textContent = getDomanda(indice).replace(/^\s+/g, ''); // Tolgo le righe vuote e gli spazi all'izio e alla fine
    arrayGiuste = getGiuste(indice);
    arraySbagliate = getSbagliate(indice);
    arrayRisposte = arrayGiuste.concat(arraySbagliate);
    mischia(arrayRisposte);

    if (getModulo(indice) == "Orale") {
        verifica.disabled = true;
        var spanFrequenza = document.createElement("span");
        spanFrequenza.classList.add("frequenza");
        var v = " volta";
        if ( getFrequenza(indice) > 1) {
            v = " volte";
        }
        var br = document.createElement("br");
        domanda.appendChild(br);
        spanFrequenza.textContent = "Questa domanda è stata fatta circa " + getFrequenza(indice) + v;
        domanda.appendChild(spanFrequenza);
    }
    else {
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

function getDomanda(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["Domanda"]);
}

function getGiuste(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["GIUSTE"].split(";"));
}

function getSbagliate(indice) {
    return (tutteDomande[NOME_SPREAD_SHEET][indice]["SBAGLIATE"].split(";"));
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

function getFrequenza(indice) {
    if (tutteDomande[NOME_SPREAD_SHEET][indice].hasOwnProperty("Frequenza")) {
        return (tutteDomande[NOME_SPREAD_SHEET][indice]["Frequenza"]);
    } else {
        return "1"; // Per quelli per cui non e' specificato nessun modulo
    }
}