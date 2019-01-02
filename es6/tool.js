function $(dom) {
    return $.prototype.init(dom)
}
var methodObject = {
    init(dom) {
        this.el = document.querySelector(dom)
        return this
    },
    tap(cb) {
        let start, end, state = true
        this.el.addEventListener("touchstart", handle)
        this.el.addEventListener("touchmove", handle)
        this.el.addEventListener("touchend", handle)

        function handle(e) {
            switch (e.type) {
                case "touchstart":
                    {
                        start = new Date().getTime()
                    }
                    break;
                case "touchmove":
                    {
                        state = false
                    }
                    break;
                case "touchend":
                    {
                        end = new Date().getTime()
                        if (end - start <= 300 && state) {
                            cb(e)
                        }
                    }
                    break;
            }
        }

    },
    longtap(cb) {
        let time
        this.el.addEventListener("touchstart", handle)
        this.el.addEventListener("touchmove", handle)
        this.el.addEventListener("touchend", handle)

        function handle(e) {

            switch (e.type) {
                case "touchstart":
                    {
                        time = setTimeout(cb, 300)
                    }
                    break;
                case "touchmove":
                    {
                        clearTimeout(time)
                    }
                    break;
                case "touchend":
                    {
                        clearTimeout(time)
                    }
                    break;
            }
        }
    },
    moveInit(type, cb) {
        let startX, endX, startY, endY
        this.el.addEventListener("touchstart", handle)
        this.el.addEventListener("touchend", handle)

        function handle(e) {
            switch (e.type) {
                case "touchstart":
                    {
                        startX = e.changedTouches[0].pageX
                        startY = e.changedTouches[0].pageY
                    }
                    break;
                case "touchend":
                    {
                        endX = e.changedTouches[0].pageX
                        endY = e.changedTouches[0].pageY
                        switch (type) {
                            case "moveLeft":
                                {
                                    if (startX - endX > 25) {
                                        if (Math.abs(startY - endY) < Math.abs(startX - endX)) {

                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            case "moveRight":
                                {
                                    if (endX - startX > 25) {
                                        if (Math.abs(startY - endY) < Math.abs(startX - endX)) {

                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            case "moveTop":
                                {
                                    if (startY - endY > 25) {
                                        if (Math.abs(startY - endY) > Math.abs(startX - endX)) {
                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            case "moveBottom":
                                {
                                    if (endY - startY > 25) {
                                        if (Math.abs(startY - endY) > Math.abs(startX - endX)) {
                                            cb(e)
                                        }
                                    }
                                }
                                break;
                        }

                    }
                    break;
            }
        }
    },
    moveLeft(cb) {

        this.moveInit("moveLeft", cb)

        return this
    },
    moveRight(cb) {

        this.moveInit("moveRight", cb)

        return this

    },
    moveTop(cb) {

        this.moveInit("moveTop", cb)
        return this

    },
    moveBottom(cb) {

        this.moveInit("moveBottom", cb)
        return this
    },
    move(cb) {
        this.el.addEventListener("touchstart", handle)
        this.el.addEventListener("touchmove", handle)
        var w, scrollLeft, origin

        function handle(e) {
            switch (e.type) {
                case "touchstart":
                    {
                        origin = this.scrollLeft
                        start = e.touches[0].pageX
                    }
                    break;
                case "touchmove":
                    {
                        scrollLeft = origin - (e.touches[0].pageX - start)
                        cb(e, scrollLeft)
                    }
                    break;
            }
        }
        return this
    }
}




$.prototype = methodObject



function Swiper(option) {
    Object.assign(this, option)
}

Swiper.prototype = {
    listenCross() {
        var doms = document.querySelectorAll(".slide")
        this.scrollCrossCalc()
        this.cb(this.initSlide, doms[this.initSlide])
        $(this.el).moveLeft(function(e) {
            this.initSlide++
                if (this.initSlide <= doms.length - 1) {
                    this.scrollCrossCalc()
                    this.cb(this.initSlide, doms[this.initSlide])
                } else {
                    this.initSlide = doms.length - 1
                }

        }.bind(this))
        $(this.el).moveRight(function(e) {
            this.initSlide--
                if (this.initSlide >= 0) {
                    this.scrollCrossCalc()
                    this.cb(this.initSlide, doms[this.initSlide])
                } else {
                    this.initSlide = 0
                }

        }.bind(this))
        $(this.el).move(function(e, num) {
            document.querySelector(this.el).scrollLeft = num
        }.bind(this))
    },
    listenVertical() {
        var doms = document.querySelectorAll(".slide")
        this.scrollVerticalCalc()
        this.cb(this.initSlide, doms[this.initSlide])
        $(this.el).moveTop(function(e) {
            this.initSlide++
                if (this.initSlide <= doms.length - 1) {
                    this.scrollVerticalCalc()
                    this.cb(this.initSlide, doms[this.initSlide])
                } else {
                    this.initSlide = doms.length - 1
                }


        }.bind(this))
        $(this.el).moveBottom(function(e) {
            this.initSlide--
                if (this.initSlide >= 0) {
                    this.scrollVerticalCalc()
                    this.cb(this.initSlide, doms[this.initSlide])
                } else {
                    this.initSlide = 0
                }

        }.bind(this))
        $(this.el).move(function(e, num) {
            document.querySelector(this.el).scrollTop = num
        }.bind(this))
    },
    scrollCrossCalc() {
        let w = document.querySelector(this.el).offsetWidth

        document.querySelector(this.el).scrollLeft = w * this.initSlide
    },
    scrollVerticalCalc() {
        let h = document.querySelector(this.el).offsetHeight

        document.querySelector(this.el).scrollTop = h * this.initSlide
    },
    styleInit() {
        if (this.direction) {
            document.querySelector(".wrap").style.display = "flex";
        } else {
            document.querySelector(".wrap").style.display = "block"
        }
    },
    autoPlayHandle() {
        if (this.autoPlay) {
            function handle() {
                this.initSlide++;
                var doms = document.querySelectorAll(".slide")
                if (this.initSlide > doms.length - 1) {
                    this.initSlide = 0
                }
                if (this.direction) {
                    this.scrollCrossCalc()
                } else {
                    this.scrollVerticalCalc()
                }
            }
            this.setTime = setInterval(handle.bind(this), this.time)
        }
    },
    stopLoop() {
        document.querySelector(this.el).addEventListener("touchstart", () => {
            if (this.setTime) {
                clearInterval(this.setTime)
            }
        })
        document.querySelector(this.el).addEventListener("touchend", () => {
            this.autoPlayHandle()
        })
    },
    init() {
        this.styleInit()
        this.autoPlayHandle()
        this.stopLoop()
        if (this.direction) {
            this.listenCross()
        } else {
            this.listenVertical()
        }
    }

}