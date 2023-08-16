const date = new Date()

let year = date.getFullYear(),
    month= date.getMonth(),
    day= date.getDate(),
    hour=date.getHours(),
    minute=date.getMinutes(),
    second=date.getSeconds()

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'November',
        'October',
        'Desember'
    ]
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'

    ]

    console.log(months.length)

    let readableHumanfor = `${day} ${months[month]} ${year}, ${days[day]} ,${hour}:${minute}:${second}}`

    console.log(readableHumanfor)



