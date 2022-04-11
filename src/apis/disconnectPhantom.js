export const disconnectPhantom = () => {
    if (window['solana']?.isPhantom) {
        window.solana.disconnect();
    }
};
