
const http = require('http');

var lastResponse = '';

http.createServer(function (req, res) {
  if (req.url === '/receive') {
    // Handle receive logic here
  } else if (req.url === '/send') {
    req.on('data', function (chunk) {
      var message = chunk.toString().toLowerCase();
      var user = req.headers.user;

      console.log(`Received message from ${user}: ${message}`);

      try {
        // Basic calculations
        if (message.includes('+')) {
          lastResponse = `CalcBot: ${eval(message.replace('plus', '+'))}`;
        } else if (message.includes('-')) {
          lastResponse = `CalcBot: ${eval(message.replace('minus', '-'))}`;
        } else if (message.includes('*')) {
          lastResponse = `CalcBot: ${eval(message.replace('times', '*'))}`;
        } else if (message.includes('/')) {
          lastResponse = `CalcBot: ${eval(message.replace('divided by', '/'))}`;
        }
        // Logarithmic calculations
        else if (message.includes('log')) {
          var num = parseFloat(message.replace('log', ''));
          lastResponse = `CalcBot: ${Math.log(num)}`;
        }
        // Trigonometric calculations
        else if (message.includes('sin')) {
          var num = parseFloat(message.replace('sin', ''));
          lastResponse = `CalcBot: ${Math.sin(num)}`;
        } else if (message.includes('cos')) {
          var num = parseFloat(message.replace('cos', ''));
          lastResponse = `CalcBot: ${Math.cos(num)}`;
        } else if (message.includes('tan')) {
          var num = parseFloat(message.replace('tan', ''));
          lastResponse = `CalcBot: ${Math.tan(num)}`;
        } else if (message.includes('how are you calcbot')) {
          lastResponse = 'Calcbot: Im fine and running smoothly.';
        } 
      } catch (error) {
        lastResponse = 'CalcBot: Check your input.';
      }

      res.write(lastResponse);
      lastResponse = '';
      res.end();
    });
  }
}).listen(2548, () => {
  console.log("YOUR CALCBOT ALWAYS RUNNING ON PORT 2548...............................");
});