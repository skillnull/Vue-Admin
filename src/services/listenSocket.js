class ListenSocket {
    constructor () {

    }

    onMessage (result) {
        let data = JSON.parse(result)
        switch (data.cmd) {
            case 'caseString':
                // TODO do something
                break
            default:
                // TODO do something
                break
        }
    }
}

export default new ListenSocket()