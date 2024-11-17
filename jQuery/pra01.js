console.log("conect")

function changeImg(name) {
    if (name === "apple") {
        $('img').attr("src", "./image/apple.jpg")
    } else if (name == "banana") {
        $('img').attr("src", "./image/bananas.jpg")
    } else if (name === "grape") {
        $('img').attr("src", "./image/grapes.jpg")
    } else if (name === "peach") {
        $('img').attr("src", "./image/peaches.jpg")
    }
}