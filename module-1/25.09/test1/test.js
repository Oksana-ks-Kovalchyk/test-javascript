const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Molly"];

function userName(name) {

    for (const client of clients) {
        if (client.toLowerCase() === name.toLowerCase()) {
            return true;
        }

    }
    return false;
}

console.log(userName("Molly"));
console.log(userName("Max"));