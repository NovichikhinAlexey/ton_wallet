// ton_wallet_connect.js

document.getElementById('connectWalletButton').addEventListener('click', async function() {
    try {
        // Инициализация TonConnect
        const TonConnect = TonConnectSDK.TonConnect;
        const tonConnect = new TonConnect();

        // Ожидание подключения кошелька
        const provider = await tonConnect.connect({
            universalLink: 'https://app.tonkeeper.com/ton-connect', // Универсальная ссылка для TON кошельков, поддерживающих Wallet Connect
            bridgeUrl: 'https://bridge.tonapi.io/bridge', // Бридж для передачи сообщений
        });

        // Получение информации о кошельке
        const walletInfo = await tonConnect.getWallet();

        // Вывод адреса кошелька
        document.getElementById('message').textContent = `Кошелек привязан: ${walletInfo.address}`;

        // Сохранение адреса на сервере
        // fetch('/save-ton-wallet', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ walletAddress: walletInfo.address })
        // });

    } catch (error) {
        console.error('Ошибка при подключении кошелька:', error);
        document.getElementById('message').textContent = 'Ошибка при подключении кошелька.';
    }
});
