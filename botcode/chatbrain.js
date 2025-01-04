function getResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("open https://nk.com")) {
        return "Sure, opening https://nk.com for you!";
    } else if (input.includes("open")) {
        return "Sure, opening link for you!";
    } else if (input.includes("ok")) {
        return "✔️";
    }else if (input.includes("how are you")) {
        return "Bot is lovely and pinging, type !ping";
    }  else if (input.includes("help")) {
        return "I'm a purpose bot not an AI bot, type commands to get response, I secure information for you and my developer.";
    }else {
        return "my developer didn't set me up like that.";
    }
}
