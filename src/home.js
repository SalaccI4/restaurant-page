import shit from "./img/gramps-eating-shit.png"
export {loadHome}

const loadSegment = (parent, item, text) => {
    let segment = document.createElement("div")
    segment.id = item
    parent.append(segment)
    segment.textContent = text
}

const loadImg = (parent, img) => { 
    let segment = document.createElement("img")
    segment.src = img
    parent.append(segment)
}

const loadUList = (parent, item) => {
    let segment = document.createElement("ul")
    segment.id = item
    parent.append(segment)
}

const loadLi = (parent, text) => {
    let segment = document.createElement("li")
    parent.append(segment)
    segment.textContent = text
}

const loadHome = () => {
    const content = document.querySelector("#content")
        loadSegment(content, "home", "")
        const home = document.querySelector("#home")
        loadSegment(home, "intro", "Taste the delicacies of our finest shit💩")
        loadSegment(home, "review", "")
                const review = document.querySelector("#review")
                loadSegment(review, "review-text", "That is the tastiest shit I've ever had. An irreplicable experience that transcends all expectations -Gramps")
                loadImg(review, shit)
        loadSegment(home, "hours", "")
            const hours = document.querySelector("#hours")
            loadSegment(hours, "hours-title", "Hours:")
            loadUList(hours, "hours-text", "")
                const hoursText = document.querySelector("#hours-text")
                loadLi(hoursText, "Sunday: 1pm - 8pm")
                loadLi(hoursText, "Monday: 10pm - 8pm")
                loadLi(hoursText, "Tuesday: 10pm - 8pm")
                loadLi(hoursText, "Wednesday: 10pm - 8pm")
                loadLi(hoursText, "Thursday: 10pm - 8pm")
                loadLi(hoursText, "Friday: 10pm - 8pm")
                loadLi(hoursText, "Saturday: 1pm - 8pm")
        loadSegment(home, "location", "")
            const location = document.querySelector("#location")
            loadSegment(location, "location-title", "Location: ")
            loadSegment(location, "location-text", "123 Port-o Potty, Excrement State, Ohio")
}