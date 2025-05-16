export const formatCardNumber = (n: number): string => {
    const cardStr = String(n)

    if (cardStr.length < 12) {
        throw new Error('Required 12 digest')
    }

    const firstFour = cardStr.slice(0, 4)
    const lastFour = cardStr.slice(-4)
    const masked = '*'.repeat(8) .match(/.{1,4}/g) ?.join(' ')

    return `${firstFour} ${masked} ${lastFour}`
}
