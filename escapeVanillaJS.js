document.addEventListener("DOMContentLoaded", () => {
    // Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books)
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`
            })
    })

    // Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'components', 'jsx', 'hooks', 'async'])
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async'])
        const commonConcepts = findIntersection(jsConcepts, reactConcepts)
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`
    })

    // Room 3
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        document.getElementById("room3Result").innerHTML = message
                    })
            })
    })
})

// Function to find the most recent book
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent)
}

// Function to find the intersection of two sets
function findIntersection(setA, setB) {
    const intersection = new Set([...setA].filter(item => setB.has(item)))
    return intersection
}

// Asynchronous function to navigate the labyrinth
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000)) // Wait for 1 second
        console.log(`Navigating: ${direction.step}`)
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!"
}

