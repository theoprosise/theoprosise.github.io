document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const output = document.getElementById('output');
    const terminalBody = document.getElementById('terminal-body');
    let startFlag = false;

    output.innerHTML = `
    <div>
    <pre>

    
 /$$      /$$           /$$                                            
| $$  /$ | $$          | $$                                            
| $$ /$$$| $$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
| $$/$$ $$ $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$$$_ $$$$| $$$$$$$$| $$| $$     |  $$  \  $$| $$ \  $$ \  $$| $$$$$$$$
| $$$/ \  $$$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/
| $$/   \  $$|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/     \__/ \_______/|__/ \_______/ \______/ |__/ |__/ |__/ \_______/
                                                                       
                                                                       
                                                                       
                                          
                                      
                                                                                               
    </pre>                                  
        <p>Welcome to my website! Type 'help' to learn how to get around.</p>
        <p>Feel free to explore!</p>
    </div>
`;

    const commands = {
        help: "Available commands: [help, whoami, projects, contact, clear, sudo]",
        whoami: `Howdy! My name is Theo Prosise and I am a sophomore studying computer science and economics at Duke. I am currently learning about Discrete Math, Computer Network Architecture, and Practical Financial Markets. I have experience speculating and creating. I am interested in software engineering, cyber security, and financial markets. I am either in class, working on a project (check out my Github), working on a CTF, or reading a book. Feel free to reach out!,`,
        projects: "You can find my projects on GitHub: <a href='https://github.com/theoprosise' target='_blank'>GitHub/theoprosise</a>",
        contact: "You can reach me at: <a href='mailto:theodore.prosise@duke.edu'>theodore.prosise@duke.edu</a>",
        sudo: "Click here for superuser access-> <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>here</a>",
        johnyoulittlepiggyboy: "hey man",
        clear: () => {
            output.innerHTML = "";
        }
    };

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = userInput.value.trim();
            if(!startFlag){
                output.innerHTML = "";
                startFlag = true;
            }
            processCommand(input);
            userInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    function processCommand(input) {
        const commandLine = document.createElement('div');
        commandLine.textContent = `theo@website:~$ ${input}`;
        output.appendChild(commandLine);

        if (commands[input]) {
            if (typeof commands[input] === 'function') {
                commands[input]();
            } else {
                const response = document.createElement('div');
                response.innerHTML = commands[input].replace(/\n/g, '<br>');;
                output.appendChild(response);
            }
        } else {
            const error = document.createElement('div');
            error.textContent = `Command not found: ${input}`;
            output.appendChild(error);
        }
        terminalBody.scrollTop = terminalBody.scrollHeight; 

    }
    
});
