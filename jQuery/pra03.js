let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function changeColor() {
    if ($('div').hasClass("purple")) {
        $('div').switchClass("purple", "red")
    } else {
        for (let i = 0 ; i < colors.length ; i++) {
            if ($('div').hasClass(colors[i])) {
            $('div').switchClass(colors[i], colors[i+1])
                
            }
        }
    }
}

