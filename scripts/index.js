let warrantyTaken = false;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.textContent.trim();

            switch (action) {
                case "Shut Down the Internet":
                    fakeShutdown();
                    break;
                case "Revoke All SSL Certificates":
                    confirmAction("Revoke all SSL certificates?", revokeSSL);
                    break;
                case "Launch Firewall Purge":
                    fakeFirewallPurge();
                    break;
                case "Rollback to Web 1.0":
                    rollbackWeb1();
                    break;
                case "Enable Global Dark Mode":
                    toggleDarkMode();
                    button.textContent = button.textContent.replace("Enable", "Disable");
                    break;
                case "Disable Global Dark Mode":
                    toggleDarkMode();
                    button.textContent = button.textContent.replace("Disable", "Enable");
                    break;
                case "View Active Connections":
                    showActiveConnections();
                    break;
                case "Modify User Permissions":
                    showUserPermissions();
                    break;
                case "Check Server Uptime":
                    showServerUptime();
                    break;
                default:
                    console.log("No action assigned to this button.");
            }
        });
    });
});

function fakeShutdown() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `<h1>Shutting Down Internet... </h1><p>Processing... </p>`;
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.innerHTML = `<h1>Shutdown Failed</h1><p>Unable to connect to the internet to finalize shutdown. </p>`;
        setTimeout(() => document.body.removeChild(overlay), 3000);
    }, 3500);
}

function revokeSSL() {
    window.location.replace("what-have-you-done");
}

function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

function extendedWarrantyChaos() {
    warrantyTaken = true;
    alert("Connecting you to an agent... Please hold.");

    let corruptionInterval = setInterval(corruptRandomElement, 2000);
    let messages = [
        "All agents are currently busy. Please wait...",
        "Please be patient, you are number 14 on the waiting list...",
        "Your firewall settings have been permanently adjusted.",
        "Attempting to revert changes... (This may take a while)",
        "Unexpected error occurred. Retrying...",
        "Process complete. Or is it?"
    ];

    let index = 0;

    function nextMessage() {
        if (index < messages.length) {
            alert(messages[index]);
            index++;
            setTimeout(nextMessage, 3000);
        } else {
            clearInterval(corruptionInterval);
            document.body.innerHTML = "<h1 style='text-align: center; margin: auto; font-family: monospace;'>System integrity compromised.</h1>";
        }
    }

    setTimeout(nextMessage, 3000);
}

function glitchText(text) {
    let glitchChars = ["@", "#", "$", "%", "&", "?", "!", "∑", "≠", "╳"];
    let zalgoUp = ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͆", "̾", "͌"];
    let zalgoDown = ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̩", "̪", "̫"];

    return text.split("").map(char => {
        let corruptedChar = Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;

        // Randomly add Zalgo effect
        if (Math.random() < 0.4) {
            corruptedChar += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        }
        if (Math.random() < 0.4) {
            corruptedChar += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
        }

        return corruptedChar;
    }).join("");
}

function randomFont() {
    let fonts = ["'Courier New', monospace", "'Comic Sans MS', cursive","'Impact', fantasy", "'Times New Roman'", "'Verdana', sans-serif", "'Arial Black', sans-serif"];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

function corruptRandomElement() {
    let elements = document.querySelectorAll("p, h1, h2, h3, button, span, li, div");
    if (elements.length === 0) return;

    let randomElement = elements[Math.floor(Math.random() * elements.length)];
    randomElement.style.color = `rgb(${rand(50, 255)}, ${rand(50, 255)}, ${rand(50, 255)})`;
    randomElement.style.backgroundColor = `rgb(${rand(0, 50)}, ${rand(0, 50)}, ${rand(0, 50)})`;
    randomElement.style.transform = `rotate(${rand(-15, 15)}deg) scale(${rand(80, 120) / 100})`;
    randomElement.style.fontWeight = rand(0, 1) ? "bold" : "normal";
    randomElement.style.fontStyle = rand(0, 1) ? "italic" : "normal";
    randomElement.style.fontFamily = randomFont();
    randomElement.textContent = glitchText(randomElement.textContent);
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fakeFirewallPurge() {
    document.body.classList.add("firewall-warning");
    setTimeout(() => {
            confirmAction("We are trying to reach you about your car's extended warranty.", extendedWarrantyChaos)
        }, 3000);
    setTimeout(() => {
        document.body.classList.remove("firewall-warning");
        if (!warrantyTaken)
            confirmAction("We are trying to reach you about your car's extended warranty.", extendedWarrantyChaos);
    }, 10500);
}

function rollbackWeb1() {
    // Remove all <link> elements that are stylesheets
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(sheet => sheet.parentNode.removeChild(sheet));

    // Remove all <style> elements
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => style.parentNode.removeChild(style));
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showActiveConnections() {
    alert("Active Connections:\n192.168.1.1 - Admin Panel\n203.0.113.45 - Server Node\n10.0.0.15 - Proxy Gateway");
}

function showUserPermissions() {
    alert("User Permissions:\nAdmin - Full Access\nSupervisor - Read-Only\nTester - Read-Only\nGuest - Full Access");
}

function showServerUptime() {
    alert("Server Uptime: 537 days, 4 hours, 23 minutes");
}
