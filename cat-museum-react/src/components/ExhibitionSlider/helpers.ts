export const dateTimeFormat = new Intl.DateTimeFormat('ru', {day: 'numeric', year: 'numeric', month: 'long'});

export function getShortFormattedDate(date: Date): string {
    const [{value: month}, , {value: day}] = dateTimeFormat.formatToParts(date);
    return month + ' ' + day;
}

export function getFullFormattedDate(date: Date): string {
    const [{value: month}, , {value: day}, , {value: year}] = dateTimeFormat.formatToParts(date);
    return month + ' ' + day + ', ' + year;
}

export function getStatus(type: 'exhibition' | 'competition', status: 'now' | 'future'): string {
    if (type === 'competition') {
        if (status === 'now') return 'текущая';
        return 'предстоящая';
    }
    if (status === 'now') return 'текущий';
    return 'предстоящий';
}