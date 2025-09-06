let obj={
    name:"AMOL",
    gender:"Male",
    email:"a@b.com",
    run:function(){
        console.log(`Hello ${this.name}`)
    }
}
console.log(obj.name)
console.log(obj.gender)
console.log(obj.email)
obj.run()
Object.seal(obj)
obj.phno="9878546325"
obj.name="M Amol"
console.log(obj)