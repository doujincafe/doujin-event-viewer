# Event Viewer

A [Tampermonkey](https://www.tampermonkey.net/) Script to display Doujin Event within dates on online doujin marketplaces such as Suruga-ya, Melonbooks and more.

__PS: The doujin events present here is not complete. If you wish to add more events, please open up a issue, write the events with their dates and then include sources to verify.__

## Usage

Get the latest release [here](https://github.com/aikoofujimotoo/doujin-event-viewer/releases/latest). Select either from `stable` (recommended) or `debug`. Both are the same but `debug` builds contains logger for debugging which slows the time to show the event.

By clicking one of the flavours, it should prompt tampermonkey to install the script otherwise, you need to copy and paste the content to newly created tampermonkey script.

## Compiling from Source

Before you compile the project, ensure you have the latest Node.js and Yarn.

1. Clone the repository: `git clone https://github.com/aikoofujimotoo/doujin-event-viewer.git`
2. Get inside: `cd doujin-event-viewer`
3. Run `yarn build`

## Browser Compatibility

This works on most modern browsers. This script doesn't support IE8 and below (Who uses those anyway).

## License

[MIT](LICENSE)
