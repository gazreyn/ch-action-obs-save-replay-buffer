import { CardIO, PropType, PropList, PropItem, PropOptions, WS } from '@casthub/types';
//
import { Scene } from 'obs-websocket-js';


export default class extends window.casthub.card.action {

    constructor() {
        super();

        /**
         * The OBS WebSocket Instance for the action.
         *
         * @type {WS|null}
         */
        this.ws = null;
    }

    /**
     * Called once when the Action is booted on App
     * launch or when installed for the first time.
     *
     * @return {Promise}
     */
    public async mounted(): Promise<void> {

        const { id } = this.identity;
        this.ws = await window.casthub.ws(id);

        await super.mounted();
    }

    /**
     * Called when a Trigger has executed and all Conditions have passed.
     *
     * @param {Object} input The output, if any, from the Trigger.
     */
    public async run(input: CardIO): Promise<void> {
        // 
    }

};
