Oskari.registerLocalization(
{
    "lang": "sv",
    "key": "coordinatetransformation",
    "value": {
        "title": "Coordinateconversion",
        "tile": {
            "title": "Coordinateconversion"
        },
        "flyout": {
            "title":"Coordinateconversion",
            "coordinateSystem": {
                "title": "Koordinaattijärjestelmän tiedot",
                "input": {
                    "title": "Från-system"
                },
                "output": {
                    "title": "Till-system"
                },
                "noFilter": "Mikä tahansa",
                "geodeticDatum": {
                    "label": "Geodetiskt datum"
                },
                "coordinateSystem":{
                    "label": "Koordinatsystem",
                    "proj2D": "Suorakulmainen 2D (Taso)",
                    "proj3D": "Suorakulmainen 3D",
                    "geo2D": "Maantieteellinen 2D",
                    "geo3D": "Maantieteellinen 3D"
                },
                "mapProjection":{
                    "label": "Kartprojektionssystem"
                },
                "geodeticCoordinateSystem":{
                    "label": "Geodetiskt koordinatsystem",
                    "choose": "Valitse",
                    "kkj": "KKS zon {zone, number}",
                    "ykj": "KKS zon 3 / ?YKJ?"
                },
                "heightSystem":{
                    "label": "Höjdsystemet",
                    "none": "Ei mitään"
                }
            },
            "coordinateTable": {
                "input": "Muunnettavat koordinaatit",
                "output": "Tuloskoordinaatit",
                "north":"Pohjois-koordinaatti [m]",
                "east":"Itä-koordinaatti [m]",
                "lat":"Leveysaste",
                "lon":"Pituusaste",
                "elevation": "Korkeus [m]",
                "geoX":"Geosentrinen X [m]",
                "geoY":"Geosentrinen Y [m]",
                "geoZ":"Geosentrinen Z [m]",
                "ellipseElevation":"Ellipsoidinen korkeus [m]",
                "rows": "Rader",
                "clearTables": "Haluatko tyhjentää taulukot?",
                "confirmClear": "Haluatko tyhjentää taulukot?"
            },
            "transform": {
                "warnings": {
                    "title": "Huomio!",
                    "3DTo2D": "Valitsemissasi lähtötiedoissa on mukana korkeusarvoja, mutta tulostiedoissa ei. Tuloskoordinaatteihin ei siis tule korkeusarvoja mukaan. Haluatko jatkaa?",
                    "2DTo3D": "Valitsemissasi lähtötiedoissa ei ole korkeusarvoja, mutta tulostiedoissa on. Lähtöaineiston korkeusarvoiksi lisätään 0 ja korkeusjärjestelmäksi N2000. Haluatko jatkaa?"
                },
                "validateErrors": {
                    "title": "Virhe!",
                    "message": "Valinnoissa on puutteita tai virheitä. Ota huomioon seuraavat vaatimukset ja yritä uudelleen.",
                    "crs": "Geodeettinen koordinaattijärjestelmä pitää olla valittuna sekä lähtö- että tulostiedoissa.",
                    "sourceHeight": "Lähtötietojen korkeusjärjestelmää ei ole valittu.",
                    "targetHeight": "Tulostietojen korkeusjärjestelmää ei ole valittu.",
                    "noInputData": "Ei muunnettavia koordinaatteja.",
                    "noInputFile": "Lähtöaineiston sisältävä tiedosto pitää olla valittuna.",
                    "noFileName": "Muodostettavalle tiedostolle pitää antaa tiedostonimi.",
                    "decimalCount": "Desimaalien tarkkuus pitää olla 0 tai positiivnen kokonaisluku.",
                    "headerCount": "Otsakerivien määrä pitää olla 0 tai positiivinen kokonaisluku.",
                    "doubleComma": "Desimaali- ja koordinaattierotin eivät voi molemmat olla pilkkuja.",
                    "noFileSettings": "Tiedosto asetuksia ei ole annettu."
                },
                "responseErrors": {
                    "title": "Virhe muunnoksessa!",
                    "generic": "Koordinaattimuunnos epäonnistui...",
                    "invalid_coord": "Koordinaatti virheellinen. Tarkasta, että muunnettavat koordinaatit on oikeassa muodossa sekä geodeettinen koordinaatti- ja kokeusjärjestelmä ovat oikein.",
                    "invalid_number": "Koordinaatti virheellinen. Tarkasta..",
                    "no_coordinates": "Ei koordinaatteja",
                    "invalid_file_settings": "Invalid file settings",
                    "no_file": "No file entry",
                    "invalid_coord_length": "Tiedostossa virheellinen koordinaatti. Tarkasta, että otsakerivit, käytä tunnistetta sekä geoodeettinen koordinaatti- ja korkeusjärjestelmä ovat määritetty oikein.",
                    "invalid_coord_in_row": "Tiedostossa virheellinen koordinaatti {coordinate} rivillä {rowIndex, number}."
                },
                "responseFile": {
                    "title": "Huomio!",
                    "hasMoreCoordinates": "Lähtöaineistosta ei voida muuntaa taulukkoon yli {maxCoordsToArray, number} koordinaattia. Jos haluat muuntaa kaikki koordinaatit, käytä Vie tulokset tiedostoon -toimintoa."
                }
            }
        },
        "dataSource": {
            "title": "Koordinaattitietojen lähde",
            "confirmChange": "Muunnettavat koordinaatit tyhjennetään ja koordinaattijärjestelmän tiedot poistetaan. Haluatko jatkaa?",
            "file": {
                "label": "Tiedostosta",
                "info":  "Valitse lähtöaineiston sisältävä tiedosto ja sen asetukset.",
                "action": "Muokkaa"
            },
            "keyboard": {
                "label": "Näppäimistöltä",
                "info": "Syötä lähtötiedot Muunnettavat koordinaatit -taulukkoon.",
                "action": ""
            },
            "map": {
                "label": "Valitse sijainnit kartalta",
                "info": "Valitse yksi tai useampi piste kartalta klikkaamalla.",
                "action": "Valitse"
            }
        },
        "mapMarkers":{
            "show":{
                "title": "Näytä sijainnit kartalla",
                "info" : "Tarkastele muunnettuja koordinaatteja kartalla.",
                "errorTitle": "Virhe sijaintien näyttämisessä",
                "transformError": "Muunna koordinaatit ennen sijaintien näyttämistä kartalla.",
                "lon": "Lon",
                "lat": "Lat",
                "north": "N",
                "east": "E"
            },
            "select":{
                "title": "Näytä sijainnit kartalla",
                "info": "Valitse yksi tai useampia pisteitä kartalta klikkaamalla."
            }
        },
        "actions": {
            "convert": "Transformera",
            "clearTable": "Tyhjennä taulukot",
            "showMarkers": "Näytä sijainnit kartalla",
            "export": "Muunna tiedostoon",
            "select": "Valitse",
            "selectFromMap": "Siirry valitsemaan.",
            "cancel": "Ångra",
            "done": "Färdig",
            "ok": "Ok",
            "close": "Sulje"
        },
        "fileSettings": {
            "options": {
                "decimalSeparator": "Desimaalierotin",
                "coordinateSeparator": "Koordinaattierotin",
                "headerCount": "Otsakerivien määrä",
                "decimalCount": "Desimaalien tarkkuus",
                "reverseCoords": "Koordinaatit käänteisesti",
                "useId": "Käytä tunnistetta",
                "writeHeader": "Kirjoita otsakerivi tiedostoon",
                "useCardinals": "Käytä kardinaaleja (N,E,W,S)",
                "lineEnds": "Tulosteeseen rivin loput",
                "degreeFormat":{
                    "label": "Kulman muoto/yksikkö",
                    "degree": "Aste",
                    "gradian": "Gooni (graadi)",
                    "radian": "Radiaani"
                },
                "lineSeparator": {
                    "label": "Rivin erotin",
                    "win": "Windows / DOS",
                    "unix": "Unix",
                    "mac": "MacOS"
                },
                "delimeters":{
                    "point": "Punkt",
                    "comma": "Kommatecken",
                    "tab": "Tabulaattori",
                    "space": "Utslutning",
                    "semicolon": "Semikolon"
                }
            },
            "export": {
                "title": "Aineiston muodostaminen",
                "fileName": "Filnamn"
            },
            "import": {
                "title": "Lähtöaineiston ominaisuudet"
            }
        },
        "infoPopup": {
            "description": "Kuvaus",
            "geodeticDatum": {
                "title": "Geodetiskt datum",
                "info": "Geodeettinen datumi: datumi, joka kuvaa kaksi- tai kolmiulotteisen koordinaatiston suhdetta Maahan.",
                "listItems" : [
                    "Suhde voidaan luoda määrittelemällä joukolle pisteitä konventionaaliset koordinaattiarvot",
                    "Esimerkkejä geodeettisesta datumista ovat mm. EUREF-FIN ja kartastokoordinaattijärjestelmä."
                ]
            },
            "coordinateSystem":{
                "title": "Koordinatsystem",
                "info": "Koordinaatisto: matemaattisten sääntöjen joukko, jolla määritellään se, miten pisteille annetaan koordinaatit.",
                "listItems" : [
                    "Koordinaatisto voidaan hahmottaa koordinaattiakselien muodostamaksi mitta-akselistoksi.",
                    "Erityyppisiä koordinaatistoja ovat esimerkiksi suorakulmainen koordinaatisto, tasokoordinaatisto, napakoordinaatisto, geodeettinen koordinaatisto, pallokoordinaatisto ja lieriökoordinaatisto.",
                    "Geodesian alalla termi terrestrinen vertauskehys korvaa aiemmin käytetyn koordinaatisto-termin."
                ]
            },
            "mapProjection":{
                "title": "Kartprojektionssystem",
                "info": "Karttaprojektiojärjestelmä: joukko sääntöjä, joiden avulla määrätään, kuinka haluttu alue kuvataan joukolla karttaprojektioita",
                "listItems" : [
                    "Säännöillä voidaan esimerkiksi sitoa käytettävät karttaprojektiot ja projektiokaistat. Projektiokaistojen osalta järjestelmä voi määrittää kaistoille esimerkiksi tunnisteet, keskimeridiaanien tai -paralleelien mittakaavan, leveyden, pituuden ja päällekkäisyyden."
                ]
            },
            "geodeticCoordinateSystem":{
                "title": "Geodetiskt koordinatsystem",
                "info": "Geodeettinen koordinaattijärjestelmä: koordinaattijärjestelmä, joka perustuu geodeettiseen datumiin.",
                "listItems" : [
                    "Koordinaattijärjestelmä: järjestelmä, joka muodostuu datumin avulla reaalimaailmaan kiinnitetystä koordinaatistosta.",
                    "Koordinaattijärjestelmän avulla kohteen sijainti voidaan ilmaista yksikäsitteisesti.",
                    "Koordinaattijärjestelmä voi olla globaali, alueellinen (käytössä esim. yhden mantereen alueella) tai paikallinen (käytössä esim. yhden valtion tai kunnan alueella).",
                    "Suomen valtakunnallinen tasokoordinaattijärjestelmä on ETRS-TM35FIN."
                ]
            },
            "heightSystem":{
                "title":"Höjdsystemet",
                "info": "Korkeusjärjestelmä: yksiulotteinen koordinaattijärjestelmä, joka perustuu korkeusdatumiin.",
                "listItems" : [
                    "Suomessa käytetään valtakunnallisissa töissä JHS 163-suosituksen mukaista N2000-korkeusjärjestelmää."
                ]
            },
            "fileName":{
                "title":"Tiedoston nimi",
                "info": "",
                "paragraphs" : [],
                "listItems" : []
            },
            "decimalCount":{
                "title":"Desimaalien määrä",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla kerrotaan ohjelmalle kuinka monta desimaalia tulosteessa halutaan olevan."
                ],
                "listItems" : []
            },
            "coordinateSeparator":{
                "title":"Sarake-erotin",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla määritetään millainen merkkijono erottaa syötteessä koordinaattiarvot toisistaan.",
                    "Jos koordinaatteja edeltää jokin tunniste tai seuraa jokin merkkijono, tulee nämäkin olla erotettuna samalla erottimella."
                ],
                "listItems" : []
            },
            "headerLineCount":{
                "title":"Otsakerivien määrä",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla pystyy ohjelmalle kertomaan kuinka monta riviä tiedoston alusta ohitetaan.",
                    "Ohittamisen syynä voi olla, että tiedoston alussa on esimerkiksi sanallinen kuvaus tiedoston sisällöstä."
                ],
                "listItems" : []
            },
            "unitFormat":{
                "title":"Kulman muoto/yksikkö",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla kerrotaan ohjelmalle missä muodossa kulma-arvot ovat. Tuettuja kulmayksikköjä ovat: Aste, Gooni (graadi) ja Radiaani.",
                    "Lisäksi asteesta johdetut sexagesimaalimuodot ovat tuettuja. Jos näissä muodoissa esimerkiksi asteet, kaariminuutit ja kaarisekunnit ovat erotettuina, hyväksyy ohjelma erottimena tabulaattorin, pilkun ja puolipisteen, mutta ei välilyöntiä."
                ],
                "listItems" : []
            },
            "decimalSeparator":{
                "title":"Desimaalierotin",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla pystyy kertomaan mikä merkki toimii desimaalierotin.",
                    "Desimaalierottimen tulee poiketa koordinaattiarvot erottavasta merkistä. Kun koordinaattiarvot erottaa esimerkiksi pilkku sekä joukko välilyöntejä, niin desimaalierottimen on oltava piste!"
                ],
                "listItems" : []
            },
            "lineSeparator":{
                "title":"Rivin erotin",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla kerrotaan ohjelmalle mitä merkkiä/merkkijonoa käytetään erottamaan toisistaan rivit (pisteet)."
                ],
                "listItems" : []
            },
            "prefixId":{
                "title":"Koordinaattiarvoja edeltää pisteen tunniste",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla pystyy ohjelmalle kertomaan, että jokaisen pisteen koordinaattiarvoja edeltää samalla rivillä pisteen tunniste (ID).",
                    "Pisteen tunnisteen tulee olla erotettuna koordinaattiarvoista samalla merkkijonolla kuin koordinaattiarvot ovat erotettuina toisistaan.",
                    "Tunnisteen ei tarvitse olla numeerinen."
                ],
                "listItems" : []
            },
            "reverseCoordinates":{
                "title":"Koordinaatit käänteisesti",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla pystyy määrittämään ovatko tiedoston pisteiden kaksi ensimmäistä koordinaattiarvoa käänteisessä järjestyksessä suhteessa koordinaatiston kuvailussa annettuun järjestykseen.",
                    "Esimerkiksi kkj:n koordinaatit ovat lähtökohtaisesti jäjestyksessä, jossa ensimmäisenä on x-koordinaatti ja sitä seuraa y-koordinaatti. x-akseli osoittaa pohjoiseen ja y-akseli itään. Kun valitsee käänteisen järjestyksen, tulee tiedostossa y-koordinaatin edeltää x-koordinaattia."
                ],
                "listItems" : []
            },
            "writeHeader":{
                "title":"Otsakerivin tulostaminen tiedostoon",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla käyttäjä voi kertoa haluaako tulostiedostoon metatietoa koordinaateista otsakeriville."
                ],
                "listItems" : []
            },
            "lineEnds":{
                "title":"Tulosteeseen rivin loput",
                "info": "",
                "paragraphs": [
                    "Ominaisuuden avulla pystyy kertomaan haluaako tulosteeseen kirjoitettavan myös jokaisella rivillä annetun pisteen koordinaatteja seuraavan merkkijonon."
                ],
                "listItems" : []
            },
            "useCardinals":{
                "title":"Kardinaalien käyttö",
                "info": "",
                "paragraphs": [
                    "Ominaisuudella määritetään kirjoitetaanko tulosteeseen koordinaattiarvojen perään niiden ilmansuunnat. Tällöin miinusmerkit poistetaan koordinaattiarvoista.",
                    "Ilmansuunnat annetaan kirjoittamalla joko N, E, W tai S koordinaattiarvon perään."
                ],
                "listItems" : []
            }
        }
    }
});
