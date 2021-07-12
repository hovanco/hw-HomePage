import { Response } from 'express';
import { getChannels } from '../../services';

export function priceController(req: any, res: Response) {
    const { user } = req;
    const channels = getChannels();

    return res.render('pages/price', { user, channels });
}
