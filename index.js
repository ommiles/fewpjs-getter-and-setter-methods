class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }
    
    get circumference() {
        return Math.PI * this.diameter
    }
    
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(updateDiameter) {
        return this.radius = updateDiameter / 2
    }

    set circumference(updateCircumference) {
        return this.radius = updateCircumference / (Math.PI * 2) 
    }
}