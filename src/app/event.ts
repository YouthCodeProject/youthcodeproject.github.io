import { Place } from './place';
import { Cover } from './cover';

export class Event {
    name: string;
    description: string;
    attending_count: number;
    cover: Cover;
    id: string;
    end_time: string;
    place: Place;
    start_time: string;
}
