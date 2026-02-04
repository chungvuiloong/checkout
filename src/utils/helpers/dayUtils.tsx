export function isOfferAvailableToday(days: number[]): boolean {
    const today = new Date().getDay();
    return days.includes(today);
}