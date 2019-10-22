var allButtons = $('#buttons > button')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var px = index * -300
        $('#images').css({
            transform: 'translate(' + px + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

//自动轮播
var n = 0
var size = allButtons.length
playSlide(n % size)

var timeId = setTimer()

$('.window').on('mouseenter', function () {
    window.clearInterval(timeId)
})
$('.window').on('mouseleave', function () {
    timeId = setTimer()
})

function activeButton($button) {
    $button.addClass('red')
        .siblings('.red').removeClass('red')
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 1000)
}