import { CardIO, WS } from '@casthub/types';
//


export default class extends window.casthub.card.action {

    ws: WS;

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

        try {
            this.ws = await window.casthub.ws(id);
        } catch (err) {
            console.error(err);
            throw new Error('Unable to connect to OBS Web Socket');
        }

        await super.mounted();
    }

    /**
     * Called when a Trigger has executed and all Conditions have passed.
     *
     * @param {Object} input The output, if any, from the Trigger.
     */
    public async run(input: CardIO): Promise<void> {
        try {
            await this.ws.send('SaveReplayBuffer');
            window.casthub.notify('OBS Replay Saved!');
        } catch (err) {
            window.casthub.notify('OBS Replay Buffer is not running. Unable to save replay');
        }
        
    }

};
