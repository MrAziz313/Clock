setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    // Select the DOM elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes'); // Corrected from Minites to minutes
    let seconds = document.getElementById('seconds'); // Corrected from Seconds to seconds

    // Apply the rotation
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);
