/*------1е виденье---------*/
/* не совсем понял суть задания
поэтому сделал двумя способами */

function Device(name,switcher,power){
    this.switcher = switcher
    this.name = name
    this.power = power
    this.powerConsume = function(){
        console.log(`Power - ${this.power * Math.PI} Wh`)
    }
    this.deviceInfo = function(){
        console.group(`${this.name} group`)
        console.log(`Swith - ${this.switcher}`)
        console.log(`Name - ${this.name}`)
        console.groupEnd()
    }
    this.toggle = function(){
        if (this.switcher == 'On')
            console.log('Switch Off')
        else
            console.log('Switch On')

    }
}


const lamp = new Device('lamp','Off',15)
const computer = new Device('computer','On',110)

lamp.deviceInfo()
computer.deviceInfo()


/*------2е виденье---------*/

// const device = {
//     switcher :'On',
//     name : 'device',
//     power : 20,
//     powerConsume : function(){
//         console.log(`Power - ${this.power * Math.PI} Wh`)
//     },
//     deviceInfo : function(){
//         console.group(`${this.name} group`)
//         console.log(`Swith - ${this.switcher}`)
//         console.log(`Name - ${this.name}`)
//         console.groupEnd()
//     },
//     toggle : function(){
//         if (this.switcher == 'On')
//             console.log('Switch Off')
//         else
//             console.log('Switch On')

//     },
// }

// const lamp = {
//     switcher :'Off',
//     name : 'lamp',
//     power : 20,
// }

// const computer = {
//     switcher :'On',
//     name : 'computer',
//     power : 110,
// }

// device.deviceInfo.call(lamp)
// device.deviceInfo.call(computer)




