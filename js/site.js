const ball = {
    CityName: 'Reykjavik',
    geographicalPosition: '64 ° 09 \'N, 21 ° 58\' W',
    briefIntroduction: 'The capital and largest city of Iceland, and also the capital with the highest latitude in the world',
    population: '110000',
    area: '120 square kilometers',
    GDP: 'US $25.5 billion',
    nationalDay: new Date('1944-06-17'),
    annualPrecipitation: '840mm',
    text: 'Reysiavik is the capital of the worid\'s highestlatitude (64 degrees O9 minutes north) and is home to nearly two-thirds oflceland\'s population.Reykijvikhas no high-rise buildings,and you can look out over the sea from the city center.In the center of the old town, the churches,the old parliament buildings ,and the squares arejustas they were when they were first buit, and you can feel the culture of the country as you walk through the streets.Rather than a large Scandinavian city it is a small town, a town full of surprises at any time, with a lose and lazy atmosphere, where residents lead avery sophisticated life.',
    scenicSpot: [
        {
            name: 'Tjornin',
            briefIntroduction: 'The central area of Reykjavik is near Tonin Lake in the west of the old city. Some major buildings in the city, such as the Parliament Building, the City Hall, Reykjavik University, the National Museum and Reykjavik Cathedral, are all around the lake'
        },
        {
            name: 'Reykjanes Lighthouse',
            briefIntroduction: 'Reykjanes lighthouse is the first lighthouse in Iceland, built in 1878',
        },
        {
            name: 'Arbaer Open-air Folk Museum',
            briefIntroduction: 'The prototype of old houses in Reykjavik in different periods has been preserved, some of which are built into farmhouses and churches with mud and straw',
        },
        {
            name: 'Kered Crater',
            briefIntroduction: 'Kered Crater is 70km away from Reykjavik City. It has a long history and has been formed for more than 6000 years',
        },
    ],
    climaticData: {
        'January': {
            temperature: '-1.1°C',
            precipitation: '75mm',
        },
        'February': {
            temperature: '0.4°C',
            precipitation: '71mm',
        },
        'March': {
            temperature: '0.2°C',
            precipitation: '82mm',
        },
        'April': {
            temperature: '3.1°C',
            precipitation: '58mm',
        },
        'May': {
            temperature: '6.5°C',
            precipitation: '44mm',
        },
        'June': {
            temperature: '8.8°C',
            precipitation: '50mm',
        },
        'July': {
            temperature: '10.9°C',
            precipitation: '67mm',
        },
        'August': {
            temperature: '10.4°C',
            precipitation: '60mm',
        },
        'September': {
            temperature: '7.7°C',
            precipitation: '63mm',
        },
        'October': {
            temperature: '4.4°C',
            precipitation: '86mm',
        },
        'November': {
            temperature: '1.1°C',
            precipitation: '73mm',
        },
        'December': {
            temperature: '0.3°C',
            precipitation: '76mm',
        },
    },
    GDPPerCapita: function (number, GDP) {
        var num = GDP / number;
        num = num.toFixed(2)
        return num.toFixed(2)
    },
    annualDecrease: function (annualDecrease) {
        if (!Array.isArray(annualDecrease)) {
            return alert('Please pass in an array with internal data as numbers!')
        }
        let num = 0
        for (let i = 0; i < annualDecrease.length; i++) {
            let item = annualDecrease[i]
            if (item === "" || item == null) {
                return alert('Please pass in an array with internal data as numbers!');
            }
            if (typeof item === 'number' && !isNaN(item)) {
                num = num + item
            } else {
                return alert('Please pass in an array with internal data as numbers!');
            }
        }
        let number = (num / annualDecrease.length).toFixed(2)
        return number
    }
}

let content_text = document.querySelector(".content_text")
let geographical = document.querySelector(".geographical")
let geogPos = document.querySelector(".geogPos")

content_text.innerHTML = ball.text
geogPos.innerHTML = ball.geographicalPosition
geographical.innerHTML = 'Geographical Position'
