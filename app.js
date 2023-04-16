(async function () {
    const response = await fetch('./data.json');
    const movies = await response.json();

    console.log(movies);

})();