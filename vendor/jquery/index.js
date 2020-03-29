window.addEventListener('load', init);

const MSFT = document.querySelector('#MSFT');
const AAPL = document.querySelector('#AAPL');
const AMZN = document.querySelector('#AMZN');
const GOOGL = document.querySelector('#GOOGL');
const FB = document.querySelector('#FB');
const BRK = document.querySelector('#BRK');
const BABA = document.querySelector('#BABA');
const V = document.querySelector('#V');
const JPM = document.querySelector('#JPM');
const JNJ = document.querySelector('#JNJ');

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=AAPL",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

var $apple = $('#apple');

$.ajax(settings).done(function (apple) {
    console.log(apple);

    $.each(apple, function(cap, apple) {
        $.apple.append('<li> Apple:')
    })
    // var apple = response.object.summaryDetail.marketCap.fmt
    // console.log(apple
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=AMZN",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=MSFT",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=GOOGL",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=FB",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=BRK",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=BABA",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=V",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=JPM",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=JNJ",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "9782c9bf2bmshb4f39a2b5204672p1e1f59jsnb81f4a3c6e34"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

function init() {
    MSFT.innerHTML = ''
}

