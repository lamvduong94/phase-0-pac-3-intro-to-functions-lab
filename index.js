function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(str) {
    console.log(str.toUpperCase());
}

function logWhisper(str) {
    console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
    if (str === str.toLowerCase()) {
        return "I can't hear you!";
    } else if (str === str.toUpperCase()) {
        return "YES INDEED!";
    } else if (str === str) {
        return "I love you, too.";
    }
}