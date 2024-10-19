//window.addEventListener("DOMContentLoaded", function() {
//    const subbtn = document.getElementById("submitbtn");
//})

//i'm working on implimenting this into a website/database
//please ignore code above

//IGNORE ABOVE (unless you don't want to)


//Observer Design Pattern
//behavioral pattern
//used to (eventually) send event reminders to subscriber emails/phones
//sources
//https://refactoring.guru/design-patterns/observer
//https://www.tutorialspoint.com/design_pattern/observer_pattern.htm
//
class subObserver {
    subList(){
        this.observer = [];
    }

    subscribe(o) {
        this.observer.push(o);
    }
    unsubscribe(no) {
        this.observer = this.observer.filter(o => {
            if (o != no){
                return o;
            }
        })
    }

    eventAlert() {
        this.observer.foreach(o => {
            o.call;
        })
    }
}

const subList = new sub()

function guy1() {
    console.log("Guy1 notified")
}
function guy2() {
    console.log("Guy2 notified")
}

subList.subscribe(guy1)
subList.eventAlert()