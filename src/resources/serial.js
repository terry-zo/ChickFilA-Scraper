/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function between(min, max) {return Math.floor(Math.random() * (max - min) + min).toString()}
function randomDate(start, end) {return new Date(+start + Math.random() * (end - start));}
function paddy(num, padlen) {
    var pad = new Array(1 + padlen).join(0);
    return (pad + num).slice(-pad.length);
}

module.exports = () => {
    /**
    6320106-01336-1109-0523-95
    0970202-03042-1615-0407-06
    7380202-03042-1327-0407-04
    0290202-02145-0847-0523-57
    1280202-02365-1457-1224-59
    2980107-01376-1542-0606-81
    8540104-02465-1226-0807-21
    3040105-02936-0959-0216-66
    5000105-03397-1430-0108-91
    1040104-03154-0811-0413-81
    6760104-03207-1031-0913-82
    9830202-03449-0942-0815-73
    9080202-01071-1457-0502-49
    8130305-02722-1253-0825-23
    4810308-02454-1806-0503-93
    0810105-03346-1447-0131-88
    7100202-01385-1040-0324-57
    4810308-02454-1806-0503-93
    4970810-00931-1419-0823-93
    5450301-03741-1555-0923-62


    Sequence 1 (7-Digits)
    The first 3 represent the last three digits of the Order Number
    The 4th and 6th digits of this first sequence will always be zero
    The 5th digit is assumed to be the revenue center (dine-in: 1, drive-thru: 2, carry-out: 3)
    The 7th digit of this first sequence represents the register that the transaction was carried out on

    Sequence 2 (5-Digits)
    The five-digit number that makes up sequence two is simply the store number printed near the top of the receipt

    Sequence 3 & 4 (4-Digits Each)
    Sequence 3 represents the , followed by the date that the transaction was made on (MM:DD).

    Sequence 5 (2-Digits)
    The first of the two digits in the last sequence is the last number of the year that the transation was made in (9, as of 2019).
    What the second of the last two digits in this sequence represents has not yet been determined.**/

    const seq_1 = between(0, 10) + between(0, 10) + between(0, 10) + "0" + between(1, 4) + "0" + between(1, 10);
    const seq_2 = "0" + paddy(between(900, 3800), 4);

    const current = Date.now();
    const dateObj = randomDate(current - 172800000, current) // between(Date.now() - 172800000, Date.now()); // 172800: 2 days

    const seq_3 = "" + paddy(dateObj.getHours(), 2) + paddy(dateObj.getMinutes(), 2) // time of the transaction (HH:MM)
    const seq_4 = "" + paddy(dateObj.getMonth() + 1, 2) + paddy(dateObj.getDate(), 2) // date that the transaction was made on (MM:DD).
    const seq_5 = "0" + between(1, 10)

    return [seq_1, seq_2, seq_3, seq_4, seq_5].join("-")
    // return [dateObj.getMonth() + 1, dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes()]
};
