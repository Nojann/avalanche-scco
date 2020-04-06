import { Character } from './character.model';

export interface Scenery {
    id: number;
    background: string;
    characters: Character[];
    dialog: string[];
}
