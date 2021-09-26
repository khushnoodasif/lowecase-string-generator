let str = window.prompt("What is the string?");
str = str.replace(/\s+/g, '-').toLowerCase();
document.write(str)