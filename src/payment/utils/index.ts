import { get } from 'lodash';

export function formatDescription(description: string): string[] {
    const listDes = description.split('\n').map((item: string) => item.trim());
    return listDes;
}

export function formatMoney(numberString: string | number): string {
    let number = parseFloat(numberString.toString());
    return number.toLocaleString('VND');
}

export function getMessageError(error: Error): string {
    const messageText = get(error, 'response.data.status');
    if (messageText === 409) {
        return 'Tài khoản đã tồn tại';
    }

    return 'Đăng ký không thành công.';
}
