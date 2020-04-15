const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://starclinch.com/search?category=&q=singers').then((response) => {
    let $ = cheerio.load(response.data);
    let singersList = [];
    $('.search-artist-item').each(function(index, element){
        let h6 = $(element).find('h6');
        let name = $(h6).find('a').text();
        singersList.push(name);
    });

    console.log('SINGER NAMES .....', singersList);
})