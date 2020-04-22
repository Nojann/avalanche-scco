import { StoryInteractions } from './storyInteraction.model';

/**
 * A story is a data which represent a sequence in the Game.
 * 
 * name is optional, it's to indicate a special interaction with the story in Game engine.
 *
 * type represent the gameplay background of a Story, for example : Scenery, Video, etc.
 *
 * options are additional information about type Story.
 *
 * components are components associate at the Story.
 */

export interface Story  {
    name: string;
    type: any;
    options: any[];
    components: string[];
    interactions: StoryInteractions;
}
