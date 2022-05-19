let saveBtn = document.getElementById("saveBtn");
let startBtn = document.getElementById("startBtn");

// Save user input data to storage
saveBtn.addEventListener("click", async () => {
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("userEmail").value;

    await chrome.storage.local.set({firstName, email});
})

// Toggle running automation
startBtn.addEventListener("click", async () => {
    let started = (await chrome.storage.local.get(["started"])).started;

    if (!started) {
        startBtn.innerText = "Start";
    } else {
        startBtn.innerText = "Stop";
    }

    await chrome.storage.local.set({ started: !started });
});

