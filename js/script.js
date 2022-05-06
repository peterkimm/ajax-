// how to request data from an API using javaScript and jQuery

// There are many ways to do this!
// 1. jQuerys $.ajax() function
// 2. The Brower's fetch() function
// 3. Using the Axios hhtp client library

// VARIABLES

const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard";

// ELEMENT REFERENCES

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');


//EVENT LISTENERS




// FUNCTIONS

function handleGetData() {

    $.ajax(URL).then(function (data) {
        console.log('movie data is ready')
        // console.log(data)
        $title.text(data.Title)
        $year.text(data.Year)
        $rated.text(data.Rated)
        $('main').append(`<img src="${data.Poster}"/>`)
    }, function (error) {
        console.log('something is wrong')
        console.log(error)
    })
}
