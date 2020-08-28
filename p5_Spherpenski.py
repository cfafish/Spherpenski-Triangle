from p5 import *

cw = 2560
ch = 1440

class createVector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def mag(self):
        return sqrt(self.x^2, self.y^2)
    def heading(self):
        return atan(self.y/self.x)


class Circles:
    def __init__ (self, x, y, rad, count):
        self.x = x
        self.y = y
        self.rad = rad
        self.count = count
        self.count += 1

    def make(self):
        if self.count < 10:
            #right circles
            startTempRight = createVector(self.x + self.rad, self.y)
            tempRight = Circles(startTempRight.x, startTempRight.y, self.rad/2, self.count)
            tempRight.make()

            #Left Circles
            startTempL = createVector(self.x - self.rad, self.y)
            tempL = Circles(startTempL.x, startTempL.y, self.rad / 2, self.count)
            tempL.make()

            #Bottom Circles
            startTempB = createVector(self.x, self.y + self.rad)
            tempB = Circles(startTempB.x, startTempB.y, self.rad / 2, self.count)
            tempB.make()

            #tempRight.show()
        # else:
        #     print("Should be done")
        stroke_weight(.1)
        stroke(255)
        no_fill()
        ellipse((self.x, self.y), self.rad * 2, self.rad * 2)

    def show(self):
        stroke_weight(.5)
        stroke(255)
        no_fill()
        ellipse((self.x, self.y), self.rad * 2, self.rad * 2)



def setup():
    size(cw, ch)

def draw():
    background(51)
    tempC = Circles(cw/2, ch/5, 4*ch/9, 1)
    tempC.make()
    fill(51)
    no_stroke()
    #rect((0, ch/2), cw, ch/2)



if __name__ == '__main__':
    run()