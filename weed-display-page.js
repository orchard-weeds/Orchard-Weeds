let heading = document.getElementById('heading');
let weedImages = document.getElementById('weedImages');
let readMore = document.getElementById('dod');
let images = document.getElementById('more-info');
let photo_1 = document.getElementById('photo-1');
let photo_2 = document.getElementById('photo-2');
let photo_3 = document.getElementById('photo-3');
let photo_4 = document.getElementById('photo-4');
let photo_5 = document.getElementById('photo-5');
let photo_6 = document.getElementById('photo-6');
let photo_7 = document.getElementById('photo-7');
let photo_8 = document.getElementById('photo-8');
let photo_text_1 = document.getElementById('text_1');
let photo_text_2 = document.getElementById('text_2');
let photo_text_3 = document.getElementById('text_3');
let photo_text_4 = document.getElementById('text_4');
let photo_text_5 = document.getElementById('text_5');
let photo_text_6 = document.getElementById('text_6');
let photo_text_7 = document.getElementById('text_7');
let photo_text_8 = document.getElementById('text_8');
let footer = document.getElementById('footer');



// Write your code here:
function showInfo_ageratum() {
  
  
 
  heading.innerHTML = 
  `<h1>${ageratum.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Ageratum-conyzoides-3.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum.jpg" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Ageratum-conyzoides-1.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Ageratum-conyzoides-2.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum-1.jpg" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum-4.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum-3.jpg" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Ageratum-spp-blue-orchard.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Billygoat weed (<em>Ageratum conyzoides</em>)</p>`;
  photo_text_2.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_3.innerHTML = `<p>Billygoat weed (<em>Ageratum conyzoides</em>)</p>`;
  photo_text_4.innerHTML = `<p>Billygoat weed (<em>Ageratum conyzoides</em>)</p>`;
  photo_text_5.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_6.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_7.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_8.innerHTML = `<p>Billygoat weed growing in an orchard</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${ageratum.botanical_name}</h3>\
  <h3>Family: ${ageratum.family}</h3><h3>Other common names: ${ageratum.other_common_names}</h3>\
  <br> <p>${ageratum.cultural}</p>\
  <p>${ageratum.hosts}</p><div class='pest_images'><p>${ageratum.pest_images[0]}</p> <p>${ageratum.pest_images[1]}</p>\
  <p>${ageratum.pest_images[2]}</p> </div><p>Uses: ${ageratum.uses}</p>\
  <p>Links: <a href='${ageratum.links[1]}' target='_blank'>${ageratum.links[0]}</a></p>\
  <p>Links: <a href='${ageratum.links[3]}' target='_blank'>${ageratum.links[2]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${ageratum.observations}</a></p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_amaranth() {
  
  
 
  heading.innerHTML = 
  `<h1>${amaranth.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/amaranth-2.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/amaranth-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/pests/amaranth-grasshopper.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Ageratum-conyzoides-2.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum-1.jpg" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum-4.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Ageratum-houstonianum-3.jpg" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Ageratum-spp-blue-orchard.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Amaranth (<em>Amaranthus viridis</em>)</p>`;
  photo_text_2.innerHTML = `<p>Amaranth (<em>Amaranthus viridis</em>)</p>`;
  photo_text_3.innerHTML = `<p>Grasshopper feeding on amaranth leaves (<em>Amaranthus viridis</em>)</p>`;
  photo_text_4.innerHTML = `<p>Billygoat weed (<em>Ageratum conyzoides</em>)</p>`;
  photo_text_5.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_6.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_7.innerHTML = `<p>Billygoat weed (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_8.innerHTML = `<p>Billygoat weed growing in an orchard</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${amaranth.botanical_name}</h3>\
  <h3>Family: ${amaranth.family}</h3><h3>Other common names: ${amaranth.other_common_names}</h3>\
  <br> <p>${amaranth.cultural}</p>\
  <p>${amaranth.hosts}</p><div class='pest_images'><p>${amaranth.pest_images[0]}</p> <p>${amaranth.pest_images[1]}</p>\
  <p>${amaranth.pest_images[2]}</p> </div><p>Uses: ${amaranth.uses}</p>\
  <p>Links: <a href='${amaranth.links[1]}' target='_blank'>${amaranth.links[0]}</a></p>\
  <p>Links: <a href='${amaranth.links[3]}' target='_blank'>${amaranth.links[2]}</a>\
  <p>Links: <a href='${amaranth.links[5]}' target='_blank'>${amaranth.links[4]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${amaranth.observations}</a></p>\
  <p>Location observations: ${amaranth.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_apple_of_peru() {
  
  
 
  heading.innerHTML = 
  `<h1>${apple_of_peru.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Nicandra.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Nicandra-1.jpg" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Nicandra-2.jpg" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Nicandra-3.jpg" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Nicandra-4.jpg" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Nicandra-1.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Nicandra-2.jpg" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Nicandra-3.jpg" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Apple of Peru (<em>Nicandra physalodes</em>)</p>`;
  photo_text_2.innerHTML = `<p>Apple of Peru with a type of Assassin bug (<em>>Nicandra physalodes</em>)</p>`;
  photo_text_3.innerHTML = `<p>Apple of Peru (<em>Nicandra physalodes</em>)</p>`;
  photo_text_4.innerHTML = `<p>Apple of Peru (<em>Nicandra physalodes</em>)</p>`;
  photo_text_5.innerHTML = `<p>Apple of Peru (<em>Nicandra physalodes</em>)</p>`;
  photo_text_6.innerHTML = `<p>Apple of Peru (<em>Nicandra physalodes</em>)</p>`;
  photo_text_7.innerHTML = `<p>Apple of Peru (<em>Ageratum houstonianum</em>)</p>`;
  photo_text_8.innerHTML = `<p>Apple of Peru (<em>Ageratum houstonianum</em></p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${apple_of_peru.botanical_name}</h3>\
  <h3>Family: ${apple_of_peru.family}</h3><h3>Other common names: ${apple_of_peru.other_common_names}</h3>\
  <br> <p>${apple_of_peru.cultural}</p>\
  <p>${apple_of_peru.hosts}</p><div class='pest_images'><p>${apple_of_peru.pest_images[0]}</p> <p>${apple_of_peru.pest_images[1]}</p>\
  <p>${apple_of_peru.pest_images[2]}</p> </div><p>Uses: ${apple_of_peru.uses}</p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${apple_of_peru.observations}</a></p>\
  <p>Location observations: ${apple_of_peru.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_BalloonCotton() {
  
  
 
  heading.innerHTML = 
  `<h1>${BalloonCotton.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Gomphocarpus_arocutus.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Gomphocarpus_flowers.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Gomphocarpus_fruit.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Gomphocarpus_plant_2.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Gomphocarpus_cotton.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Gomphocarpus_flowers.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Gomphocarpus_fruit.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Gomphocarpus_plant_2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_2.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_3.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_4.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_5.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_6.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_7.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
  photo_text_8.innerHTML = `<p>Balloon Cotton (<em>Gomphocarpus sp.</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${BalloonCotton.botanical_name}</h3>\
  <h3>Family: ${BalloonCotton.family}</h3><h3>Other common names: ${BalloonCotton.other_common_names}</h3>\
  <br> <p>${BalloonCotton.cultural}</p>\
  <p>${BalloonCotton.hosts}</p><div class='pest_images'><p>${BalloonCotton.pest_images[0]}</p> <p>${BalloonCotton.pest_images[1]}</p>\
  <p>${BalloonCotton.pest_images[2]}</p> </div><p>Uses: ${BalloonCotton.uses}</p>\
  <p>Links: <a href='${BalloonCotton.links[1]}' target='_blank'>${BalloonCotton.links[0]}</a></p>\
  <p>Links: <a href='${BalloonCotton.links[3]}' target='_blank'>${BalloonCotton.links[2]}</a>\
  <p>Links: <a href='${BalloonCotton.links[5]}' target='_blank'>${BalloonCotton.links[4]}</a></p> \
  <p>Links: <a href='${BalloonCotton.links[7]}' target='_blank'>${BalloonCotton.links[6]}</a></p>\
  <p>Links: <a href='${BalloonCotton.links[9]}' target='_blank'>${BalloonCotton.links[8]}</a>\
  <p>Links: <a href='${BalloonCotton.links[11]}' target='_blank'>${BalloonCotton.links[10]}</a></p> \
  <p>Links: <a href='${BalloonCotton.links[13]}' target='_blank'>${BalloonCotton.links[12]}</a>\
  <p>Links: <a href='${BalloonCotton.links[15]}' target='_blank'>${BalloonCotton.links[14]}</a></p> \
  <p>Links: <a href='${BalloonCotton.links[17]}' target='_blank'>${BalloonCotton.links[16]}</a></p>\
  <p>Links: <a href='${BalloonCotton.links[19]}' target='_blank'>${BalloonCotton.links[18]}</a>\
  <p>Links: <a href='${BalloonCotton.links[21]}' target='_blank'>${BalloonCotton.links[20]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${BalloonCotton.observations}</a></p>\
  <p>Location observations: ${BalloonCotton.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_brassica() {
  
  
 
  heading.innerHTML = 
  `<h1>${brassica.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii-5.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii-6.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Brassica_tournefortii.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_2.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_3.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_4.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_5.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_6.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_7.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
  photo_text_8.innerHTML = `<p>Mediterranean Turnip (<em>Brassica tournefortii</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${brassica.botanical_name}</h3>\
  <h3>Family: ${brassica.family}</h3><h3>Other common names: ${brassica.other_common_names}</h3>\
  <br> <p>${brassica.cultural}</p>\
  <p>${brassica.hosts}</p><div class='pest_images'><p>${brassica.pest_images[0]}</p> <p>${brassica.pest_images[1]}</p>\
  <p>${brassica.pest_images[2]}</p> </div><p>Uses: ${brassica.uses}</p>\
  <p>Links: <a href='${brassica.links[1]}' target='_blank'>${brassica.links[0]}</a></p>\
  <p>Links: <a href='${brassica.links[3]}' target='_blank'>${brassica.links[2]}</a>\
  <p>Links: <a href='${brassica.links[5]}' target='_blank'>${brassica.links[4]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${brassica.observations}</a></p>\
  <p>Location observations: ${brassica.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_burmedic() {
  
  
 
  heading.innerHTML = 
  `<h1>${burmedic.common_name}</h1><br><br><br><br></br>`;
/*
  photo_1.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-3.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Medicago-polymorpha-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_2.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_3.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_4.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_5.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_6.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_7.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;
  photo_text_8.innerHTML = `<p>MBurmedic (<em>Medicago polymorpha</em>)</p>`;*/
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${burmedic.botanical_name}</h3>\
  <h3>Family: ${burmedic.family}</h3><h3>Other common names: ${burmedic.other_common_names}</h3>\
  <br> <p>${burmedic.cultural}</p>\
  <p>${burmedic.hosts}</p><div class='pest_images'><p>${burmedic.pest_images[0]}</p> <p>${burmedic.pest_images[1]}</p>\
  <p>${burmedic.pest_images[2]}</p> </div><p>Uses: ${burmedic.uses}</p>\
  <p>Links: <a href='${burmedic.links[1]}' target='_blank'>${burmedic.links[0]}</a></p>\
  <p>Links: <a href='${burmedic.links[3]}' target='_blank'>${burmedic.links[2]}</a>\
  <p>Links: <a href='${burmedic.links[5]}' target='_blank'>${burmedic.links[4]}</a></p> \
  <p>Links: <a href='${burmedic.links[7]}' target='_blank'>${burmedic.links[6]}</a></p>\
  <p>Links: <a href='${burmedic.links[9]}' target='_blank'>${burmedic.links[8]}</a>\
  <p>Links: <a href='${burmedic.links[11]}' target='_blank'>${burmedic.links[10]}</a></p> \
  <p>Links: <a href='${burmedic.links[13]}' target='_blank'>${burmedic.links[12]}</a></p>\
  <p>Links: <a href='${burmedic.links[15]}' target='_blank'>${burmedic.links[14]}</a>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${burmedic.observations}</a></p>\
  <p>Location observations: ${burmedic.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_calyptocarpus() {
  
  
 
  heading.innerHTML = 
  `<h1>${calyptocarpus.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/calyptocarpus_5.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/calyptocarpus_2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/calyptocarpus_3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/calyptocarpus_4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/calyptocarpus_5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/calyptocarpus_5.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/calyptocarpus_2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/calyptocarpus_3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_2.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_3.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_4.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_5.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_6.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_7.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
  photo_text_8.innerHTML = `<p>Creeping Cinderella Weed (<em>Calyptocarpus vialis</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${calyptocarpus.botanical_name}</h3>\
  <h3>Family: ${calyptocarpus.family}</h3><h3>Other common names: ${calyptocarpus.other_common_names}</h3>\
  <br> <p>${calyptocarpus.cultural}</p>\
  <p>${calyptocarpus.hosts}</p><div class='pest_images'><p>${calyptocarpus.pest_images[0]}</p> <p>${calyptocarpus.pest_images[1]}</p>\
  <p>${calyptocarpus.pest_images[2]}</p> </div><p>Uses: ${calyptocarpus.uses}</p>\
  <p>Links: <a href='${calyptocarpus.links[1]}' target='_blank'>${calyptocarpus.links[0]}</a></p>\
  <p>Links: <a href='${calyptocarpus.links[3]}' target='_blank'>${calyptocarpus.links[2]}</a>\
  <p>Links: <a href='${calyptocarpus.links[5]}' target='_blank'>${calyptocarpus.links[4]}</a></p> \
  <p>Links: <a href='${calyptocarpus.links[7]}' target='_blank'>${calyptocarpus.links[6]}</a></p>\
  <p>Links: <a href='${calyptocarpus.links[9]}' target='_blank'>${calyptocarpus.links[8]}</a>\
  <p>Links: <a href='${calyptocarpus.links[11]}' target='_blank'>${calyptocarpus.links[10]}</a></p> \
  <p>Links: <a href='${calyptocarpus.links[13]}' target='_blank'>${calyptocarpus.links[12]}</a></p>\
  <p>Links: <a href='${calyptocarpus.links[15]}' target='_blank'>${calyptocarpus.links[14]}</a>\
  <p>Links: <a href='${calyptocarpus.links[17]}' target='_blank'>${calyptocarpus.links[16]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${calyptocarpus.observations}</a></p>\
  <p>Location observations: ${calyptocarpus.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_Brazilian_nightshade() {
  
  
 
  heading.innerHTML = 
  `<h1>${Brazilian_nightshade.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Brazilian-flower-1.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Brazilian-flower-2.jpg" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Brazilian.jpg" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Brazilian-young.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Brazilian-fruit-bush.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Brazilian-fruit-bush-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_2.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Brazilian nightshade (<em>Solanum seaforthianum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${Brazilian_nightshade.botanical_name}</h3>\
  <h3>Family: ${Brazilian_nightshade.family}</h3><h3>Other common names: ${Brazilian_nightshade.other_common_names}</h3>\
  <br><p>${Brazilian_nightshade.cultural}</p>\
  <p>${Brazilian_nightshade.hosts}</p><div class='pest_images'><p>${Brazilian_nightshade.pest_images[0]}</p> <p>${Brazilian_nightshade.pest_images[1]}</p>\
  <p>${Brazilian_nightshade.pest_images[2]}</p> </div><p>Uses: ${Brazilian_nightshade.uses}</p>\
  <p>Links: <a href='${Brazilian_nightshade.links[1]}' target='_blank'>${Brazilian_nightshade.links[0]}</a></p>\
  <p>Links: <a href='${Brazilian_nightshade.links[3]}' target='_blank'>${Brazilian_nightshade.links[2]}</a>\
  <p>Links: <a href='${Brazilian_nightshade.links[5]}' target='_blank'>${Brazilian_nightshade.links[4]}</a></p> \
  <p>Links: <a href='${Brazilian_nightshade.links[7]}' target='_blank'>${Brazilian_nightshade.links[6]}</a></p>\
  <p>Links: <a href='${Brazilian_nightshade.links[9]}' target='_blank'>${Brazilian_nightshade.links[8]}</a>\
  <p>Links: <a href='${Brazilian_nightshade.links[11]}' target='_blank'>${Brazilian_nightshade.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${Brazilian_nightshade.observations}</a></p>\
  <p>Location observations: ${Brazilian_nightshade.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_capsella() {
  
  
 
  heading.innerHTML = 
  `<h1>${capsella.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Capsella-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Capsella-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Capsella-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Capsella-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Capsella-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Capsella-3.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Capsella-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Capsella-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_2.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_3.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_4.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_5.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_6.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_7.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
  photo_text_8.innerHTML = `<p>Shepherd's purse (<em>Capsella bursa-pastoris</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${capsella.botanical_name}</h3>\
  <h3>Family: ${capsella.family}</h3><h3>Other common names: ${capsella.other_common_names}</h3>\
  <br> <p>${capsella.cultural}</p>\
  <p>${capsella.hosts}</p><div class='pest_images'><p>${capsella.pest_images[0]}</p> <p>${capsella.pest_images[1]}</p>\
  <p>${capsella.pest_images[2]}</p> </div><p>Uses: ${capsella.uses}</p>\
  <p>Links: <a href='${capsella.links[1]}' target='_blank'>${capsella.links[0]}</a></p>\
  <p>Links: <a href='${capsella.links[3]}' target='_blank'>${capsella.links[2]}</a>\
  <p>Links: <a href='${capsella.links[5]}' target='_blank'>${capsella.links[4]}</a></p> \
  <p>Links: <a href='${capsella.links[7]}' target='_blank'>${capsella.links[6]}</a></p>\
  <p>Links: <a href='${capsella.links[9]}' target='_blank'>${capsella.links[8]}</a>\
  <p>Links: <a href='${capsella.links[11]}' target='_blank'>${capsella.links[10]}</a></p> \
  <p>Links: <a href='${capsella.links[13]}' target='_blank'>${capsella.links[12]}</a></p>\
  <p>Links: <a href='${capsella.links[15]}' target='_blank'>${capsella.links[14]}</a>\
  <p>Links: <a href='${capsella.links[17]}' target='_blank'>${capsella.links[16]}</a></p> \
  <p>Links: <a href='${capsella.links[19]}' target='_blank'>${capsella.links[18]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${capsella.observations}</a></p>\
  <p>Location observations: ${capsella.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_carpetgrass() {
  
  
 
  heading.innerHTML = 
  `<h1>${carpetgrass.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/carpetgrass.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/carpetgrass_1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/carpetgrass.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/carpetgrass_1.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/carpetgrass.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/carpetgrass_1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/carpetgrass.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/carpetgrass_1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_2.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_3.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_4.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_5.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_6.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_7.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
  photo_text_8.innerHTML = `<p>carpet grass (<em>carpetgrass bursa-pastoris</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${carpetgrass.botanical_name}</h3>\
  <h3>Family: ${carpetgrass.family}</h3><h3>Other common names: ${carpetgrass.other_common_names}</h3>\
  <br> <p>${carpetgrass.cultural}</p>\
  <p>${carpetgrass.hosts}</p><div class='pest_images'><p>${carpetgrass.pest_images[0]}</p> <p>${carpetgrass.pest_images[1]}</p>\
  <p>${carpetgrass.pest_images[2]}</p> </div><p>Uses: ${carpetgrass.uses}</p>\
  <p>Links: <a href='${carpetgrass.links[1]}' target='_blank'>${carpetgrass.links[0]}</a></p>\
  <p>Links: <a href='${carpetgrass.links[3]}' target='_blank'>${carpetgrass.links[2]}</a>\
  <p>Links: <a href='${carpetgrass.links[5]}' target='_blank'>${carpetgrass.links[4]}</a></p> \
  <p>Links: <a href='${carpetgrass.links[7]}' target='_blank'>${carpetgrass.links[6]}</a></p>\
  <p>Links: <a href='${carpetgrass.links[9]}' target='_blank'>${carpetgrass.links[8]}</a>\
  <p>Links: <a href='${carpetgrass.links[11]}' target='_blank'>${carpetgrass.links[10]}</a></p> \
  <p>Links: <a href='${carpetgrass.links[13]}' target='_blank'>${carpetgrass.links[12]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${carpetgrass.observations}</a></p>\
  <p>Location observations: ${carpetgrass.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_caster_oil() {
  
  
 
  heading.innerHTML = 
  `<h1>${caster_oil.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/caster-oil-plant.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/caster-oil-plant-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/caster-oil-plant-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/caster-oil-plant-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/caster-oil-plant-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/caster-oil-plant-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/caster-oil-plant-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/caster-oil-plant-3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_2.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_3.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_4.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_5.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_6.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_7.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
  photo_text_8.innerHTML = `<p>Caster oil plant (<em>Ricinus communis</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${caster_oil.botanical_name}</h3>\
  <h3>Family: ${caster_oil.family}</h3><h3>Other common names: ${caster_oil.other_common_names}</h3>\
  <br> <p>${caster_oil.cultural}</p>\
  <p>${caster_oil.hosts}</p><div class='pest_images'><p>${caster_oil.pest_images[0]}</p> <p>${caster_oil.pest_images[1]}</p>\
  <p>${caster_oil.pest_images[2]}</p> </div><p>Uses: ${caster_oil.uses}</p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${caster_oil.observations}</a></p>\
  <p>Location observations: ${caster_oil.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_catsear() {
  
  
 
  heading.innerHTML = 
  `<h1>${catsear.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/catsear-flower.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/catsear-leaf.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/catsear-plant.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/catsear-flower.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/catsear-leaf.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/catsear-flower.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/catsear-plant.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/catsear-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>) <br> -- image by Ern Perkins (https://www.castlemaineflora.org.au/pic/h/hypoc/hyrad.htm)</p>`;
  photo_text_2.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>)</p>`;
  photo_text_3.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>)</p>`;
  photo_text_4.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>) <br>-- image by Ern Perkins (https://www.castlemaineflora.org.au/pic/h/hypoc/hyrad.htm)</p>`;
  photo_text_5.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>)</p>`;
  photo_text_6.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>) <br>-- image by Ern Perkins (https://www.castlemaineflora.org.au/pic/h/hypoc/hyrad.htm)</p>`;
  photo_text_7.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>)</p>`;
  photo_text_8.innerHTML = `<p>Cat's ear (<em>Hypochaeris radicata</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${catsear.botanical_name}</h3>\
  <h3>Family: ${catsear.family}</h3><h3>Other common names: ${catsear.other_common_names}</h3>\
  <br> <p>${catsear.cultural}</p>\
  <p>${catsear.hosts}</p><div class='pest_images'><p>${catsear.pest_images[0]}</p> <p>${catsear.pest_images[1]}</p>\
  <p>${catsear.pest_images[2]}</p> </div><p>Uses: ${catsear.uses}</p>\
  <p>Links: <a href='${catsear.links[1]}' target='_blank'>${catsear.links[0]}</a></p>\
  <p>Links: <a href='${catsear.links[3]}' target='_blank'>${catsear.links[2]}</a>\
  <p>Links: <a href='${catsear.links[5]}' target='_blank'>${catsear.links[4]}</a></p> \
  <p>Links: <a href='${catsear.links[7]}' target='_blank'>${catsear.links[6]}</a></p>\
  <p>Links: <a href='${catsear.links[9]}' target='_blank'>${catsear.links[8]}</a>\
  <p>Links: <a href='${catsear.links[11]}' target='_blank'>${catsear.links[10]}</a></p> \
  <p>Links: <a href='${catsear.links[13]}' target='_blank'>${catsear.links[12]}</a></p>\
  <p>Links: <a href='${catsear.links[15]}' target='_blank'>${catsear.links[14]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${catsear.observations}</a></p>\
  <p>Location observations: ${catsear.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_cenchrus() {
  
  
 
  heading.innerHTML = 
  `<h1>${cenchrus.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/cenchrus.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/cenchrus-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/cenchrus-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/cenchrus.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/cenchrus-2.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/cenchrus-3.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/cenchrus.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/cenchrus-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_2.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_3.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_4.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_5.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_6.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_7.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
  photo_text_8.innerHTML = `<p>Spiny Burrgrass (<em>Cenchrus species</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${cenchrus.botanical_name}</h3> <br><h3>Other species: ${cenchrus.other_species}</h3>\
  <h3>Family: ${cenchrus.family}</h3><h3>Other common names: ${cenchrus.other_common_names}</h3>\
  <br> <p>${cenchrus.cultural}</p>\
  <p>${cenchrus.hosts}</p><div class='pest_images'><p>${cenchrus.pest_images[0]}</p> <p>${cenchrus.pest_images[1]}</p>\
  <p>${cenchrus.pest_images[2]}</p> </div><p>Uses: ${cenchrus.uses}</p>\
  <p>Links: <a href='${cenchrus.links[1]}' target='_blank'>${cenchrus.links[0]}</a></p>\
  <p>Links: <a href='${cenchrus.links[3]}' target='_blank'>${cenchrus.links[2]}</a>\
  <p>Links: <a href='${cenchrus.links[5]}' target='_blank'>${cenchrus.links[4]}</a></p> \
  <p>Links: <a href='${cenchrus.links[7]}' target='_blank'>${cenchrus.links[6]}</a></p>\
  <p>Links: <a href='${cenchrus.links[9]}' target='_blank'>${cenchrus.links[8]}</a>\
  <p>Links: <a href='${cenchrus.links[11]}' target='_blank'>${cenchrus.links[10]}</a></p> \
  <p>Links: <a href='${cenchrus.links[13]}' target='_blank'>${cenchrus.links[12]}</a></p>\
  <p>Links: <a href='${cenchrus.links[15]}' target='_blank'>${cenchrus.links[14]}</a>\
  <p>Links: <a href='${cenchrus.links[17]}' target='_blank'>${cenchrus.links[16]}</a></p> \
  <p>Links: <a href='${cenchrus.links[19]}' target='_blank'>${cenchrus.links[18]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${cenchrus.observations}</a></p>\
  <p>Location observations: ${cenchrus.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}





function showInfo_chickweed() {
  
  
 
  heading.innerHTML = 
  `<h1>${chickweed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/chickweed.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/chickweed-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/chickweed-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/chickweed-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/chickweed-flower-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/chickweed-4.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/chickweed-5.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/chickweed-flower.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
  photo_text_2.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
  photo_text_3.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
  photo_text_4.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
  photo_text_5.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
  photo_text_6.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
  photo_text_7.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)<br> Note the hairs on one side of the stem</p>`;
  photo_text_8.innerHTML = `<p>Chickweed (<em>Stellaria media</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${chickweed.botanical_name}</h3>\
  <h3>Family: ${chickweed.family}</h3><h3>Other common names: ${chickweed.other_common_names}</h3>\
  <br> <p>${chickweed.cultural}</p>\
  <p>${chickweed.hosts}</p><div class='pest_images'><p>${chickweed.pest_images[0]}</p> <p>${chickweed.pest_images[1]}</p>\
  <p>${chickweed.pest_images[2]}</p> </div><p>Uses: ${chickweed.uses}</p>\
  <p>Links: <a href='${chickweed.links[1]}' target='_blank'>${chickweed.links[0]}</a></p>\
  <p>Links: <a href='${chickweed.links[3]}' target='_blank'>${chickweed.links[2]}</a>\
  <p>Links: <a href='${chickweed.links[5]}' target='_blank'>${chickweed.links[4]}</a></p> \
  <p>Links: <a href='${chickweed.links[7]}' target='_blank'>${chickweed.links[6]}</a></p>\
  <p>Links: <a href='${chickweed.links[9]}' target='_blank'>${chickweed.links[8]}</a>\
  <p>Links: <a href='${chickweed.links[11]}' target='_blank'>${chickweed.links[10]}</a></p> \
  <p>Links: <a href='${chickweed.links[13]}' target='_blank'>${chickweed.links[12]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${chickweed.observations}</a></p>\
  <p>Location observations: ${chickweed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_cobblers() {
  
  
 
  heading.innerHTML = 
  `<h1>${cobblers.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/bidens_1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/bidens_seed.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/bidens-1.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/bidens-flower-bud.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/bidens-flower-white-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/bidens-flower-white.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/bidens-orchard.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/bidens-group.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_2.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_3.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_4.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_5.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_6.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_7.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
  photo_text_8.innerHTML = `<p>Cobbler's pegs (<em>Bidens pilosa</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${cobblers.botanical_name}</h3>\
  <h3>Family: ${cobblers.family}</h3><h3>Other common names: ${cobblers.other_common_names}</h3>\
  <br> <p>${cobblers.cultural}</p>\
  <p>${cobblers.hosts}</p><div class='pest_images'><p>${cobblers.pest_images[0]}</p> <p>${cobblers.pest_images[1]}</p>\
  <p>${cobblers.pest_images[2]}</p> </div><p>Uses: ${cobblers.uses}</p>\
  <p>Links: <a href='${cobblers.links[1]}' target='_blank'>${cobblers.links[0]}</a></p>\
  <p>Links: <a href='${cobblers.links[3]}' target='_blank'>${cobblers.links[2]}</a>\
  <p>Links: <a href='${cobblers.links[5]}' target='_blank'>${cobblers.links[4]}</a></p> \
  <p>Links: <a href='${cobblers.links[7]}' target='_blank'>${cobblers.links[6]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${cobblers.observations}</a></p>\
  <p>Location observations: ${cobblers.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_lepidium_d() {
  
  
 
  heading.innerHTML = 
  `<h1>${lepidium_d.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/lepidium-rosette-2.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/lepidium-rosette-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/lepidium-sprawl.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/lepidium-sprawl-1.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/lepidium-close.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/lepidium-rosette-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/lepidium-rosette-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/lepidium-close.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_2.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_3.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_4.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_5.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_6.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_7.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
  photo_text_8.innerHTML = `<p>Lesser swinecress (<em>Lepidium didymus</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${lepidium_d.botanical_name}</h3>\
  <h3>Family: ${lepidium_d.family}</h3><h3>Other common names: ${lepidium_d.other_common_names}</h3>\
  <br> <p>${lepidium_d.cultural}</p>\
  <p>${lepidium_d.hosts}</p><div class='pest_images'><p>${lepidium_d.pest_images[0]}</p> <p>${lepidium_d.pest_images[1]}</p>\
  <p>${lepidium_d.pest_images[2]}</p> </div><p>Uses: ${lepidium_d.uses}</p>\
  <p>Links: <a href='${lepidium_d.links[1]}' target='_blank'>${lepidium_d.links[0]}</a></p>\
  <p>Links: <a href='${lepidium_d.links[3]}' target='_blank'>${lepidium_d.links[2]}</a>\
  <p>Links: <a href='${lepidium_d.links[5]}' target='_blank'>${lepidium_d.links[4]}</a></p> \
  <p>Links: <a href='${lepidium_d.links[7]}' target='_blank'>${lepidium_d.links[6]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${lepidium_d.observations}</a></p>\
  <p>Location observations: ${lepidium_d.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}



function showInfo_lepidium_b() {
  
  
 
  heading.innerHTML = 
  `<h1>${lepidium_b.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense-1.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Lepidium-bonariense-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_2.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_3.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_4.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_5.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_6.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_7.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
  photo_text_8.innerHTML = `<p>Argentine cress (<em>Lepidium bonariense</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${lepidium_b.botanical_name}</h3>\
  <h3>Family: ${lepidium_b.family}</h3><h3>Other common names: ${lepidium_b.other_common_names}</h3>\
  <br> <p>${lepidium_b.cultural}</p>\
  <p>${lepidium_b.hosts}</p><div class='pest_images'><p>${lepidium_b.pest_images[0]}</p> <p>${lepidium_b.pest_images[1]}</p>\
  <p>${lepidium_b.pest_images[2]}</p> </div><p>Uses: ${lepidium_b.uses}</p>\
  
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${lepidium_b.observations}</a></p>\
  <p>Location observations: ${lepidium_b.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_carpetWeed() {
  
  
 
  heading.innerHTML = 
  `<h1>${carpetWeed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata_1.jpg" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata_2.jpg" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata_3.jpg" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata_1.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata_2.jpg" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Mollugo_verticillata_3.jpg" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_2.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_3.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_4.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_5.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_6.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_7.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
  photo_text_8.innerHTML = `<p>Carpetweed (<em>Mollugo verticillata</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${carpetWeed.botanical_name}</h3>\
  <h3>Family: ${carpetWeed.family}</h3><h3>Other common names: ${carpetWeed.other_common_names}</h3>\
  <br> <p>${carpetWeed.cultural}</p>\
  <p>${carpetWeed.hosts}</p><div class='pest_images'><p>${carpetWeed.pest_images[0]}</p> <p>${carpetWeed.pest_images[1]}</p>\
  <p>${carpetWeed.pest_images[2]}</p> </div><p>Uses: ${carpetWeed.uses}</p>\
  <p>Links: <a href='${carpetWeed.links[1]}' target='_blank'>${carpetWeed.links[0]}</a></p>\
  <p>Links: <a href='${carpetWeed.links[3]}' target='_blank'>${carpetWeed.links[2]}</a>\
  <p>Links: <a href='${carpetWeed.links[5]}' target='_blank'>${carpetWeed.links[4]}</a></p> \
  <p>Links: <a href='${carpetWeed.links[7]}' target='_blank'>${carpetWeed.links[6]}</a></p>\
  <p>Links: <a href='${carpetWeed.links[9]}' target='_blank'>${carpetWeed.links[8]}</a>\
  <p>Links: <a href='${carpetWeed.links[11]}' target='_blank'>${carpetWeed.links[10]}</a></p> \
  <p>Links: <a href='${carpetWeed.links[13]}' target='_blank'>${carpetWeed.links[12]}</a></p>\
  <p>Links: <a href='${carpetWeed.links[15]}' target='_blank'>${carpetWeed.links[14]}</a></p> \
  <p>Links: <a href='${carpetWeed.links[17]}' target='_blank'>${carpetWeed.links[16]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${carpetWeed.observations}</a></p>\
  <p>Location observations: ${carpetWeed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_cotula() {
  
  
 
  heading.innerHTML = 
  `<h1>${cotula.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/cotula-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/cotula-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/cotula-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/cotula-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/cotula-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/cotula-6.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/cotula-7.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/cotula-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_2.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_3.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_4.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_5.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_6.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_7.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
  photo_text_8.innerHTML = `<p>Common Cotula or Carrot weed (<em>Cotula australis</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${cotula.botanical_name}</h3>\
  <h3>Family: ${cotula.family}</h3><h3>Other common names: ${cotula.other_common_names}</h3>\
  <br> <p>${cotula.cultural}</p>\
  <p>${cotula.hosts}</p><div class='pest_images'><p>${cotula.pest_images[0]}</p> <p>${cotula.pest_images[1]}</p>\
  <p>${cotula.pest_images[2]}</p> </div><p>Uses: ${cotula.uses}</p>\
  <p>Links: <a href='${cotula.links[1]}' target='_blank'>${cotula.links[0]}</a></p>\
  <p>Links: <a href='${cotula.links[3]}' target='_blank'>${cotula.links[2]}</a>\
  <p>Links: <a href='${cotula.links[5]}' target='_blank'>${cotula.links[4]}</a></p> \
  <p>Links: <a href='${cotula.links[7]}' target='_blank'>${cotula.links[6]}</a></p>\
  <p>Links: <a href='${cotula.links[9]}' target='_blank'>${cotula.links[8]}</a>\
  <p>Links: <a href='${cotula.links[11]}' target='_blank'>${cotula.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${cotula.observations}</a></p>\
  <p>Location observations: ${cotula.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_mouseear() {
  
  
 
  heading.innerHTML = 
  `<h1>${mouseear.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum-4.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum-1.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum-2.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum-3.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Cerastium-glomeratum-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum</em>)</p>`;
  photo_text_2.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Mouse-ear Chickweed (<em>Cerastium glomeratum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${mouseear.botanical_name}</h3>\
  <h3>Family: ${mouseear.family}</h3><h3>Other common names: ${mouseear.other_common_names}</h3>\
  <br> <p>${mouseear.cultural}</p>\
  <p>${mouseear.hosts}</p><div class='pest_images'><p>${mouseear.pest_images[0]}</p> <p>${mouseear.pest_images[1]}</p>\
  <p>${mouseear.pest_images[2]}</p> </div><p>Uses: ${mouseear.uses}</p>\
  <p>Links: <a href='${mouseear.links[1]}' target='_blank'>${mouseear.links[0]}</a></p>\
  <p>Links: <a href='${mouseear.links[3]}' target='_blank'>${mouseear.links[2]}</a>\
  <p>Links: <a href='${mouseear.links[5]}' target='_blank'>${mouseear.links[4]}</a></p> \
  <p>Links: <a href='${mouseear.links[7]}' target='_blank'>${mouseear.links[6]}</a></p>\
  <p>Links: <a href='${mouseear.links[9]}' target='_blank'>${mouseear.links[8]}</a>\
  <p>Links: <a href='${mouseear.links[11]}' target='_blank'>${mouseear.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${mouseear.observations}</a></p>\
  <p>Location observations: ${mouseear.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_chamaecrista() {
  
  
 
  heading.innerHTML = 
  `<h1>${chamaecrista.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/chamaecrista_1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-5.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/chamaecrista-rotundifolia-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_2.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_3.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_4.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_5.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_6.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_7.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
  photo_text_8.innerHTML = `<p>Wynn cassia (<em>Chamaecrista rotundifolia</em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${chamaecrista.botanical_name}</h3>\
  <h3>Family: ${chamaecrista.family}</h3><h3>Other common names: ${chamaecrista.other_common_names}</h3>\
  <br> <p>${chamaecrista.cultural}</p>\
  <p>${chamaecrista.hosts}</p><div class='pest_images'><p>${chamaecrista.pest_images[0]}</p> <p>${chamaecrista.pest_images[1]}</p>\
  <p>${chamaecrista.pest_images[2]}</p> </div><p>Uses: ${chamaecrista.uses}</p>\
  <p>Links: <a href='${chamaecrista.links[1]}' target='_blank'>${chamaecrista.links[0]}</a></p>\
  <p>Links: <a href='${chamaecrista.links[3]}' target='_blank'>${chamaecrista.links[2]}</a>\
  <p>Links: <a href='${chamaecrista.links[5]}' target='_blank'>${chamaecrista.links[4]}</a></p> \
  <p>Links: <a href='${chamaecrista.links[7]}' target='_blank'>${chamaecrista.links[6]}</a></p>\
  <p>Links: <a href='${chamaecrista.links[9]}' target='_blank'>${chamaecrista.links[8]}</a>\
  <p>Links: <a href='${chamaecrista.links[11]}' target='_blank'>${chamaecrista.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${chamaecrista.observations}</a></p>\
  <p>Location observations: ${chamaecrista.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_crabgrass() {
  
  
 
  heading.innerHTML = 
  `<h1>${crabgrass.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/crabgrass_1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/crabgrass.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/crabgrass_2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/crabgrass_3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/crabgrass_4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/crabgrass_1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/crabgrass_2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/crabgrass_3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_2.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_3.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_4.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_5.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_6.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_7.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
  photo_text_8.innerHTML = `<p>Crabgrass (<em>Eleusine indica </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${crabgrass.botanical_name}</h3>\
  <h3>Family: ${crabgrass.family}</h3><h3>Other common names: ${crabgrass.other_common_names}</h3>\
  <br> <p>${crabgrass.cultural}</p>\
  <p>${crabgrass.hosts}</p><div class='pest_images'><p>${crabgrass.pest_images[0]}</p> <p>${crabgrass.pest_images[1]}</p>\
  <p>${crabgrass.pest_images[2]}</p> </div><p>Uses: ${crabgrass.uses}</p>\
  <p>Links: <a href='${crabgrass.links[1]}' target='_blank'>${crabgrass.links[0]}</a></p>\
  <p>Links: <a href='${crabgrass.links[3]}' target='_blank'>${crabgrass.links[2]}</a>\
  <p>Links: <a href='${crabgrass.links[5]}' target='_blank'>${crabgrass.links[4]}</a></p> \
  <p>Links: <a href='${crabgrass.links[7]}' target='_blank'>${crabgrass.links[6]}</a></p>\
  <p>Links: <a href='${crabgrass.links[9]}' target='_blank'>${crabgrass.links[8]}</a>\
  <p>Links: <a href='${crabgrass.links[11]}' target='_blank'>${crabgrass.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${crabgrass.observations}</a></p>\
  <p>Location observations: ${crabgrass.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_crasso() {
  
  
 
  heading.innerHTML = 
  `<h1>${crasso.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/thickhead.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/thickhead-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/thickhead-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/thickhead-pot.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/thickhead-longleggedfly.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/thickhead-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/thickhead-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/thickhead.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_2.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_3.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_4.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_5.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_6.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_7.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
  photo_text_8.innerHTML = `<p>Thickhead (<em>Crassocephalum crepidioides </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${crasso.botanical_name}</h3>\
  <h3>Family: ${crasso.family}</h3><h3>Other common names: ${crasso.other_common_names}</h3>\
  <br> <p>${crasso.cultural}</p>\
  <p>${crasso.hosts}</p><div class='pest_images'><p>${crasso.pest_images[0]}</p> <p>${crasso.pest_images[1]}</p>\
  <p>${crasso.pest_images[2]}</p> </div><p>Uses: ${crasso.uses}</p>\
  <p>Links: <a href='${crasso.links[1]}' target='_blank'>${crasso.links[0]}</a></p>\
  <p>Links: <a href='${crasso.links[3]}' target='_blank'>${crasso.links[2]}</a>\
  <p>Links: <a href='${crasso.links[5]}' target='_blank'>${crasso.links[4]}</a></p> \
  <p>Links: <a href='${crasso.links[7]}' target='_blank'>${crasso.links[6]}</a></p>\
  <p>Links: <a href='${crasso.links[9]}' target='_blank'>${crasso.links[8]}</a>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${crasso.observations}</a></p>\
  <p>Location observations: ${crasso.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_crotalaria() {
  
  
 
  heading.innerHTML = 
  `<h1>${crotalaria.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/crotalaria-pallida.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/crotalaria-lanceolata.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/crotalaria-incana.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/crotalaria-pods.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/crotalaria-pallida.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/crotalaria-lanceolata.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/crotalaria-incana.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/crotalaria-pallida.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_2.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_3.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_4.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_5.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_6.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_7.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
  photo_text_8.innerHTML = `<p>Rattlepods (<em> Crotalaria sp. </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${crotalaria.botanical_name}</h3>\
  <h3>Family: ${crotalaria.family}</h3><h3>Other common names: ${crotalaria.other_common_names}</h3>\
  <br> <p>${crotalaria.cultural}</p>\
  <p>${crotalaria.hosts}</p><div class='pest_images'><p>${crotalaria.pest_images[0]}</p> <p>${crotalaria.pest_images[1]}</p>\
  <p>${crotalaria.pest_images[2]}</p> </div><p>Uses: ${crotalaria.uses}</p>\
  <p>Links: <a href='${crotalaria.links[1]}' target='_blank'>${crotalaria.links[0]}</a></p>\
  <p>Links: <a href='${crotalaria.links[3]}' target='_blank'>${crotalaria.links[2]}</a>\
  <p>Links: <a href='${crotalaria.links[5]}' target='_blank'>${crotalaria.links[4]}</a></p> \
  <p>Links: <a href='${crotalaria.links[7]}' target='_blank'>${crotalaria.links[6]}</a></p>\
  <p>Links: <a href='${crotalaria.links[9]}' target='_blank'>${crotalaria.links[8]}</a>\
  <p>Links: <a href='${crotalaria.links[11]}' target='_blank'>${crotalaria.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${crotalaria.observations}</a></p>\
  <p>Location observations: ${crotalaria.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_cudweed() {
  
  
 
  heading.innerHTML = 
  `<h1>${cudweed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/cud.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/cud-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/cud-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/cud-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/cud-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/cud-flower.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/cud.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/cud-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_2.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_3.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_4.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_5.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_6.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_7.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
  photo_text_8.innerHTML = `<p>Cudweed (<em> Gamochaeta spp. Gnaphalium spp. </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${cudweed.botanical_name}</h3>\
  <h3>Family: ${cudweed.family}</h3><h3>Other common names: ${cudweed.other_common_names}</h3>\
  <br> <p>${cudweed.cultural}</p>\
  <p>${cudweed.hosts}</p><div class='pest_images'><p>${cudweed.pest_images[0]}</p> <p>${cudweed.pest_images[1]}</p>\
  <p>${cudweed.pest_images[2]}</p> </div><p>Uses: ${cudweed.uses}</p>\
  <p>Links: <a href='${cudweed.links[1]}' target='_blank'>${cudweed.links[0]}</a></p>\
  <p>Links: <a href='${cudweed.links[3]}' target='_blank'>${cudweed.links[2]}</a>\
  <p>Links: <a href='${cudweed.links[5]}' target='_blank'>${cudweed.links[4]}</a></p> \
  <p>Links: <a href='${cudweed.links[7]}' target='_blank'>${cudweed.links[6]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${cudweed.observations}</a></p>\
  <p>Location observations: ${cudweed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_dandelion() {
  
  
 
  heading.innerHTML = 
  `<h1>${dandelion.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/dandelion.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/dandelion-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/dandelion.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/dandelion-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/dandelion-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/dandelion-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/dandelion-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/dandelion-3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_2.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_3.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_4.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_5.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_6.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_7.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
  photo_text_8.innerHTML = `<p>dandelion (<em>Taraxacum officinale </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${dandelion.botanical_name}</h3>\
  <h3>Family: ${dandelion.family}</h3><h3>Other common names: ${dandelion.other_common_names}</h3>\
  <br> <p>${dandelion.cultural}</p>\
  <p>${dandelion.hosts}</p><div class='pest_images'><p>${dandelion.pest_images[0]}</p> <p>${dandelion.pest_images[1]}</p>\
  <p>${dandelion.pest_images[2]}</p> </div><p>Uses: ${dandelion.uses}</p>\
  <p>Links: <a href='${dandelion.links[1]}' target='_blank'>${dandelion.links[0]}</a></p>\
  <p>Links: <a href='${dandelion.links[3]}' target='_blank'>${dandelion.links[2]}</a>\
  <p>Links: <a href='${dandelion.links[5]}' target='_blank'>${dandelion.links[4]}</a></p> \
  <p>Links: <a href='${dandelion.links[7]}' target='_blank'>${dandelion.links[6]}</a></p>\
  <p>Links: <a href='${dandelion.links[9]}' target='_blank'>${dandelion.links[8]}</a>\
  <p>Links: <a href='${dandelion.links[11]}' target='_blank'>${dandelion.links[10]}</a></p> \
  <p>Links: <a href='${dandelion.links[13]}' target='_blank'>${dandelion.links[12]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${dandelion.observations}</a></p>\
  <p>Location observations: ${dandelion.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_eclipta() {
  
  
 
  heading.innerHTML = 
  `<h1>${eclipta.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/eclipta_3.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/eclipta_1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/eclipta_2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/eclipta_flower.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/eclipta_leaf_fl.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/eclipta_lg_leaf.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/eclipta_3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/eclipta_plant_orchard.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_2.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_3.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_4.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_5.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_6.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_7.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
  photo_text_8.innerHTML = `<p>eclipta (<em>Eclipta prostata </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${eclipta.botanical_name}</h3>\
  <h3>Family: ${eclipta.family}</h3><h3>Other common names: ${eclipta.other_common_names}</h3>\
  <br> <p>${eclipta.cultural}</p>\
  <p>${eclipta.hosts}</p><div class='pest_images'><p>${eclipta.pest_images[0]}</p> <p>${eclipta.pest_images[1]}</p>\
  <p>${eclipta.pest_images[2]}</p> </div><p>Uses: ${eclipta.uses}</p>\
  <p>Links: <a href='${eclipta.links[1]}' target='_blank'>${eclipta.links[0]}</a></p>\
  <p>Links: <a href='${eclipta.links[3]}' target='_blank'>${eclipta.links[2]}</a>\
  <p>Links: <a href='${eclipta.links[5]}' target='_blank'>${eclipta.links[4]}</a></p> \
  <p>Links: <a href='${eclipta.links[7]}' target='_blank'>${eclipta.links[6]}</a></p>\
  <p>Links: <a href='${eclipta.links[9]}' target='_blank'>${eclipta.links[8]}</a>\
  <p>Links: <a href='${eclipta.links[11]}' target='_blank'>${eclipta.links[10]}</a></p> \
  <p>Links: <a href='${eclipta.links[13]}' target='_blank'>${eclipta.links[12]}</a></p> \
  <p>Links: <a href='${eclipta.links[15]}' target='_blank'>${eclipta.links[14]}</a>\
  <p>Links: <a href='${eclipta.links[17]}' target='_blank'>${eclipta.links[16]}</a></p> \
  <p>Links: <a href='${eclipta.links[19]}' target='_blank'>${eclipta.links[18]}</a></p>\
  <p>Links: <a href='${eclipta.links[21]}' target='_blank'>${eclipta.links[20]}</a>\
  <p>Links: <a href='${eclipta.links[23]}' target='_blank'>${eclipta.links[22]}</a></p> \
  <p>Links: <a href='${eclipta.links[25]}' target='_blank'>${eclipta.links[24]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${eclipta.observations}</a></p>\
  <p>Location observations: ${eclipta.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_emilia() {
  
  
 
  heading.innerHTML = 
  `<h1>${emilia.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/emilia-4.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/emilia-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/emilia-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/emilia-flower-1.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/emilia-flower-2.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/emilia-flower-3.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/emilia-small-plant.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/emilia-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_2.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_3.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_4.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_5.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_6.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_7.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
  photo_text_8.innerHTML = `<p>Lilac Tasselflower (<em>Emilia sonchifolia </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${emilia.botanical_name}</h3>\
  <h3>Family: ${emilia.family}</h3><h3>Other common names: ${emilia.other_common_names}</h3>\
  <br> <p>${emilia.cultural}</p>\
  <p>${emilia.hosts}</p><div class='pest_images'><p>${emilia.pest_images[0]}</p> <p>${emilia.pest_images[1]}</p>\
  <p>${emilia.pest_images[2]}</p> </div><p>Uses: ${emilia.uses}</p>\
  <p>Links: <a href='${emilia.links[1]}' target='_blank'>${emilia.links[0]}</a></p>\
  <p>Links: <a href='${emilia.links[3]}' target='_blank'>${emilia.links[2]}</a>\
  <p>Links: <a href='${emilia.links[5]}' target='_blank'>${emilia.links[4]}</a></p> \
  <p>Links: <a href='${emilia.links[7]}' target='_blank'>${emilia.links[6]}</a></p>\
  <p>Links: <a href='${emilia.links[9]}' target='_blank'>${emilia.links[8]}</a>\
  <p>Links: <a href='${emilia.links[11]}' target='_blank'>${emilia.links[10]}</a></p> \
  <p>Links: <a href='${emilia.links[13]}' target='_blank'>${emilia.links[12]}</a></p> \
  <p>Links: <a href='${emilia.links[15]}' target='_blank'>${emilia.links[14]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${emilia.observations}</a></p>\
  <p>Location observations: ${emilia.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_euphorbia() {
  
  
 
  heading.innerHTML = 
  `<h1>${euphorbia.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/spotted-spurge-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/spotted-spurge.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/spotted-spurge-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/spotted-spurge-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/spotted-spurge-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/spotted-spurge-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/spotted-spurge-3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/spotted-spurge-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_2.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_3.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_4.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_5.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_6.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_7.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
  photo_text_8.innerHTML = `<p>Spotted spurge (<em>Euphorbia maculata </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${euphorbia.botanical_name}</h3>\
  <h3>Family: ${euphorbia.family}</h3><h3>Other common names: ${euphorbia.other_common_names}</h3>\
  <br> <p>${euphorbia.cultural}</p>\
  <p>${euphorbia.hosts}</p><div class='pest_images'><p>${euphorbia.pest_images[0]}</p> <p>${euphorbia.pest_images[1]}</p>\
  <p>${euphorbia.pest_images[2]}</p> </div><p>Uses: ${euphorbia.uses}</p>\
  <p>Links: <a href='${euphorbia.links[1]}' target='_blank'>${euphorbia.links[0]}</a></p>\
  <p>Links: <a href='${euphorbia.links[3]}' target='_blank'>${euphorbia.links[2]}</a>\
  <p>Links: <a href='${euphorbia.links[5]}' target='_blank'>${euphorbia.links[4]}</a></p> \
  <p>Links: <a href='${euphorbia.links[7]}' target='_blank'>${euphorbia.links[6]}</a></p>\
  <p>Links: <a href='${euphorbia.links[9]}' target='_blank'>${euphorbia.links[8]}</a>\
  <p>Links: <a href='${euphorbia.links[11]}' target='_blank'>${euphorbia.links[10]}</a></p> \
  <p>Links: <a href='${euphorbia.links[13]}' target='_blank'>${euphorbia.links[12]}</a></p> \
  <p>Links: <a href='${euphorbia.links[15]}' target='_blank'>${euphorbia.links[14]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${euphorbia.observations}</a></p>\
  <p>Location observations: ${euphorbia.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_fathen() {
  
  
 
  heading.innerHTML = 
  `<h1>${fathen.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/fathen.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/fathen-3.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/fathen-4.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/fathen.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/fathen-close.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/fathen-seedling.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/fathen-4.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/fathen-3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_2.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_3.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_4.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_5.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_6.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_7.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
  photo_text_8.innerHTML = `<p>Fat Hen (<em>Chenopodium album </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${fathen.botanical_name}</h3>\
  <h3>Family: ${fathen.family}</h3><h3>Other common names: ${fathen.other_common_names}</h3>\
  <br> <p>${fathen.cultural}</p>\
  <p>${fathen.hosts}</p><div class='pest_images'><p>${fathen.pest_images[0]}</p> <p>${fathen.pest_images[1]}</p>\
  <p>${fathen.pest_images[2]}</p> </div><p>Uses: ${fathen.uses}</p>\
  <p>Links: <a href='${fathen.links[1]}' target='_blank'>${fathen.links[0]}</a></p>\
  <p>Links: <a href='${fathen.links[3]}' target='_blank'>${fathen.links[2]}</a>\
  <p>Links: <a href='${fathen.links[5]}' target='_blank'>${fathen.links[4]}</a></p> \
  <p>Links: <a href='${fathen.links[7]}' target='_blank'>${fathen.links[6]}</a></p>\
  <p>Links: <a href='${fathen.links[9]}' target='_blank'>${fathen.links[8]}</a>\
  <p>Links: <a href='${fathen.links[11]}' target='_blank'>${fathen.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${fathen.observations}</a></p>\
  <p>Location observations: ${fathen.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_fleabane() {
  
  
 
  heading.innerHTML = 
  `<h1>${fleabane.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Fleabane_flower_bud.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Fleabane_flower_bud_1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Fleabane_flower.jpg" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/fleabane-overgrowth-orchard.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/fleabane-rossette.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/fleabane-rossette-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Fleabane_flower_bud_1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Fleabane_flower_bud.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_2.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_3.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_4.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_5.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_6.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_7.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
  photo_text_8.innerHTML = `<p>Fleabane (<em>Erigeron sp. </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${fleabane.botanical_name}</h3>\
  <h3>Family: ${fleabane.family}</h3><h3>Other common names: ${fleabane.other_common_names}</h3>\
  <br> <p>${fleabane.cultural}</p>\
  <p>${fleabane.hosts}</p><div class='pest_images'><p>${fleabane.pest_images[0]}</p> <p>${fleabane.pest_images[1]}</p>\
  <p>${fleabane.pest_images[2]}</p> </div><p>Uses: ${fleabane.uses}</p>\
  <p>Links: <a href='${fleabane.links[1]}' target='_blank'>${fleabane.links[0]}</a></p>\
  <p>Links: <a href='${fleabane.links[3]}' target='_blank'>${fleabane.links[2]}</a>\
  <p>Links: <a href='${fleabane.links[5]}' target='_blank'>${fleabane.links[4]}</a></p> \
  <p>Links: <a href='${fleabane.links[7]}' target='_blank'>${fleabane.links[6]}</a></p>\
  <p>Links: <a href='${fleabane.links[9]}' target='_blank'>${fleabane.links[8]}</a>\
  <p>Links: <a href='${fleabane.links[11]}' target='_blank'>${fleabane.links[10]}</a></p> \
  <p>Links: <a href='${fleabane.links[13]}' target='_blank'>${fleabane.links[12]}</a></p> \
  <p>Links: <a href='${fleabane.links[15]}' target='_blank'>${fleabane.links[14]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${fleabane.observations}</a></p>\
  <p>Location observations: ${fleabane.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_flickweed() {
  
  
 
  heading.innerHTML = 
  `<h1>${flickweed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/flickweed.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/flickweed-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/flickweed-orchard.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/flickweed-2.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/flickweed-3.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/flickweed-4.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/flickweed-5.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/flickweed-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_2.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_3.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_4.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_5.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_6.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_7.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
  photo_text_8.innerHTML = `<p>Flickweed (<em>Cardamine hirsuta </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${flickweed.botanical_name}</h3>\
  <h3>Family: ${flickweed.family}</h3><h3>Other common names: ${flickweed.other_common_names}</h3>\
  <br> <p>${flickweed.cultural}</p>\
  <p>${flickweed.hosts}</p><div class='pest_images'><p>${flickweed.pest_images[0]}</p> <p>${flickweed.pest_images[1]}</p>\
  <p>${flickweed.pest_images[2]}</p> </div><p>Uses: ${flickweed.uses}</p>\
  <p>Links: <a href='${flickweed.links[1]}' target='_blank'>${flickweed.links[0]}</a></p>\
  <p>Links: <a href='${flickweed.links[3]}' target='_blank'>${flickweed.links[2]}</a>\
  <p>Links: <a href='${flickweed.links[5]}' target='_blank'>${flickweed.links[4]}</a></p> \
  <p>Links: <a href='${flickweed.links[7]}' target='_blank'>${flickweed.links[6]}</a></p>\
  <p>Links: <a href='${flickweed.links[9]}' target='_blank'>${flickweed.links[8]}</a>\
  <p>Links: <a href='${flickweed.links[11]}' target='_blank'>${flickweed.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${flickweed.observations}</a></p>\
  <p>Location observations: ${flickweed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_Gomphrena() {
  
  
 
  heading.innerHTML = 
  `<h1>${Gomphrena.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Gomphrena-flower.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Gomphrena-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Gomphrena-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Gomphrena-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Gomphrena-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Gomphrena-6.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Gomphrena-flower.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Gomphrena-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_2.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_3.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_4.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_5.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_6.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_7.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
  photo_text_8.innerHTML = `<p>Gomphrena (<em>Gomphrena celosioides </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${Gomphrena.botanical_name}</h3>\
  <h3>Family: ${Gomphrena.family}</h3><h3>Other common names: ${Gomphrena.other_common_names}</h3>\
  <br> <p>${Gomphrena.cultural}</p>\
  <p>${Gomphrena.hosts}</p><div class='pest_images'><p>${Gomphrena.pest_images[0]}</p> <p>${Gomphrena.pest_images[1]}</p>\
  <p>${Gomphrena.pest_images[2]}</p> </div><p>Uses: ${Gomphrena.uses}</p>\
  <p>Links: <a href='${Gomphrena.links[1]}' target='_blank'>${Gomphrena.links[0]}</a></p>\
  <p>Links: <a href='${Gomphrena.links[3]}' target='_blank'>${Gomphrena.links[2]}</a>\
  <p>Links: <a href='${Gomphrena.links[5]}' target='_blank'>${Gomphrena.links[4]}</a></p> \
  <p>Links: <a href='${Gomphrena.links[7]}' target='_blank'>${Gomphrena.links[6]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${Gomphrena.observations}</a></p>\
  <p>Location observations: ${Gomphrena.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_grass() {
  
  
 
  heading.innerHTML = 
  `<h1>${grass.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/grasses/mixed-grasses-orchard.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/grasses/mixed-grasses.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/grasses/grass-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/grasses/grass-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/grasses/grass-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/grasses/grass-ladybug.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/grasses/grass-mixed.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/grasses/grass-5.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_2.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_3.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_4.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_5.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_6.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_7.innerHTML = `<p>Grasses(<em> </em>)</p>`;
  photo_text_8.innerHTML = `<p>Grasses(<em> </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${grass.botanical_name}</h3>\
  <h3>Family: ${grass.family}</h3><h3>Other common names: ${grass.other_common_names}</h3>\
  <br> <p>${grass.cultural}</p>\
  <p>${grass.hosts}</p><div class='pest_images'><p>${grass.pest_images[0]}</p> <p>${grass.pest_images[1]}</p>\
  <p>${grass.pest_images[2]}</p> </div><p>Uses: ${grass.uses}</p>\
  <p>Links: <a href='${grass.links[1]}' target='_blank'>${grass.links[0]}</a></p>\
  <p>Links: <a href='${grass.links[3]}' target='_blank'>${grass.links[2]}</a>\
  <p>Links: <a href='${grass.links[5]}' target='_blank'>${grass.links[4]}</a></p> \
  <p>Links: <a href='${grass.links[7]}' target='_blank'>${grass.links[6]}</a></p>\
  <p>Links: <a href='${grass.links[9]}' target='_blank'>${grass.links[8]}</a>\
  <p>Links: <a href='${grass.links[11]}' target='_blank'>${grass.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${grass.observations}</a></p>\
  <p>Location observations: ${grass.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_hawkweed() {
  
  
 
  heading.innerHTML = 
  `<h1>${hawkweed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/hawksbeard.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/hawksbeard-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/hawksbeard-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/hawksbeard-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/hawksbeard-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/hawksbeard-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/hawksbeard-3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/hawksbeard-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_2.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_3.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_4.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_5.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_6.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_7.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
  photo_text_8.innerHTML = `<p>Smooth Hawksbeard (<em>Crepis capillaris </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${hawkweed.botanical_name}</h3>\
  <h3>Family: ${hawkweed.family}</h3><h3>Other common names: ${hawkweed.other_common_names}</h3>\
  <br> <p>${hawkweed.cultural}</p>\
  <p>${hawkweed.hosts}</p><div class='pest_images'><p>${hawkweed.pest_images[0]}</p> <p>${hawkweed.pest_images[1]}</p>\
  <p>${hawkweed.pest_images[2]}</p> </div><p>Uses: ${hawkweed.uses}</p>\
  <p>Links: <a href='${hawkweed.links[1]}' target='_blank'>${hawkweed.links[0]}</a></p>\
  <p>Links: <a href='${hawkweed.links[3]}' target='_blank'>${hawkweed.links[2]}</a>\
  <p>Links: <a href='${hawkweed.links[5]}' target='_blank'>${hawkweed.links[4]}</a></p> \
  <p>Links: <a href='${hawkweed.links[7]}' target='_blank'>${hawkweed.links[6]}</a></p>\
  <p>Links: <a href='${hawkweed.links[9]}' target='_blank'>${hawkweed.links[8]}</a>\
  <p>Links: <a href='${hawkweed.links[11]}' target='_blank'>${hawkweed.links[10]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${hawkweed.observations}</a></p>\
  <p>Location observations: ${hawkweed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_heliotropium() {
  
  
 
  heading.innerHTML = 
  `<h1>${heliotropium.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/heliotrope-1.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/heliotrope-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/heliotrope-butterfly.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/heliotrope-flowers.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/heliotrope-orchard.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/heliotrope-1.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/heliotrope-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/heliotrope-orchard.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_2.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_3.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_4.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_5.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_6.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_7.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
  photo_text_8.innerHTML = `<p>Blue Heliotrope (<em>Heliotropium amplexicaule </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${heliotropium.botanical_name}</h3>\
  <h3>Family: ${heliotropium.family}</h3><h3>Other common names: ${heliotropium.other_common_names}</h3>\
  <br> <p>${heliotropium.cultural}</p>\
  <p>${heliotropium.hosts}</p><div class='pest_images'><p>${heliotropium.pest_images[0]}</p> <p>${heliotropium.pest_images[1]}</p>\
  <p>${heliotropium.pest_images[2]}</p> </div><p>Uses: ${heliotropium.uses}</p>\
  <p>Links: <a href='${heliotropium.links[1]}' target='_blank'>${heliotropium.links[0]}</a></p>\
  <p>Links: <a href='${heliotropium.links[3]}' target='_blank'>${heliotropium.links[2]}</a>\
  <p>Links: <a href='${heliotropium.links[5]}' target='_blank'>${heliotropium.links[4]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${heliotropium.observations}</a></p>\
  <p>Location observations: ${heliotropium.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_indigo() {
  
  
 
  heading.innerHTML = 
  `<h1>${indigo.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/creeping-indigo.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/creeping-indigo-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/creeping-indigo-orchardfloor.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/creeping-indigo-orchard-row.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/creeping-indigo-root.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/creeping-indigo-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/creeping-indigo-orchardfloor.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/creeping-indigo.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_2.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_3.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_4.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_5.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_6.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_7.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
  photo_text_8.innerHTML = `<p>Creeping indigo (<em>Indigofera spicata </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${indigo.botanical_name}</h3>\
  <h3>Family: ${indigo.family}</h3><h3>Other common names: ${indigo.other_common_names}</h3>\
  <br> <p>${indigo.cultural}</p>\
  <p>${indigo.hosts}</p><div class='pest_images'><p>${indigo.pest_images[0]}</p> <p>${indigo.pest_images[1]}</p>\
  <p>${indigo.pest_images[2]}</p> </div><p>Uses: ${indigo.uses}</p>\
  <p>Links: <a href='${indigo.links[1]}' target='_blank'>${indigo.links[0]}</a></p>\
  <p>Links: <a href='${indigo.links[3]}' target='_blank'>${indigo.links[2]}</a>\
  <p>Links: <a href='${indigo.links[5]}' target='_blank'>${indigo.links[4]}</a></p> \
  <p>Links: <a href='${indigo.links[7]}' target='_blank'>${indigo.links[6]}</a></p>\
  <p>Links: <a href='${indigo.links[9]}' target='_blank'>${indigo.links[8]}</a>\
  <p>Links: <a href='${indigo.links[11]}' target='_blank'>${indigo.links[10]}</a></p> \
  <p>Links: <a href='${indigo.links[13]}' target='_blank'>${indigo.links[12]}</a></p> \
  <p>Links: <a href='${indigo.links[15]}' target='_blank'>${indigo.links[14]}</a></p> \
  <p>Links: <a href='${indigo.links[17]}' target='_blank'>${indigo.links[16]}</a></p> \
  <p>Links: <a href='${indigo.links[19]}' target='_blank'>${indigo.links[18]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${indigo.observations}</a></p>\
  <p>Location observations: ${indigo.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_khaki() {
  
  
 
  heading.innerHTML = 
  `<h1>${khaki.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/khaki-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/khaki-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/khaki-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/khaki-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/khaki-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/khaki-6.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/khaki-7.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/khaki-9.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_2.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_3.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_4.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_5.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_6.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_7.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
  photo_text_8.innerHTML = `<p>Khaki weed (<em>Alternanthera pungens </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${khaki.botanical_name}</h3>\
  <h3>Family: ${khaki.family}</h3><h3>Other common names: ${khaki.other_common_names}</h3>\
  <br> <p>${khaki.cultural}</p>\
  <p>${khaki.hosts}</p><div class='pest_images'><p>${khaki.pest_images[0]}</p> <p>${khaki.pest_images[1]}</p>\
  <p>${khaki.pest_images[2]}</p> </div><p>Uses: ${khaki.uses}</p>\
  <p>Links: <a href='${khaki.links[1]}' target='_blank'>${khaki.links[0]}</a></p>\
  <p>Links: <a href='${khaki.links[3]}' target='_blank'>${khaki.links[2]}</a>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${khaki.observations}</a></p>\
  <p>Location observations: ${khaki.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_lotononis() {
  
  
 
  heading.innerHTML = 
  `<h1>${lotononis_bainesii.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_3.jpg" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_6.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_7.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/lotononis_bainesii_4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_2.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_3.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_4.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_5.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_6.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_7.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
  photo_text_8.innerHTML = `<p>Lotononis (<em>Lotononis bainesii </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${lotononis_bainesii.botanical_name}</h3>\
  <h3>Family: ${lotononis_bainesii.family}</h3><h3>Other common names: ${lotononis_bainesii.other_common_names}</h3>\
  <br> <p>${lotononis_bainesii.cultural}</p>\
  <p>${lotononis_bainesii.hosts}</p><div class='pest_images'><p>${lotononis_bainesii.pest_images[0]}</p> <p>${lotononis_bainesii.pest_images[1]}</p>\
  <p>${lotononis_bainesii.pest_images[2]}</p> </div><p>Uses: ${lotononis_bainesii.uses}</p>\
  <p>Links: <a href='${lotononis_bainesii.links[1]}' target='_blank'>${lotononis_bainesii.links[0]}</a></p>\
  <p>Links: <a href='${lotononis_bainesii.links[3]}' target='_blank'>${lotononis_bainesii.links[2]}</a>\
  <p>Links: <a href='${lotononis_bainesii.links[5]}' target='_blank'>${lotononis_bainesii.links[4]}</a></p> \
  <p>Links: <a href='${lotononis_bainesii.links[7]}' target='_blank'>${lotononis_bainesii.links[6]}</a></p>\
  <p>Links: <a href='${lotononis_bainesii.links[9]}' target='_blank'>${lotononis_bainesii.links[8]}</a>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${lotononis_bainesii.observations}</a></p>\
  <p>Location observations: ${lotononis_bainesii.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_mallow() {
  
  
 
  heading.innerHTML = 
  `<h1>${Mallow.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Mallow.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Mallow_orchard.jpg" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Mallow_orchard-1.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Mallow-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Mallow-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Mallow-flower.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Mallow-orchard-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Mallow-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_2.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_3.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_4.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_5.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_6.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_7.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
  photo_text_8.innerHTML = `<p>Mallow (<em>Malva parviflora </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${Mallow.botanical_name}</h3>\
  <h3>Family: ${Mallow.family}</h3><h3>Other common names: ${Mallow.other_common_names}</h3>\
  <br> <p>${Mallow.cultural}</p>\
  <p>${Mallow.hosts}</p><div class='pest_images'><p>${Mallow.pest_images[0]}</p> <p>${Mallow.pest_images[1]}</p>\
  <p>${Mallow.pest_images[2]}</p> </div><p>Uses: ${Mallow.uses}</p>\
  <p>Links: <a href='${Mallow.links[1]}' target='_blank'>${Mallow.links[0]}</a></p>\
  <p>Links: <a href='${Mallow.links[3]}' target='_blank'>${Mallow.links[2]}</a>\
  <p>Links: <a href='${Mallow.links[5]}' target='_blank'>${Mallow.links[4]}</a></p> \
  <p>Links: <a href='${Mallow.links[7]}' target='_blank'>${Mallow.links[6]}</a></p>\
  <p>Links: <a href='${Mallow.links[9]}' target='_blank'>${Mallow.links[8]}</a>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${Mallow.observations}</a></p>\
  <p>Location observations: ${Mallow.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_malvastrum() {
  
  
 
  heading.innerHTML = 
  `<h1>${malvastrum.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum-3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Malvastrum-coromandelianum.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_2.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Prickly Malvastrum  (<em>Malvastrum coromandelianum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${malvastrum.botanical_name}</h3>\
  <h3>Family: ${malvastrum.family}</h3><h3>Other common names: ${malvastrum.other_common_names}</h3>\
  <br> <p>${malvastrum.cultural}</p>\
  <p>${malvastrum.hosts}</p><div class='pest_images'><p>${malvastrum.pest_images[0]}</p> <p>${malvastrum.pest_images[1]}</p>\
  <p>${malvastrum.pest_images[2]}</p> </div><p>Uses: ${malvastrum.uses}</p>\
  <p>Links: <a href='${malvastrum.links[1]}' target='_blank'>${malvastrum.links[0]}</a></p>\
  <p>Links: <a href='${malvastrum.links[3]}' target='_blank'>${malvastrum.links[2]}</a>\
  <p>Links: <a href='${malvastrum.links[5]}' target='_blank'>${malvastrum.links[4]}</a></p> \
  <p>Links: <a href='${malvastrum.links[7]}' target='_blank'>${malvastrum.links[6]}</a></p>\
  <p>Links: <a href='${malvastrum.links[9]}' target='_blank'>${malvastrum.links[8]}</a>\
  <p>Links: <a href='${malvastrum.links[11]}' target='_blank'>${malvastrum.links[10]}</a></p> \
  <p>Links: <a href='${malvastrum.links[13]}' target='_blank'>${malvastrum.links[12]}</a></p> \
  <p>Links: <a href='${malvastrum.links[15]}' target='_blank'>${malvastrum.links[14]}</a></p> \
  <p>Links: <a href='${malvastrum.links[17]}' target='_blank'>${malvastrum.links[16]}</a></p> \
  <p>Links: <a href='${malvastrum.links[19]}' target='_blank'>${malvastrum.links[18]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${malvastrum.observations}</a></p>\
  <p>Location observations: ${malvastrum.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_melilotus() {
  
  
 
  heading.innerHTML = 
  `<h1>${melilotus.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/melilotus-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/melilotus-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/melilotus-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/melilotus-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/melilotus-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/melilotus-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/melilotus-3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/melilotus-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_2.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_3.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_4.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_5.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_6.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_7.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
  photo_text_8.innerHTML = `<p>Hexham scent  (<em>Melilotus indicus </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${melilotus.botanical_name}</h3>\
  <h3>Family: ${melilotus.family}</h3><h3>Other common names: ${melilotus.other_common_names}</h3>\
  <br> <p>${melilotus.cultural}</p>\
  <p>${melilotus.hosts}</p><div class='pest_images'><p>${melilotus.pest_images[0]}</p> <p>${melilotus.pest_images[1]}</p>\
  <p>${melilotus.pest_images[2]}</p> </div><p>Uses: ${melilotus.uses}</p>\
  <p>Links: <a href='${melilotus.links[1]}' target='_blank'>${melilotus.links[0]}</a></p>\
  <p>Links: <a href='${melilotus.links[3]}' target='_blank'>${melilotus.links[2]}</a>\
  <p>Links: <a href='${melilotus.links[5]}' target='_blank'>${melilotus.links[4]}</a></p> \
  <p>Links: <a href='${melilotus.links[7]}' target='_blank'>${melilotus.links[6]}</a></p>\
  <p>Links: <a href='${melilotus.links[9]}' target='_blank'>${melilotus.links[8]}</a>\
  <p>Links: <a href='${melilotus.links[11]}' target='_blank'>${melilotus.links[10]}</a></p> \
  <p>Links: <a href='${melilotus.links[13]}' target='_blank'>${melilotus.links[12]}</a></p> \
  <p>Links: <a href='${melilotus.links[15]}' target='_blank'>${melilotus.links[14]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${melilotus.observations}</a></p>\
  <p>Location observations: ${melilotus.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_mitracarpus() {
  
  
 
  heading.innerHTML = 
  `<h1>${mitracarpus.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/mitracarpus-2.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/mitracarpus-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/mitracarpus-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/mitracarpus-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/mitracarpus-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/mitracarpus-2.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/mitracarpus-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/mitracarpus-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_2.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_3.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_4.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_5.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_6.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_7.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
  photo_text_8.innerHTML = `<p>White Eye  (<em>Mitracarpus hirtus </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${mitracarpus.botanical_name}</h3>\
  <h3>Family: ${mitracarpus.family}</h3><h3>Other common names: ${mitracarpus.other_common_names}</h3>\
  <br> <p>${mitracarpus.cultural}</p>\
  <p>${mitracarpus.hosts}</p><div class='pest_images'><p>${mitracarpus.pest_images[0]}</p> <p>${mitracarpus.pest_images[1]}</p>\
  <p>${mitracarpus.pest_images[2]}</p> </div><p>Uses: ${mitracarpus.uses}</p>\
  <p>Links: <a href='${mitracarpus.links[1]}' target='_blank'>${mitracarpus.links[0]}</a></p>\
  <p>Links: <a href='${mitracarpus.links[3]}' target='_blank'>${mitracarpus.links[2]}</a>\
  <p>Links: <a href='${mitracarpus.links[5]}' target='_blank'>${mitracarpus.links[4]}</a></p> \
  <p>Links: <a href='${mitracarpus.links[7]}' target='_blank'>${mitracarpus.links[6]}</a></p>\
  <p>Links: <a href='${mitracarpus.links[9]}' target='_blank'>${mitracarpus.links[8]}</a>\
  <p>Links: <a href='${mitracarpus.links[11]}' target='_blank'>${mitracarpus.links[10]}</a></p> \
  <p>Links: <a href='${mitracarpus.links[13]}' target='_blank'>${mitracarpus.links[12]}</a></p> \
  <p>Links: <a href='${mitracarpus.links[15]}' target='_blank'>${mitracarpus.links[14]}</a></p> \
  <p>Links: <a href='${mitracarpus.links[17]}' target='_blank'>${mitracarpus.links[16]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${mitracarpus.observations}</a></p>\
  <p>Location observations: ${mitracarpus.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_modiola() {
  
  
 
  heading.innerHTML = 
  `<h1>${modiola.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/modiola_1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/modiola_2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/modiola_3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/modiola_4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/modiola_5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/modiola_1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/modiola_2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/modiola_3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_2.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_3.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_4.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_5.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_6.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_7.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
  photo_text_8.innerHTML = `<p>Red-flowered mallow  (<em>Modiola caroliniana </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${modiola.botanical_name}</h3>\
  <h3>Family: ${modiola.family}</h3><h3>Other common names: ${modiola.other_common_names}</h3>\
  <br> <p>${modiola.cultural}</p>\
  <p>${modiola.hosts}</p><div class='pest_images'><p>${modiola.pest_images[0]}</p> <p>${modiola.pest_images[1]}</p>\
  <p>${modiola.pest_images[2]}</p> </div><p>Uses: ${modiola.uses}</p>\
  <p>Links: <a href='${modiola.links[1]}' target='_blank'>${modiola.links[0]}</a></p>\
  <p>Links: <a href='${modiola.links[3]}' target='_blank'>${modiola.links[2]}</a>\
  <p>Links: <a href='${modiola.links[5]}' target='_blank'>${modiola.links[4]}</a></p> \
  <p>Links: <a href='${modiola.links[7]}' target='_blank'>${modiola.links[6]}</a></p>\
  <p>Links: <a href='${modiola.links[9]}' target='_blank'>${modiola.links[8]}</a>\
  <p>Links: <a href='${modiola.links[11]}' target='_blank'>${modiola.links[10]}</a></p> \
  <p>Links: <a href='${modiola.links[13]}' target='_blank'>${modiola.links[12]}</a></p> \
  <p>Links: <a href='${modiola.links[15]}' target='_blank'>${modiola.links[14]}</a></p> \
  <p>Links: <a href='${modiola.links[17]}' target='_blank'>${modiola.links[16]}</a></p>\
  <p>Links: <a href='${modiola.links[19]}' target='_blank'>${modiola.links[18]}</a>\
  <p>Links: <a href='${modiola.links[21]}' target='_blank'>${modiola.links[20]}</a></p> \
  <p>Links: <a href='${modiola.links[23]}' target='_blank'>${modiola.links[22]}</a></p>\
  <p>Links: <a href='${modiola.links[25]}' target='_blank'>${modiola.links[24]}</a>\
  <p>Links: <a href='${modiola.links[27]}' target='_blank'>${modiola.links[26]}</a></p> \
  <p>Links: <a href='${modiola.links[29]}' target='_blank'>${modiola.links[28]}</a></p> \
  <p>Links: <a href='${modiola.links[31]}' target='_blank'>${modiola.links[30]}</a></p> \
  <p>Links: <a href='${modiola.links[33]}' target='_blank'>${modiola.links[32]}</a></p> \
  <p>Links: <a href='${modiola.links[35]}' target='_blank'>${modiola.links[34]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${modiola.observations}</a></p>\
  <p>Location observations: ${modiola.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_nutgrass() {
  
  
 
  heading.innerHTML = 
  `<h1>${nutgrass.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/nutgrass_5.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/nutgrass_1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/nutgrass_2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/nutgrass_3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/nutgrass_4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/nutgrass_5.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/nutgrass_interrow.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/nutgrass_interrow-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>)</p>`;
  photo_text_2.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>)</p>`;
  photo_text_3.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>)</p>`;
  photo_text_4.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>)</p>`;
  photo_text_5.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>)</p>`;
  photo_text_6.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>)</p>`;
  photo_text_7.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>) <br>a dominant regrowth plant following profiling</p>`;
  photo_text_8.innerHTML = `<p>Nutgrass or Nutsedge  (<em>Cyperus spp. </em>) <br>a dominant regrowth plant following profiling</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${nutgrass.botanical_name}</h3>\
  <h3>Family: ${nutgrass.family}</h3><h3>Other common names: ${nutgrass.other_common_names}</h3>\
  <br> <p>${nutgrass.cultural}</p>\
  <p>${nutgrass.hosts}</p><div class='pest_images'><p>${nutgrass.pest_images[0]}</p> <p>${nutgrass.pest_images[1]}</p>\
  <p>${nutgrass.pest_images[2]}</p> </div><p>Uses: ${nutgrass.uses}</p>\
  <p>Links: <a href='${nutgrass.links[1]}' target='_blank'>${nutgrass.links[0]}</a></p>\
  <p>Links: <a href='${nutgrass.links[3]}' target='_blank'>${nutgrass.links[2]}</a>\
  <p>Links: <a href='${nutgrass.links[5]}' target='_blank'>${nutgrass.links[4]}</a></p> \
  <p>Links: <a href='${nutgrass.links[7]}' target='_blank'>${nutgrass.links[6]}</a></p>\
  <p>Links: <a href='${nutgrass.links[9]}' target='_blank'>${nutgrass.links[8]}</a>\
  <p>Links: <a href='${nutgrass.links[11]}' target='_blank'>${nutgrass.links[10]}</a></p> \
  <p>Links: <a href='${nutgrass.links[13]}' target='_blank'>${nutgrass.links[12]}</a></p> \
  <p>Links: <a href='${nutgrass.links[15]}' target='_blank'>${nutgrass.links[14]}</a></p> \
  <p>Links: <a href='${nutgrass.links[17]}' target='_blank'>${nutgrass.links[16]}</a></p> \
  <p>Links: <a href='${nutgrass.links[19]}' target='_blank'>${nutgrass.links[18]}</a></p> \
  <p>Links: <a href='${nutgrass.links[21]}' target='_blank'>${nutgrass.links[20]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${nutgrass.observations}</a></p>\
  <p>Location observations: ${nutgrass.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_pigweed() {
  
  
 
  heading.innerHTML = 
  `<h1>${pigweed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_4.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Portulaca_oleracea_3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_2.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_3.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_4.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_5.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_6.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_7.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
  photo_text_8.innerHTML = `<p>Pigweed  (<em>Portulaca oleracea </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${pigweed.botanical_name}</h3>\
  <h3>Family: ${pigweed.family}</h3><h3>Other common names: ${pigweed.other_common_names}</h3>\
  <br> <p>${pigweed.cultural}</p>\
  <p>${pigweed.hosts}</p><div class='pest_images'><p>${pigweed.pest_images[0]}</p> <p>${pigweed.pest_images[1]}</p>\
  <p>${pigweed.pest_images[2]}</p> </div><p>Uses: ${pigweed.uses}</p>\
  <p>Links: <a href='${pigweed.links[1]}' target='_blank'>${pigweed.links[0]}</a></p>\
  <p>Links: <a href='${pigweed.links[3]}' target='_blank'>${pigweed.links[2]}</a>\
  <p>Links: <a href='${pigweed.links[5]}' target='_blank'>${pigweed.links[4]}</a></p> \
  <p>Links: <a href='${pigweed.links[7]}' target='_blank'>${pigweed.links[6]}</a></p>\
  <p>Links: <a href='${pigweed.links[9]}' target='_blank'>${pigweed.links[8]}</a>\
  <p>Links: <a href='${pigweed.links[11]}' target='_blank'>${pigweed.links[10]}</a></p> \
  <p>Links: <a href='${pigweed.links[13]}' target='_blank'>${pigweed.links[12]}</a></p> \
  <p>Links: <a href='${pigweed.links[15]}' target='_blank'>${pigweed.links[14]}</a></p> \
  <p>Links: <a href='${pigweed.links[17]}' target='_blank'>${pigweed.links[16]}</a></p>\
  <p>Links: <a href='${pigweed.links[19]}' target='_blank'>${pigweed.links[18]}</a>\
  <p>Links: <a href='${pigweed.links[21]}' target='_blank'>${pigweed.links[20]}</a></p> \
  <p>Links: <a href='${pigweed.links[23]}' target='_blank'>${pigweed.links[22]}</a></p> \
  <p>Links: <a href='${pigweed.links[25]}' target='_blank'>${pigweed.links[24]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${pigweed.observations}</a></p>\
  <p>Location observations: ${pigweed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_portulaca() {
  
  
 
  heading.innerHTML = 
  `<h1>${portulaca_pilosa.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_1.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_2.jpg" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_5.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_1.jpg" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_2.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_4.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Portulaca_pilosa_5.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_2.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_3.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_4.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_5.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_6.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_7.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
  photo_text_8.innerHTML = `<p>Kiss-me-quick (<em>Portulaca pilosa </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${portulaca_pilosa.botanical_name}</h3>\
  <h3>Family: ${portulaca_pilosa.family}</h3><h3>Other common names: ${portulaca_pilosa.other_common_names}</h3>\
  <br> <p>${portulaca_pilosa.cultural}</p>\
  <p>${portulaca_pilosa.hosts}</p><div class='pest_images'><p>${portulaca_pilosa.pest_images[0]}</p> <p>${portulaca_pilosa.pest_images[1]}</p>\
  <p>${portulaca_pilosa.pest_images[2]}</p> </div><p>Uses: ${portulaca_pilosa.uses}</p>\
  <p>Links: <a href='${portulaca_pilosa.links[1]}' target='_blank'>${portulaca_pilosa.links[0]}</a></p>\
  <p>Links: <a href='${portulaca_pilosa.links[3]}' target='_blank'>${portulaca_pilosa.links[2]}</a>\
  <p>Links: <a href='${portulaca_pilosa.links[5]}' target='_blank'>${portulaca_pilosa.links[4]}</a></p> \
  <p>Links: <a href='${portulaca_pilosa.links[7]}' target='_blank'>${portulaca_pilosa.links[6]}</a></p>\
  <p>Links: <a href='${portulaca_pilosa.links[9]}' target='_blank'>${portulaca_pilosa.links[8]}</a>\
  <p>Links: <a href='${portulaca_pilosa.links[11]}' target='_blank'>${portulaca_pilosa.links[10]}</a></p> \
  <p>Links: <a href='${portulaca_pilosa.links[13]}' target='_blank'>${portulaca_pilosa.links[12]}</a></p> \
  <p>Links: <a href='${portulaca_pilosa.links[15]}' target='_blank'>${portulaca_pilosa.links[14]}</a></p> \
  <p>Links: <a href='${portulaca_pilosa.links[17]}' target='_blank'>${portulaca_pilosa.links[16]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${portulaca_pilosa.observations}</a></p>\
  <p>Location observations: ${portulaca_pilosa.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_plantago() {
  
  
 
  heading.innerHTML = 
  `<h1>${plantago.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-1.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
  photo_text_2.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
  photo_text_3.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
  photo_text_4.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
  photo_text_5.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)<br>Image by Josh Teyler (https://www.inaturalist.org/photos/127256441)</p>`;
  photo_text_6.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
  photo_text_7.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
  photo_text_8.innerHTML = `<p>Lamb's Tongues (<em>Plantago lanceolata </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${plantago.botanical_name}</h3>\
  <h3>Family: ${plantago.family}</h3><h3>Other common names: ${plantago.other_common_names}</h3>\
  <br> <p>${plantago.cultural}</p>\
  <p>${plantago.hosts}</p><div class='pest_images'><p>${plantago.pest_images[0]}</p> <p>${plantago.pest_images[1]}</p>\
  <p>${plantago.pest_images[2]}</p> </div><p>Uses: ${plantago.uses}</p>\
  <p>Links: <a href='${plantago.links[1]}' target='_blank'>${plantago.links[0]}</a></p>\
  <p>Links: <a href='${plantago.links[3]}' target='_blank'>${plantago.links[2]}</a>\
  <p>Links: <a href='${plantago.links[5]}' target='_blank'>${plantago.links[4]}</a></p> \
  <p>Links: <a href='${plantago.links[7]}' target='_blank'>${plantago.links[6]}</a></p>\
  <p>Links: <a href='${plantago.links[9]}' target='_blank'>${plantago.links[8]}</a>\
  <p>Links: <a href='${plantago.links[11]}' target='_blank'>${plantago.links[10]}</a></p> \
  <p>Links: <a href='${plantago.links[13]}' target='_blank'>${plantago.links[12]}</a></p> \
  <p>Links: <a href='${plantago.links[15]}' target='_blank'>${plantago.links[14]}</a></p> \
  <p>Links: <a href='${plantago.links[17]}' target='_blank'>${plantago.links[16]}</a></p>\
  <p>Links: <a href='${plantago.links[19]}' target='_blank'>${plantago.links[18]}</a>\
  <p>Links: <a href='${plantago.links[21]}' target='_blank'>${plantago.links[20]}</a></p> \
  <p>Links: <a href='${plantago.links[23]}' target='_blank'>${plantago.links[22]}</a></p> \
  <p>Links: <a href='${plantago.links[25]}' target='_blank'>${plantago.links[24]}</a></p> \
  <p>Links: <a href='${plantago.links[27]}' target='_blank'>${plantago.links[26]}</a></p> \
  <p>Links: <a href='${plantago.links[29]}' target='_blank'>${plantago.links[28]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${plantago.observations}</a></p>\
  <p>Location observations: ${plantago.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_plantain() {
  
  
 
  heading.innerHTML = 
  `<h1>${plant_ago.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/plantago.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Plantago-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/plantago_debilis_1.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/plantago_debilis_2.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/plantago_major.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/plantago_varia.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/plantago-lanceolata-3.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/plantago_debilis_1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Plantain (<em>Plantago spp. </em>)</p>`;
  photo_text_2.innerHTML = `<p>Plantain (<em>Plantago spp </em>)</p>`;
  photo_text_3.innerHTML = `<p>Plantain (<em>Plantago debilis </em>)</p>`;
  photo_text_4.innerHTML = `<p>Plantain (<em>Plantago debilis </em>)</p>`;
  photo_text_5.innerHTML = `<p>Plantain (<em>Plantago major </em>)</p>`;
  photo_text_6.innerHTML = `<p>Plantain (<em>Plantago varia </em>)</p>`;
  photo_text_7.innerHTML = `<p>Plantain (<em>Plantago lanceolata </em>)</p>`;
  photo_text_8.innerHTML = `<p>Plantain (<em>Plantago debilis </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${plant_ago.botanical_name}</h3>\
  <h3>Family: ${plant_ago.family}</h3><h3>Other common names: ${plant_ago.other_common_names}</h3>\
  <br> <p>${plant_ago.cultural}</p>\
  <p>${plant_ago.hosts}</p><div class='pest_images'><p>${plant_ago.pest_images[0]}</p> <p>${plant_ago.pest_images[1]}</p>\
  <p>${plant_ago.pest_images[2]}</p> </div><p>Uses: ${plant_ago.uses}</p>\
  <p>Links: <a href='${plant_ago.links[1]}' target='_blank'>${plant_ago.links[0]}</a></p>\
  <p>Links: <a href='${plant_ago.links[3]}' target='_blank'>${plant_ago.links[2]}</a>\
  <p>Links: <a href='${plant_ago.links[5]}' target='_blank'>${plant_ago.links[4]}</a></p> \
  <p>Links: <a href='${plant_ago.links[7]}' target='_blank'>${plant_ago.links[6]}</a></p>\
  <p>Links: <a href='${plant_ago.links[9]}' target='_blank'>${plant_ago.links[8]}</a>\
  <p>Links: <a href='${plant_ago.links[11]}' target='_blank'>${plant_ago.links[10]}</a></p> \
  <p>Links: <a href='${plant_ago.links[13]}' target='_blank'>${plant_ago.links[12]}</a></p> \
  <p>Links: <a href='${plant_ago.links[15]}' target='_blank'>${plant_ago.links[14]}</a></p> \
  <p>Links: <a href='${plant_ago.links[17]}' target='_blank'>${plant_ago.links[16]}</a></p> \
  <p>Links: <a href='${plant_ago.links[19]}' target='_blank'>${plant_ago.links[18]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${plant_ago.observations}</a></p>\
  <p>Location observations: ${plant_ago.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_potato_weed() {
  
  
 
  heading.innerHTML = 
  `<h1>${potato_weed.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/potato-weed-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/potato-weed-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/potato-weed-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/potato-weed-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/potato-weed-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/potato-weed-6.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/potato-weed-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/potato-weed-2.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_2.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_3.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_4.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_5.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_6.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_7.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
  photo_text_8.innerHTML = `<p>Potato weed (<em>Galinsoga parviflora </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${potato_weed.botanical_name}</h3>\
  <h3>Family: ${potato_weed.family}</h3><h3>Other common names: ${potato_weed.other_common_names}</h3>\
  <br> <p>${potato_weed.cultural}</p>\
  <p>${potato_weed.hosts}</p><div class='pest_images'><p>${potato_weed.pest_images[0]}</p> <p>${potato_weed.pest_images[1]}</p>\
  <p>${potato_weed.pest_images[2]}</p> </div><p>Uses: ${potato_weed.uses}</p>\
  <p>Links: <a href='${potato_weed.links[1]}' target='_blank'>${potato_weed.links[0]}</a></p>\
  <p>Links: <a href='${potato_weed.links[3]}' target='_blank'>${potato_weed.links[2]}</a>\
  <p>Links: <a href='${potato_weed.links[5]}' target='_blank'>${potato_weed.links[4]}</a></p> \
  <p>Links: <a href='${potato_weed.links[7]}' target='_blank'>${potato_weed.links[6]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${potato_weed.observations}</a></p>\
  <p>Location observations: ${potato_weed.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_purpletop() {
  
  
 
  heading.innerHTML = 
  `<h1>${purpletop.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/purpletop-2.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/purpletop-3.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/purpletop-1.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/purpletop-4.jpg" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/purpletop-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/purpletop-2.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/purpletop-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/purpletop-4.jpg" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_2.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_3.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_4.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_5.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_6.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_7.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
  photo_text_8.innerHTML = `<p>Purple top (<em>Verbena bonariensis </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${purpletop.botanical_name}</h3>\
  <h3>Family: ${purpletop.family}</h3><h3>Other common names: ${purpletop.other_common_names}</h3>\
  <br> <p>${purpletop.cultural}</p>\
  <p>${purpletop.hosts}</p><div class='pest_images'><p>${purpletop.pest_images[0]}</p> <p>${purpletop.pest_images[1]}</p>\
  <p>${purpletop.pest_images[2]}</p> </div><p>Uses: ${purpletop.uses}</p>\
  <p>Links: <a href='${purpletop.links[1]}' target='_blank'>${purpletop.links[0]}</a></p>\
  <p>Links: <a href='${purpletop.links[3]}' target='_blank'>${purpletop.links[2]}</a>\
  <p>Links: <a href='${purpletop.links[5]}' target='_blank'>${purpletop.links[4]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${purpletop.observations}</a></p>\
  <p>Location observations: ${purpletop.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_raphanus() {
  
  
 
  heading.innerHTML = 
  `<h1>${raphanus.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/wild-radish-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/wild-radish-5.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/wild-radish-6.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/wild-radish-7.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/wild-radish-11.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/wild-radish-12.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/wild-radish-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/wild-radish-5.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_2.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Wild Radish (<em>Raphanus raphanistrum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${raphanus.botanical_name}</h3>\
  <h3>Family: ${raphanus.family}</h3><h3>Other common names: ${raphanus.other_common_names}</h3>\
  <br> <p>${raphanus.cultural}</p>\
  <p>${raphanus.hosts}</p><div class='pest_images'><p>${raphanus.pest_images[0]}</p> <p>${raphanus.pest_images[1]}</p>\
  <p>${raphanus.pest_images[2]}</p> </div><p>Uses: ${raphanus.uses}</p>\
  <p>Links: <a href='${raphanus.links[1]}' target='_blank'>${raphanus.links[0]}</a></p>\
  <p>Links: <a href='${raphanus.links[3]}' target='_blank'>${raphanus.links[2]}</a>\
  <p>Links: <a href='${raphanus.links[5]}' target='_blank'>${raphanus.links[4]}</a></p> \
  <p>Links: <a href='${raphanus.links[7]}' target='_blank'>${raphanus.links[6]}</a></p>\
  <p>Links: <a href='${raphanus.links[9]}' target='_blank'>${raphanus.links[8]}</a>\
  <p>Links: <a href='${raphanus.links[11]}' target='_blank'>${raphanus.links[10]}</a></p> \
  <p>Links: <a href='${raphanus.links[13]}' target='_blank'>${raphanus.links[12]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${raphanus.observations}</a></p>\
  <p>Location observations: ${raphanus.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_rhodes() {
  
  
 
  heading.innerHTML = 
  `<h1>${rhodes.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/chloris-inflata-2.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/chloris-inflata-3.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/chloris-inflata-4.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/chloris-inflata-5.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/chloris-inflata-2.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/chloris-inflata-3.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/chloris-inflata-4.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/chloris-inflata-5.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_2.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_3.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_4.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_5.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_6.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_7.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
  photo_text_8.innerHTML = `<p>Purpletop Rhodes grass (<em>Chloris inflata </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${rhodes.botanical_name}</h3>\
  <h3>Family: ${rhodes.family}</h3><h3>Other common names: ${rhodes.other_common_names}</h3>\
  <br> <p>${rhodes.cultural}</p>\
  <p>${rhodes.hosts}</p><div class='pest_images'><p>${rhodes.pest_images[0]}</p> <p>${rhodes.pest_images[1]}</p>\
  <p>${rhodes.pest_images[2]}</p> </div><p>Uses: ${rhodes.uses}</p>\
  <p>Links: <a href='${rhodes.links[1]}' target='_blank'>${rhodes.links[0]}</a></p>\
  <p>Links: <a href='${rhodes.links[3]}' target='_blank'>${rhodes.links[2]}</a>\
  <p>Links: <a href='${rhodes.links[5]}' target='_blank'>${rhodes.links[4]}</a></p> \
  <p>Links: <a href='${rhodes.links[7]}' target='_blank'>${rhodes.links[6]}</a></p>\
  <p>Links: <a href='${rhodes.links[9]}' target='_blank'>${rhodes.links[8]}</a>\
  <p>Links: <a href='${rhodes.links[11]}' target='_blank'>${rhodes.links[10]}</a></p> \
  <p>Links: <a href='${rhodes.links[13]}' target='_blank'>${rhodes.links[12]}</a></p> \
  <p>Links: <a href='${rhodes.links[15]}' target='_blank'>${rhodes.links[14]}</a></p> \
  <p>Links: <a href='${rhodes.links[17]}' target='_blank'>${rhodes.links[16]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${rhodes.observations}</a></p>\
  <p>Location observations: ${rhodes.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_richardia() {
  
  
 
  heading.innerHTML = 
  `<h1>${richardia.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/richardia.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/richardia-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/richardia-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/richardia-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/richardia-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/richardia.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/richardia-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/richardia-3.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_2.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_3.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_4.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_5.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_6.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_7.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
  photo_text_8.innerHTML = `<p>'White Eye (<em>Richardia brasiliensis </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${richardia.botanical_name}</h3>\
  <h3>Family: ${richardia.family}</h3><h3>Other common names: ${richardia.other_common_names}</h3>\
  <br> <p>${richardia.cultural}</p>\
  <p>${richardia.hosts}</p><div class='pest_images'><p>${richardia.pest_images[0]}</p> <p>${richardia.pest_images[1]}</p>\
  <p>${richardia.pest_images[2]}</p> </div><p>Uses: ${richardia.uses}</p>\
  <p>Links: <a href='${richardia.links[1]}' target='_blank'>${richardia.links[0]}</a></p>\
  <p>Links: <a href='${richardia.links[3]}' target='_blank'>${richardia.links[2]}</a>\
  <p>Links: <a href='${richardia.links[5]}' target='_blank'>${richardia.links[4]}</a></p> \
  <p>Links: <a href='${richardia.links[7]}' target='_blank'>${richardia.links[6]}</a></p>\
  <p>Links: <a href='${richardia.links[9]}' target='_blank'>${richardia.links[8]}</a>\
  <p>Links: <a href='${richardia.links[11]}' target='_blank'>${richardia.links[10]}</a></p> \
  <p>Links: <a href='${richardia.links[13]}' target='_blank'>${richardia.links[12]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${richardia.observations}</a></p>\
  <p>Location observations: ${richardia.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_shade() {
  
  
 
  heading.innerHTML = 
  `<h1>${shade.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/solanum_nigrum_flower.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/solanum_nigrum_fruit.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/solanum_nigrum_plant.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/solanum_nigrum_orchard.jpg" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/solanum_nigrum_orchard_1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/solanum_nigrum_vb.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/solanum_nigrum.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/solanum_nigrum_gvb.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_2.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Blackberry nightshade (<em>Solanum nigrum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${shade.botanical_name}</h3>\
  <h3>Family: ${shade.family}</h3><h3>Other common names: ${shade.other_common_names}</h3>\
  <br> <p>${shade.cultural}</p>\
  <p>${shade.hosts}</p><div class='pest_images'><p>${shade.pest_images[0]}</p> <p>${shade.pest_images[1]}</p>\
  <p>${shade.pest_images[2]}</p> </div><p>Uses: ${shade.uses}</p>\
  <p>Links: <a href='${shade.links[1]}' target='_blank'>${shade.links[0]}</a></p>\
  <p>Links: <a href='${shade.links[3]}' target='_blank'>${shade.links[2]}</a>\
  <p>Links: <a href='${shade.links[5]}' target='_blank'>${shade.links[4]}</a></p> \
  <p>Links: <a href='${shade.links[7]}' target='_blank'>${shade.links[6]}</a></p>\
  <p>Links: <a href='${shade.links[9]}' target='_blank'>${shade.links[8]}</a>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${shade.observations}</a></p>\
  <p>Location observations: ${shade.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_sidaacuta() {
  
  
 
  heading.innerHTML = 
  `<h1>${sida_acuta.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/sida-acuta-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/sida-acuta-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_2.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_3.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_4.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_5.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_6.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_7.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
  photo_text_8.innerHTML = `<p>Sida (<em>Sida acuta </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${sida_acuta.botanical_name}</h3>\
  <h3>Family: ${sida_acuta.family}</h3><h3>Other common names: ${sida_acuta.other_common_names}</h3>\
  <br> <p>${sida_acuta.cultural}</p>\
  <p>${sida_acuta.hosts}</p><div class='pest_images'><p>${sida_acuta.pest_images[0]}</p> <p>${sida_acuta.pest_images[1]}</p>\
  <p>${sida_acuta.pest_images[2]}</p> </div><p>Uses: ${sida_acuta.uses}</p>\
  <p>Links: <a href='${sida_acuta.links[1]}' target='_blank'>${sida_acuta.links[0]}</a></p>\
  <p>Links: <a href='${sida_acuta.links[3]}' target='_blank'>${sida_acuta.links[2]}</a>\
  <p>Links: <a href='${sida_acuta.links[5]}' target='_blank'>${sida_acuta.links[4]}</a></p> \
  <p>Links: <a href='${sida_acuta.links[7]}' target='_blank'>${sida_acuta.links[6]}</a></p>\
  <p>Links: <a href='${sida_acuta.links[9]}' target='_blank'>${sida_acuta.links[8]}</a>\
  <p>Links: <a href='${sida_acuta.links[11]}' target='_blank'>${sida_acuta.links[10]}</a></p> \
  <p>Links: <a href='${sida_acuta.links[13]}' target='_blank'>${sida_acuta.links[12]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${sida_acuta.observations}</a></p>\
  <p>Location observations: ${sida_acuta.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_sidacordifolia() {
  
  
 
  heading.innerHTML = 
  `<h1>${sida_cordifolia.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/s-cordifolia-2.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/s-cordifolia-5.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/s-cordifolia-4.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/s-cordifolia-1.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/s-cordifolia-7.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/s-cordifolia-6.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/s-cordifolia-5.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/s-cordifolia-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_2.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_3.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_4.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_5.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_6.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_7.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
  photo_text_8.innerHTML = `<p>Flannelweed (<em>Sida cordifolia </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${sida_cordifolia.botanical_name}</h3>\
  <h3>Family: ${sida_cordifolia.family}</h3><h3>Other common names: ${sida_cordifolia.other_common_names}</h3>\
  <br> <p>${sida_cordifolia.cultural}</p>\
  <p>${sida_cordifolia.hosts}</p><div class='pest_images'><p>${sida_cordifolia.pest_images[0]}</p> <p>${sida_cordifolia.pest_images[1]}</p>\
  <p>${sida_cordifolia.pest_images[2]}</p> </div><p>Uses: ${sida_cordifolia.uses}</p>\
  <p>Links: <a href='${sida_cordifolia.links[1]}' target='_blank'>${sida_cordifolia.links[0]}</a></p>\
  <p>Links: <a href='${sida_cordifolia.links[3]}' target='_blank'>${sida_cordifolia.links[2]}</a>\
  <p>Links: <a href='${sida_cordifolia.links[5]}' target='_blank'>${sida_cordifolia.links[4]}</a></p> \
  <p>Links: <a href='${sida_cordifolia.links[7]}' target='_blank'>${sida_cordifolia.links[6]}</a></p>\
  <p>Links: <a href='${sida_cordifolia.links[9]}' target='_blank'>${sida_cordifolia.links[8]}</a>\
  <p>Links: <a href='${sida_cordifolia.links[11]}' target='_blank'>${sida_cordifolia.links[10]}</a></p> \
  <p>Links: <a href='${sida_cordifolia.links[13]}' target='_blank'>${sida_cordifolia.links[12]}</a></p> \
  <p>Links: <a href='${sida_cordifolia.links[15]}' target='_blank'>${sida_cordifolia.links[14]}</a></p> \
  <p>Links: <a href='${sida_cordifolia.links[17]}' target='_blank'>${sida_cordifolia.links[16]}</a></p> \
  <p>Links: <a href='${sida_cordifolia.links[19]}' target='_blank'>${sida_cordifolia.links[18]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${sida_cordifolia.observations}</a></p>\
  <p>Location observations: ${sida_cordifolia.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}


function showInfo_sidarhombifolia() {
  
  
 
  heading.innerHTML = 
  `<h1>${sida_rhombifolia.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Sida-rhom.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Sida-rhom-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Sida-rhom-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Sida-rhom-4.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Sida-rhom-5.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Sida-rhom-6.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Sida-rhom-2.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Sida-rhom-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_2.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_3.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_4.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_5.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_6.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_7.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
  photo_text_8.innerHTML = `<p>Paddy's Lucerne (<em>Sida rhombifolia </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${sida_rhombifolia.botanical_name}</h3>\
  <h3>Family: ${sida_rhombifolia.family}</h3><h3>Other common names: ${sida_rhombifolia.other_common_names}</h3>\
  <br> <p>${sida_rhombifolia.cultural}</p>\
  <p>${sida_rhombifolia.hosts}</p><div class='pest_images'><p>${sida_rhombifolia.pest_images[0]}</p> <p>${sida_rhombifolia.pest_images[1]}</p>\
  <p>${sida_rhombifolia.pest_images[2]}</p> </div><p>Uses: ${sida_rhombifolia.uses}</p>\
  <p>Links: <a href='${sida_rhombifolia.links[1]}' target='_blank'>${sida_rhombifolia.links[0]}</a></p>\
  <p>Links: <a href='${sida_rhombifolia.links[3]}' target='_blank'>${sida_rhombifolia.links[2]}</a>\
  <p>Links: <a href='${sida_rhombifolia.links[5]}' target='_blank'>${sida_rhombifolia.links[4]}</a></p> \
  <p>Links: <a href='${sida_rhombifolia.links[7]}' target='_blank'>${sida_rhombifolia.links[6]}</a></p>\
  <p>Links: <a href='${sida_rhombifolia.links[9]}' target='_blank'>${sida_rhombifolia.links[8]}</a>\
  <p>Links: <a href='${sida_rhombifolia.links[11]}' target='_blank'>${sida_rhombifolia.links[10]}</a></p> \
  <p>Links: <a href='${sida_rhombifolia.links[13]}' target='_blank'>${sida_rhombifolia.links[12]}</a></p> \
  <p>Links: <a href='${sida_rhombifolia.links[15]}' target='_blank'>${sida_rhombifolia.links[14]}</a></p> \
  <p>Links: <a href='${sida_rhombifolia.links[17]}' target='_blank'>${sida_rhombifolia.links[16]}</a></p> \
  <p>Links: <a href='${sida_rhombifolia.links[19]}' target='_blank'>${sida_rhombifolia.links[18]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${sida_rhombifolia.observations}</a></p>\
  <p>Location observations: ${sida_rhombifolia.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_sonchus() {
  
  
 
  heading.innerHTML = 
  `<h1>${sonchus.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/sonchus-plant-4.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/sonchus-plant-flower.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/sonchus-rosette.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/sonchus-plant-seed.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/sonchus-patch-1.jpg" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/sonchus-plant-3.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/sonchus-fungus-ladybird.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/sonchus-plant-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_2.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_3.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_4.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_5.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_6.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_7.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
  photo_text_8.innerHTML = `<p>Common sowthistle (<em>Sonchus oleraceus </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${sonchus.botanical_name}</h3>\
  <h3>Family: ${sonchus.family}</h3><h3>Other common names: ${sonchus.other_common_names}</h3>\
  <br> <p>${sonchus.cultural}</p>\
  <p>${sonchus.hosts}</p><div class='pest_images'><p>${sonchus.pest_images[0]}</p> <p>${sonchus.pest_images[1]}</p>\
  <p>${sonchus.pest_images[2]}</p> </div><p>Uses: ${sonchus.uses}</p>\
  <p>Links: <a href='${sonchus.links[1]}' target='_blank'>${sonchus.links[0]}</a></p>\
  <p>Links: <a href='${sonchus.links[3]}' target='_blank'>${sonchus.links[2]}</a>\
  <p>Links: <a href='${sonchus.links[5]}' target='_blank'>${sonchus.links[4]}</a></p> \
  <p>Links: <a href='${sonchus.links[7]}' target='_blank'>${sonchus.links[6]}</a></p>\
  <p>Links: <a href='${sonchus.links[9]}' target='_blank'>${sonchus.links[8]}</a>\
  <p>Links: <a href='${sonchus.links[11]}' target='_blank'>${sonchus.links[10]}</a></p> \
  <p>Links: <a href='${sonchus.links[13]}' target='_blank'>${sonchus.links[12]}</a></p> \
  <p>Links: <a href='${sonchus.links[15]}' target='_blank'>${sonchus.links[14]}</a></p> \
  <p>Links: <a href='${sonchus.links[17]}' target='_blank'>${sonchus.links[16]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${sonchus.observations}</a></p>\
  <p>Location observations: ${sonchus.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_slendercelery() {
  
  
 
  heading.innerHTML = 
  `<h1>${slender_celery.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-3.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-4.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-1.jpg" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-6.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-7.jpg" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-5.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Cyclospermum-leptophyllum-4.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_2.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Slender Celery (<em>Cyclospermum leptophyllum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${slender_celery.botanical_name}</h3>\
  <h3>Family: ${slender_celery.family}</h3><h3>Other common names: ${slender_celery.other_common_names}</h3>\
  <br> <p>${slender_celery.placeholder}</p><p>${slender_celery.cultural}</p>\
  <p>${slender_celery.hosts}</p><div class='pest_images'><p>${slender_celery.pest_images[0]}</p> <p>${slender_celery.pest_images[1]}</p>\
  <p>${slender_celery.pest_images[2]}</p> </div><p>Uses: ${slender_celery.uses}</p>\
  <p>Links: <a href='${slender_celery.links[1]}' target='_blank'>${slender_celery.links[0]}</a></p>\
  <p>Links: <a href='${slender_celery.links[3]}' target='_blank'>${slender_celery.links[2]}</a>\
  <p>Links: <a href='${slender_celery.links[5]}' target='_blank'>${slender_celery.links[4]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${slender_celery.observations}</a></p>\
  <p>Location observations: ${slender_celery.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_tridax() {
  
  
 
  heading.innerHTML = 
  `<h1>${tridax.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/tridax_daisy_2.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/Tridax_daisy_leaf.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/Tridax_daisy_plant.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/Tridax_daisy_flower-1.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/Tridax_daisy_flower-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/Tridax_daisy_flower-3.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/tridax_daisy_2.jpg" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/Tridax_daisy_leaf.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_2.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_3.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_4.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_5.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_6.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_7.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
  photo_text_8.innerHTML = `<p>Tridax daisy (<em>Tridax procumbens </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${tridax.botanical_name}</h3>\
  <h3>Family: ${tridax.family}</h3><h3>Other common names: ${tridax.other_common_names}</h3>\
  <br><p>${tridax.cultural}</p>\
  <p>${tridax.hosts}</p><div class='pest_images'><p>${tridax.pest_images[0]}</p> <p>${tridax.pest_images[1]}</p>\
  <p>${tridax.pest_images[2]}</p> </div><p>Uses: ${tridax.uses}</p>\
  <p>Links: <a href='${tridax.links[1]}' target='_blank'>${tridax.links[0]}</a></p>\
  <p>Links: <a href='${tridax.links[3]}' target='_blank'>${tridax.links[2]}</a>\
  <p>Links: <a href='${tridax.links[5]}' target='_blank'>${tridax.links[4]}</a></p> \
  <p>Links: <a href='${tridax.links[7]}' target='_blank'>${tridax.links[6]}</a></p>\
  <p>Links: <a href='${tridax.links[9]}' target='_blank'>${tridax.links[8]}</a>\
  <p>Links: <a href='${tridax.links[11]}' target='_blank'>${tridax.links[10]}</a></p> \
  <p>Links: <a href='${tridax.links[13]}' target='_blank'>${tridax.links[12]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${tridax.observations}</a></p>\
  <p>Location observations: ${tridax.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_smoothcatsear() {
  
  
 
  heading.innerHTML = 
  `<h1>${smooth_catsear.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_2.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_3.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_4.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_5.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_6.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_7.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
  photo_text_8.innerHTML = `<p>Smooth Catsear (<em>Hypochaeris glabra </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${smooth_catsear.botanical_name}</h3>\
  <h3>Family: ${smooth_catsear.family}</h3><h3>Other common names: ${smooth_catsear.other_common_names}</h3>\
  <br><p>${smooth_catsear.cultural}</p>\
  <p>${smooth_catsear.hosts}</p><div class='pest_images'><p>${smooth_catsear.pest_images[0]}</p> <p>${smooth_catsear.pest_images[1]}</p>\
  <p>${smooth_catsear.pest_images[2]}</p> </div><p>Uses: ${smooth_catsear.uses}</p>\
  <p>Links: <a href='${smooth_catsear.links[1]}' target='_blank'>${smooth_catsear.links[0]}</a></p>\
  <p>Links: <a href='${smooth_catsear.links[3]}' target='_blank'>${smooth_catsear.links[2]}</a>\
  <p>Links: <a href='${smooth_catsear.links[5]}' target='_blank'>${smooth_catsear.links[4]}</a></p> \
  <p>Links: <a href='${smooth_catsear.links[7]}' target='_blank'>${smooth_catsear.links[6]}</a></p>\
  <p>Links: <a href='${smooth_catsear.links[9]}' target='_blank'>${smooth_catsear.links[8]}</a>\
  <p>Links: <a href='${smooth_catsear.links[11]}' target='_blank'>${smooth_catsear.links[10]}</a></p> \
  <p>Links: <a href='${smooth_catsear.links[13]}' target='_blank'>${smooth_catsear.links[12]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${smooth_catsear.observations}</a></p>\
  <p>Location observations: ${smooth_catsear.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_tropicalchick() {
  
  
 
  heading.innerHTML = 
  `<h1>${tropChick.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/trop-chick.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/trop-chick-1.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/trop-chick-2.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/trop-chick-3.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/trop-chick-4.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/trop-chick-orchard.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/trop-chick-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/trop-chick-orchard-1.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_2.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_3.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_4.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_5.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_6.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_7.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
  photo_text_8.innerHTML = `<p>Tropical chickweed (<em>Drymaria cordata </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${tropChick.botanical_name}</h3>\
  <h3>Family: ${tropChick.family}</h3><h3>Other common names: ${tropChick.other_common_names}</h3>\
  <br><p>${tropChick.cultural}</p>\
  <p>${tropChick.hosts}</p><div class='pest_images'><p>${tropChick.pest_images[0]}</p> <p>${tropChick.pest_images[1]}</p>\
  <p>${tropChick.pest_images[2]}</p> </div><p>Uses: ${tropChick.uses}</p>\
  <p>Links: <a href='${tropChick.links[1]}' target='_blank'>${tropChick.links[0]}</a></p>\
  <p>Links: <a href='${tropChick.links[3]}' target='_blank'>${tropChick.links[2]}</a>\
  <p>Links: <a href='${tropChick.links[5]}' target='_blank'>${tropChick.links[4]}</a></p> \
  <p>Links: <a href='${tropChick.links[7]}' target='_blank'>${tropChick.links[6]}</a></p>\
  <p id="page-link"><a href='share.html'>${tropChick.observations}</a></p>\
  <p>Location observations: ${tropChick.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_vicia() {
  
  
 
  heading.innerHTML = 
  `<h1>${vicia.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/vetch-1.png" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/vetch-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/vetch-flower.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/vetch-pods.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/vetch-pods-1.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/vetch-bushland.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/vetch-1.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/vetch-flower.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_2.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_3.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_4.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_5.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_6.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_7.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
  photo_text_8.innerHTML = `<p>Common Vetch (<em>Vicia sativa </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${vicia.botanical_name}</h3>\
  <h3>Family: ${vicia.family}</h3><h3>Other common names: ${vicia.other_common_names}</h3>\
  <br><p>${vicia.cultural}</p>\
  <p>${vicia.hosts}</p><div class='pest_images'><p>${vicia.pest_images[0]}</p> <p>${vicia.pest_images[1]}</p>\
  <p>${vicia.pest_images[2]}</p> </div><p>Uses: ${vicia.uses}</p>\
  <p>Links: <a href='${vicia.links[1]}' target='_blank'>${vicia.links[0]}</a></p>\
  <p>Links: <a href='${vicia.links[3]}' target='_blank'>${vicia.links[2]}</a>\
  <p>Links: <a href='${vicia.links[5]}' target='_blank'>${vicia.links[4]}</a></p> \
  <p>Links: <a href='${vicia.links[7]}' target='_blank'>${vicia.links[6]}</a></p>\
  <p>Links: <a href='${vicia.links[9]}' target='_blank'>${vicia.links[8]}</a>\
  <p>Links: <a href='${vicia.links[11]}' target='_blank'>${vicia.links[10]}</a></p> \
  <p>Links: <a href='${vicia.links[13]}' target='_blank'>${vicia.links[12]}</a></p> \
  <p>Links: <a href='${vicia.links[15]}' target='_blank'>${vicia.links[14]}</a></p> \
   <p>Links: <a href='${vicia.links[17]}' target='_blank'>${vicia.links[16]}</a></p> \
  <p>Links: <a href='${vicia.links[19]}' target='_blank'>${vicia.links[18]}</a></p> \
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${vicia.observations}</a></p>\
  <p>Location observations: ${vicia.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}

function showInfo_willowherb() {
  
  
 
  heading.innerHTML = 
  `<h1>${willowHerb.common_name}</h1><br><br><br><br></br>`;

  photo_1.innerHTML = `<img src="./Images/weeds/willowherb-1.jpg" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/willowherb-2.png" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/willowherb-3.png" style="width:100%">`;
  photo_4.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_5.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_6.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_7.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_8.innerHTML = `<img src="./Images/weeds/blank-photo.png" style="width:100%">`;
  photo_text_1.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_2.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_3.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_4.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_5.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_6.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_7.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
  photo_text_8.innerHTML = `<p>Willowherb (<em>Epilobium ciliatum </em>)</p>`;
 


  readMore.innerHTML = 
  `<div class="paragraph"><h3>Botanical name: ${willowHerb.botanical_name}</h3>\
  <h3>Family: ${willowHerb.family}</h3><h3>Other common names: ${willowHerb.other_common_names}</h3>\
  <br><p>${willowHerb.cultural}</p>\
  <p>${willowHerb.hosts}</p><div class='pest_images'><p>${willowHerb.pest_images[0]}</p> <p>${willowHerb.pest_images[1]}</p>\
  <p>${willowHerb.pest_images[2]}</p> </div><p>Uses: ${willowHerb.uses}</p>\
  <p>Links: <a href='${willowHerb.links[1]}' target='_blank'>${willowHerb.links[0]}</a></p>\
  <p>Links: <a href='${willowHerb.links[3]}' target='_blank'>${willowHerb.links[2]}</a>\
  <p>Links: <a href='${willowHerb.links[5]}' target='_blank'>${willowHerb.links[4]}</a></p> \
  <p>Links: <a href='${willowHerb.links[7]}' target='_blank'>${willowHerb.links[6]}</a></p>\
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${willowHerb.observations}</a></p>\
  <p>Location observations: ${willowHerb.sightings}</p>\
  </div>\
  <div class="empty-1"></div>\
  <footer id="footer" class="footerTest">\
 <div class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </div>\
</footer>`;
}













/*
function showInfo_() {
  heading.innerHTML = 
  `<h1>${.common_name}</h1>`;

  photo_1.innerHTML = `<img src="./Images/weeds/" style="width:100%">`;
  photo_2.innerHTML = `<img src="./Images/weeds/" style="width:100%">`;
  photo_3.innerHTML = `<img src="./Images/weeds/" style="width:100%">`;
  photo_text_1.innerHTML = `<p></p>`;
  photo_text_2.innerHTML = `<p></p>`;
  photo_text_3.innerHTML = `<p></p>`;

  readMore.innerHTML =
  `
  <p>Field Observations:</p>\
  <p id="page-link"><a href='share.html'>${.observations}</a></p>\
  <div class="empty-1"></div>\
  <footer id="footer">\
 <section class="copyright">\
     <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">\
     <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" />\
     </a><br>This work is licensed under a \
     <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>\
     <p>Website by: G. Chirgwin</p>\
 </section>\
</footer>`
}
*/




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += "active";
}




