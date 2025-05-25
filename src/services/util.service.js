export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    randomPastTime,
    debounce,
    getCurrDate,
    saveToStorage,
    loadFromStorage,
    capitalizeWords,
    getBuyer,
}


export function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

export function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


export function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

export function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function capitalizeWords(str) {
    if (!str) return ''
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export function getCurrDate(str, format = 'string') {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    if (str === 'day') {
        if (format === 'string') {
            return dayNames[new Date().getDay()]
        }
        if (format === 'number') {
            return (new Date().getDay() + 1)
        }
    }
    if (str === 'month') {
        if (format === 'string') {
            return monthNames[new Date().getMonth()]
        }
        if (format === 'number') {
            return (new Date().getMonth() + 1)
        }
    }
    if (str === 'year') {
        return new Date().getFullYear()
    }
}

// mock data bandaid functions
export function getBuyer() {
    const fakeBuyers = [
        { name: 'Liam O’Connor', imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Noah Kim', imgUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { name: 'Arjun Patel', imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Omar Hassan', imgUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { name: 'Carlos Alvarez', imgUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { name: 'Jean Dupont', imgUrl: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { name: 'Takeshi Yamamoto', imgUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { name: 'Kwame Mensah', imgUrl: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { name: 'Ivan Petrov', imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
        { name: 'Joaquim Silva', imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg' },
        { name: 'Ali Reza', imgUrl: 'https://randomuser.me/api/portraits/men/11.jpg' },
        { name: 'David Cohen', imgUrl: 'https://randomuser.me/api/portraits/men/12.jpg' },
        { name: 'Hugo Müller', imgUrl: 'https://randomuser.me/api/portraits/men/13.jpg' },
        { name: 'Marco Romano', imgUrl: 'https://randomuser.me/api/portraits/men/14.jpg' },
        { name: 'Mikhail Ivanov', imgUrl: 'https://randomuser.me/api/portraits/men/15.jpg' },
        { name: 'Ahmed El-Sayed', imgUrl: 'https://randomuser.me/api/portraits/men/16.jpg' },
        { name: 'Thabo Ndlovu', imgUrl: 'https://randomuser.me/api/portraits/men/17.jpg' },
        { name: 'Diego Rodríguez', imgUrl: 'https://randomuser.me/api/portraits/men/18.jpg' },
        { name: 'Chen Wei', imgUrl: 'https://randomuser.me/api/portraits/men/19.jpg' },
        { name: 'Ravi Kumar', imgUrl: 'https://randomuser.me/api/portraits/men/20.jpg' },
        { name: 'Yossi Levi', imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg' },
        { name: 'Avi Shapiro', imgUrl: 'https://randomuser.me/api/portraits/men/22.jpg' },
        { name: 'Eitan Barak', imgUrl: 'https://randomuser.me/api/portraits/men/23.jpg' },
        { name: 'Nadav Elbaz', imgUrl: 'https://randomuser.me/api/portraits/men/24.jpg' },
        { name: 'Tomer Mizrahi', imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg' },
        { name: 'Amina Yusuf', imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { name: 'Yuki Tanaka', imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Isabella Rossi', imgUrl: 'https://randomuser.me/api/portraits/women/3.jpg' },
        { name: 'Fatima Zahra', imgUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'Mei Ling', imgUrl: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { name: 'Nina Petrova', imgUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { name: 'Priya Sharma', imgUrl: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { name: 'Sophia Müller', imgUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
        { name: 'Chloe Dubois', imgUrl: 'https://randomuser.me/api/portraits/women/9.jpg' },
        { name: 'Zara Khan', imgUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
        { name: 'Sofia Lopez', imgUrl: 'https://randomuser.me/api/portraits/women/11.jpg' },
        { name: 'Emily Johnson', imgUrl: 'https://randomuser.me/api/portraits/women/12.jpg' },
        { name: 'Linh Nguyen', imgUrl: 'https://randomuser.me/api/portraits/women/13.jpg' },
        { name: 'Helena Novak', imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg' },
        { name: 'Ama Boateng', imgUrl: 'https://randomuser.me/api/portraits/women/15.jpg' },
        { name: 'Anna Kowalska', imgUrl: 'https://randomuser.me/api/portraits/women/16.jpg' },
        { name: 'Natalie Smith', imgUrl: 'https://randomuser.me/api/portraits/women/17.jpg' },
        { name: 'Leila Rahimi', imgUrl: 'https://randomuser.me/api/portraits/women/18.jpg' },
        { name: 'Maria Gonzalez', imgUrl: 'https://randomuser.me/api/portraits/women/19.jpg' },
        { name: 'Thùy Trang', imgUrl: 'https://randomuser.me/api/portraits/women/20.jpg' },
        { name: 'Yael Cohen', imgUrl: 'https://randomuser.me/api/portraits/women/21.jpg' },
        { name: 'Tamar Ben-Ami', imgUrl: 'https://randomuser.me/api/portraits/women/22.jpg' },
        { name: 'Noa Shaked', imgUrl: 'https://randomuser.me/api/portraits/women/23.jpg' },
        { name: 'Avigail Dahan', imgUrl: 'https://randomuser.me/api/portraits/women/24.jpg' },
        { name: 'Michal Azulay', imgUrl: 'https://randomuser.me/api/portraits/women/25.jpg' }
    ]
    const idx = getRandomIntInclusive(0, fakeBuyers.length - 1)
    return fakeBuyers[idx]
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}