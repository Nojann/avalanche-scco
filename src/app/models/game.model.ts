/**
 * A story is a data which represent a sequence in the Game.
 *
 * type represent the gameplay background of a Story, for example : Scenery, Video, etc.
 *
 * options are additional information about type Story.
 *
 * components are components associate at the Story.
 */

export interface Story  {
    type: any;
    options: any;
    components: string[];
}
