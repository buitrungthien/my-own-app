export const decodeBinaryLEDNumber = ledCode => {
    let decodedBinary = '1000000';
    switch (ledCode) {
        case 0b0000:
            return decodedBinary = '1000000';
        case 0b0001:
            return decodedBinary = '1111001';
        case 0b0010:
            return decodedBinary = '0100100';
        case 0b0011:
            return decodedBinary = '0110000';
        case 0b0100:
            return decodedBinary = '0011001';
        case 0b0101:
            return decodedBinary = '0010010';
        case 0b0110:
            return decodedBinary = '0000010';
        case 0b0111:
            return decodedBinary = '1111000';
        case 0b1000:
            return decodedBinary = '0000000';
        case 0b1001:
            return decodedBinary = '0010000';
        default:
            return decodedBinary = '1000000';
    }
};