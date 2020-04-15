// Practice: Represent your Pet

// Create an object that represents your pet.

//     Name property with a string value.
//     Species property with a string value.
//     Nicknames property with an array value. Array contains strings.
//     Age property with an integer value

// const sissy = {
// name: "sissy",
// species: "dog",
// nickNames: ["Killer", "Cisero"],
// age: 12
// }

// Practice: Pet Sounds

// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()

// const sissy = {
//     name: "sissy",
//     species: "dog",
//     nickNames: ["Killer", "Cisero"],
//     age: 12,
//     whine: function() {
//         console.log("Wimper ... wimper ... wimper")
//     },
//     sniff: function() {
//         console.log("sniff sniff sniff sniff sniff")
//     },
//     lick: function() {
//         console.log("sssllluuurrrrrrpp")
//     }

// }

// sissy.whine();
// sissy.sniff();
// sissy.lick();



// Practice: My Pet "This"

//     Give your pet a new key named favoriteToys whose value is an empty array.
//     Now define another new key named play whose value is a function with a single parameter named toy.
//     The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).

// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.


const sissy = {
    name: "sissy",
    species: "dog",
    nickNames: ["Killer", "Cisero"],
    age: 12,
    whine: function () {
        console.log("Wimper ... wimper ... wimper")
    },
    sniff: function () {
        console.log("sniff sniff sniff sniff sniff")
    },
    lick: function () {
        console.log("sssllluuurrrrrrpp")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.shape === "round") {
            this.favoriteToys.push(toy);
        }
    }

}

const tennisBall = {
    name: "tennis ball",
    color: "yellow",
    shape: "round"
}

const frisbee = {
    name: "frisbee",
    color: "red",
    shape: "circular"
}


sissy.play(tennisBall)
sissy.play(frisbee)

console.log(sissy.favoriteToys)

// Practice: Fast Food Ordering

// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

//     The object should have a property named orders that is an array. You will need to define this.
//     Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
//     Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
//     Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function(meal) {
        this.orders.push(meal)
    },
    getOrders: function() {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}












// // Place an order
// restaurant.placeOrder()

// // Invoke the function to return the list of all orders

// // Output all orders to the console using console.table()


restaurant.placeOrder(chickenComboMeal);

console.log(restaurant.getOrders())

console.table(restaurant.getOrders())




// Challenge: Political Campaign

//     Challenges are optional exercises that you should attempt only if you've completed the practice exercises and understand the concepts.

// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

//     Her congressional district (you can use yours here)
//     Her platform statements for the following issues.
//         Taxes
//         Jobs
//         Infrastructure
//         Health care
//         Crime and enforcement
//     URL for donation form
//     Calendar of events
//     Volunteer information
//         Name
//         Address
//         Email
//         Phone number
//         Availability
//         What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
//     Biography
//     Image gallery
//         Head shot
//         Picture of family
//         Picture of constituents
//     Mission statement
//     URL for registering to vote


// const elizabethSanger = {
//     congressionalDistrict: "Kentucky 5th Congressional District",
//     platform: {
//         taxes: "Tax the rich!",
//         jobs: "Ms. Sanger is in favor of a Universal Job Guarant",
//         infrastructure: "Ms. Sanger is in favor of building a nation-wide, high-speed rail system",
//         healthcare: "Medicare for All",
//         crimeAndEnforcement: "Criminal sentencing reform to reduce our prison population"
//     },
//     donationURL: "www.SangerSuperpac.com",
//     calendarOfEvents: {
//         pikeRally: {
//             date: "04/16/2020",
//             time: "6:00 PM",
//             location: "Pikeville"
//         },
//         graysonRally: {
//             date: "04/17/2020",
//             time: "6:00 PM",
//             location: "Grayson"
//         },
//         louFundraiser: {
//             date: "04/18/2020",
//             time: "7:00 PM",
//             location: "Louisville"
//         }
//     },
//     volunteerInfo: {
//         name: "Abdul Alhazred",
//         address: "location unknown",
//         email: "themadarab@email.com",
//         phone: 555-555-5555,
//         availability: "mon - fri, 5:00pm - 11:00pm"
//     },
//     bio: "Born and raised in Morehead, KY to two agronomy professors, she spent her youth working in tobacco fields.  After high school she joined the United States Marine Corps and became medic.  After life in the USMC, she enrolled at the University of Kentucky where she received a Bachelor of Science in Biology and a Bachelor of Arts in Applied Chemistry.  She then went on to the University of Pikeville where she received her medical degree.  After receving her degree she worked at Kings Daughters Medical Center as a pediatrician.",
//     imageGallery: {
//         headShot: "https://www.literaryladiesguide.com/wp-content/uploads/2012/07/Shirley-Jackson1-187x267.jpg",
//         family: "https://ichef.bbci.co.uk/images/ic/256xn/p04l4bs1.jpg",
//         constituents: "https://cdn.cnn.com/cnnnext/dam/assets/180413102215-001-kentucky-teachers-capital-rally-2018-medium-plus-169.jpg"
//     },
//     missionStatement: "To increase living standards for the working class by implementing affordable college, Medicare for All, prison reform, and ending the disastorous War on Drugs.",
//     registerVoteURL: "https://vrsws.sos.ky.gov/ovrweb/"
// }




// Advanced Challenge

//     Advanced challanges are intended to be difficult and the expectation is for you to use your imagination, and research skills to make your own decisions about which code should be written.

// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// Things to think about.

//     Am I modifying an array? Then the function argument should be added to the target array with the push() method.
//     Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.

// This challenge is for you to practice writing functions, so the more you can write, the better. It helps make neural connections in your brain at this point since you're still building your software vocabulary.

// Example:

// function addToImageGallery (newImage) {
//     ...
// }

// function changeBiography (newBiography) {
//     ...
// }

// function changePlatform (topic, newPlatformStatement) {
//     ...
// }


const elizabethSanger = {
    congressionalDistrict: "Kentucky 5th Congressional District",
    platform: {
        taxes: "Tax the rich!",
        jobs: "Ms. Sanger is in favor of a Universal Job Guarant",
        infrastructure: "Ms. Sanger is in favor of building a nation-wide, high-speed rail system",
        healthcare: "Medicare for All",
        crimeAndEnforcement: "Criminal sentencing reform to reduce our prison population"
    },
    donationURL: "www.SangerSuperpac.com",
    calendarOfEvents: [
        {pikeRally: {
            date: "04/16/2020",
            time: "6:00 PM",
            location: "Pikeville"
        }},
        {graysonRally: {
            date: "04/17/2020",
            time: "6:00 PM",
            location: "Grayson"
        }},
        {louFundraiser: {
            date: "04/18/2020",
            time: "7:00 PM",
            location: "Louisville"
        }}
    ],
    volunteerInfo: {
        name: "Abdul Alhazred",
        address: "location unknown",
        email: "themadarab@email.com",
        phone: 555-555-5555,
        availability: "mon - fri, 5:00pm - 11:00pm"
    },
    bio: "Born and raised in Morehead, KY to two agronomy professors, she spent her youth working in tobacco fields.  After high school she joined the United States Marine Corps and became medic.  After life in the USMC, she enrolled at the University of Kentucky where she received a Bachelor of Science in Biology and a Bachelor of Arts in Applied Chemistry.  She then went on to the University of Pikeville where she received her medical degree.  After receving her degree she worked at Kings Daughters Medical Center as a pediatrician.",
    imageGallery: {
        headShot: "https://www.literaryladiesguide.com/wp-content/uploads/2012/07/Shirley-Jackson1-187x267.jpg",
        family: "https://ichef.bbci.co.uk/images/ic/256xn/p04l4bs1.jpg",
        constituents: "https://cdn.cnn.com/cnnnext/dam/assets/180413102215-001-kentucky-teachers-capital-rally-2018-medium-plus-169.jpg"
    },
    missionStatement: "To increase living standards for the working class by implementing affordable college, Medicare for All, prison reform, and ending the disastorous War on Drugs.",
    registerVoteURL: "https://vrsws.sos.ky.gov/ovrweb/",
    
    //Method to change the congressional district, donation url, bio, mission statement, and the url to register to vote .  The property and a string must be input into the arguments.  Example: setProperty: function("donationURL", "www.donate.com")
    setProperty: function(property, string) {
        this[property] = string
    },
    
    //Method to change an individual platform issue.  A platform issue and a string must be input in the arguments.  Example changePlatformIssue("taxes", "No new taxes")
    changePlatformIssue: function(issue, string) {
        this.platform.issue = string
    },
    
    //Method to push a new event in the event calendar.  Input an event name, date, time, and location string into the arguments.
    pushEvent: function(eventName, date, time, location) {
        this.calendarOfEvents.push(`${eventName}: {date: ${date}, time:${time}, location: ${location}},`)
    }
}

elizabethSanger.setProperty("donationURL", "www.donate.com")
console.log(elizabethSanger.donationURL)

elizabethSanger.pushEvent("moreheadRally", "April 30, 2020", "6:00pm", "Morehead")
console.log(elizabethSanger.calendarOfEvents)