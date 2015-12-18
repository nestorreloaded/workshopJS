var recursive = function () {
    console.log("Paso un segundo!");
    setTimeout(recursive,1000);
}
recursive();
