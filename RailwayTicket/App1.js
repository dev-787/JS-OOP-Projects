let prompt = require("prompt-sync")();

class RailwayTicket {
    constructor() {
        this.name = "";
        this.coach = "";
        this.mobileNum = 0;
        this.ticketFare = 0;
        this.totalFare = 0;
    }

    access() {
        console.log("Available coach types: AC, Sleeper, General");
        this.name = prompt("Enter your name: ");
        this.coach = prompt("Enter coach type: ").trim().toLowerCase();
        this.mobileNum = prompt("Enter your mobile number: ");

        if (this.coach === "ac") {
            this.ticketFare = 1500;
        } else if (this.coach === "sleeper") {
            this.ticketFare = 800;
        } else if (this.coach === "general") {
            this.ticketFare = 400;
        } else {
            console.log("Invalid coach type entered. Setting fare to ₹0.");
            this.ticketFare = 0;
        }

        const gst = this.ticketFare * 0.05;
        this.totalFare = this.ticketFare + gst;
    }

    display() {
        console.log("\n------ Ticket Details ------");
        console.log("Passenger Name: " + this.name);
        console.log("Coach Type: " + this.coach.charAt(0).toUpperCase() + this.coach.slice(1));
        console.log("Mobile Number: " + this.mobileNum);
        console.log("Base Ticket Fare: ₹" + this.ticketFare.toFixed(2));
        console.log("Total Fare (including 5% GST): ₹" + this.totalFare.toFixed(2));
        console.log("----------------------------");
    }
}

let ticket = new RailwayTicket();
ticket.access();
ticket.display();
