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

msg.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
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

    feedback.innerHTML = '';
    output.appendChild(msg);
})

socket.on('typing', (data) => {
    //This create as much p tags as keys pressed, so not the brast approach
    /* const msg = document.createElement('p');
    msg.textContent = `${data} is typing a message...`;
    feedback.appendChild(msg); */

    feedback.innerHTML = `<p>${data} is typing a message</p>`;
})