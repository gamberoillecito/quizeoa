function AjaxManager(){}

AjaxManager.getAjaxObject = function(){
		var xmlHttp = null;
		try { 
			xmlHttp = new XMLHttpRequest(); 
		} catch (e) {
			try { 
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE (recent versions)
			} catch (e) {
				try { 
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE (older versions)
				} catch (e) {
					xmlHttp = null; 
				}
			}
		}
		return xmlHttp;
	}

function httpGet(url) {

	return new Promise(function(resolve, reject) {
		var httpReq = new XMLHttpRequest();
		httpReq.onreadystatechange = function() {
			var data;
			if (httpReq.readyState == 4) {
				if (httpReq.status == 200) {
					data = JSON.parse(httpReq.responseText);

					resolve(data);
				} else {
					reject(new Error(httpReq.statusText));
				}
			}
		};
		httpReq.open("GET", url, true);
		httpReq.send();
	});
}

function getTableData(tableUrl, fail) {
	var tableJSON = {};
	var tableIdRegex = "\/spreadsheets\/d\/([a-zA-Z0-9-_]+)";
	var tableId = tableUrl.match(tableIdRegex)[1];
	var url = `https://spreadsheets.google.com/feeds/cells/${tableId}/1/public/full?alt=json`;

	var mypromise = httpGet(url);
	// mypromise.then(parseTableJSON, function(e){console.log("errore"); console.log(e);});
	mypromise.then(parseTableJSON, fail);
	// parseTableJSON(JSON.stringify(tableJSON));
}

// parsa il json ottenuto con getTableData nella stessa forma di quello ottenuto da http://beautifytools.com/excel-to-json-converter.php
function parseTableJSON(obj) {
	var data = obj.feed.entry;
	var title = obj.feed.title.$t;
	var final = {};
	final[title] = [];

	var primaRiga = riga(data[0]);
	var primaColonna = colonna(data[0]);

	var intestazioni = {}; // Le chiavi sono il numero della colonna e il valore il nome dell'intestazione

	var indiceUltimaIntestazione = 0; // Salvo l'indice dell'ultima intestazione all'interno di data per escludere le intestazioni in final[title]
	// Prendo tutte le intestazioni (i campi che stanno nella prima riga)
	for (var i = 0; riga(data[i]) == primaRiga; i++) {
		intestazioni[i + primaColonna] = contenuto(data[i]);
		indiceUltimaIntestazione = i;
	}

	// Per ogni riga della tabella creo un nuovo oggetto all'interno di final[title]
	var rigaPrec = primaRiga;
	for (var i = indiceUltimaIntestazione + 1; i < data.length; i++) {
		var d = data[i];
		if (riga(d) != rigaPrec) {
			final[title].push({});
		}
		final[title][final[title].length - 1][intestazioni[colonna(d)]] = contenuto(d);
		rigaPrec = riga(d);
	}

	function riga(element) {
		return parseInt(element.gs$cell.row);
	}
	function colonna(element) {
		return parseInt(element.gs$cell.col);
	}
	function contenuto(element) {
		return element.gs$cell.$t;
	}
	tutteDomande = final;
	main();

}


// function main() {
// 	var url = "https://docs.google.com/spreadsheets/d/1mRkK6HeFk0sID-BINAgSeubjUrkHBJY9cjApK8N4VYc/edit#gid=0";
// 	getTableData(url);
// }