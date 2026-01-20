# Analyysi

## 1. Mitä tekoäly teki hyvin?

Tekoäly auttoi projektin alkuvaiheessa luomaan toimivan perusrakenteen kokoushuoneiden varausrajapinnalle. Sen avulla syntyi nopeasti Express- ja TypeScript-pohjainen API, jossa oli selkeä projektirakenne, perusreitit sekä in-memory-tietorakenne varausten tallentamiseen.

Tekoäly nopeutti merkittävästi työn käynnistämistä ja auttoi hahmottamaan kokonaisuutta ilman, että kaikkea olisi tarvinnut toteuttaa käsin alusta asti.

## 2. Mitä tekoäly teki huonosti?

Tekoälyn tuottama koodi ei huomioinut kaikkia liiketoimintasääntöjä oikein tai riittävän tarkasti. Esimerkiksi päällekkäiset varaukset olivat aluksi mahdollisia, eikä aikavalidointia ollut toteutettu kattavasti.

Lisäksi virheenkäsittely oli puutteellista: palvelukerroksessa heitetyt virheet johtivat HTTP 500 -vastauksiin ja oletusarvoisiin HTML-virhesivuihin, mikä ei ole API-käytössä toivottavaa. Vastuiden jako controller- ja service-kerroksen välillä vaati myös selkeyttämistä.

## 3. Mitkä olivat tärkeimmät parannukset ja miksi?

Tärkeimmät parannukset tehtiin liiketoimintalogiikkaan ja virheenkäsittelyyn. Toteutin aikavalidoinnin (aloitusajan tulee olla ennen lopetusaikaa ja varaus ei voi olla menneisyydessä) sekä logiikan, joka estää päällekkäiset varaukset samassa huoneessa.

Virheenkäsittelyä parannettiin siten, että controller-kerros käsittelee palvelukerroksen virheet ja palauttaa käyttäjälle selkeät JSON-muotoiset vastaukset oikeilla HTTP-statuskoodeilla. Tämä parantaa rajapinnan käytettävyyttä ja ennustettavuutta.

Toiminnallisuuden varmistamiseksi testasin rajapinnan manuaalisesti Visual Studio Coden REST Client -laajennuksella. Testauksen avulla varmistin, että varauksen luonti, päällekkäisten varausten esto, virhetilanteet sekä varausten listaus toimivat odotetulla tavalla. Testaus oli olennainen osa kehitystä, jotta voitiin varmistua siitä, että tehdyt parannukset todella toimivat käytännössä.

Tekoälytyökaluina käytin pääasiassa ChatGPT:tä perusratkaisujen ja selitysten tuottamiseen. Lisäksi hyödynsin satunnaisesti GitHub Copilotia vaihtoehtoisten toteutustapojen vertailemiseen ja oman ymmärryksen vahvistamiseen. Lopulliset ratkaisut ja parannukset tein itse arvioimalla eri vaihtoehtoja kriittisesti.