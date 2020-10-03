/**
 * Dom elements
 */
const outputs = document.querySelectorAll('.output');
const handles = document.querySelectorAll('.handle');
const msgs = document.querySelectorAll('.message');
const btn1 = document.querySelector('button');

/**
 * Make connection
 */
const socket = io.connect('http://localhost:3000');

/**
 * Events
 */
btn1.addEventListener('click', () => {
    socket.emit('chat', { 
        message: msgs[0].value, handle: handles[0].value
     })
})

/**
 * Listen for events
 */
socket.on('chat', (data) => {
    const msg = document.createElement('div');
    msg.classList.add('msg');

    const hdl = document.createElement('span');
    hdl.textContent = `${data.handle}: `;

    const txt = document.createElement('p');
    txt.textContent = data.message;

    msg.appendChild(hdl);
    msg.appendChild(txt);

    outputs[0].appendChild(msg);
})