export function formatDate(isoDateString: string): string {
    if(!isoDateString) return '';
    const date = new Date(isoDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;