/**
 * Dom elements
 */
const output = document.querySelector('.output');
const handle = document.querySelector('.handle');
const msg = document.querySelector('.message');
const btn = document.querySelector('button');
const feedback = document.querySelector('.feedback');

/**
 * Make connection
 */
const socket = io.connect('http://localhost:3000');

/**
 * Events
 */
btn.addEventListener('click', () => {
    socket.emit('chat', { 
        message: msg.value, handle: handle.value
    })
    handle.value = '';
    msg.value = '';
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

    output.appendChild(msg);
})