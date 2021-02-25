const generate = () => {
    let quotes = {
        "- George Bernard Shaw": '"Patriotism is your conviction that this country is superior to all others because you were born in it."',

        "- Clarence Darrow" : '"When I was a boy I was told that anybody could become President. I’m beginning to believe it."',

        "- Billy Sunday": '"Going to church doesn’t make you a Christian any more than going to a garage makes you an automobile."',

        "- Drake": '"I was born to make mistakes, not to fake perfection."',

        "- Ambrose Bierce": '"War is God’s way of teaching Americans geography"',
    }

const keys = Object.keys(quotes);
const author = keys[Math.floor(Math.random() * keys.length)];
const quote = quotes[author];



document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;
}





