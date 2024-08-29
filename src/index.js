
let questions = [
    {
        id: 1,
        question: 'Какая версия HTML сегодня актуальна?',
        answers: [3, 4, 5, 6],
        trueAnswer: 2 // Индекс 2 соответствует ответу 5
    },
    {
        id: 2,
        question: 'Какой тег используется для создания ссылки в HTML?',
        answers: ['<p>', '<a>', '<div>', '<span>'],
        trueAnswer: 1 // Индекс 1 соответствует ответу <a>
    },
    {
        id: 3,
        question: 'Какой метод используется для добавления элемента в конец массива в JavaScript?',
        answers: ['push', 'pop', 'shift', 'unshift'],
        trueAnswer: 0 // Индекс 0 соответствует ответу push
    },
    {
        id: 4,
        question: 'Какое свойство CSS отвечает за цвет текста?',
        answers: ['font-size', 'text-align', 'color', 'background-color'],
        trueAnswer: 2 // Индекс 2 соответствует ответу color
    },
    {
        id: 5,
        question: 'Какой символ используется для комментария в JavaScript?',
        answers: ['//', '/*', '#', '<!--'],
        trueAnswer: 0 // Индекс 0 соответствует ответу //
    },
    {
        id: 6,
        question: 'Какой метод используется для преобразования строки в число в JavaScript?',
        answers: ['toString', 'parseInt', 'parseFloat', 'Number'],
        trueAnswer: 1 // Индекс 1 соответствует ответу parseInt
    },
    {
        id: 7,
        question: 'Какая версия CSS используется для создания сеток (Grid)?',
        answers: [2, 3, 4, 5],
        trueAnswer: 2 // Индекс 2 соответствует ответу 4
    },
    {
        id: 8,
        question: 'Какой метод удаляет последний элемент массива в JavaScript?',
        answers: ['pop', 'push', 'shift', 'unshift'],
        trueAnswer: 0 // Индекс 0 соответствует ответу pop
    },
    {
        id: 9,
        question: 'Какой тег используется для создания заголовка первого уровня в HTML?',
        answers: ['<h1>', '<h2>', '<h3>', '<h4>'],
        trueAnswer: 0 // Индекс 0 соответствует ответу <h1>
    },
    {
        id: 10,
        question: 'Какой атрибут используется для добавления альтернативного текста к изображению в HTML?',
        answers: ['href', 'src', 'alt', 'title'],
        trueAnswer: 2 // Индекс 2 соответствует ответу alt
    },
    {
        id: 11,
        question: 'Какой метод преобразует массив в строку в JavaScript?',
        answers: ['split', 'join', 'concat', 'slice'],
        trueAnswer: 1 // Индекс 1 соответствует ответу join
    }
];

let ticket = document.querySelector('.ticket');

let count = 1


const setTicket = () => {
    ticket.innerHTML = `
      <h2 class="ticket__question">${questions[count - 1].question}</h2>
    <ul class="ticket__list"></ul>
    <div class="ticket__count">${count} / ${questions.length}</div>
    <button class="ticket__next">${count === questions.length ? 'End' : 'Next'}</button>
    `;

    let ticketList = document.querySelector('.ticket__list');
    questions[count - 1].answers.forEach((item, idx) => {
        let li = document.createElement('li')
        li.innerHTML = `
        <label class='ticket__label'>
        <input type='radio' name='question'>
        <span class='ticket__text'></span>
        </label>
        `;
        ticketList.append(li)

        let span = document.querySelectorAll('.ticket__text');
        span[idx].textContent = item
    })

    let btn = document.querySelector('.ticket__next');
    btn.addEventListener('click', () => {
        

        if(count === questions.length) {
            alert('Вы закончили тест')
        } else {
            count++;
            setTicket();
        }
    })
}

setTicket()



